export interface ArticleSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface ArticleContent {
  title: string
  subtitle: string
  metaTitle: string
  metaDesc: string
  sections: ArticleSection[]
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
}

export type ArticleSlug = 'camino-packing-list' | 'camino-cost' | 'first-pilgrimage'

const caminoPackingList: ArticleContent = {
  title: 'Camino de Santiago Packing List 2026',
  subtitle: 'What to bring, what to leave behind, and how to keep your pack under 8kg',
  metaTitle: 'Camino de Santiago Packing List 2026 — The Complete Checklist',
  metaDesc: 'Tried-and-tested Camino packing list. Backpack, shoes, clothing, gear, first aid, and electronics. Keep your pack under 8kg with this essential checklist.',
  sections: [
    {
      heading: 'The Golden Rule: Under 8kg',
      paragraphs: [
        "Every experienced pilgrim will tell you the same thing: pack less than you think you need. Your loaded backpack — including water and snacks — should weigh no more than 10% of your body weight, and ideally under 8kg. You will walk 20–30km per day for weeks. Every extra gram compounds into blisters, joint pain, and misery.",
        "The Camino has pharmacies, outdoor shops, and supermarkets along all major routes. If you forget something, you can buy it in Pamplona, Burgos, León, or Sarria. What you cannot buy back is the cartilage in your knees.",
      ],
    },
    {
      heading: 'Backpack',
      paragraphs: [
        "Choose a 35–40 litre pack with a hip belt. Anything larger tempts you to fill it. Popular choices among pilgrims include the Osprey Exos/Eja 38, Gregory Zulu/Jade 35, and Decathlon Forclaz MT900 35L. Try before you buy — the fit matters more than the brand.",
      ],
      list: [
        '35–40L backpack with hip belt and rain cover',
        'Pack liner (dry bag or heavy-duty bin liner) — rain covers leak at the seams',
        '2–3 stuff sacks or packing cubes for organisation',
      ],
    },
    {
      heading: 'Footwear',
      paragraphs: [
        "Your shoes are the single most important piece of gear. Break them in with at least 100km of walking before you start. Trail runners have largely replaced heavy boots on the Camino — they dry faster, weigh less, and cause fewer blisters. If you prefer boots for ankle support, choose a lightweight pair.",
      ],
      list: [
        'Trail runners or lightweight hiking boots — broken in',
        'Camp sandals or flip-flops for evenings and showers',
        '3 pairs of merino wool or synthetic hiking socks (never cotton)',
        'Blister prevention: Compeed, toe socks, or Vaseline',
      ],
    },
    {
      heading: 'Clothing',
      paragraphs: [
        "Pack for 3 days and wash as you go. Merino wool is ideal because it resists odour and dries quickly, but good synthetics work fine. Avoid cotton — it stays wet, chafes, and gets cold. You will do laundry every 2–3 days at albergues (€3–5 washer, €3–5 dryer).",
      ],
      list: [
        '2 quick-dry hiking shirts (short or long sleeve)',
        '1 hiking trousers (zip-off legs optional)',
        '1 pair of shorts or running shorts',
        '3 sets of underwear (merino or synthetic)',
        '1 fleece or lightweight insulation layer',
        '1 waterproof jacket with hood (Gore-Tex or similar)',
        '1 sun hat or cap',
        '1 buff or bandana — versatile for sun, wind, and cold',
        'Sleep clothes (optional — many pilgrims sleep in hiking clothes)',
      ],
    },
    {
      heading: 'Sleep Gear',
      paragraphs: [
        "Municipal and private albergues provide beds with mattresses. You do not need a sleeping pad. A lightweight sleeping bag or silk liner is sufficient for spring through autumn. In winter or if you plan to camp, bring a 3-season sleeping bag.",
      ],
      list: [
        'Silk or microfibre sleeping bag liner (spring/summer) OR lightweight sleeping bag (autumn/winter)',
        'Earplugs — non-negotiable in dormitory albergues',
        'Small travel pillow or stuff a fleece into your pillowcase',
      ],
    },
    {
      heading: 'Toiletries & First Aid',
      paragraphs: [
        "Keep toiletries minimal. Albergues have soap dispensers and most towns have pharmacies. Foot care is critical — more pilgrims quit the Camino due to blisters than any other reason.",
      ],
      list: [
        'Travel toothbrush and small toothpaste',
        'Small bar soap or 100ml bottle of all-in-one wash',
        'Sunscreen SPF 50 — reapply every 2 hours',
        'Lip balm with SPF',
        'Compeed blister plasters (large and small)',
        'Ibuprofen and paracetamol',
        'Needle and thread (for blister drainage)',
        'Small microfibre towel',
        'Hand sanitiser',
      ],
    },
    {
      heading: 'Electronics & Documents',
      paragraphs: [
        "Keep electronics to a minimum. Your phone does everything — navigation, camera, journal, alarm. Download offline maps before you leave. Charging outlets at albergues are limited; a short cable and a fast charger are more practical than a heavy power bank.",
      ],
      list: [
        'Smartphone with offline maps (Sacred Trails app works fully offline)',
        'Fast charger (20W+ USB-C) and 1m cable',
        'Power bank 10,000mAh (optional — outlets available daily)',
        'Pilgrim credential (credencial del peregrino) — stamp it daily',
        'Passport and travel insurance documents',
        'One debit card and €100–200 cash (small towns may not have ATMs)',
        'Headlamp or phone flashlight — for early morning starts',
      ],
    },
    {
      heading: 'What NOT to Pack',
      paragraphs: [
        "The biggest mistake first-time pilgrims make is packing \"just in case\" items. You are walking to Santiago, not preparing for a wilderness expedition. These items are heavy and unnecessary:",
      ],
      list: [
        'Laptop or tablet — leave them at home',
        'More than 2 books — swap at albergue book exchanges',
        'Full-size towel — microfibre only',
        'Jeans or cotton clothing — they never dry',
        'Heavy hiking boots — trail runners are lighter and sufficient',
        'Multiple guidebooks — use an app instead',
        'Camping gear (unless specifically planning to camp)',
      ],
    },
  ],
  faq: [
    { q: 'Can I buy gear along the Camino?', a: 'Yes. Decathlon stores in Pamplona, Burgos, and León stock everything you need. Pharmacies in every town sell blister supplies and toiletries. Many pilgrims ship heavy items home via Correos (Spanish Post) and replace them with lighter alternatives.' },
    { q: 'Should I use trekking poles?', a: 'Trekking poles reduce knee strain by 25% on descents. Most experienced pilgrims recommend them, especially for the Camino Francés which has significant elevation changes. Telescoping or folding poles pack easily for flights.' },
    { q: 'How do I keep my pack under 8kg?', a: 'Weigh every item before packing. Eliminate duplicates. Choose multi-purpose items (buff instead of separate hat and scarf). Cut off clothing tags. Decant toiletries into small containers. If your pack is over 8kg without water, remove something.' },
    { q: 'What backpack size do most pilgrims use?', a: 'Most experienced pilgrims use 35–40L packs. Ultralight pilgrims manage with 25–30L. Anything over 45L encourages overpacking. The pack should have a proper hip belt to transfer weight off your shoulders.' },
  ],
  ctaTitle: 'Navigate the Camino Offline',
  ctaDesc: 'Sacred Trails has all 12 Camino routes with stage-by-stage navigation, waypoints, and lodging — no internet needed. The lightest guidebook you can carry.',
}

