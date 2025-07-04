// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#A8DADC", // azul claro
          DEFAULT: "#457B9D", // azul oceânico médio
          dark: "#1D3557", // azul escuro profundo
        },
        seafoam: "#B2DFDB", // verde-água suave
      },
    },
  },
  plugins: [],
};
