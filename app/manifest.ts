import type { MetadataRoute } from 'next'

import { site } from '../utils/siteMetadata'

export const dynamic = 'force-static'

const manifest = (): MetadataRoute.Manifest => ({
  name: site.title,
  short_name: 'pablo.dev',
  description: site.description,
  start_url: '/',
  display: 'standalone',
  background_color: '#0E0E0E',
  theme_color: '#034577',
  icons: [
    {
      src: '/icon?size=192',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icon?size=512',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/apple-icon',
      sizes: '180x180',
      type: 'image/png',
    },
  ],
})

export default manifest
