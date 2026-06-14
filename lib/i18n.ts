export type Locale = 'en' | 'ja' | 'zh-TW' | 'es'
export const LOCALIZED: Locale[] = ['ja', 'zh-TW', 'es']
export const ALL_LOCALES: Locale[] = ['en', ...LOCALIZED]

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  'en': 'en',
  'ja': 'ja',
  'zh-TW': 'zh-Hant',
  'es': 'es',
}

export const BASE_URL = 'https://sacredtrails.evelyn-ai.com'

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === 'en') return clean
  return `/${locale}${clean === '/' ? '' : clean}`
}

function pickLocaleKey(locale: Locale): 'en' | 'ja' | 'zhTW' | 'es' {
  if (locale === 'zh-TW') return 'zhTW'
  return locale
}

export function pick<T extends Record<string, string | undefined>>(map: T, locale: Locale): string {
  const key = pickLocaleKey(locale) as keyof T
  return (map[key] as string | undefined) ?? (map.en as string | undefined) ?? ''
}

export interface Dict {
  nav: { routes: string; guide: string }
  footer: { rights: string; privacy: string; allRoutes: string; legal: string; credits: string }
  home: {
    eyebrow: string
    heroTitle: string
    heroDesc: string
    browseRoutes: string
    systemsTitle: string
    systemsSubtitle: string
    caminoHeading: string
    japanHeading: string
    featuresTitle: string
    features: { icon: string; title: string; desc: string }[]
    systems: { key: 'camino' | 'kumano' | 'shikoku' | 'saigoku'; icon: string; label: string; desc: string }[]
    screenshotsTitle: string
    languageProofTitle: string
    languageProofSubtitle: string
    languageProofBadges: string[]
    languageProofSamples: { locale: string; route: string; title: string; detail: string }[]
    waypointStoriesTitle: string
    waypointStoriesSubtitle: string
    waypointStoriesMore: string
    supportTitle: string
    supportBody: string[]
    supportCtaLabel: string
    supportCtaSubLabel: string
    faqTitle: string
    faq: { q: string; a: string }[]
    metaTitle: string
    metaDesc: string
  }
  routesList: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    groups: { key: 'camino' | 'kumano' | 'shikoku' | 'saigoku'; label: string; country: string; icon: string }[]
    routeSuffix: (n: number) => string
  }
  route: {
    labels: { distance: string; duration: string; difficulty: string; certification: string; startEnd: string }
    sections: { about: string; waypoints: string; pois: string; lodging: string; related: string; official: string }
    lodgingLabels: { beds: string; municipal: string; private: string; noPrice: string; rateNote: string; availabilityNote: string; temporarilyClosed: string }
    lodgingDisclosure: {
      caminoSourceLabel: string
      caminoConfidenceLabel: string
      caminoDescription: string
      kumanoSourceLabel: string
      kumanoConfidenceLabel: string
      kumanoDescription: string
      manualSourceLabel: string
      manualConfidenceLabel: string
      manualDescription: string
    }
    planning: {
      snapshotTitle: string
      planTitle: string
      intro: (days: number, distance: number, averageDailyKm: number) => string
      labels: { typicalDuration: string; averageDay: string; bestMonths: string; certificationMinimum: string; lodgingDensity: string; resupply: string; access: string }
      compostelaMinimum: string
      walkingDays: string
      restDays: string
      dailyTarget: string
      averageWalkingDay: string
      routeStyle: string
      dayLabel: string
      walkLabel: string
      restLabel: string
      distanceLabel: string
      cumulativeLabel: string
      lodgingHintLabel: string
      noLodgingHint: string
      lodgingStayLabel: string
      totalDaysLabel: string
      lodgingHintNote: string
      perDayUnit: string
      lodgingWord: string
      resupplyWord: string
      routeStyleValue: (lodging: string, resupply: string) => string
      valueLabels: Record<string, string>
      townSummary: string
      listedStays: (count: number) => string
      stayCount: (count: number) => string
    }
    decision: {
      title: string
      bestFor: string
      timeCommitment: string
      lodgingAndResupply: string
      offlineUse: string
      bestForFallback: string
      timeCommitmentValue: (days: number, averageDailyKm: number) => string
      lodgingResupplyValue: (lodging: string, resupply: string) => string
      offlineUseValue: string
    }
    safety: {
      title: string
      bestAvoid: string
      weatherRisk: string
      mobileSignal: string
      cash: string
      note: string
      recommendedCarry: string
    }
    officialResources: string
    websiteLabel: string
    waypointDetailNote: (count: number, sectionLabel: string) => string
    routeSummary: (distance: number, country: string) => string
    metadataTitle: (name: string, distance: number, days: number) => string
    metadataFallbackDesc: (name: string, distance: number, start: string, end: string) => string
    imageAlt: (name: string) => string
    touristType: string
    showingCount: (shown: number, total: number) => string
    routeConnector: string
    bestForLabels: Record<string, string>
    certificationLabels: Record<string, string>
    countryLabels: Record<string, string>
    bestMonthsLabels: Record<string, string>
    poiTypeLabels: Record<string, string>
    specialSections: {
      saigokuTitle: string
      saigokuDesc: string
      shikokuTitle: string
      shikokuDesc: string
      caminoFrancesTitle: string
      caminoFrancesDesc: string
      kumanoNakahechiTitle: string
      kumanoNakahechiDesc: string
      temples: string
      difficulty: string
      days: string
      km: string
    }
    ctaTitle: (name: string) => string
    ctaDesc: string
    breadcrumbHome: string
    breadcrumbRoutes: string
    daysUnit: string
    distanceFromStart: (km: number, elev: number) => string
    difficultyLabels: Record<string, string>
  }
  guideIndex: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    guides: { slug: 'camino-de-santiago' | 'kumano-kodo' | 'shikoku-henro'; title: string; desc: string; icon: string }[]
  }
  certifications: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    systems: { camino: string; kumano: string; shikoku: string; saigoku: string; achievement: string }
    minDistance: string
    stampsRequired: string
    whereToGet: string
    officialSite: string
    appCtaTitle: string
    appCtaDesc: string
  }
  sacredSites: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    kumanoTitle: string
    caminoTitle: string
    highlight: string
    story: string
    photoTip: string
    blessing: string
    appCtaTitle: string
    appCtaDesc: string
  }
}

