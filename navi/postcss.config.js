// postcss.config.js
module.exports = {
  plugins: {
    // use o plugin separado, não o 'tailwindcss' genérico
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
