import type { Metadata } from 'next'
import { ArticlePage } from '@/components/ArticlePage'
import { getArticleContent } from '@/lib/article-content'

const SLUG = 'dual-pilgrim-certificate'
const content = getArticleContent(SLUG)

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDesc,
  keywords: ['dual pilgrim certificate', 'camino kumano kodo dual pilgrim', 'dual pilgrim guide', 'kumano camino certificate'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/dual-pilgrim-certificate',
  },
}

export default function DualPilgrimCertificatePage() {
  return <ArticlePage locale="en" content={content} slug={SLUG} />
}