const en: Dict = {
  nav: { routes: 'Routes', guide: 'Guide' },
  footer: { rights: '© 2026 Sacred Trails. All rights reserved.', privacy: 'Privacy Policy', allRoutes: 'All Routes', legal: 'Legal Notice', credits: 'Route content authored by the Sacred Trails team with AI assistance.' },
  home: {
    eyebrow: '18 Pilgrimage Routes',
    heroTitle: "Your Offline Guide to the World's Sacred Trails",
    heroDesc: 'Eighteen pilgrimage routes, ten languages, and the story behind every waypoint, carefully written and verified. Stage-by-stage offline navigation that works in the mountains, with no internet required.',
    browseRoutes: 'Browse Routes →',
    systemsTitle: '18 Routes Across Two Continents',
    systemsSubtitle: 'From medieval Spain to ancient Japan — all in one app.',
    caminoHeading: 'Camino de Santiago',
    japanHeading: 'Japanese Pilgrimage Routes',
    featuresTitle: 'Built for Pilgrims, Not Tourists',
    features: [
      { icon: '📡', title: 'Fully Offline', desc: 'All content — stages, waypoints, lodging, POIs — is bundled in the app. Walk without signal.' },
      { icon: '🌍', title: '10 Languages', desc: 'English, Japanese, Spanish, Chinese, Korean, French, German, Portuguese, Italian, and more.' },
      { icon: '📍', title: 'Stage Timeline', desc: 'A clear stage-by-stage view of your route — distances, elevations, and key stops at a glance.' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'Camino de Santiago', desc: 'Spain & France — 12 routes' },
      { key: 'kumano', icon: '⛩️', label: 'Kumano Kodo', desc: 'Japan — 4 ancient routes' },
      { key: 'shikoku', icon: '🏮', label: 'Shikoku Henro', desc: 'Japan — 88 sacred temples' },
      { key: 'saigoku', icon: '🌸', label: 'Saigoku Kannon', desc: 'Japan — 33 Kannon shrines' },
    ],
    screenshotsTitle: 'See It in Action',
    languageProofTitle: 'One App, Ten Languages',
    languageProofSubtitle: 'The same offline route data, waypoint stories, lodging notes, and POI labels are localized across the app.',
    languageProofBadges: ['English', '日本語', '繁中', 'Español', '한국어', 'Français', 'Deutsch', 'Português', 'Italiano', '简中'],
    languageProofSamples: [
      { locale: 'English', route: 'Camino Francés', title: 'Stage timeline', detail: 'Offline stages, waypoints, lodging notes' },
      { locale: '日本語', route: '熊野古道 中辺路', title: 'ステージタイムライン', detail: '区間・ウェイポイント・宿泊メモをオフラインで確認' },
      { locale: '繁中', route: '四國遍路', title: '路段時間軸', detail: '離線查看路段、路徑點故事與住宿筆記' },
      { locale: 'Español', route: 'Camino Portugués', title: 'Línea de etapas', detail: 'Etapas, waypoints y alojamiento sin conexión' },
    ],
    waypointStoriesTitle: 'Every stop has a story',
    waypointStoriesSubtitle: "We spent months writing the history behind each waypoint. Not just a dot on a timeline, but nine centuries of pilgrims, emperors, and stonecutters who walked the same path. Here's a taste.",
    waypointStoriesMore: 'The full prose for every waypoint lives inside the app.',
    supportTitle: 'A quiet labor of love for fellow pilgrims',
    supportBody: [
      "Sacred Trails started with a simple frustration: phone-dependent pilgrim apps stop working when you lose signal in the mountains. We wanted something that walked with you, not one that needed constant Wi-Fi to stay useful.",
      "So we spent months: mapping every stage, writing the story of every waypoint across 10 languages, verifying lodging, stamping practices, and the small practical details that make a difference on a hard afternoon. 18 routes. Thousands of waypoints. No ads, no subscription, no data collection.",
      "If what we built helps your pilgrimage, the app is free to download with route packs available for the trails you plan to walk — Camino Essentials, Camino Complete, Japan Pilgrimage, or All Routes Lifetime. No subscription, no ads. Buen Camino.",
    ],
    supportCtaLabel: 'Support us on the App Store',
    supportCtaSubLabel: 'Current listing and pricing are shown in the store.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'Does Sacred Trails work offline?', a: 'Yes. All route content including waypoints, stages, lodging, and POIs is bundled in the app. No internet connection is required on the trail, and no map tiles need to be downloaded.' },
      { q: 'How many pilgrimage routes are included?', a: 'Sacred Trails covers 18 routes: 12 Camino routes (Francés, Portugués, Portugués Coastal, Norte, Primitivo, Inglés, Vía de la Plata, Invierno, Fisterra-Muxía, Le Puy, Mozárabe, San Salvador), 4 Kumano Kodo routes (Nakahechi, Kohechi, Ohechi, Iseji), the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.' },
      { q: 'How much does Sacred Trails cost?', a: 'Sacred Trails is free to download. Route content is available through route packs: Camino Essentials, Camino Complete, Japan Pilgrimage, or All Routes Lifetime. Each is a one-time purchase — no subscription and no ads.' },
      { q: 'Which languages are supported?', a: 'Sacred Trails is fully localized in 10 languages: English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, Korean, French, German, Portuguese, and Italian. Interface, route descriptions, waypoint names, and POI labels are all translated.' },
      { q: 'Do I need a GPS signal or cellular data?', a: 'Neither. The stage timeline does not depend on GPS or network. You read the next stage, landmarks, and lodging from the bundled data even in deep mountain sections with zero signal.' },
      { q: 'Is there a traditional map view?', a: "Sacred Trails uses a Stage Timeline rather than a scroll-and-pan map. Each route is broken into clearly defined stages with distances, elevations, cumulative mileage, lodging clusters, and key waypoints — the information pilgrims actually use day to day." },
      { q: 'Can I plan for more than one route?', a: 'Yes. Many pilgrims walk the Camino Francés one year and the Kumano Kodo the next. Sacred Trails is built for that kind of multi-route pilgrim — choose the route pack that fits your journey, or get All Routes Lifetime for full access.' },
      { q: 'How often is content updated?', a: 'Route data is reviewed regularly and shipped through standard App Store updates. Waypoint corrections, lodging changes, and new POIs are rolled into app updates.' },
      { q: 'Does it work on iPad?', a: 'Yes. Sacred Trails runs on iPhone and iPad with iOS 16.0 or later. The stage timeline adapts to larger screens with multi-column layouts.' },
      { q: 'Is there an Android version?', a: 'The Android release is in Google Play preparation. The same offline route data, stamps, and cloud backup flow are being prepared for Android users.' },
    ],
    metaTitle: 'Sacred Trails — 18 Pilgrimage Routes Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Languages',
    metaDesc: 'Complete offline guide for 18 sacred pilgrimage trails in 10 languages. Camino de Santiago, Kumano Kodo, Shikoku Henro and Saigoku 33 with stage-by-stage navigation, no subscription, and no internet required.',
  },
  routesList: {
    title: 'All Pilgrimage Routes',
    subtitle: '18 routes across two continents — all available offline in Sacred Trails.',
    metaTitle: 'All 18 Pilgrimage Routes — Camino, Kumano Kodo & Shikoku Henro',
    metaDesc: 'Browse all 18 sacred pilgrimage routes: 12 Camino de Santiago routes, 4 Kumano Kodo routes, Shikoku Henro, and Saigoku 33 Kannon.',
    groups: [
      { key: 'camino', label: 'Camino de Santiago', country: 'Spain & France', icon: '🐚' },
      { key: 'kumano', label: 'Kumano Kodo', country: 'Japan', icon: '⛩️' },
      { key: 'shikoku', label: 'Shikoku Henro', country: 'Japan', icon: '🏮' },
      { key: 'saigoku', label: 'Saigoku 33 Kannon', country: 'Japan', icon: '🌸' },
    ],
    routeSuffix: n => n === 1 ? '1 route' : `${n} routes`,
  },
  route: {
    labels: { distance: 'Distance', duration: 'Duration', difficulty: 'Difficulty', certification: 'Certification', startEnd: 'Start → End' },
    sections: { about: 'About the Route', waypoints: 'Key Waypoints', pois: 'Points of Interest', lodging: 'Accommodation', related: 'Related Routes', official: 'Official resource' },
    lodgingLabels: { beds: 'beds', municipal: 'Municipal', private: 'Private', noPrice: 'Rate varies', rateNote: 'Rates vary; record your own price notes.', availabilityNote: 'Rates vary; use your own price notes and verify availability directly before your trip.', temporarilyClosed: 'Temporarily closed' },
    lodgingDisclosure: {
      caminoSourceLabel: 'Camino / Gronze',
      caminoConfidenceLabel: 'Source reference',
      caminoDescription: 'Camino accommodation entries are compiled from Gronze-oriented route research as planning references, not live inventory or an affiliated booking feed. Rates are traveler-owned notes because they change by season and operator; confirm availability directly before departure.',
      kumanoSourceLabel: 'Kumano Nakahechi / Kumano Travel',
      kumanoConfidenceLabel: 'Kumano Travel source reference',
      kumanoDescription: 'Kumano Nakahechi lodging is based on Kumano Travel-oriented planning data, not live availability or booking. Use it to shortlist towns and properties, then verify current rules, meals, closures, and availability with the operator.',
      manualSourceLabel: 'Manual route notes',
      manualConfidenceLabel: 'Verify directly',
      manualDescription: 'This route uses manually maintained lodging notes or bundled app data. Treat the list as a pre-trip starting point, not live inventory, and verify each stay directly before building an itinerary.',
    },
    planning: {
      snapshotTitle: 'Planning Snapshot',
      planTitle: 'Rough Distance Planner',
      intro: (days, distance, averageDailyKm) => `Use this as a rough distance sketch before detailed planning: ${days} walking days across ${distance}km, averaging about ${averageDailyKm}km per day. Adjust for real stages, terrain, rest days, weather, opening seasons, and lodging availability before booking.`,
      labels: { typicalDuration: 'Typical duration', averageDay: 'Average day', bestMonths: 'Best months', certificationMinimum: 'Certificate minimum', lodgingDensity: 'Lodging density', resupply: 'Resupply', access: 'Access' },
      compostelaMinimum: '100km walking',
      walkingDays: 'Walking days',
      restDays: 'Rest days',
      dailyTarget: 'Daily target',
      averageWalkingDay: 'Average walking day',
      routeStyle: 'Route style',
      dayLabel: 'Day',
      walkLabel: 'Walk',
      restLabel: 'Rest',
      distanceLabel: 'Distance',
      cumulativeLabel: 'Total',
      lodgingHintLabel: 'Route / lodging reference',
      noLodgingHint: 'Verify lodging directly',
      lodgingStayLabel: 'listed stays',
      totalDaysLabel: 'Total days',
      lodgingHintNote: 'Distances are averaged. Route markers use the nearest ordered waypoint to each rough segment; lodging references are supporting town data, not recommended overnight stops or confirmed availability.',
      perDayUnit: 'km/day',
      lodgingWord: 'lodging',
      resupplyWord: 'resupply',
      routeStyleValue: (lodging, resupply) => `${lodging} lodging · ${resupply} resupply`,
      valueLabels: { high: 'high', medium: 'medium', low: 'low', easy: 'easy', moderate: 'moderate', hard: 'hard' },
      townSummary: 'Town lodging summary',
      listedStays: count => `${count} listed stays`,
      stayCount: count => `${count} ${count === 1 ? 'stay' : 'stays'}`,
    },
    decision: {
      title: 'Is this route a good fit?',
      bestFor: 'Best for',
      timeCommitment: 'Time commitment',
      lodgingAndResupply: 'Lodging and resupply',
      offlineUse: 'Why use Sacred Trails',
      bestForFallback: 'Route planning',
      timeCommitmentValue: (days, averageDailyKm) => `${days} walking days at about ${averageDailyKm}km/day`,
      lodgingResupplyValue: (lodging, resupply) => `${lodging} lodging · ${resupply} resupply`,
      offlineUseValue: 'Offline stages, waypoint stories, lodging notes, and route context stay available when mobile signal drops.',
    },
    safety: {
      title: 'Before You Go',
      bestAvoid: 'Best avoid',
      weatherRisk: 'Weather risk',
      mobileSignal: 'Mobile signal',
      cash: 'Cash',
      note: 'Note',
      recommendedCarry: 'Recommended to carry',
    },
    officialResources: 'Official Resources',
    websiteLabel: 'Website',
    waypointDetailNote: (count, sectionLabel) => `${count} ${sectionLabel.toLowerCase()} total · Sacred Trails app contains full detail for every waypoint.`,
    routeSummary: (distance, country) => `${distance}km pilgrimage route in ${country}`,
    metadataTitle: (name, distance, days) => `${name} — ${distance}km · ${days} days · Sacred Trails Offline Guide`,
    metadataFallbackDesc: (name, distance, start, end) => `${name}: ${distance}km pilgrimage route from ${start} to ${end}. Full offline stages, waypoints, and stamps in Sacred Trails.`,
    imageAlt: name => `${name} pilgrimage route`,
    touristType: 'Pilgrim',
    showingCount: (shown, total) => `Showing ${shown} of ${total}`,
    routeConnector: '→',
    bestForLabels: {},
    certificationLabels: {},
    countryLabels: { ES: 'Spain', 'PT+ES': 'Portugal and Spain' },
    bestMonthsLabels: {},
    poiTypeLabels: {},
    specialSections: {
      saigokuTitle: 'Seven Prefectures, One Ancient Circuit',
      saigokuDesc: "Japan's oldest pilgrimage (718 CE) spans Wakayama, Osaka, Nara, Kyoto, Hyogo, Shiga, and Gifu — each region with distinct character and temple styles.",
      shikokuTitle: 'Four Prefectures, Four Dōjō',
      shikokuDesc: 'The 88-temple circuit is divided into four sections — one per prefecture — each with a distinct character and spiritual theme.',
      caminoFrancesTitle: 'Five Regions, One Ancient Road',
      caminoFrancesDesc: 'The 780km Camino Francés unfolds across five distinct regional characters — from the brutal opening climb over the Pyrenees to the final emotional approach into Santiago.',
      kumanoNakahechiTitle: 'Four Routes into the Sacred Mountains',
      kumanoNakahechiDesc: 'The Kumano Kodō is not a single trail but a network of four historic routes, each approaching the Kumano Sanzan from a different direction and with a different character.',
      temples: 'Temples',
      difficulty: 'Difficulty',
      days: 'days',
      km: 'km',
    },
    ctaTitle: name => `Navigate the ${name} Offline`,
    ctaDesc: 'Download Sacred Trails and walk with full route data — no internet required.',
    breadcrumbHome: 'Home',
    breadcrumbRoutes: 'Routes',
    daysUnit: 'days',
    distanceFromStart: (km, elev) => `${km}km from start · ${elev}m`,
    difficultyLabels: { easy: 'Easy', moderate: 'Moderate', challenging: 'Challenging', very_challenging: 'Very Challenging' },
  },
  guideIndex: {
    title: 'Pilgrimage Guides',
    subtitle: "Everything you need to plan and walk the world's great pilgrimage routes.",
    metaTitle: 'Pilgrimage Route Guides — Camino, Kumano Kodo, Shikoku Henro',
    metaDesc: "Complete guides for the world's most famous pilgrimage routes.",
    guides: [
      { slug: 'camino-de-santiago', title: 'Camino de Santiago — Complete Guide', desc: '12 routes, 780km to 1200km, starting from France or Portugal.', icon: '🐚' },
      { slug: 'kumano-kodo', title: 'Kumano Kodo — Complete Guide', desc: '4 ancient routes through the sacred forests of the Kii Peninsula.', icon: '⛩️' },
      { slug: 'shikoku-henro', title: 'Shikoku 88 Temple Pilgrimage — Complete Guide', desc: "1,200km circuit of Shikoku island, following Kōbō Daishi's footsteps.", icon: '🏮' },
    ],
  },
  certifications: {
    title: 'Pilgrimage Certificates',
    subtitle: 'Every certificate you can earn on the Camino de Santiago, Kumano Kodo, Shikoku Henro, and Saigoku 33 — with official requirements and where to collect them.',
    metaTitle: 'Pilgrimage Certificates Guide — Compostela, Kumano, Shikoku Henro',
    metaDesc: 'Complete guide to all pilgrimage certificates: Compostela, Kumano Kodo stamps, Shikoku Henro kanman seal, Dual Pilgrim, and more.',
    systems: { camino: 'Camino de Santiago', kumano: 'Kumano Kodo', shikoku: 'Shikoku Henro', saigoku: 'Saigoku 33', achievement: 'Special Achievements' },
    minDistance: 'Minimum distance',
    stampsRequired: 'Stamp requirement',
    whereToGet: 'Where to collect',
    officialSite: 'Official site',
    appCtaTitle: 'Track Your Certificates in the App',
    appCtaDesc: 'Sacred Trails tracks your stamp progress on every route — so you always know how close you are to your certificate.',
  },
  sacredSites: {
    title: 'Sacred Sites & Pilgrimage Shrines',
    subtitle: 'The cathedrals, grand shrines, and holy places that await at the end of every stage — with the stories behind them.',
    metaTitle: 'Sacred Sites — Camino Cathedrals & Kumano Shrines | Sacred Trails',
    metaDesc: 'Discover the sacred sites of the Camino de Santiago and Kumano Kodo: cathedrals, grand shrines, and the stories behind every holy place.',
    kumanoTitle: 'Kumano Grand Shrines (熊野三山)',
    caminoTitle: 'Camino Cathedrals & Sacred Places',
    highlight: 'Highlight',
    story: 'History',
    photoTip: 'Photo tip',
    blessing: 'Blessing',
    appCtaTitle: 'Visit Every Sacred Site with Sacred Trails',
    appCtaDesc: 'Sacred Trails guides you to every shrine and cathedral on your route — with offline maps, stage details, and cultural context.',
  },
}

