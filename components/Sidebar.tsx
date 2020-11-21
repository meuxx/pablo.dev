import React, { useMemo } from 'react'
import useFathomGoal from './hooks/useFathomGoal'

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
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleOrganizationGoal = useFathomGoal('HBXPURPT')

  const shortUrl = useMemo(() => getShortUrl(data.author.organizationUrl), [])

  return (
    <nav
      className={
        'space-y-10 flex flex-col items-end justify-between bg-texture bg-accentbg bg-repeat text-accentfg h-full px-8 py-16 ' +
        'fixed top-0 left-0 w-80 text-right ' +
        'lg:relative lg:min-h-screen lg:w-full lg:text-center'
      }
    >
      <header className="w-full leading-10">
        <Avatar />

        <h1 className="font-bold text-xl lg:text-3xl leading-8 lg:leading-loose">
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
