import type { Metadata } from 'next'
import { DualPilgrimPage } from '@/components/DualPilgrimPage'
import { getDualPilgrimContent } from '@/lib/dual-pilgrim-content'
import { LOCALIZED, ALL_LOCALES, BASE_URL, localePath, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const c = getDualPilgrimContent(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/dual-pilgrim')}`
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/dual-pilgrim')}`, languages },
  }
}

export default async function DualPilgrimLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  return <DualPilgrimPage locale={l} content={getDualPilgrimContent(l)} />
}
