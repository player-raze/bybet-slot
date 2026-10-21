export interface LiveCasinoTable {
  id: string
  title: string
  image: string
  players: number
  category: string
  href?: string
  stats?: {
    shoe: number
    banker: number
    player: number
    tie: number
  }
  wins?: any
}

export interface LiveCasinoCategory {
  key: string
  label: string
}

export const LIVE_CASINO_CATEGORIES: LiveCasinoCategory[] = [
  { key: 'game-show', label: 'Game Show' },
  { key: 'baccarat', label: 'Baccarat' },
  { key: 'dragon-tiger', label: 'Dragon Tiger' },
  { key: 'roulette', label: 'Roulette' },
  { key: 'sicbo', label: 'Sicbo' },
  { key: 'fan-tan', label: 'Fan Tan' },
  { key: 'blackjack', label: 'Blackjack' },
  { key: 'poker', label: 'Poker' },
]

export const GAME_SHOW: LiveCasinoTable[] = [
  {
    id: 'crazy-time',
    title: 'Crazy Time',
    image: '/images/casino/card1.jpg',
    players: 2400,
    category: 'game-show',
  },
  {
    id: 'monopoly-live',
    title: 'Monopoly Live',
    image: '/images/casino/card1.jpg',
    players: 1100,
    category: 'game-show',
  }
]

