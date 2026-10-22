export interface FeaturedPromo {
  id: string
  slug: string
  title: string
  rate?: string
  subtitle?: string
  badgeText?: string
  category: string
  bannerImage: string
  endDate: string
  countdownText?: string
  paymentMethods?: string[]
  showSaveBadge?: boolean
  imagePosition?: string
}

export interface PromoCategory {
  key: string
  label: string
}

export interface PromotionItem {
  id: string
  slug: string
  title: string
  description: string
  category: string
  endDate?: string
  thumbnailType?: 'deposit' | 'spins' | 'rebate' | 'loss' | 'chest' | 'angpao' | 'sports' | 'basketball' | 'streak' | 'soccer' | 'live-casino' | 'referral' | 'profile' | 'vip' | 'giveaway' | 'camera'
  accentColor?: string
  badge?: string
  thumbnailImage?: string
}

export interface PromoSection {
  id: string
  title: string
  category: string
  items: PromotionItem[]
}

export interface BonusQualification {
  label: string
  value: string
}

export interface BonusRequirement {
  text: string
  completed?: boolean
}

export interface BonusTableRow {
  [key: string]: string | number
}

export interface BonusTable {
  headerTitle?: string
  subHeaderTitle?: string
  columns: { key: string; label: string; icon?: string }[]
  rows: BonusTableRow[]
  footnote?: string
}

export interface BonusDetail {
  id: string
  slug: string
  title: string
  subtitle: string
  period: string
  bannerImage: string
  thumbnailImage?: string
  iconType?: string
  accentColor?: string
  showRequirements?: boolean
  requirements?: {
    items: BonusRequirement[]
    viewProgressUrl?: string
  }
  qualifications: BonusQualification[]
  eventContent: {
    badge?: string
    description: string
    methodCard?: {
      title: string
      content: string
    }
    tables?: BonusTable[]
    bullets?: string[]
  }
  promotionTerms?: string[] | string
  rules: string[]
  withdrawalTerms?: string
  hasJoinButton?: boolean
}

export const PROMOTION_PLACEHOLDER_IMAGES = {
  banner: '/images/promotions/bonus-placeholder-banner.webp',
  thumbnail: '/images/promotions/bonus-placeholder-thumbnail.webp',
} as const

export const PROMO_CATEGORIES: PromoCategory[] = [
  { key: 'all', label: 'All' },
  { key: 'most-popular', label: 'Most Popular' },
  { key: 'deposit', label: 'Deposit' },
  { key: 'sports', label: 'Sports' },
  { key: 'live-casino', label: 'Live Casino' },
  { key: 'slots', label: 'Slots' },
  { key: 'others', label: 'Others' },
]

// Target dates ~70 days into the future
const getFutureDate = (daysAhead: number = 70): string => {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  return d.toISOString()
}

export const FEATURED_PROMOTIONS: FeaturedPromo[] = [
  {
    id: 'bybet-vip-center',
    slug: 'bybet-vip-center',
    title: 'Bybet VIP Center',
    subtitle: 'Permanent',
    category: 'others',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    endDate: getFutureDate(71),
    countdownText: 'Permanent',
    imagePosition: 'left center',
  },
  {
    id: 'bybet-giveaways-galore',
    slug: 'bybet-giveaways-galore',
    title: 'Bybet lang sakalam giveaways galore!',
    category: 'others',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    endDate: getFutureDate(71),
    countdownText: '2 Month 9 Day',
    imagePosition: '38% center',
  },
  {
    id: 'spot-it-snap-it-win-it',
    slug: 'spot-it-snap-it-win-it',
    title: 'Spot It. Snap It. Win It.',
    category: 'others',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    endDate: getFutureDate(71),
    countdownText: '2 Month 9 Day',
    showSaveBadge: true,
    imagePosition: '68% center',
  },
  {
    id: 'champions-streak-fever',
    slug: 'champions-streak-fever',
    title: 'Champions Streak Fever',
    category: 'sports',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    endDate: getFutureDate(71),
    countdownText: '2 Month 10 Day',
    imagePosition: 'right center',
  },
]

