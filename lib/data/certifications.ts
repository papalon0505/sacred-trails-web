// AUTO-GENERATED from app assets/data/certifications.json
export interface CertificationData {
  id: string
  icon: string
  system: 'camino' | 'kumano' | 'shikoku' | 'saigoku' | 'achievement'
  name: Record<string, string>
  description: Record<string, string>
  stampsNote: Record<string, string>
  minDistanceKm: number | null
  whereToGet: Record<string, string>
  officialUrl: string | null
}

export const certifications: CertificationData[] = [
  {
    id: 'compostela_walk', icon: '📜', system: 'camino',
    name: { en: 'Compostela (Walking)', ja: 'コンポステーラ（徒歩）', 'zh-TW': '孔波斯特拉（步行）', es: 'Compostela (A pie)' },
    description: { en: 'Official certificate for walking at least 100km on any official Camino route. Requires 2 stamps per day on the last 100km.', ja: 'いずれかの公式カミーノルートで100km以上を徒歩で完歩した公式証明書。最後の100kmで1日2個以上のスタンプが必要。', 'zh-TW': '在任何一條官方朝聖之路步行至少100公里的官方證書。最後100公里每日需蓋至少2個章。', es: 'Certificado oficial por caminar al menos 100km en cualquier ruta oficial del Camino. Se requieren 2 sellos por día en los últimos 100km.' },
    stampsNote: { en: 'At least 2 stamps per day on the last 100km of your journey', ja: '最後の100kmで1日2個以上のスタンプが必要', 'zh-TW': '最後100公里每日至少2個章', es: 'Al menos 2 sellos por día en los últimos 100km del recorrido' },
    minDistanceKm: 100,
    whereToGet: { en: "Pilgrim's Office (Oficina del Peregrino), Santiago de Compostela", ja: '巡礼者事務所（オフィシーナ・デル・ペレグリーノ）、サンティアゴ・デ・コンポステーラ', 'zh-TW': '朝聖者辦公室，聖地牙哥-德孔波斯特拉', es: 'Oficina del Peregrino, Santiago de Compostela' },
    officialUrl: 'https://oficinadelperegrino.com/en/',
  },
  {
    id: 'compostela_cycle', icon: '🚴', system: 'camino',
    name: { en: 'Compostela (Cycling)', ja: 'コンポステーラ（自転車）', 'zh-TW': '孔波斯特拉（騎車）', es: 'Compostela (En bicicleta)' },
    description: { en: 'Official certificate for cycling at least 200km on any official Camino route. Requires 2 stamps per day on the last 100km.', ja: 'いずれかの公式カミーノルートで200km以上を自転車で完走した公式証明書。最後の100kmで1日2個以上のスタンプが必要。', 'zh-TW': '在任何一條官方朝聖之路騎車至少200公里的官方證書。最後100公里每日需蓋至少2個章。', es: 'Certificado oficial por recorrer al menos 200km en bicicleta en cualquier ruta oficial del Camino.' },
    stampsNote: { en: 'At least 2 stamps per day on the last 100km of your journey', ja: '最後の100kmで1日2個以上のスタンプが必要', 'zh-TW': '最後100公里每日至少2個章', es: 'Al menos 2 sellos por día en los últimos 100km del recorrido' },
    minDistanceKm: 200,
    whereToGet: { en: "Pilgrim's Office (Oficina del Peregrino), Santiago de Compostela", ja: '巡礼者事務所、サンティアゴ・デ・コンポステーラ', 'zh-TW': '朝聖者辦公室，聖地牙哥-德孔波斯特拉', es: 'Oficina del Peregrino, Santiago de Compostela' },
    officialUrl: 'https://oficinadelperegrino.com/en/',
  },
  {
    id: 'distance_certificate', icon: '📋', system: 'camino',
    name: { en: 'Distance Certificate', ja: '距離証明書', 'zh-TW': '距離證書', es: 'Certificado de Distancia' },
    description: { en: 'Official document showing the exact distance walked on the Camino (costs 3 EUR).', ja: 'カミーノで歩いた正確な距離を示す公式文書（3ユーロ）。', 'zh-TW': '顯示朝聖之路上所走確切距離的官方文件（3歐元）。', es: 'Documento oficial que muestra la distancia exacta recorrida en el Camino (cuesta 3 EUR).' },
    stampsNote: {},
    minDistanceKm: 100,
    whereToGet: { en: "Pilgrim's Office (Oficina del Peregrino), Santiago de Compostela", ja: '巡礼者事務所、サンティアゴ・デ・コンポステーラ', 'zh-TW': '朝聖者辦公室，聖地牙哥-德孔波斯特拉', es: 'Oficina del Peregrino, Santiago de Compostela' },
    officialUrl: 'https://oficinadelperegrino.com/en/',
  },
  {
    id: 'fisterra_muxia', icon: '🌊', system: 'camino',
    name: { en: 'Fisterrana / Muxíana', ja: 'フィステラーナ / ムシアーナ', 'zh-TW': '菲斯特拉納 / 穆希亞納', es: 'Fisterrana / Muxíana' },
    description: { en: 'Certificate for continuing ~90km to Finisterre (End of the Earth) or Muxía after Santiago.', ja: 'サンティアゴからフィニステレ（地の果て）またはムシアまで約90km継続した証明書。', 'zh-TW': '從聖地牙哥繼續約90公里前往菲尼斯特雷（天涯海角）或穆希亞的證書。', es: 'Certificado por continuar ~90km hasta Finisterre o Muxía después de Santiago.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Finisterre or Muxía municipal offices', ja: 'フィニステレまたはムシアの市役所', 'zh-TW': '菲尼斯特雷或穆希亞市政辦公室', es: 'Oficinas municipales de Finisterre o Muxía' },
    officialUrl: 'https://oficinadelperegrino.com/en/',
  },
  {
    id: 'kumano_option1', icon: '⛩️', system: 'kumano',
    name: { en: 'Kumano Certificate (1) Takijiri → Hongu', ja: '熊野古道踏破証明書（①）滝尻→本宮', 'zh-TW': '熊野古道完走證書（①）瀧尻→本宮', es: 'Certificado Kumano (1) Takijiri → Hongu' },
    description: { en: 'Full Nakahechi trail: Takijiri-oji to Kumano Hongu Taisha (38km).', ja: '中辺路全踏破：滝尻王子から熊野本宮大社（38km）。', 'zh-TW': '中邊路全程：瀧尻王子到熊野本宮大社（38公里）。', es: 'Sendero Nakahechi completo: Takijiri-oji a Kumano Hongu Taisha (38km).' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Kumano Hongu Heritage Center or Tanabe Tourist Information Center', ja: '熊野本宮ヘリテージセンター又は田辺市観光センター', 'zh-TW': '熊野本宮遺產中心或田邊市觀光案内所', es: 'Centro de Patrimonio Kumano Hongu o Centro de Información Turística de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'kumano_option2', icon: '⛩️', system: 'kumano',
    name: { en: 'Kumano Certificate (2) Nachi ↔ Hongu', ja: '熊野古道踏破証明書（②）那智↔本宮', 'zh-TW': '熊野古道完走證書（②）那智↔本宮', es: 'Certificado Kumano (2) Nachi ↔ Hongu' },
    description: { en: 'Walk between Nachi Taisha and Hongu Taisha (30km).', ja: '那智大社と本宮大社間を歩く（30km）。', 'zh-TW': '那智大社與本宮大社之間步行（30公里）。', es: 'Caminar entre Nachi Taisha y Hongu Taisha (30km).' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Kumano Hongu Heritage Center or Tanabe Tourist Information Center', ja: '熊野本宮ヘリテージセンター又は田辺市観光センター', 'zh-TW': '熊野本宮遺產中心或田邊市觀光案内所', es: 'Centro de Patrimonio Kumano Hongu o Centro de Información Turística de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'kumano_option3', icon: '⛩️', system: 'kumano',
    name: { en: 'Kumano Certificate (3) Hosshinmon → Hongu', ja: '熊野古道踏破証明書（③）発心門→本宮', 'zh-TW': '熊野古道完走證書（③）發心門→本宮', es: 'Certificado Kumano (3) Hosshinmon → Hongu' },
    description: { en: 'Easiest option: Hosshinmon-oji to Hongu (7km) + visit all 3 Grand Shrines.', ja: '最も簡単：発心門王子から本宮（7km）＋熊野三山参拝。', 'zh-TW': '最簡單選項：發心門王子到本宮（7公里）+ 參拜熊野三山。', es: 'Opción más fácil: Hosshinmon-oji a Hongu (7km) + visitar los 3 Grandes Santuarios.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Kumano Hongu Heritage Center or Tanabe Tourist Information Center', ja: '熊野本宮ヘリテージセンター又は田辺市観光センター', 'zh-TW': '熊野本宮遺產中心或田邊市觀光案内所', es: 'Centro de Patrimonio Kumano Hongu o Centro de Información Turística de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'kumano_option4', icon: '⛰️', system: 'kumano',
    name: { en: 'Kumano Certificate (4) Kohechi', ja: '熊野古道踏破証明書（④）小辺路', 'zh-TW': '熊野古道完走證書（④）小邊路', es: 'Certificado Kumano (4) Kohechi' },
    description: { en: 'Hardest option: Koyasan to Hongu via Kohechi mountain route (65km).', ja: '最難関：高野山から本宮へ小辺路の山岳ルート（65km）。', 'zh-TW': '最難選項：高野山經小邊路山岳路線到本宮（65公里）。', es: 'Opción más difícil: Koyasan a Hongu por ruta de montaña Kohechi (65km).' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Kumano Hongu Heritage Center or Tanabe Tourist Information Center', ja: '熊野本宮ヘリテージセンター又は田辺市観光センター', 'zh-TW': '熊野本宮遺產中心或田邊市觀光案内所', es: 'Centro de Patrimonio Kumano Hongu o Centro de Información Turística de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'kumano_option5', icon: '🌊', system: 'kumano',
    name: { en: 'Kumano Certificate (5) Ohechi', ja: '熊野古道踏破証明書（⑤）大辺路', 'zh-TW': '熊野古道完走證書（⑤）大邊路', es: 'Certificado Kumano (5) Ohechi' },
    description: { en: 'Walk the Ohechi coastal route and visit all 3 Grand Shrines.', ja: '大辺路を歩き、熊野三山を参拝。', 'zh-TW': '走大邊路並參拜熊野三山。', es: 'Caminar la ruta costera Ohechi y visitar los 3 Grandes Santuarios.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Kumano Hongu Heritage Center or Tanabe Tourist Information Center', ja: '熊野本宮ヘリテージセンター又は田辺市観光センター', 'zh-TW': '熊野本宮遺產中心或田邊市觀光案内所', es: 'Centro de Patrimonio Kumano Hongu o Centro de Información Turística de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'nakahechi_complete', icon: '🏅', system: 'kumano',
    name: { en: 'Nakahechi Complete Certificate', ja: '中辺路踏破証明書', 'zh-TW': '中邊路完走證書', es: 'Certificado Nakahechi Completo' },
    description: { en: 'Collect all 41 stamps along the Nakahechi trail. Issued by Wakayama Prefecture Governor.', ja: '中辺路沿い全41スタンプを集める。和歌山県知事発行。', 'zh-TW': '收集中邊路沿線全部41個印章。由和歌山縣知事頒發。', es: 'Recoger los 41 sellos del sendero Nakahechi. Emitido por el Gobernador de Wakayama.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Tanabe Tourist Information Center (submit completed stamp book)', ja: '田辺市観光センター（完成したスタンプ帳を提出）', 'zh-TW': '田邊市觀光案内所（提交完成的印章簿）', es: 'Centro de Información Turística de Tanabe (entregar libro de sellos completo)' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'super_complete', icon: '🌟', system: 'kumano',
    name: { en: 'Super Complete Certificate', ja: 'スーパー踏破証明書', 'zh-TW': '超級完走證書', es: 'Certificado Super Completo' },
    description: { en: 'Complete all 4 Wakayama stamp books (78 stamps total). The ultimate Kumano Kodo achievement.', ja: '和歌山県の4冊全スタンプ帳を完成（全78スタンプ）。熊野古道の究極の達成。', 'zh-TW': '完成和歌山縣全部4本印章簿（共78個印章）。熊野古道的終極成就。', es: 'Completar los 4 libros de sellos de Wakayama (78 sellos en total). El logro definitivo del Kumano Kodo.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Tanabe Tourist Information Center (submit all 4 completed stamp books)', ja: '田辺市観光センター（4冊全てのスタンプ帳を提出）', 'zh-TW': '田邊市觀光案内所（提交全部4本完成的印章簿）', es: 'Centro de Información Turística de Tanabe (entregar los 4 libros completos)' },
    officialUrl: 'https://www.tb-kumano.jp/en/kumano-kodo/stamps-and-credentials/',
  },
  {
    id: 'dual_pilgrim', icon: '🌏', system: 'achievement',
    name: { en: 'Dual Pilgrim', ja: '二つの道の巡礼者', 'zh-TW': '雙朝聖者', es: 'Doble Peregrino' },
    description: { en: 'The ultimate achievement: completed both World Heritage pilgrimage routes — Camino de Santiago and Kumano Kodo.', ja: '究極の達成：世界遺産の二つの巡礼路（サンティアゴ巡礼路と熊野古道）を両方完歩。', 'zh-TW': '終極成就：完成兩條世界遺產朝聖路線——聖雅各之路和熊野古道。', es: 'El logro máximo: completar ambas rutas de peregrinación Patrimonio Mundial — Camino de Santiago y Kumano Kodo.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Tanabe City Kumano Tourism Bureau (Kumano Hongu Heritage Center)', ja: '田辺市熊野ツーリズムビューロー（熊野本宮ヘリテージセンター）', 'zh-TW': '田邊市熊野觀光局（熊野本宮遺產中心）', es: 'Oficina de Turismo Kumano de la ciudad de Tanabe' },
    officialUrl: 'https://www.tb-kumano.jp/kumano-kodo/dual-pilgrim/',
  },
  {
    id: 'shikoku_henro_complete', icon: '🏮', system: 'shikoku',
    name: { en: 'Shikoku Henro Complete (O-Henro)', ja: '四国遍路結願', 'zh-TW': '四國遍路圓滿', es: 'Shikoku Henro Completo (O-Henro)' },
    description: { en: "Complete all 88 temples of the Shikoku Pilgrimage following the path of Buddhist monk Kōbō Daishi (Kūkai). ~1,200km around Shikoku island.", ja: '弘法大師（空海）の足跡を辿る四国八十八ヶ所霊場を全て巡礼。四国島を周回する約1,200km。', 'zh-TW': '走完四國遍路八十八所靈場，追隨弘法大師（空海）的足跡。環繞四國島約1,200公里。', es: 'Completar los 88 templos del Peregrinaje de Shikoku siguiendo el camino de Kōbō Daishi. ~1.200km alrededor de la isla de Shikoku.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Ōkubo-ji Temple No. 88 (Sanuki, Kagawa) — present your completed nōkyōchō for the kanman seal', ja: '第八十八番大窪寺（香川県さぬき市）で結願印を受ける（納経帳持参）', 'zh-TW': '第88番大窪寺（香川縣讚岐市），出示完成的納經帳，領取圓滿印', es: 'Templo Ōkubo-ji No. 88 (Sanuki, Kagawa) — presentar el nōkyōchō completo para el sello kanman' },
    officialUrl: 'https://88shikokuhenro.jp/',
  },
  {
    id: 'saigoku33_complete', icon: '🌸', system: 'saigoku',
    name: { en: 'Saigoku 33 Pilgrimage Complete', ja: '西国三十三所巡礼結願', 'zh-TW': '西國三十三所巡禮圓滿', es: 'Peregrinación Saigoku 33 Completa' },
    description: { en: 'Complete all 33 Kannon temple halls of the Saigoku Kannon Pilgrimage, the oldest Buddhist pilgrimage in Japan.', ja: '西国三十三所観音霊場を全て巡礼。日本最古の仏教巡礼。', 'zh-TW': '完成西國三十三所觀音靈場全部33所，日本最古老的佛教巡禮。', es: 'Completar los 33 templos Kannon de la Peregrinación Kannon de Saigoku, la peregrinación budista más antigua de Japón.' },
    stampsNote: {},
    minDistanceKm: null,
    whereToGet: { en: 'Nachi Taisha (temple 1) or Huganji Temple (temple 33) — present your completed nōkyōchō', ja: '那智大社（第一番）または華厳寺（第三十三番）で満願印を受ける（納経帳持参）', 'zh-TW': '那智大社（第一番）或華嚴寺（第三十三番），出示完成的納經帳', es: 'Nachi Taisha (primer templo) o templo Huganji (último) — presentar el nōkyōchō completo' },
    officialUrl: 'https://www.saikoku33.gr.jp/',
  },
]

export const certificationsBySystem = {
  camino: certifications.filter(c => c.system === 'camino'),
  kumano: certifications.filter(c => c.system === 'kumano'),
  shikoku: certifications.filter(c => c.system === 'shikoku'),
  saigoku: certifications.filter(c => c.system === 'saigoku'),
  achievement: certifications.filter(c => c.system === 'achievement'),
}
