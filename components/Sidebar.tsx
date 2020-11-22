import React, { useMemo } from 'react'
import useFathomGoal, { GOAL } from './hooks/useFathomGoal'

import Avatar from './Avatar'
import SidebarIcons from './SidebarIcons'

import data from '../content/data.json'
import SidebarLink from './SidebarLink'

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
  const handleMailGoal = useFathomGoal(GOAL.MAIL)
  const handleOrganizationGoal = useFathomGoal(GOAL.ORG)

  const shortUrl = useMemo(() => getShortUrl(data.author.organizationUrl), [])

  return (
    <nav
      className={
        'space-y-10 flex flex-col bg-texture bg-accentbg text-accentfg px-8 py-16 text-center min-h-screen ' +
        'lg:fixed lg:top-0 lg:left-0 lg:w-80 lg:text-right'
      }
    >
      <header className="w-full leading-10">
        <Avatar />

        <h1 className="font-bold text-3xl leading-loose lg:text-xl lg:leading-8">
          <strong className="block text-fgbold">{data.site.author}</strong>{' '}
          <SidebarLink
            label={data.author.email}
            href={`mailto:${data.author.email}`}
            title="Contact email"
            onClick={handleMailGoal}
          />
        </h1>
      </header>

      <section className="flex-grow font-bold text-2xl w-full">
        <span className="block">{data.author.jobTitle} at</span>
        <SidebarLink
          label={shortUrl}
          href={data.author.organizationUrl}
          title={data.author.organizationName}
          onClick={handleOrganizationGoal}
        />
        <span className="block">{`${data.author.city}, ${data.author.country}`}</span>
      </section>

      <SidebarIcons />
    </nav>
  )
}

export default Sidebar
