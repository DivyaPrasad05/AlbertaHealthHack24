/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-teal': '#73F2DC',
        'blue-words': '#257CBB',
        'blue-hover': '#00DCDC',
      },
      fontFamily: {
        Baloo2: ['Baloo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
