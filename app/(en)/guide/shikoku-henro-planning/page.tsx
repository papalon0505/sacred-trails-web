import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const SLUG = 'shikoku-henro-planning'
const content = getArticleContent(SLUG)

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['shikoku henro planning', '88 temple pilgrimage guide', 'shikoku pilgrimage walking', 'ohenro route planning'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/shikoku-henro-planning',
  },
}

export default function ShikokuHenroPlanningPage() {
  return <ArticlePage locale="en" content={content} slug={SLUG} />
}
