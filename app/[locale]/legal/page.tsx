import type { Metadata } from 'next'
import { LegalPageView } from '@/components/LegalPageView'
import { getLegalContent } from '@/lib/legal-content'
import { LOCALIZED, ALL_LOCALES, BASE_URL, localePath, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const c = getLegalContent(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/legal')}`
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/legal')}`, languages },
  }
}

export default async function LegalLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  return <LegalPageView locale={l} content={getLegalContent(l)} />
}
