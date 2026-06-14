import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { localePath, BASE_URL, type Locale } from '@/lib/i18n'
import type { ArticleContent } from '@/lib/article-content'

export function ArticlePage({
  locale,
  content,
  slug,
}: {
  locale: Locale
  content: ArticleContent
  slug: string
}) {
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
    url: `${BASE_URL}/guide/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Sacred Trails',
      url: BASE_URL,
    },
    datePublished: '2026-06-14',
    dateModified: '2026-06-14',
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href={localePath(locale, '/')} className="hover:text-forest">Home</a>{' / '}
          <a href={localePath(locale, '/guide')} className="hover:text-forest">Guide</a>{' / '}
          <span className="text-stone-600">{content.title}</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-4">{content.title}</h1>
        <p className="text-stone-500 text-lg mb-10">{content.subtitle}</p>

        {content.sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">{section.heading}</h2>
            <div className="space-y-4 mb-4">
              {section.paragraphs.map((para, j) => (
                <p key={j} className="text-stone-600 leading-relaxed">{para}</p>
              ))}
            </div>
            {section.list && (
              <ul className="space-y-2 ml-1">
                {section.list.map((item, k) => (
                  <li key={k} className="text-stone-600 leading-relaxed flex gap-2">
                    <span className="text-forest mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
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
