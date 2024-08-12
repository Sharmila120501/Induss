/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        contentFont: ['"Roboto Slab"', "serif"],
        navfont: ['"Oswald"', "sans-serif"],
        headingfont: ['"Lora"', "serif"],
      },
    },
  },
  plugins: [],
};
