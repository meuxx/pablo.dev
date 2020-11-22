import React from 'react'
import useFathomGoal, { GOAL } from '../hooks/useFathomGoal'
import Section from '../Section'

const About: React.FC = () => {
  const handleGoal = useFathomGoal(GOAL.CV)

  return (
    <Section title="About me">
      <p>
        I&apos;m <strong>Pablo Maceda</strong>, Software Engineer with a solid background as back-end developer
        currently focused on NodeJS and React. I have a broad technical skill set, passion for clean code and good
        performance.
      </p>

      <a
        className={`inline-block transition-color border-2 border-accentfgbold text-accentfgbold rounded-md font-bold px-12 py-2 mt-4
          hover:text-fgbold hover:border-fgbold focus:text-fgbold focus:border-fgbold`}
        href="https://cv.pablo.dev"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Curriculum Vitae"
        title="Curriculum Vitae"
        onClick={handleGoal}
      >
        View CV
      </a>
    </Section>
  )
}

export default About
