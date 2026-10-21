import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'

import '../styles/globals.css'
import Layout from '../components/Layout'
import { siteMetadata } from '../utils/siteMetadata'
import { sourceSansPro } from './fonts'

config.autoAddCss = false

export const metadata: Metadata = siteMetadata

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en-GB" className={sourceSansPro.variable}>
    <body>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fgbold focus:px-4 focus:py-2 focus:text-bg"
        href="#main-content"
      >
        Skip to content
      </a>
      <Layout>{children}</Layout>
    </body>
  </html>
)

export default RootLayout
