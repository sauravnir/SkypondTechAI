/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Hanken Grotesk", "system-ui", "sans-serif"],
        // body: ["Inter", "system-ui", "sans-serif"], 
        // ui: ["Urbanist", "system-ui", "sans-serif"],
        body: ["Hanken Grotesk", "system-ui", "sans-serif"], 
        ui: ["Hanken Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#F8F9FE",
        altbackground: "#0F0B1F",
        card: "#FFFFFF",
        border: "#E5E7EB",
        heading: "#1E1B4B",
        bodycontent: "#6366F1",
        muted: "#64748B",
        primary: "#6366F1",
        darkprimary:"#4e50bdff",
        "primary-foreground": "#FFFFFF",
        accent: "#06B6D4",
        darkaccent:"#047d92ff"
      },
      fontSize: {
        hero: [
          "clamp(3.5rem, 5vw, 4.5rem)", // 56 → 72px
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],

        h1: [
          "clamp(2.5rem, 4vw, 3.25rem)", // 40 → 52px
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],

        h2: [
          "clamp(2rem, 3vw, 2.5rem)", // 32 → 40px
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],

        h3: [
          "clamp(1.5rem, 2.2vw, 1.875rem)", // 24 → 30px
          { lineHeight: "1.25", letterSpacing: "-0.005em" },
        ],

        paragraph: [
          "clamp(1rem, 1.2vw, 1.125rem)", // 16 → 18px
          { lineHeight: "1.7", letterSpacing: "0rem" },
        ],

        small: [
          "0.875rem", // 14px
          { lineHeight: "1.45", letterSpacing: "0.01em" },
        ],

        button: [
          "0.9375rem", // 15px
          { lineHeight: "1.25", letterSpacing: "0.01em" },
        ],
      },
    },
  },
  plugins: [],
};
