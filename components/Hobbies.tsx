import React from 'react'

const Hobbies: React.FC<{ data: string[] }> = ({ data }) => (
  <section className="section">
    <header className="section-header">
      <h2>Hobbies</h2>
    </header>
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
      {data.map((hobby) => (
        <div key={`hobby-${hobby}`}>
          <h3 className="m-0 font-bold">{hobby}</h3>
        </div>
      ))}
    </div>
  </section>
)

export default Hobbies
