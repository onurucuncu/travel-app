/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Rubik fontunu tanımlıyoruz
      },
      colors: {
        darky: '#3b444f', // 'darky' adında yeni bir renk tanımlıyoruz
      },
    },
  },
  plugins: [],
}
