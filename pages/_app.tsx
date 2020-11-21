import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../styles/globals.css'
import data from '../content/data.json'
import Layout from '../components/Layout'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faEnvelope)

const { site } = data
const siteUrl = 'https://next.pablo.page'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_GB',
        url: siteUrl,
        title: site.title,
        site_name: site.author,
        description: site.description,
        images: [
          {
            url: `${siteUrl}/img/open_graph.jpg`,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'image',
          content: `${siteUrl}/img/open_graph.jpg`,
        },
      ]}
      dangerouslySetAllPagesToNoFollow // TODO
      dangerouslySetAllPagesToNoIndex // TODO
    />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
