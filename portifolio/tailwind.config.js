/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  darkMode:"class",
  theme: {
    extend: {
       colors: {
      "lightGray":'#D9D9D9',
      "azureBlue":'#37A2DE',
      'olive':'#748666',
      'redShade':'#C72828',
      'jaguar':'#181818'
      
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
   
  },
  plugins: [],
}
