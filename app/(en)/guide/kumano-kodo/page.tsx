import type { Metadata } from 'next'
import { GuideArticle } from '@/components/GuideArticle'
import { getGuideContent } from '@/lib/guide-content'

export const metadata: Metadata = {
  title: "Kumano Kodo Guide 2026: Japan's Ancient Pilgrimage Roads",
  description: 'Complete guide to the Kumano Kodo pilgrimage routes in Japan. 4 routes through the sacred Kii Peninsula forest. UNESCO World Heritage. Best time to visit, preparation tips.',
  keywords: ['kumano kodo guide', 'kumano kodo routes', 'nakahechi trail', 'kumano kodo japan'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/kumano-kodo',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide/kumano-kodo',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide/kumano-kodo',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide/kumano-kodo',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide/kumano-kodo',
    },
  },
}

export default function KumanoGuideEn() {
  return <GuideArticle locale="en" content={getGuideContent('kumano-kodo', 'en')} />
}
