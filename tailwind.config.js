/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html","./src/script.js","./src/page2.html"],
  safelist: [{ pattern: /.*/ }], 
  theme: {
    extend: {
      fontFamily:
      {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        gothic: ['SpecialGothicExpandedOne', 'sans-serif'],
        grotesk: ['SpaceGrotesk','sans-serif'],
      }
    },
  },
  plugins: [],
}