export const BACCARAT: LiveCasinoTable[] = [
  {
    "id": "thai-speed-baccarat-c",
    "title": "Thai Speed Baccarat C",
    "image": "/images/casino/baccarat/thaim3_bs_med_M.jpg",
    "players": 27,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 30,
      "banker": 12,
      "player": 17,
      "tie": 1
    }
  },
  {
    "id": "pd-speed-baccarat-6",
    "title": "PD Speed Baccarat 6",
    "image": "/images/casino/baccarat/perceb6_bs_med_M.jpg",
    "players": 29,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 31,
      "banker": 17,
      "player": 10,
      "tie": 4
    }
  },
  {
    "id": "bonsai-speed-baccarat-b",
    "title": "Bonsai Speed Baccarat B",
    "image": "/images/casino/baccarat/bonca2_bs_med_M.jpg",
    "players": 39,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ]
    ],
    "stats": {
      "shoe": 22,
      "banker": 11,
      "player": 11,
      "tie": 0
    }
  },
  {
    "id": "salon-prive-baccarat-e",
    "title": "Salon Privé Baccarat E",
    "image": "/images/casino/baccarat/spr4_bs_med_M.jpg",
    "players": 0,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ]
    ],
    "stats": {
      "shoe": 20,
      "banker": 9,
      "player": 8,
      "tie": 3
    }
  },
  {
    "id": "speed-baccarat-2",
    "title": "Speed Baccarat 2",
    "image": "/images/casino/baccarat/genmad2_bs_med_M.jpg",
    "players": 15,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        }
      ]
    ],
    "stats": {
      "shoe": 22,
      "banker": 8,
      "player": 10,
      "tie": 4
    }
  },
  {
    "id": "salon-prive-baccarat-g",
    "title": "Salon Privé Baccarat G",
    "image": "/images/casino/baccarat/spr9_bs_med_M.jpg",
    "players": 1,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 25,
      "banker": 9,
      "player": 13,
      "tie": 3
    }
  },
  {
    "id": "speed-baccarat-b",
    "title": "Speed Baccarat B",
    "image": "/images/casino/baccarat/bac6_bs_med_M.jpg",
    "players": 642,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        },
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ]
    ],
    "stats": {
      "shoe": 29,
      "banker": 17,
      "player": 11,
      "tie": 1
    }
  },
  {
    "id": "pd-speed-baccarat-1",
    "title": "PD Speed Baccarat 1",
    "image": "/images/casino/baccarat/perceb1_bs_med_M.jpg",
    "players": 232,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 24,
      "banker": 16,
      "player": 8,
      "tie": 0
    }
  },
  {
    "id": "salon-prive-baccarat-f",
    "title": "Salon Privé Baccarat F",
    "image": "/images/casino/baccarat/spr8_bs_med_M.jpg",
    "players": 0,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 34,
      "banker": 11,
      "player": 20,
      "tie": 3
    }
  },
  {
    "id": "pd-speed-baccarat-3",
    "title": "PD Speed Baccarat 3",
    "image": "/images/casino/baccarat/perceb3_bs_med_M.jpg",
    "players": 82,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 25,
      "banker": 12,
      "player": 13,
      "tie": 0
    }
  },
  {
    "id": "salon-prive-baccarat-c",
    "title": "Salon Privé Baccarat C",
    "image": "/images/casino/baccarat/spr7_bs_med_M.jpg",
    "players": 0,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 31,
      "banker": 15,
      "player": 15,
      "tie": 1
    }
  },
  {
    "id": "perya-speed-baccarat-12",
    "title": "Perya Speed Baccarat 12",
    "image": "/images/casino/baccarat/perceb12_bs_med_M.jpg",
    "players": 39,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 23,
      "banker": 11,
      "player": 10,
      "tie": 2
    }
  },
  {
    "id": "speed-baccarat-r",
    "title": "Speed Baccarat R",
    "image": "/images/casino/baccarat/genbaca2_bs_med_M.jpg",
    "players": 60,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "cornerMark": "blue",
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 31,
      "banker": 17,
      "player": 9,
      "tie": 5
    }
  },
  {
    "id": "perya-speed-baccarat-13",
    "title": "Perya Speed Baccarat 13",
    "image": "/images/casino/baccarat/perceb13_bs_med_M.jpg",
    "players": 30,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 19,
      "banker": 8,
      "player": 8,
      "tie": 3
    }
  },
  {
    "id": "no-commission-baccarat",
    "title": "No Commission Baccarat",
    "image": "/images/casino/baccarat/ncr1_bs_med_M.jpg",
    "players": 930,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 31,
      "banker": 10,
      "player": 16,
      "tie": 5
    }
  },
  {
    "id": "pd-speed-baccarat-7",
    "title": "PD Speed Baccarat 7",
    "image": "/images/casino/baccarat/perceb7_bs_med_M.jpg",
    "players": 28,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 34,
      "banker": 15,
      "player": 15,
      "tie": 4
    }
  },
  {
    "id": "speed-baccarat-q",
    "title": "Speed Baccarat Q",
    "image": "/images/casino/baccarat/bact22_bs_med_M.jpg",
    "players": 42,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 28,
      "banker": 9,
      "player": 18,
      "tie": 1
    }
  },
  {
    "id": "perya-speed-baccarat-16",
    "title": "Perya Speed Baccarat 16",
    "image": "/images/casino/baccarat/perceb16_bs_med_M.jpg",
    "players": 29,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 25,
      "banker": 8,
      "player": 15,
      "tie": 2
    }
  },
  {
    "id": "speed-baccarat-z",
    "title": "Speed Baccarat Z",
    "image": "/images/casino/baccarat/genmad4_bs_med_M.jpg",
    "players": 11,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 27,
      "banker": 12,
      "player": 11,
      "tie": 4
    }
  },
  {
    "id": "salon-prive-baccarat-m",
    "title": "Salon Privé Baccarat M",
    "image": "/images/casino/baccarat/spr15_bs_med_M.jpg",
    "players": 3,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 20,
      "banker": 9,
      "player": 11,
      "tie": 0
    }
  },
  {
    "id": "super-speed-baccarat",
    "title": "Super Speed Baccarat",
    "image": "/images/casino/baccarat/supr1_bs_med_M.jpg",
    "players": 300,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 24,
      "banker": 12,
      "player": 9,
      "tie": 3
    }
  },
  {
    "id": "control-squeeze-baccarat",
    "title": "Control Squeeze Baccarat",
    "image": "/images/casino/baccarat/bac4_bs_med_M.jpg",
    "players": 148,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ]
    ],
    "stats": {
      "shoe": 30,
      "banker": 17,
      "player": 8,
      "tie": 5
    }
  },
  {
    "id": "salon-prive-baccarat-h",
    "title": "Salon Privé Baccarat H",
    "image": "/images/casino/baccarat/spr10_bs_med_M.jpg",
    "players": 0,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        }
      ]
    ],
    "stats": {
      "shoe": 24,
      "banker": 12,
      "player": 8,
      "tie": 4
    }
  },
  {
    "id": "xxxtreme-lightning-baccarat",
    "title": "XXXtreme Lightning Baccarat",
    "image": "/images/casino/baccarat/xlb1_bi_med_M.jpg",
    "players": 341,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        }
      ]
    ],
    "stats": {
      "shoe": 27,
      "banker": 10,
      "player": 14,
      "tie": 3
    }
  },
  {
    "id": "baccarat-b",
    "title": "Baccarat B",
    "image": "/images/casino/baccarat/bac3_bs_med_M.jpg",
    "players": 50,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 33,
      "banker": 14,
      "player": 15,
      "tie": 4
    }
  },
  {
    "id": "lotus-speed-baccarat-c",
    "title": "Lotus Speed Baccarat C",
    "image": "/images/casino/baccarat/lotca3_bs_med_M.jpg",
    "players": 18,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        }
      ]
    ],
    "stats": {
      "shoe": 33,
      "banker": 12,
      "player": 16,
      "tie": 5
    }
  },
  {
    "id": "salon-prive-baccarat-l",
    "title": "Salon Privé Baccarat L",
    "image": "/images/casino/baccarat/spr14_bs_med_M.jpg",
    "players": 1,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 30,
      "banker": 12,
      "player": 17,
      "tie": 1
    }
  },
  {
    "id": "perya-speed-baccarat-9",
    "title": "Perya Speed Baccarat 9",
    "image": "/images/casino/baccarat/perceb9_bs_med_M.jpg",
    "players": 123,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 22,
      "banker": 13,
      "player": 7,
      "tie": 2
    }
  },
  {
    "id": "peek-baccarat",
    "title": "Peek Baccarat",
    "image": "/images/casino/baccarat/pkbacr1_bs_med_M.jpg",
    "players": 18,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 30,
      "banker": 19,
      "player": 7,
      "tie": 4
    }
  },
  {
    "id": "speed-baccarat-x",
    "title": "Speed Baccarat X",
    "image": "/images/casino/baccarat/bac14_bs_med_M.jpg",
    "players": 116,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "red",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 28,
      "banker": 17,
      "player": 8,
      "tie": 3
    }
  },
  {
    "id": "always-8-baccarat",
    "title": "Always 8 Baccarat",
    "image": "/images/casino/baccarat/abck1_bs_med_M.jpg",
    "players": 80,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "tie": true
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 22,
      "banker": 7,
      "player": 12,
      "tie": 3
    }
  },
  {
    "id": "perya-speed-baccarat-17",
    "title": "Perya Speed Baccarat 17",
    "image": "/images/casino/baccarat/perceb17_bs_med_M.jpg",
    "players": 51,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ]
    ],
    "stats": {
      "shoe": 24,
      "banker": 12,
      "player": 10,
      "tie": 2
    }
  },
  {
    "id": "speed-baccarat-a",
    "title": "Speed Baccarat A",
    "image": "/images/casino/baccarat/bac5_bs_med_M.jpg",
    "players": 2667,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "tie": true
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        }
      ],
      [
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 22,
      "banker": 8,
      "player": 12,
      "tie": 2
    }
  },
  {
    "id": "super-speed-baccarat-a",
    "title": "Super Speed Baccarat A",
    "image": "/images/casino/baccarat/supgent1_bs_med_M.jpg",
    "players": 29,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "blue"
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "red",
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true,
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B"
        }
      ]
    ],
    "stats": {
      "shoe": 32,
      "banker": 19,
      "player": 10,
      "tie": 3
    }
  },
  {
    "id": "pd-speed-baccarat-4",
    "title": "PD Speed Baccarat 4",
    "image": "/images/casino/baccarat/perceb4_bs_med_M.jpg",
    "players": 22,
    "category": "baccarat",
    "wins": [
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "cornerMark": "blue"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "tie": true
        }
      ],
      [
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P",
          "yellowCenter": true
        },
        {
          "result": "P",
          "cornerMark": "red",
          "yellowCenter": true
        }
      ],
      [
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B",
          "cornerMark": "red"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        },
        {
          "result": "P"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B"
        },
        {
          "result": "B",
          "tie": true
        },
        {
          "result": "B",
          "yellowCenter": true
        },
        {
          "result": "B"
        },
        {
          "result": "B"
        }
      ],
      [
        {
          "result": "B"
        },
        {
          "result": "B",
          "cornerMark": "blue",
          "yellowCenter": true,
          "tie": true
        }
      ],
      [
        {
          "result": "P",
          "cornerMark": "red"
        },
        {
          "result": "P"
        }
      ]
    ],
    "stats": {
      "shoe": 37,
      "banker": 17,
      "player": 16,
      "tie": 4
    }
  }
]

