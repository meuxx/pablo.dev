import React from 'react'
import SidebarLink from './SidebarLink'
import useFathomGoal, { GOAL } from './hooks/useFathomGoal'

const Footer: React.FC<{ className: string }> = ({ className = '' }) => {
  const handleSourceGoal = useFathomGoal(GOAL.SOURCE)
  const handleFathomGoal = useFathomGoal(GOAL.FATHOM)

  return (
    <footer className={`${className} pt-8 text-xs text-accentfgbold text-center`}>
      <span>
        <SidebarLink
          href="https://github.com/meuxx/pablo.dev/"
          label="View source on GitHub"
          title="Source on GitHub"
          onClick={handleSourceGoal}
        />
      </span>
      <span className="font-bold"> · </span>
      <span>
        <>This site uses privacy-focused </>
        <SidebarLink
          href="https://usefathom.com/ref/JOQ4WL"
          label="Fathom Analytics"
          title="Fathom Analytics"
          onClick={handleFathomGoal}
        />
        <> and does not track or collect personal data</>
      </span>
    </footer>
  )
}

export default Footer
