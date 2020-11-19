import React from 'react'

interface SkillSetInterface {
  name: string
  skills: string[]
}

const Skills: React.FC<{ data: SkillSetInterface[] }> = ({ data }) => (
  <section className="section">
    {/*Section*/}
    <header className="section-header">
      {/*SectionHeader*/}
      <h2>Skills</h2>
    </header>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-none">
      {/*SkillSetWrapper*/}
      {data.map((skillSet, index) => (
        <div key={`skillSet-${index}`}>
          <h3 className="m-0 text-accentfgbold font-bold">{skillSet.name}</h3>
          {/*SkillSetTitle*/}
          <span>{skillSet.skills.join(', ')}</span>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
