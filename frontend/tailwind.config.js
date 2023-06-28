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
      yellow: "#FFCC38",
      green: "#00ACB0",
      pink: "#E62460",
    },
  },
  plugins: [],
};
