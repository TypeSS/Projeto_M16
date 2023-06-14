/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/FrontPageimg.jpg')",
        'loginPage':"url('../src/assets/login.jpg')"
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0)' },
        }},
        animation: {
          slideIn: 'slideIn 1s ease-in-out',
        }
    },
  },
  plugins: [

  ],
}

