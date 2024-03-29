/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "767px" },
      md: { min: "768px" },
      lg: { min: "976px" },
      xl: { min: "1440px" },
    },
  },
  plugins: [],
};
