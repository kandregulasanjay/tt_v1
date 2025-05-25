/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        heading: ['Cera Pro', 'sans-serif'],
        para: ['Altissimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
