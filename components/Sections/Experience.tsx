import React from 'react'
import Section from '../Section'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}

const Experience: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
  <Section title="Experience">
    {data.map(({ company, location, period, description }) => (
      <div key={`experience-${period}`}>
        <h3 className="text-xl text-fgbold font-bold py-4 md:text-lg">
          {company} ({location}){' '}
          <strong className="block text-accentfgbold text-lg float-right md:text-base sm:float-none">{period}</strong>
        </h3>
        <div className="leading-7">
          {description
            .trim()
            .split('\n')
            .map((item, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`experience-${period}-paragraph-${key}`}>
                {item}
                <br />
              </p>
            ))}
        </div>
      </div>
    ))}
  </Section>
)

export default Experience
