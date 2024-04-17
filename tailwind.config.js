/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom1: "#f7f7f7",
        accent: "#DFE698",
      },

      fontFamily: {
        title: ["Quicksand", "sans-serrif"],
        body: ["Montserrat", "sans-serrif"],
      },
    },
  },
  plugins: [],
};
