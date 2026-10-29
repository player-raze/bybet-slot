export interface PromoImages {
  header: string
  banner: string
  thumbnail: string
}

export interface FeaturedPromo {
  id: string
  slug: string
  title: string
  rate?: string
  subtitle?: string
  badgeText?: string
  category: string
  bannerImage: PromoImages | string
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
  categories?: string[]
  'most-popular'?: boolean
  mostPopular?: boolean
  endDate?: string
  thumbnailType?: 'deposit' | 'spins' | 'rebate' | 'loss' | 'chest' | 'angpao' | 'sports' | 'basketball' | 'streak' | 'soccer' | 'live-casino' | 'referral' | 'profile' | 'vip' | 'giveaway' | 'camera'
  accentColor?: string
  badge?: string
  thumbnailImage?: string
  bannerImage?: PromoImages | string
  headerImage?: PromoImages | string
  innerIcon?: string
  innerPageIcon?: string
  seoTitle?: string
  seoDesc?: string
  seoDescription?: string
  imagePosition?: string
  showSaveBadge?: boolean
  countdownText?: string
  subtitle?: string
  badgeText?: string
  rate?: string
  paymentMethods?: string[]
  isHot?: boolean
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
  variant?: 'filled' | 'outline'
  accentColor?: string
  highlightColumns?: string[]
  rowSpans?: Record<string, number>
  columns: { key: string; label: string; icon?: string; width?: string }[]
  rows: BonusTableRow[]
  footnote?: string
}

export interface BonusDetail {
  id: string
  slug: string
  title: string
  subtitle: string
  period: string
  bannerImage: PromoImages | string
  headerImage?: PromoImages | string
  thumbnailImage?: string
  innerIcon?: string
  innerPageIcon?: string
  seoTitle?: string
  seoDesc?: string
  seoDescription?: string
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
    descriptionTone?: 'default' | 'white'
    tableHeading?: string
    descriptionParts?: Array<{
      text: string
      highlighted?: boolean
    }>
    methodCard?: {
      title: string
      content: string
    }
    callouts?: Array<{
      label: string
      badge?: string
    }>
    paragraphs?: string[]
    tables?: BonusTable[]
    notes?: string[]
    bullets?: string[]
  }
  promotionTerms?: string[] | string
  rules: string[]
  rulesStyle?: 'bullets' | 'plain'
  withdrawalTerms?: string
  hasJoinButton?: boolean
  contentHtml?: string
}

export const PROMOTION_PLACEHOLDER_IMAGES = {
  header: '/images/promotions/bonus-placeholder-banner.webp',
  banner: '/images/promotions/bonus-placeholder-banner.webp',
  thumbnail: '/images/promotions/bonus-placeholder-thumbnail.webp',
} as const

import {
  DEFAULT_INNER_PAGE_ICON,
  UNLIMITED_REBATE_INNER_ICON,
  UNLIMITED_REBATE_CONTENT_HTML,
  WEEKLY_TREASURE_CHEST_INNER_ICON,
  WEEKLY_TREASURE_CHEST_CONTENT_HTML,
  VIP_SPORTS_REBATE_INNER_ICON,
  VIP_SPORTS_REBATE_CONTENT_HTML,
  CHAMPIONS_STREAK_FEVER_INNER_ICON,
  CHAMPIONS_STREAK_FEVER_CONTENT_HTML,
  NBA_BACK_TO_BACK_BOOST_INNER_ICON,
  NBA_BACK_TO_BACK_BOOST_CONTENT_HTML,
  HAT_TRICK_SAFETY_NET_INNER_ICON,
  HAT_TRICK_SAFETY_NET_CONTENT_HTML,
  ROAD_TO_EUROPEAN_GLORY_INNER_ICON,
  ROAD_TO_EUROPEAN_GLORY_CONTENT_HTML,
} from './promotion-content-html'
import bonusDetailDatabase from './bonus-details.json'

export * from './promotion-content-html'

export const getPromoBannerUrl = (img?: PromoImages | string, slug?: string): string => {
  if (img) {
    if (typeof img === 'string') return img
    return img.banner || img.header || img.thumbnail
  }
  if (slug && PROMO_IMAGE_MAP[slug]) {
    return PROMO_IMAGE_MAP[slug].banner
  }
  return PROMOTION_PLACEHOLDER_IMAGES.banner
}

