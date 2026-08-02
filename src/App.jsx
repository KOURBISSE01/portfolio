import React, { useState, useEffect } from "react";
import Starfield from "./components/Starfield";

const PROJECTS = [
  {
    title: "NutriVision — AI Nutrition Assistant",
    subtitle: "Build with Gemma Hackathon 2026 · 🥈 2nd place",
    featured: true,
    tags: ["🏆 Hackathon", "GenAI", "Computer Vision", "Agents"],
    description:
      "AI nutrition assistant that analyzes food photos, detects Moroccan dishes with YOLOv8 (70 dishes), provides nutritional analysis via Gemma 4B, and generates personalized recommendations and meal plans based on health conditions.",
    points: [
      "Multi-agent architecture (vision, RAG, nutrition, supervisor)",
      "MFOOD YOLOv8 detection + Gemma LLM analysis",
      "RAG with ChromaDB · React + Vite frontend · Flask backend · Firebase",
    ],
    link: "https://github.com/BLD933/NutriVision",
  },
  {
    title: "Air Quality Prediction — LSTM",
    tags: ["Deep Learning", "LSTM", "Forecasting"],
    description:
      "LSTM model predicting PM2.5 concentrations in Delhi from environmental time series, with MICE imputation and AQI alert system.",
    link: "https://github.com/KOURBISSE01/Pr-diction-de-la-Qualit-de-l-Air-par-Deep-Learning",
  },
  {
    title: "WhatsApp Intelligent Chatbot — FSBM",
    tags: ["Rasa", "RAG", "Groq"],
    description:
      "University chatbot based on Rasa, RAG pipeline (ChromaDB, sentence-transformers) and Groq, answering academic questions.",
    link: "https://github.com/KOURBISSE01/Chatbot-Intelligent-WhatsApp-FSBM",
  },
  {
    title: "RPA Automation WhatsApp Bot",
    tags: ["RPA", "Selenium", "Pandas"],
    description:
      "Python automation (Selenium + Pandas) for bulk personalized message sending of convocations integrated into a club's recruitment flow.",
    link: "https://github.com/KOURBISSE01/Automatisation-RPA-Bot-WhatsApp",
  },
  {
    title: "Mobile App — Event Management",
    tags: ["Flutter", "Firebase", "QR Code"],
    description:
      "Flutter + Firebase mobile application with QR Code generation and scanning for event presence management.",
    link: "https://github.com/KOURBISSE01/Application-Mobile-de-Gestion-venementielle",
  },
];

