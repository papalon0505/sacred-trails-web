import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const content = getArticleContent('first-pilgrimage')

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['first pilgrimage guide', 'camino vs kumano kodo', 'best pilgrimage for beginners', 'pilgrimage comparison', 'how to prepare for pilgrimage'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/first-pilgrimage',
  },
}

export default function FirstPilgrimagePage() {
  return <ArticlePage locale="en" content={content} slug="first-pilgrimage" />
}
