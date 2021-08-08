import React from 'react'
import { NextSeo } from 'next-seo'

import { NotionAPI } from 'notion-client'
import { GetStaticPaths } from 'next'
import { getBlockTitle, parsePageId } from 'notion-utils'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import Section from '../../components/Section'
import data from '../../content/data.json'
import getBlogEntries from '../../utils/getBlogEntries'

interface Props {
  pageId: string
  pageTitle: string
  pageContents: ExtendedRecordMap
}

export const getStaticPaths: GetStaticPaths<{ entry: string }> = async () => {
  const entries = await getBlogEntries()

  return {
    paths: entries.map((entry) => entry.url),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: { params: { page: string } }): Promise<{ props: Props }> => {
  const notion = new NotionAPI()

  const pageId = parsePageId(params.page)

  const pageContents = await notion.getPage(pageId)

  const keys = Object.keys(pageContents?.block || {})
  const firstBlock = pageContents?.block?.[keys[0]]?.value

  const pageTitle = getBlockTitle(firstBlock, pageContents)

  return {
    props: {
      pageId,
      pageTitle,
      pageContents,
    },
  }
}

const { site } = data

const BlogEntryPage: React.FC<Props> = ({ pageContents, pageTitle }) => {
  return (
    <>
      <NextSeo title={`${pageTitle} | ${site.title}`} noindex />

      <Section title={pageTitle}>
        {/* notion-viewport notion-callout-text notion-asset-wrapper-image */}
        <NotionRenderer recordMap={pageContents} fullPage={false} previewImages={false} darkMode className="p-0 m-0" />
      </Section>
    </>
  )
}

export default BlogEntryPage
