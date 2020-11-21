import React from 'react'
import Section from '../Section'

const Hobbies: React.FC<{ data: string[] }> = ({ data }) => (
  <Section title="Hobbies">
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
      {data.map((hobby) => (
        <h3 key={`hobby-${hobby}`} className="m-0 font-bold">
          {hobby}
        </h3>
      ))}
    </div>
  </Section>
)

export default Hobbies
