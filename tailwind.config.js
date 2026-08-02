export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0f1e",
        "ink-2": "#0f1628",
        card: "#121a30",
        line: "#1f2a4a",
        neon: "#22d3ee",
        emerald: "#6ee7b7",
        violet: "#a78bfa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};