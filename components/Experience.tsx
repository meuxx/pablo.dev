import React from 'react'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}

const Experience: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
  <article className="section">
    <header className="section-header">
      <h2>Experience</h2>
    </header>
    {data.map(({ company, location, period, description }) => (
      <section key={`experience-${period}`}>
        <h3 className="text-xl text-fgbold font-bold py-4 md:text-lg">
          {company} ({location}){' '}
          <strong className="block text-accentfgbold text-lg float-right md:text-base sm:float-none">{period}</strong>
        </h3>
        <div className="leading-7">
          {description.split('\n').map((item, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={`experience-${period}-paragraph-${key}`}>
              {item}
              <br />
            </p>
          ))}
        </div>
      </section>
    ))}
  </article>
)

export default Experience
