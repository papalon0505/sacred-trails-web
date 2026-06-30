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

export const ARTICLE_SLUGS = [
  'camino-packing-list',
  'camino-cost',
  'first-pilgrimage',
  'camino-routes-compared',
  'kumano-kodo-nakahechi-itinerary',
  'shikoku-henro-planning',
  'dual-pilgrim-certificate',
  'saigoku-33-kannon-pilgrimage',
] as const

export type ArticleSlug = typeof ARTICLE_SLUGS[number]

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

const caminoRoutesCompared: ArticleContent = {
  title: 'Camino Routes Compared: Which Way Should You Walk?',
  subtitle: 'A practical route-choice guide for the Francés, Portugués, Norte, Primitivo, Inglés, Fisterra, and quieter alternatives',
  metaTitle: 'Camino Routes Compared 2026 — Francés, Portugués, Norte & More',
  metaDesc: 'Compare major Camino de Santiago routes by distance, difficulty, social atmosphere, lodging density, seasons, and certificate planning.',
  sections: [
    {
      heading: 'Start With the Kind of Pilgrimage You Want',
      paragraphs: [
        'Most first-time pilgrims ask which Camino route is best. A better question is what kind of pilgrimage you want: social or quiet, coastal or inland, short or immersive, forgiving or physically demanding.',
        'All recognized Camino routes share the same final destination of Santiago de Compostela, but the daily experience varies sharply. The Camino Francés has the deepest infrastructure and the largest pilgrim community. The Portugués is shorter and easier to fit into a two-week trip. The Norte and Primitivo feel wilder and more physical. The Inglés and Fisterra-Muxía are compact routes for limited time.',
      ],
    },
    {
      heading: 'Best First Camino: Francés or Portugués',
      paragraphs: [
        'The Camino Francés remains the safest recommendation for a first long Camino if you have four to five weeks. It has frequent albergues, visible waymarks, many cafés, and a steady stream of other pilgrims. This reduces planning risk and makes it easier to adjust your pace.',
        'The Camino Portugués from Porto is the better first choice when time is shorter. The Central route is direct and social; the Coastal route gives more sea views but needs more careful stage planning in places. Both are easier than the Norte or Primitivo for most new walkers.',
      ],
      list: [
        'Choose the Francés if you want the classic social Camino and can walk roughly a month.',
        'Choose the Portugués if you have 10-14 walking days and want strong infrastructure.',
        'Choose the Inglés if you need a one-week qualifying route from Ferrol.',
      ],
    },
    {
      heading: 'Best Quiet Camino: Norte, Primitivo, Invierno',
      paragraphs: [
        'The Camino del Norte is beautiful but more demanding than many first-timers expect. Coastal weather, repeated elevation changes, and longer gaps between pilgrim services make it better for walkers who already know their feet and pack.',
        'The Primitivo is shorter than the Norte but has serious climbs and exposed mountain sections. The Invierno is quieter still and can suit repeat pilgrims who want fewer crowds after completing one of the main routes.',
      ],
      list: [
        'Choose the Norte for coast, food, and solitude with stronger legs.',
        'Choose the Primitivo for a shorter but steeper historical route.',
        'Choose the Invierno if you have prior Camino experience and want a lower-crowd route.',
      ],
    },
    {
      heading: 'Certificate Planning',
      paragraphs: [
        'The Compostela is tied to walking at least the final 100 km to Santiago, with stamps collected in a pilgrim credential. This means route choice and starting point are separate decisions: you can walk a whole route, or only the qualifying final section if time is limited.',
        'Do not rely on a blog post for current certificate rules. Before departure, verify the latest requirements with the Pilgrim Reception Office and check where you can obtain a credential at your starting point.',
      ],
    },
    {
      heading: 'A Simple Decision Matrix',
      paragraphs: [
        'Use this route-choice shorthand before you start booking beds. It is intentionally conservative: first pilgrims usually benefit from easier logistics more than from theoretical scenery.',
      ],
      list: [
        'One week: Camino Inglés, or the final 100 km from Sarria if you want the Francés atmosphere.',
        'Two weeks: Camino Portugués from Porto, Central for simplicity or Coastal for ocean days.',
        'One month: Camino Francés from Saint-Jean-Pied-de-Port or Roncesvalles.',
        'Experienced walker: Norte, Primitivo, Invierno, San Salvador, or Via de la Plata.',
      ],
    },
  ],
  faq: [
    { q: 'Which Camino route has the most accommodation?', a: 'The Camino Francés has the deepest pilgrim infrastructure, especially between Saint-Jean-Pied-de-Port, Pamplona, Burgos, León, Sarria, and Santiago. The Portugués is also strong, but quieter routes need more advance planning.' },
    { q: 'Which route is least crowded?', a: 'The Invierno, San Salvador, Mozárabe, and Le Puy routes are generally quieter than the Francés and Portugués. Crowds change by season, holiday periods, and starting point.' },
    { q: 'Can I change Camino routes midway?', a: 'Sometimes, yes, but it depends on transport and geography. Many pilgrims adjust starting points, rest days, or final sections rather than switching whole route families.' },
    { q: 'Does Sacred Trails replace official route information?', a: 'No. Sacred Trails is an offline planning and navigation companion. Use official sources for certificate rules, temporary closures, transport strikes, and current opening hours.' },
  ],
  ctaTitle: 'Compare Camino Routes Offline',
  ctaDesc: 'Sacred Trails includes 12 Camino routes with stage data, waypoints, lodging references, and offline navigation for route choice and day-by-day walking.',
}

