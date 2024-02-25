/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue: {
        500: "#3250FF"
      },
      gray: {
        50: "#f0f1f3",
        100: "#E0E2E7",
        200: "#C2C6CE",
        400: "#858D9D",
        500: "#667085"
      },
      black: {
        300: "#777980",
        400: "#4A4C56",
        500: "#1D1F2C",
      },
      green: {
        50: '#E9FAF7',
        600: '#1A9882'
      },
      red: {
        50: "#FEECEE",
        500: "#EB3D4D"
      },
      orange: {
        50: '#FFF0EA',
        500: '#F86624'
      },
      cyan: {
        50: "#EAF8FF",
        500: "#2BB2FE"
      }
    }
  },
  plugins: [],
}

