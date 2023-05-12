/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/FrontPageimg.jpg')",
        'loginPage':"url('../src/assets/loginPage.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

