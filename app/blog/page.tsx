import type { Metadata } from 'next'

import BlogEntrySummary from '../../components/BlogEntrySummary'
import Section from '../../components/Section'
import getBlogEntries from '../../utils/getBlogEntries'
import { buildNoIndexMetadata } from '../../utils/siteMetadata'

export const dynamic = 'force-static'

export const metadata: Metadata = buildNoIndexMetadata('Blog')

const BlogPage = async () => {
  const entries = await getBlogEntries(true)

  return (
    <main id="main-content">
      <Section title="Blog">
        {entries.map((entry) => (
          <BlogEntrySummary entry={entry} key={`blogEntry-${entry.id}`} />
        ))}
      </Section>
    </main>
  )
}

export default BlogPage
