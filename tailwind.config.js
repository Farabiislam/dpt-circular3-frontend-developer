/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbarColor:"#1F2937",
        buttonColor:"#2E3791",
        tableColor:"#E5E7EB",
        hrcolor:"#D0D4FC"
      },
  
    },
  },
  plugins: [],
}

