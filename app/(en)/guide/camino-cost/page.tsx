import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const content = getArticleContent('camino-cost')

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['camino de santiago cost', 'how much does camino cost', 'camino budget 2026', 'camino daily expenses', 'camino accommodation cost'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/camino-cost',
  },
}

export default function CaminoCostPage() {
  return <ArticlePage locale="en" content={content} slug="camino-cost" />
}
