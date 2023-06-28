/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
      },
    },
    colors: {
      primary: "#002743",
      secondary: "#EBEBEB",
      tertiary: "#e4c467",
    },
  },
  plugins: [],
};
