/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/FrontPageimg.jpg')",
        'loginPage':"url('../src/assets/login.jpg')"
      }
    },
  },
  plugins: [

  ],
}