const ja: Dict = {
  nav: { routes: 'ルート一覧', guide: 'ガイド' },
  footer: { rights: '© 2026 Sacred Trails. All rights reserved.', privacy: 'プライバシーポリシー', allRoutes: '全ルート', legal: '法的告知', credits: '路線コンテンツはSacred TrailsチームがAI支援のもとで執筆。' },
  home: {
    eyebrow: '18の巡礼ルート',
    heroTitle: 'オフラインで歩ける世界の聖なる巡礼ガイド',
    heroDesc: '18の巡礼ルート、10言語、そして全ウェイポイントの物語を丁寧に執筆・検証しました。山の中でも動く、ステージごとのオフラインナビゲーション。Wi-Fi不要。',
    browseRoutes: 'ルートを見る →',
    systemsTitle: '2大陸・18ルート',
    systemsSubtitle: '中世スペインから古代日本まで — 1つのアプリで。',
    caminoHeading: 'カミーノ・デ・サンティアゴ',
    japanHeading: '日本の巡礼路',
    featuresTitle: '観光客ではなく巡礼者のために',
    features: [
      { icon: '📡', title: '完全オフライン', desc: 'ステージ・ウェイポイント・宿泊・POI全てがアプリ内に収録。電波なしでも歩けます。' },
      { icon: '🌍', title: '10言語対応', desc: '日本語・英語・スペイン語・中国語・韓国語・フランス語・ドイツ語など。' },
      { icon: '📍', title: 'ステージタイムライン', desc: 'ルートを明確に区切り、距離・標高・主要ポイントを一覧で把握。' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'カミーノ・デ・サンティアゴ', desc: 'スペイン・フランス — 12ルート' },
      { key: 'kumano', icon: '⛩️', label: '熊野古道', desc: '日本 — 4つの古道' },
      { key: 'shikoku', icon: '🏮', label: '四国遍路', desc: '日本 — 88ヶ所の霊場' },
      { key: 'saigoku', icon: '🌸', label: '西国三十三所', desc: '日本 — 33観音霊場' },
    ],
    screenshotsTitle: 'アプリの画面',
    languageProofTitle: '1つのアプリで10言語',
    languageProofSubtitle: '同じオフラインルートデータ、ウェイポイントの物語、宿泊メモ、POIラベルを各言語で利用できます。',
    languageProofBadges: ['English', '日本語', '繁中', 'Español', '한국어', 'Français', 'Deutsch', 'Português', 'Italiano', '简中'],
    languageProofSamples: [
      { locale: 'English', route: 'Camino Francés', title: 'Stage timeline', detail: 'Offline stages, waypoints, lodging notes' },
      { locale: '日本語', route: '熊野古道 中辺路', title: 'ステージタイムライン', detail: '区間・ウェイポイント・宿泊メモをオフラインで確認' },
      { locale: '繁中', route: '四國遍路', title: '路段時間軸', detail: '離線查看路段、路徑點故事與住宿筆記' },
      { locale: 'Español', route: 'Camino Portugués', title: 'Línea de etapas', detail: 'Etapas, waypoints y alojamiento sin conexión' },
    ],
    waypointStoriesTitle: 'すべての場所に物語がある',
    waypointStoriesSubtitle: '各ウェイポイントの背景にある歴史を、私たちは数ヶ月かけて書き起こしました。タイムライン上の一点ではなく、同じ道を歩いた九世紀にわたる巡礼者・皇族・石工たちの物語です。ほんの一部をどうぞ。',
    waypointStoriesMore: '全ウェイポイントの完全版はアプリ内に収録されています。',
    supportTitle: '巡礼者のための、静かな愛の結晶',
    supportBody: [
      'Sacred Trailsは、ひとつの不満から生まれました——電波に依存する巡礼アプリは、山で電波を失うと使えなくなる。私たちは、常時Wi-Fiがなくても寄り添い続けるアプリを作りたかったのです。',
      'そして数ヶ月かけて、すべてのステージを描き、ウェイポイントの物語を10言語で書き、宿泊・朱印・苦しい午後に効く小さな実用情報を検証しました。18ルート、数千のウェイポイント。広告なし、サブスクなし、データ収集なし。',
      'もし私たちが作ったものがあなたの巡礼に役立つなら、アプリは無料でダウンロードでき、歩く道に合わせたルートパック（カミーノ・エッセンシャル、カミーノ・コンプリート、日本巡礼、全ルート永久）を選べます。サブスクなし、広告なし。良き道を。',
    ],
    supportCtaLabel: 'App Storeで応援する',
    supportCtaSubLabel: '現在の掲載内容と価格はストアで確認できます。',
    faqTitle: 'よくある質問',
    faq: [
      { q: 'オフラインで使えますか？', a: 'はい。ウェイポイント・ステージ・宿泊情報・POIなど全ルートのコンテンツがアプリ内に収録されています。巡礼中のWi-Fiも地図タイルのダウンロードも不要です。' },
      { q: '何本の巡礼ルートに対応していますか？', a: '18ルートを収録：カミーノ・デ・サンティアゴ12ルート（フランス人の道、ポルトガル人の道、北の道、原始の道、イギリス人の道、南の道、銀の道、冬の道、サナブレス、カタラン、レバンテ、アラゴネス）、熊野古道4ルート（中辺路・小辺路・大辺路・伊勢路）、四国88ヶ所遍路、西国三十三所観音巡礼。' },
      { q: '料金は？', a: 'Sacred Trailsは無料でダウンロードできます。ルートコンテンツはルートパックで購入可能：カミーノ・エッセンシャル、カミーノ・コンプリート、日本巡礼、または全ルート永久。すべて買い切り型で、サブスクと広告はありません。' },
      { q: '対応言語は？', a: '10言語完全ローカライズ：日本語・英語・スペイン語・繁体字中国語・簡体字中国語・韓国語・フランス語・ドイツ語・ポルトガル語・イタリア語。UI、ルート説明、ウェイポイント名、POIラベルすべて翻訳済み。' },
      { q: 'GPSや電波は必要ですか？', a: 'どちらも不要です。ステージタイムラインはGPSもネットワークも使わず、電波ゼロの山間部でも次のステージ・ランドマーク・宿泊情報がすぐ読めます。' },
      { q: '地図機能はありますか？', a: '従来型の地図ではなく「ステージタイムライン」方式を採用。各ルートを明確な区間に分け、距離・標高・累積マイル・宿泊ゾーン・主要ウェイポイントを一覧表示 — 巡礼者が日々実際に使う情報だけを整理しています。' },
      { q: '複数ルートを計画できますか？', a: 'はい。今年はカミーノ・フランセス、来年は熊野古道という多ルート巡礼者のために設計されています。旅に合わせたルートパックを選ぶか、全ルート永久で全コンテンツにアクセスできます。' },
      { q: 'コンテンツは更新されますか？', a: 'ルートデータは定期的にレビューされ、通常のApp Storeアップデートで配信されます。ウェイポイント修正・宿泊情報の変更・新POIはアプリのアップデートに含まれます。' },
      { q: 'iPadでも使えますか？', a: 'はい。iPhoneおよびiOS 16.0以上のiPadで動作します。ステージタイムラインは大画面に合わせてマルチカラム表示に最適化されます。' },
      { q: 'Android版はありますか？', a: 'Android版はGoogle Play向けに準備中です。同じオフラインルートデータ、スタンプ、クラウドバックアップ機能をAndroidでも提供する予定です。' },
    ],
    metaTitle: 'Sacred Trails — 18巡礼ルート オフライン対応 · カミーノ・熊野古道・四国遍路 · 10言語',
    metaDesc: '18の巡礼ルートを10言語で完全オフライン対応。カミーノ・デ・サンティアゴ、熊野古道、四国遍路、西国三十三所をステージごとに案内。サブスクなし、Wi-Fi不要。',
  },
  routesList: {
    title: '全巡礼ルート',
    subtitle: '2大陸・18ルート — 全てSacred Trailsでオフライン利用可能。',
    metaTitle: '全18巡礼ルート一覧 — カミーノ・熊野古道・四国遍路',
    metaDesc: 'カミーノ12ルート、熊野古道4ルート、四国88ヶ所、西国三十三所 — 18の聖なる巡礼路すべて。',
    groups: [
      { key: 'camino', label: 'カミーノ・デ・サンティアゴ', country: 'スペイン・フランス', icon: '🐚' },
      { key: 'kumano', label: '熊野古道', country: '日本', icon: '⛩️' },
      { key: 'shikoku', label: '四国遍路', country: '日本', icon: '🏮' },
      { key: 'saigoku', label: '西国三十三所', country: '日本', icon: '🌸' },
    ],
    routeSuffix: n => `${n}ルート`,
  },
  route: {
    labels: { distance: '距離', duration: '所要日数', difficulty: '難易度', certification: '認定証', startEnd: '起点 → 終点' },
    sections: { about: 'ルートについて', waypoints: '主要ウェイポイント', pois: '見どころ', lodging: '宿泊施設', related: '関連ルート', official: '公式情報' },
    lodgingLabels: { beds: 'ベッド', municipal: '公営', private: '民営', noPrice: '料金変動', rateNote: '料金は変動します。自分の記録で管理してください。', availabilityNote: '料金は変動します。自分の価格メモを使い、出発前に空き状況を直接確認してください。', temporarilyClosed: '一時休業' },
    lodgingDisclosure: {
      caminoSourceLabel: 'Camino / Gronze',
      caminoConfidenceLabel: 'ソース参考',
      caminoDescription: 'Caminoの宿泊情報はGronze系のルート調査をもとにした計画用参考情報であり、リアルタイム在庫や提携予約データではありません。料金は季節や運営者で変わるため、出発前に空き状況を直接確認してください。',
      kumanoSourceLabel: '熊野中辺路 / Kumano Travel',
      kumanoConfidenceLabel: 'Kumano Travelソース参考',
      kumanoDescription: '熊野中辺路の宿泊情報はKumano Travel系の計画データをもとにしており、リアルタイム空室や予約機能ではありません。候補地の絞り込みに使い、最新ルール、食事、休業、空き状況は運営者に直接確認してください。',
      manualSourceLabel: '手動ルートメモ',
      manualConfidenceLabel: '直接確認',
      manualDescription: 'このルートは手動管理の宿泊メモまたはアプリ同梱データを使用しています。出発前の起点として扱い、リアルタイム在庫ではないため、宿泊先は直接確認してください。',
    },
    planning: {
      snapshotTitle: '計画スナップショット',
      planTitle: '距離の概算プランナー',
      intro: (days, distance, averageDailyKm) => `詳細計画前の距離目安として、${distance}kmを${days}日で歩き、1日あたり約${averageDailyKm}kmを想定します。実際の区間、地形、休息日、天候、営業時期、宿の空き状況に合わせて調整してください。`,
      labels: { typicalDuration: '標準日数', averageDay: '1日の目安', bestMonths: 'おすすめ時期', certificationMinimum: '認定最低距離', lodgingDensity: '宿泊密度', resupply: '補給', access: 'アクセス' },
      compostelaMinimum: '徒歩100km',
      walkingDays: '歩行日数',
      restDays: '休息日',
      dailyTarget: '1日の目標',
      averageWalkingDay: '歩行日の平均',
      routeStyle: 'ルート傾向',
      dayLabel: '日',
      walkLabel: '歩行',
      restLabel: '休息',
      distanceLabel: '距離',
      cumulativeLabel: '累計',
      lodgingHintLabel: '区間 / 宿泊参考',
      noLodgingHint: '宿を直接確認',
      lodgingStayLabel: '件',
      totalDaysLabel: '合計日数',
      lodgingHintNote: '距離は平均値です。区間表示は各概算区間に最も近い順序付きウェイポイントを使います。宿泊参考は補助的な町データであり、推奨宿泊地や空室確認ではありません。',
      perDayUnit: 'km/日',
      lodgingWord: '宿泊',
      resupplyWord: '補給',
      routeStyleValue: (lodging, resupply) => `宿泊 ${lodging} · 補給 ${resupply}`,
      valueLabels: { high: '多い', medium: '中程度', low: '少ない', easy: '容易', moderate: '普通', hard: '難しい' },
      townSummary: '町別宿泊サマリー',
      listedStays: count => `掲載宿 ${count}件`,
      stayCount: count => `${count}件`,
    },
    decision: {
      title: 'このルートは自分に合う？',
      bestFor: '向いている旅',
      timeCommitment: '必要日数',
      lodgingAndResupply: '宿泊と補給',
      offlineUse: 'Sacred Trails が役立つ理由',
      bestForFallback: 'ルート計画',
      timeCommitmentValue: (days, averageDailyKm) => `${days}日、1日約${averageDailyKm}km`,
      lodgingResupplyValue: (lodging, resupply) => `宿泊 ${lodging} · 補給 ${resupply}`,
      offlineUseValue: '電波が弱い場所でも、区間、ウェイポイントの物語、宿泊メモ、ルート情報をオフラインで確認できます。',
    },
    safety: {
      title: '出発前に',
      bestAvoid: '避けたい時期',
      weatherRisk: '天候リスク',
      mobileSignal: '携帯電波',
      cash: '現金',
      note: '注意',
      recommendedCarry: '携行推奨',
    },
    officialResources: '公式情報',
    websiteLabel: 'Webサイト',
    waypointDetailNote: count => `全${count}件のウェイポイント · 詳細はSacred Trailsアプリに収録。`,
    routeSummary: (distance, country) => `${country}の${distance}km巡礼ルート`,
    metadataTitle: (name, distance, days) => `${name} — ${distance}km · ${days}日 · Sacred Trailsオフラインガイド`,
    metadataFallbackDesc: (name, distance, start, end) => `${name}：${start}から${end}までの${distance}km巡礼ルート。Sacred Trailsでオフラインの区間、ウェイポイント、スタンプ情報を確認できます。`,
    imageAlt: name => `${name}の巡礼ルート`,
    touristType: '巡礼者',
    showingCount: (shown, total) => `${total}件中${shown}件を表示`,
    routeConnector: '→',
    bestForLabels: {
      'Sea views & flat terrain': '海景と平坦な道',
      'Wild coast & solitude': '荒々しい海岸と静かな巡礼',
      'Post-Camino extension': 'カミーノ後の延伸ルート',
      'First-timers & community': '初めての巡礼と交流',
      'Short & historical': '短い日程と歴史',
      'Medieval France & history': '中世フランスと歴史',
      'Moorish history & heat': 'モサラベの歴史と暑さへの備え',
      'Mountain challenge': '山岳チャレンジ',
      'Culture & gentle terrain': '文化と歩きやすい地形',
      'Coastal scenery & solitude': '海岸風景と静けさ',
      'Wild Galicia & solitude': 'ガリシアの自然と孤独',
      'Full challenge & authenticity': '本格的な長距離チャレンジ',
      'Solitude & full challenge': '静けさと本格的な難路',
      'Japanese sacred history & first-timers to Kumano': '熊野入門と日本の聖地文化',
      'Sacred Japan history & long trails': '日本の聖地史と長い道',
      'Ultimate spiritual challenge': '究極の精神的チャレンジ',
      'Urban convenience & temples': '都市アクセスと寺院巡礼',
      'Full pilgrimage circuit': '本格的な巡礼周回',
    },
    certificationLabels: { compostela: 'コンポステーラ', Compostela: 'コンポステーラ', fisterrana: 'フィステラーナ', Salvadorana: 'サルバドラーナ', 'Créanciale': 'クレアンシャル', shuincho: '朱印帳', 'Nōkyō-chō (納経帳)': '納経帳', 'Compostela (via Vía de la Plata)': 'コンポステーラ（銀の道経由）' },
    countryLabels: { ES: 'スペイン', Spain: 'スペイン', France: 'フランス', Japan: '日本', 'PT+ES': 'ポルトガル・スペイン', 'Portugal / Spain': 'ポルトガル・スペイン', 'France / Spain': 'フランス・スペイン' },
    bestMonthsLabels: {
      'April–June, September–October': '4〜6月、9〜10月',
      'April–October': '4〜10月',
      'February–May, September–November': '2〜5月、9〜11月',
      'March–June, September–November': '3〜6月、9〜11月',
      'March–May, October–November': '3〜5月、10〜11月',
      'March–May, September–November': '3〜5月、9〜11月',
      'May–June, September': '5〜6月、9月',
      'May–June, September–October': '5〜6月、9〜10月',
      'May–October': '5〜10月',
    },
    poiTypeLabels: {},
    specialSections: {
      saigokuTitle: '七府県をめぐる古い巡礼路',
      saigokuDesc: '日本最古の巡礼（718年）は、和歌山・大阪・奈良・京都・兵庫・滋賀・岐阜を結び、地域ごとに異なる表情と寺院文化を見せます。',
      shikokuTitle: '四国四県、四つの道場',
      shikokuDesc: '八十八ヶ所の巡礼は四県ごとの区分を持ち、それぞれに異なる性格と精神的テーマがあります。',
      caminoFrancesTitle: '五つの地域を歩く古い道',
      caminoFrancesDesc: '780kmのフランス人の道は、ピレネー越えからメセタ、そしてサンティアゴへの感動的な到着まで、五つの地域性を横断します。',
      kumanoNakahechiTitle: '聖なる山へ入る四つの道',
      kumanoNakahechiDesc: '熊野古道は一本の道ではなく、熊野三山へ異なる方向から向かう歴史的な道のネットワークです。',
      temples: '札所',
      difficulty: '難易度',
      days: '日',
      km: 'km',
    },
    ctaTitle: name => `${name}をオフラインで歩く`,
    ctaDesc: 'Sacred Trailsをダウンロードすれば、全ルートデータが手元に — Wi-Fi不要。',
    breadcrumbHome: 'ホーム',
    breadcrumbRoutes: 'ルート一覧',
    daysUnit: '日',
    distanceFromStart: (km, elev) => `起点から${km}km · 標高${elev}m`,
    difficultyLabels: { easy: 'やさしい', moderate: '普通', challenging: '上級', very_challenging: '最上級' },
  },
  guideIndex: {
    title: '巡礼ガイド',
    subtitle: '世界の偉大な巡礼路を計画し、歩くために必要なすべて。',
    metaTitle: '巡礼ルートガイド — カミーノ・熊野古道・四国遍路',
    metaDesc: '世界で最も有名な巡礼ルートの完全ガイド。',
    guides: [
      { slug: 'camino-de-santiago', title: 'カミーノ・デ・サンティアゴ — 完全ガイド', desc: '12ルート、780km〜1200km、フランスまたはポルトガルから出発。', icon: '🐚' },
      { slug: 'kumano-kodo', title: '熊野古道 — 完全ガイド', desc: '紀伊半島の聖なる森を通る4つの古道。', icon: '⛩️' },
      { slug: 'shikoku-henro', title: '四国八十八ヶ所遍路 — 完全ガイド', desc: '弘法大師の足跡を辿る四国一周1,200kmの霊場巡り。', icon: '🏮' },
    ],
  },
  certifications: {
    title: '巡礼認定証ガイド',
    subtitle: 'カミーノ・デ・サンティアゴ、熊野古道、四国遍路、西国三十三所で取得できるすべての認定証を、公式要件と受け取り場所とともに紹介します。',
    metaTitle: '巡礼認定証ガイド — コンポステーラ・熊野・四国遍路',
    metaDesc: '巡礼認定証の完全ガイド：コンポステーラ、熊野古道スタンプ、四国遍路結願印、二つの道の巡礼者など。',
    systems: { camino: 'カミーノ・デ・サンティアゴ', kumano: '熊野古道', shikoku: '四国遍路', saigoku: '西国三十三所', achievement: '特別達成' },
    minDistance: '最低距離',
    stampsRequired: 'スタンプ要件',
    whereToGet: '受け取り場所',
    officialSite: '公式サイト',
    appCtaTitle: 'アプリで認定証の進捗を管理',
    appCtaDesc: 'Sacred Trailsは各ルートのスタンプ進捗を記録します。認定証まで残りどのくらいか、いつでも確認できます。',
  },
  sacredSites: {
    title: '聖地と巡礼の霊場',
    subtitle: '各ステージの終わりに待つ大聖堂、熊野三山、そして聖なる場所とその背後にある物語。',
    metaTitle: '聖地ガイド — カミーノの大聖堂と熊野三山 | Sacred Trails',
    metaDesc: 'カミーノ・デ・サンティアゴの大聖堂と熊野古道の神社を探訪。すべての聖地の歴史と見どころ。',
    kumanoTitle: '熊野三山',
    caminoTitle: 'カミーノの大聖堂と聖地',
    highlight: '見どころ',
    story: '歴史',
    photoTip: '撮影スポット',
    blessing: 'ご利益',
    appCtaTitle: 'Sacred Trailsで全ての聖地を訪ねよう',
    appCtaDesc: 'Sacred Trailsはルート上のすべての神社と大聖堂を、オフラインマップ・ステージ詳細・文化的背景とともに案内します。',
  },
}

