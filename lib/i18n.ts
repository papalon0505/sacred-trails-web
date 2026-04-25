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
    lodgingLabels: { beds: string; municipal: string; private: string; noPrice: string }
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
    waypointStoriesTitle: 'Every stop has a story',
    waypointStoriesSubtitle: "We spent months writing the history behind each waypoint. Not just a dot on a timeline, but nine centuries of pilgrims, emperors, and stonecutters who walked the same path. Here's a taste.",
    waypointStoriesMore: 'The full prose for every waypoint lives inside the app.',
    supportTitle: 'A quiet labor of love for fellow pilgrims',
    supportBody: [
      "Sacred Trails started with a simple frustration: phone-dependent pilgrim apps stop working when you lose signal in the mountains. We wanted something that walked with you, not one that needed constant Wi-Fi to stay useful.",
      "So we spent months: mapping every stage, writing the story of every waypoint across 10 languages, verifying lodging, stamping practices, and the small practical details that make a difference on a hard afternoon. 18 routes. Thousands of waypoints. No ads, no subscription, no data collection.",
      "If what we built helps your pilgrimage, the App Store price is how you can support the project. One $2.99 purchase unlocks everything, funds future routes, and tells us this matters. Either way — Buen Camino.",
    ],
    supportCtaLabel: 'Support us · $2.99 on the App Store',
    supportCtaSubLabel: 'One-time, all 18 routes, all 10 languages.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'Does Sacred Trails work offline?', a: 'Yes. All route content including waypoints, stages, lodging, and POIs is bundled in the app. No internet connection is required on the trail, and no map tiles need to be downloaded.' },
      { q: 'How many pilgrimage routes are included?', a: 'Sacred Trails covers 18 routes: all 12 Camino de Santiago routes (Francés, Portugués, Norte, Primitivo, Inglés, del Sur, Vía de la Plata, Invierno, Sanabrés, Catalán, Levante, Aragonés), 4 Kumano Kodo routes (Nakahechi, Kohechi, Ohechi, Iseji), the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.' },
      { q: 'How much does Sacred Trails cost?', a: 'Sacred Trails is a one-time $2.99 purchase on the App Store. That single price unlocks all 18 routes in all 10 languages. No subscription, no per-route fees, no hidden upgrades.' },
      { q: 'Which languages are supported?', a: 'Sacred Trails is fully localized in 10 languages: English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, Korean, French, German, Portuguese, and Italian. Interface, route descriptions, waypoint names, and POI labels are all translated.' },
      { q: 'Do I need a GPS signal or cellular data?', a: 'Neither. The stage timeline does not depend on GPS or network. You read the next stage, landmarks, and lodging from the bundled data even in deep mountain sections with zero signal.' },
      { q: 'Is there a traditional map view?', a: "Sacred Trails uses a Stage Timeline rather than a scroll-and-pan map. Each route is broken into clearly defined stages with distances, elevations, cumulative mileage, lodging clusters, and key waypoints — the information pilgrims actually use day to day." },
      { q: 'Can I walk several routes on a single purchase?', a: 'Yes. The $2.99 price includes every route forever. Many pilgrims walk the Camino Francés one year and the Kumano Kodo the next; Sacred Trails is built for exactly that kind of multi-route pilgrim.' },
      { q: 'How often is content updated?', a: 'Route data is reviewed regularly and shipped through standard App Store updates. Waypoint corrections, lodging changes, and new POIs are rolled into free app updates — no extra purchase needed.' },
      { q: 'Does it work on iPad?', a: 'Yes. Sacred Trails runs on iPhone and iPad with iOS 16.0 or later. The stage timeline adapts to larger screens with multi-column layouts.' },
      { q: 'Is there an Android version?', a: 'Sacred Trails is iOS-only at launch. An Android build is on the roadmap and will be announced on this site.' },
    ],
    metaTitle: 'Sacred Trails — 18 Pilgrimage Routes Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Languages',
    metaDesc: 'Complete offline guide for 18 sacred pilgrimage trails in 10 languages. One $2.99 purchase unlocks Camino de Santiago, Kumano Kodo, Shikoku Henro and Saigoku 33. Stage-by-stage navigation, no subscription, no internet required.',
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
    lodgingLabels: { beds: 'beds', municipal: 'Municipal', private: 'Private', noPrice: 'Varies' },
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
    waypointStoriesTitle: 'すべての場所に物語がある',
    waypointStoriesSubtitle: '各ウェイポイントの背景にある歴史を、私たちは数ヶ月かけて書き起こしました。タイムライン上の一点ではなく、同じ道を歩いた九世紀にわたる巡礼者・皇族・石工たちの物語です。ほんの一部をどうぞ。',
    waypointStoriesMore: '全ウェイポイントの完全版はアプリ内に収録されています。',
    supportTitle: '巡礼者のための、静かな愛の結晶',
    supportBody: [
      'Sacred Trailsは、ひとつの不満から生まれました——電波に依存する巡礼アプリは、山で電波を失うと使えなくなる。私たちは、常時Wi-Fiがなくても寄り添い続けるアプリを作りたかったのです。',
      'そして数ヶ月かけて、すべてのステージを描き、ウェイポイントの物語を10言語で書き、宿泊・朱印・苦しい午後に効く小さな実用情報を検証しました。18ルート、数千のウェイポイント。広告なし、サブスクなし、データ収集なし。',
      'もし私たちが作ったものがあなたの巡礼に役立つなら、App Storeでの購入がプロジェクトを支えてくれます。$2.99の買い切りですべて解錠、今後の新ルート開発資金となり、「これが大切だ」と私たちに伝わります。どちらを選んでも——良き道を。',
    ],
    supportCtaLabel: '応援する · App Storeで$2.99',
    supportCtaSubLabel: '買い切り、18ルート全て、10言語対応。',
    faqTitle: 'よくある質問',
    faq: [
      { q: 'オフラインで使えますか？', a: 'はい。ウェイポイント・ステージ・宿泊情報・POIなど全ルートのコンテンツがアプリ内に収録されています。巡礼中のWi-Fiも地図タイルのダウンロードも不要です。' },
      { q: '何本の巡礼ルートに対応していますか？', a: '18ルートを収録：カミーノ・デ・サンティアゴ12ルート（フランス人の道、ポルトガル人の道、北の道、原始の道、イギリス人の道、南の道、銀の道、冬の道、サナブレス、カタラン、レバンテ、アラゴネス）、熊野古道4ルート（中辺路・小辺路・大辺路・伊勢路）、四国88ヶ所遍路、西国三十三所観音巡礼。' },
      { q: '料金は？', a: 'App Storeで買い切り$2.99（約450円）。この1回の支払いで18ルート全部が10言語すべてで解錠されます。サブスクなし、ルート別課金なし、追加アップグレードなし。' },
      { q: '対応言語は？', a: '10言語完全ローカライズ：日本語・英語・スペイン語・繁体字中国語・簡体字中国語・韓国語・フランス語・ドイツ語・ポルトガル語・イタリア語。UI、ルート説明、ウェイポイント名、POIラベルすべて翻訳済み。' },
      { q: 'GPSや電波は必要ですか？', a: 'どちらも不要です。ステージタイムラインはGPSもネットワークも使わず、電波ゼロの山間部でも次のステージ・ランドマーク・宿泊情報がすぐ読めます。' },
      { q: '地図機能はありますか？', a: '従来型の地図ではなく「ステージタイムライン」方式を採用。各ルートを明確な区間に分け、距離・標高・累積マイル・宿泊ゾーン・主要ウェイポイントを一覧表示 — 巡礼者が日々実際に使う情報だけを整理しています。' },
      { q: '1回の購入で複数ルートを歩けますか？', a: 'はい。$2.99にすべてのルートが永続的に含まれます。今年はカミーノ・フランセス、来年は熊野古道という多ルート巡礼者のために設計されています。' },
      { q: 'コンテンツは更新されますか？', a: 'ルートデータは定期的にレビューされ、通常のApp Storeアップデートで配信されます。ウェイポイント修正・宿泊情報の変更・新POIは無料アップデートに含まれ、追加購入は不要です。' },
      { q: 'iPadでも使えますか？', a: 'はい。iPhoneおよびiOS 16.0以上のiPadで動作します。ステージタイムラインは大画面に合わせてマルチカラム表示に最適化されます。' },
      { q: 'Android版はありますか？', a: 'リリース時点ではiOSのみ対応です。Android版は開発ロードマップに入っており、本サイトで告知予定です。' },
    ],
    metaTitle: 'Sacred Trails — 18巡礼ルート オフライン対応 · カミーノ・熊野古道・四国遍路 · 10言語',
    metaDesc: '18の巡礼ルートを10言語で完全オフライン対応。$2.99（約450円）の買い切りでカミーノ・デ・サンティアゴ、熊野古道、四国遍路、西国三十三所すべて解錠。サブスクなし、Wi-Fi不要。',
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
    lodgingLabels: { beds: 'ベッド', municipal: '公営', private: '民営', noPrice: '要確認' },
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
    waypointStoriesTitle: '每一個停靠點，都有一個故事',
    waypointStoriesSubtitle: '我們花了數月，為每個路徑點寫下它背後的歷史。它不只是時間軸上的一個點，而是九百年來同一條路上的朝聖者、皇室、石匠所走過的故事。來看幾個片段。',
    waypointStoriesMore: '所有路徑點的完整敘述，都收在 App 裡面。',
    supportTitle: '為朝聖者打造的安靜作品',
    supportBody: [
      'Sacred Trails 起源於一個簡單的挫折——依賴訊號的朝聖 App，一到山區沒訊號就失靈。我們想做一個真正能陪你走的工具，不必靠 Wi-Fi 維生。',
      '所以我們花了數月：繪製每一個路段、用 10 國語言寫下每個路徑點的故事、查證住宿、朱印規則、以及那些在艱難下午發揮作用的小細節。18 條路線、數千個路徑點。沒有廣告、沒有訂閱、不收集資料。',
      '如果我們做的東西對你的朝聖旅程有幫助，App Store 上的售價就是你支持這個專案的方式。US$2.99 一次付清解鎖全部內容，幫助我們開發更多路線，讓我們知道這件事是值得的。無論你選哪種方式——Buen Camino。',
    ],
    supportCtaLabel: '支持我們 · App Store US$2.99',
    supportCtaSubLabel: '一次付清，18 條路線、10 國語言全解鎖。',
    faqTitle: '常見問題',
    faq: [
      { q: 'Sacred Trails 可以離線使用嗎？', a: '可以。所有路線的路徑點、路段、住宿、景點全部內建在 App 中。上路不需要連網、也不用下載地圖圖磚。' },
      { q: '收錄幾條朝聖路線？', a: '共 18 條：聖雅各之路 12 條（法國之路、葡萄牙之路、葡萄牙沿海之路、北方之路、原始之路、英格蘭之路、勒皮之路、莫薩拉比之路、白銀之路、冬之路、菲斯特雷拉-穆希亞之路、聖薩爾瓦多之路）、熊野古道 4 條（中邊路、小邊路、大邊路、伊勢路）、四國八十八所遍路、西國三十三所觀音巡禮。' },
      { q: 'App 多少錢？', a: 'App Store 一次付清 US$2.99（約 NT$90）。一筆付款解鎖 18 條路線並支援全部 10 國語言。無訂閱制、不按路線加購、無隱藏升級。' },
      { q: '支援哪些語言？', a: '10 國語言完整在地化：繁體中文、簡體中文、英文、日文、西班牙文、韓文、法文、德文、葡萄牙文、義大利文。介面、路線說明、路徑點名稱、景點標籤全部翻譯。' },
      { q: '需要 GPS 或網路嗎？', a: '都不需要。路段時間軸不靠 GPS、不靠網路。即使在沒訊號的深山路段也能直接看到下一段、地標、住宿資訊。' },
      { q: '有傳統地圖嗎？', a: '採用「路段時間軸」而非滑動式地圖。每條路線分成清楚的路段，距離、海拔、累計里程、住宿密集區、關鍵路徑點一次呈現 — 走朝聖路每天真正會用到的資訊。' },
      { q: '一次付費可以走幾條路線？', a: '全部都可以。US$2.99 永久含 18 條。今年走法國之路、明年走熊野古道，Sacred Trails 就是為這種多路線朝聖者設計的。' },
      { q: '內容會持續更新嗎？', a: '路線資料會定期審查，透過 App Store 更新推送。路徑點修正、住宿變動、新增景點都在免費更新裡，不需要再付費。' },
      { q: 'iPad 能用嗎？', a: '可以。Sacred Trails 支援 iOS 16.0 以上的 iPhone 與 iPad，路段時間軸會自動適配大螢幕的多欄顯示。' },
      { q: '有 Android 版嗎？', a: '上架階段先做 iOS。Android 版已在規劃中，上架時會在本官網公告。' },
    ],
    metaTitle: 'Sacred Trails — 18 條朝聖路線離線導航 · 聖雅各・熊野古道・四國遍路 · 10 國語言',
    metaDesc: '18 條朝聖之路、10 國語言完整離線導航。US$2.99 一次付清解鎖聖雅各之路、熊野古道、四國遍路、西國三十三所全部路段。無訂閱、不需網路。',
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
    lodgingLabels: { beds: '張床位', municipal: '公營', private: '私營', noPrice: '價格不定' },
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
    waypointStoriesTitle: 'Cada parada tiene una historia',
    waypointStoriesSubtitle: 'Pasamos meses escribiendo la historia detrás de cada waypoint. No solo un punto en una línea, sino nueve siglos de peregrinos, emperadores y canteros que caminaron el mismo sendero. Aquí hay una muestra.',
    waypointStoriesMore: 'La prosa completa de cada waypoint vive dentro de la app.',
    supportTitle: 'Un trabajo silencioso hecho con amor para otros peregrinos',
    supportBody: [
      'Sacred Trails nació de una frustración simple: las apps de peregrinos dependientes del móvil dejan de funcionar cuando pierdes señal en la montaña. Queríamos algo que caminase contigo, no algo que necesitase Wi-Fi constante para seguir siendo útil.',
      'Así que pasamos meses: mapeando cada etapa, escribiendo la historia de cada waypoint en 10 idiomas, verificando alojamiento, prácticas de sellos y los pequeños detalles prácticos que marcan la diferencia en una tarde difícil. 18 rutas. Miles de waypoints. Sin anuncios, sin suscripción, sin recopilación de datos.',
      'Si lo que construimos te ayuda en tu peregrinación, el precio en la App Store es cómo puedes apoyar el proyecto. Una compra única de $2.99 desbloquea todo, financia futuras rutas y nos dice que esto importa. De cualquier forma — Buen Camino.',
    ],
    supportCtaLabel: 'Apóyanos · $2.99 en la App Store',
    supportCtaSubLabel: 'Compra única, las 18 rutas, los 10 idiomas.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Sacred Trails funciona offline?', a: 'Sí. Todo el contenido de ruta, incluyendo waypoints, etapas, alojamiento y POIs, está incluido en la app. No necesitas conexión a internet en la ruta ni descargar tiles de mapa.' },
      { q: '¿Cuántas rutas de peregrinación incluye?', a: 'Sacred Trails cubre 18 rutas: las 12 rutas del Camino de Santiago (Francés, Portugués, Norte, Primitivo, Inglés, del Sur, Vía de la Plata, Invierno, Sanabrés, Catalán, Levante, Aragonés), 4 rutas del Kumano Kodo (Nakahechi, Kohechi, Ohechi, Iseji), el Shikoku 88 Templos y la peregrinación Saigoku 33 Kannon.' },
      { q: '¿Cuánto cuesta Sacred Trails?', a: 'Sacred Trails es una compra única de $2.99 en la App Store. Ese único precio desbloquea las 18 rutas en los 10 idiomas. Sin suscripción, sin compras por ruta, sin actualizaciones ocultas.' },
      { q: '¿Qué idiomas admite?', a: 'Sacred Trails está totalmente localizado en 10 idiomas: español, inglés, japonés, chino tradicional, chino simplificado, coreano, francés, alemán, portugués e italiano. Interfaz, descripciones de ruta, nombres de waypoints y etiquetas de POIs, todo traducido.' },
      { q: '¿Necesito señal GPS o datos móviles?', a: 'Ninguno. La línea de etapas no depende de GPS ni de red. Puedes leer la siguiente etapa, los puntos de referencia y el alojamiento incluso en secciones de montaña sin cobertura.' },
      { q: '¿Hay vista de mapa tradicional?', a: 'Sacred Trails usa una Línea de Etapas en lugar de un mapa tradicional. Cada ruta se divide en etapas claras con distancias, desniveles, kilometraje acumulado, zonas de alojamiento y waypoints clave — la información que los peregrinos usan realmente día a día.' },
      { q: '¿Puedo caminar varias rutas con una sola compra?', a: 'Sí. El precio de $2.99 incluye todas las rutas para siempre. Muchos peregrinos caminan el Camino Francés un año y el Kumano Kodo al siguiente; Sacred Trails está diseñado exactamente para ese tipo de peregrino multi-ruta.' },
      { q: '¿Con qué frecuencia se actualiza el contenido?', a: 'Los datos de ruta se revisan regularmente y se distribuyen mediante actualizaciones normales de la App Store. Correcciones de waypoints, cambios de alojamiento y nuevos POIs se incluyen en actualizaciones gratuitas, sin costo adicional.' },
      { q: '¿Funciona en iPad?', a: 'Sí. Sacred Trails funciona en iPhone y iPad con iOS 16.0 o posterior. La línea de etapas se adapta a pantallas grandes con diseño multi-columna.' },
      { q: '¿Hay versión para Android?', a: 'Sacred Trails es solo iOS al lanzamiento. Una versión Android está en la hoja de ruta y se anunciará en este sitio web.' },
    ],
    metaTitle: 'Sacred Trails — 18 Rutas de Peregrinación Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Idiomas',
    metaDesc: 'Guía offline completa de 18 rutas de peregrinación en 10 idiomas. Una compra única de $2.99 desbloquea Camino de Santiago, Kumano Kodo, Shikoku Henro y Saigoku 33. Navegación etapa a etapa, sin suscripción, sin internet.',
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
    lodgingLabels: { beds: 'camas', municipal: 'Municipal', private: 'Privado', noPrice: 'Variable' },
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
