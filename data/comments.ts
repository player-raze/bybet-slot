export interface ChatMessage {
  id?: string
  name: string
  avatar: string
  avatarType?: 'emoji' | 'text' | 'image'
  avatarBg?: string
  level: string
  vip?: number
  text: string
  reaction?: string
  timestamp?: string
}

export const SLOTS_COMMENTS: ChatMessage[] = [
  {
    id: 'msg_0',
    name: 'Player',
    avatar: '🎮',
    avatarType: 'emoji',
    avatarBg: '#0f382c',
    level: 'K0',
    vip: 0,
    text: 'legit',
  },
  {
    id: 'msg_1',
    name: 'Dray',
    avatar: '🎮',
    avatarType: 'emoji',
    avatarBg: '#0f382c',
    level: 'K1',
    vip: 1,
    text: 'mag verify kayo sa customer support mas mabilis',
    reaction: '👍 🙏',
  },
  {
    id: 'msg_2',
    name: 'Ito',
    avatar: '/images/avatars/ito.webp',
    avatarType: 'image',
    avatarBg: '#3b1d54',
    level: 'K2',
    vip: 2,
    text: 'cNu lApit na pumaldo?',
  },
  {
    id: 'msg_3',
    name: 'Nes*****',
    avatar: 'N',
    avatarType: 'text',
    avatarBg: '#036242',
    level: 'K1',
    vip: 1,
    text: 'paldo naraman lets gooo',
  },
  {
    id: 'msg_4',
    name: 'ikawlang27',
    avatar: '🌄',
    avatarType: 'emoji',
    avatarBg: '#1f354d',
    level: 'K1',
    vip: 1,
    text: 'paldo na Ako dito',
  },
  {
    id: 'msg_5',
    name: 'jeo*****',
    avatar: 'J',
    avatarType: 'text',
    avatarBg: '#036242',
    level: 'K0',
    vip: 0,
    text: 'cnu nakawidthraw na? legit po ba.?',
  },
  {
    id: 'msg_6',
    name: 'Kem*****',
    avatar: '🦄',
    avatarType: 'emoji',
    avatarBg: '#4a2559',
    level: 'K2',
    vip: 2,
    text: 'opo legit po. nakawidthraw na ako ng 10k sa bank account ko. pero mas mabilis po sa gcash',
  },
  {
    id: 'msg_7',
    name: 'Zel*****',
    avatar: '👤',
    avatarType: 'emoji',
    avatarBg: '#2a3530',
    level: 'K0',
    vip: 0,
    text: 'panu po magwidthdraw?',
  },
  {
    id: 'msg_8',
    name: 'lov*****',
    avatar: '🦄',
    avatarType: 'emoji',
    avatarBg: '#4a2559',
    level: 'K2',
    vip: 2,
    text: 'musta naman d2? cnu nanalo na?',
  },
  {
    id: 'msg_9',
    name: 'mar*****',
    avatar: 'M',
    avatarType: 'text',
    avatarBg: '#036242',
    level: 'K2',
    vip: 2,
    text: 'Guyss sasabihin ko sainyo na legit yan nung una diko den ma widrew yung panalo ko pumunta lang ako sa cs para mapaltan yung national ID ko tinanggap naman syaa kaso yung temporary nga lang kaya ako nag sasabe sainyo na legit yan ayoko nalang sabihin kung mag kano panalo ko HAHAHA',
  },
  {
    id: 'msg_10',
    name: 'mar*****',
    avatar: 'M',
    avatarType: 'text',
    avatarBg: '#036242',
    level: 'K2',
    vip: 2,
    text: 'Basta paldong paldo ako naka bili motor rider fi at iphone 16pro',
  },
]
