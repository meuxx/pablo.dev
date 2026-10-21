'use client'

import type { FC, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { type EmailParts, getDecoyMailto, openEmail } from '../utils/email'

const SidebarIcons: FC<{ email: EmailParts }> = ({ email }) => {
  const icons: { href: string; label: string; icon: IconDefinition; onClick?: (e: MouseEvent) => void }[] = [
    {
      href: getDecoyMailto(email),
      label: 'Email',
      icon: faEnvelope,
      onClick: openEmail(email),
    },
    {
      href: 'https://github.com/meuxx',
      label: 'GitHub',
      icon: faGithub,
    },
    {
      href: 'https://www.linkedin.com/in/pablo-maceda',
      label: 'LinkedIn',
      icon: faLinkedin,
    },
  ]

  return (
    <div className="relative inset-auto w-full flex-shrink-0" aria-label="Social links">
      <ul className="flex justify-center gap-1 lg:justify-end">
        {icons.map((icon) => (
          <li className="inline-block" key={`sidebar-icons-${icon.label}`}>
            <a
              className="transition-colors text-2xl px-1 text-accentfglight relative hover:text-fgbold focus:text-fgbold"
              href={icon.href}
              rel="noopener noreferrer"
              target={icon.href.startsWith('mailto:') ? undefined : '_blank'}
              aria-label={icon.label}
              title={icon.label}
              onClick={icon.onClick}
            >
              <FontAwesomeIcon icon={icon.icon} />
              <span className="hidden">{icon.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarIcons
