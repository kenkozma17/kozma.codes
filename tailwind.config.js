/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "ken-light-gray": "#E0E0E0",
        "ken-dark-gray": "#d4d4d4",
        "ken-mid-gray": "#747474",
        "ken-gray": "#FAFAFA",
        "ken-about-gray": "#F7F7F9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
