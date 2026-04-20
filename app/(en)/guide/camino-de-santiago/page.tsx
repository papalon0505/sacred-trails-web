import type { Metadata } from 'next'
import { GuideArticle } from '@/components/GuideArticle'
import { getGuideContent } from '@/lib/guide-content'

export const metadata: Metadata = {
  title: 'Camino de Santiago — Complete Guide 2026: Routes, Distance & Tips',
  description: 'Complete guide to the Camino de Santiago. 12 routes from the Camino Francés to the Primitivo. Distances, difficulty, stages, certification, and how to prepare.',
  keywords: ['camino de santiago guide', 'camino de santiago routes', 'camino frances guide', 'camino portugues guide', 'walking camino de santiago'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/camino-de-santiago',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide/camino-de-santiago',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide/camino-de-santiago',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide/camino-de-santiago',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide/camino-de-santiago',
    },
  },
}

export default function CaminoGuideEn() {
  return <GuideArticle locale="en" content={getGuideContent('camino-de-santiago', 'en')} />
}
