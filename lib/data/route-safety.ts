export interface RouteSafety {
  bestAvoid: string
  weatherRisk: string
  signalWarning?: string
  cashRequired?: string
  mustCarry: string[]
  difficultyNote?: string
}

export const routeSafetyBySlug: Record<string, RouteSafety> = {
  'camino-frances': {
    bestAvoid: 'July–August (extreme heat on the Meseta; albergues overcrowded)',
    weatherRisk: 'Snow possible Nov–Mar on the Pyrenean crossing (Orisson → Roncesvalles); Meseta storms in spring',
    signalWarning: 'Patchy signal in the O Cebreiro mountain section and some rural Galician stages',
    cashRequired: 'Small villages (Manjarin, Foncebadón) have no card readers — carry €30–50',
    mustCarry: ['Rain gear', 'Sunscreen + sun hat', 'Headlamp', 'Trekking poles for Pyrenees', 'Cash €30+'],
    difficultyNote: 'The Pyrenees crossing on Day 1 (25 km, +1,400 m) is the hardest single stage — acclimatise the day before in Saint-Jean',
  },
  'camino-del-norte': {
    bestAvoid: 'November–February (persistent rain, cliff paths become slippery)',
    weatherRisk: 'Heavy rainfall year-round on the Basque and Cantabrian coast; fog on cliff sections is common',
    signalWarning: 'Limited signal in rural Asturias and some Galician coastal sections',
    cashRequired: 'Many fishing village bars and albergues are cash-only; carry €40+',
    mustCarry: ['Waterproof jacket + trousers', 'Trekking poles', 'Blister kit', 'Cash €40+'],
    difficultyNote: 'Significantly harder than Camino Francés — cumulative elevation over the full route exceeds 15,000 m',
  },
  'camino-primitivo': {
    bestAvoid: 'November–March (mountain snow and mud; some stages impassable after storms)',
    weatherRisk: 'Mountain snow possible Oct–Apr on the Hospitales route; thick fog common year-round',
    signalWarning: 'No signal for long stretches in the Asturian highlands — inform someone of your itinerary',
    cashRequired: 'The Hospitales mountain section has no services for 30 km — carry food, water, and cash',
    mustCarry: ['Waterproof rain gear', 'Emergency bivouac layer', 'Extra food and water', 'Headlamp', 'Whistle'],
    difficultyNote: 'The hardest of all Camino routes — the Hospitales Alto stage crosses exposed mountain terrain at 1,100 m with no shelter',
  },
  'camino-portugues': {
    bestAvoid: 'July–August (heat; crowded in final stages approaching Santiago)',
    weatherRisk: 'Rain common October–April, especially in Galicia; summer heat in the Meseta do Minho',
    cashRequired: 'Some rural albergues and cafés in Portugal are cash-only; carry €20–30',
    mustCarry: ['Rain gear', 'Sun protection', 'Cash €30+'],
  },
  'camino-coastal': {
    bestAvoid: 'December–January (Atlantic storms make coastal boardwalk sections hazardous)',
    weatherRisk: 'Atlantic storms can close coastal boardwalk sections; ferry crossings affected by sea conditions',
    signalWarning: 'The central coastal boardwalk (Senda Litoral) can be temporarily closed — check local signs',
    mustCarry: ['Windproof jacket', 'Sunscreen', 'Cash for ferry crossings'],
    difficultyNote: 'The flattest Camino — a gentle introduction for first-time pilgrims',
  },
  'camino-ingles': {
    bestAvoid: 'December–February (storms and ferry cancellations are common)',
    weatherRisk: 'Galician rain year-round; sea swells can cancel Ferrol or Pontedeume ferry departures',
    signalWarning: 'Ferry schedule varies seasonally — check current timetable before departure',
    mustCarry: ['Rain gear', 'Ferry fare (cash)', 'Warm layer for sea crossing'],
    difficultyNote: 'Shortest Camino eligible for the Compostela (120 km minimum) — can be walked in 5–6 days',
  },
  'camino-fisterra': {
    bestAvoid: 'December–February (short daylight hours; Atlantic rain)',
    weatherRisk: 'Coastal wind and rain year-round; cape sections exposed to Atlantic gales',
    mustCarry: ['Windproof jacket', 'Sunscreen', 'Cash'],
    difficultyNote: 'Typically walked after receiving the Compostela — a physically easy extension but emotionally the most powerful',
  },
  'camino-le-puy': {
    bestAvoid: 'July–August (heat on the Aubrac plateau and Lot valley)',
    weatherRisk: 'Snow possible Nov–Apr on the Aubrac (1,300 m) and Margeride sections',
    signalWarning: 'No signal on the Aubrac plateau for 40+ km',
    cashRequired: 'The Aubrac plateau has very few services — carry enough cash and food for full-day stages',
    mustCarry: ['Rain gear', 'Cold-weather layer for high plateau', 'Emergency food supply', 'Cash €30+'],
  },
  'camino-san-salvador': {
    bestAvoid: 'November–March (mountain snow on the Puerto de Pajares crossing)',
    weatherRisk: 'Snow and ice on the Cantabrian mountain crossing; route can be blocked Oct–May',
    signalWarning: 'No signal for most of the mountain crossing',
    mustCarry: ['Cold-weather gear', 'Microspikes in winter', 'Extra food and water', 'Emergency layer'],
    difficultyNote: 'One of the least-walked and most demanding short routes — physically harder than its 130 km suggest',
  },
  'camino-invierno': {
    bestAvoid: 'December–February despite the "Winter" name — river stages flood after heavy rain',
    weatherRisk: 'Rivers (Miño, Sil) can flood lower-stage paths in winter; fog in the Ribeira Sacra gorges',
    signalWarning: 'Limited signal in the Ribeira Sacra river gorge section',
    mustCarry: ['Waterproof boots', 'Rain gear', 'Trekking poles for river crossings'],
  },
  'camino-mozarabe': {
    bestAvoid: 'June–August (extreme heat in Andalucía and the Extremadura plains — temperatures exceed 40°C)',
    weatherRisk: 'Summer heat is the primary risk; carry 3+ litres of water per stage in southern sections',
    cashRequired: 'Rural Extremadura villages have limited ATM access — carry €50+',
    mustCarry: ['Sun hat + UV shirt', 'Minimum 3 L water capacity', 'Electrolyte tablets', 'Cash €50+'],
    difficultyNote: 'Extreme summer heat makes this route dangerous June–August; spring (March–May) is the optimal window',
  },
  'via-de-la-plata': {
    bestAvoid: 'June–August (extreme heat on the Extremadura plains — up to 42°C)',
    weatherRisk: 'Summer heat the primary danger; some stages have no water or shade for 25+ km',
    signalWarning: 'Long stretches with no services or signal in southern Extremadura',
    cashRequired: 'Remote villages in Extremadura rarely have ATMs — carry €60+',
    mustCarry: ['Sun protection', '3 L+ water capacity', 'Electrolyte tablets', 'Cash €60+'],
    difficultyNote: 'The longest Camino (1,000 km); the southern section in summer is among the harshest conditions on any route',
  },
  'kumano-nakahechi': {
    bestAvoid: 'July–August (high humidity and heat in the Kii Peninsula forest; tsuyu rainy season in June)',
    weatherRisk: 'Typhoon season June–October; heavy rainfall can cause trail closures and bridge damage',
    signalWarning: 'Limited signal on most interior sections — download offline maps before departure',
    cashRequired: 'Most teahouses and oji shrines require cash; carry ¥10,000+',
    mustCarry: ['Rain gear', 'Insect repellent', 'Cash ¥10,000+', 'Trekking poles'],
    difficultyNote: 'The classic Kumano Kodo route — demanding on the Kogumotori-goe sections with 1,200 m+ of daily elevation',
  },
  'kumano-kohechi': {
    bestAvoid: 'December–March (snow on the Nishi-no-Koya-michi mountain crossing)',
    weatherRisk: 'Snow Nov–Apr above 1,000 m; typhoon flooding risk June–October',
    signalWarning: 'Essentially no signal for the entire route — bring a dedicated GPS device',
    cashRequired: 'Virtually no ATMs; carry ¥15,000+ for the full route',
    mustCarry: ['Cold-weather layer', 'Bear bell', 'Emergency food', 'Cash ¥15,000+', 'GPS device'],
    difficultyNote: 'The most difficult Kumano route — 70 km through mountains with 5,000 m of cumulative elevation; not suitable for first-time pilgrims',
  },
  'kumano-ohechi': {
    bestAvoid: 'June–July (tsuyu rainy season; typhoon risk begins August)',
    weatherRisk: 'Coastal sections exposed to Pacific typhoons; sea conditions affect ferry crossings',
    signalWarning: 'Ferry between Kushimoto and Kii-Katsuura must be booked in advance; schedule is seasonal',
    cashRequired: 'Ferry and rural fishing village services are cash-only; carry ¥10,000+',
    mustCarry: ['Rain gear', 'Cash ¥10,000+', 'Ferry reservation confirmation'],
    difficultyNote: 'The coastal Kumano route — beautiful and relatively accessible, but typhoon exposure requires weather awareness',
  },
  'kumano-iseji': {
    bestAvoid: 'August (peak typhoon season; extreme humidity)',
    weatherRisk: 'Typhoon season June–October; steep sections between Owase and Kumano become very slippery',
    signalWarning: 'Interior sections between Owase and Kumano have limited signal',
    cashRequired: 'Rural Mie coast services are primarily cash-only; carry ¥10,000+',
    mustCarry: ['Rain gear', 'Trekking poles', 'Insect repellent', 'Cash ¥10,000+'],
    difficultyNote: 'The least-walked Kumano route, offering genuine solitude — but the elevation gain on the Mie coast sections is demanding',
  },
  'shikoku-henro': {
    bestAvoid: 'June–July (tsuyu rainy season) and August (extreme heat in Kochi prefecture)',
    weatherRisk: 'Tsuyu rain June–July; summer heat in Kochi (high 30s°C); typhoons August–September',
    signalWarning: 'Remote mountain sections between Temples 12–23 (Tosa) have minimal signal',
    cashRequired: 'Many temples and rural lodgings only accept cash — carry ¥20,000+ at all times',
    mustCarry: ['Rain gear', 'Cash ¥20,000+', 'White pilgrim jacket (hakui) for temple visits', 'Insect repellent'],
    difficultyNote: 'The full 1,200 km circuit takes 30–60 days on foot; Temple 66 (Unpen-ji) and the Tosa coastal stages are the most demanding',
  },
  'saigoku-33': {
    bestAvoid: 'August (heat and humidity across all seven prefectures)',
    weatherRisk: 'Snow possible Dec–Feb at higher temples (Nakayama-dera area, Tamba plateaus); summer heat warnings in Wakayama',
    signalWarning: 'Mountain temple access roads can be closed after heavy snow in winter',
    cashRequired: 'Temple stamp offices (nōkyōsho) require cash payment (¥300 per stamp); carry ¥5,000+ at all times',
    mustCarry: ['Cash ¥5,000+ for stamps', 'Pilgrim stamp book (nōkyōchō)', 'Comfortable walking shoes', 'Rain gear'],
    difficultyNote: 'Unlike henro routes, Saigoku temples are spread across 7 prefectures and require transit between sites — most pilgrims use a combination of walking and public transport',
  },
}
