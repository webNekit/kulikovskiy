/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: "Ubuntu, sans-serif",
      },
      colors: {
        'white': '#fff',
        'black': '#000',
        'green': {
          DEFAULT: '#009746',
        },
      },
    },
  },
  plugins: [],
}