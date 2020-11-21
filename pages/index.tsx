import React, { HTMLAttributes } from 'react'
import { NextSeo } from 'next-seo'

import About from '../components/Sections/About'
import Skills from '../components/Sections/Skills'
import Experience from '../components/Sections/Experience'
import Hobbies from '../components/Sections/Hobbies'

import data from '../content/data.json'

const { site, skills, experience, hobbies } = data

declare module 'react' {
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    site?: string
    'included-domains'?: string
  }
}

const Home: React.FC = () => (
  <>
    <NextSeo title={site.title} description={site.description} canonical={site.siteUrl} />
    <div className="space-y-16 my-12 mx-8 md:my-16 md:mx-16">
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
      <Hobbies data={hobbies} />
    </div>
  </>
)

export default Home
