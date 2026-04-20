import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { RouteCard } from '@/components/RouteCard'
import { getDict, localePath, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const dict = getDict(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/routes')}`
  return {
    title: dict.routesList.metaTitle,
    description: dict.routesList.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/routes')}`, languages },
  }
}

export default async function LocaleRoutesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const dict = getDict(l)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-ink mb-3">{dict.routesList.title}</h1>
      <p className="text-stone-500 mb-12 text-lg">{dict.routesList.subtitle}</p>

      {dict.routesList.groups.map(({ key, label, country, icon }) => {
        const group = routes.filter(r => r.system === key)
        return group.length === 0 ? null : (
          <section key={key} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-forest">{label}</h2>
                <p className="text-stone-500 text-sm">{country} · {dict.routesList.routeSuffix(group.length)}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.map(r => <RouteCard key={r.slug} route={r} locale={l} />)}
            </div>
          </section>
        )
      })}
    </div>
  )
}
