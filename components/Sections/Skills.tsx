import React from 'react'
import Section from '../Section'

interface SkillSetInterface {
  name: string
  skills: string
}

const Skills: React.FC<{ data: SkillSetInterface[] }> = ({ data }) => (
  <Section title="Skills" className="grid gap-4 sm:grid-cols-2">
    {data.map((skillSet) => (
      <div key={`skillSet-${skillSet.name}`}>
        <h3 className="m-0 text-lg text-accentfgbold font-bold">{skillSet.name}</h3>
        <span>{skillSet.skills}</span>
      </div>
    ))}
  </Section>
)

export default Skills
