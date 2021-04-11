import Link from 'next/link'
import React from 'react'
import { BlogEntryInfo } from '../utils/getBlogEntries'

const BlogEntrySummary: React.FC<{ entry: BlogEntryInfo }> = ({ entry }) => {
  return (
    <div key={`blogEntry-${entry.id}`}>
      <h3 className="block pb-4">
        <Link href={entry.url}>
          <a
            className={`text-accentfgbold font-bold text-xl transition-colors border-b border-dotted
        hover:text-fgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
          >
            {entry.title}
          </a>
        </Link>
      </h3>
      <p>{entry.summary}</p>
      <Link href={entry.url}>
        <a
          className={`text-fgbold font-bold transition-colors border-b border-dotted
        hover:text-accentfgbold hover:border-transparent focus:text-fgbold focus:border-transparent`}
        >
          Continue reading...
        </a>
      </Link>
    </div>
  )
}

export default BlogEntrySummary
