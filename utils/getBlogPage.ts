import { cache } from 'react'

import { getBlockTitle, getBlockValue, parsePageId } from 'notion-utils'
import type { ExtendedRecordMap } from 'notion-types'
import { notion } from './notion'

interface BlogPageData {
  pageId: string
  pageTitle: string
  pageContents: ExtendedRecordMap
}

export const getBlogPage = cache(async (pageSlug: string): Promise<BlogPageData | null> => {
  const pageId = parsePageId(pageSlug)

  if (!pageId) {
    return null
  }

  const pageContents = await notion.getPage(pageId)
  const firstBlock = getBlockValue(Object.values(pageContents.block)[0])

  if (!firstBlock) {
    return null
  }

  const pageTitle = getBlockTitle(firstBlock, pageContents)

  return {
    pageId,
    pageTitle,
    pageContents,
  }
})
