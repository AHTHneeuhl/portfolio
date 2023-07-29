/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#c7c7ed",
        75: "#9b9eb7",
        100: "#727699",
        200: "#353b6d",
        300: "#0c134f",
        400: "#080d37",
        500: "#070c30",
      },
      neutral: {
        0: "#ffffff",
        10: "#fafbfb",
        50: "#c2c7d0",
        100: "#7a8699",
        200: "#6b788e",
        300: "#5d6b82",
        400: "#505f79",
        500: "#42526d",
        600: "#354764",
        700: "#243757",
        800: "#15294b",
        900: "#091e42",
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
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
    extend: {},
  },
  plugins: [],
};
