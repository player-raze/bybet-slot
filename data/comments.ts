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
    level: 'K1',
    text: 'legit',
  },
  {
    id: 'msg_1',
    name: 'Dray',
    avatar: '🎮',
    avatarType: 'emoji',
    avatarBg: '#0f382c',
    level: 'K1',
    text: 'mag verify kayo sa customer support mas mabilis',
    reaction: '👍 🙏',
  },
  {
    id: 'msg_2',
    name: 'Ito',
    avatar: '👩🏻',
    avatarType: 'emoji',
    avatarBg: '#3b1d54',
    level: 'K2',
    text: 'lApit na maubos',
  },
  {
    id: 'msg_3',
    name: 'Nes*****',
    avatar: 'N',
    avatarType: 'text',
    avatarBg: '#056846',
    level: 'K1',
    text: 'Ang panget naman dito patalo lang',
  },
  {
    id: 'msg_4',
    name: 'ikawlang27',
    avatar: '🌄',
    avatarType: 'emoji',
    avatarBg: '#1f354d',
    level: 'K1',
    text: 'paldo na Ako dito',
  },
  {
    id: 'msg_5',
    name: 'jeo*****',
    avatar: 'J',
    avatarType: 'text',
    avatarBg: '#056846',
    level: 'K1',
    text: 'indi pomakawidraw legit po ba.?',
  },
  {
    id: 'msg_6',
    name: 'Kem*****',
    avatar: '🦄',
    avatarType: 'emoji',
    avatarBg: '#4a2559',
    level: 'K2',
    text: 'Guys may 747 ako. Baka matripan niyo',
  },
  {
    id: 'msg_7',
    name: 'Zel*****',
    avatar: '👤',
    avatarType: 'emoji',
    avatarBg: '#2a3530',
    level: 'K1',
    text: 'Ako d nka withdraw ayaw tanggapin ang national id ko laki na sana pera ko 14k',
  },
]