const zhTW: Dict = {
  nav: { routes: '路線', guide: '攻略' },
  footer: { rights: '© 2026 Sacred Trails. 保留所有權利。', privacy: '隱私權政策', allRoutes: '全部路線', legal: '法律聲明', credits: '路線內容由 Sacred Trails 團隊在 AI 協助下撰寫。' },
  home: {
    eyebrow: '18 條朝聖之路',
    heroTitle: '離線也能走遍全世界的聖地朝聖路',
    heroDesc: '18 條朝聖路線、10 國語言、每個路徑點背後的故事皆經細心書寫與查證。就算在山中沒訊號也能用的分段離線導航。',
    browseRoutes: '瀏覽路線 →',
    systemsTitle: '橫跨兩大洲的 18 條路線',
    systemsSubtitle: '從中世紀西班牙到古日本 — 一個 App 全部搞定。',
    caminoHeading: '聖雅各之路（Camino）',
    japanHeading: '日本朝聖之路',
    featuresTitle: '為朝聖者而生，不是為觀光客',
    features: [
      { icon: '📡', title: '完全離線', desc: '所有路線內容都內建在 App 中：路段、路徑點、住宿、景點。沒訊號也能走。' },
      { icon: '🌍', title: '10 國語言', desc: '中文（繁簡）、英、日、西、韓、法、德、葡、義。' },
      { icon: '📍', title: '路段時間軸', desc: '路線分段清楚，距離、海拔、關鍵停留點一目了然。' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: '聖雅各之路', desc: '西班牙・法國 — 12 條路線' },
      { key: 'kumano', icon: '⛩️', label: '熊野古道', desc: '日本 — 4 條古道' },
      { key: 'shikoku', icon: '🏮', label: '四國遍路', desc: '日本 — 88 座靈場' },
      { key: 'saigoku', icon: '🌸', label: '西國三十三所', desc: '日本 — 33 觀音靈場' },
    ],
    screenshotsTitle: 'App 畫面',
    languageProofTitle: '一個 App，10 國語言',
    languageProofSubtitle: '同一套離線路線資料、路徑點故事、住宿筆記與景點標籤，都能以不同語言使用。',
    languageProofBadges: ['English', '日本語', '繁中', 'Español', '한국어', 'Français', 'Deutsch', 'Português', 'Italiano', '简中'],
    languageProofSamples: [
      { locale: 'English', route: 'Camino Francés', title: 'Stage timeline', detail: 'Offline stages, waypoints, lodging notes' },
      { locale: '日本語', route: '熊野古道 中辺路', title: 'ステージタイムライン', detail: '区間・ウェイポイント・宿泊メモをオフラインで確認' },
      { locale: '繁中', route: '四國遍路', title: '路段時間軸', detail: '離線查看路段、路徑點故事與住宿筆記' },
      { locale: 'Español', route: 'Camino Portugués', title: 'Línea de etapas', detail: 'Etapas, waypoints y alojamiento sin conexión' },
    ],
    waypointStoriesTitle: '每一個停靠點，都有一個故事',
    waypointStoriesSubtitle: '我們花了數月，為每個路徑點寫下它背後的歷史。它不只是時間軸上的一個點，而是九百年來同一條路上的朝聖者、皇室、石匠所走過的故事。來看幾個片段。',
    waypointStoriesMore: '所有路徑點的完整敘述，都收在 App 裡面。',
    supportTitle: '為朝聖者打造的安靜作品',
    supportBody: [
      'Sacred Trails 起源於一個簡單的挫折——依賴訊號的朝聖 App，一到山區沒訊號就失靈。我們想做一個真正能陪你走的工具，不必靠 Wi-Fi 維生。',
      '所以我們花了數月：繪製每一個路段、用 10 國語言寫下每個路徑點的故事、查證住宿、朱印規則、以及那些在艱難下午發揮作用的小細節。18 條路線、數千個路徑點。沒有廣告、沒有訂閱、不收集資料。',
      '如果我們做的東西對你的朝聖旅程有幫助，App 可免費下載，依你要走的路線選購路線包——聖雅各精選、聖雅各全路線、日本朝聖、或全路線永久。無訂閱、無廣告。Buen Camino。',
    ],
    supportCtaLabel: '在 App Store 支持我們',
    supportCtaSubLabel: '目前上架內容與價格請以商店顯示為準。',
    faqTitle: '常見問題',
    faq: [
      { q: 'Sacred Trails 可以離線使用嗎？', a: '可以。所有路線的路徑點、路段、住宿、景點全部內建在 App 中。上路不需要連網、也不用下載地圖圖磚。' },
      { q: '收錄幾條朝聖路線？', a: '共 18 條：聖雅各之路 12 條（法國之路、葡萄牙之路、葡萄牙沿海之路、北方之路、原始之路、英格蘭之路、勒皮之路、莫薩拉比之路、白銀之路、冬之路、菲斯特雷拉-穆希亞之路、聖薩爾瓦多之路）、熊野古道 4 條（中邊路、小邊路、大邊路、伊勢路）、四國八十八所遍路、西國三十三所觀音巡禮。' },
      { q: 'App 多少錢？', a: 'Sacred Trails 可免費下載。路線內容透過路線包購買：聖雅各精選、聖雅各全路線、日本朝聖、或全路線永久。每項都是一次買斷，無訂閱、無廣告。' },
      { q: '支援哪些語言？', a: '10 國語言完整在地化：繁體中文、簡體中文、英文、日文、西班牙文、韓文、法文、德文、葡萄牙文、義大利文。介面、路線說明、路徑點名稱、景點標籤全部翻譯。' },
      { q: '需要 GPS 或網路嗎？', a: '都不需要。路段時間軸不靠 GPS、不靠網路。即使在沒訊號的深山路段也能直接看到下一段、地標、住宿資訊。' },
      { q: '有傳統地圖嗎？', a: '採用「路段時間軸」而非滑動式地圖。每條路線分成清楚的路段，距離、海拔、累計里程、住宿密集區、關鍵路徑點一次呈現 — 走朝聖路每天真正會用到的資訊。' },
      { q: '可以規劃多條路線嗎？', a: '可以。今年走法國之路、明年走熊野古道，Sacred Trails 就是為這種多路線朝聖者設計的。選擇適合你旅程的路線包，或直接買全路線永久取得完整存取。' },
      { q: '內容會持續更新嗎？', a: '路線資料會定期審查，透過 App Store 更新推送。路徑點修正、住宿變動、新增景點都會隨 App 更新。' },
      { q: 'iPad 能用嗎？', a: '可以。Sacred Trails 支援 iOS 16.0 以上的 iPhone 與 iPad，路段時間軸會自動適配大螢幕的多欄顯示。' },
      { q: '有 Android 版嗎？', a: 'Android 版正在準備提交 Google Play，會提供同樣的離線路線資料、印章與雲端備份流程。' },
    ],
    metaTitle: 'Sacred Trails — 18 條朝聖路線離線導航 · 聖雅各・熊野古道・四國遍路 · 10 國語言',
    metaDesc: '18 條朝聖之路、10 國語言完整離線導航。聖雅各之路、熊野古道、四國遍路、西國三十三所提供分段指引。無訂閱、不需網路。',
  },
  routesList: {
    title: '全部朝聖路線',
    subtitle: '橫跨兩大洲 18 條路線 — Sacred Trails 離線全支援。',
    metaTitle: '全 18 條朝聖路線 — 聖雅各・熊野古道・四國遍路',
    metaDesc: '聖雅各 12 條、熊野古道 4 條、四國 88 所、西國三十三所 — 18 條聖地朝聖路一次看。',
    groups: [
      { key: 'camino', label: '聖雅各之路', country: '西班牙・法國', icon: '🐚' },
      { key: 'kumano', label: '熊野古道', country: '日本', icon: '⛩️' },
      { key: 'shikoku', label: '四國遍路', country: '日本', icon: '🏮' },
      { key: 'saigoku', label: '西國三十三所', country: '日本', icon: '🌸' },
    ],
    routeSuffix: n => `${n} 條路線`,
  },
  route: {
    labels: { distance: '距離', duration: '所需天數', difficulty: '難度', certification: '認證', startEnd: '起點 → 終點' },
    sections: { about: '路線簡介', waypoints: '主要路徑點', pois: '景點', lodging: '住宿', related: '相關路線', official: '官方資源' },
    lodgingLabels: { beds: '張床位', municipal: '公營', private: '私營', noPrice: '價格浮動', rateNote: '價格會浮動，建議旅客自行記錄。', availabilityNote: '價格會浮動，請使用自己的價格紀錄，並在出發前直接確認是否有空房。', temporarilyClosed: '暫時關閉' },
    lodgingDisclosure: {
      caminoSourceLabel: 'Camino / Gronze',
      caminoConfidenceLabel: '來源參考',
      caminoDescription: 'Camino 住宿資料來自以 Gronze 為主的路線研究，僅作為規劃參考，不是即時庫存，也不是合作訂房資料。價格由旅客自行記錄，因為會隨季節與業者變動；出發前請直接確認空房。',
      kumanoSourceLabel: '熊野中邊路 / Kumano Travel',
      kumanoConfidenceLabel: 'Kumano Travel 來源參考',
      kumanoDescription: '熊野中邊路住宿資料以 Kumano Travel 規劃資料為基礎，不代表即時空房或訂房功能。可用來篩選城鎮與住宿候選，最新規則、餐食、休業與空房請直接向業者確認。',
      manualSourceLabel: '手動路線筆記',
      manualConfidenceLabel: '請直接確認',
      manualDescription: '此路線使用手動維護的住宿筆記或 App 內建資料。請視為出發前參考起點，不是即時庫存；建立行程前請直接確認每個住宿點。',
    },
    planning: {
      snapshotTitle: '規劃摘要',
      planTitle: '粗略距離規劃器',
      intro: (days, distance, averageDailyKm) => `這是詳細規劃前的粗略距離草稿：${distance} 公里通常安排 ${days} 天，每天約 ${averageDailyKm} 公里。請依實際路段、地形、休息日、天氣、營業季節與住宿空房自行調整。`,
      labels: { typicalDuration: '建議天數', averageDay: '每日平均', bestMonths: '最佳月份', certificationMinimum: '認證最低距離', lodgingDensity: '住宿密度', resupply: '補給', access: '交通' },
      compostelaMinimum: '步行 100 公里',
      walkingDays: '步行天數',
      restDays: '休息天數',
      dailyTarget: '每日目標',
      averageWalkingDay: '步行日平均',
      routeStyle: '路線型態',
      dayLabel: '天',
      walkLabel: '步行',
      restLabel: '休息',
      distanceLabel: '距離',
      cumulativeLabel: '累積',
      lodgingHintLabel: '路段 / 住宿參考',
      noLodgingHint: '請直接確認住宿',
      lodgingStayLabel: '間住宿',
      totalDaysLabel: '總天數',
      lodgingHintNote: '距離為平均估算。路段提示會使用最接近每段粗略距離的有序路徑點；住宿參考只是輔助城鎮資料，不是推薦過夜點，也不是空房確認。',
      perDayUnit: '公里/天',
      lodgingWord: '住宿',
      resupplyWord: '補給',
      routeStyleValue: (lodging, resupply) => `住宿 ${lodging} · 補給 ${resupply}`,
      valueLabels: { high: '高', medium: '中', low: '低', easy: '容易', moderate: '中等', hard: '困難' },
      townSummary: '城鎮住宿摘要',
      listedStays: count => `列出 ${count} 間住宿`,
      stayCount: count => `${count} 間`,
    },
    decision: {
      title: '這條路適合你嗎？',
      bestFor: '最適合',
      timeCommitment: '時間投入',
      lodgingAndResupply: '住宿與補給',
      offlineUse: '為什麼使用 Sacred Trails',
      bestForFallback: '路線規劃',
      timeCommitmentValue: (days, averageDailyKm) => `${days} 天，每天約 ${averageDailyKm} 公里`,
      lodgingResupplyValue: (lodging, resupply) => `住宿 ${lodging} · 補給 ${resupply}`,
      offlineUseValue: '沒有訊號時，仍可離線查看路段、路徑點故事、住宿筆記與路線背景。',
    },
    safety: {
      title: '出發前注意',
      bestAvoid: '建議避開',
      weatherRisk: '天氣風險',
      mobileSignal: '手機訊號',
      cash: '現金',
      note: '注意',
      recommendedCarry: '建議攜帶',
    },
    officialResources: '官方資源',
    websiteLabel: '網站',
    waypointDetailNote: count => `共 ${count} 個路徑點 · Sacred Trails App 收錄每個路徑點的完整內容。`,
    routeSummary: (distance, country) => `${country}・${distance} 公里朝聖路線`,
    metadataTitle: (name, distance, days) => `${name} — ${distance} 公里 · ${days} 天 · Sacred Trails 離線指南`,
    metadataFallbackDesc: (name, distance, start, end) => `${name}：從 ${start} 到 ${end} 的 ${distance} 公里朝聖路線。Sacred Trails 提供離線路段、路徑點與印章資訊。`,
    imageAlt: name => `${name}朝聖路線`,
    touristType: '朝聖者',
    showingCount: (shown, total) => `顯示 ${shown} / ${total}`,
    routeConnector: '→',
    bestForLabels: {
      'Sea views & flat terrain': '海景與平坦路線',
      'Wild coast & solitude': '荒野海岸與獨行感',
      'Post-Camino extension': '完成 Camino 後的延伸路線',
      'First-timers & community': '第一次朝聖與社群感',
      'Short & historical': '短天數與歷史感',
      'Medieval France & history': '中世紀法國與歷史',
      'Moorish history & heat': '摩爾歷史與高溫挑戰',
      'Mountain challenge': '山岳挑戰',
      'Culture & gentle terrain': '文化體驗與平緩地形',
      'Coastal scenery & solitude': '海岸風景與清靜',
      'Wild Galicia & solitude': '加利西亞荒野與獨行',
      'Full challenge & authenticity': '完整挑戰與真實感',
      'Solitude & full challenge': '孤獨感與完整挑戰',
      'Japanese sacred history & first-timers to Kumano': '熊野入門與日本聖地文化',
      'Sacred Japan history & long trails': '日本聖地歷史與長距離路線',
      'Ultimate spiritual challenge': '最高強度的精神挑戰',
      'Urban convenience & temples': '城市便利與寺院巡禮',
      'Full pilgrimage circuit': '完整朝聖環線',
    },
    certificationLabels: { compostela: '孔波斯特拉證書', Compostela: '孔波斯特拉證書', fisterrana: '菲斯特拉納證書', Salvadorana: '薩爾瓦多證書', 'Créanciale': '巡禮護照', shuincho: '朱印帳', 'Nōkyō-chō (納経帳)': '納經帳', 'Compostela (via Vía de la Plata)': '孔波斯特拉證書（經白銀之路）' },
    countryLabels: { ES: '西班牙', Spain: '西班牙', France: '法國', Japan: '日本', 'PT+ES': '葡萄牙與西班牙', 'Portugal / Spain': '葡萄牙與西班牙', 'France / Spain': '法國與西班牙' },
    bestMonthsLabels: {
      'April–June, September–October': '4–6 月、9–10 月',
      'April–October': '4–10 月',
      'February–May, September–November': '2–5 月、9–11 月',
      'March–June, September–November': '3–6 月、9–11 月',
      'March–May, October–November': '3–5 月、10–11 月',
      'March–May, September–November': '3–5 月、9–11 月',
      'May–June, September': '5–6 月、9 月',
      'May–June, September–October': '5–6 月、9–10 月',
      'May–October': '5–10 月',
    },
    poiTypeLabels: {},
    specialSections: {
      saigokuTitle: '橫跨七府縣的古老巡禮',
      saigokuDesc: '日本最古老的巡禮（718 年）橫跨和歌山、大阪、奈良、京都、兵庫、滋賀與岐阜，每個區域都有不同的寺院風格與地方氣質。',
      shikokuTitle: '四國四縣，四大道場',
      shikokuDesc: '八十八所巡禮分為四個縣區，每一區都有不同的路線性格與修行主題。',
      caminoFrancesTitle: '五個地區，一條古老道路',
      caminoFrancesDesc: '780 公里的法國之路橫跨五種地域風景，從庇里牛斯山的艱難開端，到最後接近聖地亞哥的情感終點。',
      kumanoNakahechiTitle: '進入聖山的四條道路',
      kumanoNakahechiDesc: '熊野古道不是單一路線，而是從不同方向通往熊野三山的歷史道路網絡。',
      temples: '札所',
      difficulty: '難度',
      days: '天',
      km: '公里',
    },
    ctaTitle: name => `離線走${name}`,
    ctaDesc: '下載 Sacred Trails，所有路線資料離線帶著走 — 無需網路。',
    breadcrumbHome: '首頁',
    breadcrumbRoutes: '路線',
    daysUnit: '天',
    distanceFromStart: (km, elev) => `離起點 ${km} 公里 · 海拔 ${elev} m`,
    difficultyLabels: { easy: '輕鬆', moderate: '中等', challenging: '困難', very_challenging: '極困難' },
  },
  guideIndex: {
    title: '朝聖攻略',
    subtitle: '規劃和走遍世界朝聖路所需的一切。',
    metaTitle: '朝聖路線攻略 — 聖雅各・熊野古道・四國遍路',
    metaDesc: '世界最著名朝聖路線完整攻略。',
    guides: [
      { slug: 'camino-de-santiago', title: '聖雅各之路 — 完整攻略', desc: '12 條路線，780–1200 公里，從法國或葡萄牙啟程。', icon: '🐚' },
      { slug: 'kumano-kodo', title: '熊野古道 — 完整攻略', desc: '穿越紀伊半島聖林的 4 條古道。', icon: '⛩️' },
      { slug: 'shikoku-henro', title: '四國八十八所遍路 — 完整攻略', desc: '1,200 公里環島，追隨弘法大師足跡。', icon: '🏮' },
    ],
  },
  certifications: {
    title: '朝聖證書指南',
    subtitle: '聖雅各之路、熊野古道、四國遍路、西國三十三所可獲得的所有證書——含官方條件與領取地點。',
    metaTitle: '朝聖證書指南 — 孔波斯特拉、熊野、四國遍路',
    metaDesc: '完整朝聖證書攻略：孔波斯特拉、熊野古道印章、四國遍路圓滿印、雙朝聖者等。',
    systems: { camino: '聖雅各之路', kumano: '熊野古道', shikoku: '四國遍路', saigoku: '西國三十三所', achievement: '特殊成就' },
    minDistance: '最低距離',
    stampsRequired: '蓋章要求',
    whereToGet: '領取地點',
    officialSite: '官方網站',
    appCtaTitle: '在 App 追蹤你的證書進度',
    appCtaDesc: 'Sacred Trails 記錄每條路線的印章進度——讓你隨時掌握距離證書還差多少。',
  },
  sacredSites: {
    title: '聖地與朝聖靈場',
    subtitle: '每個路段終點等待你的大教堂、熊野三社和神聖場所，以及它們背後的故事。',
    metaTitle: '聖地指南 — 聖雅各之路大教堂與熊野三社 | Sacred Trails',
    metaDesc: '探訪聖雅各之路的大教堂與熊野古道的神社——每處聖地的歷史故事與文化背景。',
    kumanoTitle: '熊野三社（熊野三山）',
    caminoTitle: '聖雅各之路大教堂與聖地',
    highlight: '亮點',
    story: '歷史',
    photoTip: '拍照小貼士',
    blessing: '祈福',
    appCtaTitle: '用 Sacred Trails 探訪每一處聖地',
    appCtaDesc: 'Sacred Trails 帶你前往路線上每一座神社和大教堂——附離線地圖、路段詳情與文化背景。',
  },
}

