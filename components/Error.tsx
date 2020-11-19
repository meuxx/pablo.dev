import React from 'react'
import Link from 'next/link'

const Experience: React.FC<{ title: string; message: string }> = ({ title, message }) => (
  <section className="section">
    <header className="section-header">
      <h2>{title}</h2>
    </header>
    <p>{message}</p>
    <Link href="/">
      <a href="/" className="sidebar-link text-accentfgbold">
        Home
      </a>
    </Link>
  </section>
)

export default Experience
