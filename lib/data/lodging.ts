// AUTO-GENERATED from app assets/data/sections/*/lodging.json
export interface LodgingEntry {
  name: string | Record<string, string>
  town: string
  price: number | null
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
      "name": {
        "ja": "霧の郷たかはら",
        "en": "Kiri no Sato Takahara",
        "es": "Kiri no Sato Takahara",
        "zh_TW": "霧の郷たかはら",
        "ko": "霧の郷たかはら",
        "fr": "Kiri no Sato Takahara",
        "de": "Kiri no Sato Takahara",
        "pt": "Kiri no Sato Takahara",
        "it": "Kiri no Sato Takahara",
        "zh_CN": "霧の郷たかはら"
      },
      "town": "",
      "price": null,
      "totalBeds": 20,
      "isMunicipal": false,
      "website": "https://www.kirinosato.com"
    },
    {
      "name": {
        "ja": "民宿ちかつゆ",
        "en": "Minshuku Chikatsuyu",
        "es": "Minshuku Chikatsuyu",
        "zh_TW": "民宿ちかつゆ",
        "ko": "民宿ちかつゆ",
        "fr": "Minshuku Chikatsuyu",
        "de": "Minshuku Chikatsuyu",
        "pt": "Minshuku Chikatsuyu",
        "it": "Minshuku Chikatsuyu",
        "zh_CN": "民宿ちかつゆ"
      },
      "town": "",
      "price": null,
      "totalBeds": 15,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "民宿つるや",
        "en": "Minshuku Tsuruya",
        "es": "Minshuku Tsuruya",
        "zh_TW": "民宿つるや",
        "ko": "民宿つるや",
        "fr": "Minshuku Tsuruya",
        "de": "Minshuku Tsuruya",
        "pt": "Minshuku Tsuruya",
        "it": "Minshuku Tsuruya",
        "zh_CN": "民宿つるや"
      },
      "town": "",
      "price": null,
      "totalBeds": 10,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "民宿なかの",
        "en": "Minshuku Nakano",
        "es": "Minshuku Nakano",
        "zh_TW": "民宿なかの",
        "ko": "民宿なかの",
        "fr": "Minshuku Nakano",
        "de": "Minshuku Nakano",
        "pt": "Minshuku Nakano",
        "it": "Minshuku Nakano",
        "zh_CN": "民宿なかの"
      },
      "town": "",
      "price": null,
      "totalBeds": 8,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "野中の一方杉 民宿まつば",
        "en": "Minshuku Matsuba Nonaka",
        "es": "Minshuku Matsuba Nonaka",
        "zh_TW": "野中の一方杉 民宿まつば",
        "ko": "野中の一方杉 民宿まつば",
        "fr": "Minshuku Matsuba Nonaka",
        "de": "Minshuku Matsuba Nonaka",
        "pt": "Minshuku Matsuba Nonaka",
        "it": "Minshuku Matsuba Nonaka",
        "zh_CN": "野中の一方杉 民宿まつば"
      },
      "town": "",
      "price": null,
      "totalBeds": 8,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "民宿ささゆり",
        "en": "Minshuku Sasayuri",
        "es": "Minshuku Sasayuri",
        "zh_TW": "民宿ささゆり",
        "ko": "民宿ささゆり",
        "fr": "Minshuku Sasayuri",
        "de": "Minshuku Sasayuri",
        "pt": "Minshuku Sasayuri",
        "it": "Minshuku Sasayuri",
        "zh_CN": "民宿ささゆり"
      },
      "town": "",
      "price": null,
      "totalBeds": 10,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "熊野本宮 わたらせ温泉",
        "en": "Watarase Onsen Hotel Sasayuri",
        "es": "Watarase Onsen Hotel Sasayuri",
        "zh_TW": "熊野本宮 わたらせ温泉",
        "ko": "熊野本宮 わたらせ温泉",
        "fr": "Watarase Onsen Hotel Sasayuri",
        "de": "Watarase Onsen Hotel Sasayuri",
        "pt": "Watarase Onsen Hotel Sasayuri",
        "it": "Watarase Onsen Hotel Sasayuri",
        "zh_CN": "熊野本宫 わたらせ温泉"
      },
      "town": "",
      "price": null,
      "totalBeds": 60,
      "isMunicipal": false,
      "website": "https://www.watarase-onsen.jp"
    },
    {
      "name": {
        "ja": "湯の峰温泉 あづまや",
        "en": "Yunomine Onsen Azumaya",
        "es": "Yunomine Onsen Azumaya",
        "zh_TW": "湯の峰温泉 あづまや",
        "ko": "湯の峰温泉 あづまや",
        "fr": "Yunomine Onsen Azumaya",
        "de": "Yunomine Onsen Azumaya",
        "pt": "Yunomine Onsen Azumaya",
        "it": "Yunomine Onsen Azumaya",
        "zh_CN": "汤之峰温泉 あづまや"
      },
      "town": "",
      "price": null,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": "https://www.adumaya.co.jp"
    },
    {
      "name": {
        "ja": "川湯温泉 まつや",
        "en": "Kawayu Onsen Matsuya",
        "es": "Kawayu Onsen Matsuya",
        "zh_TW": "川湯温泉 まつや",
        "ko": "川湯温泉 まつや",
        "fr": "Kawayu Onsen Matsuya",
        "de": "Kawayu Onsen Matsuya",
        "pt": "Kawayu Onsen Matsuya",
        "it": "Kawayu Onsen Matsuya",
        "zh_CN": "川汤温泉 まつや"
      },
      "town": "",
      "price": null,
      "totalBeds": 25,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "川湯温泉 富士屋",
        "en": "Kawayu Onsen Fujiya",
        "es": "Kawayu Onsen Fujiya",
        "zh_TW": "川湯温泉 富士屋",
        "ko": "川湯温泉 富士屋",
        "fr": "Kawayu Onsen Fujiya",
        "de": "Kawayu Onsen Fujiya",
        "pt": "Kawayu Onsen Fujiya",
        "it": "Kawayu Onsen Fujiya",
        "zh_CN": "川汤温泉 富士屋"
      },
      "town": "",
      "price": null,
      "totalBeds": 40,
      "isMunicipal": false,
      "website": "https://www.fujiya.co.jp"
    },
    {
      "name": {
        "ja": "J-Hoppers 熊野湯峰",
        "en": "J-Hoppers Kumano Yunomine",
        "es": "J-Hoppers Kumano Yunomine",
        "zh_TW": "J-Hoppers 熊野湯峰",
        "ko": "J-Hoppers 熊野湯峰",
        "fr": "J-Hoppers Kumano Yunomine",
        "de": "J-Hoppers Kumano Yunomine",
        "pt": "J-Hoppers Kumano Yunomine",
        "it": "J-Hoppers Kumano Yunomine",
        "zh_CN": "J-Hoppers 熊野汤峰"
      },
      "town": "",
      "price": null,
      "totalBeds": 16,
      "isMunicipal": false,
      "website": "https://j-hoppers.com"
    },
    {
      "name": {
        "ja": "本宮 B&B cafe ほんぐう",
        "en": "B&B Cafe Hongu",
        "es": "B&B Cafe Hongu",
        "zh_TW": "本宮 B&B cafe ほんぐう",
        "ko": "本宮 B&B cafe ほんぐう",
        "fr": "B&B Cafe Hongu",
        "de": "B&B Cafe Hongu",
        "pt": "B&B Cafe Hongu",
        "it": "B&B Cafe Hongu",
        "zh_CN": "本宫 B&B cafe ほんぐう"
      },
      "town": "",
      "price": null,
      "totalBeds": 12,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "民宿 もんぜん",
        "en": "Minshuku Monzen",
        "es": "Minshuku Monzen",
        "zh_TW": "民宿 もんぜん",
        "ko": "民宿 もんぜん",
        "fr": "Minshuku Monzen",
        "de": "Minshuku Monzen",
        "pt": "Minshuku Monzen",
        "it": "Minshuku Monzen",
        "zh_CN": "民宿 もんぜん"
      },
      "town": "",
      "price": null,
      "totalBeds": 10,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "恵光院",
        "en": "Eko-in",
        "es": "Eko-in",
        "zh_TW": "恵光院",
        "ko": "恵光院",
        "fr": "Eko-in",
        "de": "Eko-in",
        "pt": "Eko-in",
        "it": "Eko-in",
        "zh_CN": "惠光院"
      },
      "town": "",
      "price": null,
      "totalBeds": 50,
      "isMunicipal": false,
      "website": "https://www.ekoin.jp"
    },
    {
      "name": {
        "ja": "福智院",
        "en": "Fukuchi-in",
        "es": "Fukuchi-in",
        "zh_TW": "福智院",
        "ko": "福智院",
        "fr": "Fukuchi-in",
        "de": "Fukuchi-in",
        "pt": "Fukuchi-in",
        "it": "Fukuchi-in",
        "zh_CN": "福智院"
      },
      "town": "",
      "price": null,
      "totalBeds": 60,
      "isMunicipal": false,
      "website": "https://www.fukuchiin.com"
    },
    {
      "name": {
        "ja": "野迫川村周辺 民宿",
        "en": "Nosegawa Village Area Minshuku",
        "es": "Minshuku de la zona de Nosegawa",
        "zh_TW": "野迫川村周辺 民宿",
        "ko": "野迫川村周辺 民宿",
        "fr": "Minshuku du village de Nosegawa",
        "de": "Minshuku im Gebiet Nosegawa",
        "pt": "Minshuku da vila de Nosegawa",
        "it": "Minshuku del villaggio di Nosegawa",
        "zh_CN": "野迫川村周边 民宿"
      },
      "town": "",
      "price": null,
      "totalBeds": 6,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "ホテル昴",
        "en": "Hotel Subaru",
        "es": "Hotel Subaru",
        "zh_TW": "ホテル昴",
        "ko": "ホテル昴",
        "fr": "Hotel Subaru",
        "de": "Hotel Subaru",
        "pt": "Hotel Subaru",
        "it": "Hotel Subaru",
        "zh_CN": "酒店昴"
      },
      "town": "",
      "price": null,
      "totalBeds": 80,
      "isMunicipal": false,
      "website": "https://www.hotel-subaru.jp"
    },
    {
      "name": {
        "ja": "民宿十津川",
        "en": "Minshuku Totsukawa",
        "es": "Minshuku Totsukawa",
        "zh_TW": "民宿十津川",
        "ko": "民宿十津川",
        "fr": "Minshuku Totsukawa",
        "de": "Minshuku Totsukawa",
        "pt": "Minshuku Totsukawa",
        "it": "Minshuku Totsukawa",
        "zh_CN": "民宿十津川"
      },
      "town": "",
      "price": null,
      "totalBeds": 10,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "ホテルシーモア",
        "en": "Hotel Seamore",
        "es": "Hotel Seamore",
        "zh_TW": "ホテルシーモア",
        "ko": "ホテルシーモア",
        "fr": "Hotel Seamore",
        "de": "Hotel Seamore",
        "pt": "Hotel Seamore",
        "it": "Hotel Seamore",
        "zh_CN": "酒店シーモア"
      },
      "town": "",
      "price": null,
      "totalBeds": 100,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "民宿かめや",
        "en": "Minshuku Kameya",
        "es": "Minshuku Kameya",
        "zh_TW": "民宿かめや",
        "ko": "民宿かめや",
        "fr": "Minshuku Kameya",
        "de": "Minshuku Kameya",
        "pt": "Minshuku Kameya",
        "it": "Minshuku Kameya",
        "zh_CN": "民宿かめや"
      },
      "town": "",
      "price": null,
      "totalBeds": 8,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "ホテル浦島",
        "en": "Hotel Urashima",
        "es": "Hotel Urashima",
        "zh_TW": "ホテル浦島",
        "ko": "ホテル浦島",
        "fr": "Hotel Urashima",
        "de": "Hotel Urashima",
        "pt": "Hotel Urashima",
        "it": "Hotel Urashima",
        "zh_CN": "酒店浦岛"
      },
      "town": "",
      "price": null,
      "totalBeds": 200,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "那智周辺の民宿",
        "en": "Minshuku near Nachi",
        "es": "Minshuku cerca de Nachi",
        "zh_TW": "那智周辺の民宿",
        "ko": "那智周辺の民宿",
        "fr": "Minshuku près de Nachi",
        "de": "Minshuku nahe Nachi",
        "pt": "Minshuku perto de Nachi",
        "it": "Minshuku vicino a Nachi",
        "zh_CN": "那智周边的民宿"
      },
      "town": "",
      "price": null,
      "totalBeds": 10,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "伊勢シティホテル",
        "en": "Ise City Hotel",
        "es": "Ise City Hotel",
        "zh_TW": "伊勢シティホテル",
        "ko": "伊勢シティホテル",
        "fr": "Ise City Hotel",
        "de": "Ise City Hotel",
        "pt": "Ise City Hotel",
        "it": "Ise City Hotel",
        "zh_CN": "伊势城市酒店"
      },
      "town": "",
      "price": null,
      "totalBeds": 80,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "ビジネスホテル尾鷲",
        "en": "Business Hotel Owase",
        "es": "Business Hotel Owase",
        "zh_TW": "ビジネスホテル尾鷲",
        "ko": "ビジネスホテル尾鷲",
        "fr": "Business Hotel Owase",
        "de": "Business Hotel Owase",
        "pt": "Business Hotel Owase",
        "it": "Business Hotel Owase",
        "zh_CN": "商务酒店尾鹫"
      },
      "town": "",
      "price": null,
      "totalBeds": 30,
      "isMunicipal": false,
      "website": ""
    },
    {
      "name": {
        "ja": "ホテルなみ",
        "en": "Hotel Nami",
        "es": "Hotel Nami",
        "zh_TW": "ホテルなみ",
        "ko": "ホテルなみ",
        "fr": "Hotel Nami",
        "de": "Hotel Nami",
        "pt": "Hotel Nami",
        "it": "Hotel Nami",
        "zh_CN": "酒店なみ"
      },
      "town": "",
      "price": null,
      "totalBeds": 25,
      "isMunicipal": false,
      "website": ""
    }
  ]
}
