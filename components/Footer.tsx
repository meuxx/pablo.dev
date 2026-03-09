import type { FC } from 'react'
import SidebarLink from './SidebarLink'

const Footer: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <footer className={`${className} pt-8 text-xs text-accentfgbold text-center`}>
      <span>
        <SidebarLink
          href="https://github.com/meuxx/pablo.dev/"
          label="View source on GitHub"
          title="Source on GitHub"
        />
      </span>
      <span className="font-bold"> · </span>
      <span>This site does not use analytics cookies or tracking scripts.</span>
    </footer>
  )
}

export default Footer
