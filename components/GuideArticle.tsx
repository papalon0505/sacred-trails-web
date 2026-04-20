import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, type Locale } from '@/lib/i18n'
import type { GuideContent } from '@/lib/guide-content'

export function GuideArticle({
  locale,
  content,
}: {
  locale: Locale
  content: GuideContent
  slug?: string
}) {
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
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href={localePath(locale, '/')} className="hover:text-forest">{dict.route.breadcrumbHome}</a>{' / '}
          <a href={localePath(locale, '/guide')} className="hover:text-forest">{dict.nav.guide}</a>{' / '}
          <span className="text-stone-600">{content.title}</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-4">{content.title}</h1>
        <p className="text-stone-500 text-lg mb-10">{content.subtitle}</p>

        <section className="mb-10 space-y-4">
          {content.intro.map((para, i) => (
            <p key={i} className="text-stone-600 leading-relaxed">{para}</p>
          ))}
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
          <AppStoreBadge className="mx-auto" locale={locale} />
        </div>
      </article>
    </>
  )
}
