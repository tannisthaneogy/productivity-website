/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lalezar': ['Lalezar', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}