import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  title: string
  className?: string
}>

const Section = ({ title, className, children }: SectionProps) => (
  <article>
    <header className="mb-8">
      <h2 className="m-0 text-3xl font-bold text-fgbold">{title}</h2>
    </header>
    <section className={className}>{children}</section>
  </article>
)

export default Section