const kumanoNakahechiItinerary: ArticleContent = {
  title: 'Kumano Kodo Nakahechi Itinerary: 3 to 5 Day Planning Guide',
  subtitle: 'How to plan the classic forest pilgrimage from Takijiri-oji toward Kumano Hongu Taisha',
  metaTitle: 'Kumano Kodo Nakahechi Itinerary 2026 — 3 to 5 Day Planning Guide',
  metaDesc: 'Plan the Kumano Kodo Nakahechi route with practical stage options, lodging cautions, bus notes, weather planning, and official source checks.',
  sections: [
    {
      heading: 'Why the Nakahechi Is the Usual First Kumano Route',
      paragraphs: [
        'The Nakahechi is the most approachable introduction to the Kumano Kodo because it combines deep history, preserved forest paths, frequent cultural landmarks, and better visitor infrastructure than the more remote Kohechi or Ohechi routes.',
        'Approachable does not mean easy. The route has repeated climbs, stone steps, humid forest, and limited lodging capacity in small villages. A good Nakahechi plan starts with accommodation availability, then works backward to walking stages.',
      ],
    },
    {
      heading: 'Three-Day, Four-Day, and Five-Day Rhythms',
      paragraphs: [
        'A three-day plan is possible for strong walkers who are comfortable with longer mountain days. It can feel rushed if you want shrine time, onsen stops, and slower forest walking.',
        'A four-day plan is the most balanced for many visitors. It gives space for Takahara, Chikatsuyu or Tsugizakura, and the final approach to Kumano Hongu Taisha without turning every day into a race.',
        'A five-day plan is best for first-time Japan hikers, photographers, older walkers, or anyone pairing the route with nearby hot-spring villages such as Yunomine Onsen or Kawayu Onsen.',
      ],
      list: [
        '3 days: experienced hikers, light packs, limited shrine time.',
        '4 days: balanced classic rhythm for most prepared walkers.',
        '5 days: slower pace, better cultural stops, more weather buffer.',
      ],
    },
    {
      heading: 'Book Lodging Before You Lock the Route',
      paragraphs: [
        'Nakahechi villages are small. Lodging often includes dinner and breakfast, and some properties cannot handle last-minute changes the way Camino albergues can. Treat lodging as part of the route infrastructure, not an afterthought.',
        'Use official booking channels and confirm meal needs, check-in time, luggage transfer rules, and cancellation terms. If a desired village is full, adjust your walking plan rather than forcing a stage that ends with no practical place to sleep.',
      ],
    },
    {
      heading: 'Bus Use Is Normal, But Plan It Carefully',
      paragraphs: [
        'Using buses to reach trailheads, return from Hongu, or connect on poor-weather days is normal on the Kumano Kodo. The risk is assuming rural bus frequency is the same as a large Japanese city. It is not.',
        'Before walking, save the relevant timetable offline and check whether the service runs on your travel date. Build a plan for the last bus of the day, not the bus you hope to catch if everything goes perfectly.',
      ],
    },
    {
      heading: 'Weather and Trail Conditions',
      paragraphs: [
        'Spring and autumn are usually the easiest seasons to recommend. Summer heat and humidity make climbs more demanding, while winter can bring cold rain, icy steps, shorter daylight, and more limited service windows.',
        'After heavy rain, stone paths and roots can become slippery. If a section has official closure or warning notices, follow them. The pilgrimage is not improved by ignoring local safety guidance.',
      ],
    },
  ],
  faq: [
    { q: 'Is the Nakahechi suitable for beginners?', a: 'Yes for prepared beginners, especially on a four- or five-day plan. It is not a flat sightseeing walk; train with hills and stairs before departure.' },
    { q: 'Do I need to carry a tent?', a: 'No. Most visitors use guesthouses, ryokan, or minshuku. Wild camping is not the normal planning model for the Nakahechi.' },
    { q: 'Can I use luggage transfer?', a: 'Often yes, but rules depend on provider, lodging, and route segment. Confirm directly when booking rather than assuming it is available every day.' },
    { q: 'Where should I verify current route notices?', a: 'Check Tanabe City Kumano Tourism Bureau, Kumano Travel, your lodging provider, and local visitor centers before departure.' },
  ],
  ctaTitle: 'Walk Kumano With Offline Stages',
  ctaDesc: 'Sacred Trails includes Kumano Kodo routes, offline waypoints, route notes, and multilingual stage references for forest walking without signal.',
}

