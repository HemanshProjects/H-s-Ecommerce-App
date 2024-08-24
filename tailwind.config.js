/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "Poppins, sans-serif",
        Merriweather: "Merriweather, serif",
      }
    },
  },
  plugins: [],
}

