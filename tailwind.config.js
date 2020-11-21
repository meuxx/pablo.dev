const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundImage: () => ({
      texture: "url('/img/background.png')",
    }),
    colors: {
      bg: '#101010',
      fg: '#a2a2a2',
      fgbold: '#ffffff',
      fglight: '#b2b2b2',
      accentbg: '#033E6B',
      accentfg: 'rgba(255,255,255,0.5)',
      accentfgbold: '#0B61A4',
      accentfglight: 'rgba(255,255,255,0.4)',
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
}
