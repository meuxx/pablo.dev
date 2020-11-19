import React from 'react'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}

const Experience: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
  <section className="section">
    <header className="section-header">
      <h2>Experience</h2>
    </header>
    {data.map(({ company, location, period, description }, index) => (
      <article key={`experience-${index}`}>
        <h3 className="text-xl text-fgbold font-bold py-4 md:text-lg">
          {company} ({location}) <strong className="block text-accentfgbold float-right sm:float-none">{period}</strong>
        </h3>
        <p className="leading-7">{description}</p>
      </article>
    ))}
  </section>
)

export default Experience
