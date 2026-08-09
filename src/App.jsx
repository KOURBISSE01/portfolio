import Header from "./components/Header";
import Reveal from "./components/Reveal";
import ProjectCard from "./components/ProjectCard";
import Icon from "./components/Icon";

const PROJECTS = [
  {
    title: "NutriVision — AI Nutrition Assistant",
    subtitle: "Build with Gemma Hackathon 2026 · 🥈 2nd place",
    featured: true,
    image: "projects/nutrivision.svg",
    tags: ["Hackathon", "GenAI", "Computer Vision", "Agents"],
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
    image: "projects/air-quality.svg",
    tags: ["Deep Learning", "LSTM", "Forecasting"],
    description:
      "LSTM model predicting PM2.5 concentrations in Delhi from environmental time series, with MICE imputation and AQI alert system.",
    link: "https://github.com/KOURBISSE01/Pr-diction-de-la-Qualit-de-l-Air-par-Deep-Learning",
  },
  {
    title: "WhatsApp Intelligent Chatbot — FSBM",
    image: "projects/whatsapp-bot.svg",
    tags: ["Rasa", "RAG", "Groq"],
    description:
      "University chatbot based on Rasa, RAG pipeline (ChromaDB, sentence-transformers) and Groq, answering academic questions.",
    link: "https://github.com/KOURBISSE01/Chatbot-Intelligent-WhatsApp-FSBM",
  },
  {
    title: "RPA Automation WhatsApp Bot",
    image: "projects/rpa-bot.svg",
    tags: ["RPA", "Selenium", "Pandas"],
    description:
      "Python automation (Selenium + Pandas) for bulk personalized message sending of convocations integrated into a club's recruitment flow.",
    link: "https://github.com/KOURBISSE01/Automatisation-RPA-Bot-WhatsApp",
  },
  {
    title: "Mobile App — Event Management",
    image: "projects/event-app.svg",
    tags: ["Flutter", "Firebase", "QR Code"],
    description:
      "Flutter + Firebase mobile application with QR Code generation and scanning for event presence management.",
    link: "https://github.com/KOURBISSE01/Application-Mobile-de-Gestion-venementielle",
  },
];

const SKILLS = [
  {
    icon: "brain",
    title: "AI & ML",
    items: ["Machine Learning", "Deep Learning", "LSTM", "TensorFlow", "Scikit-learn", "RAG", "Computer Vision", "LLM"],
  },
  {
    icon: "code",
    title: "Languages",
    items: ["Python", "Java", "Kotlin", "C / C++", "JavaScript", "SQL"],
  },
  {
    icon: "chart",
    title: "Data",
    items: ["NumPy", "Pandas", "Matplotlib", "Power BI", "Data Cleaning", "Data Viz"],
  },
  {
    icon: "wrench",
    title: "Tools",
    items: ["Flutter", "Firebase", "Oracle SQL", "Selenium", "Git", "Linux"],
  },
];

const SOCIALS = [
  {
    name: "GitHub",
    label: "@KOURBISSE01",
    href: "https://github.com/KOURBISSE01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.67.41.35.78 1.06.78 2.15v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
    ),
  },
  {
    name: "Email",
    label: "Aymane.kourbisse@gmail.com",
    href: "mailto:Aymane.kourbisse@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "in/kourbisse",
    href: "https://www.linkedin.com/in/aymane-kourbisse",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
    ),
  },
];

function Heading({ num, children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-brand/60" aria-hidden="true" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-medium">
        <span className="text-brand">{num}.</span> {children}
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="dots-bg" aria-hidden="true" />
      <Header />

      <main className="relative z-10 mx-auto max-w-3xl px-5 pb-24">
        {/* HERO */}
        <section id="home" className="flex min-h-screen flex-col items-center justify-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to AI internship & work-study opportunities
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Aymane KOURBISSE
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-lg text-neutral-weak md:text-xl">
              AI & Applications Developer building with{" "}
              <span className="font-semibold text-neutral-strong">Machine Learning</span>,{" "}
              <span className="font-semibold text-neutral-strong">GenAI</span> and{" "}
              <span className="font-semibold text-neutral-strong">AI Agents</span> — turning data into
              decisions.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface py-2 pl-2 pr-5 text-sm font-medium shadow-sm transition-all hover:border-brand/50 hover:shadow-md"
              >
                <img
                  src="profile.png"
                  alt="Aymane KOURBISSE"
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
                />
                About me
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-brand" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section id="about" className="pt-16">
          <Reveal>
            <Heading num="01">About</Heading>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <img
                src="profile.png"
                alt="Aymane KOURBISSE"
                className="h-44 w-44 shrink-0 rounded-card object-cover shadow-lg ring-1 ring-border sm:h-52 sm:w-52"
              />
              <p className="max-w-xl text-lg leading-relaxed text-neutral-medium">
                Junior AI developer specialized in{" "}
                <span className="font-semibold text-neutral-strong">Artificial Intelligence, Machine Learning and GenAI</span>,
                with practical experience in <span className="font-semibold text-neutral-strong">RAG, LLM, Computer Vision</span>{" "}
                and AI agent development. Currently head of the IT cell at the Club des Jeunes Motivés.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "target", title: "Objective", desc: "Contributing to innovative AI solutions in an internship or work-study role." },
              { icon: "graduation", title: "Education", desc: "Excellence License in AI — FS Ben M'Sik. DEUG in Software Development." },
              { icon: "zap", title: "Activities", desc: "Head of IT at Club des Jeunes Motivés. Creative, independent, team player." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-2 rounded-card border border-border bg-surface p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-weak">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pt-24">
          <Reveal>
            <Heading num="02">Skills</Heading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SKILLS.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="h-full rounded-card border border-border bg-surface p-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand">
                        <Icon name={s.icon} className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((tag) => (
                        <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-neutral-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pt-24">
          <Reveal>
            <Heading num="03">Selected work</Heading>
          </Reveal>

          {PROJECTS.filter((p) => p.featured).map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="mt-8 overflow-hidden rounded-card border border-brand/40 bg-surface">
                <div className="relative aspect-[16/8] w-full overflow-hidden md:aspect-[16/7]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    Featured work
                  </span>
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-neutral-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm font-mono text-brand">{p.subtitle}</p>
                <p className="mt-4 leading-relaxed text-neutral-medium">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-neutral-medium">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/50 hover:text-brand"
                >
                  View source
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
                </div>
              </article>
            </Reveal>
          ))}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PROJECTS.filter((p) => !p.featured).map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-24">
          <Reveal>
            <Heading num="04">Contact</Heading>
            <p className="mt-6 text-lg text-neutral-medium">
              I'm open to <span className="font-semibold text-neutral-strong">internship and work-study</span> opportunities
              in AI. Let's build something smart together.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="group flex items-center justify-between rounded-card border border-border bg-surface px-5 py-4 transition-colors hover:border-brand/50"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-faint/50 text-neutral-medium transition-colors group-hover:bg-brand-soft group-hover:text-brand">
                      {s.icon}
                    </span>
                    <span className="font-medium">{s.name}</span>
                  </span>
                  <span className="text-sm text-neutral-weak">{s.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-border pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="text-neutral-weak">
              © {new Date().getFullYear()} Aymane KOURBISSE
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-neutral-weak">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Available for work
              </span>
              <a href="mailto:Aymane.kourbisse@gmail.com" className="text-neutral-medium transition-colors hover:text-brand">
                Get in touch →
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}