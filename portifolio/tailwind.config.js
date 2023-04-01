/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  darkMode:"class",
  theme: {
    extend: {
       colors: {
      "lightGray":'#D9D9D9'
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
   
  },
  plugins: [],
}
