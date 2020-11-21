import React from 'react'
import Link from 'next/link'
import Section from './Section'

const Experience: React.FC<{ title: string; message: string }> = ({ title, message }) => (
  <Section title={title}>
    <p>{message}</p>

    <Link href="/">
      <a
        href="/"
        className={`text-accentfgbold font-bold text-xl transition-colors border-b border-dotted
        hover:text-fgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
      >
        Home
      </a>
    </Link>
  </Section>
)

export default Experience
