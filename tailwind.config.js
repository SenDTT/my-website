/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F3E8EE",
          text: "#3A3F5A",
          logo: "#9E768F",
          accent: "#C9A9E9",
          border: "#E8DCE5",
          toggle: "#D7C7E2",
          toggleBall: "#FFF5FA",
        },
        // Pastel Dream Dark (Unchanged)
        dark: {
          bg: "#2A2438",
          text: "#E2D6E8",
          logo: "#D4A7C9",
          accent: "#B392D6",
          border: "#5C5470",
          toggle: "#4B4266",
          toggleBall: "#F8E8F0",
        },
      },
    },
  },
  plugins: [],
};
