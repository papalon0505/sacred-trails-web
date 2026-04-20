import { notFound } from 'next/navigation'
import { LOCALIZED, LOCALE_HTML_LANG, getDict, localePath, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return LOCALIZED.map(locale => ({ locale }))
}

const LANG_SWITCHER: { href: string; label: string; locale: Locale | 'en' }[] = [
  { href: '/', label: 'EN', locale: 'en' },
  { href: '/ja', label: '日本語', locale: 'ja' },
  { href: '/zh-TW', label: '繁中', locale: 'zh-TW' },
  { href: '/es', label: 'ES', locale: 'es' },
]

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) notFound()
  const l = locale as Locale
  const dict = getDict(l)

  return (
    <div lang={LOCALE_HTML_LANG[l]}>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href={localePath(l, '/')} className="flex items-center gap-2 text-forest font-semibold text-lg">
            <span>🐚</span>
            <span>Sacred Trails</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href={localePath(l, '/routes')} className="hover:text-forest transition-colors">{dict.nav.routes}</a>
            <a href={localePath(l, '/guide')} className="hover:text-forest transition-colors">{dict.nav.guide}</a>
            <a href={localePath(l, '/dual-pilgrim')} className="hover:text-forest transition-colors">Dual Pilgrim</a>
            <div className="flex gap-2 text-xs text-stone-400">
              {LANG_SWITCHER.map(s => (
                <a key={s.locale} href={s.href} className={s.locale === l ? 'text-forest font-semibold' : 'hover:text-forest'}>
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-stone-800 text-stone-300 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{dict.footer.rights}</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">{dict.footer.privacy}</a>
              <a href={localePath(l, '/legal')} className="hover:text-white transition-colors">{dict.footer.legal}</a>
              <a href={localePath(l, '/routes')} className="hover:text-white transition-colors">{dict.footer.allRoutes}</a>
            </div>
          </div>
          <p className="text-xs text-stone-500 text-center md:text-left">{dict.footer.credits}</p>
        </div>
      </footer>
    </div>
  )
}
