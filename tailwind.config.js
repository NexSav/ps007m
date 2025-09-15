/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f05048',
          secondary: '#478c01',
          accent: '#fad74b',
        },
      },
    },
  },
  plugins: [],
}

