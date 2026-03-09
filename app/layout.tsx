import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../styles/globals.css'
import AxeDev from '../components/AxeDev'
import Layout from '../components/Layout'
import { siteMetadata } from '../utils/siteMetadata'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faEnvelope)

export const metadata: Metadata = siteMetadata

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en-GB">
    <body>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fgbold focus:px-4 focus:py-2 focus:text-bg"
        href="#main-content"
      >
        Skip to content
      </a>
      <AxeDev />
      <Layout>{children}</Layout>
    </body>
  </html>
)

export default RootLayout
