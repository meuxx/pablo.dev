import type { Metadata } from 'next'

import About from '../components/Sections/About'
import Skills from '../components/Sections/Skills'
import Experience from '../components/Sections/Experience'
import Hobbies from '../components/Sections/Hobbies'
import Section from '../components/Section'
import BlogEntrySummary from '../components/BlogEntrySummary'
import data from '../content/data.json'
import getBlogEntries from '../utils/getBlogEntries'
import { buildPageMetadata, site } from '../utils/siteMetadata'

export const dynamic = 'force-static'

export const metadata: Metadata = buildPageMetadata({
  title: {
    absolute: site.title,
  },
  description: site.description,
  alternates: {
    canonical: site.siteUrl,
  },
})

const { skills, experience, hobbies } = data

const HomePage = async () => {
  const entries = await getBlogEntries(true)

  return (
    <main className="flex flex-col gap-16" id="main-content">
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
      <Hobbies data={hobbies} />
      {entries[0] && (
        <Section title="Blog">
          <BlogEntrySummary entry={entries[0]} />
        </Section>
      )}
    </main>
  )
}

export default HomePage
