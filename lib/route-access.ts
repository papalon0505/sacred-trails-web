import type { Locale } from '@/lib/i18n'

export interface AccessInfo {
  heading: string
  officialMap: { label: string; url: string }
  gettingThere: { title: string; items: string[] }
  localTransport: { title: string; items: string[] }
}

type RouteSystem = 'camino' | 'kumano' | 'shikoku' | 'saigoku'

const camino: Record<Locale, AccessInfo> = {
  'en': {
    heading: 'Getting There & Route Maps',
    officialMap: { label: 'Official Camino route maps (Oficina del Peregrino)', url: 'https://oficinadelperegrino.com/en/the-camino/' },
    gettingThere: {
      title: 'Starting points — how to arrive',
      items: [
        'Camino Francés: Fly to Biarritz (BIQ) or Bilbao (BIO) → bus/train to Saint-Jean-Pied-de-Port (SJPP).',
        'Camino Portugués: Fly to Porto (OPO) → walk from cathedral or take metro to Matosinhos for coastal route.',
        'Camino del Norte: Fly to Bilbao (BIO) or Santander (SDR). Both are official starting points.',
        'Camino Primitivo: Train or bus to Oviedo from Madrid/Barcelona (~5h).',
        'Vía de la Plata: Fly to Seville (SVQ) — route starts at Seville Cathedral.',
      ],
    },
    localTransport: {
      title: 'Local transport along the way',
      items: [
        'ALSA long-distance buses connect most stage towns (alsa.com).',
        'RENFE regional trains cover major Camino cities — useful for skipping sections or emergencies.',
        'Jacotrans and Correos Paq Mochila offer pilgrim luggage-transfer between stage towns on most Spanish routes — check current rates at jacotrans.com or paqmochila.com.',
        'Taxis are reliable in villages but expensive (€1.20/km); use them only for emergencies or injury.',
      ],
    },
  },
  'ja': {
    heading: 'アクセスとルート地図',
    officialMap: { label: 'カミーノ公式ルート地図（Oficina del Peregrino）', url: 'https://oficinadelperegrino.com/en/the-camino/' },
    gettingThere: {
      title: '出発地点へのアクセス',
      items: [
        'フランス人の道：ビアリッツ（BIQ）またはビルバオ（BIO）空港 → バス・鉄道でサン・ジャン・ピエ・ド・ポール（SJPP）へ。',
        'ポルトガル人の道：ポルト（OPO）空港 → カテドラルから徒歩、または地下鉄でマトシーニョス（海岸ルート起点）へ。',
        'カミーノ・デル・ノルテ：ビルバオ（BIO）またはサンタンデール（SDR）空港。いずれも公式起点。',
        'プリミティボの道：マドリード/バルセロナからオビエドまで鉄道・バス（約5時間）。',
        '銀の道（Vía de la Plata）：セビリア（SVQ）空港 → セビリア大聖堂が起点。',
      ],
    },
    localTransport: {
      title: '道中の交通手段',
      items: [
        'ALSA長距離バスがほぼ全てのステージ都市を結ぶ（alsa.com）。',
        'RENFE地方鉄道が主要カミーノ都市をカバー — 区間スキップや緊急時に便利。',
        'JacotransとCorreos「Paq Mochila」が巡礼者の荷物をステージ間で配送（料金は jacotrans.com / paqmochila.com にて確認）。',
        'タクシーは村部でも比較的信頼できるが高額（€1.20/km）。緊急時や怪我の時のみ推奨。',
      ],
    },
  },
  'zh-TW': {
    heading: '交通資訊與路線圖',
    officialMap: { label: 'Camino 官方路線圖（Oficina del Peregrino）', url: 'https://oficinadelperegrino.com/en/the-camino/' },
    gettingThere: {
      title: '前往起點方式',
      items: [
        '法國之路：飛到 Biarritz（BIQ）或 Bilbao（BIO）→ 搭巴士/火車到 Saint-Jean-Pied-de-Port（SJPP）。',
        '葡萄牙之路：飛到 Porto（OPO）→ 從大教堂出發，或搭地鐵到 Matosinhos 走海岸線。',
        '北方之路：飛到 Bilbao（BIO）或 Santander（SDR），兩個都是官方起點。',
        '原始之路：從馬德里/巴塞隆納搭火車或巴士到 Oviedo（約 5 小時）。',
        'Vía de la Plata（銀之路）：飛到 Seville（SVQ）→ 從塞維亞大教堂啟程。',
      ],
    },
    localTransport: {
      title: '沿途交通',
      items: [
        'ALSA 長途巴士連接絕大多數路段城鎮（alsa.com）。',
        'RENFE 地區火車涵蓋主要 Camino 城市 — 跳過路段或緊急狀況時有用。',
        'Jacotrans 和 Correos Paq Mochila 提供朝聖者行李路段配送，遍及西班牙多數路線（費率請至 jacotrans.com / paqmochila.com 確認）。',
        '村鎮計程車可靠但昂貴（每公里 1.20 歐元），建議僅在緊急或受傷時使用。',
      ],
    },
  },
  'es': {
    heading: 'Cómo llegar y mapas de rutas',
    officialMap: { label: 'Mapas oficiales del Camino (Oficina del Peregrino)', url: 'https://oficinadelperegrino.com/es/el-camino/' },
    gettingThere: {
      title: 'Puntos de inicio — cómo llegar',
      items: [
        'Camino Francés: Vuela a Biarritz (BIQ) o Bilbao (BIO) → autobús/tren a Saint-Jean-Pied-de-Port (SJPP).',
        'Camino Portugués: Vuela a Oporto (OPO) → caminas desde la catedral o toma el metro a Matosinhos para la variante costera.',
        'Camino del Norte: Vuela a Bilbao (BIO) o Santander (SDR). Ambos son puntos de salida oficiales.',
        'Camino Primitivo: Tren o autobús a Oviedo desde Madrid/Barcelona (~5h).',
        'Vía de la Plata: Vuela a Sevilla (SVQ) — la ruta empieza en la catedral.',
      ],
    },
    localTransport: {
      title: 'Transporte local en ruta',
      items: [
        'Autobuses ALSA conectan la mayoría de pueblos-etapa (alsa.com).',
        'Trenes regionales RENFE cubren las principales ciudades del Camino — útiles para saltar tramos o emergencias.',
        'Jacotrans y Correos Paq Mochila transportan mochilas de peregrinos entre etapas en la mayoría de rutas (consulta tarifas en jacotrans.com / paqmochila.com).',
        'Los taxis son fiables en los pueblos pero caros (1,20€/km); úsalos solo en emergencias o lesión.',
      ],
    },
  },
}

