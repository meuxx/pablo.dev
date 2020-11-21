import React from 'react'

const Hobbies: React.FC<{ data: string[] }> = ({ data }) => (
  <article className="section">
    <header className="section-header">
      <h2>Hobbies</h2>
    </header>
    <section className="grid grid-cols-4 gap-3 sm:grid-cols-2">
      {data.map((hobby) => (
        <h3 key={`hobby-${hobby}`} className="m-0 font-bold">
          {hobby}
        </h3>
      ))}
    </section>
  </article>
)

export default Hobbies
