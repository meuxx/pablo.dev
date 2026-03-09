import { NotionAPI } from 'notion-client'

export interface NotionBlockValue {
  id?: string
  type?: string
  content?: string[]
  properties?: {
    title?: [string, ...string[]][]
  }
}

export interface NotionBlock {
  value?: NotionBlockValue
}

export const notion = new NotionAPI()

export const getTitleValue = (block: NotionBlock): string | null => {
  const title = block.value?.properties?.title?.[0]?.[0]

  return typeof title === 'string' ? title : null
}
