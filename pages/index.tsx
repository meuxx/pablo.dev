import React, { HTMLAttributes } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

import data from '../content/data.json'

const { site, skills, experience } = data

declare module 'react' {
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    site?: string
    'included-domains'?: string
  }
}

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>{site.title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <script
        key="gatsby-plugin-fathom"
        src="https://haddock.pablo.dev/script.js"
        included-domains="pablo.dev"
        site="XMVFXWIR"
        defer
      />
      ,
    </Head>
    <NextSeo
      description={site.description}
      canonical={site.siteUrl}
      openGraph={{
        type: 'website',
        url: site.siteUrl,
        title: site.title,
        site_name: site.author,
        description: site.description,
        images: [
          {
            url: `${site.siteUrl}/img/open_graph.jpg`,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'image',
          content: `${site.siteUrl}/img/open_graph.jpg`,
        },
      ]}
    />

    <div className="space-y-16 my-16 ml-16 mr-96 xl:mr-16 md:my-6 md:mx-6">
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
    </div>
  </Layout>
)

export default Home
