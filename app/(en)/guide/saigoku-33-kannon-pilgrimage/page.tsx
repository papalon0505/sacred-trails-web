import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const SLUG = 'saigoku-33-kannon-pilgrimage'
const content = getArticleContent(SLUG)

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['saigoku 33 kannon pilgrimage', 'saikoku 33 temples', 'japan kannon pilgrimage', 'kansai temple pilgrimage'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/saigoku-33-kannon-pilgrimage',
  },
}

export default function SaigokuKannonPilgrimagePage() {
  return <ArticlePage locale="en" content={content} slug={SLUG} />
}
