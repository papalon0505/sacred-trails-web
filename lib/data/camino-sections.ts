export interface CaminoSection {
  id: string
  name: Record<string, string>
  kmRange: string
  km: [number, number]
  keywords: string[]
  tagline: Record<string, string>
  description: Record<string, string>
  highlights: Record<string, string[]>
  difficulty: number // 1-5
  region: string
}

export const caminoFrancésSections: CaminoSection[] = [
  {
    id: "pyrenees-navarra",
    name: {
      en: "Pyrenees & Navarra",
      ja: "ピレネーとナバラ",
      zhTW: "庇里牛斯山與納瓦拉",
      es: "Pirineos y Navarra",
    },
    kmRange: "0–199",
    km: [0, 199],
    keywords: ["mountains", "altitude", "albergue"],
    tagline: {
      en: "The mountain crossing that breaks you open — and the albergue that puts you back together",
      ja: "山越えがあなたを打ち砕き、アルベルゲがあなたを再び一つにする",
      zhTW: "翻山越嶺將你擊潰——而庇護所再次將你拼合",
      es: "El cruce de montaña que te rompe por dentro — y el albergue que te vuelve a unir",
    },
    description: {
      en: "From Saint-Jean-Pied-de-Port at the foot of the French Pyrenees to Pamplona, this opening section sets the physical and spiritual tone for the entire journey. Day 1 is the hardest single day on the Camino — 25km over the 1,430m Napoleon Route. Roncesvalles welcomes exhausted pilgrims with one of the oldest pilgrim blessings in Christian history.",
      ja: "フランス・ピレネー山麓のサン・ジャン・ピエ・ド・ポーからパンプローナまで、この最初の区間が旅全体の身体的・精神的な基調を定める。1日目はカミーノで最も過酷な日——ナポレオン・ルートで1,430mを越える25km。ロンセスバジェスでは、キリスト教史上最も古い巡礼者への祝福の一つが疲れ果てた巡礼者を迎える。",
      zhTW: "從法國庇里牛斯山麓的聖讓皮耶德波爾出發，前往潘普洛納，這段開場路程為整趟旅程定下了身體與精神的基調。第1天是卡米諾全程最艱難的一天——拿破崙路線翻越1,430公尺，全程25公里。朗塞斯瓦列斯以基督教史上最古老的朝聖者祝福之一迎接疲憊的旅人。",
      es: "Desde Saint-Jean-Pied-de-Port al pie de los Pirineos franceses hasta Pamplona, esta sección inaugural marca el tono físico y espiritual de todo el viaje. El día 1 es el día más duro del Camino — 25 km por la Ruta Napoleón a 1.430 m. Roncesvalles recibe a los peregrinos agotados con una de las bendiciones de peregrinos más antiguas de la historia cristiana.",
    },
    highlights: {
      en: [
        "Napoleon Route over the Pyrenees (1,430m) — clouds below, silence above",
        "Roncesvalles collegiate church pilgrim blessing — given nightly since the 12th century",
        "Pamplona's medieval walls and bull-run culture (San Fermín, July)",
      ],
      ja: [
        "ピレネー越えのナポレオン・ルート（1,430m）——雲は眼下、静寂は頭上に",
        "ロンセスバジェス修道院の巡礼者への祝福——12世紀から毎夜続く",
        "パンプローナの中世城壁と牛追い文化（サン・フェルミン祭、7月）",
      ],
      zhTW: [
        "翻越庇里牛斯山的拿破崙路線（1,430公尺）——雲在腳下，靜默在頭頂",
        "朗塞斯瓦列斯學院教堂朝聖者祝福——自12世紀起每晚舉行",
        "潘普洛納的中世紀城牆與奔牛節文化（聖費爾明節，7月）",
      ],
      es: [
        "Ruta Napoleón sobre los Pirineos (1.430 m) — nubes abajo, silencio arriba",
        "Bendición de peregrinos en la colegiata de Roncesvalles — desde el siglo XII cada noche",
        "Las murallas medievales de Pamplona y la cultura del encierro (San Fermín, julio)",
      ],
    },
    difficulty: 5,
    region: "Navarra",
  },
  {
    id: "rioja-castile",
    name: {
      en: "La Rioja & Castile",
      ja: "ラ・リオハとカスティーリャ",
      zhTW: "拉里奧哈與卡斯提爾",
      es: "La Rioja y Castilla",
    },
    kmRange: "199–500",
    km: [199, 500],
    keywords: ["wine", "wheat", "medieval"],
    tagline: {
      en: "Wine fountains, wheat fields, and the Hill of Forgiveness",
      ja: "ワインの泉、麦畑、そして許しの丘",
      zhTW: "酒泉、麥田，以及寬恕之丘",
      es: "Fuentes de vino, campos de trigo y el Alto del Perdón",
    },
    description: {
      en: "From Pamplona through the wine country of La Rioja to the Gothic cathedral city of Burgos, this is the Camino at its most iconic. The landscape opens into golden wheat plains, the path passes through medieval villages with centuries-old pilgrim traditions, and the city of Burgos marks the first major waypoint of the journey.",
      ja: "パンプローナからラ・リオハのワインの里を経てゴシック大聖堂の街ブルゴスへ——最も象徴的なカミーノの区間だ。風景は黄金色の小麦平野へと広がり、道は何世紀もの巡礼の伝統を持つ中世の村々を通り抜け、ブルゴスの街が旅の最初の主要な中継地となる。",
      zhTW: "從潘普洛納穿越拉里奧哈葡萄酒鄉，抵達哥德式大教堂城市布爾戈斯——這是卡米諾最具代表性的路段。景色展開為金色麥田平原，路途穿越擁有數百年朝聖傳統的中世紀村莊，而布爾戈斯標誌著旅程的第一個重要里程碑。",
      es: "Desde Pamplona por la tierra del vino de La Rioja hasta Burgos, ciudad de catedral gótica, este es el Camino en su expresión más icónica. El paisaje se abre en llanuras doradas de trigo, el camino pasa por aldeas medievales con siglos de tradición peregrina, y Burgos marca el primer gran hito del viaje.",
    },
    highlights: {
      en: [
        "Irache wine fountain — free Rioja red, flowing 24/7 since 1991",
        "Alto del Perdón iron silhouette sculpture — pilgrims cast in steel against the sky",
        "Burgos Cathedral (UNESCO) — Gothic masterpiece begun in 1221, tomb of El Cid",
      ],
      ja: [
        "イラチェのワインの泉——1991年から24時間リオハの赤ワインが無料で流れる",
        "アルト・デル・ペルドンの鉄製シルエット彫刻——鋼鉄で刻まれた巡礼者たちが空を背景に立つ",
        "ブルゴス大聖堂（ユネスコ）——1221年に着工したゴシックの傑作、エル・シッドの墓",
      ],
      zhTW: [
        "伊拉切酒泉——自1991年起24小時免費供應里奧哈紅酒",
        "寬恕之丘鐵製剪影雕塑——朝聖者的鋼鐵身影映襯天空",
        "布爾戈斯大教堂（聯合國教科文組織）——1221年開始建造的哥德式傑作，埃爾西德之墓",
      ],
      es: [
        "Fuente del vino de Irache — Rioja tinto gratis, fluyendo 24 h desde 1991",
        "Escultura de siluetas de hierro del Alto del Perdón — peregrinos en acero contra el cielo",
        "Catedral de Burgos (UNESCO) — obra maestra gótica iniciada en 1221, tumba del Cid",
      ],
    },
    difficulty: 3,
    region: "La Rioja / Castilla y León",
  },
  {
    id: "meseta",
    name: {
      en: "The Meseta",
      ja: "メセタ",
      zhTW: "梅塞塔高原",
      es: "La Meseta",
    },
    kmRange: "500–650",
    km: [500, 650],
    keywords: ["plateau", "solitude", "philosophy"],
    tagline: {
      en: "The plateau where silence becomes deafening and the Camino becomes philosophical",
      ja: "静寂が耳をつんざき、カミーノが哲学的になる高原",
      zhTW: "寂靜震耳欲聾、卡米諾化為哲思的高原",
      es: "La meseta donde el silencio ensordece y el Camino se vuelve filosófico",
    },
    description: {
      en: "Burgos to León across the vast central plateau of Spain — 150km of sky, wheat, and wind. This section breaks many pilgrims psychologically, not physically. The landscape is almost featureless: horizon in every direction, villages an hour apart, the same flat path stretching to infinity. Many pilgrims report their most profound insights and lowest moments here.",
      ja: "ブルゴスからレオンへ、スペインの広大な中央高原を横断する——150kmの空、小麦、そして風。この区間は多くの巡礼者を肉体的ではなく精神的に打ち砕く。地形はほぼ特徴のない景色が続く：四方に地平線、村と村の間は1時間、同じ平坦な道が無限に伸びる。多くの巡礼者がここで最も深い洞察と最も深い谷を経験したと語る。",
      zhTW: "從布爾戈斯到萊昂，橫越西班牙廣袤的中央高原——150公里的天空、小麥與風。這段路從心理上而非體力上擊垮許多朝聖者。地形幾乎毫無特色：四面八方皆是地平線，村莊間隔一小時路程，同樣的平坦道路延伸至無窮盡頭。許多朝聖者說他們在此處經歷了最深刻的頓悟，也承受了最低落的時刻。",
      es: "De Burgos a León a través de la vasta meseta central de España — 150 km de cielo, trigo y viento. Esta etapa rompe a muchos peregrinos psicológicamente, no físicamente. El paisaje es casi uniforme: horizonte en todas las direcciones, pueblos separados por una hora, el mismo camino llano extendiéndose hasta el infinito. Muchos peregrinos dicen que aquí vivieron sus momentos más profundos y también sus peores.",
    },
    highlights: {
      en: [
        "Vast treeless plateau — 150km of sky and wheat, a horizon that never arrives",
        "León Cathedral — 1,800m² of stained glass (Gothic), nicknamed 'the House of Light'",
        "Cruz de Ferro (Iron Cross) — leave a stone from home, let go of what you carry",
      ],
      ja: [
        "広大な木のない高原——150kmの空と麦畑、永遠に近づかない地平線",
        "レオン大聖堂——1,800m²のステンドグラス（ゴシック）、「光の家」と呼ばれる",
        "鉄十字架（クルス・デ・フェッロ）——故郷から持ってきた石を置き、抱えてきたものを手放す",
      ],
      zhTW: [
        "廣闊的無樹高原——150公里的天空與麥田，永遠無法抵達的地平線",
        "萊昂大教堂——1,800平方公尺的彩繪玻璃（哥德式），暱稱「光之屋」",
        "鐵十字架——放下一塊從家鄉帶來的石頭，放下心中的負擔",
      ],
      es: [
        "Vasta meseta sin árboles — 150 km de cielo y trigo, un horizonte que nunca llega",
        "Catedral de León — 1.800 m² de vidrieras góticas, apodada 'la Casa de la Luz'",
        "Cruz de Ferro — deja una piedra de casa, suelta lo que llevas dentro",
      ],
    },
    difficulty: 2,
    region: "Castilla y León",
  },
  {
    id: "bierzo-mountains",
    name: {
      en: "El Bierzo & The Mountains",
      ja: "エル・ビエルソと山々",
      zhTW: "比埃爾索與山脈",
      es: "El Bierzo y Las Montañas",
    },
    kmRange: "650–720",
    km: [650, 720],
    keywords: ["mountains", "Galicia", "Gaudí"],
    tagline: {
      en: "The last mountain crossing — and the first breath of Galicia",
      ja: "最後の山越え——そしてガリシアへの最初の息吹",
      zhTW: "最後一次翻山——加利西亞的第一口呼吸",
      es: "El último cruce de montaña — y el primer aliento de Galicia",
    },
    description: {
      en: "León to O Cebreiro — a short but dramatic section that descends into the lush valley of El Bierzo before the final climb into Galicia. The ascent to O Cebreiro is brutal and beautiful: a mountain village so ancient it pre-dates the pilgrimage itself, often shrouded in mist at 1,300m. The moment you cross into Galicia, everything changes — the language, the architecture, the air.",
      ja: "レオンからオ・セブレイロへ——短いが劇的な区間で、エル・ビエルソの緑豊かな渓谷へ下り、最後のガリシアへの登りが待つ。オ・セブレイロへの登りは過酷で美しい：巡礼路そのものより古い山上の村は、標高1,300mで霧に包まれることが多い。ガリシアへ越えた瞬間、すべてが変わる——言語、建築、空気。",
      zhTW: "從萊昂到歐塞布雷羅——一段短暫卻戲劇化的路程，先下降進入翠綠的比埃爾索山谷，再爬上通往加利西亞的最後山嶺。攀登歐塞布雷羅既艱辛又美麗：這個山頂村落比朝聖之路本身更為古老，在海拔1,300公尺處常被薄霧籠罩。跨入加利西亞的那一刻，一切都變了——語言、建築、空氣。",
      es: "De León a O Cebreiro — una etapa corta pero dramática que desciende al frondoso valle del Bierzo antes del ascenso final a Galicia. La subida a O Cebreiro es brutal y hermosa: un pueblo de montaña tan antiguo que precede al propio Camino, a menudo envuelto en niebla a 1.300 m. En el momento en que cruzas a Galicia, todo cambia — la lengua, la arquitectura, el aire.",
    },
    highlights: {
      en: [
        "Astorga's Gaudí Bishop's Palace — fairytale Gothic beside the Roman walls",
        "O Cebreiro mountain village (1,300m) — often in clouds, chalice of the Holy Grail legend",
        "Las Médulas Roman gold mines (UNESCO) — surreal red-rock landscape carved by ancient hydraulic mining",
      ],
      ja: [
        "アストルガのガウディ司教館——ローマ城壁に隣接するおとぎ話のようなゴシック建築",
        "オ・セブレイロの山上の村（1,300m）——しばしば雲の中に、聖杯伝説の杯",
        "ラス・メドゥラスのローマの金鉱（ユネスコ）——古代水力採掘が刻んだ幻想的な赤岩の風景",
      ],
      zhTW: [
        "阿斯托爾加的高第主教宮——羅馬城牆旁童話般的哥德式建築",
        "歐塞布雷羅山頂村（1,300公尺）——常在雲中，聖杯傳說的聖器",
        "拉斯梅杜拉斯羅馬金礦（聯合國教科文組織）——古代水力採礦雕琢而成的超現實紅岩地貌",
      ],
      es: [
        "Palacio Episcopal de Gaudí en Astorga — gótico de cuento de hadas junto a las murallas romanas",
        "Aldea montañesa de O Cebreiro (1.300 m) — a menudo entre nubes, cáliz de la leyenda del Santo Grial",
        "Las Médulas, minas de oro romanas (UNESCO) — paisaje surrealista de roca roja tallado por minería hidráulica antigua",
      ],
    },
    difficulty: 4,
    region: "El Bierzo / Galicia",
  },
  {
    id: "galicia",
    name: {
      en: "Galicia",
      ja: "ガリシア",
      zhTW: "加利西亞",
      es: "Galicia",
    },
    kmRange: "720–780",
    km: [720, 780],
    keywords: ["green", "eucalyptus", "cathedral"],
    tagline: {
      en: "Green valleys, eucalyptus forests, and the spires appearing at last on the horizon",
      ja: "緑の谷、ユーカリの森、そしてついに地平線に現れる尖塔",
      zhTW: "翠綠山谷、尤加利樹林，終於在地平線上出現的尖塔",
      es: "Valles verdes, bosques de eucaliptos y las torres apareciendo por fin en el horizonte",
    },
    description: {
      en: "O Cebreiro to Santiago de Compostela — the final and most emotionally charged section. Galicia feels different from everything before it: ancient Celtic land, perpetually green, misty with Atlantic rain, its language a cousin of Portuguese. The last days are a slow crescendo — through forests, villages of granite, and finally the city itself, where the Cathedral's towers rise above the rooftops.",
      ja: "オ・セブレイロからサンティアゴ・デ・コンポステーラへ——最後で最も感情的に満ちた区間。ガリシアはここまでのすべてと異なる雰囲気を持つ：古代のケルトの地、常緑で、大西洋の雨に霞み、その言語はポルトガル語の近縁だ。最後の日々はゆっくりとしたクレッシェンド——森、花崗岩の村々を経て、ついに大聖堂の塔が屋根の上に聳える街へ。",
      zhTW: "從歐塞布雷羅到聖地牙哥德孔波斯特拉——最後也是情感上最充沛的路段。加利西亞的感覺與之前一切都不同：古老的凱爾特土地，長年翠綠，大西洋的雨霧瀰漫，語言是葡萄牙語的近親。最後幾天是緩慢的漸強——穿越森林、花崗岩村莊，終於抵達這座城市，大教堂的尖塔在屋頂上方聳立。",
      es: "De O Cebreiro a Santiago de Compostela — la etapa final y emocionalmente más intensa. Galicia se siente diferente a todo lo anterior: tierra celta ancestral, perpetuamente verde, envuelta en lluvia atlántica, con una lengua prima del portugués. Los últimos días son un crescendo lento — entre bosques, aldeas de granito y finalmente la ciudad, donde las torres de la Catedral se alzan sobre los tejados.",
    },
    highlights: {
      en: [
        "Monte do Gozo (Hill of Joy) — first view of Santiago's towers, pilgrims traditionally race to see first",
        "Pilgrim Mass at the Cathedral (12:00 daily) — nationalities called out, tears flow freely",
        "Botafumeiro — the giant incense burner swung in a 65m arc across the nave",
      ],
      ja: [
        "モンテ・ド・ゴソ（歓喜の丘）——サンティアゴの塔を最初に見る場所、伝統的に巡礼者たちが競って登る",
        "大聖堂の巡礼者ミサ（毎日12:00）——各国の名前が呼ばれ、涙があふれる",
        "ボタフメイロ——身廊を65mのアーチで振られる巨大な香炉",
      ],
      zhTW: [
        "歡喜山——第一次看見聖地牙哥尖塔的地方，朝聖者傳統上競相搶先看到",
        "大教堂朝聖者彌撒（每日12:00）——各國名稱被呼喊，淚水自然流下",
        "博達芬美羅——在中殿以65公尺弧度擺盪的巨大香爐",
      ],
      es: [
        "Monte do Gozo (Monte del Gozo) — primera vista de las torres de Santiago, los peregrinos compiten por ser los primeros en verla",
        "Misa de Peregrinos en la Catedral (12:00 diario) — se nombran las nacionalidades, las lágrimas fluyen",
        "Botafumeiro — el gigantesco incensario que oscila en un arco de 65 m a través de la nave",
      ],
    },
    difficulty: 2,
    region: "Galicia",
  },
]
