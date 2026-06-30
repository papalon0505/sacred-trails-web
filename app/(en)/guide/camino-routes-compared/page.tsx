import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const SLUG = 'camino-routes-compared'
const content = getArticleContent(SLUG)

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['camino routes compared', 'best camino route', 'camino frances vs portugues', 'camino del norte difficulty'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/camino-routes-compared',
  },
}

export default function CaminoRoutesComparedPage() {
  return <ArticlePage locale="en" content={content} slug={SLUG} />
}
