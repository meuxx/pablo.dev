import React from 'react'

const SidebarLink: React.FC<{
  label: string
  href: string
  title: string
  onClick: () => void
}> = ({ label, href, title, onClick }) => (
  <a
    className={`transition-colors border-b border-dotted 
    hover:text-fgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    title={title}
    aria-label={title}
    onClick={onClick}
  >
    {label}
  </a>
)

export default SidebarLink
