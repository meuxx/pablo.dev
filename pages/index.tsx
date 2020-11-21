import React, { HTMLAttributes } from 'react'
import { NextSeo } from 'next-seo'

import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

import data from '../content/data.json'
import Hobbies from '../components/Hobbies'

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
    <div className="space-y-16 my-16 ml-16 mr-96 xl:mr-16 md:my-6 md:mx-6">
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
      <Hobbies data={hobbies} />
    </div>
  </>
)

export default Home