const shikokuHenroPlanning: ArticleContent = {
  title: 'Shikoku Henro Planning Guide: Walking the 88 Temple Circuit',
  subtitle: 'How to prepare for 1,200 km of temples, road walking, lodging, etiquette, and section pilgrimage',
  metaTitle: 'Shikoku Henro Planning Guide 2026 — 88 Temple Pilgrimage',
  metaDesc: 'Plan the Shikoku 88 temple pilgrimage with walking duration, section options, etiquette, lodging, resupply, and official source guidance.',
  sections: [
    {
      heading: 'The Shikoku Henro Is a Circuit, Not a Single Trail',
      paragraphs: [
        'The Shikoku Henro links 88 Buddhist temples around Shikoku. Unlike the Camino, it is not one continuous footpath designed mainly for modern walkers. Pilgrims move through city streets, rural roads, coastal roads, mountain approaches, temple stairs, and occasional trail sections.',
        'This matters for planning. Foot care, road awareness, language preparation, and lodging research are just as important as hiking fitness.',
      ],
    },
    {
      heading: 'Full Walk or Section Henro',
      paragraphs: [
        'A full walking circuit is usually planned as a multi-week commitment. Many walkers use a 45-60 day range, with pace depending on weather, rest days, temple time, and whether they carry camping gear.',
        'Section walking is also normal. Some pilgrims complete one prefecture at a time, return over multiple years, or mix walking with train and bus connections. This can make the pilgrimage more realistic for travelers with limited vacation time.',
      ],
      list: [
        'Full walking henro: best for deep immersion and continuity.',
        'Prefecture sections: easier to fit into repeat Japan trips.',
        'Temple clusters: useful for cultural travelers who cannot walk the whole circuit.',
      ],
    },
    {
      heading: 'Temple Etiquette and Daily Rhythm',
      paragraphs: [
        'The basic rhythm is arrival, purification, bell or main-hall practice where appropriate, sutra or quiet prayer, Daishi hall, stamp office, and departure. Visitors who are not Buddhist can still participate respectfully by moving quietly and following posted rules.',
        'Carry cash for temple stamps and small purchases. Stamp office hours can vary, so avoid building a schedule that arrives at every temple just before closing.',
      ],
    },
    {
      heading: 'Lodging and Resupply',
      paragraphs: [
        'Shikoku has minshuku, business hotels, temple lodgings, guesthouses, campgrounds, and occasional free or donation-based pilgrim hospitality. Availability changes by area, day, and season.',
        'Do not assume you can always improvise at the end of a long day. Rural sections may have long distances between beds and shops. Plan water, food, and backup transport before mountain approaches or sparsely served coastal stretches.',
      ],
    },
    {
      heading: 'Language and Navigation',
      paragraphs: [
        'Many signs are in Japanese, and local hospitality often happens in Japanese. A translation app, saved lodging names, offline maps, and printed backup notes can prevent small misunderstandings from becoming major delays.',
        'Sacred Trails is useful here because route and temple data remain available without signal. Still, use official sources and local updates for closures, disaster recovery, and temporary detours.',
      ],
    },
  ],
  faq: [
    { q: 'How long does walking the Shikoku Henro take?', a: 'Many walkers plan around 45-60 days for the full circuit, but pace varies by fitness, weather, rest days, route choices, and lodging availability.' },
    { q: 'Can I do the Shikoku Henro without speaking Japanese?', a: 'Yes, but preparation matters. Save lodging names, temple names, transport options, and emergency phrases offline before walking.' },
    { q: 'Is the Shikoku Henro harder than the Camino?', a: 'For many foreign walkers, yes. Road walking, language barriers, fewer pilgrim-specific beds, and longer logistics gaps make it more demanding.' },
    { q: 'Do I need to visit temples in order?', a: 'Traditional walkers often follow temple order, but reverse order and section approaches exist. Check official and temple guidance for your intended style.' },
  ],
  ctaTitle: 'Carry the 88 Temples Offline',
  ctaDesc: 'Sacred Trails keeps Shikoku temple notes, route stages, and waypoints available offline in multiple languages.',
}