const kumano: Record<Locale, AccessInfo> = {
  'en': {
    heading: 'Getting There & Route Maps',
    officialMap: { label: 'Official Kumano Kodo route maps (Tanabe Tourism Bureau)', url: 'https://www.tb-kumano.jp/en/kumano-kodo/map/' },
    gettingThere: {
      title: 'Starting points — how to arrive',
      items: [
        'Nakahechi (Tanabe / Takijiri): Kansai Airport (KIX) → JR Kuroshio limited express to Kii-Tanabe (~2h) → Ryujin bus to Takijiri-oji (~40 min).',
        'Kohechi (Koyasan): Osaka → Nankai Koya line to Gokurakubashi → cable car to Koyasan (~2h total).',
        'Iseji (Ise): Nagoya → JR Kintetsu line to Ise-shi station (~1h 20min).',
        'Ohechi / Nachi area: Shingu or Kii-Katsuura station via JR Kuroshio line from Osaka or Nagoya.',
      ],
    },
    localTransport: {
      title: 'Local buses along Kumano Kodo',
      items: [
        'Ryujin Bus (Tanabe → Takijiri → Kumano Hongu Taisha): Central access bus for Nakahechi, ~5 round-trips daily.',
        'Kumano-gawa Boat (Hongu → Shingu / Hayatama Taisha): Traditional 90-min river-boat ride, counts toward Dual Pilgrim route. Reservation required.',
        'Kumano Kotsu operates bus lines connecting Nachi, Katsuura, Shingu, and Hongu. A multi-day Kumano Kodo bus pass is usually available — check current routes and pricing at kumanokotsu.co.jp.',
        'Taxis available at Kii-Tanabe, Shingu, Kii-Katsuura stations — useful for skipping non-trail road sections.',
      ],
    },
  },
  'ja': {
    heading: 'アクセスとルート地図',
    officialMap: { label: '熊野古道公式ルート地図（田辺市熊野ツーリズムビューロー）', url: 'https://www.tb-kumano.jp/kumano-kodo/map/' },
    gettingThere: {
      title: '出発地点へのアクセス',
      items: [
        '中辺路（田辺・滝尻）：関西空港（KIX）→ JR紀勢線特急くろしお号で紀伊田辺駅（約2時間）→ 龍神バスで滝尻王子（約40分）。',
        '小辺路（高野山）：大阪 → 南海高野線で極楽橋 → ケーブルカーで高野山（合計約2時間）。',
        '伊勢路（伊勢）：名古屋 → JR近鉄線で伊勢市駅（約1時間20分）。',
        '大辺路・那智エリア：大阪・名古屋からJR紀勢線で新宮駅または紀伊勝浦駅。',
      ],
    },
    localTransport: {
      title: '熊野古道沿いの路線バス',
      items: [
        '龍神バス（田辺 → 滝尻 → 熊野本宮大社）：中辺路のメインアクセス、1日約5往復。',
        '熊野川舟下り（本宮 → 新宮・速玉大社）：伝統的な川舟で90分の道程。デュアル巡礼者ルートとしても認定。要予約。',
        '熊野交通バスが那智・勝浦・新宮・本宮を結ぶ路線を運行。熊野古道バスパスも利用可能（最新の系統・料金は kumanokotsu.co.jp 参照）。',
        '紀伊田辺・新宮・紀伊勝浦駅でタクシー利用可 — 車道部分のスキップに便利。',
      ],
    },
  },
  'zh-TW': {
    heading: '交通資訊與路線圖',
    officialMap: { label: '熊野古道官方路線圖（田邊市熊野觀光局）', url: 'https://www.tb-kumano.jp/kumano-kodo/map/' },
    gettingThere: {
      title: '前往起點方式',
      items: [
        '中邊路（田邊・瀧尻）：關西機場（KIX）→ JR 紀勢線特急黑潮號到紀伊田邊站（約 2 小時）→ 龍神巴士到瀧尻王子（約 40 分鐘）。',
        '小邊路（高野山）：大阪 → 南海高野線到極樂橋 → 纜車上高野山（合計約 2 小時）。',
        '伊勢路（伊勢）：名古屋 → JR 近鐵線到伊勢市站（約 1 小時 20 分）。',
        '大邊路・那智地區：大阪・名古屋搭 JR 紀勢線到新宮站或紀伊勝浦站。',
      ],
    },
    localTransport: {
      title: '熊野古道沿線巴士',
      items: [
        '龍神巴士（田邊 → 瀧尻 → 熊野本宮大社）：中邊路主要交通方式，每日約 5 個往返班次。',
        '熊野川川舟（本宮 → 新宮・速玉大社）：傳統 90 分鐘川舟遊。亦為雙朝聖者認定路段。需預約。',
        '熊野交通營運連接那智・勝浦・新宮・本宮的巴士路線，通常有熊野古道多日巴士券可購買（最新路線與票價請至 kumanokotsu.co.jp 確認）。',
        '紀伊田邊・新宮・紀伊勝浦站可搭計程車 — 跳過車道路段時方便。',
      ],
    },
  },
  'es': {
    heading: 'Cómo llegar y mapas de rutas',
    officialMap: { label: 'Mapas oficiales del Kumano Kodo (Oficina de Turismo de Tanabe)', url: 'https://www.tb-kumano.jp/en/kumano-kodo/map/' },
    gettingThere: {
      title: 'Puntos de inicio — cómo llegar',
      items: [
        'Nakahechi (Tanabe / Takijiri): Aeropuerto Kansai (KIX) → tren limited express JR Kuroshio a Kii-Tanabe (~2h) → autobús Ryujin a Takijiri-oji (~40 min).',
        'Kohechi (Koyasan): Osaka → línea Nankai Koya hasta Gokurakubashi → funicular a Koyasan (~2h en total).',
        'Iseji (Ise): Nagoya → línea JR Kintetsu a estación de Ise-shi (~1h 20min).',
        'Ohechi / zona de Nachi: Estaciones de Shingu o Kii-Katsuura vía JR Kuroshio desde Osaka o Nagoya.',
      ],
    },
    localTransport: {
      title: 'Autobuses locales por el Kumano Kodo',
      items: [
        'Autobús Ryujin (Tanabe → Takijiri → Kumano Hongu Taisha): acceso principal para el Nakahechi, ~5 ida y vuelta al día.',
        'Barco del río Kumano (Hongu → Shingu / Hayatama Taisha): paseo tradicional de 90 minutos, válido para la ruta Dual Pilgrim. Reserva obligatoria.',
        'Kumano Kotsu opera líneas de autobús que conectan Nachi, Katsuura, Shingu y Hongu. Suele haber un bono Kumano Kodo de varios días disponible — consulta rutas y precios actualizados en kumanokotsu.co.jp.',
        'Taxis disponibles en las estaciones Kii-Tanabe, Shingu y Kii-Katsuura — útiles para saltar tramos de carretera.',
      ],
    },
  },
}

