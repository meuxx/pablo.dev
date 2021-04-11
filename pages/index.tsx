import React, { HTMLAttributes } from 'react'
import { NextSeo } from 'next-seo'

import About from '../components/Sections/About'
import Skills from '../components/Sections/Skills'
import Experience from '../components/Sections/Experience'
import Hobbies from '../components/Sections/Hobbies'

import data from '../content/data.json'
import Section from '../components/Section'
import getBlogEntries, { BlogEntryInfo } from '../utils/getBlogEntries'
import BlogEntrySummary from '../components/BlogEntrySummary'

const { site, skills, experience, hobbies } = data

declare module 'react' {
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    site?: string
    'included-domains'?: string
  }
}

interface Props {
  entries: BlogEntryInfo[]
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const entries = await getBlogEntries(true)

  return {
    props: { entries },
  }
}

const HomePage: React.FC<Props> = ({ entries }) => (
  <>
    <NextSeo title={site.title} description={site.description} canonical={site.siteUrl} />
    <div className="space-y-16">
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
      <Hobbies data={hobbies} />
      <Section title="Blog">
        <BlogEntrySummary entry={entries[0]} />
      </Section>
    </div>
  </>
)

export default HomePage
