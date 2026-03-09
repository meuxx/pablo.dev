import { cache } from 'react'
import slugify from 'slugify'

import { getTitleValue, notion } from './notion'

const ROOT_PAGE_ID = '0aea4412918b4bc7925a24ce2b8b9b48'
import type { NotionBlock } from './notion'

export interface BlogEntryInfo {
  id: string
  pageId: string
  title: string
  url: string
  summary?: string
}

const getSummaryFromBlock = cache(async (blockId: string): Promise<string | undefined> => {
  const firstBlockContent = Object.values((await notion.getBlocks([blockId])).recordMap.block)[0] as
    | NotionBlock
    | undefined

  return firstBlockContent ? (getTitleValue(firstBlockContent) ?? undefined) : undefined
})

const getBlogEntries = cache(async (getSummary = false): Promise<BlogEntryInfo[]> => {
  const pageContents = await notion.getPage(ROOT_PAGE_ID)

  const blocks = Object.values(pageContents.block) as NotionBlock[]

  const pages: Promise<BlogEntryInfo>[] = blocks
    .filter((block) => {
      const blockId = block.value?.id
      const title = getTitleValue(block)

      if (block.value?.type !== 'page') return false
      if (typeof blockId !== 'string' || blockId.replace(/-/g, '') === ROOT_PAGE_ID) return false
      return title;
    })
    .map(async (block) => {
      const title = getTitleValue(block)
      const currentBlockId = block.value?.id

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
        const firstBlockId = block.value?.content?.[0]

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
