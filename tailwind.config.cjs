/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(grid-(rows|cols)-.)|(bg-.)/,
    },
  ],
  theme: {
    extend: {},
  },
}
