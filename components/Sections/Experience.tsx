import React from 'react'
import Section from '../Section'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}

const Experience: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
  <Section title="Experience" className="space-y-8">
    {data.map(({ company, location, period, description }) => (
      <div key={`experience-${period}`}>
        <h3 className="text-xl text-fgbold font-bold py-4">
          {company} ({location}) <strong className="block text-accentfgbold text-lg sm:float-right">{period}</strong>
        </h3>
        <div className="leading-7">
          {description
            .trim()
            .split('\n')
            .map((item, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`experience-${period}-paragraph-${key}`}>{item}</p>
            ))}
        </div>
      </div>
    ))}
  </Section>
)

export default Experience
