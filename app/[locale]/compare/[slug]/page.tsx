import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { comparisons, getComparison, COMPARISON_SLUGS } from '@/lib/comparisons'
import { getRouteBySlug } from '@/lib/data/routes'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, pick, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of LOCALIZED) {
    for (const s of COMPARISON_SLUGS) params.push({ locale, slug: s })
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const c = getComparison(slug)
  if (!c) return {}
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, `/compare/${slug}`)}`
  return {
    title: c.metaTitle[l],
    description: c.metaDesc[l],
    alternates: { canonical: `${BASE_URL}${localePath(l, `/compare/${slug}`)}`, languages },
    openGraph: {
      title: c.h1[l],
      description: c.metaDesc[l],
      url: `${BASE_URL}${localePath(l, `/compare/${slug}`)}`,
      type: 'article',
    },
  }
}

export default async function ComparePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const c = getComparison(slug)
  if (!c) notFound()

  const routeA = getRouteBySlug(c.routeA)
  const routeB = getRouteBySlug(c.routeB)
  if (!routeA || !routeB) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.h1[l],
    description: c.metaDesc[l],
    inLanguage: locale,
    about: [
      { '@type': 'TouristTrip', name: c.nameA[l] },
      { '@type': 'TouristTrip', name: c.nameB[l] },
    ],
  } as Record<string, unknown>

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.route.breadcrumbHome, item: `${BASE_URL}${localePath(l, '/')}` },
      { '@type': 'ListItem', position: 2, name: dict.route.breadcrumbRoutes, item: `${BASE_URL}${localePath(l, '/routes')}` },
      { '@type': 'ListItem', position: 3, name: c.h1[l], item: `${BASE_URL}${localePath(l, `/compare/${slug}`)}` },
    ],
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href={localePath(l, '/')} className="hover:text-forest">{dict.route.breadcrumbHome}</a>{' / '}
          <a href={localePath(l, '/routes')} className="hover:text-forest">{dict.route.breadcrumbRoutes}</a>{' / '}
          <span className="text-stone-600">{c.nameA[l]} vs {c.nameB[l]}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-5 leading-tight">{c.h1[l]}</h1>

        <p className="text-stone-600 leading-relaxed mb-10">{c.intro[l]}</p>

        <section className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 border border-stone-200">
            <a href={localePath(l, `/routes/${routeA.slug}`)} className="block">
              <h2 className="font-bold text-forest text-lg mb-2 hover:underline">{c.nameA[l]}</h2>
            </a>
            <dl className="text-sm space-y-1 text-stone-600">
              <div className="flex justify-between"><dt>{dict.route.labels.distance}</dt><dd className="font-semibold">{routeA.totalDistanceKm}km</dd></div>
              <div className="flex justify-between"><dt>{dict.route.labels.duration}</dt><dd className="font-semibold">{routeA.averageDays} {dict.route.daysUnit}</dd></div>
              <div className="flex justify-between"><dt>{dict.route.labels.difficulty}</dt><dd className="font-semibold">{dict.route.difficultyLabels[routeA.difficulty] ?? routeA.difficulty}</dd></div>
              <div className="flex justify-between gap-2"><dt>{dict.route.labels.startEnd}</dt><dd className="font-semibold text-right text-xs">{routeA.startPoint} → {routeA.endPoint}</dd></div>
            </dl>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-stone-200">
            <a href={localePath(l, `/routes/${routeB.slug}`)} className="block">
              <h2 className="font-bold text-forest text-lg mb-2 hover:underline">{c.nameB[l]}</h2>
            </a>
            <dl className="text-sm space-y-1 text-stone-600">
              <div className="flex justify-between"><dt>{dict.route.labels.distance}</dt><dd className="font-semibold">{routeB.totalDistanceKm}km</dd></div>
              <div className="flex justify-between"><dt>{dict.route.labels.duration}</dt><dd className="font-semibold">{routeB.averageDays} {dict.route.daysUnit}</dd></div>
              <div className="flex justify-between"><dt>{dict.route.labels.difficulty}</dt><dd className="font-semibold">{dict.route.difficultyLabels[routeB.difficulty] ?? routeB.difficulty}</dd></div>
              <div className="flex justify-between gap-2"><dt>{dict.route.labels.startEnd}</dt><dd className="font-semibold text-right text-xs">{routeB.startPoint} → {routeB.endPoint}</dd></div>
            </dl>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-parchment rounded-2xl p-6">
            <h2 className="font-bold text-forest mb-4">→ {c.nameA[l]}</h2>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              {c.chooseA[l].map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
          <div className="bg-parchment rounded-2xl p-6">
            <h2 className="font-bold text-forest mb-4">→ {c.nameB[l]}</h2>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              {c.chooseB[l].map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </section>

        <section className="bg-forest text-white rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">{dict.route.ctaTitle(`${c.nameA[l]} · ${c.nameB[l]}`)}</h2>
          <p className="text-green-100 mb-6">{dict.route.ctaDesc}</p>
          <AppStoreBadge className="mx-auto" locale={l} />
        </section>

        {comparisons.length > 1 ? (
          <section>
            <h2 className="text-xl font-bold text-ink mb-4">More comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisons.filter(x => x.slug !== c.slug).map(x => (
                <a key={x.slug} href={localePath(l, `/compare/${x.slug}`)} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-forest transition-colors">
                  <p className="font-semibold text-forest text-sm">{x.nameA[l]} vs {x.nameB[l]}</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
  )
}
