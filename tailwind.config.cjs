/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        ui: ["Urbanist", "sans-serif"],
      },

      colors: {
        background: "#F9FAFB",
        card: "#FFFFFF",
        border: "#CBD5E1",
        heading: "#0F172A",
        body: "#475569",
        muted: "#64748B",
        primary: "#4338CA",
        "primary-foreground": "#FFFFFF",
        accent: "#6366F1",
      },

      fontSize: {
        hero: ["72px", { lineHeight: "1.1" }],
        h1: ["48px", { lineHeight: "1.15" }],
        h2: ["36px", { lineHeight: "1.2" }],
        h3: ["28px", { lineHeight: "1.3" }],
        paragraph: ["18px", { lineHeight: "1.7" }],
        small: ["14px", { lineHeight: "1.4" }],
        button: ["16px", { lineHeight: "1.25" }],
      },
    },
  },
  plugins: [],
};
