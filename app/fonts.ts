import localFont from 'next/font/local'

export const sourceSansPro = localFont({
  src: [
    { path: '../fonts/SourceSansPro-Regular-latin.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/SourceSansPro-Bold-latin.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-source-sans-pro',
})
