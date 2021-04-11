import React from 'react'
import { NextSeo } from 'next-seo'
import getBlogEntries, { BlogEntryInfo } from '../../utils/getBlogEntries'
import Section from '../../components/Section'
import data from '../../content/data.json'
import BlogEntrySummary from '../../components/BlogEntrySummary'

interface Props {
  entries: BlogEntryInfo[]
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const entries = await getBlogEntries(true)

  return {
    props: { entries },
  }
}

const { site } = data

const BlogPage: React.FC<Props> = ({ entries = [] }) => {
  return (
    <>
      <NextSeo title={`Blog| ${site.title}`} noindex />

      <Section title="Blog">
        {entries.map((entry) => (
          <BlogEntrySummary entry={entry} key={`blogEntry-${entry.id}`} />
        ))}
      </Section>
    </>
  )
}

export default BlogPage