const caminoCost: ArticleContent = {
  title: 'How Much Does the Camino de Santiago Cost in 2026?',
  subtitle: 'A realistic budget breakdown: €25/day budget to €80/day comfort',
  metaTitle: 'Camino de Santiago Cost 2026 — Budget Breakdown & Daily Expenses',
  metaDesc: 'Realistic Camino de Santiago costs in 2026. Budget (€25/day), mid-range (€45/day), and comfort (€80/day) breakdowns for accommodation, food, gear, and flights.',
  sections: [
    {
      heading: 'The Short Answer',
      paragraphs: [
        "Walking the Camino Francés (780km, ~33 days) costs between €800 and €2,600 on the trail, depending on your style. Add €200–800 for flights, €150–400 for gear (if starting from scratch), and €50 for a pilgrim credential. Total: roughly €1,200 for a budget pilgrim to €3,800 for a comfort pilgrim.",
        "The Camino is one of the most affordable long-distance walks in Europe. The infrastructure of albergues, pilgrim menus, and the tradition of hospitality keeps costs low — if you embrace the pilgrim lifestyle.",
      ],
    },
    {
      heading: 'Daily Budget Breakdown',
      paragraphs: [
        "Here are three realistic daily budgets for the Camino Francés in 2026, based on current prices. Other routes (Portugués, del Norte) have similar costs.",
      ],
    },
    {
      heading: 'Budget Pilgrim: €25–30/day',
      paragraphs: [
        "This is the traditional pilgrim experience. You stay in municipal albergues (€6–12/night), cook your own meals from supermarkets, and eat the occasional pilgrim menu (menú del peregrino, €10–14). Many pilgrims walk the entire Camino for under €1,000.",
      ],
      list: [
        'Municipal albergue: €6–12/night (first-come, no reservations)',
        'Breakfast: €2–4 (supermarket bread, fruit, coffee from thermos)',
        'Lunch: €3–5 (supermarket sandwich, trail snacks)',
        'Dinner: €5–8 (cook at albergue kitchen) or €10–14 (pilgrim menu)',
        'Laundry: €1–2/day average (wash every 3 days at €5–6)',
        'Extras: €2–3 (stamps, coffee stops)',
      ],
    },
    {
      heading: 'Mid-Range Pilgrim: €40–55/day',
      paragraphs: [
        "Most pilgrims land here. You mix private albergues with the occasional private room. You eat pilgrim menus daily and stop at cafés for coffee and pastries. This is the sweet spot of comfort and authenticity.",
      ],
      list: [
        'Private albergue: €12–20/night (often with breakfast included)',
        'Breakfast: €4–6 (café con leche and tostada at a bar)',
        'Lunch: €6–10 (bocadillo or light meal)',
        'Dinner: €10–14 (pilgrim menu with wine)',
        'Laundry: €2/day average',
        'Extras: €5–8 (afternoon beer, snacks, occasional taxi for bags)',
      ],
    },
    {
      heading: 'Comfort Pilgrim: €70–100/day',
      paragraphs: [
        "You prefer private rooms, eat at restaurants, and may use a bag transport service (€5–8/stage). There is no shame in this — the Camino is for everyone, regardless of budget.",
      ],
      list: [
        'Private room or pensión: €35–60/night',
        'Breakfast: €5–8 (hotel or café)',
        'Lunch: €10–15 (restaurant)',
        'Dinner: €15–25 (restaurant, not pilgrim menu)',
        'Bag transport: €5–8/day (Jacotrans, Correos)',
        'Extras: €10+ (taxis, museums, souvenirs)',
      ],
    },
    {
      heading: 'One-Time Costs',
      paragraphs: [
        "Beyond daily expenses, budget for these one-time costs before and after the walk.",
      ],
      list: [
        'Flights to/from Spain: €100–500 (varies by origin, book early)',
        'Pilgrim credential (credencial): €3–5 at starting point',
        'Gear (if starting from scratch): €150–400',
        'Travel insurance: €30–80 for 5 weeks (ensure it covers hiking)',
        'Transport to starting point: €10–30 (bus/train from airport)',
        'Train/bus from Santiago home or to airport: €15–50',
      ],
    },
    {
      heading: 'How to Save Money on the Camino',
      paragraphs: [
        "The cheapest pilgrims spend under €20/day. Here are their strategies:",
      ],
      list: [
        'Stay in donativo (donation-based) albergues — suggested €5–10',
        'Cook communal dinners at albergue kitchens — split costs with other pilgrims',
        'Carry a reusable water bottle — Spanish tap water is safe',
        'Buy bread, cheese, and fruit from supermarkets (Mercadona, Dia)',
        'Skip the afternoon café stop — bring trail mix instead',
        'Wash clothes by hand and hang dry — save €6/load',
        'Walk from Saint-Jean-Pied-de-Port (full Francés) — avoid the temptation of shorter, airport-proximate starts that require extra transport',
      ],
    },
  ],
  faq: [
    { q: 'Can I walk the Camino with no money?', a: 'Practically, no. While donativo albergues exist and some pilgrims rely on the generosity of the Camino, you should budget at minimum €15–20/day for food and basic accommodation. The tradition of hospitality supplements but should not replace your own preparation.' },
    { q: 'Do I need cash or can I use cards?', a: 'Carry both. Most private albergues and restaurants accept cards, but municipal albergues, small village bars, and donativo shelters are cash-only. ATMs (cajeros) are available in most towns, but some small villages on the Meseta have none. Keep €50–100 cash at all times.' },
    { q: 'How much should I budget for the whole Camino Francés?', a: 'Budget: €800–1,000 on trail + flights/gear. Mid-range: €1,500–1,800 all-in. Comfort: €2,500–3,800 all-in. These figures are for the 33-day Camino Francés from Saint-Jean-Pied-de-Port.' },
    { q: 'Is the Camino del Norte more expensive?', a: 'Slightly. The northern coast has fewer municipal albergues and more private accommodation. Budget €5–10/day more than the Francés. The Primitivo and Portugués have similar costs to the Francés.' },
  ],
  ctaTitle: 'Plan Your Camino Budget',
  ctaDesc: 'Sacred Trails shows accommodation options and distances for every stage — so you can plan your daily budget before you go.',
}

