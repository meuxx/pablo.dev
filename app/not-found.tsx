import type { Metadata } from 'next'

import Error from '../components/Error'
import { buildPageMetadata } from '../utils/siteMetadata'

export const metadata: Metadata = buildPageMetadata({
  title: '404 Not found',
  robots: {
    index: false,
    follow: false,
  },
})

const NotFoundPage = () => (
  <main id="main-content">
    <Error title="NOT FOUND" message="You just hit a route that doesn't exist... the sadness." />
  </main>
)

export default NotFoundPage
