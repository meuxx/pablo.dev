import type { FC } from 'react'

import Avatar from './Avatar'
import SidebarIcons from './SidebarIcons'
import ObfuscatedEmail from './ObfuscatedEmail'

import data from '../content/data.json'
import SidebarLink from './SidebarLink'
import { splitEmail } from '../utils/email'

const getShortUrl = (url: string): string => {
  try {
    const { hostname } = new URL(url)
    const domain = hostname.replace(/^(www\.)?/, '')
    return `${domain.charAt(0).toUpperCase()}${domain.slice(1)}`
  } catch {
    return url
  }
}

const shortUrl = getShortUrl(data.author.organizationUrl)
const email = splitEmail(data.author.email)

const Sidebar: FC = () => {
  return (
    <nav
      aria-label="Primary"
      className={
        'flex min-h-screen flex-col gap-10 bg-texture bg-accentbg px-8 py-16 text-center text-accentfg ' +
        'lg:fixed lg:top-0 lg:left-0 lg:w-80 lg:text-right'
      }
    >
      <header className="w-full leading-10">
        <Avatar />

        <h1 className="font-bold text-3xl leading-loose lg:text-xl lg:leading-8">
          <strong className="block text-fgbold">{data.site.author}</strong> <ObfuscatedEmail email={email} />
        </h1>
      </header>

      <section className="flex-grow font-bold text-2xl w-full">
        <span className="block">{data.author.jobTitle} at</span>
        <SidebarLink label={shortUrl} href={data.author.organizationUrl} title={data.author.organizationName} />
        <span className="block">{`${data.author.city}, ${data.author.country}`}</span>
      </section>

      <SidebarIcons email={email} />
    </nav>
  )
}

export default Sidebar
