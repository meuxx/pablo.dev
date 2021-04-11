import { NotionAPI } from 'notion-client'
import slugify from 'slugify'

const ROOT_PAGE_ID = '0aea4412918b4bc7925a24ce2b8b9b48'

export interface BlogEntryInfo {
  id: string
  pageId: string
  title: string
  url: string
  summary?: string
}

const notion = new NotionAPI()

const getBlogEntries = async (getSummary = false): Promise<BlogEntryInfo[]> => {
  const pageContents = await notion.getPage(ROOT_PAGE_ID)

  const blocks = Object.values(pageContents.block)

  const pages: Promise<BlogEntryInfo>[] = blocks
    .filter((block) => {
      if (block.value.type !== 'page') return false
      if (block.value.id.replace(/-/g, '') === ROOT_PAGE_ID) return false
      if (typeof block.value.properties.title[0][0] !== 'string') return false

      return true
    })
    .map(async (block) => {
      const title = block.value.properties.title[0][0]
      const currentPageId = block.value.id.replace(/-/g, '')

      const result: BlogEntryInfo = {
        id: block.value.id,
        pageId: currentPageId,
        title,
        url: `/blog/${slugify(title, { strict: true })}-${currentPageId}`,
      }

      if (getSummary) {
        const firstBlock = block.value.content[0]
        const firstBlockContent = Object.values((await notion.getBlocks([firstBlock])).recordMap.block)[0]
        // eslint-disable-next-line prefer-destructuring
        result.summary = firstBlockContent.value.properties.title[0][0]
      }

      return result
    })

  return Promise.all(pages)
}

export default getBlogEntries
