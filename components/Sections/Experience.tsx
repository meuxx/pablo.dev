import type { FC } from 'react'
import Section from '../Section'

interface ExperienceItem {
  company: string
  location: string
  period: string
  description: string
}

const Experience: FC<{ data: ExperienceItem[] }> = ({ data }) => (
  <Section title="Experience" className="flex flex-col gap-8">
    {data.map(({ company, location, period, description }) => (
      <div key={`experience-${period}`}>
        <h3 className="text-xl text-fgbold font-bold py-4">
          {company} ({location}) <strong className="block text-accentfgbold text-lg sm:float-right">{period}</strong>
        </h3>
        <div className="leading-7">
          {description.split('\n').map((item, key) => (
            <p key={`experience-${period}-paragraph-${String(key)}`}>{item}</p>
          ))}
        </div>
      </div>
    ))}
  </Section>
)

export default Experience
