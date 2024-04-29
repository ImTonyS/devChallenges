/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        'moradito': '#4036A9',
        'gris': '#CDD5E0'
      }
    },
  },
  plugins: [],
}

