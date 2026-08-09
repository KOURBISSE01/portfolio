import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
      const scrollPos = window.scrollY + 160;
      let current = "";
      for (const s of sections) {
        if (s.offsetTop <= scrollPos) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="w-full max-w-md sm:max-w-lg">
        <div className="flex items-center justify-between gap-2 rounded-full border border-border bg-surface/80 p-1.5 pl-4 shadow-lg backdrop-blur-xl">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "home")}
            className="whitespace-nowrap text-sm font-semibold tracking-tight"
          >
            Aymane<span className="text-brand">.</span>
          </a>
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => scrollTo(e, n.id)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === n.id
                      ? "bg-neutral-faint/70 text-neutral-strong"
                      : "text-neutral-weak hover:text-neutral-strong"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pl-1">
              <span className="mx-1 h-5 w-px bg-neutral-faint" aria-hidden="true" />
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;