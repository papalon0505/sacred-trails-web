import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { GuideArticle } from '@/components/GuideArticle'
import { getGuideContent } from '@/lib/guide-content'
import { LOCALIZED, ALL_LOCALES, BASE_URL, localePath, type Locale } from '@/lib/i18n'

const SLUG = 'camino-de-santiago'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const c = getGuideContent(SLUG, l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, `/guide/${SLUG}`)}`
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, `/guide/${SLUG}`)}`, languages },
  }
}

export default async function CaminoGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const content = getGuideContent(SLUG, l)
  const caminoRoutes = routes.filter(r => r.system === 'camino')
  return <GuideArticle locale={l} content={content} slug={SLUG} featuredRoutes={caminoRoutes} />
}