export const PROMOTION_SECTIONS: PromoSection[] = [
  {
    id: 'most-popular',
    title: 'Most Popular',
    category: 'most-popular',
    items: [
      {
        id: 'mp-your-deposit',
        slug: 'your-deposit-your-reward',
        title: 'Your Deposit. Your Reward.',
        description: 'Unlock bonus with first deposit of the everyday.',
        category: 'deposit',
        thumbnailType: 'deposit',
        accentColor: '#10b981',
        endDate: getFutureDate(71),
      },
      {
        id: 'mp-spins-bring-spins',
        slug: 'spins-bring-spins',
        title: 'Spins Bring Spins',
        description: '100 Free Spins Every Day!',
        category: 'slots',
        thumbnailType: 'spins',
        accentColor: '#f59e0b',
        endDate: getFutureDate(65),
      },
      {
        id: 'mp-unlimited-rebate',
        slug: 'unlimited-rebate',
        title: '1.5% UNLIMITED REBATE',
        description: 'DAILY SLOT REBATE - ALL MEMBERS',
        category: 'slots',
        thumbnailType: 'rebate',
        accentColor: '#10b981',
        endDate: getFutureDate(90),
      },
      {
        id: 'mp-slot-loss-rebate',
        slug: 'slot-loss-rebate',
        title: 'Slot Loss Rebate',
        description: 'Bonus up to ₱60,000',
        category: 'slots',
        thumbnailType: 'loss',
        accentColor: '#3b82f6',
        endDate: getFutureDate(71),
      },
      {
        id: 'mp-weekly-treasure-chest',
        slug: 'weekly-treasure-chest',
        title: 'Weekly Treasure Chest: Receive a Mystery Treasure Chest according to the Valid Bet of points!',
        description: 'Achievement Reward: Mystery Treasure Chest x4/Week',
        category: 'others',
        thumbnailType: 'chest',
        accentColor: '#fbbf24',
        endDate: getFutureDate(60),
      },
      {
        id: 'mp-umuulan-ng-angpao',
        slug: 'umuulan-ng-angpao',
        title: 'Umuulan ng Angpao',
        description: 'Angpao falling — piliin, abot, kuha!',
        category: 'others',
        thumbnailType: 'angpao',
        accentColor: '#ef4444',
        endDate: getFutureDate(45),
      },
    ],
  },
  {
    id: 'deposit',
    title: 'Deposit',
    category: 'deposit',
    items: [
      {
        id: 'dep-your-deposit',
        slug: 'your-deposit-your-reward',
        title: 'Your Deposit. Your Reward.',
        description: 'Unlock bonus with first deposit of the everyday.',
        category: 'deposit',
        thumbnailType: 'deposit',
        accentColor: '#10b981',
        endDate: getFutureDate(71),
      },
    ],
  },
  {
    id: 'sports',
    title: 'Sports',
    category: 'sports',
    items: [
      {
        id: 'sports-vip-rebate',
        slug: 'vip-sports-rebate',
        title: 'VIP Sports Rebate',
        description: 'Your Reward to End the Day',
        category: 'sports',
        thumbnailType: 'sports',
        accentColor: '#10b981',
        endDate: getFutureDate(71),
      },
      {
        id: 'sports-weekly-treasure',
        slug: 'weekly-treasure-chest',
        title: 'Weekly Treasure Chest: Receive a Mystery Treasure Chest according to the Valid Bet of points!',
        description: 'Achievement Reward: Mystery Treasure Chest x4/Week',
        category: 'sports',
        thumbnailType: 'chest',
        accentColor: '#fbbf24',
        endDate: getFutureDate(60),
      },
      {
        id: 'sports-champions-streak',
        slug: 'champions-streak-fever',
        title: 'Champions Streak Fever',
        description: 'More wins, More streaks, More rewards!',
        category: 'sports',
        thumbnailType: 'streak',
        accentColor: '#f97316',
        endDate: getFutureDate(50),
      },
      {
        id: 'sports-nba-boost',
        slug: 'nba-back-to-back-boost',
        title: 'NBA Back-to-Back Boost',
        description: 'Back-to-back NBA action means more chances to win rewards.',
        category: 'sports',
        thumbnailType: 'basketball',
        accentColor: '#3b82f6',
        endDate: getFutureDate(80),
      },
      {
        id: 'sports-hat-trick',
        slug: 'hat-trick-safety-net',
        title: 'Hat-trick Safety Net',
        description: 'Lose your last ball catch a hat-trick? Get cashback with ByBet!',
        category: 'sports',
        thumbnailType: 'soccer',
        accentColor: '#10b981',
        endDate: getFutureDate(55),
      },
      {
        id: 'sports-european-glory',
        slug: 'road-to-european-glory',
        title: 'Road to European Glory',
        description: 'Bet across Europe\'s top leagues and unlock bigger rewards',
        category: 'sports',
        thumbnailType: 'soccer',
        accentColor: '#6366f1',
        endDate: getFutureDate(60),
      },
    ],
  },
  {
    id: 'live-casino',
    title: 'Live Casino',
    category: 'live-casino',
    items: [
      {
        id: 'lc-vip-rebate',
        slug: 'vip-live-casino-rebate',
        title: 'VIP Live Casino Rebate',
        description: 'Your Reward to End the Day',
        category: 'live-casino',
        thumbnailType: 'live-casino',
        accentColor: '#eab308',
        endDate: getFutureDate(71),
      },
      {
        id: 'lc-lucky-8',
        slug: 'lucky-8-streak',
        title: 'Lucky 8 Streak',
        description: 'Earn exciting bonuses when you reach an 8-win streak on Live Casino games!',
        category: 'live-casino',
        thumbnailType: 'streak',
        accentColor: '#f59e0b',
        endDate: getFutureDate(40),
      },
    ],
  },
  {
    id: 'slots',
    title: 'Slots',
    category: 'slots',
    items: [
      {
        id: 'slots-spins-bring-spins',
        slug: 'spins-bring-spins',
        title: 'Spins Bring Spins',
        description: '100 Free Spins Every Day!',
        category: 'slots',
        thumbnailType: 'spins',
        accentColor: '#f59e0b',
        endDate: getFutureDate(65),
      },
      {
        id: 'slots-unlimited-rebate',
        slug: 'unlimited-rebate',
        title: '1.5% UNLIMITED REBATE',
        description: 'DAILY SLOT REBATE - ALL MEMBERS',
        category: 'slots',
        thumbnailType: 'rebate',
        accentColor: '#10b981',
        endDate: getFutureDate(90),
      },
      {
        id: 'slots-loss-rebate',
        slug: 'slot-loss-rebate',
        title: 'Slot Loss Rebate',
        description: 'Bonus up to ₱60,000',
        category: 'slots',
        thumbnailType: 'loss',
        accentColor: '#3b82f6',
        endDate: getFutureDate(71),
      },
      {
        id: 'slots-lucky-rankings',
        slug: 'lucky-rankings',
        title: 'Lucky Rankings – Let\'s Meet on Payday!',
        description: 'Climb the rankings and win big on payday!',
        category: 'slots',
        thumbnailType: 'chest',
        accentColor: '#ec4899',
        endDate: getFutureDate(71),
      },
    ],
  },
  {
    id: 'others',
    title: 'Others',
    category: 'others',
    items: [
      {
        id: 'oth-your-deposit',
        slug: 'your-deposit-your-reward',
        title: 'Your Deposit. Your Reward.',
        description: 'Unlock bonus with first deposit of the everyday.',
        category: 'others',
        thumbnailType: 'deposit',
        accentColor: '#10b981',
        endDate: getFutureDate(71),
      },
      {
        id: 'oth-complete-info',
        slug: 'complete-account-information',
        title: 'Complete account information to get ₱20 Reward!',
        description: 'After meeting the T&C requirements, simply click [Apply Now] to receive your 20 bonus reward automatically.',
        category: 'others',
        thumbnailType: 'profile',
        accentColor: '#eab308',
        endDate: getFutureDate(85),
      },
      {
        id: 'oth-umuulan-ng-angpao',
        slug: 'umuulan-ng-angpao',
        title: 'Umuulan ng Angpao',
        description: 'Angpao falling — piliin, abot, kuha!',
        category: 'others',
        thumbnailType: 'angpao',
        accentColor: '#ef4444',
        endDate: getFutureDate(45),
      },
      {
        id: 'oth-referral',
        slug: 'referral-bonus',
        title: 'Referral Bonus',
        description: 'Refer na may bonus pa!',
        category: 'others',
        thumbnailType: 'referral',
        accentColor: '#14b8a6',
        endDate: getFutureDate(100),
      },
      {
        id: 'oth-vip-center',
        slug: 'bybet-vip-center',
        title: 'Bybet VIP Center',
        description: 'Exclusive Rewards Start Here',
        category: 'others',
        thumbnailType: 'vip',
        accentColor: '#a855f7',
        endDate: getFutureDate(120),
      },
      {
        id: 'oth-giveaways-galore',
        slug: 'bybet-giveaways-galore',
        title: 'Bybet lang sakalam giveaways galore!',
        description: 'Follow the established official community channels of Bybet',
        category: 'others',
        thumbnailType: 'giveaway',
        accentColor: '#06b6d4',
        endDate: getFutureDate(30),
      },
      {
        id: 'oth-spot-snap-win',
        slug: 'spot-it-snap-it-win-it',
        title: 'Spot it. Snap it. Win it.',
        description: 'Get up to 200 Bonus when you post a selfie with any Bybet placement',
        category: 'others',
        thumbnailType: 'camera',
        accentColor: '#10b981',
        endDate: getFutureDate(60),
      },
    ],
  },
]

