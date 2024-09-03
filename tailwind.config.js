/** @type {import('tailwindcss').Config} */
const tailwindRtl = require("tailwindcss-rtl");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "menu-blue": "#1B4166",
        "theme-blue": "#094C70",
        "theme-yellow": "#FFC000",
        "theme-green": "#03625F",
        "theme-light-white": "#EEF5FF",
        "theme-cream": "#F1EEE9",
        "section-light-blue": "#c5dff84d",
        "title-light": "#91c8e433",
        "footer-input": "#CACCCF",
      },
    },
  },
  plugins: [tailwindRtl],
};
