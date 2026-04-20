import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, BASE_URL, type Locale } from '@/lib/i18n'
import type { DualPilgrimContent } from '@/lib/dual-pilgrim-content'

export function DualPilgrimPage({ locale, content }: { locale: Locale; content: DualPilgrimContent }) {
  const dict = getDict(locale)

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } as Record<string, unknown>

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDesc,
    inLanguage: locale,
    url: `${BASE_URL}${localePath(locale, '/dual-pilgrim')}`,
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href={localePath(locale, '/')} className="hover:text-forest">{dict.route.breadcrumbHome}</a>{' / '}
          <span className="text-stone-600">Dual Pilgrim</span>
        </nav>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">🐚</span>
          <span className="text-stone-300 text-xl">+</span>
          <span className="text-3xl">⛩️</span>
        </div>
        <h1 className="text-4xl font-bold text-ink mb-4">{content.title}</h1>
        <p className="text-stone-500 text-lg mb-10">{content.subtitle}</p>

        <section className="mb-12 space-y-4">
          {content.intro.map((p, i) => (
            <p key={i} className="text-stone-600 leading-relaxed">{p}</p>
          ))}
        </section>

        <section className="bg-white rounded-2xl p-6 border border-stone-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🐚</span>
            <h2 className="text-2xl font-bold text-forest">{content.caminoHeading}</h2>
          </div>
          <ul className="space-y-3 list-decimal list-inside text-stone-600 leading-relaxed">
            {content.caminoRules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-stone-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">⛩️</span>
            <h2 className="text-2xl font-bold text-forest">{content.kumanoHeading}</h2>
          </div>

          <h3 className="font-semibold text-ink mb-3 mt-4">{content.kumanoRoutesHeading}</h3>
          <div className="space-y-3 mb-6">
            {content.kumanoRoutes.map((r, i) => (
              <div key={i} className="border-l-2 border-amber pl-4 py-1">
                <p className="font-semibold text-forest text-sm">{r.name}</p>
                <p className="text-xs text-stone-400 mt-1">{r.distance}</p>
                <p className="text-sm text-stone-500 mt-1">{r.note}</p>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-ink mb-3 mt-6">{content.kumanoShrinesHeading}</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {content.kumanoShrines.map((s, i) => (
              <div key={i} className="bg-parchment rounded-xl p-4">
                <p className="font-semibold text-forest text-sm mb-1">{s.name}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-stone-200 mb-10">
          <h2 className="text-2xl font-bold text-forest mb-4">{content.registerHeading}</h2>
          <ol className="space-y-3 list-decimal list-inside text-stone-600 leading-relaxed mb-6">
            {content.registerSteps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
          <div className="grid md:grid-cols-2 gap-4">
            {content.registerLocations.map((loc, i) => (
              <div key={i} className="bg-parchment rounded-xl p-4">
                <p className="font-semibold text-forest text-sm mb-1">{loc.name}</p>
                <p className="text-xs text-stone-500">{loc.address}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-6">{dict.home.faqTitle}</h2>
          <div className="space-y-6">
            {content.faq.map(({ q, a }) => (
              <div key={q} className="border-b border-stone-200 pb-5">
                <h3 className="font-semibold text-forest mb-2">{q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-forest text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">{content.ctaTitle}</h2>
          <p className="text-green-100 mb-6">{content.ctaDesc}</p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </article>
    </>
  )
}
