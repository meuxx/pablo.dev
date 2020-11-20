import React, { useMemo } from 'react'
import useFathomGoal from './hooks/useFathomGoal'

import Avatar from './Avatar'
import SidebarFooter from './SidebarFooter'

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

const Sidebar: React.FC = () => {
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleOrganizationGoal = useFathomGoal('HBXPURPT')

  const shortUrl = useMemo(() => getShortUrl(data.author.organizationUrl), [])

  return (
    <div
      className={
        'space-y-10 flex flex-col items-end justify-between bg-texture bg-accentbg bg-repeat text-accentfg h-full px-8 py-16 ' +
        'fixed top-0 left-0 w-80 text-right ' +
        'lg:relative lg:min-h-screen lg:w-full lg:text-center'
      }
    >
      <div className="w-full leading-10">
        <Avatar />

        <h1 className="font-bold text-xl lg:text-3xl leading-8 lg:leading-loose">
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
      </div>

      <h2 className="flex-grow font-bold text-2xl w-full">
        {data.author.jobTitle} at{' '}
        <a
          className="inline-block sidebar-link"
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

      <SidebarFooter />
    </div>
  )
}

export default Sidebar