export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--page) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "neutral-strong": "rgb(var(--neutral-strong) / <alpha-value>)",
        "neutral-medium": "rgb(var(--neutral-medium) / <alpha-value>)",
        "neutral-weak": "rgb(var(--neutral-weak) / <alpha-value>)",
        "neutral-faint": "rgb(var(--neutral-faint) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-strong": "rgb(var(--brand-strong) / <alpha-value>)",
        "brand-soft": "rgb(var(--brand-soft) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
        card: "1rem",
      },
    },
  },
  plugins: [],
};