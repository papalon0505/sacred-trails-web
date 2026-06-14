import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const content = getArticleContent('camino-packing-list')

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['camino de santiago packing list', 'camino packing list 2026', 'what to pack camino', 'camino gear list', 'camino backpack weight'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/camino-packing-list',
  },
}

export default function CaminoPackingListPage() {
  return <ArticlePage locale="en" content={content} slug="camino-packing-list" />
}
