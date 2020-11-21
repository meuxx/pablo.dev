import React from 'react'
import Link from 'next/link'

const Experience: React.FC<{ title: string; message: string }> = ({ title, message }) => (
  <article className="section">
    <header className="section-header">
      <h2>{title}</h2>
    </header>
    <section>
      <p>{message}</p>
    </section>
    <footer>
      <Link href="/">
        <a href="/" className="sidebar-link text-accentfgbold">
          Home
        </a>
      </Link>
    </footer>
  </article>
)

export default Experience
