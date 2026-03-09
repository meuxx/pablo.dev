import type { MetadataRoute } from 'next'

import getBlogEntries from '../utils/getBlogEntries'
import { site } from '../utils/siteMetadata'

export const dynamic = 'force-static'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const blogEntries = await getBlogEntries()

  return [
    {
      url: `${site.siteUrl}/`,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${site.siteUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...blogEntries.map((entry) => ({
      url: `${site.siteUrl}${entry.url}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}

export default sitemap
