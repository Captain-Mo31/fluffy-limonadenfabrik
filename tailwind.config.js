const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.svelte"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        apfel: [
          "'apfel'",
          ...defaultTheme.fontFamily.sans,
         ],
          montserat: [
            "'montserat'",
            ...defaultTheme.fontFamily.sans,
          ],
       
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