const dualPilgrimCertificate: ArticleContent = {
  title: 'Dual Pilgrim Certificate Guide: Camino de Santiago + Kumano Kodo',
  subtitle: 'How to plan, document, and verify the two UNESCO pilgrimage traditions',
  metaTitle: 'Dual Pilgrim Certificate Guide 2026 — Camino and Kumano Kodo',
  metaDesc: 'Learn how the Dual Pilgrim certificate works, what to document, how to combine Camino and Kumano routes, and where to verify current requirements.',
  sections: [
    {
      heading: 'What Dual Pilgrim Means',
      paragraphs: [
        'Dual Pilgrim recognition connects two living pilgrimage traditions: the Camino de Santiago in Europe and the Kumano Kodo in Japan. It is not a race or a premium badge; it is a way to honor walking both cultural landscapes with care.',
        'The practical work is documentation. You need to understand what counts on each side, carry the right credential or stamp book, and keep records clear enough for official confirmation.',
      ],
    },
    {
      heading: 'Camino Side: Credential and Compostela Logic',
      paragraphs: [
        'For the Camino, most pilgrims think in terms of the Compostela: walking at least the required final distance into Santiago while collecting stamps in a pilgrim credential. Rules can evolve, and special cases exist, so verify the current requirement before choosing a short route or final section.',
        'Keep your credential clean, stamped, and readable. If your plan includes cycling, multiple route fragments, or an unusual starting point, confirm the rule directly with official Camino sources before assuming it qualifies.',
      ],
    },
    {
      heading: 'Kumano Side: Route, Stamp, and Office Workflow',
      paragraphs: [
        'For Kumano, qualifying options and stamp requirements should be checked with Tanabe City Kumano Tourism Bureau or official Kumano resources before departure. The most common visitor path is based around the Nakahechi, but do not rely on a general article for current administrative details.',
        'Plan where you will receive stamps, where you will stay, and where you will submit or confirm records. Rural timing matters: visitor offices, lodging, and transport windows may not match a last-minute schedule.',
      ],
    },
    {
      heading: 'Which Order Should You Walk?',
      paragraphs: [
        'Many pilgrims walk the Camino first because it is more forgiving logistically and gives a strong introduction to credential habits. Others walk Kumano first because it fits a Japan trip and requires fewer walking days.',
        'There is no spiritually correct order. The better order is the one that lets you prepare properly, walk respectfully, and verify documents without rushing.',
      ],
      list: [
        'Camino first: better for beginners and long-distance walking confidence.',
        'Kumano first: better if Japan travel dates are fixed and you want a shorter pilgrimage first.',
        'Same year: possible, but leave recovery and planning time between routes.',
      ],
    },
    {
      heading: 'Document Checklist',
      paragraphs: [
        'Before the first day, prepare more than you think you need. A missing stamp can be hard to reconstruct after leaving a village.',
      ],
      list: [
        'Camino pilgrim credential and passport.',
        'Kumano stamp booklet or official record method for your chosen route.',
        'Photos of key stamps and documents backed up online.',
        'Official office locations and opening hours saved offline.',
        'Route plan with dates, lodging names, and transport backups.',
      ],
    },
  ],
  faq: [
    { q: 'Do I have to walk the Camino and Kumano in the same year?', a: 'No. The value is completing and documenting both traditions. Check current official guidance for record submission and recognition details.' },
    { q: 'Which Kumano route is best for Dual Pilgrim planning?', a: 'The Nakahechi is the most common visitor route because it has the strongest support infrastructure. Confirm qualifying options with official Kumano sources before booking.' },
    { q: 'Can I use Sacred Trails as proof?', a: 'No. Sacred Trails helps you plan and navigate offline. Official credentials, stamps, and office verification are what matter for recognition.' },
    { q: 'Should I carry paper documents?', a: 'Yes. Digital backups are useful, but paper credentials and stamp records remain central to pilgrimage documentation.' },
  ],
  ctaTitle: 'Plan Both Pilgrimages in One App',
  ctaDesc: 'Sacred Trails includes Camino and Kumano route data offline, helping you prepare each side of a Dual Pilgrim journey.',
}

