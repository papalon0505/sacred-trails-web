import type { Locale } from '@/lib/i18n'

const BADGE_BY_LOCALE: Record<Locale, { src: string; alt: string }> = {
  'en': { src: '/badges/app-store-en.svg', alt: 'Download on the App Store' },
  'ja': { src: '/badges/app-store-ja.svg', alt: 'App Storeからダウンロード' },
  'zh-TW': { src: '/badges/app-store-zh-tw.svg', alt: '在 App Store 下載' },
  'es': { src: '/badges/app-store-es.svg', alt: 'Descargar en el App Store' },
}

export function AppStoreBadge({ className = '', locale = 'en' }: { className?: string; locale?: Locale }) {
  const badge = BADGE_BY_LOCALE[locale] ?? BADGE_BY_LOCALE.en
  return (
    <a
      href="https://apps.apple.com/app/id6761192860"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <img src={badge.src} alt={badge.alt} height={40} width={120} style={{ height: 40, width: 'auto' }} />
    </a>
  )
}
