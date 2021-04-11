const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundImage: () => ({
      texture: "url('../images/background.png')",
    }),
    colors: {
      bg: '#0E0E0E',
      fg: '#a2a2a2',
      fgbold: '#ffffff',
      fglight: '#b2b2b2',
      accentbg: '#034577',
      accentfg: 'rgba(255,255,255,0.5)',
      accentfgbold: '#0B7DD5',
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
