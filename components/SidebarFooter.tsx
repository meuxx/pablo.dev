import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFathomGoal from './hooks/useFathomGoal'

const SidebarFooter: React.FC = () => {
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleGitHubGoal = useFathomGoal('TUDCIJWD')
  const handleLinkedInGoal = useFathomGoal('VN1YOMWA')

  return (
    <div className="relative flex-shrink-0 w-full inset-auto">
      <ul className="space-x-4">
        <li className="sidebar-icon">
          <a
            className="sidebar-icon-link"
            href="mailto:contact@pablo.dev"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Email"
            title="Email"
            onClick={handleMailGoal}
          >
            <FontAwesomeIcon icon={['far', 'envelope']} />
            <span className="hidden">Email</span>
          </a>
        </li>
        <li className="sidebar-icon">
          <a
            className="sidebar-icon-link"
            href="https://github.com/meuxx"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
            onClick={handleGitHubGoal}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className="hidden">GitHub</span>
          </a>
        </li>
        <li className="sidebar-icon">
          <a
            className="sidebar-icon-link"
            href="https://www.linkedin.com/in/pablo-maceda"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            title="LinkedIn"
            onClick={handleLinkedInGoal}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            <span className="hidden">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SidebarFooter
