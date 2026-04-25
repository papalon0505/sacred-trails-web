import type { Metadata } from 'next'
import { certifications, certificationsBySystem } from '@/lib/data/certifications'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, pick, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return LOCALIZED.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const dict = getDict(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/certifications')}`
  return {
    title: dict.certifications.metaTitle,
    description: dict.certifications.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/certifications')}`, languages },
    openGraph: {
      title: dict.certifications.metaTitle,
      description: dict.certifications.metaDesc,
      url: `${BASE_URL}${localePath(l, '/certifications')}`,
      type: 'article',
    },
  }
}

const SYSTEM_ORDER = ['camino', 'kumano', 'shikoku', 'saigoku', 'achievement'] as const

export default async function LocaleCertificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const t = dict.certifications

  const faqItems = certifications.slice(0, 6).map(c => ({
    question: pick(c.name, l) || c.name.en,
    answer: pick(c.description, l) || c.description.en,
  }))

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }} />

      <h1 className="text-4xl font-bold text-ink mb-3">{t.title}</h1>
      <p className="text-stone-500 mb-12 text-lg max-w-2xl">{t.subtitle}</p>

      {SYSTEM_ORDER.map(system => {
        const group = certificationsBySystem[system]
        if (!group.length) return null
        return (
          <section key={system} className="mb-14">
            <h2 className="text-2xl font-bold text-forest mb-6 flex items-center gap-2">
              {system === 'camino' && '🐚'}
              {system === 'kumano' && '⛩️'}
              {system === 'shikoku' && '🏮'}
              {system === 'saigoku' && '🌸'}
              {system === 'achievement' && '🌏'}
              {t.systems[system]}
            </h2>
            <div className="space-y-5">
              {group.map(cert => {
                const name = pick(cert.name, l) || cert.name.en
                const desc = pick(cert.description, l) || cert.description.en
                const stamps = pick(cert.stampsNote, l)
                const where = pick(cert.whereToGet, l) || cert.whereToGet.en
                return (
                  <div key={cert.id} className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-forest transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl leading-none mt-0.5">{cert.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-ink mb-1">{name}</h3>
                        <p className="text-stone-600 mb-3 text-sm leading-relaxed">{desc}</p>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                          {cert.minDistanceKm && (
                            <>
                              <dt className="text-stone-400 font-medium">{t.minDistance}</dt>
                              <dd className="text-ink">{cert.minDistanceKm} km</dd>
                            </>
                          )}
                          {stamps && (
                            <>
                              <dt className="text-stone-400 font-medium">{t.stampsRequired}</dt>
                              <dd className="text-ink">{stamps}</dd>
                            </>
                          )}
                          <dt className="text-stone-400 font-medium">{t.whereToGet}</dt>
                          <dd className="text-ink">{where}</dd>
                        </dl>
                        {cert.officialUrl && (
                          <a
                            href={cert.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 text-sm text-forest hover:text-forest-dark font-medium"
                          >
                            {t.officialSite} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <div className="bg-forest rounded-2xl p-8 text-center mt-8">
        <h2 className="text-2xl font-bold text-white mb-2">{t.appCtaTitle}</h2>
        <p className="text-green-100 mb-6">{t.appCtaDesc}</p>
        <AppStoreBadge className="justify-center" />
      </div>
    </div>
  )
}
