module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.svelte"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
