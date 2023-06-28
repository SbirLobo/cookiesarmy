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
      secondary: "#E62460",
      tertiary: "#00ACB0",
      quaternary: "#FFCC38",
      quinary: "#EBEBEB",
    },
  },
  plugins: [],
};
