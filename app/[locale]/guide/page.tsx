import type { Metadata } from 'next'
import { getDict, localePath, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const dict = getDict(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/guide')}`
  return {
    title: dict.guideIndex.metaTitle,
    description: dict.guideIndex.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/guide')}`, languages },
  }
}

export default async function LocaleGuideIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const dict = getDict(l)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-ink mb-3">{dict.guideIndex.title}</h1>
      <p className="text-stone-500 mb-10 text-lg">{dict.guideIndex.subtitle}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {dict.guideIndex.guides.map(g => (
          <a key={g.slug} href={localePath(l, `/guide/${g.slug}`)}
            className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-forest hover:shadow-md transition-all">
            <div className="text-3xl mb-3">{g.icon}</div>
            <h2 className="font-bold text-forest mb-2">{g.title}</h2>
            <p className="text-sm text-stone-500">{g.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
