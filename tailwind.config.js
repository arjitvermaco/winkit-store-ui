/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "winkit-yellow":"#fdcb56",
        "winkit-green":"#44b236"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
