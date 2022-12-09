/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      'mont': ['Montserrat'],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      transparent: 'transparent',
      wh : '#fefcf3',
      blk : '#1c1c1c',
      grn : '#00d930',
    },
    extend: {},
  },
  plugins: [],
}
