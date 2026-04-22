import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { comparisons, getComparison, COMPARISON_SLUGS } from '@/lib/comparisons'
import { getRouteBySlug } from '@/lib/data/routes'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export function generateStaticParams() {
  return COMPARISON_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) return {}
  return {
    title: c.metaTitle.en,
    description: c.metaDesc.en,
    alternates: {
      canonical: `https://sacredtrails.evelyn-ai.com/compare/${slug}`,
      languages: {
        'en': `https://sacredtrails.evelyn-ai.com/compare/${slug}`,
        'ja': `https://sacredtrails.evelyn-ai.com/ja/compare/${slug}`,
        'zh-TW': `https://sacredtrails.evelyn-ai.com/zh-TW/compare/${slug}`,
        'es': `https://sacredtrails.evelyn-ai.com/es/compare/${slug}`,
      },
    },
    openGraph: {
      title: c.h1.en,
      description: c.metaDesc.en,
      url: `https://sacredtrails.evelyn-ai.com/compare/${slug}`,
      type: 'article',
    },
  }
}

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  challenging: 'Challenging',
  very_challenging: 'Very Challenging',
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) notFound()
  const routeA = getRouteBySlug(c.routeA)
  const routeB = getRouteBySlug(c.routeB)
  if (!routeA || !routeB) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.h1.en,
    description: c.metaDesc.en,
    inLanguage: 'en',
    about: [
      { '@type': 'TouristTrip', name: c.nameA.en },
      { '@type': 'TouristTrip', name: c.nameB.en },
    ],
  } as Record<string, unknown>

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sacredtrails.evelyn-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://sacredtrails.evelyn-ai.com/routes' },
      { '@type': 'ListItem', position: 3, name: c.h1.en, item: `https://sacredtrails.evelyn-ai.com/compare/${slug}` },
    ],
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/routes" className="hover:text-forest">Routes</a>{' / '}
          <span className="text-stone-600">{c.nameA.en} vs {c.nameB.en}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-5 leading-tight">{c.h1.en}</h1>

        <p className="text-stone-600 leading-relaxed mb-10">{c.intro.en}</p>

        <section className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 border border-stone-200">
            <a href={`/routes/${routeA.slug}`} className="block">
              <h2 className="font-bold text-forest text-lg mb-2 hover:underline">{c.nameA.en}</h2>
            </a>
            <dl className="text-sm space-y-1 text-stone-600">
              <div className="flex justify-between"><dt>Distance</dt><dd className="font-semibold">{routeA.totalDistanceKm}km</dd></div>
              <div className="flex justify-between"><dt>Duration</dt><dd className="font-semibold">{routeA.averageDays} days</dd></div>
              <div className="flex justify-between"><dt>Difficulty</dt><dd className="font-semibold">{DIFFICULTY_LABELS[routeA.difficulty] ?? routeA.difficulty}</dd></div>
              <div className="flex justify-between gap-2"><dt>Start → End</dt><dd className="font-semibold text-right text-xs">{routeA.startPoint} → {routeA.endPoint}</dd></div>
            </dl>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-stone-200">
            <a href={`/routes/${routeB.slug}`} className="block">
              <h2 className="font-bold text-forest text-lg mb-2 hover:underline">{c.nameB.en}</h2>
            </a>
            <dl className="text-sm space-y-1 text-stone-600">
              <div className="flex justify-between"><dt>Distance</dt><dd className="font-semibold">{routeB.totalDistanceKm}km</dd></div>
              <div className="flex justify-between"><dt>Duration</dt><dd className="font-semibold">{routeB.averageDays} days</dd></div>
              <div className="flex justify-between"><dt>Difficulty</dt><dd className="font-semibold">{DIFFICULTY_LABELS[routeB.difficulty] ?? routeB.difficulty}</dd></div>
              <div className="flex justify-between gap-2"><dt>Start → End</dt><dd className="font-semibold text-right text-xs">{routeB.startPoint} → {routeB.endPoint}</dd></div>
            </dl>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-parchment rounded-2xl p-6">
            <h2 className="font-bold text-forest mb-4">Choose {c.nameA.en} if…</h2>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              {c.chooseA.en.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
          <div className="bg-parchment rounded-2xl p-6">
            <h2 className="font-bold text-forest mb-4">Choose {c.nameB.en} if…</h2>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              {c.chooseB.en.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </section>

        <section className="bg-forest text-white rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Walk either offline with Sacred Trails</h2>
          <p className="text-green-100 mb-6">
            Full stage timelines, waypoints, and POIs for every Camino and Kumano Kodo route — bundled offline.
            One $2.99 purchase unlocks all 18 routes.
          </p>
          <AppStoreBadge className="mx-auto" />
        </section>

        {comparisons.length > 1 ? (
          <section>
            <h2 className="text-xl font-bold text-ink mb-4">More comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisons.filter(x => x.slug !== c.slug).map(x => (
                <a key={x.slug} href={`/compare/${x.slug}`} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-forest transition-colors">
                  <p className="font-semibold text-forest text-sm">{x.nameA.en} vs {x.nameB.en}</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
  )
}
