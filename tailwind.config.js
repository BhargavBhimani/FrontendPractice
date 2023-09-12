/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens : {
      'mobile' : '425px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xlg' : '1200px'
    }
  },
  plugins: [],
}

