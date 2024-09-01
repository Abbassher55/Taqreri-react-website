/** @type {import('tailwindcss').Config} */
const tailwindRtl = require("tailwindcss-rtl");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#1B4166",
        "theme-yellow": "#FFC000",
        "theme-green": "#03625F",
        "theme-light-white": "#EEF5FF",
        "theme-cream": "#F1EEE9",
      },
    },
  },
  plugins: [tailwindRtl],
};
