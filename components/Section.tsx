import React from 'react'

const Section: React.FC<{ title: string; className?: string }> = ({ title, className, children }) => (
  <article className="section">
    <header className="mb-8">
      <h2 className="text-fgbold font-bold m-0 text-3xl">{title}</h2>
    </header>
    <section className={className}>{children}</section>
  </article>
)

export default Section
