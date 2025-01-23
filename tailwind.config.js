/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        
        fontSize: {
          'custom-5xl': '40px',
        },
        colors: {
          'off-white': '#DBDBF3',
          'off-white-two': '#FAFAFF',
          'light-brown': '#333333',
          'light-brown-2': '#14191C',
          'light-gray': '#CECECE',
          'light-gray-2': '#9F9DAB',
          'blue': ' #007BFF',
        },
        boxShadow:{
          'custom-1':'0px 10px 10px 0px #31374D1A',
        },
      
      },
    }, 
   plugins: [], 
 };
 
