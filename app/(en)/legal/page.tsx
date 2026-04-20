import type { Metadata } from 'next'
import { LegalPageView } from '@/components/LegalPageView'
import { getLegalContent } from '@/lib/legal-content'

export const metadata: Metadata = {
  title: 'Legal Notice — Sacred Trails',
  description: 'Legal notice and site operator information for Sacred Trails (sacredtrails.evelyn-ai.com).',
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/legal',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/legal',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/legal',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/legal',
      'es': 'https://sacredtrails.evelyn-ai.com/es/legal',
    },
  },
}

export default function LegalEnPage() {
  return <LegalPageView locale="en" content={getLegalContent('en')} />
}
