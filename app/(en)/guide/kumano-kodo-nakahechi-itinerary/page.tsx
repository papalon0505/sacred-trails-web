import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const SLUG = 'kumano-kodo-nakahechi-itinerary'
const content = getArticleContent(SLUG)

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['kumano kodo nakahechi itinerary', 'kumano kodo 4 day itinerary', 'nakahechi lodging', 'kumano kodo planning'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/kumano-kodo-nakahechi-itinerary',
  },
}

export default function KumanoKodoNakahechiItineraryPage() {
  return <ArticlePage locale="en" content={content} slug={SLUG} />
}
