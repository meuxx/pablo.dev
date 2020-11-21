import React from 'react'

const Section: React.FC<{ title: string }> = ({ title, children }) => (
  <article className="section">
    <header className="mb-8">
      <h2 className="text-fgbold font-bold m-0 text-3xl">{title}</h2>
    </header>
    <section>{children}</section>
  </article>
)

export default Section
