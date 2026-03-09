import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

const SidebarIcons: FC = () => {
  const icons: { href: string; label: string; icon: IconProp }[] = [
    {
      href: 'mailto:contact@pablo.dev',
      label: 'Email',
      icon: ['far', 'envelope'],
    },
    {
      href: 'https://github.com/meuxx',
      label: 'GitHub',
      icon: ['fab', 'github'],
    },
    {
      href: 'https://www.linkedin.com/in/pablo-maceda',
      label: 'LinkedIn',
      icon: ['fab', 'linkedin'],
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
              target="_blank"
              aria-label={icon.label}
              title={icon.label}
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