export const getPromoThumbnailUrl = (img?: PromoImages | string, slug?: string): string => {
  if (img) {
    if (typeof img === 'string') return img
    return img.thumbnail || img.banner || img.header
  }
  if (slug && PROMO_IMAGE_MAP[slug]) {
    return PROMO_IMAGE_MAP[slug].thumbnail
  }
  return PROMOTION_PLACEHOLDER_IMAGES.thumbnail
}

export const getPromoHeaderUrl = (img?: PromoImages | string, slug?: string): string => {
  if (img) {
    if (typeof img === 'string') return img
    return img.header || img.banner || img.thumbnail
  }
  if (slug && PROMO_IMAGE_MAP[slug]) {
    return PROMO_IMAGE_MAP[slug].header
  }
  return PROMOTION_PLACEHOLDER_IMAGES.header
}

export const PROMO_IMAGE_MAP: Record<string, PromoImages> = {
  "your-deposit-your-reward": {
    banner: "/images/promotions/your-deposit-your-reward.jpg",
    header: "/images/promotions/your-deposit-your-reward_head.jpg",
    thumbnail: "/images/promotions/your-deposit-your-reward_thumb.jpg",
  },
  "spins-bring-spins": {
    banner: "/images/promotions/spins-bring-spins.jpg",
    header: "/images/promotions/spins-bring-spins_head.jpg",
    thumbnail: "/images/promotions/spins-bring-spins_thumb.jpg",
  },
  "unlimited-rebate": {
    banner: "/images/promotions/unlimited-rebate.jpg",
    header: "/images/promotions/unlimited-rebate_head.jpg",
    thumbnail: "/images/promotions/unlimited-rebate_thumb.jpg",
  },
  "slot-loss-rebate": {
    banner: "/images/promotions/slot-loss-rebate.jpg",
    header: "/images/promotions/slot-loss-rebate_head.jpg",
    thumbnail: "/images/promotions/slot-loss-rebate_thumb.jpg",
  },
  "weekly-treasure-chest": {
    banner: "/images/promotions/weekly-treasure-chest.jpg",
    header: "/images/promotions/weekly-treasure-chest_head.jpg",
    thumbnail: "/images/promotions/weekly-treasure-chest_thumb.png",
  },
  "umuulan-ng-angpao": {
    banner: "/images/promotions/umuulan-ng-angpao.jpg",
    header: "/images/promotions/umuulan-ng-angpao_head.jpg",
    thumbnail: "/images/promotions/umuulan-ng-angpao_thumb.jpg",
  },
  "vip-sports-rebate": {
    banner: "/images/promotions/vip-sports-rebate.jpg",
    header: "/images/promotions/vip-sports-rebate_head.jpg",
    thumbnail: "/images/promotions/vip-sports-rebate_thumb.jpg",
  },
  "champions-streak-fever": {
    banner: "/images/promotions/champions-streak-fever.jpg",
    header: "/images/promotions/champions-streak-fever_head.jpg",
    thumbnail: "/images/promotions/champions-streak-fever_thumb.png",
  },
  "nba-back-to-back-boost": {
    banner: "/images/promotions/nba-back-to-back-boost.jpg",
    header: "/images/promotions/nba-back-to-back-boost_head.png",
    thumbnail: "/images/promotions/nba-back-to-back-boost_thumb.png",
  },
  "hat-trick-safety-net": {
    banner: "/images/promotions/hat-trick-safety-net.jpg",
    header: "/images/promotions/hat-trick-safety-net_head.png",
    thumbnail: "/images/promotions/hat-trick-safety-net_thumb.png",
  },
  "road-to-european-glory": {
    banner: "/images/promotions/road-to-european-glory.jpg",
    header: "/images/promotions/road-to-european-glory_head.jpg",
    thumbnail: "/images/promotions/road-to-european-glory_thumb.png",
  },
  "vip-live-casino-rebate": {
    banner: "/images/promotions/vip-live-casino-rebate.jpg",
    header: "/images/promotions/vip-live-casino-rebate_head.jpg",
    thumbnail: "/images/promotions/vip-live-casino-rebate_thumb.jpg",
  },
  "lucky-8-streak": {
    banner: "/images/promotions/lucky-8-streak.jpg",
    header: "/images/promotions/lucky-8-streak_head.jpg",
    thumbnail: "/images/promotions/lucky-8-streak_thumb.png",
  },
  "lucky-rankings": {
    banner: "/images/promotions/lucky-rankings.jpg",
    header: "/images/promotions/lucky-rankings_head.jpg",
    thumbnail: "/images/promotions/lucky-rankings_thumb.png",
  },
  "complete-account-information": {
    banner: "/images/promotions/complete-account-information.jpg",
    header: "/images/promotions/complete-account-information.jpg",
    thumbnail: "/images/promotions/complete-account-information_thumb.jpg",
  },
  "referral-bonus": {
    banner: "/images/promotions/referral-bonus.jpg",
    header: "/images/promotions/referral-bonus_head.jpg",
    thumbnail: "/images/promotions/referral-bonus_thumb.jpg",
  },
  "bybet-vip-center": {
    banner: "/images/promotions/bybet-vip-center.jpg",
    header: "/images/promotions/bybet-vip-center_head.jpg",
    thumbnail: "/images/promotions/bybet-vip-center_thumb.jpg",
  },
  "bybet-giveaways-galore": {
    banner: "/images/promotions/bybet-giveaways-galore.jpg",
    header: "/images/promotions/bybet-giveaways-galore_head.jpg",
    thumbnail: "/images/promotions/bybet-giveaways-galore_thumb.png",
  },
  "spot-it-snap-it-win-it": {
    banner: "/images/promotions/spot-it-snap-it-win-it.jpg",
    header: "/images/promotions/spot-it-snap-it-win-it_head.jpg",
    thumbnail: "/images/promotions/spot-it-snap-it-win-it.png",
  },
}

