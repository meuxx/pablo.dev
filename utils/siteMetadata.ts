import type { Metadata } from 'next'

import data from '../content/data.json'
import openGraphImage from '../images/open_graph.jpg'

export const { site } = data

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.siteUrl,
    title: site.title,
    siteName: site.author,
    description: site.description,
    images: [
      {
        url: openGraphImage.src,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [openGraphImage.src],
  },
  other: {
    image: openGraphImage.src,
  },
}

export const buildPageMetadata = (metadata: Metadata = {}): Metadata => ({
  description: site.description,
  openGraph: {
    description: site.description,
    ...metadata.openGraph,
  },
  ...metadata,
})

export const buildNoIndexMetadata = (title: string): Metadata =>
  buildPageMetadata({
    title,
    robots: {
      index: false,
      follow: true,
    },
  })
