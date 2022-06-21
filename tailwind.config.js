/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'ultra': ['133px', '152px'],
        'lg': ['18px', '35px'],
        '2xl': ['24px', '38.8px']
      },
      colors: {
        'dark-gray': '#151515'
      },
      backgroundImage: {
        'pattern': "url('/image.png')",
        'grid-lines': "url('/grid-lines.svg')",
      }
    },
  },
}
