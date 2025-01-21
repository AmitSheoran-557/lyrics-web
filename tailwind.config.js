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
          'light-brown': '#333333',
          'light-brown-2': '#14191C',
          'light-black': ' #14191C',
          'light-gray': '#CECECE',
        },
        boxShadow:{
          'custom-1':'0px 10px 10px 0px #31374D1A',
        },
      
      },
    }, 
   plugins: [], 
 };
 
