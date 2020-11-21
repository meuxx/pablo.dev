const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: {
  //   // mode: 'all',
  //   // preserveHtmlElements: false,
  //   content: [
  //     './pages/**/*.{js,jsx,ts,tsx}',
  //     './components/**/*.{js,jsx,ts,tsx}',
  //   ],
  // },
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundImage: (theme) => ({
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
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      // '2xl': {'max': '1800px'},
      // 'xl': {'max': '1280px'},
      // 'lg': {'max': '980px'},
      // 'md': {'max': '736px'},
      // 'sm': {'max': '480px'},
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
}
