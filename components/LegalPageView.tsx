import { getDict, localePath, type Locale } from '@/lib/i18n'
import type { LegalContent } from '@/lib/legal-content'

export function LegalPageView({ locale, content }: { locale: Locale; content: LegalContent }) {
  const dict = getDict(locale)
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <a href={localePath(locale, '/')} className="hover:text-forest">{dict.route.breadcrumbHome}</a>{' / '}
        <span className="text-stone-600">{content.title}</span>
      </nav>
      <h1 className="text-3xl font-bold text-ink mb-2">{content.title}</h1>
      <p className="text-xs text-stone-400 mb-10">{content.lastUpdated}</p>
      <div className="space-y-8">
        {content.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold text-forest mb-3">{s.heading}</h2>
            <div className="space-y-3">
              {s.body.map((p, j) => (
                <p key={j} className="text-stone-600 text-sm leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
