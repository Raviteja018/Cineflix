/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violetish: '#646cff', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}