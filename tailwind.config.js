/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        ui: ["Urbanist", "sans-serif"],
      },
      colors: {
        background: "#F9FAFB",
        altbackground: "#020617",
        card: "#FFFFFF",
        border: "#CBD5E1",
        heading: "#0F172A",
        bodycontent: "#CBD5E1",
        muted: "#64748B",
        primary: "#0D9488",
        "primary-foreground": "#FFFFFF",
        accent: "#22D3EE",
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ], // subtle tighter tracking
        h1: [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },	
        ],
        h2: [
          "clamp(1.5rem, 3vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        h3: [
          "clamp(1.25rem, 2.5vw, 1.75rem)",
          { lineHeight: "1.3", letterSpacing: "0em" },
        ],
        paragraph: [
          "clamp(1rem, 1.8vw, 1.125rem)",
          { lineHeight: "1.7", letterSpacing: "0.01em" },
        ],
        small: ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        button: ["1rem", { lineHeight: "1.25", letterSpacing: "0.015em" }],
      },	
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