const SKILLS = [
  { icon: "🧠", title: "AI & ML", items: ["Machine Learning", "Deep Learning", "LSTM", "TensorFlow", "Scikit-learn", "RAG", "Computer Vision", "LLM"] },
  { icon: "💻", title: "Languages", items: ["Python", "Java", "Kotlin", "C / C++", "JavaScript", "SQL"] },
  { icon: "📊", title: "Data", items: ["NumPy", "Pandas", "Matplotlib", "Power BI", "Data Cleaning", "Data Viz"] },
  { icon: "🛠️", title: "Tools", items: ["Flutter", "Firebase", "Oracle SQL", "Selenium", "Git", "Linux"] },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Starfield />

      {/* Overlay gradient to guarantee readability */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />

      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-ink/80 backdrop-blur-md border-b border-line" : "bg-transparent"}`}>
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <img src="logo.svg" alt="Logo" className="h-10 w-auto" />
          </button>
          <ul className="hidden md:flex gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className={`text-sm font-medium transition-colors ${active === n.id ? "text-neon" : "text-gray-400 hover:text-white"}`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => scrollTo("contact")} className="text-sm px-4 py-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-ink transition-colors md:inline hidden">
            Let's talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full pt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/40 bg-emerald/10 text-emerald text-xs font-mono tracking-wide">
              🏆 2nd place — Build with Gemma Hackathon 2026
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Aymane <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-emerald to-violet">KOURBISSE</span>
            </h1>
            <p className="mt-3 text-xl font-medium text-neon">AI & Applications Developer</p>
            <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
              Specialized in <span className="text-white">Machine Learning, GenAI & AI Agents</span> — RAG, LLM, Computer Vision. I build intelligent solutions that turn data into decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" onClick={() => scrollTo("projects")} className="px-6 py-3 rounded-full bg-neon text-ink font-semibold hover:shadow-lg hover:shadow-neon/30 transition-all">
                View Projects
              </a>
              <a href="mailto:Aymane.kourbisse@gmail.com" className="px-6 py-3 rounded-full border border-gray-600 hover:border-neon hover:text-neon transition-colors">
                Contact me
              </a>
            </div>
            <div className="mt-12 flex gap-3 text-2xl">
              {[
                { icon: "🐙", href: "https://github.com/KOURBISSE01" },
                { icon: "✉️", href: "mailto:Aymane.kourbisse@gmail.com" },
                { icon: "📄", href: "https://kourbisse01.github.io/portfolio/" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener" className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-700 hover:border-neon hover:text-neon transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile cutout — transparent background, no circle */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="profile-cutout.png"
              alt="Aymane KOURBISSE"
              className="w-56 h-72 md:w-72 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono"><span className="text-neon">01.</span> About</h2>
          <div className="mt-4 h-px w-full bg-line" />
          <p className="mt-6 max-w-3xl text-gray-300 leading-relaxed">
            Junior AI developer specialized in <span className="text-white">Artificial Intelligence, Machine Learning and GenAI</span>, with practical experience in <span className="text-white">RAG, LLM, Computer Vision</span> and AI agent development. Currently leader of the IT cell at the Club des Jeunes Motivés.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Objective", desc: "Contribute to innovative AI solutions within an internship or work-study program." },
              { icon: "🎓", title: "Education", desc: "Excellence License in AI — FS Ben M'Sik. DEUG Software Development." },
              { icon: "⚡", title: "Activities", desc: "Head of IT at Club des Jeunes Motivés. Creative, independent, team player." },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-line hover:border-neon/50 transition-colors">
                <div className="text-2xl">{c.icon}</div>
                <h3 className="mt-3 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono"><span className="text-neon">02.</span> Skills</h2>
          <div className="mt-4 h-px w-full bg-line" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-line">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-ink border border-line rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono"><span className="text-neon">03.</span> Projects</h2>
          <div className="mt-4 h-px w-full bg-line" />

          {/* Featured */}
          {PROJECTS.filter((p) => p.featured).map((p) => (
            <article key={p.title} className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-card to-ink-2 border border-neon/40">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-neon/10 border border-neon/40 text-neon rounded-full">{t}</span>
                ))}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
              <p className="text-sm text-emerald font-mono mt-1">{p.sub}</p>
              <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">{p.description}</p>
              <ul className="mt-4 list-disc list-inside text-sm text-gray-400 space-y-1">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <a href={p.link} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon text-ink font-semibold hover:shadow-lg hover:shadow-neon/30 transition-all">
                ⚙ View source <span aria-hidden>{p.arrow ?? "→"}</span>
              </a>
            </article>
          ))}

          {/* Grid */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {PROJECTS.filter((p) => !p.featured).map((p) => (
              <article key={p.title} className="group p-6 rounded-2xl bg-card border border-line hover:border-neon/50 transition-colors">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="px-2.5 py-0.5 text-xs bg-ink border border-line rounded-full text-gray-300">{t}</span>)}
                </div>
                <h3 className="mt-3 font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{p.description}</p>
                <a href={p.link} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 text-sm text-neon hover:text-emerald transition-colors">
                  Code source <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-mono"><span className="text-neon">04.</span> Contact</h2>
          <div className="mt-4 h-px w-full bg-line" />
          <p className="mt-6 text-gray-300">I'm open to internship and work-study opportunities in AI. Let's build something smart together.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✉️", label: "Email", value: "Aymane.kourbisse@gmail.com", href: "mailto:Aymane.kourbisse@gmail.com" },
              { icon: "📱", label: "Phone", value: "+212 6 57 94 93 75", href: "tel:+212657949375" },
              { icon: "🐙", label: "GitHub", value: "@KOURBISSE01", href: "https://github.com/KOURBISSE01" },
              { icon: "🌐", label: "Portfolio", value: "Live site", href: "https://kourbisse01.github.io/portfolio/" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="p-6 rounded-2xl bg-card border border-line hover:border-neon transition-colors">
                <div className="text-2xl">{c.icon}</div>
                <div className="mt-3 text-xs text-gray-500 uppercase tracking-wide">{c.label}</div>
                <div className="mt-1 text-sm font-medium break-words">{c.value}</div>
              </a>
            ))}
          </div>
          <p className="mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Aymane KOURBISSE · AI & Applications Developer</p>
        </div>
      </section>
    </div>
  );
}