// Detailed Inner Pages Data matching the 3 provided screenshots
export const BONUS_DETAILS: Record<string, BonusDetail> = {
  'unlimited-rebate': {
    id: 'unlimited-rebate',
    slug: 'unlimited-rebate',
    title: '1.5% UNLIMITED REBATE',
    subtitle: 'DAILY SLOT REBATE • ALL MEMBERS',
    period: '2026-07-08 12:00:00 ~ 2026-12-31 23:59:59 (GMT+08:00)',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    thumbnailImage: PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    iconType: 'rebate',
    accentColor: '#10b981',
    showRequirements: false,
    qualifications: [
      { label: 'Registration Platform', value: 'PC, Mobile, App Sport' },
    ],
    eventContent: {
      description: 'Play slots and get a 1.5% daily rebate, no matter your VIP level! Rebates are based on your settled valid bets from the previous day and are credited automatically. No need to claim!',
      tables: [
        {
          headerTitle: '🎰 Slot Rebate',
          columns: [
            { key: 'vipLevel', label: 'VIP Level', icon: '👑' },
            { key: 'dailyRebate', label: 'Daily Rebate' },
          ],
          rows: [
            { vipLevel: 'VIP 0 - 10', dailyRebate: '1.5%' },
          ],
          footnote: '*Rebates are subject to a 1x turnover requirement.',
        },
      ],
    },
    promotionTerms: [
      '1. Bind your phone number',
      '2. Bind your email',
      '3. Complete your profile information',
      '4. Same name (name and surname) is not applicable',
      '5. Same IP is not applicable',
    ],
    rules: [
      'Open to KYC-verified members only.',
      'Slot rebates can be used on all games.',
      'Slot rebates must meet a 1x turnover requirement before withdrawal.',
      'BYBET reserves the right to modify, suspend, or cancel this promotion at any time.',
      'BYBET General Terms and Conditions apply.',
    ],
    hasJoinButton: false,
  },

  'your-deposit-your-reward': {
    id: 'your-deposit-your-reward',
    slug: 'your-deposit-your-reward',
    title: 'Your Deposit. Your Reward.',
    subtitle: 'Unlock bonus with first deposit of the everyday.',
    period: '2026-10-20 12:00:00 ~ 2026-10-26 11:59:59 (GMT+08:00)',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    thumbnailImage: PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    iconType: 'deposit',
    accentColor: '#10b981',
    showRequirements: false,
    qualifications: [
      { label: 'Registration Platform', value: 'PC, Mobile, App Sport' },
    ],
    eventContent: {
      badge: 'Total Deposits',
      description: 'Members making any deposits and meeting the promotional requirements will receive special rewards. (Once a Day)',
      methodCard: {
        title: 'Deposit Method for Promotion Participation',
        content: 'E-Wallet Transfer, Gcash, Maya, ShopeePay',
      },
      tables: [
        {
          columns: [
            { key: 'threshold', label: 'Deposit Threshold' },
            { key: 'rewardMethod', label: 'Reward Method' },
            { key: 'quota', label: 'Quota' },
          ],
          rows: [
            { threshold: '100 ~ 299', rewardMethod: 'Bonus', quota: '10' },
            { threshold: '300 ~ 499', rewardMethod: 'Bonus', quota: '30' },
            { threshold: '500 ~ 799', rewardMethod: 'Bonus', quota: '75' },
            { threshold: '800 ~ 999', rewardMethod: 'Bonus', quota: '120' },
            { threshold: '1000 ~ 1199', rewardMethod: 'Bonus', quota: '160' },
            { threshold: '1200 ~ 1499', rewardMethod: 'Bonus', quota: '200' },
            { threshold: '1500 ~ 1999', rewardMethod: 'Bonus', quota: '280' },
            { threshold: '2000 ~ 4999', rewardMethod: 'Bonus', quota: '300' },
            { threshold: '5000 ~ 9999', rewardMethod: 'Bonus', quota: '500' },
            { threshold: 'Above 10000', rewardMethod: 'Bonus', quota: '800' },
          ],
        },
      ],
    },
    rules: [
      'Participating members must complete KYC verification.',
      'Bonus are subject to a 1x turnover requirement before withdrawal.',
      'BYBET\'s Terms and Conditions apply.',
    ],
    withdrawalTerms: 'The winnings obtained through this event must be 1 times the bonus denomination before withdrawal can be made.',
    hasJoinButton: true,
  },

  'spins-bring-spins': {
    id: 'spins-bring-spins',
    slug: 'spins-bring-spins',
    title: 'Spins Bring Spins',
    subtitle: '100 Free Spins Every Day!',
    period: '2026-10-18 12:00:00 ~ 2026-10-26 11:59:59 (GMT+08:00)',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    thumbnailImage: PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    iconType: 'spins',
    accentColor: '#f59e0b',
    showRequirements: true,
    requirements: {
      items: [
        { text: 'Daily total spins 500', completed: false },
        { text: 'Daily total spin amount PHP1,000', completed: false },
      ],
      viewProgressUrl: '#progress',
    },
    qualifications: [
      { label: 'Registration Platform', value: 'PC, Mobile, App Sport' },
      { label: 'Total Deposits', value: 'Above 100' },
    ],
    eventContent: {
      badge: 'Reward 1 time daily',
      description: 'Claim your rewards once you meet with the event requirement.',
      tables: [
        {
          headerTitle: 'Terms & Conditions',
          subHeaderTitle: 'Daily Total Spins',
          columns: [
            { key: 'req', label: 'Requirement' },
            { key: 'method', label: 'Reward Method' },
            { key: 'quota', label: 'Quota' },
          ],
          rows: [
            { req: '500 time(s)', method: 'Coupons', quota: '100' },
          ],
        },
        {
          headerTitle: 'Terms & Conditions',
          subHeaderTitle: 'Daily Total Spin Amount',
          columns: [
            { key: 'req', label: 'Requirement' },
            { key: 'method', label: 'Reward Method' },
            { key: 'quota', label: 'Quota' },
          ],
          rows: [
            { req: '1,000', method: 'Coupons', quota: '100' },
          ],
        },
      ],
      bullets: [
        'Complete daily missions on selected slot to earn free spins.',
        'Calculation is based on the provider with highest progress.',
        'Each task can only be claimed once per day.',
        'Coupons are valid on the day of issue and will expire after that.',
        'Rewards are limited and available while supplies last.',
      ],
    },
    promotionTerms: 'To qualify, you must play slot games from eligible providers during promotion period. The list of slots can be found on the "Slots – Promotions" page.',
    rules: [
      'Open to KYC-verified members only.',
      'BYBET reserves the right to modify, suspend, or cancel this promotion at any time.',
      'BYBET General Terms and Conditions apply.',
    ],
    hasJoinButton: false,
  },
}

