// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#A0F0E6", // água rasa
          DEFAULT: "#22D3EE", // tom principal
          dark: "#0369A1", // profundo
        },
        seafoam: "#6EE7B7", // verde água
      },
    },
  },
  plugins: [],
};
