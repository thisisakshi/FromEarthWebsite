/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "headerPurple": '#7f82ac',
        "footer": '#f6f6f6'
      }
    },
  },
  plugins: [],
}