export const PROMO_CATEGORIES: PromoCategory[] = [
  { key: 'all', label: 'All' },
  { key: 'most-popular', label: 'Most Popular' },
  { key: 'deposit', label: 'Deposit' },
  { key: 'sports', label: 'Sports' },
  { key: 'live-casino', label: 'Live Casino' },
  { key: 'slots', label: 'Slots' },
  { key: 'others', label: 'Others' },
]

export const PROMOTIONS: PromotionItem[] = [
  {
    id: 'your-deposit-your-reward',
    slug: 'your-deposit-your-reward',
    title: 'Your Deposit. Your Reward.',
    seoTitle: 'Your Deposit. Your Reward. Daily Deposit Bonus | ByBet Philippines',
    seoDesc: 'Unlock exclusive daily deposit bonuses with your first deposit every day on ByBet Philippines. Deposit via GCash, Maya, or ShopeePay to claim rewards.',
    description: 'Unlock bonus with first deposit of the everyday.',
    category: 'deposit',
    'most-popular': true,
    thumbnailType: 'deposit',
    accentColor: '#10b981',
    bannerImage: PROMO_IMAGE_MAP["your-deposit-your-reward"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["your-deposit-your-reward"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["your-deposit-your-reward"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'spins-bring-spins',
    slug: 'spins-bring-spins',
    title: 'Spins Bring Spins',
    seoTitle: 'Spins Bring Spins — 100 Free Spins Daily | ByBet Philippines',
    seoDesc: 'Claim up to 100 free spins every day on selected slot games at ByBet Philippines. Complete daily spin missions and boost your slots winnings.',
    description: '100 Free Spins Every Day!',
    category: 'slots',
    'most-popular': true,
    thumbnailType: 'spins',
    accentColor: '#f59e0b',
    bannerImage: PROMO_IMAGE_MAP["spins-bring-spins"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["spins-bring-spins"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["spins-bring-spins"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'unlimited-rebate',
    slug: 'unlimited-rebate',
    title: '1.5% UNLIMITED REBATE',
    seoTitle: '1.5% Unlimited Daily Slot Rebate — All VIP Members | ByBet',
    seoDesc: 'Enjoy a 1.5% unlimited daily rebate on all online slots at ByBet Philippines. Automatic daily credits with no maximum cap and low 1x turnover.',
    description: 'DAILY SLOT REBATE • ALL MEMBERS',
    category: 'slots',
    'most-popular': true,
    thumbnailType: 'rebate',
    accentColor: '#10b981',
    bannerImage: PROMO_IMAGE_MAP["unlimited-rebate"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["unlimited-rebate"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["unlimited-rebate"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: UNLIMITED_REBATE_INNER_ICON,
  },
  {
    id: 'slot-loss-rebate',
    slug: 'slot-loss-rebate',
    title: 'Slot Loss Rebate',
    seoTitle: 'Slot Loss Rebate — Up to ₱60,000 Cashback Bonus | ByBet',
    seoDesc: 'Play your favorite online slot games with peace of mind. Get up to ₱60,000 slot loss rebate cashback on ByBet Philippines with weekly settlements.',
    description: 'Bonus up to ₱60,000',
    category: 'slots',
    'most-popular': true,
    thumbnailType: 'loss',
    accentColor: '#3b82f6',
    bannerImage: PROMO_IMAGE_MAP["slot-loss-rebate"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["slot-loss-rebate"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["slot-loss-rebate"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'weekly-treasure-chest',
    slug: 'weekly-treasure-chest',
    title: 'Weekly Treasure Chest: Receive a Mystery Treasure Chest according to the Valid Bet of points!',
    seoTitle: 'Weekly Mystery Treasure Chest Rewards — 4x Per Week | ByBet',
    seoDesc: 'Unlock up to 4 mystery treasure chests weekly based on your valid bet turnover across sports and casino games on ByBet Philippines.',
    description: 'Achievement Reward: Mystery Treasure Chest ×4/Week',
    category: 'others',
    categories: ['others', 'sports'],
    'most-popular': true,
    thumbnailType: 'chest',
    accentColor: '#fbbf24',
    bannerImage: PROMO_IMAGE_MAP["weekly-treasure-chest"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["weekly-treasure-chest"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["weekly-treasure-chest"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: WEEKLY_TREASURE_CHEST_INNER_ICON,
  },
  {
    id: 'umuulan-ng-angpao',
    slug: 'umuulan-ng-angpao',
    title: 'Umuulan ng Angpao',
    seoTitle: 'Umuulan ng Angpao Daily Red Envelope Cash Drops | ByBet',
    seoDesc: 'Catch falling red envelopes and win real cash bonuses with Umuulan ng Angpao on ByBet Philippines. Pikit, abot, kuha instant prizes!',
    description: 'Angpao falling — pikit, abot, kuha!',
    category: 'others',
    'most-popular': true,
    thumbnailType: 'angpao',
    accentColor: '#ef4444',
    bannerImage: PROMO_IMAGE_MAP["umuulan-ng-angpao"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["umuulan-ng-angpao"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["umuulan-ng-angpao"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'vip-sports-rebate',
    slug: 'vip-sports-rebate',
    title: 'VIP Sports Rebate',
    seoTitle: 'VIP Sports Rebate — Daily Cashback on Sports Bets | ByBet',
    seoDesc: 'Boost your sports betting with ByBet VIP Sports Rebates. Receive daily cashback on settled sports bets across football, basketball, tennis, and more.',
    description: 'Your Reward to End the Day',
    category: 'sports',
    thumbnailType: 'sports',
    accentColor: '#10b981',
    bannerImage: PROMO_IMAGE_MAP["vip-sports-rebate"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["vip-sports-rebate"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["vip-sports-rebate"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: VIP_SPORTS_REBATE_INNER_ICON,
  },
  {
    id: 'champions-streak-fever',
    slug: 'champions-streak-fever',
    title: 'Champions Streak Fever',
    seoTitle: 'Champions Streak Fever — Win Streaks Bonus | ByBet Sports',
    seoDesc: 'Turn your winning streaks into massive bonus rewards on ByBet Sportsbook. More consecutive wins mean bigger cash bonuses on your bets.',
    description: 'More wins. More streaks. More rewards!',
    category: 'sports',
    thumbnailType: 'streak',
    accentColor: '#f97316',
    bannerImage: PROMO_IMAGE_MAP["champions-streak-fever"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["champions-streak-fever"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["champions-streak-fever"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: CHAMPIONS_STREAK_FEVER_INNER_ICON,
    imagePosition: 'right center',
  },
  {
    id: 'nba-back-to-back-boost',
    slug: 'nba-back-to-back-boost',
    title: 'NBA Back-to-Back Boost',
    seoTitle: 'NBA Back-to-Back Boost — Basketball Betting Bonus | ByBet',
    seoDesc: 'Bet on back-to-back NBA games with ByBet. Enjoy enhanced odds, parlay boosts, and special basketball rewards throughout the NBA season.',
    description: 'Back-to-back NBA action means more chances to win rewards.',
    category: 'sports',
    thumbnailType: 'basketball',
    accentColor: '#3b82f6',
    bannerImage: PROMO_IMAGE_MAP["nba-back-to-back-boost"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["nba-back-to-back-boost"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["nba-back-to-back-boost"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: NBA_BACK_TO_BACK_BOOST_INNER_ICON,
  },
  {
    id: 'hat-trick-safety-net',
    slug: 'hat-trick-safety-net',
    title: 'Hat-trick Safety Net',
    seoTitle: 'Hat-trick Safety Net — Soccer Betting Cashback Guarantee | ByBet',
    seoDesc: 'Don\'t let one missed goal ruin your bet slip. Get cashback on soccer match bets with the Hat-trick Safety Net on ByBet Sportsbook.',
    description: 'Lose your last ball catch a hat-trick? Get cashback with ByBet!',
    category: 'sports',
    thumbnailType: 'soccer',
    accentColor: '#10b981',
    bannerImage: PROMO_IMAGE_MAP["hat-trick-safety-net"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["hat-trick-safety-net"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["hat-trick-safety-net"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'road-to-european-glory',
    slug: 'road-to-european-glory',
    title: 'Road to European Glory',
    seoTitle: 'Road to European Glory — Champions League & Euro Football Promo | ByBet',
    seoDesc: 'Wager on top European football leagues including UEFA Champions League, Premier League, and La Liga to unlock exclusive tier rewards on ByBet.',
    description: "Bet across Europe's top leagues and unlock bigger rewards",
    category: 'sports',
    thumbnailType: 'soccer',
    accentColor: '#6366f1',
    bannerImage: PROMO_IMAGE_MAP["road-to-european-glory"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["road-to-european-glory"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["road-to-european-glory"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'vip-live-casino-rebate',
    slug: 'vip-live-casino-rebate',
    title: 'VIP Live Casino Rebate',
    seoTitle: 'VIP Live Casino Rebate — Daily Live Dealer Cashback | ByBet',
    seoDesc: 'Get premium daily rebates on Baccarat, Roulette, Blackjack, and Live Dealer games at ByBet Live Casino with fast payouts and low turnover.',
    description: 'Your Reward to End the Day',
    category: 'live-casino',
    thumbnailType: 'live-casino',
    accentColor: '#eab308',
    bannerImage: PROMO_IMAGE_MAP["vip-live-casino-rebate"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["vip-live-casino-rebate"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["vip-live-casino-rebate"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'lucky-8-streak',
    slug: 'lucky-8-streak',
    title: 'Lucky 8 Streak',
    seoTitle: 'Lucky 8 Streak — Live Casino Consecutive Win Bonus | ByBet',
    seoDesc: 'Hit an 8-round winning streak on live casino baccarat and table games to take home extra cash rewards on ByBet Philippines.',
    description: 'Earn exciting bonuses when you reach an 8-win streak on Live Casino games!',
    category: 'live-casino',
    thumbnailType: 'streak',
    accentColor: '#f59e0b',
    bannerImage: PROMO_IMAGE_MAP["lucky-8-streak"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["lucky-8-streak"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["lucky-8-streak"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'lucky-rankings',
    slug: 'lucky-rankings',
    title: "Lucky Rankings – Let's Meet on Payday!",
    seoTitle: 'Lucky Rankings Payday Tournament & Leaderboard Bonus | ByBet',
    seoDesc: 'Climb the leaderboard in ByBet\'s Lucky Rankings tournament. Compete on slot games and celebrate payday with a share of the grand prize pool.',
    description: 'Climb the rankings and win big on payday!',
    category: 'slots',
    thumbnailType: 'chest',
    accentColor: '#ec4899',
    bannerImage: PROMO_IMAGE_MAP["lucky-rankings"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["lucky-rankings"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["lucky-rankings"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'complete-account-information',
    slug: 'complete-account-information',
    title: 'Complete account information to get ₱20 Reward!',
    seoTitle: 'Complete Profile & Verify Account to Get ₱20 Free Bonus | ByBet',
    seoDesc: 'Verify your email and mobile number and complete your ByBet member profile to claim an instant ₱20 welcome reward automatically.',
    description: 'After meeting the T&C requirements, simply click [Apply Now] to receive your 20 bonus reward automatically.',
    category: 'others',
    thumbnailType: 'profile',
    accentColor: '#eab308',
    bannerImage: PROMO_IMAGE_MAP["complete-account-information"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["complete-account-information"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["complete-account-information"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'referral-bonus',
    slug: 'referral-bonus',
    title: 'Referral Bonus',
    seoTitle: 'Refer a Friend Bonus Program — Earn Unlimited Commissions | ByBet',
    seoDesc: 'Invite friends to ByBet Philippines and earn recurring referral rewards when they register and deposit. Refer na may bonus pa!',
    description: 'Refer na may bonus pa!',
    category: 'others',
    thumbnailType: 'referral',
    accentColor: '#14b8a6',
    bannerImage: PROMO_IMAGE_MAP["referral-bonus"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["referral-bonus"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["referral-bonus"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
  },
  {
    id: 'bybet-vip-center',
    slug: 'bybet-vip-center',
    title: 'Bybet VIP Center',
    seoTitle: 'ByBet VIP Club & Loyalty Rewards Program | Exclusive Privileges',
    seoDesc: 'Level up your gaming experience in the ByBet VIP Center. Enjoy customized bonuses, higher withdrawal limits, birthday gifts, and personal VIP managers.',
    subtitle: 'Permanent',
    description: 'Exclusive Rewards Start Here',
    category: 'others',
    thumbnailType: 'vip',
    accentColor: '#a855f7',
    bannerImage: PROMO_IMAGE_MAP["bybet-vip-center"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["bybet-vip-center"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["bybet-vip-center"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
    countdownText: 'Permanent',
    imagePosition: 'left center',
  },
  {
    id: 'bybet-giveaways-galore',
    slug: 'bybet-giveaways-galore',
    title: 'Bybet lang sakalam giveaways galore!',
    seoTitle: 'ByBet Lang Sakalam Community Giveaways Galore | Official Promo',
    seoDesc: 'Follow ByBet\'s official Telegram, Facebook, and social channels to win free bet codes, gadgets, and exclusive community giveaway prizes.',
    description: 'Follow the established official community channels of Bybet',
    category: 'others',
    thumbnailType: 'giveaway',
    accentColor: '#06b6d4',
    bannerImage: PROMO_IMAGE_MAP["bybet-giveaways-galore"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["bybet-giveaways-galore"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["bybet-giveaways-galore"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
    imagePosition: '38% center',
  },
  {
    id: 'spot-it-snap-it-win-it',
    slug: 'spot-it-snap-it-win-it',
    title: 'Spot it. Snap it. Win it.',
    seoTitle: 'Spot It. Snap It. Win It. — Post a Selfie for ₱200 Bonus | ByBet',
    seoDesc: 'Spot a ByBet billboard, vehicle wrap, or advertisement anywhere in the Philippines, snap a selfie, post online, and get up to ₱200 bonus!',
    description: 'Get up to 200 Bonus when you post a selfie with any Bybet placement',
    category: 'others',
    thumbnailType: 'camera',
    accentColor: '#10b981',
    bannerImage: PROMO_IMAGE_MAP["spot-it-snap-it-win-it"] || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP["spot-it-snap-it-win-it"]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP["spot-it-snap-it-win-it"]?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: DEFAULT_INNER_PAGE_ICON,
    showSaveBadge: true,
    imagePosition: '68% center',
  },
]

export const PROMOTION_ITEMS = PROMOTIONS

export const PROMOTION_SECTIONS: PromoSection[] = [
  {
    id: 'most-popular',
    title: 'Most Popular',
    category: 'most-popular',
    items: PROMOTIONS.filter(item => Boolean(item['most-popular'] || item.mostPopular)),
  },
  {
    id: 'deposit',
    title: 'Deposit',
    category: 'deposit',
    items: PROMOTIONS.filter(item => item.category === 'deposit' || item.categories?.includes('deposit')),
  },
  {
    id: 'sports',
    title: 'Sports',
    category: 'sports',
    items: PROMOTIONS.filter(item => item.category === 'sports' || item.categories?.includes('sports')),
  },
  {
    id: 'live-casino',
    title: 'Live Casino',
    category: 'live-casino',
    items: PROMOTIONS.filter(item => item.category === 'live-casino' || item.categories?.includes('live-casino')),
  },
  {
    id: 'slots',
    title: 'Slots',
    category: 'slots',
    items: PROMOTIONS.filter(item => item.category === 'slots' || item.categories?.includes('slots')),
  },
  {
    id: 'others',
    title: 'Others',
    category: 'others',
    items: PROMOTIONS.filter(item => item.category === 'others' || item.categories?.includes('others')),
  },
]

const ANGPAO_INNER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none"><rect x="4" y="3" width="32" height="35" rx="4" fill="#087653"/><path d="M8 9.5L20 16.5L32 9.5M20 16.5V22" stroke="#06251B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 21L20 26L25 21M20 26V33M16.5 29H23.5" stroke="#06251B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const BONUS_ICON_MAP = {
  default: DEFAULT_INNER_PAGE_ICON,
  angpao: ANGPAO_INNER_ICON,
  slotLossRebate: UNLIMITED_REBATE_INNER_ICON,
  unlimitedRebate: UNLIMITED_REBATE_INNER_ICON,
  weeklyTreasureChest: WEEKLY_TREASURE_CHEST_INNER_ICON,
  vipSportsRebate: VIP_SPORTS_REBATE_INNER_ICON,
  championsStreakFever: CHAMPIONS_STREAK_FEVER_INNER_ICON,
  nbaBackToBackBoost: NBA_BACK_TO_BACK_BOOST_INNER_ICON,
  hatTrickSafetyNet: HAT_TRICK_SAFETY_NET_INNER_ICON,
  roadToEuropeanGlory: ROAD_TO_EUROPEAN_GLORY_INNER_ICON,
} as const

const BONUS_CONTENT_TEMPLATE_MAP = {
  unlimitedRebate: UNLIMITED_REBATE_CONTENT_HTML.replaceAll('#ff0000', '#10b981'),
  weeklyTreasureChest: WEEKLY_TREASURE_CHEST_CONTENT_HTML,
  vipSportsRebate: VIP_SPORTS_REBATE_CONTENT_HTML,
  championsStreakFever: CHAMPIONS_STREAK_FEVER_CONTENT_HTML,
  nbaBackToBackBoost: NBA_BACK_TO_BACK_BOOST_CONTENT_HTML,
  hatTrickSafetyNet: HAT_TRICK_SAFETY_NET_CONTENT_HTML,
  roadToEuropeanGlory: ROAD_TO_EUROPEAN_GLORY_CONTENT_HTML,
} as const

type BonusDatabaseRecord = Omit<
  BonusDetail,
  'bannerImage' | 'headerImage' | 'thumbnailImage' | 'innerIcon' | 'innerPageIcon' | 'contentHtml'
> & {
  iconKey: keyof typeof BONUS_ICON_MAP
  contentTemplate?: keyof typeof BONUS_CONTENT_TEMPLATE_MAP
}

const hydrateBonusDetail = (record: BonusDatabaseRecord): BonusDetail => {
  const images = PROMO_IMAGE_MAP[record.slug]

  return {
    ...record,
    bannerImage: images || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: images?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: images?.thumbnail || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: BONUS_ICON_MAP[record.iconKey] || DEFAULT_INNER_PAGE_ICON,
    contentHtml: record.contentTemplate
      ? BONUS_CONTENT_TEMPLATE_MAP[record.contentTemplate]
      : undefined,
  }
}

/**
 * Portable, JSON-backed promotion detail database used by every
 * `/explore/bonus/*` route. Large SVG/HTML assets stay referenced by key.
 */
export const BONUS_DETAILS: Record<string, BonusDetail> = Object.fromEntries(
  Object.entries(bonusDetailDatabase.records).map(([slug, rawRecord]) => [
    slug,
    hydrateBonusDetail(rawRecord as BonusDatabaseRecord),
  ]),
)

const DEFAULT_BONUS_PERIOD = '2026-10-01 00:00:00 ~ 2026-12-31 23:59:59 (GMT+08:00)'

export const parseEndDateFromPeriod = (period?: string): string | undefined => {
  if (!period || period.trim().toLowerCase() === 'permanent') {
    return undefined
  }

  const tzMatch = period.match(/GMT([+-]\d{2}:\d{2})/i)
  const tzOffset = tzMatch?.[1] || '+08:00'
  const matches = [...period.matchAll(/(\d{4}-\d{2}-\d{2})(?:\s+(\d{2}:\d{2}(?::\d{2})?))?/g)]
  if (!matches.length) {
    return undefined
  }

  const endMatch = matches[matches.length - 1]
  const datePart = endMatch[1]
  const rawTimePart = endMatch[2] || '23:59:59'
  const timePart = rawTimePart.length === 5 ? `${rawTimePart}:00` : rawTimePart

  return `${datePart}T${timePart}${tzOffset}`
}

export const formatCountdownFromEndDate = (endDate?: string, nowMs: number = Date.now()): string => {
  if (!endDate || endDate === 'Permanent') {
    return 'Permanent'
  }

  const endMs = Date.parse(endDate)
  if (Number.isNaN(endMs)) {
    return 'Permanent'
  }

  const diffMs = endMs - nowMs
  if (diffMs <= 0) {
    return '0 Hours 0 Mins 0 Secs'
  }

  const dayMs = 86_400_000
  if (diffMs < dayMs) {
    const totalSeconds = Math.floor(diffMs / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${hours} Hours ${mins} Mins ${secs} Secs`
  }

  const totalDays = Math.floor(diffMs / dayMs)
  const months = Math.floor(totalDays / 30)
  const days = totalDays % 30

  if (months > 0) {
    return `${months} Month ${days} Day`
  }

  return `${days} Day`
}

export const getPromotionCountdownText = (
  promotion: Pick<PromotionItem, 'slug' | 'endDate' | 'countdownText'>,
  nowMs: number = Date.now(),
): string => {
  if (promotion.countdownText === 'Permanent' || promotion.slug === 'bybet-vip-center') {
    return 'Permanent'
  }

  const period = BONUS_DETAILS[promotion.slug]?.period
  const endDate = parseEndDateFromPeriod(period) || promotion.endDate || parseEndDateFromPeriod(DEFAULT_BONUS_PERIOD)
  const formatted = formatCountdownFromEndDate(endDate, nowMs)
  return formatted === 'Permanent' ? 'Permanent' : `Event Countdown: ${formatted}`
}

for (const promotion of PROMOTIONS) {
  if (promotion.countdownText === 'Permanent' || promotion.slug === 'bybet-vip-center') {
    promotion.endDate = undefined
    promotion.countdownText = 'Permanent'
    continue
  }

  const period = BONUS_DETAILS[promotion.slug]?.period || DEFAULT_BONUS_PERIOD
  const parsedEndDate = parseEndDateFromPeriod(period)
  if (parsedEndDate) {
    promotion.endDate = parsedEndDate
    promotion.countdownText = formatCountdownFromEndDate(parsedEndDate)
  }
}

// Lookup function with fallback for any promo slug or id
export const getBonusDetail = (slugOrId: string): BonusDetail => {
  const normalized = slugOrId.toLowerCase().replace(/^(mp-|dep-|sports-|lc-|slots-|oth-)/, '')
  
  const found = PROMOTIONS.find(i => i.slug === normalized || i.id === slugOrId || i.id === normalized)

  if (BONUS_DETAILS[normalized]) {
    const detail = BONUS_DETAILS[normalized]
    return {
      ...detail,
      seoTitle: detail.seoTitle || found?.seoTitle,
      seoDesc: detail.seoDesc || detail.seoDescription || found?.seoDesc || found?.seoDescription,
      seoDescription: detail.seoDescription || detail.seoDesc || found?.seoDescription || found?.seoDesc,
      headerImage: detail.headerImage || PROMO_IMAGE_MAP[normalized]?.header || PROMOTION_PLACEHOLDER_IMAGES.header,
      innerIcon: detail.innerIcon || detail.innerPageIcon || found?.innerIcon || DEFAULT_INNER_PAGE_ICON,
      contentHtml: detail.contentHtml,
    }
  }

  // Find promo in PROMOTIONS for fallback title/desc
  let matchedTitle = 'ByBet Exclusive Promotion'
  let matchedDesc = 'Participate in our exclusive promotions and win exciting bonuses.'
  let matchedCategory = 'others'
  let matchedColor = '#10b981'

  if (found) {
    matchedTitle = found.title
    matchedDesc = found.description
    matchedCategory = found.category
    matchedColor = found.accentColor || '#10b981'
  }

  return {
    id: normalized,
    slug: normalized,
    title: matchedTitle,
    subtitle: matchedDesc,
    seoTitle: found?.seoTitle,
    seoDesc: found?.seoDesc || found?.seoDescription,
    seoDescription: found?.seoDescription || found?.seoDesc,
    period: '2026-10-01 00:00:00 ~ 2026-12-31 23:59:59 (GMT+08:00)',
    bannerImage: PROMO_IMAGE_MAP[normalized] || found?.bannerImage || PROMOTION_PLACEHOLDER_IMAGES.banner,
    headerImage: PROMO_IMAGE_MAP[normalized]?.header || found?.headerImage || PROMOTION_PLACEHOLDER_IMAGES.header,
    thumbnailImage: PROMO_IMAGE_MAP[normalized]?.thumbnail || found?.thumbnailImage || PROMOTION_PLACEHOLDER_IMAGES.thumbnail,
    innerIcon: found?.innerIcon || found?.innerPageIcon || DEFAULT_INNER_PAGE_ICON,
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
