export type RouteSystem = 'camino' | 'kumano' | 'shikoku' | 'saigoku'
export type FeatureKind =
  | 'offline'
  | 'languages'
  | 'timeline'
  | 'waypoint'
  | 'lodging'
  | 'water'
  | 'story'
  | 'stats'
  | 'packing'
  | 'cost'
  | 'compass'
  | 'guide'
  | 'compare'
  | 'achievement'
  | 'official'
  | 'home'
  | 'check'
  | 'email'
  | 'warning'
export type SocialKind = 'website' | 'instagram' | 'facebook' | 'x' | 'youtube'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function baseProps(label?: string) {
  if (label) {
    return { role: 'img' as const, 'aria-label': label }
  }
  return { 'aria-hidden': true as const }
}

function frameClass(size: 'sm' | 'md' | 'lg', tone: 'forest' | 'parchment' | 'white') {
  const sizeClass = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  const toneClass =
    tone === 'forest'
      ? 'bg-forest text-white ring-1 ring-forest/15'
      : tone === 'white'
        ? 'bg-white text-forest ring-1 ring-stone-200'
        : 'bg-parchment text-forest ring-1 ring-stone-200'
  return cx('inline-flex items-center justify-center rounded-2xl shadow-sm', sizeClass, toneClass)
}

