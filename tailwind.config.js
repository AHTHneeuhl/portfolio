/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        P50: "#c7c7ed",
        P75: "#9b9eb7",
        P100: "#727699",
        P200: "#353b6d",
        P300: "#0c134f",
        P400: "#080d37",
        P500: "#070c30",
      },
      neutral: {
        N0: "#ffffff",
        N10: "#fafbfb",
        N50: "#c2c7d0",
        N100: "#7a8699",
        N200: "#6b788e",
        N300: "#5d6b82",
        N400: "#505f79",
        N500: "#42526d",
        N600: "#354764",
        N700: "#243757",
        N800: "#15294b",
        N900: "#091e42",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
    },
    extend: {},
  },
  plugins: [],
};