export const DRAGON_TIGER: LiveCasinoTable[] = [
  {
    id: 'dragon-tiger-1',
    title: 'Dragon Tiger 1',
    image: '/images/casino/card1.jpg',
    players: 15,
    category: 'dragon-tiger',
    wins: BACCARAT[0].wins,
    stats: { shoe: 30, banker: 10, player: 10, tie: 5 },
  },
  {
    id: 'dragon-tiger-2',
    title: 'Dragon Tiger 2',
    image: '/images/casino/card1.jpg',
    players: 12,
    category: 'dragon-tiger',
    wins: BACCARAT[1].wins,
    stats: { shoe: 20, banker: 5, player: 10, tie: 2 },
  }
]

export const ROULETTE: LiveCasinoTable[] = [
  {
    id: 'speed-roulette',
    title: 'Speed Roulette',
    image: '/images/casino/card1.jpg',
    players: 93,
    category: 'roulette',
    wins: [
      ['R', 7], ['R', 19], ['B', 20], ['B', 31], ['G', 0], ['R', 19], ['B', 20], ['B', 20],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  }
]

export const SICBO: LiveCasinoTable[] = [
  {
    id: 'emperor-sic-bo',
    title: 'Emperor Sic Bo A',
    image: '/images/casino/card1.jpg',
    players: 52,
    category: 'sicbo',
    wins: [
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-sic-bo',
    title: 'Lightning Sic Bo',
    image: '/images/casino/card1.jpg',
    players: 110,
    category: 'sicbo',
    wins: [
      [[4,4,4], 12, ['G', 'T'], ['B', 'E']],
      [[1,2,3], 6, ['R', 'S'], ['S', 'E']],
      [[3,3,5], 11, ['G', 'T'], ['B', 'O']],
      [[2,5,6], 13, ['R', 'S'], ['B', 'O']],
      [[1,1,4], 6, ['G', 'T'], ['S', 'E']],
      [[6,3,2], 11, ['R', 'S'], ['B', 'O']],
      [[5,4,1], 10, ['G', 'T'], ['S', 'E']],
      [[2,2,5], 9, ['R', 'S'], ['S', 'O']],
      [[6,5,4], 15, ['G', 'T'], ['B', 'O']],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  }
]

export const FANTAN: LiveCasinoTable[] = [
  {
    id: 'fan-tan',
    title: 'Fan Tan',
    image: '/images/casino/fantan/fantan.webp',
    players: 590,
    category: 'fan-tan',
    wins: [1, 1, 1, 2, 4, 3, 4, 2, 1, 2],
  }
]

export const BLACKJACK: LiveCasinoTable[] = [
  {
    id: 'blackjack-vip-9',
    title: 'Blackjack VIP 9',
    image: '/images/casino/card1.jpg',
    players: 6,
    category: 'blackjack',
    wins: [0, 1, 1, 0, 1, 1, 1],
  },
  {
    id: 'speed-blackjack-2',
    title: 'Speed Blackjack 2',
    image: '/images/casino/card1.jpg',
    players: 8,
    category: 'blackjack',
    wins: [1, 0, 0, 1, 1, 0, 1],
  }
]

export const POKER: LiveCasinoTable[] = [
  {
    id: 'poker-1',
    title: 'Live Poker 1',
    image: '/images/casino/card1.jpg',
    players: 5,
    category: 'poker',
  },
  {
    id: 'poker-2',
    title: 'Live Poker 2',
    image: '/images/casino/card1.jpg',
    players: 3,
    category: 'poker',
  }
]

export const LIVE_CASINO_TABLES: LiveCasinoTable[] = [
  ...GAME_SHOW,
  ...BACCARAT,
  ...DRAGON_TIGER,
  ...ROULETTE,
  ...SICBO,
  ...FANTAN,
  ...BLACKJACK,
  ...POKER,
]