const saigokuKannonPilgrimage: ArticleContent = {
  title: 'Saigoku 33 Kannon Pilgrimage Guide',
  subtitle: 'How to understand and plan Japan’s 33-temple Kannon pilgrimage across the Kansai region',
  metaTitle: 'Saigoku 33 Kannon Pilgrimage Guide 2026',
  metaDesc: 'Plan the Saigoku 33 Kannon pilgrimage with temple overview, multi-trip strategy, transport planning, stamp books, and official source checks.',
  sections: [
    {
      heading: 'A Pilgrimage Built Around Temples, Not Daily Stages',
      paragraphs: [
        'The Saigoku 33 Kannon Pilgrimage links 33 temples associated with Kannon across western Japan. Unlike a single long-distance trail, it is often approached as a series of temple visits connected by train, bus, local walking, and occasional mountain approaches.',
        'That structure makes it flexible, but also easy to underestimate. A good Saigoku plan needs temple order, transport connections, stamp timing, and realistic buffers for rural access.',
      ],
    },
    {
      heading: 'Who This Pilgrimage Is Best For',
      paragraphs: [
        'Saigoku suits travelers who want sacred architecture, regional culture, and a multi-stop Japan pilgrimage without committing to a 45-day walking circuit. It also suits repeat Japan visitors who can complete temples over several trips.',
        'It is less suitable if you want a continuous footpath like the Camino. Some temple approaches are walkable and atmospheric, but the overall route is transport-assisted for many modern pilgrims.',
      ],
    },
    {
      heading: 'Planning by Region',
      paragraphs: [
        'Instead of trying to force all 33 temples into one linear march, group temples by access region. Kansai rail hubs can make some temple clusters efficient, while mountain temples require more careful bus and daylight planning.',
        'Check the official temple association site for temple names and sequence, then build a transport plan around actual train and bus options. Keep the plan conservative: a missed rural bus can erase an afternoon.',
      ],
    },
    {
      heading: 'Stamp Books and Temple Time',
      paragraphs: [
        'As with many Japanese pilgrimages, the record of worship is part of the practice. If collecting goshuin or pilgrimage stamps, confirm the correct office location, hours, etiquette, and cash needs before arrival.',
        'Leave enough time for the temple itself. Treating each stop as only a stamp transaction misses the point of a Kannon pilgrimage and often creates avoidable schedule pressure.',
      ],
    },
    {
      heading: 'How Sacred Trails Helps',
      paragraphs: [
        'Sacred Trails includes Saigoku route data as an offline reference layer, which is useful when moving between temple areas without reliable signal. Use it for orientation, waypoint context, and route awareness.',
        'For current transport, temple office hours, special closures, and seasonal access, always verify with official temple or regional sources close to your travel date.',
      ],
    },
  ],
  faq: [
    { q: 'Can I walk the entire Saigoku 33 pilgrimage?', a: 'Some dedicated pilgrims walk large portions, but many modern pilgrims use trains and buses between temple areas. Plan based on your time, fitness, and transport comfort.' },
    { q: 'How long does Saigoku 33 take?', a: 'It depends on style. A transport-assisted trip can be broken into clusters, while a more traditional walking approach takes much longer. Temple access and rural transport are the limiting factors.' },
    { q: 'Do I need Japanese?', a: 'You can visit without fluency, but temple names, transport signs, and etiquette are easier with saved Japanese text, offline translation, and printed notes.' },
    { q: 'Is this a beginner-friendly Japan pilgrimage?', a: 'Yes if you are comfortable with Japanese transport. It is logistically different from the Kumano Kodo and less physically continuous than Shikoku.' },
  ],
  ctaTitle: 'Keep Saigoku Temple Notes Offline',
  ctaDesc: 'Sacred Trails includes Saigoku 33 Kannon route references, temple context, and multilingual offline data for regional pilgrimage planning.',
}

const articles: Record<ArticleSlug, ArticleContent> = {
  'camino-packing-list': caminoPackingList,
  'camino-cost': caminoCost,
  'first-pilgrimage': firstPilgrimage,
  'camino-routes-compared': caminoRoutesCompared,
  'kumano-kodo-nakahechi-itinerary': kumanoNakahechiItinerary,
  'shikoku-henro-planning': shikokuHenroPlanning,
  'dual-pilgrim-certificate': dualPilgrimCertificate,
  'saigoku-33-kannon-pilgrimage': saigokuKannonPilgrimage,
}

export function getArticleContent(slug: ArticleSlug): ArticleContent {
  return articles[slug]
}

export function getAllArticleSlugs(): ArticleSlug[] {
  return [...ARTICLE_SLUGS]
}
