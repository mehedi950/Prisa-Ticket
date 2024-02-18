/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      font_inter: ["Inter", sans - serif],
      font_raleway: ["Raleway", sans - serif],
    },
    colors: {
      color_primary: "#1DD100",
      color_secondary: "#F78C9C",
      color_dark: "#030712",
      color_dark80: "#030712CC",
      color_dark70: "#030712B3",
      color_dark60: "#03071299",
      color_dark50: "#03071280",
      color_white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
