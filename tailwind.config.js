const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.svelte"],
   },
  darkMode: 'media', // false or 'media' or 'class'
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
      
    
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: [
              "'montserat'",
              ...defaultTheme.fontFamily.sans,
            ],
            color: '#0F172A',
            h1: {
              fontWeight: '400',
              fontFamily: "'apfel'",
            },
            h2: {
              fontWeight: '400',
              fontFamily: "'apfel'",
            },
            h3: {
              fontWeight: '400',
              fontFamily: "'apfel'",
            },
            h4: {
              fontWeight: '400',
              fontFamily: "'apfel'",
            },
          },
        },
        dark: {
          css: {
            color: '#F8FAFC',
            h1: {
              color: '#F1F5F9',
            },
            h2: {
              color: '#F1F5F9',
            },
            h3: {
              color: '#F1F5F9',
            },
            h4: {
              color: '#F1F5F9',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}