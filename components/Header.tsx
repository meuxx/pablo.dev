import React, { useMemo } from 'react'
import useFathomGoal from './hooks/useFathomGoal'

import Avatar from './Avatar'
import Footer from './Footer'

import data from '../content/data.json'

const getShortUrl = (url: string): string => {
  try {
    const { hostname } = new URL(url)
    const domain = hostname.replace(/^(www\.)?/, '')
    return `${domain.charAt(0).toUpperCase()}${domain.slice(1)}`
  } catch (e) {
    return url
  }
}

const Header: React.FC = () => {
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleOrganizationGoal = useFathomGoal('HBXPURPT')

  const shortUrl = useMemo(() => getShortUrl(data.author.organizationUrl), [])

  return (
    <header
      className={
        'flex flex-col items-end justify-between bg-texture bg-accentbg bg-repeat bg-fixed text-accentfg h-full text-right fixed top-0 left-0 px-8 py-16 w-80 ' +
        'lg:relative lg:min-h-screen lg:w-full lg:text-center md:py-8'
      }
    >
      <div className="flex-grow flex-shrink-0 w-full">
        <Avatar />

        <h1 className="font-bold text-xl lg:text-3xl lg:leading-loose md:text-2xl">
          <strong className="text-fgbold">{data.site.author}</strong>
          <br />{' '}
          <a
            className="sidebar-link"
            href={`mailto:${data.author.email}`}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Contact email"
            title="Contact email"
            onClick={handleMailGoal}
          >
            {data.author.email}
          </a>
        </h1>

        <br />

        <h2 className="font-bold text-xl">
          {data.author.jobTitle} at{' '}
          <a
            className="sidebar-link"
            href={data.author.organizationUrl}
            rel="noopener noreferrer"
            target="_blank"
            title={data.author.organizationName}
            onClick={handleOrganizationGoal}
          >
            {shortUrl}
          </a>
          <br />
          {`${data.author.city}, ${data.author.country}`}
        </h2>
      </div>

      <Footer />
    </header>
  )
}

export default Header
