// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#A8DADC",
          DEFAULT: "#457B9D",
          dark: "#1D3557",
          turquoise: "#1ABC9C",
          deep: "#0B3C5D",
          wave: "#006D77",
          foam: "#EDF6F9",
        },
      },
    },
  },
  plugins: [],
};
