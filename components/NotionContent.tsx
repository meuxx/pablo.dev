'use client'

import { NotionRenderer } from 'react-notion-x'
import type { ExtendedRecordMap } from 'notion-types'

interface NotionContentProps {
  recordMap: ExtendedRecordMap
}

const NotionContent = ({ recordMap }: NotionContentProps) => (
  <div className="notion-content-wrapper">
    <NotionRenderer recordMap={recordMap} fullPage={false} previewImages={false} darkMode />
  </div>
)

export default NotionContent