export function RouteSystemIcon({
  system,
  className = '',
  size = 'md',
  tone = 'parchment',
  label,
}: {
  system: RouteSystem
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'forest' | 'parchment' | 'white'
  label?: string
}) {
  return (
    <span className={cx(frameClass(size, tone), className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={size === 'sm' ? 'h-4.5 w-4.5' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'}
        {...baseProps(label)}
      >
        {system === 'camino' ? (
          <>
            <path d="M12 5.5c-1 3.3-3.2 5.7-6.5 7.2" />
            <path d="M12 5.5c1 3.3 3.2 5.7 6.5 7.2" />
            <path d="M12 5.5v13" />
            <path d="M7.2 11.3 12 12.6l4.8-1.3" />
            <path d="M8.8 16.2 12 15.3l3.2.9" />
          </>
        ) : null}
        {system === 'kumano' ? (
          <>
            <path d="M12 3.5 6.2 8.2v8.1h11.6V8.2z" />
            <path d="M9.2 20.5h5.6" />
            <path d="M12 8.7v7.6" />
            <path d="M8.6 12h6.8" />
          </>
        ) : null}
        {system === 'shikoku' ? (
          <>
            <path d="M12 4.5v15" />
            <path d="M8.3 8.1 12 6l3.7 2.1L12 10.2z" />
            <path d="M8.7 13 12 11l3.3 2L12 15z" />
            <path d="M9.5 19.5h5" />
          </>
        ) : null}
        {system === 'saigoku' ? (
          <>
            <path d="M12 6.2c1.5-2.1 5-1.8 5.8 1 .5 1.8-.1 3.7-1.6 5.1L12 16.2l-4.2-3.9C6.3 10.9 5.7 9 6.2 7.2c.8-2.8 4.3-3.1 5.8-1" />
            <path d="M12 16.5v3" />
            <path d="M9.6 19.5h4.8" />
          </>
        ) : null}
      </svg>
    </span>
  )
}

export function FeatureIcon({
  kind,
  className = '',
  size = 'md',
  tone = 'parchment',
  label,
}: {
  kind: FeatureKind
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'forest' | 'parchment' | 'white'
  label?: string
}) {
  return (
    <span className={cx(frameClass(size, tone), className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={size === 'sm' ? 'h-4.5 w-4.5' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'}
        {...baseProps(label)}
      >
        {kind === 'offline' ? (
          <>
            <path d="M4.5 9.5A10.5 10.5 0 0 1 12 6.5a10.5 10.5 0 0 1 7.5 3" />
            <path d="M7.5 12.5a6.5 6.5 0 0 1 9 0" />
            <path d="M10.2 15.3a2.7 2.7 0 0 1 3.6 0" />
            <path d="m4 4 16 16" />
          </>
        ) : null}
        {kind === 'languages' ? (
          <>
            <path d="M4.5 7.5h8" />
            <path d="M8.5 5v2.5c0 4-1.8 6.9-4 8.5" />
            <path d="M5.5 11.5c1 .9 2.1 1.7 3.5 2.4" />
            <path d="M14.5 9.5h5" />
            <path d="m17 6.5 3 10" />
            <path d="m14 16.5 3-10" />
          </>
        ) : null}
        {kind === 'timeline' ? (
          <>
            <path d="M12 5v14" />
            <circle cx="12" cy="7" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="17" r="1.6" />
            <path d="M15.8 7h2.2" />
            <path d="M6 12h2.2" />
            <path d="M15.8 17H18" />
          </>
        ) : null}
        {kind === 'waypoint' ? (
          <>
            <path d="M12 20s5-4.8 5-9a5 5 0 1 0-10 0c0 4.2 5 9 5 9Z" />
            <circle cx="12" cy="11" r="1.7" />
          </>
        ) : null}
        {kind === 'lodging' ? (
          <>
            <path d="M4.5 13.5V10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3.5" />
            <path d="M4.5 13.5h15" />
            <path d="M6.5 13.5v3" />
            <path d="M17.5 13.5v3" />
            <path d="M8 10.5h3" />
          </>
        ) : null}
        {kind === 'water' ? (
          <>
            <path d="M12 4.5c2.2 3 4.5 5.5 4.5 8.4a4.5 4.5 0 1 1-9 0c0-2.9 2.3-5.4 4.5-8.4Z" />
            <path d="M10.1 13.4a2.2 2.2 0 0 0 3 0" />
          </>
        ) : null}
        {kind === 'story' ? (
          <>
            <path d="M6.5 6.5h8a3 3 0 0 1 3 3v8h-8a3 3 0 0 0-3 3Z" />
            <path d="M6.5 6.5v14" />
            <path d="M9.5 10h5" />
            <path d="M9.5 13h5" />
          </>
        ) : null}
        {kind === 'stats' ? (
          <>
            <path d="M6.5 17.5V12" />
            <path d="M11.5 17.5V8.5" />
            <path d="M16.5 17.5V11" />
            <path d="M4.5 19.5h15" />
          </>
        ) : null}
        {kind === 'packing' ? (
          <>
            <path d="M8.5 9V7.5A2.5 2.5 0 0 1 11 5h2a2.5 2.5 0 0 1 2.5 2.5V9" />
            <path d="M6.5 9h11l1 9.5h-13Z" />
            <path d="M9.5 12.5h5" />
          </>
        ) : null}
        {kind === 'cost' ? (
          <>
            <path d="M12 5v14" />
            <path d="M15.5 8.3c-.8-.9-2-1.3-3.5-1.3-2 0-3.5.9-3.5 2.4 0 3.6 7 1.2 7 5 0 1.7-1.7 2.8-4 2.8-1.7 0-3-.4-4-1.4" />
          </>
        ) : null}
        {kind === 'compass' ? (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="m10 14 1.8-4.2L16 8l-1.8 4.2Z" />
          </>
        ) : null}
        {kind === 'guide' ? (
          <>
            <path d="M6.5 6.5h8a3 3 0 0 1 3 3v8h-8a3 3 0 0 0-3 3Z" />
            <path d="M6.5 6.5v14" />
            <path d="M10 10h4.5" />
          </>
        ) : null}
        {kind === 'compare' ? (
          <>
            <path d="M7 7h11" />
            <path d="m14 4 4 3-4 3" />
            <path d="M17 17H6" />
            <path d="m10 14-4 3 4 3" />
          </>
        ) : null}
        {kind === 'achievement' ? (
          <>
            <path d="M12 5.5 14 9l3.8.6-2.7 2.7.6 3.7L12 14.7 8.3 16l.6-3.7-2.7-2.7L10 9z" />
            <path d="M8.5 18.2 7 20.5" />
            <path d="M15.5 18.2 17 20.5" />
          </>
        ) : null}
        {kind === 'official' ? (
          <>
            <path d="M12 4.5 6.5 7v4.2c0 4 2.3 6.4 5.5 8.3 3.2-1.9 5.5-4.3 5.5-8.3V7z" />
            <path d="m9.6 11.8 1.5 1.5 3.3-3.3" />
          </>
        ) : null}
        {kind === 'home' ? (
          <>
            <path d="M5.5 10.5 12 5l6.5 5.5" />
            <path d="M7.5 9.8v8.7h9V9.8" />
          </>
        ) : null}
        {kind === 'check' ? (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="m9 12.2 2 2 4-4.2" />
          </>
        ) : null}
        {kind === 'email' ? (
          <>
            <rect x="4.5" y="6.5" width="15" height="11" rx="2" />
            <path d="m5.5 8 6.5 5 6.5-5" />
          </>
        ) : null}
        {kind === 'warning' ? (
          <>
            <path d="M12 5.5 19 18.5H5z" />
            <path d="M12 10v3.8" />
            <circle cx="12" cy="16.3" r=".8" fill="currentColor" stroke="none" />
          </>
        ) : null}
      </svg>
    </span>
  )
}

export function SocialIcon({
  kind,
  className = '',
  size = 'sm',
  tone = 'white',
  label,
}: {
  kind: SocialKind
  className?: string
  size?: 'sm' | 'md' | 'lg'
  tone?: 'forest' | 'parchment' | 'white'
  label?: string
}) {
  return (
    <span className={cx(frameClass(size, tone), className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'}
        {...baseProps(label)}
      >
        {kind === 'website' ? (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="M5.5 12h13" />
            <path d="M12 5c1.8 1.9 2.8 4.4 2.8 7S13.8 17.1 12 19" />
            <path d="M12 5c-1.8 1.9-2.8 4.4-2.8 7s1 5.1 2.8 7" />
          </>
        ) : null}
        {kind === 'instagram' ? (
          <>
            <rect x="5.5" y="5.5" width="13" height="13" rx="3.2" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="16.2" cy="7.8" r=".8" fill="currentColor" stroke="none" />
          </>
        ) : null}
        {kind === 'facebook' ? (
          <>
            <path d="M13.5 18.5v-5.3h2.1l.4-2.6h-2.5V9.1c0-.8.2-1.4 1.4-1.4h1.2V5.4c-.2 0-1-.1-2-.1-2.1 0-3.4 1.3-3.4 3.7v1.6H8.8v2.6h2.3v5.3" />
          </>
        ) : null}
        {kind === 'x' ? (
          <>
            <path d="m7 6.5 10 11" />
            <path d="m17 6.5-10 11" />
          </>
        ) : null}
        {kind === 'youtube' ? (
          <>
            <path d="M17.8 8.2c-.3-1-1.1-1.7-2.1-1.9-1.5-.3-3-.4-3.7-.4s-2.2.1-3.7.4c-1 .2-1.8 1-2.1 1.9-.3 1-.4 2.1-.4 3.3s.1 2.3.4 3.3c.3 1 1.1 1.7 2.1 1.9 1.5.3 3 .4 3.7.4s2.2-.1 3.7-.4c1-.2 1.8-1 2.1-1.9.3-1 .4-2.1.4-3.3s-.1-2.3-.4-3.3Z" />
            <path d="m10.7 9.7 4 2.3-4 2.3Z" fill="currentColor" stroke="none" />
          </>
        ) : null}
      </svg>
    </span>
  )
}

export function routeSystemFromLegacyIcon(icon: string): RouteSystem {
  if (icon === '⛩️') return 'kumano'
  if (icon === '🏮') return 'shikoku'
  if (icon === '🌸') return 'saigoku'
  return 'camino'
}

export function featureKindFromLegacyIcon(icon: string): FeatureKind {
  if (icon === '📡') return 'offline'
  if (icon === '🌍') return 'languages'
  if (icon === '📍') return 'timeline'
  if (icon === '🛏️') return 'lodging'
  if (icon === '💧') return 'water'
  if (icon === '📖') return 'story'
  if (icon === '📊') return 'stats'
  if (icon === '🎒') return 'packing'
  if (icon === '💰') return 'cost'
  if (icon === '🧭') return 'compass'
  if (icon === '⚠️') return 'warning'
  if (icon === '✅') return 'check'
  if (icon === '✉️') return 'email'
  if (icon === '⇄') return 'compare'
  return 'guide'
}
