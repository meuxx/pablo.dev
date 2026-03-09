import type { FC } from 'react'
import Section from '../Section'

const Hobbies: FC<{ data: string[] }> = ({ data }) => (
  <Section title="Hobbies" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {data.map((hobby) => (
      <h3 key={`hobby-${hobby}`} className="m-0 font-bold">
        {hobby}
      </h3>
    ))}
  </Section>
)

export default Hobbies
