// Camino routes: sourced from Gronze.com (gronze.com)
// Kumano Nakahechi: sourced from Kumano Travel (kumano-travel.com)
// Other routes: sourced from app bundled data
// Prices and availability may change — always verify before your trip
export interface LodgingEntry {
  name: string | Record<string, string>
  town: string
  price: number | null
  currency?: string
  totalBeds: number | null
  isMunicipal: boolean
  website: string
}

export function getLodgingName(entry: LodgingEntry): string {
  if (typeof entry.name === 'string') return entry.name
  return entry.name.en ?? entry.name.ja ?? Object.values(entry.name)[0] ?? ''
}

export const lodgingByRoute: Record<string, LodgingEntry[]> = {
  "camino-coastal": [
    {
      "name": "Albergue Municipal de Peregrinos de Matosinhos",
      "town": "Matosinhos",
      "price": 10.0,
      "totalBeds": 30,
      "isMunicipal": true,
      "website": "https://www.cm-matosinhos.pt"
    },
    {
      "name": "Albergue de Peregrinos de Vila do Conde",
      "town": "Vila do Conde",
      "price": 10.0,
      "totalBeds": 36,
      "isMunicipal": true,
      "website": "https://www.cm-viladoconde.pt"
    },
    {
      "name": "Albergue de Peregrinos de Esposende",
      "town": "Esposende",
      "price": 8.0,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": "https://www.cm-esposende.pt"
    },
    {
      "name": "Albergue de Peregrinos São João da Cruz dos Caminhos",
      "town": "Viana do Castelo",
      "price": 15.0,
      "totalBeds": 52,
      "isMunicipal": false,
      "website": "https://alberguevianadorcastelo.com"
    },
    {
      "name": "Albergue Municipal de Peregrinos de Caminha",
      "town": "Caminha",
      "price": 10.0,
      "totalBeds": 27,
      "isMunicipal": true,
      "website": "https://www.cm-caminha.pt"
    },
    {
      "name": "Albergue de Peregrinos de Tui",
      "town": "Tui",
      "price": 8.0,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.tui.gal"
    },
    {
      "name": "Albergue Municipal de Redondela",
      "town": "Redondela",
      "price": 6.0,
      "totalBeds": 48,
      "isMunicipal": true,
      "website": "https://www.redondela.gal"
    },
    {
      "name": "Albergue Virxe Peregrina, Pontevedra",
      "town": "Pontevedra",
      "price": 8.0,
      "totalBeds": 112,
      "isMunicipal": true,
      "website": "https://www.pontevedra.gal"
    },
    {
      "name": "Albergue As Pozas Termais, Caldas de Reis",
      "town": "Caldas de Reis",
      "price": 12.0,
      "totalBeds": 36,
      "isMunicipal": false,
      "website": "https://aspozastermais.com"
    },
    {
      "name": "Albergue Municipal de Padrón",
      "town": "Padrón",
      "price": 6.0,
      "totalBeds": 44,
      "isMunicipal": true,
      "website": "https://www.padron.gal"
    },
    {
      "name": "Albergue de Peregrinos Seminario Menor, Santiago",
      "town": "Santiago de Compostela",
      "price": 12.0,
      "totalBeds": 177,
      "isMunicipal": false,
      "website": "https://www.alberguesantiagodecompostela.com"
    },
    {
      "name": "Albergue Municipal de Póvoa de Varzim",
      "town": "Póvoa de Varzim",
      "price": 10.0,
      "totalBeds": 28,
      "isMunicipal": true,
      "website": "https://www.cm-pvarzim.pt"
    }
  ],
  "camino-del-norte": [
    {
      "name": "Albergue de Peregrinos de Irún",
      "town": "Irún",
      "price": 10,
      "totalBeds": 26,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/irun"
    },
    {
      "name": "Albergue Ondarreta - San Sebastián",
      "town": "San Sebastián",
      "price": 14,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.gronze.com/camino-norte/albergues/donostia-san-sebastian"
    },
    {
      "name": "Albergue de Peregrinos de Zarautz",
      "town": "Zarautz",
      "price": 10,
      "totalBeds": 64,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/zarautz"
    },
    {
      "name": "Albergue de Peregrinos de Bilbao",
      "town": "Bilbao",
      "price": 12,
      "totalBeds": 80,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/bilbao"
    },
    {
      "name": "Albergue Caborredondo - Santander",
      "town": "Santander",
      "price": 12,
      "totalBeds": 32,
      "isMunicipal": false,
      "website": "https://www.gronze.com/camino-norte/albergues/santander"
    },
    {
      "name": "Albergue de Peregrinos de Gijón",
      "town": "Gijón",
      "price": 10,
      "totalBeds": 48,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/gijon"
    },
    {
      "name": "Albergue Municipal de Ribadeo",
      "town": "Ribadeo",
      "price": 8,
      "totalBeds": 36,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/ribadeo"
    },
    {
      "name": "Albergue de Peregrinos Outeiro - Santiago de Compostela",
      "town": "Santiago de Compostela",
      "price": 10,
      "totalBeds": 32,
      "isMunicipal": true,
      "website": "https://www.gronze.com/camino-norte/albergues/santiago-de-compostela"
    }
  ],
  "camino-fisterra": [
    {
      "name": "Albergue de Peregrinos de Santiago de Compostela (Seminario Menor)",
      "town": "Santiago de Compostela",
      "price": 12,
      "totalBeds": 177,
      "isMunicipal": true,
      "website": "https://www.alberguesantiago.com"
    },
    {
      "name": "Albergue Municipal de Negreira",
      "town": "Negreira",
      "price": 8,
      "totalBeds": 22,
      "isMunicipal": true,
      "website": "https://www.concellonegreira.gal"
    },
    {
      "name": "Albergue Casa Mingos (Negreira)",
      "town": "Negreira",
      "price": 12,
      "totalBeds": 18,
      "isMunicipal": false,
      "website": "https://www.casamingos.com"
    },
    {
      "name": "Albergue de Peregrinos de Santa Mariña",
      "town": "Santa Mariña",
      "price": 8,
      "totalBeds": 14,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue Hórreo de Olveiroa",
      "town": "Olveiroa",
      "price": 10,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.albergueolveiroa.com"
    },
    {
      "name": "Albergue As Pias (Olveiroa)",
      "town": "Olveiroa",
      "price": 9,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "Albergue Municipal de Cee",
      "town": "Cee",
      "price": 8,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": "https://www.concellodecee.es"
    },
    {
      "name": "Albergue Municipal de Fisterra",
      "town": "Fisterra",
      "price": 8,
      "totalBeds": 38,
      "isMunicipal": true,
      "website": "https://www.concellodefisterra.es"
    },
    {
      "name": "Albergue Mar de Fora (Fisterra)",
      "town": "Fisterra",
      "price": 14,
      "totalBeds": 22,
      "isMunicipal": false,
      "website": "https://www.alberguemardefora.com"
    },
    {
      "name": "Albergue O Camiño dos Faros (Fisterra)",
      "town": "Fisterra",
      "price": 13,
      "totalBeds": 16,
      "isMunicipal": false,
      "website": "https://www.caminodosfaros.com"
    },
    {
      "name": "Albergue Municipal de Muxía",
      "town": "Muxía",
      "price": 8,
      "totalBeds": 32,
      "isMunicipal": true,
      "website": "https://www.concellomuxia.com"
    },
    {
      "name": "Albergue Muxía Mare",
      "town": "Muxía",
      "price": 15,
      "totalBeds": 8,
      "isMunicipal": false,
      "website": "https://www.muxiamare.com"
    }
  ],
  "camino-ingles": [
    {
      "name": "Albergue de Peregrinos de Ferrol",
      "town": "Ferrol",
      "price": 8,
      "totalBeds": 30,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue Municipal de Pontedeume",
      "town": "Pontedeume",
      "price": 8,
      "totalBeds": 40,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue Municipal de Betanzos",
      "town": "Betanzos",
      "price": 8,
      "totalBeds": 36,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Bruma",
      "town": "Bruma",
      "price": 8,
      "totalBeds": 22,
      "isMunicipal": false,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Peregrinos de Santiago - Seminario Menor",
      "town": "Santiago de Compostela",
      "price": 12,
      "totalBeds": 177,
      "isMunicipal": false,
      "website": "https://www.alberguesantiago.com/"
    },
    {
      "name": "The Last Stamp Hostel - Santiago",
      "town": "Santiago de Compostela",
      "price": 18,
      "totalBeds": 28,
      "isMunicipal": false,
      "website": "https://www.thelaststamp.com/"
    }
  ],
  "camino-invierno": [
    {
      "name": "Albergue de Peregrinos de Ponferrada",
      "town": "Ponferrada",
      "price": 10,
      "totalBeds": 120,
      "isMunicipal": true,
      "website": "https://www.alberguescaminosantiago.com/albergue-ponferrada/"
    },
    {
      "name": "Albergue San Nicolás el Real - Ponferrada",
      "town": "Ponferrada",
      "price": 12,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.alberguescaminosantiago.com/"
    },
    {
      "name": "Albergue Municipal de Quiroga",
      "town": "Quiroga",
      "price": 12,
      "totalBeds": 93,
      "isMunicipal": true,
      "website": "https://www.alberguescaminosantiago.com/camino-de-invierno/"
    },
    {
      "name": "Albergue Santiago 15 - Monforte de Lemos",
      "town": "Monforte de Lemos",
      "price": 17,
      "totalBeds": 50,
      "isMunicipal": false,
      "website": "https://www.alberguescaminosantiago.com/camino-de-invierno/"
    },
    {
      "name": "Albergue Lemavo - Monforte de Lemos",
      "town": "Monforte de Lemos",
      "price": 18,
      "totalBeds": 14,
      "isMunicipal": false,
      "website": "https://www.alberguescaminosantiago.com/camino-de-invierno/"
    },
    {
      "name": "Albergue A Pousa do Asma - Chantada",
      "town": "Chantada",
      "price": 19,
      "totalBeds": 18,
      "isMunicipal": false,
      "website": "https://www.alberguescaminosantiago.com/camino-de-invierno/"
    },
    {
      "name": "Albergue Dpaso Hostel - Chantada",
      "town": "Chantada",
      "price": 19,
      "totalBeds": 28,
      "isMunicipal": false,
      "website": "https://www.alberguescaminosantiago.com/camino-de-invierno/"
    },
    {
      "name": "Albergue Municipal de O Barco de Valdeorras",
      "town": "O Barco de Valdeorras",
      "price": 10,
      "totalBeds": 36,
      "isMunicipal": true,
      "website": "https://www.elcaminoconcorreos.com/en/camino-de-invierno-the-winter-way/accommodations"
    },
    {
      "name": "Albergue de Peregrinos de Lalín",
      "town": "Lalín",
      "price": 10,
      "totalBeds": 40,
      "isMunicipal": true,
      "website": "https://www.elcaminoconcorreos.com/en/camino-de-invierno-the-winter-way/accommodations"
    },
    {
      "name": "Albergue de Peregrinos de Rodeiro",
      "town": "Rodeiro",
      "price": 8,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": "https://www.elcaminoconcorreos.com/en/camino-de-invierno-the-winter-way/accommodations"
    },
    {
      "name": "Parador de Monforte de Lemos",
      "town": "Monforte de Lemos",
      "price": 120,
      "totalBeds": 46,
      "isMunicipal": false,
      "website": "https://paradores.es/en/parador-de-monforte-de-lemos"
    },
    {
      "name": "Albergue de Peregrinos Outeiro",
      "town": "Santiago de Compostela",
      "price": 10,
      "totalBeds": 32,
      "isMunicipal": true,
      "website": "https://www.elcaminoconcorreos.com/en/camino-de-invierno-the-winter-way/accommodations"
    }
  ],
  "camino-le-puy": [
    {
      "name": "Gîte de la Cathédrale",
      "town": "Le Puy-en-Velay",
      "price": 18,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.gite-cathedrale-lepuy.fr"
    },
    {
      "name": "Gîte d'Étape Municipal de Monistrol-d'Allier",
      "town": "Monistrol-d'Allier",
      "price": 12,
      "totalBeds": 28,
      "isMunicipal": true,
      "website": "https://www.monistrol-allier.fr"
    },
    {
      "name": "Gîte Saint-Jacques de Saugues",
      "town": "Saugues",
      "price": 15,
      "totalBeds": 36,
      "isMunicipal": false,
      "website": "https://www.saugues.fr/pelerinage"
    },
    {
      "name": "Accueil Pèlerin Saint-Alban-sur-Limagnole",
      "town": "Saint-Alban-sur-Limagnole",
      "price": 14,
      "totalBeds": 24,
      "isMunicipal": false,
      "website": "https://www.saint-alban-limagnole.fr"
    },
    {
      "name": "Gîte d'Étape L'Oustal d'Aubrac",
      "town": "Aumont-Aubrac",
      "price": 16,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.aumont-aubrac.fr"
    },
    {
      "name": "Gîte Municipal de Nasbinals",
      "town": "Nasbinals",
      "price": 11,
      "totalBeds": 32,
      "isMunicipal": true,
      "website": "https://www.nasbinals.fr"
    },
    {
      "name": "Abbaye Sainte-Foy — Hébergement Pèlerin, Conques",
      "town": "Conques",
      "price": 20,
      "totalBeds": 50,
      "isMunicipal": false,
      "website": "https://www.conques.fr/hebergement"
    },
    {
      "name": "Gîte des Pèlerins de Figeac",
      "town": "Figeac",
      "price": 17,
      "totalBeds": 36,
      "isMunicipal": false,
      "website": "https://www.tourisme-figeac.com"
    },
    {
      "name": "Gîte d'Étape Municipal de Cahors",
      "town": "Cahors",
      "price": 13,
      "totalBeds": 44,
      "isMunicipal": true,
      "website": "https://www.cahors.fr/pelerins"
    },
    {
      "name": "Gîte L'Étape de Moissac",
      "town": "Moissac",
      "price": 16,
      "totalBeds": 38,
      "isMunicipal": false,
      "website": "https://www.moissac.fr/pelerins"
    },
    {
      "name": "Accueil Saint-Jacques de Lectoure",
      "town": "Lectoure",
      "price": 14,
      "totalBeds": 26,
      "isMunicipal": false,
      "website": "https://www.lectoure.fr/tourisme"
    },
    {
      "name": "Gîte Communal de Condom",
      "town": "Condom",
      "price": 15,
      "totalBeds": 34,
      "isMunicipal": true,
      "website": "https://www.condom.org"
    },
    {
      "name": "Gîte Le Relais d'Aire-sur-l'Adour",
      "town": "Aire-sur-l'Adour",
      "price": 16,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.aire-sur-adour.fr/pelerins"
    },
    {
      "name": "Gîte des Remparts de Navarrenx",
      "town": "Navarrenx",
      "price": 18,
      "totalBeds": 28,
      "isMunicipal": false,
      "website": "https://www.navarrenx.fr/pelerin"
    },
    {
      "name": "Accueil Pèlerin Saint-Jean-Pied-de-Port",
      "town": "Saint-Jean-Pied-de-Port",
      "price": 12,
      "totalBeds": 66,
      "isMunicipal": true,
      "website": "https://www.saintjeanpieddeport-paysbasque-tourisme.com"
    }
  ],
  "camino-mozarabe": [
    {
      "name": "Real Colegio Mayor de San Bartolomé y Santiago",
      "town": "Granada",
      "price": 15,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.colegiomayor.ugr.es"
    },
    {
      "name": "Albergue de Peregrinos de Moclín",
      "town": "Moclín",
      "price": 8,
      "totalBeds": 18,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue Municipal de Peregrinos de Alcalá la Real",
      "town": "Alcalá la Real",
      "price": 10,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue Municipal de Peregrinos de Alcaudete",
      "town": "Alcaudete",
      "price": 8,
      "totalBeds": 20,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue Turístico Municipal de Baena",
      "town": "Baena",
      "price": 10,
      "totalBeds": 30,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Casa del Peregrino de Espejo",
      "town": "Espejo",
      "price": 8,
      "totalBeds": 6,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue de Peregrinos El Mozárabe (Córdoba)",
      "town": "Córdoba",
      "price": 12,
      "totalBeds": 56,
      "isMunicipal": true,
      "website": "https://www.semtayr.es/en/albergue-municipal-de-peregrinos-el-mozarabe"
    },
    {
      "name": "Albergue de Peregrinos de Montoro",
      "town": "Montoro",
      "price": 10,
      "totalBeds": 20,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue Municipal de Peregrinos de Andújar",
      "town": "Andújar",
      "price": 8,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": ""
    },
    {
      "name": "Albergue de Peregrinos de Mérida",
      "town": "Mérida",
      "price": 12,
      "totalBeds": 36,
      "isMunicipal": true,
      "website": ""
    }
  ],
  "camino-portugues": [
    {
      "name": "Albergue de Peregrinos de Lisboa",
      "town": "Lisbon",
      "price": 15,
      "totalBeds": 60,
      "isMunicipal": false,
      "website": "https://www.caminoportugues.org/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Coimbra",
      "town": "Coimbra",
      "price": 12,
      "totalBeds": 40,
      "isMunicipal": true,
      "website": "https://www.caminoportugues.org/albergues"
    },
    {
      "name": "Albergue Municipal de Porto",
      "town": "Porto",
      "price": 14,
      "totalBeds": 80,
      "isMunicipal": true,
      "website": "https://www.alberguesportugal.com/porto"
    },
    {
      "name": "Albergue de Peregrinos de Barcelos",
      "town": "Barcelos",
      "price": 8,
      "totalBeds": 96,
      "isMunicipal": true,
      "website": "https://www.caminoportugues.org/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Ponte de Lima",
      "town": "Ponte de Lima",
      "price": 8,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.caminoportugues.org/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Tui",
      "town": "Tui",
      "price": 8,
      "totalBeds": 50,
      "isMunicipal": true,
      "website": "https://www.caminoportugues.org/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Pontevedra",
      "town": "Pontevedra",
      "price": 8,
      "totalBeds": 110,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Peregrinos de Padrón",
      "town": "Padrón",
      "price": 8,
      "totalBeds": 40,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Peregrinos de Santiago - Seminario Menor",
      "town": "Santiago de Compostela",
      "price": 12,
      "totalBeds": 177,
      "isMunicipal": false,
      "website": "https://www.alberguesantiago.com/"
    },
    {
      "name": "Albergue Último Sello - Santiago de Compostela",
      "town": "Santiago de Compostela",
      "price": 18,
      "totalBeds": 36,
      "isMunicipal": false,
      "website": "https://www.ultimosello.com/"
    }
  ],
  "camino-primitivo": [
    {
      "name": "Albergue de Peregrinos de Oviedo",
      "town": "Oviedo",
      "price": 8,
      "totalBeds": 80,
      "isMunicipal": true,
      "website": "https://www.caminodesantiago.gal/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Tineo",
      "town": "Tineo",
      "price": 6,
      "totalBeds": 34,
      "isMunicipal": true,
      "website": "https://www.caminodesantiago.gal/albergues"
    },
    {
      "name": "Albergue Municipal de A Fonsagrada",
      "town": "A Fonsagrada",
      "price": 6,
      "totalBeds": 30,
      "isMunicipal": true,
      "website": "https://www.caminodesantiago.gal/albergues"
    },
    {
      "name": "Albergue de Peregrinos de Lugo",
      "town": "Lugo",
      "price": 8,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Casa Rural O Castelo - Lugo",
      "town": "Lugo",
      "price": 20,
      "totalBeds": 12,
      "isMunicipal": false,
      "website": "https://www.caminodesantiago.gal/albergues"
    },
    {
      "name": "Albergue Municipal de Palas de Rei",
      "town": "Palas de Rei",
      "price": 8,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Peregrinos de Santiago - Monte do Gozo",
      "town": "Santiago de Compostela",
      "price": 10,
      "totalBeds": 400,
      "isMunicipal": true,
      "website": "https://www.montegozo.com/"
    }
  ],
  "camino-san-salvador": [
    {
      "name": "Albergue de Peregrinos de León",
      "town": "León",
      "price": 8,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.leon.es"
    },
    {
      "name": "Albergue El Peregrino (Cabanillas)",
      "town": "Cabanillas",
      "price": 10,
      "totalBeds": 16,
      "isMunicipal": false,
      "website": "https://www.caminodesansalvador.org"
    },
    {
      "name": "Albergue Municipal de La Robla",
      "town": "La Robla",
      "price": 8,
      "totalBeds": 28,
      "isMunicipal": true,
      "website": "https://www.larobla.es"
    },
    {
      "name": "Albergue de Peregrinos de Buiza",
      "town": "Buiza",
      "price": 8,
      "totalBeds": 18,
      "isMunicipal": true,
      "website": "https://www.caminodesansalvador.org"
    },
    {
      "name": "Albergue Municipal de Poladura de la Tercia",
      "town": "Poladura de la Tercia",
      "price": 6,
      "totalBeds": 14,
      "isMunicipal": true,
      "website": "https://www.caminodesansalvador.org"
    },
    {
      "name": "Albergue de Pajares",
      "town": "Pajares",
      "price": 8,
      "totalBeds": 20,
      "isMunicipal": true,
      "website": "https://www.caminodesansalvador.org"
    },
    {
      "name": "Albergue Municipal de Pola de Lena",
      "town": "Pola de Lena",
      "price": 8,
      "totalBeds": 32,
      "isMunicipal": true,
      "website": "https://www.aytolena.es/en/albergues-municipales"
    },
    {
      "name": "Albergue de Peregrinos de Mieres",
      "town": "Mieres",
      "price": 8,
      "totalBeds": 24,
      "isMunicipal": true,
      "website": "https://www.mieres.es"
    },
    {
      "name": "Albergue de Peregrinos de Oviedo",
      "town": "Oviedo",
      "price": 10,
      "totalBeds": 56,
      "isMunicipal": true,
      "website": "https://www.oviedo.es"
    },
    {
      "name": "Hotel Ruta del Salvador (Pola de Lena)",
      "town": "Pola de Lena",
      "price": 45,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": "https://www.booking.com"
    }
  ],
  "saigoku-33": [
    {
      "name": "那智山 青岸渡寺 宿坊",
      "town": "Nachikatsuura",
      "price": 9000,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.nachisan.or.jp"
    },
    {
      "name": "那智勝浦 ホテル浦島",
      "town": "Nachikatsuura",
      "price": 16000,
      "totalBeds": 500,
      "isMunicipal": false,
      "website": "https://www.hotelurashima.co.jp"
    },
    {
      "name": "長谷寺 宿坊 長谷路",
      "town": "Sakurai",
      "price": 10000,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.hasedera.or.jp"
    },
    {
      "name": "奈良 ゲストハウス もちいどの",
      "town": "Nara",
      "price": 3500,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": "https://www.guesthouse-nara.com"
    },
    {
      "name": "京都 清水寺近くの宿 旅籠屋",
      "town": "Kyoto",
      "price": 6500,
      "totalBeds": 50,
      "isMunicipal": false,
      "website": "https://www.hatagoya.co.jp"
    },
    {
      "name": "善峯寺 山荘 西山いこいの家",
      "town": "Kyoto",
      "price": 7500,
      "totalBeds": 25,
      "isMunicipal": true,
      "website": "https://www.nishiyama-ikoi.jp"
    },
    {
      "name": "中山寺 参拝宿坊",
      "town": "Takarazuka",
      "price": 8500,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": "https://www.nakayamadera.or.jp"
    },
    {
      "name": "姫路 グリーンホテル",
      "town": "Himeji",
      "price": 5800,
      "totalBeds": 120,
      "isMunicipal": false,
      "website": "https://www.himeji-greenhotel.co.jp"
    },
    {
      "name": "長命寺 湖畔荘（近江八幡）",
      "town": "Omihachiman",
      "price": 9500,
      "totalBeds": 35,
      "isMunicipal": false,
      "website": "https://www.ohmihachiman-kanko.jp"
    },
    {
      "name": "谷汲山 藤田屋旅館",
      "town": "Ibigawa",
      "price": 8000,
      "totalBeds": 18,
      "isMunicipal": false,
      "website": "https://www.tanigumi-fujitaya.jp"
    }
  ],
  "shikoku-henro": [
    {
      "name": "宿坊 霊山寺（第1番）",
      "town": "Naruto",
      "price": 7700,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.ryozenji.com/"
    },
    {
      "name": "善根宿 遍路の宿 なると",
      "town": "Naruto",
      "price": 0,
      "totalBeds": 6,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "民宿 徳増（焼山寺登山口）",
      "town": "Kamiyama",
      "price": 6600,
      "totalBeds": 15,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "宿坊 大日寺（第13番）",
      "town": "Tokushima",
      "price": 8800,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "民宿 室戸荘（室戸岬）",
      "town": "Muroto",
      "price": 7500,
      "totalBeds": 18,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "善根宿 土佐のへんろ小屋",
      "town": "Kochi",
      "price": 0,
      "totalBeds": 8,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "遍路宿 岩本寺前（第37番）民宿 まえだ",
      "town": "Shimanto",
      "price": 6500,
      "totalBeds": 12,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "民宿 足摺黒潮（足摺岬）",
      "town": "Tosashimizu",
      "price": 8000,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "宿坊 大寶寺（第44番）",
      "town": "Kuma",
      "price": 9000,
      "totalBeds": 25,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "道後温泉 松の湯（遍路宿）",
      "town": "Matsuyama",
      "price": 10000,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.dogo-matsunoya.com/"
    },
    {
      "name": "善根宿 雲辺寺麓（第66番周辺）",
      "town": "Mitoyo",
      "price": 0,
      "totalBeds": 6,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "宿坊 善通寺会館（第75番）",
      "town": "Zentsuji",
      "price": 8800,
      "totalBeds": 50,
      "isMunicipal": false,
      "website": "https://www.zentsuji.com/lodging/"
    },
    {
      "name": "遍路宿 さぬき 民宿 大窪の里（第88番付近）",
      "town": "Sanuki",
      "price": 7000,
      "totalBeds": 16,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "高知市 遍路宿 かつおの里（ゲストハウス）",
      "town": "Kochi",
      "price": 3500,
      "totalBeds": 24,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": "松山市 ゲストハウス へんろの宿 石手",
      "town": "Matsuyama",
      "price": 3000,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": ""
    }
  ],
  "via-de-la-plata": [
    {
      "name": "Albergue de Peregrinos de Sevilla",
      "town": "Seville",
      "price": 8,
      "totalBeds": 40,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Zafra",
      "town": "Zafra",
      "price": 8,
      "totalBeds": 30,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Mérida",
      "town": "Mérida",
      "price": 6,
      "totalBeds": 64,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Cáceres",
      "town": "Cáceres",
      "price": 6,
      "totalBeds": 60,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Salamanca",
      "town": "Salamanca",
      "price": 6,
      "totalBeds": 100,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Zamora",
      "town": "Zamora",
      "price": 6,
      "totalBeds": 54,
      "isMunicipal": true,
      "website": "https://www.viaplataalbergues.com/"
    },
    {
      "name": "Albergue de Peregrinos de Ourense",
      "town": "Ourense",
      "price": 8,
      "totalBeds": 52,
      "isMunicipal": true,
      "website": "https://www.xacobeo.gal/en/pilgrimage/pilgrim-hostels/"
    },
    {
      "name": "Albergue de Peregrinos de Santiago - Seminario Menor",
      "town": "Santiago de Compostela",
      "price": 12,
      "totalBeds": 177,
      "isMunicipal": false,
      "website": "https://www.alberguesantiago.com/"
    }
  ],
  "kumano-nakahechi": [
    {
      "name": "Koguchi Shizen-no-Ie",
      "town": "Koguchi",
      "price": 10500,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/koguchi-shizen-no-ie"
    },
    {
      "name": "Kiri-no-Sato Takahara Lodge",
      "town": "Takahara",
      "price": 26400,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/kiri-no-sato-takahara"
    },
    {
      "name": "Minshuku Chikatsuyu",
      "town": "Chikatsuyu",
      "price": 16300,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/minshuku-chikatsuyu"
    },
    {
      "name": "Minshuku Nakano",
      "town": "Chikatsuyu",
      "price": 5500,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/minshuku-nakano"
    },
    {
      "name": "Minshuku Momofuku",
      "town": "Koguchi",
      "price": 15800,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/minshuku-momofuku"
    },
    {
      "name": "Mitaki Sanso",
      "town": "Nachisan",
      "price": 22500,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/mitaki-sanso"
    },
    {
      "name": "Ryokan Adumaya",
      "town": "Yunomine Onsen",
      "price": 19900,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/ryokan-adumaya"
    },
    {
      "name": "Minshuku Yamane",
      "town": "Yunomine Onsen",
      "price": 13400,
      "currency": "JPY",
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.kumano-travel.com/en/accommodations/minshuku-yamane"
    }
  ],
  "camino-frances": [
    {
      "name": "Albergue de Peregrinos de Roncesvalles",
      "town": "Roncesvalles",
      "price": 15,
      "totalBeds": 183,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/roncesvalles-orreaga/zubiri"
    },
    {
      "name": "Albergue Municipal de Zubiri",
      "town": "Zubiri",
      "price": 16,
      "totalBeds": null,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/zubiri/pamplona-iruna"
    },
    {
      "name": "Albergue Jesús y María",
      "town": "Pamplona",
      "price": 12,
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.gronze.com/etapa/zubiri/pamplona-iruna"
    },
    {
      "name": "Albergue Casa Paderborn",
      "town": "Pamplona",
      "price": 10,
      "totalBeds": null,
      "isMunicipal": false,
      "website": "https://www.gronze.com/etapa/zubiri/pamplona-iruna"
    },
    {
      "name": "Albergue Casa del Cubo",
      "town": "Burgos",
      "price": 10,
      "totalBeds": null,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/burgos/hornillos-camino"
    },
    {
      "name": "Albergue de Peregrinos de Hornillos del Camino",
      "town": "Hornillos del Camino",
      "price": 13,
      "totalBeds": null,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/burgos/hornillos-camino"
    },
    {
      "name": "Albergue del Convento de las Carbajalas",
      "town": "León",
      "price": null,
      "totalBeds": null,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/mansilla-mulas/leon"
    },
    {
      "name": "Albergue Parroquial San Nicolás de Flüe",
      "town": "Ponferrada",
      "price": 10,
      "totalBeds": null,
      "isMunicipal": true,
      "website": "https://www.gronze.com/etapa/ponferrada/villafranca-bierzo"
    }
  ]
}
