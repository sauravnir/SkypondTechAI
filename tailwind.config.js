/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Hanken Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        ui: ["Urbanist", "system-ui", "sans-serif"],
      },
      colors: {
       background: "#F9FAFB",

        altbackground: "#0b0b0bff",

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
    "clamp(72px, 4vw, 3.5rem)",
    { lineHeight: "1.1", letterSpacing: "-0.015em" },
  ],

  h1: [
    "clamp(40px, 3vw, 2.5rem)",
    { lineHeight: "1.15", letterSpacing: "-0.01em" },
  ],

  h2: [
    "clamp(1.375rem, 2.5vw, 2rem)",
    { lineHeight: "1.2", letterSpacing: "-0.005em" },
  ],

  h3: [
    "clamp(1.125rem, 2vw, 1.5rem)",
    { lineHeight: "1.3", letterSpacing: "0em" },
  ],

  paragraph: [
    "clamp(0.95rem, 1.5vw, 1.05rem)",
    { lineHeight: "1.65", letterSpacing: "0em" },
  ],

  small: [
    "0.875rem",
    { lineHeight: "1.4", letterSpacing: "0.01em" },
  ],

  button: [
    "0.95rem",
    { lineHeight: "1.2", letterSpacing: "0.01em" },
  ],
}
,
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