const shikoku: Record<Locale, AccessInfo> = {
  'en': {
    heading: 'Getting There & Route Maps',
    officialMap: { label: 'Official Shikoku 88 Temple map (Shikoku Henro Association)', url: 'https://88shikokuhenro.jp/en/88-temples/' },
    gettingThere: {
      title: 'How to arrive',
      items: [
        'Temple 1 (Ryozen-ji): Fly to Tokushima (TKS) or take JR Limited Express from Osaka/Okayama → Bando station (15 min walk to the temple).',
        'Matsuyama area (temples 43–65): Fly to Matsuyama (MYJ). Home of Temple 51 Ishite-ji and Dogo Onsen.',
        'Kochi area (temples 24–39): Fly to Kochi (KCZ) or JR Limited Express from Okayama.',
        'Kagawa area (temples 66–88): Takamatsu Airport (TAK) or JR Marine Liner from Okayama.',
      ],
    },
    localTransport: {
      title: 'Local transport',
      items: [
        'JR Shikoku rail + private Kotoden/Iyotetsu lines cover most temples within short walking distance.',
        'Shikoku Henro Bus Tours: chartered bus circuits (9–12 days) from major cities — used by majority of pilgrims.',
        'Henro Michi trail markers (red henro-san arrows) guide walking pilgrims between temples.',
        'Bicycle rental: widely available; 25–30 days to complete the circuit.',
      ],
    },
  },
  'ja': {
    heading: 'アクセスとルート地図',
    officialMap: { label: '四国八十八ヶ所公式地図（四国八十八ヶ所霊場会）', url: 'https://88shikokuhenro.jp/88-temples/' },
    gettingThere: {
      title: 'アクセス方法',
      items: [
        '1番札所（霊山寺）：徳島空港（TKS）、または大阪・岡山からJR特急で板東駅（寺まで徒歩15分）。',
        '松山エリア（43〜65番）：松山空港（MYJ）。51番石手寺と道後温泉の玄関口。',
        '高知エリア（24〜39番）：高知空港（KCZ）、または岡山からJR特急。',
        '香川エリア（66〜88番）：高松空港（TAK）、または岡山からJRマリンライナー。',
      ],
    },
    localTransport: {
      title: '現地交通',
      items: [
        'JR四国 + 琴電・伊予鉄の私鉄が多くの札所を短時間の徒歩圏内でカバー。',
        '四国遍路バスツアー：主要都市発の貸切バス（9〜12日）。大多数の遍路者が利用。',
        '遍路道（赤い「へんろ道」矢印）が歩き遍路の目印として寺間を案内。',
        'レンタサイクル：多数利用可能。自転車遍路は25〜30日で一周。',
      ],
    },
  },
  'zh-TW': {
    heading: '交通資訊與路線圖',
    officialMap: { label: '四國八十八所官方地圖（四國遍路協會）', url: 'https://88shikokuhenro.jp/88-temples/' },
    gettingThere: {
      title: '抵達方式',
      items: [
        '1 號靈山寺：德島機場（TKS），或從大阪・岡山搭 JR 特急到板東站（走到寺院約 15 分鐘）。',
        '松山地區（43–65 號）：松山機場（MYJ）。51 號石手寺與道後溫泉所在地。',
        '高知地區（24–39 號）：高知機場（KCZ），或從岡山搭 JR 特急。',
        '香川地區（66–88 號）：高松機場（TAK），或從岡山搭 JR Marine Liner。',
      ],
    },
    localTransport: {
      title: '當地交通',
      items: [
        'JR 四國加上琴電、伊予鐵等私鐵覆蓋多數寺院（都在短距步行範圍）。',
        '四國遍路巴士團：主要城市出發的包車巡禮（9–12 天）。多數遍路者選擇。',
        '遍路道（紅色「へんろ道」箭頭）指引徒步遍路者在寺間行走。',
        '租自行車：各地普及，自行車遍路 25–30 天完成。',
      ],
    },
  },
  'es': {
    heading: 'Cómo llegar y mapas de rutas',
    officialMap: { label: 'Mapa oficial de los 88 Templos de Shikoku', url: 'https://88shikokuhenro.jp/en/88-temples/' },
    gettingThere: {
      title: 'Cómo llegar',
      items: [
        'Templo 1 (Ryozen-ji): Vuela a Tokushima (TKS) o toma JR Limited Express desde Osaka/Okayama → estación de Bando (15 min a pie al templo).',
        'Zona Matsuyama (templos 43–65): Aeropuerto de Matsuyama (MYJ). Hogar del templo 51 Ishite-ji y Dogo Onsen.',
        'Zona Kochi (templos 24–39): Aeropuerto de Kochi (KCZ) o JR Limited Express desde Okayama.',
        'Zona Kagawa (templos 66–88): Aeropuerto Takamatsu (TAK) o JR Marine Liner desde Okayama.',
      ],
    },
    localTransport: {
      title: 'Transporte local',
      items: [
        'JR Shikoku y las líneas privadas Kotoden/Iyotetsu cubren la mayoría de templos a corta distancia a pie.',
        'Tours en autobús del Shikoku Henro: circuitos de 9–12 días desde las principales ciudades — usados por la mayoría de peregrinos.',
        'Marcadores del sendero Henro Michi (flechas rojas henro-san) guían a los peregrinos a pie entre templos.',
        'Alquiler de bicicleta: muy disponible; 25–30 días para completar el circuito.',
      ],
    },
  },
}

