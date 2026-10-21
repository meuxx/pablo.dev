import { cache } from 'react'
import slugify from 'slugify'
import { getBlockValue } from 'notion-utils'
import type { Block } from 'notion-types'

import { getTitleValue, notion } from './notion'

const ROOT_PAGE_ID = '0aea4412918b4bc7925a24ce2b8b9b48'

export interface BlogEntryInfo {
  id: string
  pageId: string
  title: string
  url: string
  summary?: string
}

const getSummaryFromBlock = cache(async (blockId: string): Promise<string | undefined> => {
  const firstBlockContent = getBlockValue(Object.values((await notion.getBlocks([blockId])).recordMap.block)[0])

  return firstBlockContent ? (getTitleValue(firstBlockContent) ?? undefined) : undefined
})

const getBlogEntries = cache(async (getSummary = false): Promise<BlogEntryInfo[]> => {
  const pageContents = await notion.getPage(ROOT_PAGE_ID)

  const blocks = Object.values(pageContents.block)
    .map((block) => getBlockValue(block))
    .filter((block): block is Block => block !== undefined)

  const pages: Promise<BlogEntryInfo>[] = blocks
    .filter((block) => {
      if (block.type !== 'page') return false
      if (typeof block.id !== 'string' || block.id.replace(/-/g, '') === ROOT_PAGE_ID) return false
      return getTitleValue(block)
    })
    .map(async (block) => {
      const title = getTitleValue(block)
      const currentBlockId = block.id

      if (!title || typeof currentBlockId !== 'string') {
        throw new Error('Invalid Notion page data while building blog entries')
      }

      const currentPageId = currentBlockId.replace(/-/g, '')

      const result: BlogEntryInfo = {
        id: currentBlockId,
        pageId: currentPageId,
        title,
        url: `/blog/${slugify(title, { strict: true })}-${currentPageId}`,
      }

      if (getSummary) {
        const firstBlockId = block.content?.[0]

        if (typeof firstBlockId === 'string') {
          const summary = await getSummaryFromBlock(firstBlockId)

          if (summary) {
            result.summary = summary
          }
        }
      }

      return result
    })

  return Promise.all(pages)
})

export default getBlogEntries
