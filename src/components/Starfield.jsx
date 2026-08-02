import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Starfield() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 55;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ── Particles ─────────────────────────────────────────────
    const geometry = new THREE.BufferGeometry();
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [new THREE.Color("#22d3ee"), new THREE.Color("#6ee7b7"), new THREE.Color("#a78bfa"), new THREE.Color("#ffffff")];

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 160;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 160;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── Connection lines (subtle) ──────────────────────────────
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(count * 2 * 3);
    for (let i = 0; i < count; i++) {
      const ix = i * 6;
      const pos = positions[i * 3];
      linePositions[ix] = pos;
      linePositions[ix + 3] = pos;
    }
    const lines = null; // kept simple: skip lines for cleaner look

    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation ──────────────────────────────────────────────
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      particles.rotation.y += 0.0004;
      particles.rotation.x += 0.0001;

      camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" aria-hidden="true" />;
}