const saigoku: Record<Locale, AccessInfo> = {
  'en': {
    heading: 'Getting There & Route Maps',
    officialMap: { label: 'Official Saigoku 33 Kannon route map', url: 'https://www.saikoku33.gr.jp/en/' },
    gettingThere: {
      title: 'How to arrive',
      items: [
        'Temple 1 (Seiganto-ji) at Nachi: JR Kisei line to Kii-Katsuura, then Kumano Kotsu bus to Nachi.',
        'Kyoto-area temples (11, 16, 17, 18, 19): Reachable by Kyoto city bus or subway from Kyoto Station.',
        'Osaka-area temples (22, 23): Namba station + local train.',
        'Final Temple 33 (Kegon-ji, Gifu): JR Yoro line to Tarumi → taxi or local bus.',
      ],
    },
    localTransport: {
      title: 'Local transport',
      items: [
        'Most pilgrims travel by private car or chartered bus across the 33 temples scattered across 7 prefectures.',
        'Saigoku 33 Kansai Rail Pass: 3-day pass covers most temple access via JR West.',
        'Kyoto city bus is the best way to reach temples 11, 16–19.',
        'Temple 31 (Chomei-ji) on Lake Biwa: accessible by JR Biwako line + short walk.',
      ],
    },
  },
  'ja': {
    heading: 'アクセスとルート地図',
    officialMap: { label: '西国三十三所公式ルート地図', url: 'https://www.saikoku33.gr.jp/' },
    gettingThere: {
      title: 'アクセス方法',
      items: [
        '1番札所（青岸渡寺・那智）：JR紀勢線で紀伊勝浦駅 → 熊野交通バスで那智へ。',
        '京都エリア（11・16・17・18・19番）：京都駅から市バス・地下鉄で到達可能。',
        '大阪エリア（22・23番）：難波駅 + 普通電車。',
        '33番華厳寺（岐阜）：JR養老線で垂井駅 → タクシーまたは路線バス。',
      ],
    },
    localTransport: {
      title: '現地交通',
      items: [
        '多くの巡礼者は7府県に点在する33札所を自家用車または貸切バスで巡る。',
        '西国三十三所関西レイルパス：3日間券でJR西日本の大部分の札所アクセスをカバー。',
        '京都市バスが11番・16〜19番への最適ルート。',
        '琵琶湖沿いの31番長命寺：JR琵琶湖線で近くの駅 + 徒歩でアクセス。',
      ],
    },
  },
  'zh-TW': {
    heading: '交通資訊與路線圖',
    officialMap: { label: '西國三十三所官方路線圖', url: 'https://www.saikoku33.gr.jp/' },
    gettingThere: {
      title: '抵達方式',
      items: [
        '1 號青岸渡寺（那智）：JR 紀勢線到紀伊勝浦站 → 熊野交通巴士到那智。',
        '京都地區（11・16・17・18・19 號）：從京都車站搭市巴士或地下鐵即可抵達。',
        '大阪地區（22・23 號）：難波站 + 普通電車。',
        '33 號華嚴寺（岐阜）：JR 養老線到垂井站 → 計程車或路線巴士。',
      ],
    },
    localTransport: {
      title: '當地交通',
      items: [
        '多數朝聖者以自駕或包車方式走完散布於 7 個府縣的 33 所寺院。',
        '西國三十三所關西 Rail Pass：3 日券涵蓋大多數 JR 西日本寺院交通。',
        '京都市巴士是前往 11 號、16–19 號的最佳方式。',
        '琵琶湖畔 31 號長命寺：搭 JR 琵琶湖線到附近車站，徒步可達。',
      ],
    },
  },
  'es': {
    heading: 'Cómo llegar y mapas de rutas',
    officialMap: { label: 'Mapa oficial del Saigoku 33 Kannon', url: 'https://www.saikoku33.gr.jp/en/' },
    gettingThere: {
      title: 'Cómo llegar',
      items: [
        'Templo 1 (Seiganto-ji) en Nachi: línea JR Kisei a Kii-Katsuura, luego autobús Kumano Kotsu a Nachi.',
        'Templos en zona de Kioto (11, 16, 17, 18, 19): accesibles en autobús urbano o metro de Kioto.',
        'Templos en zona de Osaka (22, 23): estación de Namba + tren local.',
        'Templo 33 (Kegon-ji, Gifu): línea JR Yoro a Tarumi → taxi o autobús local.',
      ],
    },
    localTransport: {
      title: 'Transporte local',
      items: [
        'La mayoría de peregrinos viaja en coche privado o autobús chárter entre los 33 templos dispersos en 7 prefecturas.',
        'Saigoku 33 Kansai Rail Pass: pase de 3 días que cubre la mayoría del acceso a templos vía JR West.',
        'El autobús urbano de Kioto es la mejor manera de llegar a los templos 11, 16–19.',
        'Templo 31 (Chomei-ji) en el lago Biwa: accesible por la línea JR Biwako + breve caminata.',
      ],
    },
  },
}

const access: Record<RouteSystem, Record<Locale, AccessInfo>> = {
  camino,
  kumano,
  shikoku,
  saigoku,
}

export function getAccessInfo(system: string, locale: Locale): AccessInfo {
  const key = (system as RouteSystem) in access ? (system as RouteSystem) : 'camino'
  return access[key][locale] ?? access[key]['en']
}