const es: Dict = {
  nav: { routes: 'Rutas', guide: 'Guía' },
  footer: { rights: '© 2026 Sacred Trails. Todos los derechos reservados.', privacy: 'Política de privacidad', allRoutes: 'Todas las rutas', legal: 'Aviso legal', credits: 'Contenido de rutas redactado por el equipo de Sacred Trails con asistencia de IA.' },
  home: {
    eyebrow: '18 Rutas de Peregrinación',
    heroTitle: 'Tu guía offline para las rutas sagradas del mundo',
    heroDesc: 'Dieciocho rutas de peregrinación, diez idiomas y la historia detrás de cada waypoint, escrita y verificada con cuidado. Navegación offline etapa por etapa, que funciona en la montaña sin necesidad de internet.',
    browseRoutes: 'Ver rutas →',
    systemsTitle: '18 rutas en dos continentes',
    systemsSubtitle: 'De la España medieval al Japón ancestral — todo en una app.',
    caminoHeading: 'Camino de Santiago',
    japanHeading: 'Rutas de peregrinación de Japón',
    featuresTitle: 'Hecho para peregrinos, no para turistas',
    features: [
      { icon: '📡', title: 'Totalmente offline', desc: 'Todo el contenido — etapas, waypoints, alojamiento, POIs — está en la app. Camina sin señal.' },
      { icon: '🌍', title: '10 idiomas', desc: 'Español, inglés, japonés, chino, coreano, francés, alemán, portugués e italiano.' },
      { icon: '📍', title: 'Línea de etapas', desc: 'Una vista clara etapa por etapa: distancias, desniveles y paradas clave de un vistazo.' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'Camino de Santiago', desc: 'España y Francia — 12 rutas' },
      { key: 'kumano', icon: '⛩️', label: 'Kumano Kodo', desc: 'Japón — 4 rutas antiguas' },
      { key: 'shikoku', icon: '🏮', label: 'Shikoku Henro', desc: 'Japón — 88 templos sagrados' },
      { key: 'saigoku', icon: '🌸', label: 'Saigoku Kannon', desc: 'Japón — 33 santuarios de Kannon' },
    ],
    screenshotsTitle: 'Míralo en acción',
    languageProofTitle: 'Una app, diez idiomas',
    languageProofSubtitle: 'Los mismos datos offline, historias de waypoints, notas de alojamiento y etiquetas de POI están localizados en la app.',
    languageProofBadges: ['English', '日本語', '繁中', 'Español', '한국어', 'Français', 'Deutsch', 'Português', 'Italiano', '简中'],
    languageProofSamples: [
      { locale: 'English', route: 'Camino Francés', title: 'Stage timeline', detail: 'Offline stages, waypoints, lodging notes' },
      { locale: '日本語', route: '熊野古道 中辺路', title: 'ステージタイムライン', detail: '区間・ウェイポイント・宿泊メモをオフラインで確認' },
      { locale: '繁中', route: '四國遍路', title: '路段時間軸', detail: '離線查看路段、路徑點故事與住宿筆記' },
      { locale: 'Español', route: 'Camino Portugués', title: 'Línea de etapas', detail: 'Etapas, waypoints y alojamiento sin conexión' },
    ],
    waypointStoriesTitle: 'Cada parada tiene una historia',
    waypointStoriesSubtitle: 'Pasamos meses escribiendo la historia detrás de cada waypoint. No solo un punto en una línea, sino nueve siglos de peregrinos, emperadores y canteros que caminaron el mismo sendero. Aquí hay una muestra.',
    waypointStoriesMore: 'La prosa completa de cada waypoint vive dentro de la app.',
    supportTitle: 'Un trabajo silencioso hecho con amor para otros peregrinos',
    supportBody: [
      'Sacred Trails nació de una frustración simple: las apps de peregrinos dependientes del móvil dejan de funcionar cuando pierdes señal en la montaña. Queríamos algo que caminase contigo, no algo que necesitase Wi-Fi constante para seguir siendo útil.',
      'Así que pasamos meses: mapeando cada etapa, escribiendo la historia de cada waypoint en 10 idiomas, verificando alojamiento, prácticas de sellos y los pequeños detalles prácticos que marcan la diferencia en una tarde difícil. 18 rutas. Miles de waypoints. Sin anuncios, sin suscripción, sin recopilación de datos.',
      'Si lo que construimos te ayuda en tu peregrinación, la app es gratuita con paquetes de ruta disponibles para los caminos que planeas recorrer: Camino Essentials, Camino Complete, Japan Pilgrimage o All Routes Lifetime. Sin suscripción, sin anuncios. Buen Camino.',
    ],
    supportCtaLabel: 'Apóyanos en la App Store',
    supportCtaSubLabel: 'La ficha y el precio actuales se muestran en la tienda.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Sacred Trails funciona offline?', a: 'Sí. Todo el contenido de ruta, incluyendo waypoints, etapas, alojamiento y POIs, está incluido en la app. No necesitas conexión a internet en la ruta ni descargar tiles de mapa.' },
      { q: '¿Cuántas rutas de peregrinación incluye?', a: 'Sacred Trails cubre 18 rutas: 12 rutas del Camino (Francés, Portugués, Portugués Costero, Norte, Primitivo, Inglés, Vía de la Plata, Invierno, Fisterra-Muxía, Le Puy, Mozárabe, San Salvador), 4 rutas del Kumano Kodo (Nakahechi, Kohechi, Ohechi, Iseji), el Shikoku 88 Templos y la peregrinación Saigoku 33 Kannon.' },
      { q: '¿Cuánto cuesta Sacred Trails?', a: 'Sacred Trails es gratuita para descargar. El contenido de rutas está disponible mediante paquetes: Camino Essentials, Camino Complete, Japan Pilgrimage o All Routes Lifetime. Cada uno es una compra única — sin suscripción y sin anuncios.' },
      { q: '¿Qué idiomas admite?', a: 'Sacred Trails está totalmente localizado en 10 idiomas: español, inglés, japonés, chino tradicional, chino simplificado, coreano, francés, alemán, portugués e italiano. Interfaz, descripciones de ruta, nombres de waypoints y etiquetas de POIs, todo traducido.' },
      { q: '¿Necesito señal GPS o datos móviles?', a: 'Ninguno. La línea de etapas no depende de GPS ni de red. Puedes leer la siguiente etapa, los puntos de referencia y el alojamiento incluso en secciones de montaña sin cobertura.' },
      { q: '¿Hay vista de mapa tradicional?', a: 'Sacred Trails usa una Línea de Etapas en lugar de un mapa tradicional. Cada ruta se divide en etapas claras con distancias, desniveles, kilometraje acumulado, zonas de alojamiento y waypoints clave — la información que los peregrinos usan realmente día a día.' },
      { q: '¿Puedo planificar más de una ruta?', a: 'Sí. Muchos peregrinos caminan el Camino Francés un año y el Kumano Kodo al siguiente. Sacred Trails está diseñado para ese tipo de peregrino multi-ruta — elige el paquete que se adapte a tu viaje, o consigue All Routes Lifetime para acceso completo.' },
      { q: '¿Con qué frecuencia se actualiza el contenido?', a: 'Los datos de ruta se revisan regularmente y se distribuyen mediante actualizaciones normales de la App Store. Correcciones de waypoints, cambios de alojamiento y nuevos POIs se incluyen en actualizaciones de la app.' },
      { q: '¿Funciona en iPad?', a: 'Sí. Sacred Trails funciona en iPhone y iPad con iOS 16.0 o posterior. La línea de etapas se adapta a pantallas grandes con diseño multi-columna.' },
      { q: '¿Hay versión para Android?', a: 'La versión Android está en preparación para Google Play. Tendrá los mismos datos offline de rutas, sellos y copia de seguridad en la nube.' },
    ],
    metaTitle: 'Sacred Trails — 18 Rutas de Peregrinación Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Idiomas',
    metaDesc: 'Guía offline completa de 18 rutas de peregrinación en 10 idiomas. Camino de Santiago, Kumano Kodo, Shikoku Henro y Saigoku 33 con navegación etapa a etapa, sin suscripción y sin internet.',
  },
  routesList: {
    title: 'Todas las rutas de peregrinación',
    subtitle: '18 rutas en dos continentes — todas disponibles offline en Sacred Trails.',
    metaTitle: '18 rutas de peregrinación — Camino, Kumano Kodo y Shikoku Henro',
    metaDesc: 'Explora las 18 rutas sagradas: 12 del Camino, 4 del Kumano Kodo, Shikoku Henro y Saigoku 33.',
    groups: [
      { key: 'camino', label: 'Camino de Santiago', country: 'España y Francia', icon: '🐚' },
      { key: 'kumano', label: 'Kumano Kodo', country: 'Japón', icon: '⛩️' },
      { key: 'shikoku', label: 'Shikoku Henro', country: 'Japón', icon: '🏮' },
      { key: 'saigoku', label: 'Saigoku 33 Kannon', country: 'Japón', icon: '🌸' },
    ],
    routeSuffix: n => n === 1 ? '1 ruta' : `${n} rutas`,
  },
  route: {
    labels: { distance: 'Distancia', duration: 'Duración', difficulty: 'Dificultad', certification: 'Certificación', startEnd: 'Inicio → Fin' },
    sections: { about: 'Sobre la ruta', waypoints: 'Waypoints clave', pois: 'Puntos de interés', lodging: 'Alojamiento', related: 'Rutas relacionadas', official: 'Recurso oficial' },
    lodgingLabels: { beds: 'camas', municipal: 'Municipal', private: 'Privado', noPrice: 'Tarifa variable', rateNote: 'Las tarifas cambian; registra tus propias notas de precio.', availabilityNote: 'Las tarifas cambian; usa tus propias notas de precio y verifica la disponibilidad directamente antes del viaje.', temporarilyClosed: 'Cerrado temporalmente' },
    lodgingDisclosure: {
      caminoSourceLabel: 'Camino / Gronze',
      caminoConfidenceLabel: 'Referencia de fuente',
      caminoDescription: 'Los alojamientos del Camino se compilan a partir de investigación orientada a Gronze como referencia de planificación; no son inventario en vivo ni un canal de reserva afiliado. Las tarifas pertenecen a las notas del viajero porque cambian por temporada y operador; confirma la disponibilidad directamente antes de salir.',
      kumanoSourceLabel: 'Kumano Nakahechi / Kumano Travel',
      kumanoConfidenceLabel: 'Referencia de Kumano Travel',
      kumanoDescription: 'El alojamiento de Kumano Nakahechi se basa en datos de planificación orientados a Kumano Travel; no es disponibilidad en vivo ni reserva. Úsalo para preseleccionar localidades y alojamientos, y verifica reglas actuales, comidas, cierres y disponibilidad con el operador.',
      manualSourceLabel: 'Notas manuales de ruta',
      manualConfidenceLabel: 'Verifica directamente',
      manualDescription: 'Esta ruta usa notas de alojamiento mantenidas manualmente o datos incluidos en la app. Trátala como punto de partida previo al viaje, no como inventario en vivo, y verifica cada estancia directamente.',
    },
    planning: {
      snapshotTitle: 'Resumen de planificación',
      planTitle: 'Planificador aproximado de distancia',
      intro: (days, distance, averageDailyKm) => `Úsalo como boceto aproximado antes de la planificación detallada: ${days} días a pie para ${distance}km, con una media aproximada de ${averageDailyKm}km al día. Ajusta por etapas reales, terreno, descansos, clima, temporadas y disponibilidad de alojamiento.`,
      labels: { typicalDuration: 'Duración típica', averageDay: 'Media diaria', bestMonths: 'Mejores meses', certificationMinimum: 'Mínimo del certificado', lodgingDensity: 'Densidad de alojamiento', resupply: 'Reabastecimiento', access: 'Acceso' },
      compostelaMinimum: '100km a pie',
      walkingDays: 'Días a pie',
      restDays: 'Días de descanso',
      dailyTarget: 'Objetivo diario',
      averageWalkingDay: 'Media por día a pie',
      routeStyle: 'Estilo de ruta',
      dayLabel: 'Día',
      walkLabel: 'Caminar',
      restLabel: 'Descanso',
      distanceLabel: 'Distancia',
      cumulativeLabel: 'Total',
      lodgingHintLabel: 'Referencia de ruta / alojamiento',
      noLodgingHint: 'Verifica el alojamiento',
      lodgingStayLabel: 'alojamientos',
      totalDaysLabel: 'Días totales',
      lodgingHintNote: 'Las distancias son promedios. Los marcadores de ruta usan el waypoint ordenado más cercano a cada tramo aproximado; las referencias de alojamiento son datos de apoyo por localidad, no paradas recomendadas ni disponibilidad confirmada.',
      perDayUnit: 'km/día',
      lodgingWord: 'alojamiento',
      resupplyWord: 'reabastecimiento',
      routeStyleValue: (lodging, resupply) => `alojamiento ${lodging} · reabastecimiento ${resupply}`,
      valueLabels: { high: 'alta', medium: 'media', low: 'baja', easy: 'fácil', moderate: 'moderado', hard: 'difícil' },
      townSummary: 'Resumen de alojamientos por localidad',
      listedStays: count => `${count} alojamientos listados`,
      stayCount: count => `${count} ${count === 1 ? 'alojamiento' : 'alojamientos'}`,
    },
    decision: {
      title: '¿Esta ruta encaja contigo?',
      bestFor: 'Ideal para',
      timeCommitment: 'Tiempo necesario',
      lodgingAndResupply: 'Alojamiento y reabastecimiento',
      offlineUse: 'Por qué usar Sacred Trails',
      bestForFallback: 'Planificación de ruta',
      timeCommitmentValue: (days, averageDailyKm) => `${days} días a pie, unos ${averageDailyKm}km/día`,
      lodgingResupplyValue: (lodging, resupply) => `alojamiento ${lodging} · reabastecimiento ${resupply}`,
      offlineUseValue: 'Etapas offline, historias de waypoints, notas de alojamiento y contexto de ruta siguen disponibles sin señal.',
    },
    safety: {
      title: 'Antes de salir',
      bestAvoid: 'Mejor evitar',
      weatherRisk: 'Riesgo meteorológico',
      mobileSignal: 'Señal móvil',
      cash: 'Efectivo',
      note: 'Nota',
      recommendedCarry: 'Llevar recomendado',
    },
    officialResources: 'Recursos oficiales',
    websiteLabel: 'Sitio web',
    waypointDetailNote: count => `${count} waypoints en total · La app Sacred Trails incluye el detalle completo de cada waypoint.`,
    routeSummary: (distance, country) => `Ruta de peregrinación de ${distance}km en ${country}`,
    metadataTitle: (name, distance, days) => `${name} — ${distance}km · ${days} días · Guía offline de Sacred Trails`,
    metadataFallbackDesc: (name, distance, start, end) => `${name}: ruta de peregrinación de ${distance}km desde ${start} hasta ${end}. Etapas, waypoints y sellos offline en Sacred Trails.`,
    imageAlt: name => `Ruta de peregrinación ${name}`,
    touristType: 'Peregrino',
    showingCount: (shown, total) => `Mostrando ${shown} de ${total}`,
    routeConnector: '→',
    bestForLabels: {
      'Sea views & flat terrain': 'Vistas al mar y terreno llano',
      'Wild coast & solitude': 'Costa salvaje y soledad',
      'Post-Camino extension': 'Extensión después del Camino',
      'First-timers & community': 'Principiantes y comunidad',
      'Short & historical': 'Ruta corta e histórica',
      'Medieval France & history': 'Francia medieval e historia',
      'Moorish history & heat': 'Historia mozárabe y calor',
      'Mountain challenge': 'Reto de montaña',
      'Culture & gentle terrain': 'Cultura y terreno suave',
      'Coastal scenery & solitude': 'Paisaje costero y soledad',
      'Wild Galicia & solitude': 'Galicia salvaje y soledad',
      'Full challenge & authenticity': 'Reto completo y autenticidad',
      'Solitude & full challenge': 'Soledad y reto completo',
      'Japanese sacred history & first-timers to Kumano': 'Historia sagrada japonesa e iniciación a Kumano',
      'Sacred Japan history & long trails': 'Historia sagrada de Japón y rutas largas',
      'Ultimate spiritual challenge': 'Reto espiritual máximo',
      'Urban convenience & temples': 'Comodidad urbana y templos',
      'Full pilgrimage circuit': 'Circuito completo de peregrinación',
    },
    certificationLabels: { compostela: 'Compostela', Compostela: 'Compostela', fisterrana: 'Fisterrana', Salvadorana: 'Salvadorana', 'Créanciale': 'Credencial', shuincho: 'Shuincho', 'Nōkyō-chō (納経帳)': 'Nōkyō-chō', 'Compostela (via Vía de la Plata)': 'Compostela (por Vía de la Plata)' },
    countryLabels: { ES: 'España', Spain: 'España', France: 'Francia', Japan: 'Japón', 'PT+ES': 'Portugal y España', 'Portugal / Spain': 'Portugal y España', 'France / Spain': 'Francia y España' },
    bestMonthsLabels: {
      'April–June, September–October': 'abril-junio, septiembre-octubre',
      'April–October': 'abril-octubre',
      'February–May, September–November': 'febrero-mayo, septiembre-noviembre',
      'March–June, September–November': 'marzo-junio, septiembre-noviembre',
      'March–May, October–November': 'marzo-mayo, octubre-noviembre',
      'March–May, September–November': 'marzo-mayo, septiembre-noviembre',
      'May–June, September': 'mayo-junio, septiembre',
      'May–June, September–October': 'mayo-junio, septiembre-octubre',
      'May–October': 'mayo-octubre',
    },
    poiTypeLabels: {},
    specialSections: {
      saigokuTitle: 'Siete prefecturas, un circuito antiguo',
      saigokuDesc: 'La peregrinación más antigua de Japón (718 d.C.) atraviesa Wakayama, Osaka, Nara, Kioto, Hyogo, Shiga y Gifu, con carácter regional y estilos de templo distintos.',
      shikokuTitle: 'Cuatro prefecturas, cuatro dōjō',
      shikokuDesc: 'El circuito de 88 templos se divide en cuatro secciones, una por prefectura, cada una con carácter y tema espiritual propios.',
      caminoFrancesTitle: 'Cinco regiones, un camino antiguo',
      caminoFrancesDesc: 'Los 780km del Camino Francés atraviesan cinco regiones, desde el duro cruce de los Pirineos hasta la llegada emocional a Santiago.',
      kumanoNakahechiTitle: 'Cuatro rutas hacia las montañas sagradas',
      kumanoNakahechiDesc: 'El Kumano Kodō no es un solo sendero, sino una red de rutas históricas que se acercan a Kumano Sanzan desde distintas direcciones.',
      temples: 'Templos',
      difficulty: 'Dificultad',
      days: 'días',
      km: 'km',
    },
    ctaTitle: name => `Camina ${name} offline`,
    ctaDesc: 'Descarga Sacred Trails y camina con datos completos — sin internet.',
    breadcrumbHome: 'Inicio',
    breadcrumbRoutes: 'Rutas',
    daysUnit: 'días',
    distanceFromStart: (km, elev) => `${km}km desde el inicio · ${elev}m`,
    difficultyLabels: { easy: 'Fácil', moderate: 'Moderada', challenging: 'Difícil', very_challenging: 'Muy difícil' },
  },
  guideIndex: {
    title: 'Guías de peregrinación',
    subtitle: 'Todo lo que necesitas para planificar y caminar las grandes rutas de peregrinación.',
    metaTitle: 'Guías de rutas de peregrinación — Camino, Kumano Kodo, Shikoku Henro',
    metaDesc: 'Guías completas de las rutas de peregrinación más famosas del mundo.',
    guides: [
      { slug: 'camino-de-santiago', title: 'Camino de Santiago — Guía completa', desc: '12 rutas, de 780 a 1200 km, desde Francia o Portugal.', icon: '🐚' },
      { slug: 'kumano-kodo', title: 'Kumano Kodo — Guía completa', desc: '4 rutas antiguas por los bosques sagrados de la península de Kii.', icon: '⛩️' },
      { slug: 'shikoku-henro', title: 'Peregrinación de los 88 templos de Shikoku — Guía completa', desc: '1.200 km alrededor de Shikoku, siguiendo los pasos de Kōbō Daishi.', icon: '🏮' },
    ],
  },
  certifications: {
    title: 'Guía de certificados de peregrinación',
    subtitle: 'Todos los certificados del Camino de Santiago, Kumano Kodo, Shikoku Henro y Saigoku 33 — con requisitos oficiales y dónde recogerlos.',
    metaTitle: 'Certificados de Peregrinación — Compostela, Kumano, Shikoku Henro',
    metaDesc: 'Guía completa de certificados: Compostela, sellos Kumano Kodo, sello kanman de Shikoku Henro, Doble Peregrino y más.',
    systems: { camino: 'Camino de Santiago', kumano: 'Kumano Kodo', shikoku: 'Shikoku Henro', saigoku: 'Saigoku 33', achievement: 'Logros especiales' },
    minDistance: 'Distancia mínima',
    stampsRequired: 'Requisito de sellos',
    whereToGet: 'Dónde recogerlo',
    officialSite: 'Sitio oficial',
    appCtaTitle: 'Registra tus certificados en la app',
    appCtaDesc: 'Sacred Trails rastrea tu progreso de sellos en cada ruta — para que siempre sepas cuánto te falta para tu certificado.',
  },
  sacredSites: {
    title: 'Lugares sagrados y santuarios',
    subtitle: 'Las catedrales, grandes santuarios y lugares sagrados que esperan al final de cada etapa — con las historias detrás de ellos.',
    metaTitle: 'Lugares sagrados — Catedrales del Camino y Santuarios Kumano | Sacred Trails',
    metaDesc: 'Descubre los lugares sagrados del Camino de Santiago y el Kumano Kodo: catedrales, grandes santuarios y la historia de cada lugar sagrado.',
    kumanoTitle: 'Grandes Santuarios Kumano (熊野三山)',
    caminoTitle: 'Catedrales y lugares sagrados del Camino',
    highlight: 'Destacado',
    story: 'Historia',
    photoTip: 'Consejo fotográfico',
    blessing: 'Bendición',
    appCtaTitle: 'Visita cada lugar sagrado con Sacred Trails',
    appCtaDesc: 'Sacred Trails te guía a cada santuario y catedral de tu ruta — con mapas offline, detalles de etapas y contexto cultural.',
  },
}

export const dictionaries: Record<Locale, Dict> = { en, ja, 'zh-TW': zhTW, es }

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en
}
