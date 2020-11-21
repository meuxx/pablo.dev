import React from 'react'
import useFathomGoal from './hooks/useFathomGoal'

const About: React.FC = () => {
  const handleGoal = useFathomGoal('V5LKNTOU')

  return (
    <article className="section">
      <header className="section-header">
        <h2>About me</h2>
      </header>

      <section>
        <p>
          I&apos;m <strong>Pablo Maceda</strong>, Software Engineer offering 6 years of experience, with a solid
          background as PHP developer currently focused on NodeJS and React. I have a broad technical skill set, passion
          for clean code and good performance. With excellent problem-solving skills and the ability to work effectively
          as part of a team or on my own.
        </p>
        <p>As a self-taught developer, I always enjoy learning new tools and technologies.</p>

        <a
          className={`inline-block transition-color border-2 border-accentfgbold text-accentfgbold rounded-md font-bold px-12 py-2
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
      </section>
    </article>
  )
}

export default About
