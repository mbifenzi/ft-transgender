/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'global': "url('../public/assets/background.jpeg')",
      }
    },
  },
  plugins: [],
}