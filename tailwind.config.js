/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'ultra': ['133px', '152px'],
        'semi-ultra': ['76px', '92px'],
        'light-ultra': ['63px', '76px'],
        'lg': ['18px', '35px'],
        '2xl': ['24px', '38.8px'],
        '3xl': ['26px', '42px']
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: 'translatey(0px)' },
          "50%": { transform: 'translatey(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floater: "float 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite"
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      colors: {
        'dark-gray': '#151515',
        'light-green': '#EFFFE2',
        'mid-gray': '#C7C7C7'
      },
      backgroundImage: {
        'pattern': "url('/image.png')",
        'grid-lines': "url('/grid-lines.svg')",
        'scores-gradient': "linear-gradient(142deg, rgba(216,227,213,0) 0%, rgba(33,46,30,0) 20%, rgba(29,31,28,0.7847339619441527) 74%, rgba(28,28,28,1) 100%)",
        'scores-gradient-2': "linear-gradient(180deg, rgba(216,227,213,1) 0%, rgba(33,46,30,1) 15%, rgba(33,46,30,1) 100%)"
      }
    },
  },
}
