/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d63031',
          secondary: '#1b4332',
          accent: '#fad74b',
          neutral: '#919191',
        },
      },
    },
  },
  plugins: [],
}

