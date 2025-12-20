/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      primary: "#4F46E5",
      accent: "#38BDF8",
      dark: "#0F172A",
      muted: "#64748B",
      background: "#F8FAFC",
    },
    },
  },
  plugins: [],
};
