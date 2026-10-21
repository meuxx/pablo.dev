import { NotionAPI } from 'notion-client'
import type { Block, Decoration } from 'notion-types'

export const notion = new NotionAPI()

export const getTitleValue = (block: Block): string | null => {
  const { title } = (block.properties ?? {}) as { title?: Decoration[] }
  const text = title?.[0]?.[0]

  return typeof text === 'string' ? text : null
}
