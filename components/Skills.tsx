import React from 'react'

interface SkillSetInterface {
  name: string
  skills: string[]
}

const Skills: React.FC<{ data: SkillSetInterface[] }> = ({ data }) => (
  <article className="section">
    <header className="section-header">
      <h2>Skills</h2>
    </header>
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-none">
      {data.map((skillSet) => (
        <div key={`skillSet-${skillSet.name}`}>
          <h3 className="m-0 text-lg text-accentfgbold font-bold">{skillSet.name}</h3>
          <span>{skillSet.skills.join(', ')}</span>
        </div>
      ))}
    </section>
  </article>
)

export default Skills
