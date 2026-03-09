import Link from 'next/link'
import type { FC } from 'react'
import type { BlogEntryInfo } from '../utils/getBlogEntries'

const BlogEntrySummary: FC<{ entry: BlogEntryInfo }> = ({ entry }) => {
  return (
    <div>
      <h3 className="block pb-4">
        <Link
          href={entry.url}
          className={`text-accentfgbold font-bold text-xl transition-colors border-b border-dotted
        hover:text-fgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
        >
          {entry.title}
        </Link>
      </h3>
      <p>{entry.summary}</p>
      <Link
        href={entry.url}
        className={`text-fgbold font-bold transition-colors border-b border-dotted
        hover:text-accentfgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
      >
        Continue reading...
      </Link>
    </div>
  )
}

export default BlogEntrySummary
