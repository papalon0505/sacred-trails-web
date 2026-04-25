import type { Metadata } from 'next'
import { certifications, certificationsBySystem } from '@/lib/data/certifications'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, ALL_LOCALES, BASE_URL } from '@/lib/i18n'

const l = 'en' as const
const dict = getDict(l)
const t = dict.certifications

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: `${BASE_URL}/certifications`,
    languages: Object.fromEntries(ALL_LOCALES.map(loc => [loc, `${BASE_URL}${localePath(loc, '/certifications')}`])),
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDesc,
    url: `${BASE_URL}/certifications`,
    type: 'article',
  },
}

const SYSTEM_ORDER = ['camino', 'kumano', 'shikoku', 'saigoku', 'achievement'] as const

export default function CertificationsPage() {
  const faqItems = certifications.slice(0, 6).map(c => ({
    question: c.name.en,
    answer: c.description.en,
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
              {group.map(cert => (
                <div key={cert.id} className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-forest transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl leading-none mt-0.5">{cert.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-ink mb-1">{cert.name.en}</h3>
                      <p className="text-stone-600 mb-3 text-sm leading-relaxed">{cert.description.en}</p>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        {cert.minDistanceKm && (
                          <>
                            <dt className="text-stone-400 font-medium">{t.minDistance}</dt>
                            <dd className="text-ink">{cert.minDistanceKm} km</dd>
                          </>
                        )}
                        {cert.stampsNote.en && (
                          <>
                            <dt className="text-stone-400 font-medium">{t.stampsRequired}</dt>
                            <dd className="text-ink">{cert.stampsNote.en}</dd>
                          </>
                        )}
                        <dt className="text-stone-400 font-medium">{t.whereToGet}</dt>
                        <dd className="text-ink">{cert.whereToGet.en}</dd>
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
              ))}
            </div>
          </section>
        )
      })}

      <div className="bg-forest rounded-2xl p-8 text-center mt-8">
        <h2 className="text-2xl font-bold text-white mb-2">{t.appCtaTitle}</h2>
        <p className="text-green-100 mb-6">{t.appCtaDesc}</p>
        <AppStoreBadge className="justify-center" />
      </div>
    </div>
  )
}
