import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import useFathomGoal from './hooks/useFathomGoal'

const SidebarIcons: React.FC = () => {
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleGitHubGoal = useFathomGoal('TUDCIJWD')
  const handleLinkedInGoal = useFathomGoal('VN1YOMWA')

  const icons: { href: string; label: string; onClick: () => void; icon: FontAwesomeIconProps['icon'] }[] = [
    {
      href: 'mailto:contact@pablo.dev',
      label: 'Email',
      onClick: handleMailGoal,
      icon: ['far', 'envelope'],
    },
    {
      href: 'https://github.com/meuxx',
      label: 'GitHub',
      onClick: handleGitHubGoal,
      icon: ['fab', 'github'],
    },
    {
      href: 'https://www.linkedin.com/in/pablo-maceda',
      label: 'LinkedIn',
      onClick: handleLinkedInGoal,
      icon: ['fab', 'linkedin'],
    },
  ]

  return (
    <footer className="relative flex-shrink-0 w-full inset-auto">
      <ul className="space-x-2">
        {icons.map((icon) => (
          <li className="inline-block">
            <a
              className="transition-colors text-2xl px-1 text-accentfglight relative hover:text-fgbold focus:text-fgbold"
              href={icon.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={icon.label}
              title={icon.label}
              onClick={icon.onClick}
            >
              <FontAwesomeIcon icon={[icon.icon[0], icon.icon[1]]} />
              <span className="hidden">{icon.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default SidebarIcons
