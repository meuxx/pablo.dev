import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import NotionContent from '../../../components/NotionContent'
import Section from '../../../components/Section'
import getBlogEntries from '../../../utils/getBlogEntries'
import { getBlogPage } from '../../../utils/getBlogPage'
import { buildNoIndexMetadata } from '../../../utils/siteMetadata'

interface BlogEntryRouteProps {
  params: Promise<{
    page: string
  }>
}

const getResolvedBlogPage = async (params: BlogEntryRouteProps['params']) => {
  const { page } = await params

  return getBlogPage(page)
}

export const dynamic = 'force-static'
export const dynamicParams = false

export const generateStaticParams = async () => {
  const entries = await getBlogEntries()

  return entries.map((entry) => ({
    page: entry.url.replace('/blog/', ''),
  }))
}

export const generateMetadata = async ({ params }: BlogEntryRouteProps): Promise<Metadata> => {
  const blogPage = await getResolvedBlogPage(params)

  if (!blogPage) {
    return buildNoIndexMetadata('Blog')
  }

  return buildNoIndexMetadata(blogPage.pageTitle)
}

const BlogEntryPage = async ({ params }: BlogEntryRouteProps) => {
  const blogPage = await getResolvedBlogPage(params)

  if (!blogPage) {
    notFound()
  }

  return (
    <main id="main-content">
      <Section title={blogPage.pageTitle}>
        <NotionContent recordMap={blogPage.pageContents} />
      </Section>
    </main>
  )
}

export default BlogEntryPage