const firstPilgrimage: ArticleContent = {
  title: 'Your First Pilgrimage: How to Choose and Prepare',
  subtitle: 'Camino de Santiago, Kumano Kodo, or Shikoku — which pilgrimage is right for you?',
  metaTitle: 'First Pilgrimage Guide 2026 — Camino, Kumano Kodo, or Shikoku?',
  metaDesc: 'Planning your first pilgrimage? Compare the Camino de Santiago, Kumano Kodo, and Shikoku Henro. Distance, cost, difficulty, and what to expect on each trail.',
  sections: [
    {
      heading: 'Why Walk a Pilgrimage?',
      paragraphs: [
        "A pilgrimage is not a hike. Hikes are measured in kilometres; pilgrimages are measured in what shifts inside you. Whether you are religious, spiritual, or simply seeking a physical challenge and time to think, the act of walking day after day toward a destination transforms you in ways that shorter walks cannot.",
        "The three great pilgrimage routes — the Camino de Santiago in Spain, the Kumano Kodo in Japan, and the Shikoku 88 Temple Circuit — each offer a profoundly different experience. Your first pilgrimage shapes how you think about walking, solitude, and purpose for the rest of your life. Choose well.",
      ],
    },
    {
      heading: 'Camino de Santiago — The Social Pilgrimage',
      paragraphs: [
        "The Camino is the world\'s most popular pilgrimage, with over 500,000 pilgrims per year. If you want community, conversation, and the energy of walking alongside people from 80+ countries, this is your trail. You will never walk alone — even if you want to.",
        "The infrastructure is unmatched: albergues every 5–10km, bars and cafés at every village, yellow arrows guiding you the entire way. Getting lost is almost impossible. The Camino is the most forgiving first pilgrimage.",
      ],
      list: [
        'Distance: 120km (Inglés) to 1,200km (Via de la Plata)',
        'Duration: 5 days to 7 weeks depending on route',
        'Daily cost: €25–80/day',
        'Difficulty: Easy to Moderate (mostly flat, well-marked)',
        'Best for: Social walkers, first-timers, those seeking community',
        'Season: April–October (best: May–June, September)',
      ],
    },
    {
      heading: 'Kumano Kodo — The Sacred Forest',
      paragraphs: [
        "The Kumano Kodo is the contemplative counterpart to the Camino. Where the Camino is social and extroverted, the Kumano Kodo is quiet and inward. You walk through ancient cedar forests on stone-paved paths that have been used for over 1,000 years by Japanese emperors and ascetic monks.",
        "The Kumano Kodo is shorter but more physically demanding than the Camino. The Nakahechi route (the most popular) takes 3–5 days. Accommodation is in traditional ryokan (Japanese inns) with onsen (hot spring baths) — a very different experience from Camino albergues.",
      ],
      list: [
        'Distance: 40km (Nakahechi) to 170km (Kohechi)',
        'Duration: 3–7 days depending on route',
        'Daily cost: €80–150/day (ryokan with meals)',
        'Difficulty: Moderate to Hard (steep mountain paths, humidity)',
        'Best for: Nature lovers, Japan enthusiasts, solitude seekers',
        'Season: March–May, October–November (avoid summer humidity)',
      ],
    },
    {
      heading: 'Shikoku 88 Temple Pilgrimage — The Endurance Test',
      paragraphs: [
        "The Shikoku Henro is the marathon of pilgrimages. At 1,200km around the smallest of Japan\'s four main islands, it takes 30–60 days on foot. You visit 88 Buddhist temples associated with the monk Kōbō Daishi (Kūkai), who walked this path in the 9th century.",
        "Unlike the Camino, the Shikoku Henro has minimal infrastructure for foreign walkers. Signage is mostly in Japanese, accommodation must be planned carefully, and you will walk long stretches of road between temples. This is an authentic, challenging, deeply rewarding pilgrimage — but not the easiest first choice.",
      ],
      list: [
        'Distance: 1,200km (full circuit)',
        'Duration: 30–60 days on foot (most take 45)',
        'Daily cost: €40–100/day (mix of temples, minshuku, and camping)',
        'Difficulty: Hard (long road sections, limited signage in English)',
        'Best for: Experienced walkers, those seeking deep solitude, Buddhist practitioners',
        'Season: March–May, October–November',
      ],
    },
    {
      heading: 'How to Choose Your First Pilgrimage',
      paragraphs: [
        "Ask yourself three questions:",
      ],
      list: [
        'How much time do I have? — 1 week: Kumano Kodo. 2 weeks: Short Camino. 5+ weeks: Camino Francés or Shikoku.',
        'Do I want company or solitude? — Company: Camino. Solitude: Kumano Kodo or Shikoku.',
        'What is my fitness level? — Beginner: Camino Inglés or Portugués. Intermediate: Kumano Kodo Nakahechi or Camino Francés. Advanced: Shikoku or Camino del Norte.',
      ],
    },
    {
      heading: 'Physical Preparation',
      paragraphs: [
        "Start training 8–12 weeks before your departure. The single best preparation is walking — preferably with your loaded pack and the shoes you plan to wear. There is no substitute for time on your feet.",
      ],
      list: [
        'Weeks 1–4: Walk 8–10km, 3 times per week in your hiking shoes',
        'Weeks 5–8: Increase to 15–20km walks on weekends with your full pack',
        'Weeks 9–12: Do 2 back-to-back 20km days to simulate the Camino rhythm',
        'Include hills and stairs in your training — flat treadmill walking is insufficient',
        'Address any foot issues (orthotics, blister-prone spots) before you leave',
      ],
    },
    {
      heading: 'The Dual Pilgrim: Walk Both',
      paragraphs: [
        "The Camino de Santiago and Kumano Kodo are the only two pilgrimage routes in the world that are both UNESCO World Heritage Sites. Complete both and you can apply for the Dual Pilgrim credential — a certificate recognising your achievement.",
        "Sacred Trails covers all three pilgrimage traditions with offline navigation, stage planning, and waypoint data — so you can walk any of them with confidence, even without mobile data.",
      ],
    },
  ],
  faq: [
    { q: 'Which pilgrimage is best for a complete beginner?', a: 'The Camino Portugués Central (Porto to Santiago, 260km, 12 days) or the Camino Inglés (Ferrol to Santiago, 120km, 5 days). Both are well-marked, have excellent infrastructure, and are short enough for a first experience.' },
    { q: 'Do I need to be religious to walk a pilgrimage?', a: 'No. Surveys show that only 30–40% of Camino pilgrims walk for purely religious reasons. Many walk for personal growth, physical challenge, nature, or simply to disconnect. The trails welcome everyone regardless of belief.' },
    { q: 'Can I walk a pilgrimage solo as a woman?', a: 'Yes. All three routes are safe for solo female walkers. The Camino has a large community of solo women. The Kumano Kodo and Shikoku are in Japan, one of the safest countries in the world. Standard travel precautions apply.' },
    { q: 'What is the Dual Pilgrim credential?', a: 'The Dual Pilgrim is a certificate awarded to those who complete both the Camino de Santiago and the Kumano Kodo. You need the Compostela (Camino) and the Kumano Kodo completion stamp. Apply at the tourism offices in Santiago or Tanabe.' },
  ],
  ctaTitle: 'Start Planning Your Pilgrimage',
  ctaDesc: 'Sacred Trails covers the Camino de Santiago, Kumano Kodo, and Shikoku Henro. Offline navigation, stage data, and lodging — everything you need for your first (or next) pilgrimage.',
}

const articles: Record<ArticleSlug, ArticleContent> = {
  'camino-packing-list': caminoPackingList,
  'camino-cost': caminoCost,
  'first-pilgrimage': firstPilgrimage,
}

export function getArticleContent(slug: ArticleSlug): ArticleContent {
  return articles[slug]
}

export function getAllArticleSlugs(): ArticleSlug[] {
  return Object.keys(articles) as ArticleSlug[]
}
