import React, { ReactElement, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../styles/globals.css'
import data from '../content/data.json'
import openGraphImage from '../images/open_graph.jpg'
import Layout from '../components/Layout'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faEnvelope)

const { site } = data

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  import('@axe-core/react').then(({ default: axe }) => axe(React, ReactDOM, 1000))
}

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('XMVFXWIR', {
      includedDomains: ['pablo.dev'],
      url: 'https://haddock.pablo.dev/script.js',
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: site.siteUrl,
          title: site.title,
          site_name: site.author,
          description: site.description,
          images: [
            {
              url: openGraphImage.src,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'image',
            content: openGraphImage.src,
          },
        ]}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
