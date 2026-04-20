import type { Metadata } from 'next'
import { GuideArticle } from '@/components/GuideArticle'
import { getGuideContent } from '@/lib/guide-content'

export const metadata: Metadata = {
  title: 'Shikoku 88 Temple Pilgrimage — Complete Guide 2026',
  description: 'Complete guide to the Shikoku Henro: 1,200km circuit of 88 Buddhist temples. Distance, difficulty, cost, preparation, and what to expect walking in the footsteps of Kōbō Daishi.',
  keywords: ['shikoku henro guide', 'shikoku 88 temple pilgrimage', 'ohenro guide', 'shikoku henro app'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/shikoku-henro',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide/shikoku-henro',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide/shikoku-henro',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide/shikoku-henro',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide/shikoku-henro',
    },
  },
}

export default function ShikokuGuideEn() {
  return <GuideArticle locale="en" content={getGuideContent('shikoku-henro', 'en')} />
}