// Lookup function with fallback for any promo slug or id
export const getBonusDetail = (slugOrId: string): BonusDetail => {
  const normalized = slugOrId.toLowerCase().replace(/^(mp-|dep-|sports-|lc-|slots-|oth-)/, '')
  
  if (BONUS_DETAILS[normalized]) {
    return BONUS_DETAILS[normalized]
  }

  // Find promo in sections or featured for fallback title/desc
  let matchedTitle = 'ByBet Exclusive Promotion'
  let matchedDesc = 'Participate in our exclusive promotions and win exciting bonuses.'
  let matchedCategory = 'others'
  let matchedColor = '#10b981'

  for (const s of PROMOTION_SECTIONS) {
    const item = s.items.find(i => i.slug === normalized || i.id === slugOrId || i.id === normalized)
    if (item) {
      matchedTitle = item.title
      matchedDesc = item.description
      matchedCategory = item.category
      matchedColor = item.accentColor || '#10b981'
      break
    }
  }

  return {
    id: normalized,
    slug: normalized,
    title: matchedTitle,
    subtitle: matchedDesc,
    period: '2026-10-01 00:00:00 ~ 2026-12-31 23:59:59 (GMT+08:00)',
    bannerImage: PROMOTION_PLACEHOLDER_IMAGES.banner,
    thumbnailImage: PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    iconType: 'rebate',
    accentColor: matchedColor,
    showRequirements: false,
    qualifications: [
      { label: 'Registration Platform', value: 'PC, Mobile, App Sport' },
    ],
    eventContent: {
      badge: 'Special Bonus',
      description: matchedDesc,
      tables: [
        {
          headerTitle: 'Promotion Rewards',
          columns: [
            { key: 'tier', label: 'Tier Level' },
            { key: 'benefit', label: 'Benefit' },
          ],
          rows: [
            { tier: 'All Verified Members', benefit: 'Eligible for Bonus' },
          ],
        },
      ],
    },
    rules: [
      'Open to KYC-verified members only.',
      'Promotional rewards are subject to standard 1x turnover requirements before withdrawal.',
      'BYBET reserves the right to modify, suspend, or cancel this promotion at any time.',
      'BYBET General Terms and Conditions apply.',
    ],
    hasJoinButton: true,
  }
}
