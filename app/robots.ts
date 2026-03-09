import type { MetadataRoute } from 'next'

import { site } from '../utils/siteMetadata'

export const dynamic = 'force-static'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${site.siteUrl}/sitemap.xml`,
  host: site.siteUrl,
})

export default robots
