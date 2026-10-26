export interface SlotGame {
  id: string
  title: string
  provider: string
  providerLogo?: string
  image: string
  badge?: string
  buyBonus?: boolean
  bottomMultiplier?: string
  hotPercent?: string
  coldPercent?: string
  rtpPercent?: string
  livePlayers?: number
  href?: string
  category?: string
  theme?: string
  features?: string[]
  winningLine?: string
  new?: boolean
  jackpot?: boolean
  Jackpot?: boolean
  jackpotPrice?: number | string
  JackpotPrice?: number | string
}

export interface SlotCategory {
  key: string
  label: string
  shortLabel: string
  iconName?: string
  emoji?: string
  iconImage?: string
  svg?: string
}

export interface ReferenceGame {
  title: string
  provider: string
  image: string
}

export const newGames: ReferenceGame[] = [
  { title: 'Wild Hop & Drop', provider: 'Pragmatic Play', image: '/images/games/new-releases/wild-hop-and-drop.webp' },
  { title: 'Spin & Score Megaways', provider: 'Pragmatic Play', image: '/images/games/new-releases/spin-and-score-megaways.webp' },
  { title: 'Super Wildrix', provider: 'PG', image: '/images/games/new-releases/super-wildrix.webp' },
  { title: 'Snakes & Ladders: Snake Eyes', provider: 'Pragmatic Play', image: '/images/games/new-releases/snakes-and-ladders-snake-eyes.webp' },
  { title: 'Fortune Rabbit Xtreme', provider: 'PG Soft', image: '/images/games/new-releases/fortune-rabbit-xtreme.webp' },
  { title: 'Bigger Bass Blizzard', provider: 'Pragmatic Play', image: '/images/games/new-releases/bigger-bass-blizzard.webp' },
  { title: 'John Hunter: Book of Tut Respin', provider: 'Pragmatic Play', image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp' },
  { title: 'Chinese New Year Deluxe', provider: 'PG Soft', image: '/images/games/new-releases/chinese-new-year-deluxe.webp' },
]

export const FREQUENTLY_SEARCHED_SLOTS: string[] = [
  'Super Ace',
  'Super Ace Deluxe',
  'Pinata Wins',
  'Wild Bounty Showdown',
  'Wild Ace',
  'Wild Bronco',
  'Fortune Gems 2',
  'Fortune Gems',
  'Fortune Garuda 500',
  'Golden Empire',
]

export const SLOT_CATEGORY_SVGS: Record<string, string> = {
  bonus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g transform="translate(0, 0.333)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.663 0C18.9143 0 24 5.23395 24 11.667C23.9998 18.0998 18.9142 23.333 12.663 23.333C10.2037 23.333 7.80946 22.507 5.85347 20.9941L1.52925 21.8838C1.04875 21.9827 0.554607 21.7895 0.25874 21.3867C-0.0370806 20.9839 -0.0830807 20.4424 0.140576 19.9932L2.13179 15.9941C1.59661 14.6194 1.32617 13.1667 1.32612 11.667C1.32612 5.23404 6.4118 5.32292e-06 12.663 0ZM17.1855 5.90723C16.685 5.48732 15.9384 5.55219 15.5185 6.05273L7.71968 15.3496C7.3001 15.8501 7.36578 16.5958 7.86616 17.0156C8.36659 17.4354 9.11222 17.3703 9.53218 16.8701L17.332 7.57324C17.7516 7.07276 17.6858 6.32708 17.1855 5.90723ZM16.1699 12.168C14.7946 12.168 13.6796 13.2829 13.6796 14.6582C13.6796 16.0335 14.7946 17.1484 16.1699 17.1484C17.5452 17.1484 18.6601 16.0335 18.6601 14.6582C18.6601 13.2829 17.5452 12.168 16.1699 12.168ZM16.1699 13.8682C16.6063 13.8682 16.9599 14.2218 16.9599 14.6582C16.9599 15.0946 16.6063 15.4482 16.1699 15.4482C15.7334 15.4482 15.3798 15.0946 15.3798 14.6582C15.3798 14.2218 15.7334 13.8682 16.1699 13.8682ZM8.95698 5.66992C7.5817 5.66993 6.46681 6.78489 6.46675 8.16016C6.46675 9.53548 7.58166 10.6504 8.95698 10.6504C10.3323 10.6504 11.4472 9.53549 11.4472 8.16016C11.4472 6.78488 10.3323 5.66992 8.95698 5.66992ZM8.95698 7.37012C9.39339 7.37012 9.74696 7.72376 9.74702 8.16016C9.74702 8.5966 9.39343 8.9502 8.95698 8.9502C8.52055 8.95018 8.16694 8.59659 8.16694 8.16016C8.167 7.72377 8.52058 7.37013 8.95698 7.37012Z" class="fill-text-4"></path></g></svg>`,
  'top-pick': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_14377_100787)"><path d="M15.9979 9.15103H22.6037C22.6838 9.15103 23.1316 9.3784 23.2346 9.44847C24.7551 10.4809 23.8239 12.7474 22.0688 12.5787L22.6366 12.8318C24.1458 13.9257 23.3218 16.1293 21.498 16.0064L22.0659 16.2595C23.575 17.3534 22.7511 19.557 20.9273 19.434L21.4951 19.6871C22.3119 20.3249 22.5794 21.3073 21.9257 22.181C21.744 22.4241 21.1862 22.8617 20.8915 22.8617H6.28516V10.2964C8.59677 9.6887 11.246 8.07282 12.2973 5.84777C12.9224 4.52647 13.5261 0.920051 14.7334 0.286569C15.5101 -0.120976 16.5258 -0.166736 17.0565 0.634054C17.7888 1.73943 17.8732 5.10561 17.5156 6.35255C17.2224 7.37785 16.613 8.30305 15.9979 9.15389V9.15103Z"  class="fill-text-4"></path><path d="M5.71322 8.00708H0V24H5.71322V8.00708Z"  class="fill-text-4"></path></g><defs><clipPath id="clip0_14377_100787"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`,
  top: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M22.3782 7.39053C22.1637 7.21145 21.9032 7.09628 21.6263 7.05815C21.3495 7.02003 21.0675 7.06048 20.8126 7.17491L16.0688 9.28428L13.3126 4.31553C13.1809 4.08355 12.99 3.89064 12.7594 3.75643C12.5289 3.62222 12.2669 3.55151 12.0001 3.55151C11.7333 3.55151 11.4713 3.62222 11.2408 3.75643C11.0102 3.89064 10.8193 4.08355 10.6876 4.31553L7.93135 9.28428L3.1876 7.17491C2.93214 7.06065 2.64981 7.02014 2.37252 7.05795C2.09524 7.09577 1.83407 7.21039 1.61852 7.38887C1.40298 7.56736 1.24166 7.80258 1.15281 8.06794C1.06396 8.33331 1.05111 8.61825 1.11573 8.89053L3.49697 19.0437C3.54251 19.2402 3.62747 19.4255 3.74672 19.5883C3.86597 19.751 4.01702 19.8879 4.19072 19.9905C4.42589 20.1313 4.69477 20.2058 4.96885 20.2062C5.10208 20.2059 5.23462 20.187 5.3626 20.1499C9.70306 18.9499 14.2878 18.9499 18.6282 20.1499C19.0245 20.2541 19.446 20.1968 19.8001 19.9905C19.9749 19.8892 20.1267 19.7527 20.2461 19.5897C20.3655 19.4268 20.4499 19.2408 20.4938 19.0437L22.8845 8.89053C22.9484 8.61817 22.9348 8.33337 22.8454 8.06831C22.7559 7.80324 22.5941 7.56848 22.3782 7.39053Z"  class="fill-text-4"></path></svg>`,
  new: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_33258_7160)"><mask id="mask0_33258_7160" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style="mask-type: luminance;"><path d="M0 0H24V24H0V0Z" fill="white"></path></mask><g mask="url(#mask0_33258_7160)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0929 2.48099L11.9999 0.625488L8.90689 2.48099L5.31439 2.79749L3.89988 6.11699L1.18188 8.48549L1.99038 12L1.18188 15.5145L3.90139 17.8845L5.31439 21.2025L8.90689 21.519L11.9999 23.3745L15.0929 21.519L18.6854 21.2025L20.0984 17.883L22.8179 15.5145L22.0094 12L22.8179 8.48549L20.0984 6.11549L18.6854 2.79749L15.0929 2.48099ZM4.49988 15V8.99999H6.74989C6.74989 8.99999 6.74989 9.02099 6.75888 9.07349C6.76689 9.12749 6.77989 9.19949 6.79788 9.28949C6.83589 9.46949 6.88988 9.69249 6.95988 9.95849C7.09788 10.488 7.28239 11.1345 7.46989 11.7945L7.49989 11.895V8.99999H8.99989V15H6.74989C6.74989 15 6.74889 14.9775 6.74088 14.9265L6.70188 14.7105C6.65301 14.4863 6.599 14.2632 6.53989 14.0415C6.37648 13.4277 6.20647 12.8156 6.02988 12.2055L5.99989 12.105V15H4.49988ZM13.4999 8.99999H9.74989V15H13.4999V13.5H11.2499V12.75H12.8999V11.25H11.2499V10.5H13.4999V8.99999ZM15.7499 8.99999H14.2499V15H15.7499V14.25C15.7499 13.722 15.9404 13.17 16.2104 12.756C16.3454 12.552 16.4834 12.405 16.5989 12.3165C16.6388 12.2818 16.6845 12.2543 16.7339 12.2355C16.7564 12.2415 16.8254 12.2655 16.9439 12.3435C17.0939 12.444 17.2679 12.603 17.4329 12.813C17.7734 13.2405 17.9999 13.773 17.9999 14.25V15H19.4999V8.99999H17.9999V11.2605C17.9289 11.2032 17.8553 11.1491 17.7794 11.0985C17.4944 10.9065 17.1284 10.7325 16.7294 10.7325C16.3484 10.7325 16.0124 10.89 15.7499 11.0775V8.99999Z"  class="fill-text-4"></path></g></g><defs><clipPath id="clip0_33258_7160"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`,
  hot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_31680_126610)"><path d="M19.6196 5.71476C16.2466 6.65237 15.6286 9.3108 15.846 10.9996C13.4397 8.24164 13.5382 5.06971 13.5382 0.5C5.8204 3.33671 7.61532 11.5162 7.38476 13.9999C5.44348 12.4507 5.07646 8.75006 5.07646 8.75006C3.02732 9.77808 2 12.5234 2 14.7501C2 20.135 6.47685 24.5 12.0003 24.5C17.5232 24.5 22 20.135 22 14.7501C22 11.5502 19.5899 10.0737 19.6196 5.71426V5.71476Z" fill="none" class="fill-text-4"></path></g><defs><clipPath id="clip0_31680_126610"><rect width="24" height="24" fill="none" transform="translate(0 0.5)" class="fill-text-4"></rect></clipPath></defs></svg>`,
  cold: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#clip0_33258_126329)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 0.75C12.5522 0.75 12.9999 1.19772 12.9999 1.75V4.00383L14.7389 3.17316C15.2372 2.93511 15.8342 3.14612 16.0723 3.64447C16.3103 4.14282 16.0993 4.73979 15.601 4.97784L12.9999 6.22029V7.25143L14.4531 6.7702L15.7468 7.5175L16.0549 9.01119L16.9543 8.49321L16.7329 5.62702C16.6904 5.07638 17.1023 4.59551 17.6529 4.55297C18.2035 4.51043 18.6844 4.92233 18.727 5.47298L18.8748 7.3872L20.8349 6.25843C21.3135 5.98281 21.9249 6.14735 22.2005 6.62595C22.4761 7.10454 22.3116 7.71595 21.833 7.99157L19.8784 9.11718L21.464 10.2003C21.92 10.5118 22.0372 11.134 21.7257 11.5901C21.4141 12.0461 20.7919 12.1633 20.3359 11.8517L17.9546 10.2251L17.0581 10.7414L18.1983 11.7522L18.1983 13.2488L17.0582 14.2594L17.9553 14.776L20.3357 13.1494C20.7917 12.8378 21.414 12.9548 21.7256 13.4108C22.0372 13.8668 21.9201 14.489 21.4641 14.8006L19.8791 15.8838L21.833 17.0089C22.3116 17.2845 22.4761 17.8959 22.2005 18.3745C21.9249 18.8531 21.3135 19.0177 20.8349 18.7421L18.8749 17.6134L18.727 19.528C18.6844 20.0787 18.2035 20.4906 17.6529 20.448C17.1023 20.4055 16.6904 19.9246 16.7329 19.374L16.9543 16.5075L16.0551 15.9896L15.7468 17.4832L14.453 18.2303L12.9999 17.749V18.7804L15.6009 20.0226C16.0993 20.2607 16.3103 20.8576 16.0723 21.356C15.8343 21.8543 15.2373 22.0654 14.739 21.8274L12.9999 20.9968V23.25C12.9999 23.8023 12.5522 24.25 11.9999 24.25C11.4476 24.25 10.9999 23.8023 10.9999 23.25V20.9969L9.26145 21.8273C8.76311 22.0654 8.16614 21.8544 7.92809 21.356C7.69004 20.8577 7.90105 20.2607 8.3994 20.0227L10.9999 18.7804V17.7492L9.5473 18.2303L8.25358 17.4832L7.94521 15.9893L7.0455 16.5074L7.26696 19.374C7.3095 19.9246 6.8976 20.4055 6.34695 20.448C5.79631 20.4906 5.31544 20.0787 5.2729 19.528L5.12498 17.6133L3.16543 18.7416C2.68682 19.0172 2.07542 18.8526 1.79983 18.374C1.52424 17.8954 1.68882 17.284 2.16743 17.0084L4.12143 15.8833L2.53683 14.8007C2.0808 14.4892 1.96368 13.8669 2.27522 13.4109C2.58676 12.9549 3.209 12.8377 3.66502 13.1493L6.04534 14.7754L6.94206 14.2591L5.80199 13.2482V11.7518L6.94185 10.7411L6.04565 10.2249L3.66512 11.8516C3.20913 12.1632 2.58688 12.0462 2.27529 11.5902C1.96369 11.1342 2.08074 10.512 2.53673 10.2004L4.12205 9.11705L2.16785 7.99155C1.68926 7.71592 1.52474 7.1045 1.80037 6.62592C2.07601 6.14733 2.68742 5.98281 3.16601 6.25845L5.12505 7.38673L5.2729 5.47298C5.31544 4.92233 5.79631 4.51043 6.34695 4.55297C6.8976 4.59551 7.3095 5.07638 7.26696 5.62702L7.04556 8.49283L7.94516 9.01094L8.25358 7.51684L9.54751 6.76977L10.9999 7.25111V6.21986L8.39946 4.97787C7.90109 4.73985 7.69004 4.14289 7.92806 3.64453C8.16608 3.14617 8.76304 2.93512 9.2614 3.17313L10.9999 4.00346V1.75C10.9999 1.19772 11.4476 0.75 11.9999 0.75ZM10.9999 9.35808L9.98509 9.02176L9.77033 10.0621L10.9999 10.7703V9.35808ZM9.99632 12.5003L8.76938 11.7936L7.97273 12.5L8.76972 13.2067L9.99632 12.5003ZM9.77042 14.9383L9.98514 15.9785L10.9999 15.6424V14.2302L9.77042 14.9383ZM12.9999 14.2302V15.6421L14.0152 15.9784L14.2299 14.9385L12.9999 14.2302ZM15.2305 13.2069L14.0038 12.5003L15.2304 11.794L16.0274 12.5005L15.2305 13.2069ZM14.2296 10.0624L14.015 9.02208L12.9999 9.35824V10.7705L14.2296 10.0624Z"  class="fill-text-4"></path></g><defs><clipPath id="clip0_33258_126329"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>`,
  "max-rpt": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M13.5 16.5C13.5 16.8978 13.342 17.2794 13.0607 17.5607C12.7794 17.842 12.3978 18 12 18C11.6022 18 11.2206 17.842 10.9393 17.5607C10.658 17.2794 10.5 16.8978 10.5 16.5C10.5 16.1022 10.658 15.7206 10.9393 15.4393C11.2206 15.158 11.6022 15 12 15C12.3978 15 12.7794 15.158 13.0607 15.4393C13.342 15.7206 13.5 16.1022 13.5 16.5Z"  class="fill-text-4"></path><path d="M14.347 1.15991L17.527 5.61591L19.624 4.90091L21.538 10.4999H22.5V22.4999H1.5V10.4999H2.01V10.4899L2.658 10.4959L14.347 1.15991ZM9.397 10.4999H19.425L18.388 7.46691L16.866 7.95391L9.397 10.4999ZM7.839 8.91691L15.55 6.28991L13.946 4.03991L7.839 8.91691ZM5.5 12.4999H3.5V14.4999C4.03043 14.4999 4.53914 14.2892 4.91421 13.9141C5.28929 13.5391 5.5 13.0303 5.5 12.4999ZM15.5 16.4999C15.5 16.0403 15.4095 15.5852 15.2336 15.1605C15.0577 14.7359 14.7999 14.35 14.4749 14.025C14.1499 13.7 13.764 13.4422 13.3394 13.2663C12.9148 13.0904 12.4596 12.9999 12 12.9999C11.5404 12.9999 11.0852 13.0904 10.6606 13.2663C10.236 13.4422 9.85013 13.7 9.52513 14.025C9.20012 14.35 8.94231 14.7359 8.76642 15.1605C8.59053 15.5852 8.5 16.0403 8.5 16.4999C8.5 17.4282 8.86875 18.3184 9.52513 18.9748C10.1815 19.6312 11.0717 19.9999 12 19.9999C12.9283 19.9999 13.8185 19.6312 14.4749 18.9748C15.1313 18.3184 15.5 17.4282 15.5 16.4999ZM20.5 20.4999V18.4999C19.9696 18.4999 19.4609 18.7106 19.0858 19.0857C18.7107 19.4608 18.5 19.9695 18.5 20.4999H20.5ZM18.5 12.4999C18.5 13.0303 18.7107 13.5391 19.0858 13.9141C19.4609 14.2892 19.9696 14.4999 20.5 14.4999V12.4999H18.5ZM3.5 20.4999H5.5C5.5 19.9695 5.28929 19.4608 4.91421 19.0857C4.53914 18.7106 4.03043 18.4999 3.5 18.4999V20.4999Z"  class="fill-text-4"></path></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 21.57V9.14079C1 8.77472 1.0901 8.42819 1.27029 8.1012C1.45048 7.77422 1.69876 7.50491 2.01514 7.29327L10.4773 1.46188C10.9204 1.15396 11.4264 1 11.9953 1C12.5641 1 13.0733 1.15396 13.5227 1.46188L21.9849 7.29184C22.3023 7.50348 22.5506 7.77326 22.7297 8.1012C22.9099 8.42819 23 8.77472 23 9.14079V21.57C23 21.9533 22.8434 22.2874 22.5301 22.5724C22.2169 22.8575 21.8497 23 21.4286 23H16.1109C15.7505 23 15.4488 22.8894 15.2057 22.6682C14.9627 22.4461 14.8411 22.1716 14.8411 21.8446V15.0251C14.8411 14.6981 14.7196 14.424 14.4766 14.2029C14.2325 13.9807 13.9308 13.8697 13.5714 13.8697H10.4286C10.0692 13.8697 9.76805 13.9807 9.525 14.2029C9.28091 14.424 9.15886 14.6981 9.15886 15.0251V21.846C9.15886 22.173 9.03733 22.4471 8.79429 22.6682C8.55124 22.8894 8.25005 23 7.89071 23H2.57143C2.15029 23 1.78309 22.8575 1.46986 22.5724C1.15662 22.2874 1 21.9533 1 21.57Z"  class="fill-title-button-special"></path></svg>`,
}

export const SLOT_CATEGORIES: SlotCategory[] = [
  { key: 'home', label: 'Home', shortLabel: 'Home', iconName: 'House' },
  { key: 'bonus', label: 'Bonus', shortLabel: 'Bonus', iconName: 'Percent', emoji: '🟡', iconImage: '/icons/slots/bonuses.webp', svg: SLOT_CATEGORY_SVGS.bonus },
  { key: 'top-pick', label: 'Top Pick', shortLabel: 'Top Pick', iconName: 'ThumbsUp', emoji: '👍', iconImage: '/icons/slots/top-pick.webp' },
  { key: 'top', label: 'Top', shortLabel: 'Top', iconName: 'Medal', emoji: '🏅', iconImage: '/icons/slots/top.webp' },
  { key: 'new', label: 'New', shortLabel: 'New', iconName: 'Sparkles', emoji: '🆕', iconImage: '/icons/slots/new.webp' },
  { key: 'hot', label: 'Hot games', shortLabel: 'Hot...', iconName: 'Flame', emoji: '🔥', iconImage: '/icons/slots/hot.webp' },
  { key: 'cold', label: 'Cold Games', shortLabel: 'Cold...', iconName: 'Snowflake', emoji: '❄️', iconImage: '/icons/slots/cold.webp' },
  { key: 'max-rpt', label: 'Max RTP', shortLabel: 'Max...', iconName: 'Banknote', emoji: '💵', iconImage: '/icons/slots/max-rtp.webp' },
]

export interface SlotProviderOption {
  key: string
  label: string
  logo?: string
}

export const SLOT_PROVIDERS: SlotProviderOption[] = [
  { key: 'all', label: 'All' },
  { key: 'PG', label: 'PG', logo: '/images/providers/pg.webp' },
  { key: 'JILI', label: 'JILI', logo: '/images/providers/jili.webp' },
  { key: 'PP', label: 'PP', logo: '/images/providers/pp.webp' },
  { key: 'CQ9', label: 'CQ9', logo: '/images/providers/cq9.webp' },
  { key: 'JDB', label: 'JDB', logo: '/images/providers/jdb.webp' },
  { key: 'Red Tiger', label: 'Red Tiger', logo: '/images/providers/red-tiger.webp' },
]

export const normalizeSlotProvider = (provider: string): string => {
  const p = (provider || '').trim().toLowerCase()
  if (p === 'pp' || p === 'pragmatic play' || p === 'pragmatic') return 'pp'
  if (p === 'pg' || p === 'pg soft') return 'pg'
  if (p === 'jdb' || p === 'jpg') return 'jdb'
  if (p === 'jili') return 'jili'
  if (p === 'cq9') return 'cq9'
  if (p === 'red tiger' || p === 'redtiger' || p === 'unknown') return 'red tiger'
  return p
}

export const getSlotProviderLogo = (provider: string): string => {
  const norm = normalizeSlotProvider(provider)
  if (norm === 'pp') return '/images/providers/pp.webp'
  if (norm === 'pg') return '/images/providers/pg.webp'
  if (norm === 'jdb') return '/images/providers/jdb.webp'
  if (norm === 'jili') return '/images/providers/jili.webp'
  if (norm === 'cq9') return '/images/providers/cq9.webp'
  if (norm === 'red tiger') return '/images/providers/red-tiger.webp'
  return ''
}

export const normalizeSlotCategory = (param: string): string => {
  const p = (param || '').toLowerCase()
  if (p === 'bonus' || p === 'bonuses') return 'bonus'
  if (p === 'top-pick' || p === 'top-picks') return 'top-pick'
  if (p === 'max-rpt' || p === 'max-rtp') return 'max-rpt'
  return p
}

export const isGameInSlotCategory = (game: SlotGame, categoryKey: string): boolean => {
  const target = normalizeSlotCategory(categoryKey)
  const gameCat = normalizeSlotCategory(game.category || '')

  if (target === 'bonus') {
    return gameCat === 'bonus'
  }
  if (target === 'top-pick') {
    return gameCat === 'top-pick'
  }
  if (target === 'top') {
    return gameCat === 'top' || (game.livePlayers !== undefined && game.livePlayers > 0)
  }
  if (target === 'new') {
    return gameCat === 'new' || Boolean(game.new) || game.badge === 'NEW'
  }
  if (target === 'hot') {
    return gameCat === 'hot' || Boolean(game.hotPercent)
  }
  if (target === 'cold') {
    return gameCat === 'cold' || Boolean(game.coldPercent)
  }
  if (target === 'max-rpt') {
    return gameCat === 'max-rpt' || Boolean(game.rtpPercent)
  }

  return gameCat === target
}

const slotsBatch1: SlotGame[] = [
{
    "id": "super-ace",
    "title": "Super Ace",
    "provider": "JILI",
    "image": "/images/slots/super-ace.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-ace-deluxe",
    "title": "Super Ace Deluxe",
    "provider": "JILI",
    "image": "/images/slots/super-ace-deluxe.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-ace",
    "title": "Wild Ace",
    "provider": "JILI",
    "image": "/images/slots/wild-ace.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-bronco",
    "title": "Wild Bronco",
    "provider": "JDB",
    "image": "/images/slots/wild-bronco.webp",
    "category": "bonuses",
    "new": true,
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "fortune-gems",
    "title": "Fortune Gems",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-gems-2",
    "title": "Fortune Gems 2",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-empire",
    "title": "Golden Empire",
    "provider": "JILI",
    "image": "/images/slots/golden-empire.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sugar-rush",
    "title": "Sugar Rush",
    "provider": "PP",
    "image": "/images/slots/sugar-rush.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "super-ace-2",
    "title": "Super Ace 2",
    "provider": "JILI",
    "image": "/images/slots/super-ace-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "party-ape",
    "title": "Party Ape",
    "provider": "JILI",
    "image": "/images/slots/party-ape.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sweet-bonanza-1000",
    "title": "Sweet Bonanza 1000",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-1000.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "money-coming",
    "title": "Money Coming",
    "provider": "JILI",
    "image": "/images/slots/money-coming.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mega-ace",
    "title": "Mega Ace",
    "provider": "JILI",
    "image": "/images/slots/mega-ace.webp",
    "category": "bonuses",
    "Jackpot":true,
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gates-of-olympus-super-scatter",
    "title": "Gates of Olympus Super Scatter",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus-super-scatter.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "3-super-ace",
    "title": "3 Super Ace",
    "provider": "JILI",
    "image": "/images/slots/3-super-ace.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "circus-joker-4096",
    "title": "Circus Joker 4096",
    "provider": "JILI",
    "image": "/images/slots/circus-joker-4096.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "4096",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gates-of-hades",
    "title": "Gates of Hades",
    "provider": "PP",
    "image": "/images/slots/gates-of-hades.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pirate-queen-2",
    "title": "Pirate Queen 2",
    "provider": "JILI",
    "image": "/images/slots/pirate-queen-2.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "5-lions-megaways",
    "title": "5 Lions Megaways",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "voyage-of-daring-queen-x-lock",
    "title": "Voyage of Daring Queen X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-daring-queen-x-lock.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "3-coin-treasures-2",
    "title": "3 Coin Treasures 2",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures-2.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "crazy777",
    "title": "Crazy777",
    "provider": "JILI",
    "image": "/images/slots/crazy777.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-west-gold-blazing-bounty",
    "title": "Wild West Gold Blazing Bounty",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold-blazing-bounty.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-olympus",
    "title": "Gates of Olympus",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pirate-queen",
    "title": "Pirate Queen",
    "provider": "JILI",
    "Jackpot":true,
    "image": "/images/slots/pirate-queen.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "bandit-megaways",
    "title": "Bandit Megaways",
    "provider": "PP",
    "image": "/images/slots/bandit-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza",
    "title": "Sweet Bonanza",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "neko-fortune",
    "title": "Neko Fortune",
    "provider": "JILI",
    "image": "/images/slots/neko-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ali-baba",
    "title": "Ali Baba",
    "provider": "JILI",
    "image": "/images/slots/ali-baba.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-joker",
    "title": "Golden Joker",
    "provider": "JILI",
    "image": "/images/slots/golden-joker.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "money-coming-expand-bets",
    "title": "Money Coming Expand Bets",
    "provider": "JILI",
    "image": "/images/slots/money-coming-expand-bets.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "boxing-king-title-match",
    "title": "Boxing King Title Match",
    "provider": "JILI",
    "image": "/images/slots/boxing-king-title-match.webp",
    "category": "bonuses",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "elemental-link-fire",
    "title": "Elemental Link Fire",
    "provider": "JDB",
    "image": "/images/slots/elemental-link-fire.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "blossom-of-wealth",
    "title": "Blossom of Wealth",
    "provider": "JDB",
    "image": "/images/slots/blossom-of-wealth.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "lucky-jaguar",
    "title": "Lucky Jaguar",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "vampy-party",
    "title": "Vampy Party",
    "provider": "PP",
    "image": "/images/slots/vampy-party.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "golden-empire-2",
    "title": "Golden Empire 2",
    "provider": "JILI",
    "image": "/images/slots/golden-empire-2.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wisdom-of-athena-1000",
    "title": "Wisdom of Athena 1000",
    "provider": "PP",
    "image": "/images/slots/wisdom-of-athena-1000.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bone-fortune",
    "title": "Bone Fortune",
    "provider": "JILI",
    "image": "/images/slots/bone-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "big-bass-bonanza-keeping-it-reel",
    "title": "Big Bass Bonanza - Keeping it Reel",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-keeping-it-reel.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-princess",
    "title": "Starlight Princess",
    "provider": "PP",
    "image": "/images/slots/starlight-princess.webp",
    "category": "bonuses",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "teeed-up",
    "title": "TEEED UP!",
    "provider": "JDB",
    "image": "/images/slots/teeed-up.webp",
    "category": "bonuses",
    "new": true,
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "3-charge-buffalo",
    "title": "3 Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/3-charge-buffalo.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-goldbricks",
    "title": "Lucky Goldbricks",
    "provider": "JILI",
    "image": "/images/slots/lucky-goldbricks.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "candy-blitz-bombs",
    "title": "Candy Blitz Bombs",
    "provider": "PP",
    "image": "/images/slots/candy-blitz-bombs.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mayan-empire",
    "title": "Mayan Empire",
    "provider": "JILI",
    "image": "/images/slots/mayan-empire.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortunepig",
    "title": "FortunePig",
    "provider": "JILI",
    "image": "/images/slots/fortunepig.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "charge-buffalo",
    "title": "Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/charge-buffalo.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "romax",
    "title": "RomaX",
    "provider": "JILI",
    "image": "/images/slots/romax.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gates-of-olympus-xmas-1000",
    "title": "Gates of Olympus Xmas 1000",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus-xmas-1000.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "shogun",
    "title": "Shogun",
    "provider": "JILI",
    "image": "/images/slots/shogun.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "shanghai-beauty",
    "title": "Shanghai Beauty",
    "provider": "JILI",
    "image": "/images/slots/shanghai-beauty.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ragnarok-thor-vs-loki",
    "title": "Ragnarok : Thor VS Loki",
    "provider": "JDB",
    "image": "/images/slots/ragnarok-thor-vs-loki.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "cash-bonanza",
    "title": "Cash Bonanza",
    "provider": "PP",
    "image": "/images/slots/cash-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bonus-hunter",
    "title": "Bonus Hunter",
    "provider": "JILI",
    "image": "/images/slots/bonus-hunter.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "10-sparkling-crown",
    "title": "10 Sparkling Crown",
    "provider": "JILI",
    "image": "/images/slots/10-sparkling-crown.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "resurrecting-riches",
    "title": "Resurrecting Riches",
    "provider": "PP",
    "image": "/images/slots/resurrecting-riches.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fortune-treasure",
    "title": "Fortune Treasure",
    "provider": "JDB",
    "image": "/images/slots/fortune-treasure.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "magic-lamp",
    "title": "Magic Lamp",
    "provider": "JILI",
    "image": "/images/slots/magic-lamp.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sweet-land",
    "title": "Sweet Land",
    "provider": "JILI",
    "image": "/images/slots/sweet-land.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sevensevenseven",
    "title": "SevenSevenSeven",
    "provider": "JILI",
    "image": "/images/slots/sevensevenseven.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "zeus-vs-hades-gods-of-war",
    "title": "Zeus vs Hades - Gods of War",
    "provider": "PP",
    "image": "/images/slots/zeus-vs-hades-gods-of-war.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "clover-coins-4x4",
    "title": "Clover Coins 4x4",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-4x4.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "book-of-monsters",
    "title": "Book of Monsters",
    "provider": "PP",
    "image": "/images/slots/book-of-monsters.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sugar-supreme-powernudge",
    "title": "Sugar Supreme Powernudge",
    "provider": "PP",
    "image": "/images/slots/sugar-supreme-powernudge.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "coin-of-lightning",
    "title": "Coin of Lightning",
    "provider": "JILI",
    "image": "/images/slots/coin-of-lightning.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fire-stampede",
    "title": "Fire Stampede",
    "provider": "PP",
    "image": "/images/slots/fire-stampede.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "billionaire",
    "title": "Billionaire",
    "provider": "JDB",
    "image": "/images/slots/billionaire.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "wild-racer",
    "title": "Wild Racer",
    "provider": "JILI",
    "image": "/images/slots/wild-racer.webp",
    "category": "bonuses",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "clover-coins-3x3",
    "title": "Clover Coins 3x3",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-3x3.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-tree",
    "title": "Fortune Tree",
    "provider": "JILI",
    "image": "/images/slots/fortune-tree.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-rich",
    "title": "Super Rich",
    "provider": "JILI",
    "image": "/images/slots/super-rich.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "twin-wins",
    "title": "TWIN WINS",
    "provider": "JILI",
    "image": "/images/slots/twin-wins.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "king-arthur",
    "title": "King Arthur",
    "provider": "JILI",
    "image": "/images/slots/king-arthur.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sweet-magic",
    "title": "Sweet Magic",
    "provider": "JILI",
    "image": "/images/slots/sweet-magic.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gold-rush",
    "title": "Gold Rush",
    "provider": "JILI",
    "image": "/images/slots/gold-rush.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "jungle-king",
    "title": "Jungle King",
    "provider": "JILI",
    "image": "/images/slots/jungle-king.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "bubble-beauty",
    "title": "Bubble Beauty",
    "provider": "JILI",
    "image": "/images/slots/bubble-beauty.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-west-duels",
    "title": "Wild West Duels",
    "provider": "PP",
    "image": "/images/slots/wild-west-duels.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "master-tiger",
    "Jackpot":true,
    "title": "Master Tiger",
    "provider": "JILI",
    "image": "/images/slots/master-tiger.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-bank",
    "title": "Golden Bank",
    "provider": "JILI",
    "image": "/images/slots/golden-bank.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "devil-fire-twins",
    "title": "Devil Fire Twins",
    "provider": "JILI",
    "image": "/images/slots/devil-fire-twins.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fruity-treats",
    "title": "Fruity Treats",
    "provider": "PP",
    "image": "/images/slots/fruity-treats.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "blitz-super-wheel",
    "title": "Blitz Super Wheel",
    "provider": "PP",
    "image": "/images/slots/blitz-super-wheel.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-bonanza-megaways",
    "title": "Big Bass Bonanza Megaways",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-megaways.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fa-fa-fa",
    "title": "Fa Fa Fa",
    "provider": "JILI",
    "image": "/images/slots/fa-fa-fa.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-jaguar-2",
    "title": "Lucky Jaguar 2",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "buffalo-king-megaways",
    "title": "Buffalo King Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "crazy777-2",
    "title": "Crazy777 2",
    "provider": "JILI",
    "image": "/images/slots/crazy777-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wheel-o-gold",
    "title": "Wheel O'Gold",
    "provider": "PP",
    "image": "/images/slots/wheel-o-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-west-gold",
    "title": "Wild West Gold",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "samba",
    "title": "Samba",
    "provider": "JILI",
    "image": "/images/slots/samba.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-beach-party",
    "title": "Wild Beach Party",
    "provider": "PP",
    "image": "/images/slots/wild-beach-party.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hot-to-burn-hold-and-spin",
    "title": "Hot to Burn Hold and Spin",
    "provider": "PP",
    "image": "/images/slots/hot-to-burn-hold-and-spin.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-coming",
    "title": "Lucky Coming",
    "provider": "JILI",
    "image": "/images/slots/lucky-coming.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "day-of-dead",
    "title": "Day of Dead",
    "provider": "PP",
    "image": "/images/slots/day-of-dead.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gem-fire-fortune",
    "title": "Gem Fire Fortune",
    "provider": "PP",
    "image": "/images/slots/gem-fire-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mining-rush",
    "title": "Mining Rush",
    "provider": "PP",
    "image": "/images/slots/mining-rush.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "volcano-goddess",
    "title": "Volcano Goddess",
    "provider": "PP",
    "image": "/images/slots/volcano-goddess.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "3-coin-wild-horse",
    "title": "3 Coin Wild Horse",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-horse.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-coin-wild-tiger",
    "title": "3 Coin Wild Tiger",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-tiger.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mining-rush-2",
    "title": "Mining Rush",
    "provider": "PP",
    "image": "/images/slots/mining-rush-2.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "voyage-of-blast-raider-x-lock",
    "title": "Voyage of Blast Raider X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-blast-raider-x-lock.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "book-of-gold",
    "title": "Book of Gold",
    "provider": "JILI",
    "image": "/images/slots/book-of-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "starz-megaways",
    "title": "Starz Megaways",
    "provider": "PP",
    "image": "/images/slots/starz-megaways.webp",
    "category": "bonuses",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fruit-party-2",
    "title": "Fruit Party 2",
    "provider": "PP",
    "image": "/images/slots/fruit-party-2.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cash-elevator",
    "title": "Cash Elevator",
    "provider": "PP",
    "image": "/images/slots/cash-elevator.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lantern-wealth",
    "title": "Lantern Wealth",
    "provider": "JDB",
    "image": "/images/slots/lantern-wealth.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "rooster-in-love",
    "title": "Rooster In Love",
    "provider": "JDB",
    "image": "/images/slots/rooster-in-love.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "fortunehorse",
    "title": "FortuneHorse",
    "provider": "JDB",
    "image": "/images/slots/fortunehorse.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "treasure-quest",
    "title": "Treasure Quest",
    "provider": "JILI",
    "image": "/images/slots/treasure-quest.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "party-night",
    "title": "Party Night",
    "provider": "JILI",
    "image": "/images/slots/party-night.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-wild-joker",
    "title": "Wild Wild Joker",
    "provider": "PP",
    "image": "/images/slots/wild-wild-joker.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wonder-elephant",
    "title": "Wonder Elephant",
    "provider": "JDB",
    "image": "/images/slots/wonder-elephant.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "flirting-scholar-tang",
    "title": "Flirting Scholar Tang",
    "provider": "JDB",
    "image": "/images/slots/flirting-scholar-tang.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "agent-ace",
    "title": "Agent Ace",
    "provider": "JILI",
    "image": "/images/slots/agent-ace.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "thor-x",
    "title": "Thor X",
    "provider": "JILI",
    "image": "/images/slots/thor-x.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-queen",
    "title": "Golden Queen",
    "provider": "JILI",
    "image": "/images/slots/golden-queen.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "20-blazing-clover",
    "title": "20 Blazing Clover",
    "provider": "JILI",
    "image": "/images/slots/20-blazing-clover.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "cleocatra",
    "title": "Cleocatra",
    "provider": "PP",
    "image": "/images/slots/cleocatra.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-powernudge",
    "title": "Sweet Powernudge",
    "provider": "PP",
    "image": "/images/slots/sweet-powernudge.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hot-pepper",
    "title": "Hot Pepper",
    "provider": "PP",
    "image": "/images/slots/hot-pepper.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mustang-gold-megaways",
    "title": "Mustang Gold Megaways",
    "provider": "PP",
    "image": "/images/slots/mustang-gold-megaways.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "world-cup",
    "title": "World Cup",
    "provider": "JILI",
    "image": "/images/slots/world-cup.webp",
    "category": "bonuses",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-bank-2",
    "title": "Golden Bank 2",
    "provider": "JILI",
    "image": "/images/slots/golden-bank-2.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-caramelo",
    "title": "Lucky Caramelo",
    "provider": "JILI",
    "image": "/images/slots/lucky-caramelo.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "monster-superlanche",
    "title": "Monster Superlanche",
    "provider": "PP",
    "image": "/images/slots/monster-superlanche.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "treasure-wild",
    "title": "Treasure Wild",
    "provider": "PP",
    "image": "/images/slots/treasure-wild.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "buffalo-king-untamed-megaways",
    "title": "Buffalo King Untamed Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-untamed-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "winning-mask",
    "title": "Winning Mask",
    "provider": "JDB",
    "image": "/images/slots/winning-mask.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "happy-taxi",
    "title": "Happy Taxi",
    "provider": "JILI",
    "image": "/images/slots/happy-taxi.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "safari-mystery",
    "title": "Safari Mystery",
    "provider": "JILI",
    "image": "/images/slots/safari-mystery.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fruity-wheel",
    "title": "Fruity Wheel",
    "provider": "JILI",
    "image": "/images/slots/fruity-wheel.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "strawberry-cocktail",
    "title": "Strawberry Cocktail",
    "provider": "PP",
    "image": "/images/slots/strawberry-cocktail.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fortune-of-giza",
    "title": "Fortune of Giza",
    "provider": "PP",
    "image": "/images/slots/fortune-of-giza.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "egyptian-fortunes",
    "title": "Egyptian Fortunes",
    "provider": "PP",
    "image": "/images/slots/egyptian-fortunes.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gems-bonanza",
    "title": "Gems Bonanza",
    "provider": "PP",
    "image": "/images/slots/gems-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "heart-of-cleopatra",
    "title": "Heart of Cleopatra",
    "provider": "PP",
    "image": "/images/slots/heart-of-cleopatra.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza-xmas",
    "title": "Sweet Bonanza Xmas",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-xmas.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "5-lions-megaways-2",
    "title": "5 Lions Megaways 2",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways-2.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "3-lucky-lion",
    "title": "3 Lucky Lion",
    "provider": "JILI",
    "image": "/images/slots/3-lucky-lion.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "big-bass-secrets-of-the-golden-lake",
    "title": "Big Bass Secrets of the Golden Lake",
    "provider": "PP",
    "image": "/images/slots/big-bass-secrets-of-the-golden-lake.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-bison",
    "title": "Release the Bison",
    "provider": "PP",
    "image": "/images/slots/release-the-bison.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "emerald-king",
    "title": "Emerald King",
    "provider": "PP",
    "image": "/images/slots/emerald-king.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gem-elevator",
    "title": "Gem Elevator",
    "provider": "PP",
    "image": "/images/slots/gem-elevator.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bow-of-artemis",
    "title": "Bow of Artemis",
    "provider": "PP",
    "image": "/images/slots/bow-of-artemis.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "jackpot-hunter",
    "title": "Jackpot Hunter",
    "provider": "PP",
    "image": "/images/slots/jackpot-hunter.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "book-of-golden-sands",
    "title": "Book of Golden Sands",
    "provider": "PP",
    "image": "/images/slots/book-of-golden-sands.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mystic-chief",
    "title": "Mystic Chief",
    "provider": "PP",
    "image": "/images/slots/mystic-chief.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mjolnir",
    "title": "Mjolnir",
    "provider": "JDB",
    "image": "/images/slots/mjolnir.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "xiyangyang",
    "title": "XiYangYang",
    "provider": "JDB",
    "image": "/images/slots/xiyangyang.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "lucky-doggy",
    "title": "Lucky Doggy",
    "provider": "JILI",
    "image": "/images/slots/lucky-doggy.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-witch-s-lamp",
    "title": "3 Witch's Lamp",
    "provider": "JILI",
    "image": "/images/slots/3-witch-s-lamp.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "barn-festival",
    "title": "Barn Festival",
    "provider": "PP",
    "image": "/images/slots/barn-festival.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "jungle-gorilla",
    "title": "Jungle Gorilla",
    "provider": "PP",
    "image": "/images/slots/jungle-gorilla.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-christmas",
    "title": "Starlight Christmas",
    "provider": "PP",
    "image": "/images/slots/starlight-christmas.webp",
    "category": "bonuses",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-kraken-megawaystm",
    "title": "Release the Kraken Megaways™",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-megawaystm.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "chin-shi-huang",
    "title": "Chin Shi Huang",
    "provider": "JILI",
    "image": "/images/slots/chin-shi-huang.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-coin-treasures",
    "title": "3 Coin Treasures",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "pharaoh-treasure",
    "title": "Pharaoh Treasure",
    "provider": "JILI",
    "image": "/images/slots/pharaoh-treasure.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "the-dragon-tiger",
    "title": "The Dragon Tiger",
    "provider": "PP",
    "image": "/images/slots/the-dragon-tiger.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gods-of-giza",
    "title": "Gods of Giza",
    "provider": "PP",
    "image": "/images/slots/gods-of-giza.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "moleionaire",
    "title": "Moleionaire",
    "provider": "PP",
    "image": "/images/slots/moleionaire.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "forging-wilds",
    "title": "Forging Wilds",
    "provider": "PP",
    "image": "/images/slots/forging-wilds.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa",
    "title": "Santa",
    "provider": "PP",
    "image": "/images/slots/santa.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "towering-fortunes",
    "title": "Towering Fortunes",
    "provider": "PP",
    "image": "/images/slots/towering-fortunes.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "eternal-empress-freeze-time",
    "title": "Eternal Empress - Freeze Time",
    "provider": "PP",
    "image": "/images/slots/eternal-empress-freeze-time.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "star-bounty",
    "title": "Star Bounty",
    "provider": "PP",
    "image": "/images/slots/star-bounty.webp",
    "category": "bonuses",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-red-queen",
    "title": "The Red Queen",
    "provider": "PP",
    "image": "/images/slots/the-red-queen.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-wild-riches-megaways",
    "title": "Wild Wild Riches Megaways",
    "provider": "PP",
    "image": "/images/slots/wild-wild-riches-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-llama-adventure",
    "title": "The Llama Adventure",
    "provider": "JDB",
    "image": "/images/slots/the-llama-adventure.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "new-year",
    "title": "New Year",
    "provider": "JDB",
    "image": "/images/slots/new-year.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "gorilla-mayhem",
    "title": "Gorilla Mayhem",
    "provider": "PP",
    "image": "/images/slots/gorilla-mayhem.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "5-lions-dance",
    "title": "5 Lions Dance",
    "provider": "PP",
    "image": "/images/slots/5-lions-dance.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mahjong-panda",
    "title": "Mahjong Panda",
    "provider": "PP",
    "image": "/images/slots/mahjong-panda.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mahjong-wins-bonus",
    "title": "Mahjong Wins Bonus",
    "provider": "PP",
    "image": "/images/slots/mahjong-wins-bonus.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "moonshot",
    "title": "Moonshot",
    "provider": "PP",
    "image": "/images/slots/moonshot.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "amazing-money-machine",
    "title": "Amazing Money Machine",
    "provider": "PP",
    "image": "/images/slots/amazing-money-machine.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-floats-my-boat",
    "title": "Big Bass Floats My Boat",
    "provider": "PP",
    "image": "/images/slots/big-bass-floats-my-boat.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-burger-load-it-up-with-xtra-cheese",
    "title": "Big Burger Load it up with Xtra cheese",
    "provider": "PP",
    "image": "/images/slots/big-burger-load-it-up-with-xtra-cheese.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-valhalla",
    "title": "Gates of Valhalla",
    "provider": "PP",
    "image": "/images/slots/gates-of-valhalla.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "drago-jewels-of-fortune",
    "title": "Drago - Jewels of Fortune",
    "provider": "PP",
    "image": "/images/slots/drago-jewels-of-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aladdin-and-the-sorcerer",
    "title": "Aladdin and the Sorcerer",
    "provider": "PP",
    "image": "/images/slots/aladdin-and-the-sorcerer.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-aztec",
    "title": "Gates of Aztec",
    "provider": "PP",
    "image": "/images/slots/gates-of-aztec.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "money-stacks",
    "title": "Money Stacks",
    "provider": "PP",
    "image": "/images/slots/money-stacks.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-big-dawgs",
    "title": "The Big Dawgs",
    "provider": "PP",
    "image": "/images/slots/the-big-dawgs.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "busy-bees",
    "title": "Busy Bees",
    "provider": "PP",
    "image": "/images/slots/busy-bees.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bonanza-gold",
    "title": "Bonanza Gold",
    "provider": "PP",
    "image": "/images/slots/bonanza-gold.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "candy-village",
    "title": "Candy Village",
    "provider": "PP",
    "image": "/images/slots/candy-village.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "chicken-drop",
    "title": "Chicken Drop",
    "provider": "PP",
    "image": "/images/slots/chicken-drop.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-great-chicken-escape",
    "title": "The Great Chicken Escape",
    "provider": "PP",
    "image": "/images/slots/the-great-chicken-escape.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "candy-jar-clusters",
    "title": "Candy Jar Clusters",
    "provider": "PP",
    "image": "/images/slots/candy-jar-clusters.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-kingdom",
    "title": "Sweet Kingdom",
    "provider": "PP",
    "image": "/images/slots/sweet-kingdom.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gears-of-horus",
    "title": "Gears of Horus",
    "provider": "PP",
    "image": "/images/slots/gears-of-horus.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "colossal-cash-zone",
    "title": "Colossal Cash Zone",
    "provider": "PP",
    "image": "/images/slots/colossal-cash-zone.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "crank-it-up",
    "title": "Crank It Up",
    "provider": "PP",
    "image": "/images/slots/crank-it-up.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "devilicious",
    "title": "Devilicious",
    "provider": "PP",
    "image": "/images/slots/devilicious.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-muttley-crew",
    "title": "The Dog House – Muttley Crew",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-muttley-crew.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-royal-hunt",
    "title": "The Dog House Royal Hunt",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-royal-hunt.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-dog-or-alive",
    "title": "The Dog House Dog or Alive",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-dog-or-alive.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-multihold",
    "title": "The Dog House Multihold",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-multihold.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dragon-hero",
    "title": "Dragon Hero",
    "provider": "PP",
    "image": "/images/slots/dragon-hero.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "drill-that-gold",
    "title": "Drill that Gold",
    "provider": "PP",
    "image": "/images/slots/drill-that-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "8-dragons",
    "title": "8 Dragons",
    "provider": "PP",
    "image": "/images/slots/8-dragons.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "emerald-king-rainbow-road",
    "title": "Emerald King Rainbow Road",
    "provider": "PP",
    "image": "/images/slots/emerald-king-rainbow-road.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "empty-the-bank",
    "title": "Empty the Bank",
    "provider": "PP",
    "image": "/images/slots/empty-the-bank.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fire-hot-20",
    "title": "Fire Hot 20",
    "provider": "PP",
    "image": "/images/slots/fire-hot-20.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "candy-corner",
    "title": "Candy Corner",
    "provider": "PP",
    "image": "/images/slots/candy-corner.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fruits-of-the-amazon",
    "title": "Fruits of the Amazon",
    "provider": "PP",
    "image": "/images/slots/fruits-of-the-amazon.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fruit-party",
    "title": "Fruit Party",
    "provider": "PP",
    "image": "/images/slots/fruit-party.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gatot-kaca-s-fury",
    "title": "Gatot Kaca's Fury",
    "provider": "PP",
    "image": "/images/slots/gatot-kaca-s-fury.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-gatot-kaca",
    "title": "Gates of Gatot Kaca",
    "provider": "PP",
    "image": "/images/slots/gates-of-gatot-kaca.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "rabbit-garden",
    "title": "Rabbit Garden",
    "provider": "PP",
    "image": "/images/slots/rabbit-garden.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hercules-and-pegasus",
    "title": "Hercules and Pegasus",
    "provider": "PP",
    "image": "/images/slots/hercules-and-pegasus.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "honey-honey-honey",
    "title": "Honey Honey Honey",
    "provider": "PP",
    "image": "/images/slots/honey-honey-honey.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "african-elephant",
    "title": "African Elephant",
    "provider": "PP",
    "image": "/images/slots/african-elephant.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-kraken",
    "title": "Release the Kraken",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-kraken-2",
    "title": "Release the Kraken 2",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gems-of-serengeti",
    "title": "Gems of Serengeti",
    "provider": "PP",
    "image": "/images/slots/gems-of-serengeti.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "leprechaun-song",
    "title": "Leprechaun Song",
    "provider": "PP",
    "image": "/images/slots/leprechaun-song.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "leprechaun-carol",
    "title": "Leprechaun Carol",
    "provider": "PP",
    "image": "/images/slots/leprechaun-carol.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lobster-bob-s-sea-food-and-win-it",
    "title": "Lobster Bob's Sea Food and Win It",
    "provider": "PP",
    "image": "/images/slots/lobster-bob-s-sea-food-and-win-it.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pinup-girls",
    "title": "Pinup Girls",
    "provider": "PP",
    "image": "/images/slots/pinup-girls.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-magic-cauldron",
    "title": "The Magic Cauldron",
    "provider": "PP",
    "image": "/images/slots/the-magic-cauldron.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mammoth-gold-megaways",
    "title": "Mammoth Gold Megaways",
    "provider": "PP",
    "image": "/images/slots/mammoth-gold-megaways.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "medusa-s-stone",
    "title": "Medusa’s Stone",
    "provider": "PP",
    "image": "/images/slots/medusa-s-stone.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "blade-fangs",
    "title": "Blade & Fangs",
    "provider": "PP",
    "image": "/images/slots/blade-fangs.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "yeti-quest",
    "title": "Yeti Quest",
    "provider": "PP",
    "image": "/images/slots/yeti-quest.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hand-of-midas-2",
    "title": "Hand of Midas 2",
    "provider": "PP",
    "image": "/images/slots/hand-of-midas-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wukong-rush",
    "title": "Wukong Rush",
    "provider": "PP",
    "image": "/images/slots/wukong-rush.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mighty-munching-melons",
    "title": "Mighty Munching Melons",
    "provider": "PP",
    "image": "/images/slots/mighty-munching-melons.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mochimon",
    "title": "Mochimon",
    "provider": "PP",
    "image": "/images/slots/mochimon.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pirate-golden-age",
    "title": "Pirate Golden Age",
    "provider": "PP",
    "image": "/images/slots/pirate-golden-age.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "muertos-multiplier-megaways",
    "title": "Muertos Multiplier Megaways",
    "provider": "PP",
    "image": "/images/slots/muertos-multiplier-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "clover-gold",
    "title": "Clover Gold",
    "provider": "PP",
    "image": "/images/slots/clover-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "nile-fortune",
    "title": "Nile Fortune",
    "provider": "PP",
    "image": "/images/slots/nile-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "octobeer-fortunes",
    "title": "Octobeer Fortunes",
    "provider": "PP",
    "image": "/images/slots/octobeer-fortunes.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pyramid-bonanza",
    "title": "Pyramid Bonanza",
    "provider": "PP",
    "image": "/images/slots/pyramid-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "phoenix-forge",
    "title": "Phoenix Forge",
    "provider": "PP",
    "image": "/images/slots/phoenix-forge.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-smash",
    "title": "Aztec Smash",
    "provider": "PP",
    "image": "/images/slots/aztec-smash.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa-s-great-gifts",
    "title": "Santa's Great Gifts",
    "provider": "PP",
    "image": "/images/slots/santa-s-great-gifts.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mystery-mice",
    "title": "Mystery Mice",
    "provider": "PP",
    "image": "/images/slots/mystery-mice.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa-s-xmas-rush",
    "title": "Santa's Xmas Rush",
    "provider": "PP",
    "image": "/images/slots/santa-s-xmas-rush.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "great-rhino",
    "title": "Great Rhino",
    "provider": "PP",
    "image": "/images/slots/great-rhino.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "great-rhino-deluxe",
    "title": "Great Rhino Deluxe",
    "provider": "PP",
    "image": "/images/slots/great-rhino-deluxe.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "rock-vegas",
    "title": "Rock Vegas",
    "provider": "PP",
    "image": "/images/slots/rock-vegas.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "saiyan-maniatm",
    "title": "Saiyan Mania™",
    "provider": "PP",
    "image": "/images/slots/saiyan-maniatm.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa-s-wonderland",
    "title": "Santa's Wonderland",
    "provider": "PP",
    "image": "/images/slots/santa-s-wonderland.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "shining-hot-20",
    "title": "Shining Hot 20",
    "provider": "PP",
    "image": "/images/slots/shining-hot-20.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "heroic-spins",
    "title": "Heroic Spins",
    "provider": "PP",
    "image": "/images/slots/heroic-spins.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-knight-king",
    "title": "The Knight King",
    "provider": "PP",
    "image": "/images/slots/the-knight-king.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "smugglers-cove",
    "title": "Smugglers Cove",
    "provider": "PP",
    "image": "/images/slots/smugglers-cove.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "shield-of-sparta",
    "title": "Shield of Sparta",
    "provider": "PP",
    "image": "/images/slots/shield-of-sparta.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pot-of-fortune",
    "title": "Pot of Fortune",
    "provider": "PP",
    "image": "/images/slots/pot-of-fortune.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "ice-lobster",
    "title": "Ice Lobster",
    "provider": "PP",
    "image": "/images/slots/ice-lobster.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-great-stick-up",
    "title": "The Great Stick-Up",
    "provider": "PP",
    "image": "/images/slots/the-great-stick-up.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "super-x",
    "title": "Super X",
    "provider": "PP",
    "image": "/images/slots/super-x.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sword-of-ares",
    "title": "Sword of Ares",
    "provider": "PP",
    "image": "/images/slots/sword-of-ares.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "trees-of-treasure",
    "title": "Trees of Treasure",
    "provider": "PP",
    "image": "/images/slots/trees-of-treasure.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "black-bull",
    "title": "Black Bull",
    "provider": "PP",
    "image": "/images/slots/black-bull.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-treasure-hunt",
    "title": "Aztec Treasure Hunt",
    "provider": "PP",
    "image": "/images/slots/aztec-treasure-hunt.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-tweety-house",
    "title": "The Tweety House",
    "provider": "PP",
    "image": "/images/slots/the-tweety-house.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-ultimate-5",
    "title": "The Ultimate 5",
    "provider": "PP",
    "image": "/images/slots/the-ultimate-5.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "down-the-rails",
    "title": "Down the Rails",
    "provider": "PP",
    "image": "/images/slots/down-the-rails.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-booster",
    "title": "Wild Booster",
    "provider": "PP",
    "image": "/images/slots/wild-booster.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wildman-super-bonanza",
    "title": "Wildman Super Bonanza",
    "provider": "PP",
    "image": "/images/slots/wildman-super-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-pixies",
    "title": "Wild Pixies",
    "provider": "PP",
    "image": "/images/slots/wild-pixies.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "greedy-wolf",
    "title": "Greedy Wolf",
    "provider": "PP",
    "image": "/images/slots/greedy-wolf.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "christmas-carol-megaways",
    "title": "Christmas Carol Megaways",
    "provider": "PP",
    "image": "/images/slots/christmas-carol-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "year-of-the-dragon-king",
    "title": "Year of the Dragon King",
    "provider": "PP",
    "image": "/images/slots/year-of-the-dragon-king.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cheeky-emperor",
    "title": "Cheeky Emperor",
    "provider": "PP",
    "image": "/images/slots/cheeky-emperor.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dance-party",
    "title": "Dance Party",
    "provider": "PP",
    "image": "/images/slots/dance-party.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "disco-lady",
    "title": "Disco Lady",
    "provider": "PP",
    "image": "/images/slots/disco-lady.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "eye-of-cleopatra",
    "title": "Eye of Cleopatra",
    "provider": "PP",
    "image": "/images/slots/eye-of-cleopatra.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-wild-machine",
    "title": "The Wild Machine",
    "provider": "PP",
    "image": "/images/slots/the-wild-machine.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pirate-gold-deluxe",
    "title": "Pirate Gold Deluxe",
    "provider": "PP",
    "image": "/images/slots/pirate-gold-deluxe.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "rainbow-reels",
    "title": "Rainbow Reels",
    "provider": "PP",
    "image": "/images/slots/rainbow-reels.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "spartan-king",
    "title": "Spartan King",
    "provider": "PP",
    "image": "/images/slots/spartan-king.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "street-racer",
    "title": "Street Racer",
    "provider": "PP",
    "image": "/images/slots/street-racer.webp",
    "category": "bonuses",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "voodoo-magic",
    "title": "Voodoo Magic",
    "provider": "PP",
    "image": "/images/slots/voodoo-magic.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-depths",
    "title": "Wild Depths",
    "provider": "PP",
    "image": "/images/slots/wild-depths.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "congo-cash",
    "title": "Congo Cash",
    "provider": "PP",
    "image": "/images/slots/congo-cash.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "juicy-fruits-multihold",
    "title": "Juicy Fruits Multihold",
    "provider": "PP",
    "image": "/images/slots/juicy-fruits-multihold.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "might-of-ra",
    "title": "Might of Ra",
    "provider": "PP",
    "image": "/images/slots/might-of-ra.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "john-hunter-and-the-aztec-treasure",
    "title": "John Hunter and the Aztec Treasure",
    "provider": "PP",
    "image": "/images/slots/john-hunter-and-the-aztec-treasure.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "magic-journey",
    "title": "Magic Journey",
    "provider": "PP",
    "image": "/images/slots/magic-journey.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-alter-ego",
    "title": "The Alter Ego",
    "provider": "PP",
    "image": "/images/slots/the-alter-ego.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "anime-mecha-megawaystm",
    "title": "Anime Mecha Megaways™",
    "provider": "PP",
    "image": "/images/slots/anime-mecha-megawaystm.webp",
    "category": "bonuses",
    "theme": "Anime",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "triple-pot-gold",
    "title": "Triple Pot Gold",
    "provider": "PP",
    "image": "/images/slots/triple-pot-gold.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-king-megaways",
    "title": "Aztec King Megaways",
    "provider": "PP",
    "image": "/images/slots/aztec-king-megaways.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-hold-spinner-megawaystm",
    "title": "Big Bass Hold & Spinner Megaways™",
    "provider": "PP",
    "image": "/images/slots/big-bass-hold-spinner-megawaystm.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "money-stacks-megawaystm",
    "title": "Money Stacks Megaways™",
    "provider": "PP",
    "image": "/images/slots/money-stacks-megawaystm.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "brick-house-bonanza",
    "title": "Brick House Bonanza",
    "provider": "PP",
    "image": "/images/slots/brick-house-bonanza.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "running-sushi",
    "title": "Running Sushi",
    "provider": "PP",
    "image": "/images/slots/running-sushi.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cash-surge",
    "title": "Cash Surge",
    "provider": "PP",
    "image": "/images/slots/cash-surge.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "chilli-heat-megaways",
    "title": "Chilli Heat Megaways",
    "provider": "PP",
    "image": "/images/slots/chilli-heat-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "crystal-caverns-megaways",
    "title": "Crystal Caverns Megaways",
    "provider": "PP",
    "image": "/images/slots/crystal-caverns-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-megaways",
    "title": "The Dog House Megaways",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "elemental-gems-megaways",
    "title": "Elemental Gems Megaways",
    "provider": "PP",
    "image": "/images/slots/elemental-gems-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "castle-of-fire",
    "title": "Castle of Fire",
    "provider": "PP",
    "image": "/images/slots/castle-of-fire.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "blazing-wilds-megaways",
    "title": "Blazing Wilds Megaways",
    "provider": "PP",
    "image": "/images/slots/blazing-wilds-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "floating-dragon-megaways",
    "title": "Floating Dragon Megaways",
    "provider": "PP",
    "image": "/images/slots/floating-dragon-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "floating-dragon-new-year-festival-ultra-megawaystm-hold-spin",
    "title": "Floating Dragon New Year Festival Ultra Megaways™ Hold & Spin",
    "provider": "PP",
    "image": "/images/slots/floating-dragon-new-year-festival-ultra-megawaystm-hold-spin.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "frogs-bugs",
    "title": "Frogs & Bugs",
    "provider": "PP",
    "image": "/images/slots/frogs-bugs.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fury-of-odin-megaways",
    "title": "Fury of Odin Megaways",
    "provider": "PP",
    "image": "/images/slots/fury-of-odin-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "power-of-thor-megaways",
    "title": "Power of Thor Megaways",
    "provider": "PP",
    "image": "/images/slots/power-of-thor-megaways.webp",
    "category": "bonuses",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "legend-of-heroes-megaways",
    "title": "Legend of Heroes Megaways",
    "provider": "PP",
    "image": "/images/slots/legend-of-heroes-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "revenge-of-loki-megaways",
    "title": "Revenge of Loki Megaways",
    "provider": "PP",
    "image": "/images/slots/revenge-of-loki-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-fishing-megaways",
    "title": "Lucky Fishing Megaways",
    "provider": "PP",
    "image": "/images/slots/lucky-fishing-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "madame-destiny-megaways",
    "title": "Madame Destiny Megaways",
    "provider": "PP",
    "image": "/images/slots/madame-destiny-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mahjong-wins-3-black-scatter",
    "title": "Mahjong Wins 3 - Black Scatter",
    "provider": "PP",
    "image": "/images/slots/mahjong-wins-3-black-scatter.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mahjong-wins-2",
    "title": "Mahjong Wins 2",
    "provider": "PP",
    "image": "/images/slots/mahjong-wins-2.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "barnyard-megahays-megaways",
    "title": "Barnyard Megahays Megaways",
    "provider": "PP",
    "image": "/images/slots/barnyard-megahays-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pompeii-megareels-megaways",
    "title": "Pompeii Megareels Megaways",
    "provider": "PP",
    "image": "/images/slots/pompeii-megareels-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sumo-supreme-megaways",
    "title": "Sumo Supreme Megaways",
    "provider": "PP",
    "image": "/images/slots/sumo-supreme-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "might-of-freya-megawaystm",
    "title": "Might of Freya Megaways™",
    "provider": "PP",
    "image": "/images/slots/might-of-freya-megawaystm.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "raging-waterfall-megaways",
    "title": "Raging Waterfall Megaways",
    "provider": "PP",
    "image": "/images/slots/raging-waterfall-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "ancient-island-megawaystm",
    "title": "Ancient Island Megaways™",
    "provider": "PP",
    "image": "/images/slots/ancient-island-megawaystm.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "old-gold-miner-megaways",
    "title": "Old Gold Miner Megaways",
    "provider": "PP",
    "image": "/images/slots/old-gold-miner-megaways.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pizza-pizza-pizza",
    "title": "PIZZA! PIZZA? PIZZA!",
    "provider": "PP",
    "image": "/images/slots/pizza-pizza-pizza.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "5-rabbits-megaways",
    "title": "5 Rabbits Megaways",
    "provider": "PP",
    "image": "/images/slots/5-rabbits-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "great-rhino-megaways",
    "title": "Great Rhino Megaways",
    "provider": "PP",
    "image": "/images/slots/great-rhino-megaways.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-celebrity-bus-megaways",
    "title": "Wild Celebrity Bus Megaways",
    "provider": "PP",
    "image": "/images/slots/wild-celebrity-bus-megaways.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "rise-of-samurai-megaways-not-available-for-japan-market",
    "title": "Rise of Samurai Megaways  (Not available for Japan market)",
    "provider": "PP",
    "image": "/images/slots/rise-of-samurai-megaways-not-available-for-japan-market.webp",
    "category": "bonuses",
    "theme": "Anime",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dwarf-dragon",
    "title": "Dwarf & Dragon",
    "provider": "PP",
    "image": "/images/slots/dwarf-dragon.webp",
    "category": "bonuses",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "candy-stars",
    "title": "Candy Stars",
    "provider": "PP",
    "image": "/images/slots/candy-stars.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "timber-stacks",
    "title": "Timber Stacks",
    "provider": "PP",
    "image": "/images/slots/timber-stacks.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cowboy-coins",
    "title": "Cowboy Coins",
    "provider": "PP",
    "image": "/images/slots/cowboy-coins.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "witch-heart-megawaystm",
    "title": "Witch Heart Megaways™",
    "provider": "PP",
    "image": "/images/slots/witch-heart-megawaystm.webp",
    "category": "bonuses",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-wild-gang",
    "title": "The Wild Gang",
    "provider": "PP",
    "image": "/images/slots/the-wild-gang.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-west-gold-megaways",
    "title": "Wild West Gold Megaways",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold-megaways.webp",
    "category": "bonuses",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "extra-juicy-megaways",
    "title": "Extra Juicy Megaways",
    "provider": "PP",
    "image": "/images/slots/extra-juicy-megaways.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "yum-yum-powerways",
    "title": "Yum Yum Powerways",
    "provider": "PP",
    "image": "/images/slots/yum-yum-powerways.webp",
    "category": "bonuses",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "zombie-carnival",
    "title": "Zombie Carnival",
    "provider": "PP",
    "image": "/images/slots/zombie-carnival.webp",
    "category": "bonuses",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fortune-gems",
    "title": "Fortune Gems",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/fortune-gems.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "5-lions-megaways",
    "title": "5 Lions Megaways",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/5-lions-megaways.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "money-coming-expand-bets",
    "title": "Money Coming Expand Bets",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/money-coming-expand-bets.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sweet-bonanza",
    "title": "Sweet Bonanza",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/sweet-bonanza.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "blossom-of-wealth",
    "title": "Blossom of Wealth",
    "provider": "JDB",
    "providerLogo": "/images/providers/jdb.webp",
    "image": "/images/slots/blossom-of-wealth.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "crazy777",
    "title": "Crazy777",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/crazy777.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "starlight-princess",
    "title": "Starlight Princess",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/starlight-princess.webp",
    "category": "top-picks",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "super-ace-deluxe",
    "title": "Super Ace Deluxe",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/super-ace-deluxe.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "gates-of-olympus",
    "title": "Gates of Olympus",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/gates-of-olympus.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "5-rabbits-megaways",
    "title": "5 Rabbits Megaways",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/5-rabbits-megaways.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "sugar-rush",
    "title": "Sugar Rush",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/sugar-rush.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "charge-buffalo",
    "title": "Charge Buffalo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/charge-buffalo.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sweet-bonanza-1000",
    "title": "Sweet Bonanza 1000",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/sweet-bonanza-1000.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "super-ace",
    "title": "Super Ace",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/super-ace.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "5-lions-megaways-2",
    "title": "5 Lions Megaways 2",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/5-lions-megaways-2.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "money-coming",
    "title": "Money Coming",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/money-coming.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-gems-2",
    "title": "Fortune Gems 2",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/fortune-gems-2.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "gates-of-hades",
    "title": "Gates of Hades",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/gates-of-hades.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-ace",
    "title": "Wild Ace",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/wild-ace.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-west-gold-blazing-bounty",
    "title": "Wild West Gold Blazing Bounty",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/wild-west-gold-blazing-bounty.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mega-ace",
    "title": "Mega Ace",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/mega-ace.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ali-baba",
    "title": "Ali Baba",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/ali-baba.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-empire",
    "title": "Golden Empire",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/golden-empire.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lucky-jaguar",
    "title": "Lucky Jaguar",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/lucky-jaguar.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "pirate-queen-2",
    "title": "Pirate Queen 2",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/pirate-queen-2.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ways-of-the-qilin",
    "title": "Ways of the Qilin",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/ways-of-the-qilin.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "golden-eggs",
    "title": "Golden Eggs",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/golden-eggs.webp",
    "category": "top-picks",
    "theme": "Foods",
    "Jackpot":true,
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "open-sesame",
    "title": "Open Sesame",
    "provider": "JDB",
    "providerLogo": "/images/providers/jdb.webp",
    "image": "/images/slots/open-sesame.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wild-hot-chilli-reels",
    "title": "Wild Hot Chilli Reels",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/wild-hot-chilli-reels.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "lucky-neko",
    "title": "Lucky Neko",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/lucky-neko.webp",
    "category": "top-picks",
    "theme": "Anime",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "boxing-king",
    "title": "Boxing King",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/boxing-king.webp",
    "category": "top-picks",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "panda-s-fortune",
    "title": "Panda's Fortune",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/panda-s-fortune.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "good-fortune-m",
    "title": "Good Fortune M",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/good-fortune-m.webp",
    "category": "top-picks",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "kong",
    "title": "Kong",
    "provider": "JDB",
    "providerLogo": "/images/providers/jdb.webp",
    "image": "/images/slots/kong.webp",
    "category": "top-picks",
    "theme": "Movie",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "vault-cracker",
    "title": "Vault Cracker",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/vault-cracker.webp",
    "category": "top-picks",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wild-bandito",
    "title": "Wild Bandito",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/wild-bandito.webp",
    "category": "top-picks",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fa-cai-shen2",
    "title": "Fa Cai Shen2",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/fa-cai-shen2.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fa-fa-babies",
    "title": "Fa Fa Babies",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/fa-fa-babies.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-ox",
    "title": "Fortune Ox",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/fortune-ox.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "hotspin",
    "title": "HotSpin",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/hotspin.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-soar-hyper-wild",
    "title": "Dragon Soar - Hyper Wild",
    "provider": "JDB",
    "providerLogo": "/images/providers/jdb.webp",
    "image": "/images/slots/dragon-soar-hyper-wild.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dynamite-riches-megaways",
    "title": "Dynamite Riches Megaways",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dynamite-riches-megaways.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "treasures-of-aztec",
    "title": "Treasures of Aztec",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/treasures-of-aztec.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "sweet-pop",
    "title": "Sweet POP",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/sweet-pop.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "piggy-bank",
    "title": "Piggy Bank",
    "provider": "JDB",
    "providerLogo": "/images/providers/jdb.webp",
    "image": "/images/slots/piggy-bank.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "Jackpot":true,
    "JackpotPrice":3062.32,
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "zeus-lightning-power-reels",
    "title": "Zeus' Lightning Power Reels",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/zeus-lightning-power-reels.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mahjong-ways",
    "title": "Mahjong Ways",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/mahjong-ways.webp",
    "category": "top-picks",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-gems-3",
    "title": "Fortune Gems 3",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/fortune-gems-3.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "money-tree",
    "title": "Money Tree",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/money-tree.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "pinatas-ponies",
    "title": "Pinatas & Ponies",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/pinatas-ponies.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "cocktail-nights",
    "title": "Cocktail Nights",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/cocktail-nights.webp",
    "category": "top-picks",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "charge-buffalo-ascent",
    "title": "Charge Buffalo Ascent",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/charge-buffalo-ascent.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "zeus",
    "title": "Zeus",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/zeus.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-s-luck-megawaystm",
    "title": "Dragon's Luck MegaWays™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-luck-megawaystm.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "speed-winner",
    "title": "Speed Winner",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/speed-winner.webp",
    "category": "top-picks",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "wheel-money",
    "title": "Wheel Money",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/wheel-money.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "bounty-raid-2",
    "title": "Bounty Raid 2",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/bounty-raid-2.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-bounty-showdown",
    "title": "Wild Bounty Showdown",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/wild-bounty-showdown.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "5-god-beasts",
    "title": "5 God Beasts",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/5-god-beasts.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "hoard-of-poseidon",
    "title": "Hoard of Poseidon",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/hoard-of-poseidon.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "asgardian-rising",
    "title": "Asgardian Rising",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/asgardian-rising.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "mummy-s-jewels",
    "title": "Mummy’s Jewels",
    "provider": "PP",
    "providerLogo": "/images/providers/pp.webp",
    "image": "/images/slots/mummy-s-jewels.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fire-chibi-2",
    "title": "Fire Chibi 2",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/fire-chibi-2.webp",
    "category": "top-picks",
    "theme": "Anime",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-s-luck-deluxe",
    "title": "Dragon's Luck Deluxe",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-luck-deluxe.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "midas-fortune",
    "title": "Midas Fortune",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/midas-fortune.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "flower-fortunes",
    "title": "Flower Fortunes",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/flower-fortunes.webp",
    "category": "top-picks",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  }
]

const slotsBatch2: SlotGame[] = [
{
    "id": "dragons-clusterbustertm",
    "title": "Dragons Clusterbuster™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragons-clusterbustertm.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "pinata-wins",
    "title": "Pinata Wins",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/pinata-wins.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "king-kong-shake",
    "title": "King Kong Shake",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/king-kong-shake.webp",
    "category": "top-picks",
    "theme": "Movie",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "diamond-royale",
    "title": "Diamond Royale",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/diamond-royale.webp",
    "category": "top-picks",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-rabbit",
    "title": "Fortune Rabbit",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/fortune-rabbit.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "football-fever-m",
    "title": "Football Fever M",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/football-fever-m.webp",
    "category": "top-picks",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "diamond-blitz",
    "title": "Diamond Blitz",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/diamond-blitz.webp",
    "category": "top-picks",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "anubis-wrath",
    "title": "Anubis Wrath",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/anubis-wrath.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "aladdin-s-lamp",
    "title": "Aladdin's lamp",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/aladdin-s-lamp.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "cash-volt",
    "title": "Cash Volt",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/cash-volt.webp",
    "category": "top-picks",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "zombie-outbreak",
    "title": "Zombie Outbreak",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/zombie-outbreak.webp",
    "category": "top-picks",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "888-cai-shen",
    "title": "888 Cai Shen",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/888-cai-shen.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "bounty-raid",
    "title": "Bounty Raid",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/bounty-raid.webp",
    "category": "top-picks",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "yakuza-honor",
    "title": "Yakuza Honor",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/yakuza-honor.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-ace-joker",
    "title": "Super Ace Joker",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/super-ace-joker.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mr-miser",
    "title": "Mr. Miser",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/mr-miser.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "aztec-spins",
    "title": "Aztec Spins",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/aztec-spins.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "geisha-s-revenge",
    "title": "Geisha's Revenge",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/geisha-s-revenge.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-disco-night",
    "title": "Wild Disco Night",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/wild-disco-night.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "777-super-strike",
    "title": "777 Super Strike",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/777-super-strike.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mr-treasure-s-fortune",
    "title": "Mr. Treasure’s Fortune",
    "provider": "PG",
    "providerLogo": "/images/providers/pg.webp",
    "image": "/images/slots/mr-treasure-s-fortune.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "sung-wukong",
    "title": "Sung Wukong",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/sung-wukong.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "10001-nights",
    "title": "10001 Nights",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/10001-nights.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-coins",
    "title": "Fortune Coins",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/fortune-coins.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "black-wukong",
    "title": "Black Wukong",
    "provider": "CQ9",
    "providerLogo": "/images/providers/cq9.webp",
    "image": "/images/slots/black-wukong.webp",
    "category": "top-picks",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "777-strike",
    "title": "777 Strike",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/777-strike.webp",
    "category": "top-picks",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "super-ace",
    "title": "Super Ace",
    "provider": "JILI",
    "image": "/images/slots/super-ace.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-ace-deluxe",
    "title": "Super Ace Deluxe",
    "provider": "JILI",
    "image": "/images/slots/super-ace-deluxe.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "pinata-wins",
    "title": "Pinata Wins",
    "provider": "PG",
    "image": "/images/slots/pinata-wins.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-bounty-showdown",
    "title": "Wild Bounty Showdown",
    "provider": "PG",
    "image": "/images/slots/wild-bounty-showdown.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-ace",
    "title": "Wild Ace",
    "provider": "JILI",
    "image": "/images/slots/wild-ace.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-bronco",
    "title": "Wild Bronco",
    "provider": "JDB",
    "image": "/images/slots/wild-bronco.webp",
    "category": "top",
    "new": true,
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "fortune-gems",
    "title": "Fortune Gems",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-empire",
    "title": "Golden Empire",
    "provider": "JILI",
    "image": "/images/slots/golden-empire.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-garuda-500",
    "title": "Fortune Garuda 500",
    "provider": "JILI",
    "image": "/images/slots/fortune-garuda-500.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "500",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "party-ape",
    "title": "Party Ape",
    "provider": "JILI",
    "image": "/images/slots/party-ape.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-gems-2",
    "title": "Fortune Gems 2",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-ace-2",
    "title": "Super Ace 2",
    "provider": "JILI",
    "image": "/images/slots/super-ace-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ways-of-the-qilin",
    "title": "Ways of the Qilin",
    "provider": "PG",
    "image": "/images/slots/ways-of-the-qilin.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "sugar-rush",
    "title": "Sugar Rush",
    "provider": "PP",
    "image": "/images/slots/sugar-rush.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza-1000",
    "title": "Sweet Bonanza 1000",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-1000.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mega-ace",
    "title": "Mega Ace",
    "provider": "JILI",
    "image": "/images/slots/mega-ace.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "money-coming",
    "title": "Money Coming",
    "provider": "JILI",
    "image": "/images/slots/money-coming.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mahjong-ways",
    "title": "Mahjong Ways",
    "provider": "PG",
    "image": "/images/slots/mahjong-ways.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "circus-joker-4096",
    "title": "Circus Joker 4096",
    "provider": "JILI",
    "image": "/images/slots/circus-joker-4096.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "4096",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gates-of-olympus-super-scatter",
    "title": "Gates of Olympus Super Scatter",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus-super-scatter.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "treasures-of-aztec",
    "title": "Treasures of Aztec",
    "provider": "PG",
    "image": "/images/slots/treasures-of-aztec.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "3-super-ace",
    "title": "3 Super Ace",
    "provider": "JILI",
    "image": "/images/slots/3-super-ace.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-neko",
    "title": "Lucky Neko",
    "provider": "PG",
    "image": "/images/slots/lucky-neko.webp",
    "category": "top",
    "theme": "Anime",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-bandito",
    "title": "Wild Bandito",
    "provider": "PG",
    "image": "/images/slots/wild-bandito.webp",
    "category": "top",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "5-lions-megaways",
    "title": "5 Lions Megaways",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "open-sesame",
    "title": "Open Sesame",
    "provider": "JDB",
    "image": "/images/slots/open-sesame.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "pirate-queen-2",
    "title": "Pirate Queen 2",
    "provider": "JILI",
    "image": "/images/slots/pirate-queen-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gates-of-hades",
    "title": "Gates of Hades",
    "provider": "PP",
    "image": "/images/slots/gates-of-hades.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "3-coin-treasures-2",
    "title": "3 Coin Treasures 2",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures-2.webp",
    "category": "top",
    "Jackpot":true,
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-gems-3",
    "title": "Fortune Gems 3",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-3.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "boxing-king",
    "title": "Boxing King",
    "provider": "JILI",
    "image": "/images/slots/boxing-king.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "jade-legends",
    "title": "Jade Legends",
    "provider": "PP",
    "image": "/images/slots/jade-legends.webp",
    "category": "top",
    "new": true,
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-hot-chilli-reels",
    "title": "Wild Hot Chilli Reels",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/wild-hot-chilli-reels.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "geisha-s-revenge",
    "title": "Geisha's Revenge",
    "provider": "PG",
    "image": "/images/slots/geisha-s-revenge.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "crazy777",
    "title": "Crazy777",
    "provider": "JILI",
    "image": "/images/slots/crazy777.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-serge",
    "title": "Super Serge",
    "provider": "PP",
    "image": "/images/slots/super-serge.webp",
    "category": "top",
    "new": true,
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-olympus",
    "title": "Gates of Olympus",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mahjong-wilds",
    "title": "Mahjong Wilds",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "money-coming-expand-bets",
    "title": "Money Coming Expand Bets",
    "provider": "JILI",
    "image": "/images/slots/money-coming-expand-bets.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mahjong-wilds-2",
    "title": "Mahjong Wilds 2",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds-2.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "voyage-of-daring-queen-x-lock",
    "title": "Voyage of Daring Queen X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-daring-queen-x-lock.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "boxing-king-title-match",
    "title": "Boxing King Title Match",
    "provider": "JILI",
    "image": "/images/slots/boxing-king-title-match.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "dragon-soar-hyper-wild",
    "title": "Dragon Soar - Hyper Wild",
    "provider": "JDB",
    "image": "/images/slots/dragon-soar-hyper-wild.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "anubis-wrath",
    "title": "Anubis Wrath",
    "provider": "PG",
    "image": "/images/slots/anubis-wrath.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-bounty-deluxe",
    "title": "WILD BOUNTY Deluxe",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-deluxe.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "ali-baba",
    "title": "Ali Baba",
    "provider": "JILI",
    "image": "/images/slots/ali-baba.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "piggy-bank",
    "title": "Piggy Bank",
    "provider": "JDB",
    "image": "/images/slots/piggy-bank.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "cocktail-nights",
    "title": "Cocktail Nights",
    "provider": "PG",
    "image": "/images/slots/cocktail-nights.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "sweet-bonanza",
    "title": "Sweet Bonanza",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "neko-fortune",
    "title": "Neko Fortune",
    "provider": "JILI",
    "image": "/images/slots/neko-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mighty-mania",
    "title": "Mighty Mania",
    "provider": "PG",
    "image": "/images/slots/mighty-mania.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "yakuza-honor",
    "title": "Yakuza Honor",
    "provider": "PG",
    "image": "/images/slots/yakuza-honor.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "sweet-land",
    "title": "Sweet Land",
    "provider": "JILI",
    "image": "/images/slots/sweet-land.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "teeed-up",
    "title": "TEEED UP!",
    "provider": "JDB",
    "image": "/images/slots/teeed-up.webp",
    "category": "top",
    "new": true,
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "vampy-party",
    "title": "Vampy Party",
    "provider": "PP",
    "image": "/images/slots/vampy-party.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "pirate-queen",
    "title": "Pirate Queen",
    "provider": "JILI",
    "image": "/images/slots/pirate-queen.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "phoenix-forge",
    "title": "Phoenix Forge",
    "provider": "PP",
    "image": "/images/slots/phoenix-forge.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bandit-megaways",
    "title": "Bandit Megaways",
    "provider": "JDB",
    "image": "/images/slots/bandit-megaways.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "lucky-jaguar",
    "title": "Lucky Jaguar",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-ox",
    "title": "Fortune Ox",
    "provider": "PG",
    "image": "/images/slots/fortune-ox.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "charge-buffalo",
    "title": "Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/charge-buffalo.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "top-ace",
    "title": "Top Ace",
    "provider": "CQ9",
    "image": "/images/slots/top-ace.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "party-night",
    "title": "Party Night",
    "provider": "JILI",
    "image": "/images/slots/party-night.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "bounty-raid",
    "title": "Bounty Raid",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/bounty-raid.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "dj-neko",
    "title": "DJ Neko",
    "provider": "PP",
    "image": "/images/slots/dj-neko.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "midas-fortune",
    "title": "Midas Fortune",
    "provider": "PG",
    "image": "/images/slots/midas-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "reel-royale-showdown",
    "title": "Reel Royale Showdown",
    "provider": "PG",
    "image": "/images/slots/reel-royale-showdown.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "starlight-princess",
    "title": "Starlight Princess",
    "provider": "PP",
    "image": "/images/slots/starlight-princess.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "super-ace-joker",
    "title": "Super Ace Joker",
    "provider": "JILI",
    "image": "/images/slots/super-ace-joker.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "bone-fortune",
    "title": "Bone Fortune",
    "provider": "JILI",
    "image": "/images/slots/bone-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "asgardian-rising",
    "title": "Asgardian Rising",
    "provider": "PG",
    "image": "/images/slots/asgardian-rising.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-coins",
    "title": "Fortune Coins",
    "provider": "JILI",
    "image": "/images/slots/fortune-coins.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-neko-2",
    "title": "Lucky Neko 2",
    "provider": "CQ9",
    "image": "/images/slots/lucky-neko-2.webp",
    "category": "top",
    "theme": "Anime",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "777-strike",
    "title": "777 Strike",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/777-strike.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "golden-empire-2",
    "title": "Golden Empire 2",
    "provider": "JILI",
    "image": "/images/slots/golden-empire-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "pinatas-ponies",
    "title": "Pinatas & Ponies",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/pinatas-ponies.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "sung-wukong",
    "title": "Sung Wukong",
    "provider": "CQ9",
    "image": "/images/slots/sung-wukong.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "golden-eggs",
    "title": "Golden Eggs",
    "provider": "CQ9",
    "image": "/images/slots/golden-eggs.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "kong",
    "title": "Kong",
    "provider": "JDB",
    "image": "/images/slots/kong.webp",
    "category": "top",
    "theme": "Movie",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "golden-joker",
    "title": "Golden Joker",
    "provider": "JILI",
    "image": "/images/slots/golden-joker.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "crazy-crazy-3",
    "title": "Crazy Crazy 3",
    "provider": "CQ9",
    "image": "/images/slots/crazy-crazy-3.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "legacy-of-olympus",
    "title": "Legacy of Olympus",
    "provider": "CQ9",
    "image": "/images/slots/legacy-of-olympus.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "legacy-of-olympus1000",
    "title": "Legacy of Olympus1000",
    "provider": "CQ9",
    "image": "/images/slots/legacy-of-olympus1000.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1000",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "wild-west-gold-blazing-bounty",
    "title": "Wild West Gold Blazing Bounty",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold-blazing-bounty.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "shaolin-soccer",
    "title": "Shaolin Soccer",
    "provider": "PG",
    "image": "/images/slots/shaolin-soccer.webp",
    "category": "top",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-bandito-2",
    "title": "WILD BANDITO 2",
    "provider": "CQ9",
    "image": "/images/slots/wild-bandito-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "charge-buffalo-ascent",
    "title": "Charge Buffalo Ascent",
    "provider": "JILI",
    "image": "/images/slots/charge-buffalo-ascent.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "elemental-link-fire",
    "title": "Elemental Link Fire",
    "provider": "JDB",
    "image": "/images/slots/elemental-link-fire.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "zeus-vs-hades-gods-of-war",
    "title": "Zeus vs Hades - Gods of War",
    "provider": "PP",
    "image": "/images/slots/zeus-vs-hades-gods-of-war.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "romax",
    "title": "RomaX",
    "provider": "JILI",
    "image": "/images/slots/romax.webp",
    "Jackpot":true,
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "devil-fire-twins",
    "title": "Devil Fire Twins",
    "provider": "JILI",
    "image": "/images/slots/devil-fire-twins.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-gems-legend",
    "title": "Fortune Gems Legend",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-legend.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "blossom-of-wealth",
    "title": "Blossom of Wealth",
    "provider": "JDB",
    "image": "/images/slots/blossom-of-wealth.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "speed-winner",
    "title": "Speed Winner",
    "provider": "PG",
    "image": "/images/slots/speed-winner.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "clover-coins-4x4",
    "title": "Clover Coins 4x4",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-4x4.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "rave-party-fever",
    "title": "Rave Party Fever",
    "provider": "PG",
    "image": "/images/slots/rave-party-fever.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "Pay Anywhere",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "journey-to-the-wealth",
    "title": "Journey to the Wealth",
    "provider": "PG",
    "image": "/images/slots/journey-to-the-wealth.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wisdom-of-athena-1000",
    "title": "Wisdom of Athena 1000",
    "provider": "PP",
    "image": "/images/slots/wisdom-of-athena-1000.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-heist-cashout",
    "title": "Wild Heist Cashout",
    "provider": "PG",
    "image": "/images/slots/wild-heist-cashout.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortunepig",
    "title": "FortunePig",
    "provider": "JILI",
    "image": "/images/slots/fortunepig.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-charge-buffalo",
    "title": "3 Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/3-charge-buffalo.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "treasures-of-aztec-1024",
    "title": "Treasures Of Aztec 1024",
    "provider": "CQ9",
    "image": "/images/slots/treasures-of-aztec-1024.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "mahjong-wins",
    "title": "Mahjong Wins",
    "provider": "JDB",
    "image": "/images/slots/mahjong-wins.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "billionaire",
    "title": "Billionaire",
    "provider": "JDB",
    "image": "/images/slots/billionaire.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "top-ace-2",
    "title": "Top Ace 2",
    "provider": "CQ9",
    "image": "/images/slots/top-ace-2.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "fortune-coins-2",
    "title": "Fortune Coins 2",
    "provider": "JILI",
    "image": "/images/slots/fortune-coins-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "heart-of-cleopatra",
    "title": "Heart of Cleopatra",
    "provider": "PP",
    "image": "/images/slots/heart-of-cleopatra.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "zombie-outbreak",
    "title": "Zombie Outbreak",
    "provider": "PG",
    "image": "/images/slots/zombie-outbreak.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "money-tree",
    "title": "Money Tree",
    "provider": "CQ9",
    "image": "/images/slots/money-tree.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "fortune-treasure",
    "title": "Fortune Treasure",
    "provider": "JDB",
    "image": "/images/slots/fortune-treasure.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "bonus-hunter",
    "title": "Bonus Hunter",
    "provider": "JILI",
    "image": "/images/slots/bonus-hunter.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "candy-blitz-bombs",
    "title": "Candy Blitz Bombs",
    "provider": "PP",
    "image": "/images/slots/candy-blitz-bombs.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "good-fortune-m",
    "title": "Good Fortune M",
    "provider": "CQ9",
    "image": "/images/slots/good-fortune-m.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "vault-cracker",
    "title": "Vault Cracker",
    "provider": "red-tiger",
    "image": "/images/slots/vault-cracker.webp",
    "category": "top",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-ace-super-scatter",
    "title": "Fortune Ace Super Scatter",
    "provider": "PP",
    "image": "/images/slots/fortune-ace-super-scatter.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "werewolf-s-hunt",
    "title": "Werewolf's Hunt",
    "provider": "PG",
    "image": "/images/slots/werewolf-s-hunt.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "sweet-burst",
    "title": "Sweet Burst",
    "provider": "PP",
    "image": "/images/slots/sweet-burst.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-jaguar-2",
    "title": "Lucky Jaguar 2",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ganesha-fortune",
    "title": "Ganesha Fortune",
    "provider": "PG",
    "image": "/images/slots/ganesha-fortune.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "the-dragon-tiger",
    "title": "The Dragon Tiger",
    "provider": "PP",
    "image": "/images/slots/the-dragon-tiger.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "book-of-monsters",
    "title": "Book of Monsters",
    "provider": "PP",
    "image": "/images/slots/book-of-monsters.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "samba-jewel",
    "title": "Samba Jewel",
    "provider": "JDB",
    "image": "/images/slots/samba-jewel.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "3-coin-wild-horse",
    "title": "3 Coin Wild Horse",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-horse.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "big-bass-bonanza-1000",
    "title": "Big Bass Bonanza 1000",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-1000.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "1000",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fire-stampede-2",
    "title": "Fire Stampede 2",
    "provider": "PP",
    "image": "/images/slots/fire-stampede-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "medusa",
    "title": "Medusa",
    "provider": "JILI",
    "image": "/images/slots/medusa.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "dragon-hatch",
    "title": "Dragon Hatch",
    "provider": "PG",
    "image": "/images/slots/dragon-hatch.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "mining-rush",
    "title": "Mining Rush",
    "provider": "PP",
    "image": "/images/slots/mining-rush.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "panda-s-fortune",
    "title": "Panda's Fortune",
    "provider": "PP",
    "image": "/images/slots/panda-s-fortune.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "magic-lamp",
    "title": "Magic Lamp",
    "provider": "JILI",
    "image": "/images/slots/magic-lamp.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "agent-ace",
    "title": "Agent Ace",
    "provider": "JILI",
    "image": "/images/slots/agent-ace.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "jili-caishen",
    "title": "JILI CAISHEN",
    "provider": "JILI",
    "Jackpot":true,
    "image": "/images/slots/jili-caishen.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sevensevenseven",
    "title": "SevenSevenSeven",
    "provider": "JILI",
    "image": "/images/slots/sevensevenseven.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "coin-of-lightning",
    "title": "Coin of Lightning",
    "provider": "JILI",
    "image": "/images/slots/coin-of-lightning.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "chinese-new-year-deluxe",
    "title": "CHINESE NEW YEAR DELUXE",
    "provider": "CQ9",
    "image": "/images/slots/chinese-new-year-deluxe.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "strawberry-cocktail",
    "title": "Strawberry Cocktail",
    "provider": "PP",
    "image": "/images/slots/strawberry-cocktail.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fruit-party-2",
    "title": "Fruit Party 2",
    "provider": "PP",
    "image": "/images/slots/fruit-party-2.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-wild-joker",
    "title": "Wild Wild Joker",
    "provider": "PP",
    "image": "/images/slots/wild-wild-joker.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "twin-wins",
    "title": "TWIN WINS",
    "provider": "JILI",
    "image": "/images/slots/twin-wins.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "mr-treasure-s-fortune",
    "title": "Mr. Treasure’s Fortune",
    "provider": "PG",
    "image": "/images/slots/mr-treasure-s-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "Pay Anywhere",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "mr-miser",
    "title": "Mr. Miser",
    "provider": "CQ9",
    "image": "/images/slots/mr-miser.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "money-coming-2",
    "title": "Money Coming 2",
    "provider": "JILI",
    "image": "/images/slots/money-coming-2.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "treasures-of-aztec-2",
    "title": "Treasures Of Aztec 2",
    "provider": "CQ9",
    "image": "/images/slots/treasures-of-aztec-2.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "mahjong-wilds-3",
    "title": "Mahjong Wilds 3",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds-3.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "dragon-hero",
    "title": "Dragon Hero",
    "provider": "PP",
    "image": "/images/slots/dragon-hero.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "resurrecting-riches",
    "title": "Resurrecting Riches",
    "provider": "PP",
    "image": "/images/slots/resurrecting-riches.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dragonsworld",
    "title": "DragonsWorld",
    "provider": "JDB",
    "image": "/images/slots/dragonsworld.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "samba",
    "title": "Samba",
    "provider": "JILI",
    "image": "/images/slots/samba.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gold-rush",
    "title": "Gold Rush",
    "provider": "JILI",
    "image": "/images/slots/gold-rush.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "sweet-magic",
    "title": "Sweet Magic",
    "provider": "JILI",
    "image": "/images/slots/sweet-magic.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-goldbricks",
    "title": "Lucky Goldbricks",
    "provider": "JILI",
    "image": "/images/slots/lucky-goldbricks.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "crazy777-2",
    "title": "Crazy777 2",
    "provider": "JILI",
    "image": "/images/slots/crazy777-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "the-big-dawgs",
    "title": "The Big Dawgs",
    "provider": "PP",
    "image": "/images/slots/the-big-dawgs.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gates-of-olympus-xmas-1000",
    "title": "Gates of Olympus Xmas 1000",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus-xmas-1000.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dragon-hatch-2",
    "title": "Dragon Hatch 2",
    "provider": "PG",
    "image": "/images/slots/dragon-hatch-2.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "3-lucky-lion",
    "title": "3 Lucky Lion",
    "provider": "JILI",
    "image": "/images/slots/3-lucky-lion.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "casino-spin",
    "title": "Casino Spin",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/casino-spin.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "gems-bonanza",
    "title": "Gems Bonanza",
    "provider": "PP",
    "image": "/images/slots/gems-bonanza.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cruise-royale",
    "title": "Cruise Royale",
    "provider": "PG",
    "image": "/images/slots/cruise-royale.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "master-tiger",
    "title": "Master Tiger",
    "provider": "JILI",
    "image": "/images/slots/master-tiger.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "king-arthur",
    "title": "King Arthur",
    "provider": "JILI",
    "image": "/images/slots/king-arthur.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "golden-bank",
    "title": "Golden Bank",
    "provider": "JILI",
    "image": "/images/slots/golden-bank.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "opera-dynasty",
    "title": "Opera Dynasty",
    "provider": "PG",
    "image": "/images/slots/opera-dynasty.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fa-fa-babies",
    "title": "Fa Fa Babies",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/fa-fa-babies.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fiesta-fortune",
    "title": "Fiesta Fortune",
    "provider": "PP",
    "image": "/images/slots/fiesta-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-kraken-2",
    "title": "Release the Kraken 2",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-2.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "honey-trap-of-diao-chan",
    "title": "Honey Trap of Diao Chan",
    "provider": "PG",
    "image": "/images/slots/honey-trap-of-diao-chan.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "super-rich",
    "title": "Super Rich",
    "provider": "JILI",
    "image": "/images/slots/super-rich.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "elf-bingo",
    "title": "Elf Bingo",
    "provider": "JILI",
    "Jackpot":true,
    "image": "/images/slots/elf-bingo.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "knockout-riches",
    "title": "Knockout Riches",
    "provider": "PG",
    "image": "/images/slots/knockout-riches.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fruity-wheel",
    "title": "Fruity Wheel",
    "provider": "JILI",
    "image": "/images/slots/fruity-wheel.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "captain-s-bounty",
    "title": "Captain\"s Bounty",
    "provider": "PG",
    "image": "/images/slots/captain-s-bounty.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "pharaoh-treasure",
    "title": "Pharaoh Treasure",
    "provider": "JILI",
    "image": "/images/slots/pharaoh-treasure.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "book-of-gold",
    "title": "Book of Gold",
    "provider": "JILI",
    "image": "/images/slots/book-of-gold.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "battleground-royale",
    "title": "Battleground Royale",
    "provider": "PG",
    "image": "/images/slots/battleground-royale.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fruity-candy",
    "title": "Fruity Candy",
    "provider": "PG",
    "image": "/images/slots/fruity-candy.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "jungle-king",
    "title": "Jungle King",
    "provider": "JILI",
    "image": "/images/slots/jungle-king.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fa-cai-shen2",
    "title": "Fa Cai Shen2",
    "provider": "CQ9",
    "image": "/images/slots/fa-cai-shen2.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "golden-bank-2",
    "title": "Golden Bank 2",
    "provider": "JILI",
    "image": "/images/slots/golden-bank-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-bounty-2048",
    "title": "WILD BOUNTY 2048",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-2048.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "2048",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "money-stacks",
    "title": "Money Stacks",
    "provider": "PP",
    "image": "/images/slots/money-stacks.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "7-monkeys",
    "title": "7 Monkeys",
    "provider": "PP",
    "image": "/images/slots/7-monkeys.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "zeus-lightning-power-reels",
    "title": "Zeus' Lightning Power Reels",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/zeus-lightning-power-reels.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "ragnarok-thor-vs-loki",
    "title": "Ragnarok : Thor VS Loki",
    "provider": "JDB",
    "image": "/images/slots/ragnarok-thor-vs-loki.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "mayan-empire",
    "title": "Mayan Empire",
    "provider": "JILI",
    "image": "/images/slots/mayan-empire.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ultimate-striker",
    "title": "Ultimate Striker",
    "provider": "PG",
    "image": "/images/slots/ultimate-striker.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "win-win-won",
    "title": "Win Win Won",
    "provider": "PG",
    "image": "/images/slots/win-win-won.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-disco-night",
    "title": "Wild Disco Night",
    "provider": "CQ9",
    "image": "/images/slots/wild-disco-night.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "shogun",
    "title": "Shogun",
    "provider": "JILI",
    "image": "/images/slots/shogun.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "joker-coins-expanded",
    "title": "Joker Coins Expanded",
    "provider": "JILI",
    "image": "/images/slots/joker-coins-expanded.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-jaguar-500",
    "title": "Lucky Jaguar 500",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar-500.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "circus-delight",
    "title": "Circus Delight",
    "provider": "PG",
    "image": "/images/slots/circus-delight.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "ways-of-the-qilin-ultimate",
    "title": "WAYS OF THE QILIN Ultimate",
    "provider": "CQ9",
    "image": "/images/slots/ways-of-the-qilin-ultimate.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "888-dragons",
    "title": "888 Dragons",
    "provider": "PP",
    "image": "/images/slots/888-dragons.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "trees-of-treasure",
    "title": "Trees of Treasure",
    "provider": "PP",
    "image": "/images/slots/trees-of-treasure.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "voyage-of-blast-raider-x-lock",
    "title": "Voyage of Blast Raider X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-blast-raider-x-lock.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "rooster-in-love",
    "title": "Rooster In Love",
    "provider": "JDB",
    "image": "/images/slots/rooster-in-love.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "mystic-potion",
    "title": "Mystic Potion",
    "provider": "PG",
    "image": "/images/slots/mystic-potion.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "hotspin",
    "title": "HotSpin",
    "provider": "CQ9",
    "image": "/images/slots/hotspin.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "lucky-caramelo",
    "title": "Lucky Caramelo",
    "provider": "JILI",
    "image": "/images/slots/lucky-caramelo.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "bounty-raid-2",
    "title": "Bounty Raid 2",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/bounty-raid-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-s-luck-deluxe",
    "title": "Dragon's Luck Deluxe",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-luck-deluxe.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "day-of-dead",
    "title": "Day of Dead",
    "provider": "PP",
    "image": "/images/slots/day-of-dead.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "blitz-super-wheel",
    "title": "Blitz Super Wheel",
    "provider": "PP",
    "image": "/images/slots/blitz-super-wheel.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza-2500",
    "title": "Sweet Bonanza 2500",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-2500.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-rush-bonanza",
    "title": "Sweet Rush Bonanza",
    "provider": "PP",
    "image": "/images/slots/sweet-rush-bonanza.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cash-elevator",
    "title": "Cash Elevator",
    "provider": "PP",
    "image": "/images/slots/cash-elevator.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-panda",
    "title": "Lucky Panda",
    "provider": "PP",
    "image": "/images/slots/lucky-panda.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "10001-nights",
    "title": "10001 Nights",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/10001-nights.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "number-king",
    "title": "Number King",
    "provider": "JILI",
    "image": "/images/slots/number-king.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "oishi-delights",
    "title": "Oishi Delights",
    "provider": "PG",
    "image": "/images/slots/oishi-delights.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-tree",
    "title": "Fortune Tree",
    "provider": "JILI",
    "image": "/images/slots/fortune-tree.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wild-fireworks",
    "title": "Wild Fireworks",
    "provider": "PG",
    "image": "/images/slots/wild-fireworks.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "hot-dj",
    "title": "Hot DJ",
    "provider": "CQ9",
    "image": "/images/slots/hot-dj.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "midnight-thirst",
    "title": "Midnight Thirst",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/midnight-thirst.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "book-of-golden-sands",
    "title": "Book of Golden Sands",
    "provider": "PP",
    "image": "/images/slots/book-of-golden-sands.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "madame-destiny-megaways",
    "title": "Madame Destiny Megaways",
    "provider": "PP",
    "image": "/images/slots/madame-destiny-megaways.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "spindrift2",
    "title": "Spindrift2",
    "provider": "JDB",
    "image": "/images/slots/spindrift2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "jurassic-kingdom",
    "title": "Jurassic Kingdom",
    "provider": "PG",
    "image": "/images/slots/jurassic-kingdom.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "cash-mania",
    "title": "Cash Mania",
    "provider": "PG",
    "image": "/images/slots/cash-mania.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "legacy-of-egypt",
    "title": "Legacy of Egypt",
    "provider": "JILI",
    "image": "/images/slots/legacy-of-egypt.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "diner-frenzy-spins",
    "title": "Diner Frenzy Spins",
    "provider": "PG",
    "image": "/images/slots/diner-frenzy-spins.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "sweet-pop",
    "title": "Sweet POP",
    "provider": "CQ9",
    "image": "/images/slots/sweet-pop.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "bubble-beauty",
    "title": "Bubble Beauty",
    "provider": "JILI",
    "image": "/images/slots/bubble-beauty.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "dragon-tiger-luck",
    "title": "Dragon Tiger Luck",
    "provider": "PG",
    "image": "/images/slots/dragon-tiger-luck.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-mouse",
    "title": "Fortune Mouse",
    "provider": "PG",
    "image": "/images/slots/fortune-mouse.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "caishen-wins",
    "title": "Caishen Wins",
    "provider": "PG",
    "image": "/images/slots/caishen-wins.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "zeus-vs-hades-gods-of-war-250",
    "title": "Zeus vs Hades Gods of War 250",
    "provider": "PP",
    "image": "/images/slots/zeus-vs-hades-gods-of-war-250.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-princess-super-scatter",
    "title": "Starlight Princess Super Scatter",
    "provider": "PP",
    "image": "/images/slots/starlight-princess-super-scatter.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bingo-mania",
    "title": "Bingo Mania",
    "provider": "PP",
    "image": "/images/slots/bingo-mania.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "Pay Anywhere",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "star-bounty",
    "title": "Star Bounty",
    "provider": "PP",
    "image": "/images/slots/star-bounty.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "diner-delights",
    "title": "Diner Delights",
    "provider": "PG",
    "image": "/images/slots/diner-delights.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "zeus",
    "title": "Zeus",
    "provider": "JILI",
    "image": "/images/slots/zeus.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "coin-tree",
    "title": "Coin Tree",
    "provider": "JILI",
    "image": "/images/slots/coin-tree.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ganesha-gold",
    "title": "Ganesha Gold",
    "provider": "PG",
    "image": "/images/slots/ganesha-gold.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "clover-coins-3x3",
    "title": "Clover Coins 3x3",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-3x3.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "jackpot-joker-fever",
    "title": "Jackpot Joker FEVER",
    "provider": "JILI",
    "image": "/images/slots/jackpot-joker-fever.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-coming",
    "title": "Lucky Coming",
    "provider": "JILI",
    "image": "/images/slots/lucky-coming.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "big-bass-halloween-3",
    "title": "Big Bass Halloween 3",
    "provider": "PP",
    "image": "/images/slots/big-bass-halloween-3.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "you-can-piggy-bank-on-it",
    "title": "You Can Piggy Bank on it",
    "provider": "PP",
    "image": "/images/slots/you-can-piggy-bank-on-it.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wheel-o-gold",
    "title": "Wheel O'Gold",
    "provider": "PP",
    "image": "/images/slots/wheel-o-gold.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fortune-of-olympus",
    "title": "Fortune Of Olympus",
    "provider": "PP",
    "image": "/images/slots/fortune-of-olympus.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "3-magic-eggs",
    "title": "3 Magic Eggs",
    "provider": "PP",
    "image": "/images/slots/3-magic-eggs.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-dice",
    "title": "Lucky Dice",
    "provider": "PP",
    "image": "/images/slots/lucky-dice.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "lucky-tiger-gold",
    "title": "Lucky Tiger Gold",
    "provider": "PP",
    "image": "/images/slots/lucky-tiger-gold.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-wild-chest",
    "title": "Wild Wild Chest",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/wild-wild-chest.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon",
    "title": "Dragon",
    "provider": "JDB",
    "image": "/images/slots/dragon.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "orientanimals",
    "title": "OrientAnimals",
    "provider": "JDB",
    "image": "/images/slots/orientanimals.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "wonder-elephant",
    "title": "Wonder Elephant",
    "provider": "JDB",
    "image": "/images/slots/wonder-elephant.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "fortunehorse",
    "title": "FortuneHorse",
    "provider": "JDB",
    "image": "/images/slots/fortunehorse.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "mermaid-riches",
    "title": "Mermaid Riches",
    "provider": "PG",
    "image": "/images/slots/mermaid-riches.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "mask-carnival",
    "title": "Mask Carnival",
    "provider": "PG",
    "image": "/images/slots/mask-carnival.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "Pay Anywhere",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "the-queen-s-banquet",
    "title": "The Queen’s Banquet",
    "provider": "PG",
    "image": "/images/slots/the-queen-s-banquet.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "lucky-ball",
    "title": "Lucky Ball",
    "provider": "JILI",
    "image": "/images/slots/lucky-ball.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Pay Anywhere",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "thor-x",
    "title": "Thor X",
    "provider": "JILI",
    "image": "/images/slots/thor-x.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "super-golf-drive",
    "title": "Super Golf Drive",
    "provider": "PG",
    "image": "/images/slots/super-golf-drive.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "gladiator-s-glory",
    "title": "Gladiator's Glory",
    "provider": "PG",
    "image": "/images/slots/gladiator-s-glory.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-dragon",
    "title": "Fortune Dragon",
    "provider": "PG",
    "image": "/images/slots/fortune-dragon.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "chicky-run",
    "title": "Chicky Run",
    "provider": "PG",
    "image": "/images/slots/chicky-run.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "graffiti-rush",
    "title": "Graffiti Rush",
    "provider": "PG",
    "image": "/images/slots/graffiti-rush.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "incan-wonders",
    "title": "Incan Wonders",
    "provider": "PG",
    "image": "/images/slots/incan-wonders.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "vampirekiss",
    "title": "VampireKiss",
    "provider": "CQ9",
    "image": "/images/slots/vampirekiss.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "golden-queen",
    "title": "Golden Queen",
    "provider": "JILI",
    "image": "/images/slots/golden-queen.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "supernova",
    "title": "Supernova",
    "provider": "JILI",
    "image": "/images/slots/supernova.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "medusa-ii",
    "title": "Medusa II",
    "provider": "PG",
    "image": "/images/slots/medusa-ii.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "egypt-s-book-of-mystery",
    "title": "Egypt\"s Book of Mystery",
    "provider": "PG",
    "image": "/images/slots/egypt-s-book-of-mystery.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "dragons-clusterbustertm",
    "title": "Dragons Clusterbuster™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragons-clusterbustertm.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasure-mine-power-reelstm",
    "title": "Treasure Mine Power Reels™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/treasure-mine-power-reelstm.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "triple-tigers",
    "title": "Triple Tigers",
    "provider": "PP",
    "image": "/images/slots/triple-tigers.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa-s-xmas-rush",
    "title": "Santa's Xmas Rush",
    "provider": "PP",
    "image": "/images/slots/santa-s-xmas-rush.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "horse-of-bounty",
    "title": "Horse of Bounty",
    "provider": "JDB",
    "image": "/images/slots/horse-of-bounty.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "lantern-wealth",
    "title": "Lantern Wealth",
    "provider": "JDB",
    "image": "/images/slots/lantern-wealth.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "candy-bonanza",
    "title": "Candy Bonanza",
    "provider": "PG",
    "image": "/images/slots/candy-bonanza.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "rise-of-apollo",
    "title": "Rise of Apollo",
    "provider": "PG",
    "image": "/images/slots/rise-of-apollo.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "prosperity-fortune-tree",
    "title": "Prosperity Fortune Tree",
    "provider": "PG",
    "image": "/images/slots/prosperity-fortune-tree.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "disconight-m",
    "title": "DiscoNight M",
    "provider": "CQ9",
    "image": "/images/slots/disconight-m.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "xmas",
    "title": "Xmas",
    "provider": "CQ9",
    "image": "/images/slots/xmas.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "bakery-bonanza",
    "title": "Bakery Bonanza",
    "provider": "PG",
    "image": "/images/slots/bakery-bonanza.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "forge-of-wealth",
    "title": "Forge of Wealth",
    "provider": "PG",
    "image": "/images/slots/forge-of-wealth.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "black-wukong",
    "title": "Black Wukong",
    "provider": "CQ9",
    "image": "/images/slots/black-wukong.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "aztec-priestess",
    "title": "Aztec Priestess",
    "provider": "JILI",
    "image": "/images/slots/aztec-priestess.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "keno",
    "title": "Keno",
    "provider": "JILI",
    "image": "/images/slots/keno.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fortune-monkey",
    "title": "Fortune Monkey",
    "provider": "JILI",
    "image": "/images/slots/fortune-monkey.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "lucky-doggy",
    "title": "Lucky Doggy",
    "provider": "JILI",
    "image": "/images/slots/lucky-doggy.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "boxing-extravaganza",
    "title": "Boxing Extravaganza",
    "provider": "JILI",
    "image": "/images/slots/boxing-extravaganza.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "queen-of-bounty",
    "title": "Queen of Bounty",
    "provider": "PG",
    "image": "/images/slots/queen-of-bounty.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "genie-s-3-wishes",
    "title": "Genie\"s 3 Wishes",
    "provider": "PG",
    "image": "/images/slots/genie-s-3-wishes.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "cake-and-ice-cream",
    "title": "Cake and Ice Cream",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/cake-and-ice-cream.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dragon-s-fire",
    "title": "Dragon's Fire",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-fire.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "big-bass-splash-1000",
    "title": "Big Bass Splash 1000",
    "provider": "PP",
    "image": "/images/slots/big-bass-splash-1000.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-gems-megawaystm",
    "title": "Aztec Gems Megaways™",
    "provider": "PP",
    "image": "/images/slots/aztec-gems-megawaystm.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cash-surge",
    "title": "Cash Surge",
    "provider": "PP",
    "image": "/images/slots/cash-surge.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fire-stampede-ultimate",
    "title": "Fire Stampede Ultimate",
    "provider": "PP",
    "image": "/images/slots/fire-stampede-ultimate.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-princess-pachi",
    "title": "Starlight Princess Pachi",
    "provider": "PP",
    "image": "/images/slots/starlight-princess-pachi.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "destiny-of-sun-moon",
    "title": "Destiny of Sun & Moon",
    "provider": "PG",
    "image": "/images/slots/destiny-of-sun-moon.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wheel-money",
    "title": "Wheel Money",
    "provider": "CQ9",
    "image": "/images/slots/wheel-money.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "win-win-fish-prawn-crab",
    "title": "Win Win Fish Prawn Crab",
    "provider": "PG",
    "image": "/images/slots/win-win-fish-prawn-crab.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "lucky-piggy",
    "title": "Lucky Piggy",
    "provider": "PG",
    "image": "/images/slots/lucky-piggy.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "mafia-mayhem",
    "title": "Mafia Mayhem",
    "provider": "PG",
    "image": "/images/slots/mafia-mayhem.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "shanghai-beauty",
    "title": "Shanghai Beauty",
    "provider": "JILI",
    "image": "/images/slots/shanghai-beauty.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "museum-mystery",
    "title": "Museum Mystery",
    "provider": "PG",
    "image": "/images/slots/museum-mystery.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "jackpot-joker",
    "title": "Jackpot Joker",
    "provider": "JILI",
    "image": "/images/slots/jackpot-joker.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "go-for-champion",
    "title": "Go For Champion",
    "provider": "JILI",
    "image": "/images/slots/go-for-champion.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "the-great-icescape",
    "title": "The Great Icescape",
    "provider": "PG",
    "image": "/images/slots/the-great-icescape.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "3-coin-wild-tiger",
    "title": "3 Coin Wild Tiger",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-tiger.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "phoenix-rises",
    "title": "Phoenix Rises",
    "provider": "PG",
    "image": "/images/slots/phoenix-rises.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "mahjong-break",
    "title": "Mahjong Break",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-break.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "dragon-s-luck-power-reels",
    "title": "Dragon's Luck Power Reels",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-luck-power-reels.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-s-luck-megawaystm",
    "title": "Dragon's Luck MegaWays™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dragon-s-luck-megawaystm.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "epic-journey",
    "title": "Epic Journey",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/epic-journey.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "jackpot-quest",
    "title": "Jackpot Quest",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/jackpot-quest.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "big-bass-bonanza-keeping-it-reel",
    "title": "Big Bass Bonanza - Keeping it Reel",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-keeping-it-reel.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "john-hunter-the-book-of-tut-respin",
    "title": "John Hunter & the Book of Tut Respin",
    "provider": "PP",
    "image": "/images/slots/john-hunter-the-book-of-tut-respin.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "barn-festival",
    "title": "Barn Festival",
    "provider": "PP",
    "image": "/images/slots/barn-festival.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "santa-s-great-gifts",
    "title": "Santa's Great Gifts",
    "provider": "PP",
    "image": "/images/slots/santa-s-great-gifts.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sugar-supreme-powernudge",
    "title": "Sugar Supreme Powernudge",
    "provider": "PP",
    "image": "/images/slots/sugar-supreme-powernudge.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "inca-queen",
    "title": "Inca Queen",
    "provider": "PP",
    "image": "/images/slots/inca-queen.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "caishen-s-gold",
    "title": "Caishen's Gold",
    "provider": "PP",
    "image": "/images/slots/caishen-s-gold.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "777-rush",
    "title": "777 Rush",
    "provider": "PP",
    "image": "/images/slots/777-rush.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-kraken-megawaystm",
    "title": "Release the Kraken Megaways™",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-megawaystm.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wheel-of-happiness",
    "title": "Wheel of Happiness",
    "provider": "PP",
    "image": "/images/slots/wheel-of-happiness.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mjolnir",
    "title": "Mjolnir",
    "provider": "JDB",
    "image": "/images/slots/mjolnir.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "glamorousgirl",
    "title": "GlamorousGirl",
    "provider": "JDB",
    "image": "/images/slots/glamorousgirl.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "lucky-elephant-x-huge",
    "title": "Lucky Elephant X-Huge",
    "provider": "JDB",
    "image": "/images/slots/lucky-elephant-x-huge.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "5-god-beasts",
    "title": "5 God Beasts",
    "provider": "CQ9",
    "image": "/images/slots/5-god-beasts.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "butterfly-blossom",
    "title": "Butterfly Blossom",
    "provider": "PG",
    "image": "/images/slots/butterfly-blossom.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-tiger",
    "title": "Fortune Tiger",
    "provider": "PG",
    "image": "/images/slots/fortune-tiger.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "songkran-splash",
    "title": "Songkran Splash",
    "provider": "PG",
    "image": "/images/slots/songkran-splash.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fortune-rabbit",
    "title": "Fortune Rabbit",
    "provider": "PG",
    "image": "/images/slots/fortune-rabbit.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "tsar-treasures",
    "title": "Tsar Treasures",
    "provider": "PG",
    "image": "/images/slots/tsar-treasures.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "gemstones-gold",
    "title": "Gemstones Gold",
    "provider": "PG",
    "image": "/images/slots/gemstones-gold.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "super-wildrix",
    "title": "Super Wildrix",
    "provider": "PG",
    "image": "/images/slots/super-wildrix.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "zombie-blasters",
    "title": "Zombie Blasters",
    "provider": "PG",
    "image": "/images/slots/zombie-blasters.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "fa-fa-fa",
    "title": "Fa Fa Fa",
    "provider": "JILI",
    "image": "/images/slots/fa-fa-fa.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "888-cai-shen",
    "title": "888 Cai Shen",
    "provider": "CQ9",
    "image": "/images/slots/888-cai-shen.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "candy-baby",
    "title": "Candy Baby",
    "provider": "JILI",
    "image": "/images/slots/candy-baby.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "double-fortune",
    "title": "Double Fortune",
    "provider": "PG",
    "image": "/images/slots/double-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "10-sparkling-crown",
    "title": "10 Sparkling Crown",
    "provider": "JILI",
    "image": "/images/slots/10-sparkling-crown.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "100-blazing-clover",
    "title": "100 Blazing Clover",
    "provider": "JILI",
    "image": "/images/slots/100-blazing-clover.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "dreams-of-macau",
    "title": "Dreams of Macau",
    "provider": "PG",
    "image": "/images/slots/dreams-of-macau.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "guardians-of-ice-and-fire",
    "title": "Guardians of Ice and Fire",
    "provider": "PG",
    "image": "/images/slots/guardians-of-ice-and-fire.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "aztec-spins",
    "title": "Aztec Spins",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/aztec-spins.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "cai-shen-168",
    "title": "Cai Shen 168",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/cai-shen-168.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "cash-volt",
    "title": "Cash Volt",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/cash-volt.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "diamond-royale",
    "title": "Diamond Royale",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/diamond-royale.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "god-of-wealth",
    "title": "God Of Wealth",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/god-of-wealth.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "hoard-of-poseidon",
    "title": "Hoard of Poseidon",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/hoard-of-poseidon.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasure-mine",
    "title": "Treasure Mine",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/treasure-mine.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "big-bass-halloween-2",
    "title": "Big Bass Halloween 2",
    "provider": "PP",
    "image": "/images/slots/big-bass-halloween-2.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gods-of-giza",
    "title": "Gods of Giza",
    "provider": "PP",
    "image": "/images/slots/gods-of-giza.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "cleocatra",
    "title": "Cleocatra",
    "provider": "PP",
    "image": "/images/slots/cleocatra.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "rabbit-garden",
    "title": "Rabbit Garden",
    "provider": "PP",
    "image": "/images/slots/rabbit-garden.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-west-duels",
    "title": "Wild West Duels",
    "provider": "PP",
    "image": "/images/slots/wild-west-duels.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mystery-mice",
    "title": "Mystery Mice",
    "provider": "PP",
    "image": "/images/slots/mystery-mice.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza-xmas",
    "title": "Sweet Bonanza Xmas",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-xmas.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "treasure-wild",
    "title": "Treasure Wild",
    "provider": "PP",
    "hotPercent": "128.1%",
    "image": "/images/slots/treasure-wild.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-treasure-hunt",
    "title": "Aztec Treasure Hunt",
    "provider": "PP",
    "image": "/images/slots/aztec-treasure-hunt.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "5-lions-megaways-2",
    "title": "5 Lions Megaways 2",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways-2.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "buffalo-king-untamed-megaways",
    "title": "Buffalo King Untamed Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-untamed-megaways.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fury-of-odin-megaways",
    "title": "Fury of Odin Megaways",
    "provider": "PP",
    "image": "/images/slots/fury-of-odin-megaways.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-wins",
    "title": "Starlight Wins",
    "provider": "PP",
    "image": "/images/slots/starlight-wins.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "volcano-goddess",
    "title": "Volcano Goddess",
    "provider": "PP",
    "image": "/images/slots/volcano-goddess.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "winning-mask",
    "title": "Winning Mask",
    "provider": "JDB",
    "image": "/images/slots/winning-mask.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "oriental-prosperity",
    "title": "Oriental Prosperity",
    "provider": "PG",
    "image": "/images/slots/oriental-prosperity.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "happy-taxi",
    "title": "Happy Taxi",
    "provider": "JILI",
    "image": "/images/slots/happy-taxi.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "move-n-jump",
    "title": "Move n' Jump",
    "provider": "CQ9",
    "image": "/images/slots/move-n-jump.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "fire-chibi-2",
    "title": "Fire Chibi 2",
    "provider": "CQ9",
    "image": "/images/slots/fire-chibi-2.webp",
    "category": "top",
    "theme": "Anime",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "hercules",
    "title": "Hercules",
    "provider": "CQ9",
    "image": "/images/slots/hercules.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "sin-city",
    "title": "Sin City",
    "provider": "JILI",
    "image": "/images/slots/sin-city.webp",
    "category": "top",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "chin-shi-huang",
    "title": "Chin Shi Huang",
    "provider": "JILI",
    "image": "/images/slots/chin-shi-huang.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "gem-saviour",
    "title": "Gem Saviour",
    "provider": "PG",
    "image": "/images/slots/gem-saviour.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "tornado-rampage",
    "title": "Tornado Rampage",
    "provider": "PG",
    "image": "/images/slots/tornado-rampage.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "devil-fire-2",
    "title": "Devil Fire 2",
    "provider": "JILI",
    "image": "/images/slots/devil-fire-2.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "potion-wizard",
    "title": "Potion Wizard",
    "provider": "JILI",
    "image": "/images/slots/potion-wizard.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  }
]

const slotsBatch3: SlotGame[] = [
{
    "id": "safari-mystery",
    "title": "Safari Mystery",
    "provider": "JILI",
    "image": "/images/slots/safari-mystery.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "fengshen",
    "title": "Fengshen",
    "provider": "JILI",
    "image": "/images/slots/fengshen.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-coin-treasures",
    "title": "3 Coin Treasures",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "rapid-gems-777",
    "title": "Rapid Gems 777",
    "provider": "JILI",
    "image": "/images/slots/rapid-gems-777.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "zeus-2",
    "title": "Zeus",
    "provider": "CQ9",
    "image": "/images/slots/zeus-2.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "777-super-strike",
    "title": "777 Super Strike",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/777-super-strike.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "war-of-dragons",
    "title": "War Of Dragons",
    "provider": "JILI",
    "image": "/images/slots/war-of-dragons.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "firework-burst",
    "title": "Firework Burst",
    "provider": "JDB",
    "image": "/images/slots/firework-burst.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "arcade-bomb",
    "title": "Arcade Bomb",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/arcade-bomb.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "devil-s-number",
    "title": "Devil's Number",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/devil-s-number.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "divine-ways",
    "title": "Divine Ways",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/divine-ways.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "football-fever-m",
    "title": "Football Fever M",
    "provider": "CQ9",
    "image": "/images/slots/football-fever-m.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "sugarlicious-everywaytm",
    "title": "Sugarlicious EveryWay™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/sugarlicious-everywaytm.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-rabbit-xtreme",
    "title": "Fortune Rabbit Xtreme",
    "provider": "CQ9",
    "image": "/images/slots/fortune-rabbit-xtreme.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "wild-beach-party",
    "title": "Wild Beach Party",
    "provider": "PP",
    "image": "/images/slots/wild-beach-party.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hot-to-burn-hold-and-spin",
    "title": "Hot to Burn Hold and Spin",
    "provider": "PP",
    "image": "/images/slots/hot-to-burn-hold-and-spin.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-wild-riches",
    "title": "Wild Wild Riches",
    "provider": "PP",
    "image": "/images/slots/wild-wild-riches.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "buffalo-king-megaways",
    "title": "Buffalo King Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-megaways.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "mummy-s-jewels",
    "title": "Mummy’s Jewels",
    "provider": "PP",
    "image": "/images/slots/mummy-s-jewels.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "kingsman",
    "title": "Kingsman",
    "provider": "JDB",
    "image": "/images/slots/kingsman.webp",
    "category": "top",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ],
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "prosperity-tiger",
    "title": "Prosperity Tiger",
    "provider": "JDB",
    "image": "/images/slots/prosperity-tiger.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "new-year",
    "title": "New Year",
    "provider": "JDB",
    "image": "/images/slots/new-year.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "mahjong",
    "title": "Mahjong",
    "provider": "JDB",
    "image": "/images/slots/mahjong.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "crypto-gold",
    "title": "Crypto Gold",
    "provider": "PG",
    "image": "/images/slots/crypto-gold.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "heist-stakes",
    "title": "Heist Stakes",
    "provider": "PG",
    "image": "/images/slots/heist-stakes.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "buffalo-win",
    "title": "Buffalo Win",
    "provider": "PG",
    "image": "/images/slots/buffalo-win.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "rave-jump-mobile",
    "title": "Rave Jump mobile",
    "provider": "CQ9",
    "image": "/images/slots/rave-jump-mobile.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "raider-janes-crypt-of-fortune",
    "title": "Raider Janes Crypt of Fortune",
    "provider": "PG",
    "image": "/images/slots/raider-janes-crypt-of-fortune.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "gu-gu-gu-2-m",
    "title": "Gu Gu Gu 2 M",
    "provider": "CQ9",
    "image": "/images/slots/gu-gu-gu-2-m.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "mystical-spirits",
    "title": "Mystical Spirits",
    "provider": "PG",
    "image": "/images/slots/mystical-spirits.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "world-cup",
    "title": "World Cup",
    "provider": "JILI",
    "image": "/images/slots/world-cup.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "safari-wilds",
    "title": "Safari Wilds",
    "provider": "PG",
    "image": "/images/slots/safari-wilds.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "super5",
    "title": "Super5",
    "provider": "CQ9",
    "image": "/images/slots/super5.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "three-crazy-piggies",
    "title": "Three Crazy Piggies",
    "provider": "PG",
    "image": "/images/slots/three-crazy-piggies.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "golden-temple",
    "title": "Golden Temple",
    "provider": "JILI",
    "image": "/images/slots/golden-temple.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "devil-fire",
    "title": "Devil Fire",
    "provider": "JILI",
    "image": "/images/slots/devil-fire.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "trial-of-phoenix",
    "title": "Trial of Phoenix",
    "provider": "JILI",
    "image": "/images/slots/trial-of-phoenix.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "monkeys-wild-party",
    "title": "Monkeys Wild Party",
    "provider": "PG",
    "image": "/images/slots/monkeys-wild-party.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "go-fishing",
    "title": "Go Fishing",
    "provider": "CQ9",
    "image": "/images/slots/go-fishing.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "777",
    "title": "777",
    "provider": "CQ9",
    "image": "/images/slots/777.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "treasure-quest",
    "title": "Treasure Quest",
    "provider": "JILI",
    "image": "/images/slots/treasure-quest.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "3-witch-s-lamp",
    "title": "3 Witch's Lamp",
    "provider": "JILI",
    "image": "/images/slots/3-witch-s-lamp.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "20-blazing-clover",
    "title": "20 Blazing Clover",
    "provider": "JILI",
    "image": "/images/slots/20-blazing-clover.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wukong-peaches",
    "title": "WuKong&Peaches",
    "provider": "CQ9",
    "image": "/images/slots/wukong-peaches.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "chinese-treasures",
    "title": "Chinese Treasures",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/chinese-treasures.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "egypt-megawaystm",
    "title": "Egypt Megaways™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/egypt-megawaystm.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "five-star",
    "title": "Five Star",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/five-star.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-house",
    "title": "Fortune House",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/fortune-house.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "grand-wheel",
    "title": "Grand Wheel",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/grand-wheel.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "jack-in-a-pot",
    "title": "Jack In A Pot",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/jack-in-a-pot.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "los-muertos-locos",
    "title": "Los Muertos Locos",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/los-muertos-locos.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "ten-elements",
    "title": "Ten Elements",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/ten-elements.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-bounty-2",
    "title": "WILD BOUNTY 2",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "big-bass-boxing-bonus-round",
    "title": "Big Bass Boxing Bonus Round",
    "provider": "PP",
    "image": "/images/slots/big-bass-boxing-bonus-round.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-vegas-double-down-deluxe",
    "title": "Big Bass Vegas Double Down Deluxe",
    "provider": "PP",
    "image": "/images/slots/big-bass-vegas-double-down-deluxe.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fish-eye",
    "title": "Fish Eye",
    "provider": "PP",
    "image": "/images/slots/fish-eye.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bigger-bass-bonanza",
    "title": "Bigger Bass Bonanza",
    "provider": "PP",
    "image": "/images/slots/bigger-bass-bonanza.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fortune-of-giza",
    "title": "Fortune of Giza",
    "provider": "PP",
    "image": "/images/slots/fortune-of-giza.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "chicken-drop",
    "title": "Chicken Drop",
    "provider": "PP",
    "image": "/images/slots/chicken-drop.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "candy-corner",
    "title": "Candy Corner",
    "provider": "PP",
    "image": "/images/slots/candy-corner.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "jungle-gorilla",
    "title": "Jungle Gorilla",
    "provider": "PP",
    "image": "/images/slots/jungle-gorilla.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "medusa-s-stone",
    "title": "Medusa’s Stone",
    "provider": "PP",
    "image": "/images/slots/medusa-s-stone.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "blade-fangs",
    "title": "Blade & Fangs",
    "provider": "PP",
    "image": "/images/slots/blade-fangs.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-powernudge",
    "title": "Aztec Powernudge",
    "provider": "PP",
    "image": "/images/slots/aztec-powernudge.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "starlight-christmas",
    "title": "Starlight Christmas",
    "provider": "PP",
    "image": "/images/slots/starlight-christmas.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-great-stick-up",
    "title": "The Great Stick-Up",
    "provider": "PP",
    "image": "/images/slots/the-great-stick-up.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "monster-superlanche",
    "title": "Monster Superlanche",
    "provider": "PP",
    "image": "/images/slots/monster-superlanche.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "great-ghosts",
    "title": "Great Ghosts!",
    "provider": "PP",
    "image": "/images/slots/great-ghosts.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "6-jokers",
    "title": "6 Jokers",
    "provider": "PP",
    "image": "/images/slots/6-jokers.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "aztec-gems-deluxe",
    "title": "Aztec Gems Deluxe",
    "provider": "PP",
    "image": "/images/slots/aztec-gems-deluxe.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-bonanza-megaways",
    "title": "Big Bass Bonanza Megaways",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-megaways.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "revenge-of-loki-megaways",
    "title": "Revenge of Loki Megaways",
    "provider": "PP",
    "image": "/images/slots/revenge-of-loki-megaways.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "zombie-school-megaways",
    "title": "Zombie School Megaways",
    "provider": "PP",
    "image": "/images/slots/zombie-school-megaways.webp",
    "category": "top",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "witch-heart-megawaystm",
    "title": "Witch Heart Megaways™",
    "provider": "PP",
    "image": "/images/slots/witch-heart-megawaystm.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "zombie-carnival",
    "title": "Zombie Carnival",
    "provider": "PP",
    "image": "/images/slots/zombie-carnival.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "flirting-scholar-tang",
    "title": "Flirting Scholar Tang",
    "provider": "JDB",
    "image": "/images/slots/flirting-scholar-tang.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "opensesameii",
    "title": "OpenSesameII",
    "provider": "JDB",
    "image": "/images/slots/opensesameii.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jdb.webp"
  },
  {
    "id": "garuda-gems",
    "title": "Garuda Gems",
    "provider": "PG",
    "image": "/images/slots/garuda-gems.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "rooster-rumble",
    "title": "Rooster Rumble",
    "provider": "PG",
    "image": "/images/slots/rooster-rumble.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "hyper-burst",
    "title": "Hyper Burst",
    "provider": "JILI",
    "image": "/images/slots/hyper-burst.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "ninja-raccoon-frenzy",
    "title": "Ninja Raccoon Frenzy",
    "provider": "PG",
    "image": "/images/slots/ninja-raccoon-frenzy.webp",
    "category": "top",
    "theme": "Anime",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "wild-racer",
    "title": "Wild Racer",
    "provider": "JILI",
    "image": "/images/slots/wild-racer.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "wings-of-iguazu",
    "title": "Wings of Iguazu",
    "provider": "PG",
    "image": "/images/slots/wings-of-iguazu.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "cricket-fever",
    "title": "Cricket Fever",
    "provider": "CQ9",
    "image": "/images/slots/cricket-fever.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "888",
    "title": "888",
    "provider": "CQ9",
    "image": "/images/slots/888.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "cricket-sah-75",
    "title": "Cricket Sah 75",
    "provider": "JILI",
    "image": "/images/slots/cricket-sah-75.webp",
    "category": "top",
    "theme": "Sports",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "hawaii-beauty",
    "title": "Hawaii Beauty",
    "provider": "JILI",
    "image": "/images/slots/hawaii-beauty.webp",
    "category": "top",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "crazy-hunter-2",
    "title": "Crazy Hunter 2",
    "provider": "JILI",
    "image": "/images/slots/crazy-hunter-2.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways",
    "providerLogo": "/images/providers/jili.webp"
  },
  {
    "id": "jewels-of-prosperity",
    "title": "Jewels of Prosperity",
    "provider": "PG",
    "image": "/images/slots/jewels-of-prosperity.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "thai-river-wonders",
    "title": "Thai River Wonders",
    "provider": "PG",
    "image": "/images/slots/thai-river-wonders.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pg.webp"
  },
  {
    "id": "ancient-script",
    "title": "Ancient Script",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/ancient-script.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ]
  },
  {
    "id": "big-cat-rescue-megawaystm",
    "title": "Big Cat Rescue Megaways™",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/big-cat-rescue-megawaystm.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "clover-craze",
    "title": "Clover Craze",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/clover-craze.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "cotton-gang-affair",
    "title": "Cotton Gang Affair",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/cotton-gang-affair.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ]
  },
  {
    "id": "golden-horus",
    "title": "Golden Horus",
    "provider": "CQ9",
    "image": "/images/slots/golden-horus.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "diamond-blitz",
    "title": "Diamond Blitz",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/diamond-blitz.webp",
    "category": "top",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "amazing-money-machine",
    "title": "Amazing Money Machine",
    "provider": "PP",
    "image": "/images/slots/amazing-money-machine.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "big-bass-floats-my-boat",
    "title": "Big Bass Floats My Boat",
    "provider": "PP",
    "image": "/images/slots/big-bass-floats-my-boat.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "release-the-bison",
    "title": "Release the Bison",
    "provider": "PP",
    "image": "/images/slots/release-the-bison.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gears-of-horus",
    "title": "Gears of Horus",
    "provider": "PP",
    "image": "/images/slots/gears-of-horus.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "colossal-cash-zone",
    "title": "Colossal Cash Zone",
    "provider": "PP",
    "image": "/images/slots/colossal-cash-zone.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "the-dog-house-multihold",
    "title": "The Dog House Multihold",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-multihold.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "hot-pepper",
    "title": "Hot Pepper",
    "provider": "PP",
    "image": "/images/slots/hot-pepper.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "egyptian-fortunes",
    "title": "Egyptian Fortunes",
    "provider": "PP",
    "image": "/images/slots/egyptian-fortunes.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "8-dragons",
    "title": "8 Dragons",
    "provider": "PP",
    "image": "/images/slots/8-dragons.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "bow-of-artemis",
    "title": "Bow of Artemis",
    "provider": "PP",
    "image": "/images/slots/bow-of-artemis.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gem-fire-fortune",
    "title": "Gem Fire Fortune",
    "provider": "PP",
    "image": "/images/slots/gem-fire-fortune.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "wild-west-gold",
    "title": "Wild West Gold",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold.webp",
    "category": "top",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "juicy-fruits-multihold",
    "title": "Juicy Fruits Multihold",
    "provider": "PP",
    "image": "/images/slots/juicy-fruits-multihold.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "floating-dragon-new-year-festival-ultra-megawaystm-hold-spin",
    "title": "Floating Dragon New Year Festival Ultra Megaways™ Hold & Spin",
    "provider": "PP",
    "image": "/images/slots/floating-dragon-new-year-festival-ultra-megawaystm-hold-spin.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "fire-stampede",
    "title": "Fire Stampede",
    "provider": "PP",
    "image": "/images/slots/fire-stampede.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "dream-destiny",
    "title": "Dream Destiny",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/dream-destiny.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fishtastic",
    "title": "Fishtastic",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/fishtastic.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "hero-of-the-3-kingdoms-cao-cao",
    "title": "Hero of the 3 Kingdoms - Cao Cao",
    "provider": "CQ9",
    "image": "/images/slots/hero-of-the-3-kingdoms-cao-cao.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "crazy-crazy",
    "title": "Crazy Crazy",
    "provider": "CQ9",
    "image": "/images/slots/crazy-crazy.webp",
    "category": "top",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/cq9.webp"
  },
  {
    "id": "big-bass-bonanza",
    "title": "Big Bass Bonanza",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "1024",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "return-of-the-dead",
    "title": "Return of the Dead",
    "provider": "PP",
    "image": "/images/slots/return-of-the-dead.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "jelly-express",
    "title": "Jelly Express",
    "provider": "PP",
    "image": "/images/slots/jelly-express.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "sweet-bonanza-super-scatter",
    "title": "Sweet Bonanza Super Scatter",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-super-scatter.webp",
    "category": "top",
    "theme": "Foods",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "caishen-s-cash",
    "title": "Caishen's Cash",
    "provider": "PP",
    "image": "/images/slots/caishen-s-cash.webp",
    "category": "top",
    "theme": "Myth & History",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "majestic-express-gold-run",
    "title": "Majestic Express Gold Run",
    "provider": "PP",
    "image": "/images/slots/majestic-express-gold-run.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "gold-train",
    "title": "Gold Train",
    "provider": "PP",
    "image": "/images/slots/gold-train.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "anaconda-gold",
    "title": "Anaconda Gold",
    "provider": "PP",
    "image": "/images/slots/anaconda-gold.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243",
    "providerLogo": "/images/providers/pp.webp"
  },
  {
    "id": "winter-wonders",
    "title": "Winter Wonders",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/winter-wonders.webp",
    "category": "top",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "heist-stakes",
    "title": "Heist Stakes",
    "provider": "PG",
    "image": "/images/slots/heist-stakes.webp",
    "category": "hot",
    "hotPercent": "450.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "phoenix-forge",
    "title": "Phoenix Forge",
    "provider": "PP",
    "image": "/images/slots/phoenix-forge.webp",
    "category": "hot",
    "hotPercent": "207.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "pharaoh-treasure",
    "title": "Pharaoh Treasure",
    "provider": "JILI",
    "image": "/images/slots/pharaoh-treasure.webp",
    "category": "hot",
    "hotPercent": "188.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "strawberry-cocktail",
    "title": "Strawberry Cocktail",
    "provider": "PP",
    "image": "/images/slots/strawberry-cocktail.webp",
    "category": "hot",
    "hotPercent": "181.4%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "diner-frenzy-spins",
    "title": "Diner Frenzy Spins",
    "provider": "PG",
    "image": "/images/slots/diner-frenzy-spins.webp",
    "category": "hot",
    "hotPercent": "169.2%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "reel-royale-showdown",
    "title": "Reel Royale Showdown",
    "provider": "PG",
    "image": "/images/slots/reel-royale-showdown.webp",
    "category": "hot",
    "hotPercent": "157.7%",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "shaolin-soccer",
    "title": "Shaolin Soccer",
    "provider": "PG",
    "image": "/images/slots/shaolin-soccer.webp",
    "category": "hot",
    "hotPercent": "156.9%",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "anubis-wrath",
    "title": "Anubis Wrath",
    "provider": "PG",
    "image": "/images/slots/anubis-wrath.webp",
    "category": "hot",
    "hotPercent": "152.6%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "the-big-dawgs",
    "title": "The Big Dawgs",
    "provider": "PP",
    "image": "/images/slots/the-big-dawgs.webp",
    "category": "hot",
    "hotPercent": "152.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mjolnir",
    "title": "Mjolnir",
    "provider": "JDB",
    "image": "/images/slots/mjolnir.webp",
    "category": "hot",
    "hotPercent": "148.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "888-cai-shen",
    "title": "888 Cai Shen",
    "provider": "CQ9",
    "image": "/images/slots/888-cai-shen.webp",
    "category": "hot",
    "hotPercent": "142.2%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "crazy-crazy",
    "title": "Crazy Crazy",
    "provider": "CQ9",
    "image": "/images/slots/crazy-crazy.webp",
    "category": "hot",
    "hotPercent": "140.7%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-mouse",
    "title": "Fortune Mouse",
    "provider": "PG",
    "image": "/images/slots/fortune-mouse.webp",
    "category": "hot",
    "hotPercent": "140.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "disconight-m",
    "title": "DiscoNight M",
    "provider": "CQ9",
    "image": "/images/slots/disconight-m.webp",
    "category": "hot",
    "hotPercent": "139.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "blade-fangs",
    "title": "Blade & Fangs",
    "provider": "PP",
    "image": "/images/slots/blade-fangs.webp",
    "category": "hot",
    "hotPercent": "139.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "panda-s-fortune",
    "title": "Panda's Fortune",
    "provider": "PP",
    "image": "/images/slots/panda-s-fortune.webp",
    "category": "hot",
    "hotPercent": "139.3%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "sweet-land",
    "title": "Sweet Land",
    "provider": "JILI",
    "image": "/images/slots/sweet-land.webp",
    "category": "hot",
    "hotPercent": "137.4%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "heart-of-cleopatra",
    "title": "Heart of Cleopatra",
    "provider": "PP",
    "image": "/images/slots/heart-of-cleopatra.webp",
    "category": "hot",
    "hotPercent": "133.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "crazy-crazy-3",
    "title": "Crazy Crazy 3",
    "provider": "CQ9",
    "image": "/images/slots/crazy-crazy-3.webp",
    "category": "hot",
    "hotPercent": "133.1%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "golden-eggs",
    "title": "Golden Eggs",
    "provider": "CQ9",
    "image": "/images/slots/golden-eggs.webp",
    "category": "hot",
    "hotPercent": "132.4%",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "888-dragons",
    "title": "888 Dragons",
    "provider": "PP",
    "image": "/images/slots/888-dragons.webp",
    "category": "hot",
    "hotPercent": "132.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wisdom-of-athena-1000",
    "title": "Wisdom of Athena 1000",
    "provider": "PP",
    "image": "/images/slots/wisdom-of-athena-1000.webp",
    "category": "hot",
    "hotPercent": "131.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "hercules",
    "title": "Hercules",
    "provider": "CQ9",
    "image": "/images/slots/hercules.webp",
    "category": "hot",
    "hotPercent": "130.9%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "spindrift2",
    "title": "Spindrift2",
    "provider": "JDB",
    "image": "/images/slots/spindrift2.webp",
    "category": "hot",
    "hotPercent": "129.3%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasure-wild",
    "title": "Treasure Wild",
    "provider": "PP",
    "image": "/images/slots/treasure-wild.webp",
    "category": "hot",
    "hotPercent": "128.1%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "zombie-outbreak",
    "title": "Zombie Outbreak",
    "provider": "PG",
    "image": "/images/slots/zombie-outbreak.webp",
    "category": "hot",
    "hotPercent": "127.5%",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-fireworks",
    "title": "Wild Fireworks",
    "provider": "PG",
    "image": "/images/slots/wild-fireworks.webp",
    "category": "hot",
    "hotPercent": "127.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "release-the-kraken-megawaystm",
    "title": "Release the Kraken Megaways™",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-megawaystm.webp",
    "category": "hot",
    "hotPercent": "126.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "rave-party-fever",
    "title": "Rave Party Fever",
    "provider": "PG",
    "image": "/images/slots/rave-party-fever.webp",
    "category": "hot",
    "hotPercent": "126.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "money-tree",
    "title": "Money Tree",
    "provider": "CQ9",
    "image": "/images/slots/money-tree.webp",
    "category": "hot",
    "hotPercent": "126.0%",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "money-stacks",
    "title": "Money Stacks",
    "provider": "PP",
    "image": "/images/slots/money-stacks.webp",
    "category": "hot",
    "hotPercent": "125.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sweet-burst",
    "title": "Sweet Burst",
    "provider": "PP",
    "image": "/images/slots/sweet-burst.webp",
    "category": "hot",
    "hotPercent": "124.4%",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "hotspin",
    "title": "HotSpin",
    "provider": "CQ9",
    "image": "/images/slots/hotspin.webp",
    "category": "hot",
    "hotPercent": "123.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "inca-queen",
    "title": "Inca Queen",
    "provider": "PP",
    "image": "/images/slots/inca-queen.webp",
    "category": "hot",
    "hotPercent": "123.0%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "sin-city",
    "title": "Sin City",
    "provider": "JILI",
    "image": "/images/slots/sin-city.webp",
    "category": "hot",
    "hotPercent": "120.4%",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "legacy-of-olympus1000",
    "title": "Legacy of Olympus1000",
    "provider": "CQ9",
    "image": "/images/slots/legacy-of-olympus1000.webp",
    "category": "hot",
    "hotPercent": "119.8%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1000"
  },
  {
    "id": "voyage-of-daring-queen-x-lock",
    "title": "Voyage of Daring Queen X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-daring-queen-x-lock.webp",
    "category": "hot",
    "hotPercent": "119.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "zombie-school-megaways",
    "title": "Zombie School Megaways",
    "provider": "PP",
    "image": "/images/slots/zombie-school-megaways.webp",
    "category": "hot",
    "hotPercent": "118.2%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "clover-coins-3x3",
    "title": "Clover Coins 3x3",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-3x3.webp",
    "category": "hot",
    "hotPercent": "117.3%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "cash-surge",
    "title": "Cash Surge",
    "provider": "PP",
    "image": "/images/slots/cash-surge.webp",
    "category": "hot",
    "hotPercent": "117.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "5-lions-megaways",
    "title": "5 Lions Megaways",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways.webp",
    "category": "hot",
    "hotPercent": "117.1%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "zeus-vs-hades-gods-of-war-250",
    "title": "Zeus vs Hades Gods of War 250",
    "provider": "PP",
    "image": "/images/slots/zeus-vs-hades-gods-of-war-250.webp",
    "category": "hot",
    "hotPercent": "116.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-treasure",
    "title": "Fortune Treasure",
    "provider": "JDB",
    "image": "/images/slots/fortune-treasure.webp",
    "category": "hot",
    "hotPercent": "116.4%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "geisha-s-revenge",
    "title": "Geisha's Revenge",
    "provider": "PG",
    "image": "/images/slots/geisha-s-revenge.webp",
    "category": "hot",
    "hotPercent": "115.6%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "kong",
    "title": "Kong",
    "provider": "JDB",
    "image": "/images/slots/kong.webp",
    "category": "hot",
    "hotPercent": "115.5%",
    "theme": "Movie",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fire-stampede",
    "title": "Fire Stampede",
    "provider": "PP",
    "image": "/images/slots/fire-stampede.webp",
    "category": "hot",
    "hotPercent": "115.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "volcano-goddess",
    "title": "Volcano Goddess",
    "provider": "PP",
    "image": "/images/slots/volcano-goddess.webp",
    "category": "hot",
    "hotPercent": "115.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-rabbit-xtreme",
    "title": "Fortune Rabbit Xtreme",
    "provider": "CQ9",
    "image": "/images/slots/fortune-rabbit-xtreme.webp",
    "category": "hot",
    "hotPercent": "114.7%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wild-wild-joker",
    "title": "Wild Wild Joker",
    "provider": "PP",
    "image": "/images/slots/wild-wild-joker.webp",
    "category": "hot",
    "hotPercent": "114.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "billionaire",
    "title": "Billionaire",
    "provider": "JDB",
    "image": "/images/slots/billionaire.webp",
    "category": "hot",
    "hotPercent": "113.8%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "king-arthur",
    "title": "King Arthur",
    "provider": "JILI",
    "image": "/images/slots/king-arthur.webp",
    "category": "hot",
    "hotPercent": "113.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "starlight-princess-pachi",
    "title": "Starlight Princess Pachi",
    "provider": "PP",
    "image": "/images/slots/starlight-princess-pachi.webp",
    "category": "hot",
    "hotPercent": "113.5%",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "sweet-bonanza-2500",
    "title": "Sweet Bonanza 2500",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-2500.webp",
    "category": "hot",
    "hotPercent": "112.1%",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "book-of-monsters",
    "title": "Book of Monsters",
    "provider": "PP",
    "image": "/images/slots/book-of-monsters.webp",
    "category": "hot",
    "hotPercent": "111.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lucky-caramelo",
    "title": "Lucky Caramelo",
    "provider": "JILI",
    "image": "/images/slots/lucky-caramelo.webp",
    "category": "hot",
    "hotPercent": "110.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mighty-mania",
    "title": "Mighty Mania",
    "provider": "PG",
    "image": "/images/slots/mighty-mania.webp",
    "category": "hot",
    "hotPercent": "110.8%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "release-the-kraken-2",
    "title": "Release the Kraken 2",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-2.webp",
    "category": "hot",
    "hotPercent": "110.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mask-carnival",
    "title": "Mask Carnival",
    "provider": "PG",
    "image": "/images/slots/mask-carnival.webp",
    "category": "hot",
    "hotPercent": "110.1%",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "hot-to-burn-hold-and-spin",
    "title": "Hot to Burn Hold and Spin",
    "provider": "PP",
    "image": "/images/slots/hot-to-burn-hold-and-spin.webp",
    "category": "hot",
    "hotPercent": "110.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mahjong-wilds-3",
    "title": "Mahjong Wilds 3",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds-3.webp",
    "category": "hot",
    "hotPercent": "109.7%",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "candy-blitz-bombs",
    "title": "Candy Blitz Bombs",
    "provider": "PP",
    "image": "/images/slots/candy-blitz-bombs.webp",
    "category": "hot",
    "hotPercent": "109.7%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-ace-super-scatter",
    "title": "Fortune Ace Super Scatter",
    "provider": "PP",
    "image": "/images/slots/fortune-ace-super-scatter.webp",
    "category": "hot",
    "hotPercent": "109.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "party-night",
    "title": "Party Night",
    "provider": "JILI",
    "image": "/images/slots/party-night.webp",
    "category": "hot",
    "hotPercent": "108.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "pinatas-ponies",
    "title": "Pinatas & Ponies",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/pinatas-ponies.webp",
    "category": "hot",
    "hotPercent": "108.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "queen-of-bounty",
    "title": "Queen of Bounty",
    "provider": "PG",
    "image": "/images/slots/queen-of-bounty.webp",
    "category": "hot",
    "hotPercent": "107.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mahjong-break",
    "title": "Mahjong Break",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-break.webp",
    "category": "hot",
    "hotPercent": "107.4%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mahjong-wins",
    "title": "Mahjong Wins",
    "provider": "JDB",
    "image": "/images/slots/mahjong-wins.webp",
    "category": "hot",
    "hotPercent": "107.2%",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "joker-coins-expanded",
    "title": "Joker Coins Expanded",
    "provider": "JILI",
    "image": "/images/slots/joker-coins-expanded.webp",
    "category": "hot",
    "hotPercent": "107.1%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "agent-ace",
    "title": "Agent Ace",
    "provider": "JILI",
    "image": "/images/slots/agent-ace.webp",
    "category": "hot",
    "hotPercent": "106.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "777-rush",
    "title": "777 Rush",
    "provider": "PP",
    "image": "/images/slots/777-rush.webp",
    "category": "hot",
    "hotPercent": "106.8%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "captain-s-bounty",
    "title": "Captain\"s Bounty",
    "provider": "PG",
    "image": "/images/slots/captain-s-bounty.webp",
    "category": "hot",
    "hotPercent": "106.1%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "asgardian-rising",
    "title": "Asgardian Rising",
    "provider": "PG",
    "image": "/images/slots/asgardian-rising.webp",
    "category": "hot",
    "hotPercent": "105.7%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "you-can-piggy-bank-on-it",
    "title": "You Can Piggy Bank on it",
    "provider": "PP",
    "image": "/images/slots/you-can-piggy-bank-on-it.webp",
    "category": "hot",
    "hotPercent": "105.4%",
    "theme": "Foods",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-coin-treasures",
    "title": "3 Coin Treasures",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures.webp",
    "category": "hot",
    "hotPercent": "104.8%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "3-witch-s-lamp",
    "title": "3 Witch's Lamp",
    "provider": "JILI",
    "image": "/images/slots/3-witch-s-lamp.webp",
    "category": "hot",
    "hotPercent": "104.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bounty-2",
    "title": "WILD BOUNTY 2",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-2.webp",
    "category": "hot",
    "hotPercent": "104.4%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "number-king",
    "title": "Number King",
    "provider": "JILI",
    "image": "/images/slots/number-king.webp",
    "category": "hot",
    "hotPercent": "104.1%",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "bakery-bonanza",
    "title": "Bakery Bonanza",
    "provider": "PG",
    "image": "/images/slots/bakery-bonanza.webp",
    "category": "hot",
    "hotPercent": "103.8%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "midnight-thirst",
    "title": "Midnight Thirst",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/midnight-thirst.webp",
    "category": "hot",
    "hotPercent": "103.5%",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "caishen-s-gold",
    "title": "Caishen's Gold",
    "provider": "PP",
    "image": "/images/slots/caishen-s-gold.webp",
    "category": "hot",
    "hotPercent": "103.5%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "hyper-burst",
    "title": "Hyper Burst",
    "provider": "JILI",
    "image": "/images/slots/hyper-burst.webp",
    "category": "hot",
    "hotPercent": "103.3%",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "glamorousgirl",
    "title": "GlamorousGirl",
    "provider": "JDB",
    "image": "/images/slots/glamorousgirl.webp",
    "category": "hot",
    "hotPercent": "103.0%",
    "theme": "Romantic",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "forge-of-wealth",
    "title": "Forge of Wealth",
    "provider": "PG",
    "image": "/images/slots/forge-of-wealth.webp",
    "category": "hot",
    "hotPercent": "102.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "sweet-bonanza-1000",
    "title": "Sweet Bonanza 1000",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-1000.webp",
    "category": "hot",
    "hotPercent": "102.7%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "super5",
    "title": "Super5",
    "provider": "CQ9",
    "image": "/images/slots/super5.webp",
    "category": "hot",
    "hotPercent": "102.5%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "yakuza-honor",
    "title": "Yakuza Honor",
    "provider": "PG",
    "image": "/images/slots/yakuza-honor.webp",
    "category": "hot",
    "hotPercent": "102.5%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "money-coming-expand-bets",
    "title": "Money Coming Expand Bets",
    "provider": "JILI",
    "image": "/images/slots/money-coming-expand-bets.webp",
    "category": "hot",
    "hotPercent": "102.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mafia-mayhem",
    "title": "Mafia Mayhem",
    "provider": "PG",
    "image": "/images/slots/mafia-mayhem.webp",
    "category": "hot",
    "hotPercent": "102.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "pirate-queen",
    "title": "Pirate Queen",
    "provider": "JILI",
    "image": "/images/slots/pirate-queen.webp",
    "category": "hot",
    "hotPercent": "101.8%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lucky-jaguar-2",
    "title": "Lucky Jaguar 2",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar-2.webp",
    "category": "hot",
    "hotPercent": "101.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "firework-burst",
    "title": "Firework Burst",
    "provider": "JDB",
    "image": "/images/slots/firework-burst.webp",
    "category": "hot",
    "hotPercent": "101.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-neko-2",
    "title": "Lucky Neko 2",
    "provider": "CQ9",
    "image": "/images/slots/lucky-neko-2.webp",
    "category": "hot",
    "hotPercent": "101.4%",
    "theme": "Anime",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "guardians-of-ice-and-fire",
    "title": "Guardians of Ice and Fire",
    "provider": "PG",
    "image": "/images/slots/guardians-of-ice-and-fire.webp",
    "category": "hot",
    "hotPercent": "101.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-coins-2",
    "title": "Fortune Coins 2",
    "provider": "JILI",
    "image": "/images/slots/fortune-coins-2.webp",
    "category": "hot",
    "hotPercent": "101.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "gates-of-hades",
    "title": "Gates of Hades",
    "provider": "PP",
    "image": "/images/slots/gates-of-hades.webp",
    "category": "hot",
    "hotPercent": "101.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "open-sesame",
    "title": "Open Sesame",
    "provider": "JDB",
    "image": "/images/slots/open-sesame.webp",
    "category": "hot",
    "hotPercent": "100.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "bone-fortune",
    "title": "Bone Fortune",
    "provider": "JILI",
    "image": "/images/slots/bone-fortune.webp",
    "category": "hot",
    "hotPercent": "100.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dragon-hatch",
    "title": "Dragon Hatch",
    "provider": "PG",
    "image": "/images/slots/dragon-hatch.webp",
    "category": "hot",
    "hotPercent": "100.8%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "charge-buffalo",
    "title": "Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/charge-buffalo.webp",
    "category": "hot",
    "hotPercent": "100.7%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "madame-destiny-megaways",
    "title": "Madame Destiny Megaways",
    "provider": "PP",
    "image": "/images/slots/madame-destiny-megaways.webp",
    "category": "hot",
    "hotPercent": "100.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "mermaid-riches",
    "title": "Mermaid Riches",
    "provider": "PG",
    "image": "/images/slots/mermaid-riches.webp",
    "category": "hot",
    "hotPercent": "100.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "golden-horus",
    "title": "Golden Horus",
    "provider": "CQ9",
    "image": "/images/slots/golden-horus.webp",
    "category": "hot",
    "hotPercent": "100.1%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "888",
    "title": "888",
    "provider": "CQ9",
    "image": "/images/slots/888.webp",
    "category": "hot",
    "hotPercent": "100.0%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "gold-train",
    "title": "Gold Train",
    "provider": "PP",
    "image": "/images/slots/gold-train.webp",
    "category": "hot",
    "hotPercent": "100.0%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mahjong-ways",
    "title": "Mahjong Ways",
    "provider": "PG",
    "image": "/images/slots/mahjong-ways.webp",
    "category": "hot",
    "hotPercent": "99.9%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "legacy-of-egypt",
    "title": "Legacy of Egypt",
    "provider": "JILI",
    "image": "/images/slots/legacy-of-egypt.webp",
    "category": "hot",
    "hotPercent": "99.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "pinata-wins",
    "title": "Pinata Wins",
    "provider": "PG",
    "image": "/images/slots/pinata-wins.webp",
    "category": "hot",
    "hotPercent": "99.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-ace-deluxe",
    "title": "Super Ace Deluxe",
    "provider": "JILI",
    "image": "/images/slots/super-ace-deluxe.webp",
    "category": "hot",
    "hotPercent": "99.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "romax",
    "title": "RomaX",
    "provider": "JILI",
    "image": "/images/slots/romax.webp",
    "category": "hot",
    "hotPercent": "99.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-racer",
    "title": "Wild Racer",
    "provider": "JILI",
    "image": "/images/slots/wild-racer.webp",
    "category": "hot",
    "hotPercent": "99.2%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "devil-fire",
    "title": "Devil Fire",
    "provider": "JILI",
    "image": "/images/slots/devil-fire.webp",
    "category": "hot",
    "hotPercent": "99.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-tree",
    "title": "Fortune Tree",
    "provider": "JILI",
    "image": "/images/slots/fortune-tree.webp",
    "category": "hot",
    "hotPercent": "98.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-empire-2",
    "title": "Golden Empire 2",
    "provider": "JILI",
    "image": "/images/slots/golden-empire-2.webp",
    "category": "hot",
    "hotPercent": "98.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "10001-nights",
    "title": "10001 Nights",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/10001-nights.webp",
    "category": "hot",
    "hotPercent": "97.8%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "devil-fire-twins",
    "title": "Devil Fire Twins",
    "provider": "JILI",
    "image": "/images/slots/devil-fire-twins.webp",
    "category": "hot",
    "hotPercent": "97.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bronco",
    "title": "Wild Bronco",
    "provider": "JDB",
    "image": "/images/slots/wild-bronco.webp",
    "category": "hot",
    "new": true,
    "hotPercent": "97.7%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-west-duels",
    "title": "Wild West Duels",
    "provider": "PP",
    "image": "/images/slots/wild-west-duels.webp",
    "category": "hot",
    "hotPercent": "97.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "bounty-raid",
    "title": "Bounty Raid",
    "provider": "Red Tiger",
    "providerLogo": "/images/providers/red-tiger.webp",
    "image": "/images/slots/bounty-raid.webp",
    "category": "hot",
    "hotPercent": "97.5%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "coin-tree",
    "title": "Coin Tree",
    "provider": "JILI",
    "image": "/images/slots/coin-tree.webp",
    "category": "hot",
    "hotPercent": "97.4%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-super-ace",
    "title": "3 Super Ace",
    "provider": "JILI",
    "image": "/images/slots/3-super-ace.webp",
    "category": "hot",
    "hotPercent": "97.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ganesha-fortune",
    "title": "Ganesha Fortune",
    "provider": "PG",
    "image": "/images/slots/ganesha-fortune.webp",
    "category": "hot",
    "hotPercent": "97.4%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "samba-jewel",
    "title": "Samba Jewel",
    "provider": "JDB",
    "image": "/images/slots/samba-jewel.webp",
    "category": "hot",
    "hotPercent": "97.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "juicy-fruits-multihold",
    "title": "Juicy Fruits Multihold",
    "provider": "PP",
    "image": "/images/slots/juicy-fruits-multihold.webp",
    "category": "hot",
    "hotPercent": "97.2%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-bank-2",
    "title": "Golden Bank 2",
    "provider": "JILI",
    "image": "/images/slots/golden-bank-2.webp",
    "category": "hot",
    "hotPercent": "97.1%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "3-coin-treasures-2",
    "title": "3 Coin Treasures 2",
    "provider": "JILI",
    "image": "/images/slots/3-coin-treasures-2.webp",
    "category": "hot",
    "hotPercent": "97.1%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "return-of-the-dead",
    "title": "Return of the Dead",
    "provider": "PP",
    "image": "/images/slots/return-of-the-dead.webp",
    "category": "hot",
    "hotPercent": "96.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-dragon",
    "title": "Fortune Dragon",
    "provider": "PG",
    "image": "/images/slots/fortune-dragon.webp",
    "category": "hot",
    "hotPercent": "96.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "party-ape",
    "title": "Party Ape",
    "provider": "JILI",
    "image": "/images/slots/party-ape.webp",
    "category": "hot",
    "hotPercent": "96.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mega-ace",
    "title": "Mega Ace",
    "provider": "JILI",
    "image": "/images/slots/mega-ace.webp",
    "category": "hot",
    "hotPercent": "96.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-gems-legend",
    "title": "Fortune Gems Legend",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-legend.webp",
    "category": "hot",
    "hotPercent": "96.0%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wild-hot-chilli-reels",
    "title": "Wild Hot Chilli Reels",
    "provider": "",
    "image": "/images/slots/wild-hot-chilli-reels.webp",
    "category": "hot",
    "hotPercent": "96.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "aztec-gems-deluxe",
    "title": "Aztec Gems Deluxe",
    "provider": "PP",
    "image": "/images/slots/aztec-gems-deluxe.webp",
    "category": "cold",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "big-bass-bonanza-megaways",
    "title": "Big Bass Bonanza Megaways",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-megaways.webp",
    "category": "cold",
    "coldPercent": "3.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "mystical-spirits",
    "title": "Mystical Spirits",
    "provider": "PG",
    "image": "/images/slots/mystical-spirits.webp",
    "category": "cold",
    "coldPercent": "5.0%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "bow-of-artemis",
    "title": "Bow of Artemis",
    "provider": "PP",
    "image": "/images/slots/bow-of-artemis.webp",
    "category": "cold",
    "coldPercent": "7.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "hot-dj",
    "title": "Hot DJ",
    "provider": "CQ9",
    "image": "/images/slots/hot-dj.webp",
    "category": "cold",
    "coldPercent": "8.3%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "opensesameii",
    "title": "OpenSesameII",
    "provider": "JDB",
    "image": "/images/slots/opensesameii.webp",
    "category": "cold",
    "coldPercent": "8.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "bigger-bass-bonanza",
    "title": "Bigger Bass Bonanza",
    "provider": "PP",
    "image": "/images/slots/bigger-bass-bonanza.webp",
    "category": "cold",
    "coldPercent": "10.4%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ]
  },
  {
    "id": "aladdin-s-lamp",
    "title": "Aladdin's lamp",
    "provider": "CQ9",
    "image": "/images/slots/aladdin-s-lamp.webp",
    "category": "cold",
    "coldPercent": "10.8%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "big-bass-splash-1000",
    "title": "Big Bass Splash 1000",
    "provider": "PP",
    "image": "/images/slots/big-bass-splash-1000.webp",
    "category": "cold",
    "coldPercent": "11.3%",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "move-n-jump",
    "title": "Move n' Jump",
    "provider": "CQ9",
    "image": "/images/slots/move-n-jump.webp",
    "category": "cold",
    "coldPercent": "12.9%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "gu-gu-gu-2-m",
    "title": "Gu Gu Gu 2 M",
    "provider": "CQ9",
    "image": "/images/slots/gu-gu-gu-2-m.webp",
    "category": "cold",
    "coldPercent": "13.0%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "zeus",
    "title": "Zeus",
    "provider": "CQ9",
    "image": "/images/slots/zeus.webp",
    "category": "cold",
    "coldPercent": "13.8%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "cleocatra",
    "title": "Cleocatra",
    "provider": "PP",
    "image": "/images/slots/cleocatra.webp",
    "category": "cold",
    "coldPercent": "14.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "double-fortune",
    "title": "Double Fortune",
    "provider": "PG",
    "image": "/images/slots/double-fortune.webp",
    "category": "cold",
    "coldPercent": "14.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "big-bass-vegas-double-down-deluxe",
    "title": "Big Bass Vegas Double Down Deluxe",
    "provider": "PP",
    "image": "/images/slots/big-bass-vegas-double-down-deluxe.webp",
    "category": "cold",
    "coldPercent": "15.0%",
    "theme": "Nature",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "super-x",
    "title": "Super X",
    "provider": "PP",
    "image": "/images/slots/super-x.webp",
    "category": "cold",
    "coldPercent": "15.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "hero-of-the-3-kingdoms-cao-cao",
    "title": "Hero of the 3 Kingdoms - Cao Cao",
    "provider": "CQ9",
    "image": "/images/slots/hero-of-the-3-kingdoms-cao-cao.webp",
    "category": "cold",
    "coldPercent": "15.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "big-bass-halloween-2",
    "title": "Big Bass Halloween 2",
    "provider": "PP",
    "image": "/images/slots/big-bass-halloween-2.webp",
    "category": "cold",
    "coldPercent": "16.4%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-dragon",
    "title": "Fortune Dragon",
    "provider": "PG",
    "image": "/images/slots/fortune-dragon.webp",
    "category": "cold",
    "coldPercent": "20.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "divine-ways",
    "title": "Divine Ways",
    "provider": "Unknown",
    "image": "/images/slots/divine-ways.webp",
    "category": "cold",
    "coldPercent": "21.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "rainbow-reels",
    "title": "Rainbow Reels",
    "provider": "PP",
    "image": "/images/slots/rainbow-reels.webp",
    "category": "cold",
    "coldPercent": "21.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-temple",
    "title": "Golden Temple",
    "provider": "JILI",
    "image": "/images/slots/golden-temple.webp",
    "category": "cold",
    "coldPercent": "22.1%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "cotton-gang-affair",
    "title": "Cotton Gang Affair",
    "provider": "Unknown",
    "image": "/images/slots/cotton-gang-affair.webp",
    "category": "cold",
    "coldPercent": "22.8%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ]
  },
  {
    "id": "caishen-s-cash",
    "title": "Caishen's Cash",
    "provider": "PP",
    "image": "/images/slots/caishen-s-cash.webp",
    "category": "cold",
    "coldPercent": "24.7%",
    "theme": "Myth & History",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "monster-superlanche",
    "title": "Monster Superlanche",
    "provider": "PP",
    "image": "/images/slots/monster-superlanche.webp",
    "category": "cold",
    "coldPercent": "24.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "revenge-of-loki-megaways",
    "title": "Revenge of Loki Megaways",
    "provider": "PP",
    "image": "/images/slots/revenge-of-loki-megaways.webp",
    "category": "cold",
    "coldPercent": "25.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "ragnarok-thor-vs-loki",
    "title": "Ragnarok : Thor VS Loki",
    "provider": "JDB",
    "image": "/images/slots/ragnarok-thor-vs-loki.webp",
    "category": "cold",
    "coldPercent": "25.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "tsar-treasures",
    "title": "Tsar Treasures",
    "provider": "PG",
    "image": "/images/slots/tsar-treasures.webp",
    "category": "cold",
    "coldPercent": "25.6%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "jackpot-quest",
    "title": "Jackpot Quest",
    "provider": "Unknown",
    "image": "/images/slots/jackpot-quest.webp",
    "category": "cold",
    "coldPercent": "26.5%",
    "theme": "Adventures",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-beach-party",
    "title": "Wild Beach Party",
    "provider": "PP",
    "image": "/images/slots/wild-beach-party.webp",
    "category": "cold",
    "coldPercent": "26.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "museum-mystery",
    "title": "Museum Mystery",
    "provider": "PG",
    "image": "/images/slots/museum-mystery.webp",
    "category": "cold",
    "coldPercent": "27.1%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "5-god-beasts",
    "title": "5 God Beasts",
    "provider": "CQ9",
    "image": "/images/slots/5-god-beasts.webp",
    "category": "cold",
    "coldPercent": "27.2%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "gods-of-giza",
    "title": "Gods of Giza",
    "provider": "PP",
    "image": "/images/slots/gods-of-giza.webp",
    "category": "cold",
    "coldPercent": "27.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "rave-jump-mobile",
    "title": "Rave Jump mobile",
    "provider": "CQ9",
    "image": "/images/slots/rave-jump-mobile.webp",
    "category": "cold",
    "coldPercent": "28.8%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "diamond-royale",
    "title": "Diamond Royale",
    "provider": "Unknown",
    "image": "/images/slots/diamond-royale.webp",
    "category": "cold",
    "coldPercent": "29.0%",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "devil-s-number",
    "title": "Devil's Number",
    "provider": "Unknown",
    "image": "/images/slots/devil-s-number.webp",
    "category": "cold",
    "coldPercent": "29.1%",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "cash-mania",
    "title": "Cash Mania",
    "provider": "PG",
    "image": "/images/slots/cash-mania.webp",
    "category": "cold",
    "coldPercent": "29.3%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "tornado-rampage",
    "title": "Tornado Rampage",
    "provider": "PG",
    "image": "/images/slots/tornado-rampage.webp",
    "category": "cold",
    "coldPercent": "29.7%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "zombie-carnival",
    "title": "Zombie Carnival",
    "provider": "PP",
    "image": "/images/slots/zombie-carnival.webp",
    "category": "cold",
    "coldPercent": "29.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bounty-2048",
    "title": "WILD BOUNTY 2048",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-2048.webp",
    "category": "cold",
    "coldPercent": "29.9%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "2048"
  },
  {
    "id": "fengshen",
    "title": "Fengshen",
    "provider": "JILI",
    "image": "/images/slots/fengshen.webp",
    "category": "cold",
    "coldPercent": "30.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "chinese-treasures",
    "title": "Chinese Treasures",
    "provider": "Unknown",
    "image": "/images/slots/chinese-treasures.webp",
    "category": "cold",
    "coldPercent": "30.3%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "release-the-bison",
    "title": "Release the Bison",
    "provider": "PP",
    "image": "/images/slots/release-the-bison.webp",
    "category": "cold",
    "coldPercent": "30.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "los-muertos-locos",
    "title": "Los Muertos Locos",
    "provider": "Unknown",
    "image": "/images/slots/los-muertos-locos.webp",
    "category": "cold",
    "coldPercent": "30.5%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "the-great-stick-up",
    "title": "The Great Stick-Up",
    "provider": "PP",
    "image": "/images/slots/the-great-stick-up.webp",
    "category": "cold",
    "coldPercent": "31.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "songkran-splash",
    "title": "Songkran Splash",
    "provider": "PG",
    "image": "/images/slots/songkran-splash.webp",
    "category": "cold",
    "coldPercent": "32.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "diner-delights",
    "title": "Diner Delights",
    "provider": "PG",
    "image": "/images/slots/diner-delights.webp",
    "category": "cold",
    "coldPercent": "32.4%",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "aztec-powernudge",
    "title": "Aztec Powernudge",
    "provider": "PP",
    "image": "/images/slots/aztec-powernudge.webp",
    "category": "cold",
    "coldPercent": "32.8%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "treasure-mine",
    "title": "Treasure Mine",
    "provider": "Unknown",
    "image": "/images/slots/treasure-mine.webp",
    "category": "cold",
    "coldPercent": "33.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "aztec-treasure-hunt",
    "title": "Aztec Treasure Hunt",
    "provider": "PP",
    "image": "/images/slots/aztec-treasure-hunt.webp",
    "category": "cold",
    "coldPercent": "33.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "colossal-cash-zone",
    "title": "Colossal Cash Zone",
    "provider": "PP",
    "image": "/images/slots/colossal-cash-zone.webp",
    "category": "cold",
    "coldPercent": "33.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "football-fever-m",
    "title": "Football Fever M",
    "provider": "CQ9",
    "image": "/images/slots/football-fever-m.webp",
    "category": "cold",
    "coldPercent": "33.4%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-rabbit",
    "title": "Fortune Rabbit",
    "provider": "PG",
    "image": "/images/slots/fortune-rabbit.webp",
    "category": "cold",
    "coldPercent": "34.0%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "garuda-gems",
    "title": "Garuda Gems",
    "provider": "PG",
    "image": "/images/slots/garuda-gems.webp",
    "category": "cold",
    "coldPercent": "34.6%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "the-great-icescape",
    "title": "The Great Icescape",
    "provider": "PG",
    "image": "/images/slots/the-great-icescape.webp",
    "category": "cold",
    "coldPercent": "34.9%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "sweet-bonanza-xmas",
    "title": "Sweet Bonanza Xmas",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza-xmas.webp",
    "category": "cold",
    "coldPercent": "34.9%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dragon-s-luck-deluxe",
    "title": "Dragon's Luck Deluxe",
    "provider": "Unknown",
    "image": "/images/slots/dragon-s-luck-deluxe.webp",
    "category": "cold",
    "coldPercent": "35.2%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "prosperity-tiger",
    "title": "Prosperity Tiger",
    "provider": "JDB",
    "image": "/images/slots/prosperity-tiger.webp",
    "category": "cold",
    "coldPercent": "35.3%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "aztec-spins",
    "title": "Aztec Spins",
    "provider": "Unknown",
    "image": "/images/slots/aztec-spins.webp",
    "category": "cold",
    "coldPercent": "35.6%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "diamond-blitz",
    "title": "Diamond Blitz",
    "provider": "Unknown",
    "image": "/images/slots/diamond-blitz.webp",
    "category": "cold",
    "coldPercent": "35.6%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "gem-saviour",
    "title": "Gem Saviour",
    "provider": "PG",
    "image": "/images/slots/gem-saviour.webp",
    "category": "cold",
    "coldPercent": "36.3%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "medusa-s-stone",
    "title": "Medusa’s Stone",
    "provider": "PP",
    "image": "/images/slots/medusa-s-stone.webp",
    "category": "cold",
    "coldPercent": "36.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mystery-mice",
    "title": "Mystery Mice",
    "provider": "PP",
    "image": "/images/slots/mystery-mice.webp",
    "category": "cold",
    "coldPercent": "36.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "caishen-wins",
    "title": "Caishen Wins",
    "provider": "PG",
    "image": "/images/slots/caishen-wins.webp",
    "category": "cold",
    "coldPercent": "37.3%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "gemstones-gold",
    "title": "Gemstones Gold",
    "provider": "PG",
    "image": "/images/slots/gemstones-gold.webp",
    "category": "cold",
    "coldPercent": "37.5%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fury-of-odin-megaways",
    "title": "Fury of Odin Megaways",
    "provider": "PP",
    "image": "/images/slots/fury-of-odin-megaways.webp",
    "category": "cold",
    "coldPercent": "37.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "hoard-of-poseidon",
    "title": "Hoard of Poseidon",
    "provider": "Unknown",
    "image": "/images/slots/hoard-of-poseidon.webp",
    "category": "cold",
    "coldPercent": "37.6%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "sugar-supreme-powernudge",
    "title": "Sugar Supreme Powernudge",
    "provider": "PP",
    "image": "/images/slots/sugar-supreme-powernudge.webp",
    "category": "cold",
    "coldPercent": "37.8%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "chin-shi-huang",
    "title": "Chin Shi Huang",
    "provider": "JILI",
    "image": "/images/slots/chin-shi-huang.webp",
    "category": "cold",
    "coldPercent": "38.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-of-giza",
    "title": "Fortune of Giza",
    "provider": "PP",
    "image": "/images/slots/fortune-of-giza.webp",
    "category": "cold",
    "coldPercent": "38.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fruit-party-2",
    "title": "Fruit Party 2",
    "provider": "PP",
    "image": "/images/slots/fruit-party-2.webp",
    "category": "cold",
    "coldPercent": "38.5%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ancient-script",
    "title": "Ancient Script",
    "provider": "Unknown",
    "image": "/images/slots/ancient-script.webp",
    "category": "cold",
    "coldPercent": "39.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ]
  },
  {
    "id": "hot-pepper",
    "title": "Hot Pepper",
    "provider": "PP",
    "image": "/images/slots/hot-pepper.webp",
    "category": "cold",
    "coldPercent": "41.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fire-stampede-ultimate",
    "title": "Fire Stampede Ultimate",
    "provider": "PP",
    "image": "/images/slots/fire-stampede-ultimate.webp",
    "category": "cold",
    "hotPercent": "41.0%",
    "coldPercent": "41.0%",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "opera-dynasty",
    "title": "Opera Dynasty",
    "provider": "PG",
    "image": "/images/slots/opera-dynasty.webp",
    "category": "cold",
    "coldPercent": "41.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "the-dog-house-multihold",
    "title": "The Dog House Multihold",
    "provider": "PP",
    "image": "/images/slots/the-dog-house-multihold.webp",
    "category": "cold",
    "coldPercent": "41.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "gems-bonanza",
    "title": "Gems Bonanza",
    "provider": "PP",
    "image": "/images/slots/gems-bonanza.webp",
    "category": "cold",
    "coldPercent": "41.8%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "7-monkeys",
    "title": "7 Monkeys",
    "provider": "PP",
    "image": "/images/slots/7-monkeys.webp",
    "category": "cold",
    "coldPercent": "42.2%",
    "theme": "Nature",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "zeus-vs-hades-gods-of-war",
    "title": "Zeus vs Hades - Gods of War",
    "provider": "PP",
    "image": "/images/slots/zeus-vs-hades-gods-of-war.webp",
    "category": "cold",
    "coldPercent": "42.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "the-dragon-tiger",
    "title": "The Dragon Tiger",
    "provider": "PP",
    "image": "/images/slots/the-dragon-tiger.webp",
    "category": "cold",
    "coldPercent": "42.7%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "win-win-won",
    "title": "Win Win Won",
    "provider": "PG",
    "image": "/images/slots/win-win-won.webp",
    "category": "cold",
    "coldPercent": "43.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "medusa-ii",
    "title": "Medusa II",
    "provider": "PG",
    "image": "/images/slots/medusa-ii.webp",
    "category": "cold",
    "coldPercent": "43.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "three-crazy-piggies",
    "title": "Three Crazy Piggies",
    "provider": "PG",
    "image": "/images/slots/three-crazy-piggies.webp",
    "category": "cold",
    "coldPercent": "43.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dragon-tiger-luck",
    "title": "Dragon Tiger Luck",
    "provider": "PG",
    "image": "/images/slots/dragon-tiger-luck.webp",
    "category": "cold",
    "coldPercent": "44.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "five-star",
    "title": "Five Star",
    "provider": "Unknown",
    "image": "/images/slots/five-star.webp",
    "category": "cold",
    "coldPercent": "44.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "honey-trap-of-diao-chan",
    "title": "Honey Trap of Diao Chan",
    "provider": "PG",
    "image": "/images/slots/honey-trap-of-diao-chan.webp",
    "category": "cold",
    "coldPercent": "44.7%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "black-wukong",
    "title": "Black Wukong",
    "provider": "CQ9",
    "image": "/images/slots/black-wukong.webp",
    "category": "cold",
    "coldPercent": "44.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "big-cat-rescue-megawaystm",
    "title": "Big Cat Rescue Megaways™",
    "provider": "Unknown",
    "image": "/images/slots/big-cat-rescue-megawaystm.webp",
    "category": "cold",
    "coldPercent": "45.1%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "buffalo-king-untamed-megaways",
    "title": "Buffalo King Untamed Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-untamed-megaways.webp",
    "category": "cold",
    "coldPercent": "45.1%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "big-bass-bonanza-keeping-it-reel",
    "title": "Big Bass Bonanza - Keeping it Reel",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-keeping-it-reel.webp",
    "category": "cold",
    "coldPercent": "45.3%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fa-cai-shen2",
    "title": "Fa Cai Shen2",
    "provider": "CQ9",
    "image": "/images/slots/fa-cai-shen2.webp",
    "category": "cold",
    "coldPercent": "45.6%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "new-year",
    "title": "New Year",
    "provider": "JDB",
    "image": "/images/slots/new-year.webp",
    "category": "cold",
    "coldPercent": "46.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "phoenix-rises",
    "title": "Phoenix Rises",
    "provider": "PG",
    "image": "/images/slots/phoenix-rises.webp",
    "category": "cold",
    "coldPercent": "46.1%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mahjong",
    "title": "Mahjong",
    "provider": "JDB",
    "image": "/images/slots/mahjong.webp",
    "category": "cold",
    "coldPercent": "46.2%",
    "theme": "Others",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "777-super-strike",
    "title": "777 Super Strike",
    "provider": "Unknown",
    "image": "/images/slots/777-super-strike.webp",
    "category": "cold",
    "coldPercent": "46.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "super-golf-drive",
    "title": "Super Golf Drive",
    "provider": "PG",
    "image": "/images/slots/super-golf-drive.webp",
    "category": "cold",
    "coldPercent": "48.5%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "rise-of-apollo",
    "title": "Rise of Apollo",
    "provider": "PG",
    "image": "/images/slots/rise-of-apollo.webp",
    "category": "cold",
    "coldPercent": "48.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "dj-neko",
    "title": "DJ Neko",
    "provider": "PP",
    "image": "/images/slots/dj-neko.webp",
    "category": "cold",
    "coldPercent": "48.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "big-bass-halloween-3",
    "title": "Big Bass Halloween 3",
    "provider": "PP",
    "image": "/images/slots/big-bass-halloween-3.webp",
    "category": "cold",
    "coldPercent": "48.9%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "jack-in-a-pot",
    "title": "Jack In A Pot",
    "provider": "Unknown",
    "image": "/images/slots/jack-in-a-pot.webp",
    "category": "cold",
    "coldPercent": "49.0%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "keno",
    "title": "Keno",
    "provider": "JILI",
    "image": "/images/slots/keno.webp",
    "category": "cold",
    "coldPercent": "49.7%",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-dice",
    "title": "Lucky Dice",
    "provider": "PP",
    "image": "/images/slots/lucky-dice.webp",
    "category": "cold",
    "coldPercent": "49.8%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "zombie-blasters",
    "title": "Zombie Blasters",
    "provider": "PG",
    "image": "/images/slots/zombie-blasters.webp",
    "category": "cold",
    "coldPercent": "50.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-west-gold",
    "title": "Wild West Gold",
    "provider": "PP",
    "image": "/images/slots/wild-west-gold.webp",
    "category": "cold",
    "coldPercent": "50.6%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "cricket-fever",
    "title": "Cricket Fever",
    "provider": "CQ9",
    "image": "/images/slots/cricket-fever.webp",
    "category": "cold",
    "coldPercent": "51.0%",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "ganesha-gold",
    "title": "Ganesha Gold",
    "provider": "PG",
    "image": "/images/slots/ganesha-gold.webp",
    "category": "cold",
    "coldPercent": "51.1%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "cai-shen-168",
    "title": "Cai Shen 168",
    "provider": "Unknown",
    "image": "/images/slots/cai-shen-168.webp",
    "category": "cold",
    "coldPercent": "51.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "egyptian-fortunes",
    "title": "Egyptian Fortunes",
    "provider": "PP",
    "image": "/images/slots/egyptian-fortunes.webp",
    "category": "cold",
    "coldPercent": "51.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "rabbit-garden",
    "title": "Rabbit Garden",
    "provider": "PP",
    "image": "/images/slots/rabbit-garden.webp",
    "category": "cold",
    "coldPercent": "51.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "good-fortune-m",
    "title": "Good Fortune M",
    "provider": "CQ9",
    "image": "/images/slots/good-fortune-m.webp",
    "category": "cold",
    "coldPercent": "51.8%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dragons-clusterbustertm",
    "title": "Dragons Clusterbuster™",
    "provider": "Unknown",
    "image": "/images/slots/dragons-clusterbustertm.webp",
    "category": "cold",
    "coldPercent": "52.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "rooster-rumble",
    "title": "Rooster Rumble",
    "provider": "PG",
    "image": "/images/slots/rooster-rumble.webp",
    "category": "cold",
    "coldPercent": "52.7%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "horse-of-bounty",
    "title": "Horse of Bounty",
    "provider": "JDB",
    "image": "/images/slots/horse-of-bounty.webp",
    "category": "cold",
    "coldPercent": "52.8%",
    "theme": "Adventures",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "bandit-megaways",
    "title": "Bandit Megaways",
    "provider": "PP",
    "image": "/images/slots/bandit-megaways.webp",
    "category": "cold",
    "coldPercent": "53.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "wild-wild-chest",
    "title": "Wild Wild Chest",
    "provider": "Unknown",
    "image": "/images/slots/wild-wild-chest.webp",
    "category": "cold",
    "coldPercent": "53.6%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "wonder-elephant",
    "title": "Wonder Elephant",
    "provider": "JDB",
    "image": "/images/slots/wonder-elephant.webp",
    "category": "cold",
    "coldPercent": "53.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "jungle-gorilla",
    "title": "Jungle Gorilla",
    "provider": "PP",
    "image": "/images/slots/jungle-gorilla.webp",
    "category": "cold",
    "coldPercent": "54.4%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "day-of-dead",
    "title": "Day of Dead",
    "provider": "PP",
    "image": "/images/slots/day-of-dead.webp",
    "category": "cold",
    "coldPercent": "54.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lantern-wealth",
    "title": "Lantern Wealth",
    "provider": "JDB",
    "image": "/images/slots/lantern-wealth.webp",
    "category": "cold",
    "coldPercent": "55.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "werewolf-s-hunt",
    "title": "Werewolf's Hunt",
    "provider": "PG",
    "image": "/images/slots/werewolf-s-hunt.webp",
    "category": "cold",
    "coldPercent": "55.8%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "gem-fire-fortune",
    "title": "Gem Fire Fortune",
    "provider": "PP",
    "image": "/images/slots/gem-fire-fortune.webp",
    "category": "cold",
    "hotPercent": "55.8%",
    "coldPercent": "55.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "butterfly-blossom",
    "title": "Butterfly Blossom",
    "provider": "PG",
    "image": "/images/slots/butterfly-blossom.webp",
    "category": "cold",
    "coldPercent": "56.0%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-doggy",
    "title": "Lucky Doggy",
    "provider": "JILI",
    "image": "/images/slots/lucky-doggy.webp",
    "category": "cold",
    "coldPercent": "56.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wheel-of-happiness",
    "title": "Wheel of Happiness",
    "provider": "PP",
    "image": "/images/slots/wheel-of-happiness.webp",
    "category": "cold",
    "coldPercent": "56.7%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "blossom-of-wealth",
    "title": "Blossom of Wealth",
    "provider": "JDB",
    "image": "/images/slots/blossom-of-wealth.webp",
    "category": "cold",
    "coldPercent": "57.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dragon-s-fire",
    "title": "Dragon's Fire",
    "provider": "Unknown",
    "image": "/images/slots/dragon-s-fire.webp",
    "category": "cold",
    "hotPercent": "57.3%",
    "coldPercent": "57.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "book-of-gold",
    "title": "Book of Gold",
    "provider": "JILI",
    "image": "/images/slots/book-of-gold.webp",
    "category": "cold",
    "coldPercent": "57.8%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mr-miser",
    "title": "Mr. Miser",
    "provider": "CQ9",
    "image": "/images/slots/mr-miser.webp",
    "category": "cold",
    "coldPercent": "58.1%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "chicky-run",
    "title": "Chicky Run",
    "provider": "PG",
    "image": "/images/slots/chicky-run.webp",
    "category": "cold",
    "coldPercent": "58.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "win-win-fish-prawn-crab",
    "title": "Win Win Fish Prawn Crab",
    "provider": "PG",
    "image": "/images/slots/win-win-fish-prawn-crab.webp",
    "category": "cold",
    "coldPercent": "58.6%",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "santa-s-xmas-rush",
    "title": "Santa's Xmas Rush",
    "provider": "PP",
    "image": "/images/slots/santa-s-xmas-rush.webp",
    "category": "cold",
    "coldPercent": "59.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "candy-bonanza",
    "title": "Candy Bonanza",
    "provider": "PG",
    "image": "/images/slots/candy-bonanza.webp",
    "category": "cold",
    "coldPercent": "59.2%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-house",
    "title": "Fortune House",
    "provider": "Unknown",
    "image": "/images/slots/fortune-house.webp",
    "category": "cold",
    "coldPercent": "59.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wild-heist-cashout",
    "title": "Wild Heist Cashout",
    "provider": "PG",
    "image": "/images/slots/wild-heist-cashout.webp",
    "category": "cold",
    "coldPercent": "59.6%",
    "theme": "Others",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "ten-elements",
    "title": "Ten Elements",
    "provider": "Unknown",
    "image": "/images/slots/ten-elements.webp",
    "category": "cold",
    "coldPercent": "59.6%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "flirting-scholar-tang",
    "title": "Flirting Scholar Tang",
    "provider": "JDB",
    "image": "/images/slots/flirting-scholar-tang.webp",
    "category": "cold",
    "coldPercent": "60.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fa-fa-fa",
    "title": "Fa Fa Fa",
    "provider": "JILI",
    "image": "/images/slots/fa-fa-fa.webp",
    "category": "cold",
    "coldPercent": "60.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "safari-mystery",
    "title": "Safari Mystery",
    "provider": "JILI",
    "image": "/images/slots/safari-mystery.webp",
    "category": "cold",
    "coldPercent": "60.3%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dragon-hero",
    "title": "Dragon Hero",
    "provider": "PP",
    "image": "/images/slots/dragon-hero.webp",
    "category": "cold",
    "coldPercent": "60.7%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "voyage-of-blast-raider-x-lock",
    "title": "Voyage of Blast Raider X-Lock",
    "provider": "JDB",
    "image": "/images/slots/voyage-of-blast-raider-x-lock.webp",
    "category": "cold",
    "coldPercent": "60.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "oriental-prosperity",
    "title": "Oriental Prosperity",
    "provider": "PG",
    "image": "/images/slots/oriental-prosperity.webp",
    "category": "cold",
    "coldPercent": "61.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "bingo-mania",
    "title": "Bingo Mania",
    "provider": "PP",
    "image": "/images/slots/bingo-mania.webp",
    "category": "cold",
    "coldPercent": "61.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "kingsman",
    "title": "Kingsman",
    "provider": "JDB",
    "image": "/images/slots/kingsman.webp",
    "category": "cold",
    "coldPercent": "61.5%",
    "theme": "Movie",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "go-for-champion",
    "title": "Go For Champion",
    "provider": "JILI",
    "image": "/images/slots/go-for-champion.webp",
    "category": "cold",
    "coldPercent": "61.5%",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "oishi-delights",
    "title": "Oishi Delights",
    "provider": "PG",
    "image": "/images/slots/oishi-delights.webp",
    "category": "cold",
    "coldPercent": "61.8%",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  }
]

const slotsBatch4: SlotGame[] = [
{
    "id": "fish-eye",
    "title": "Fish Eye",
    "provider": "PP",
    "image": "/images/slots/fish-eye.webp",
    "category": "cold",
    "coldPercent": "61.9%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "floating-dragon-new-year-festival-ultra-megawaystm-hold-spin",
    "title": "Floating Dragon New Year Festival Ultra Megaways™ Hold & Spin",
    "provider": "PP",
    "image": "/images/slots/floating-dragon-new-year-festival-ultra-megawaystm-hold-spin.webp",
    "category": "cold",
    "coldPercent": "62.2%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "wild-wild-riches",
    "title": "Wild Wild Riches",
    "provider": "PP",
    "image": "/images/slots/wild-wild-riches.webp",
    "category": "cold",
    "coldPercent": "62.5%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-tiger",
    "title": "Fortune Tiger",
    "provider": "PG",
    "image": "/images/slots/fortune-tiger.webp",
    "category": "cold",
    "coldPercent": "62.7%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-panda",
    "title": "Lucky Panda",
    "provider": "PP",
    "image": "/images/slots/lucky-panda.webp",
    "category": "cold",
    "coldPercent": "62.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "egypt-s-book-of-mystery",
    "title": "Egypt\"s Book of Mystery",
    "provider": "PG",
    "image": "/images/slots/egypt-s-book-of-mystery.webp",
    "category": "cold",
    "coldPercent": "62.9%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "resurrecting-riches",
    "title": "Resurrecting Riches",
    "provider": "PP",
    "image": "/images/slots/resurrecting-riches.webp",
    "category": "cold",
    "coldPercent": "62.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "treasure-mine-power-reelstm",
    "title": "Treasure Mine Power Reels™",
    "provider": "Unknown",
    "image": "/images/slots/treasure-mine-power-reelstm.webp",
    "category": "cold",
    "coldPercent": "63.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "777",
    "title": "777",
    "provider": "CQ9",
    "image": "/images/slots/777.webp",
    "category": "cold",
    "coldPercent": "63.9%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mining-rush",
    "title": "Mining Rush",
    "provider": "PP",
    "image": "/images/slots/mining-rush.webp",
    "category": "cold",
    "coldPercent": "63.9%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lucky-piggy",
    "title": "Lucky Piggy",
    "provider": "PG",
    "image": "/images/slots/lucky-piggy.webp",
    "category": "cold",
    "coldPercent": "64.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dream-destiny",
    "title": "Dream Destiny",
    "provider": "Unknown",
    "image": "/images/slots/dream-destiny.webp",
    "category": "cold",
    "coldPercent": "64.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "gears-of-horus",
    "title": "Gears of Horus",
    "provider": "PP",
    "image": "/images/slots/gears-of-horus.webp",
    "category": "cold",
    "coldPercent": "64.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "amazing-money-machine",
    "title": "Amazing Money Machine",
    "provider": "PP",
    "image": "/images/slots/amazing-money-machine.webp",
    "category": "cold",
    "coldPercent": "64.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "casino-spin",
    "title": "Casino Spin",
    "provider": "Unknown",
    "image": "/images/slots/casino-spin.webp",
    "category": "cold",
    "coldPercent": "64.2%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "cash-volt",
    "title": "Cash Volt",
    "provider": "Unknown",
    "image": "/images/slots/cash-volt.webp",
    "category": "cold",
    "coldPercent": "64.3%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "hawaii-beauty",
    "title": "Hawaii Beauty",
    "provider": "JILI",
    "image": "/images/slots/hawaii-beauty.webp",
    "category": "cold",
    "coldPercent": "65.0%",
    "theme": "Romantic",
    "features": [
      "Auto Game"
    ]
  },
  {
    "id": "elf-bingo",
    "title": "Elf Bingo",
    "provider": "JILI",
    "image": "/images/slots/elf-bingo.webp",
    "category": "cold",
    "coldPercent": "65.3%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "sweet-pop",
    "title": "Sweet POP",
    "provider": "CQ9",
    "image": "/images/slots/sweet-pop.webp",
    "category": "cold",
    "coldPercent": "65.3%",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "circus-delight",
    "title": "Circus Delight",
    "provider": "PG",
    "image": "/images/slots/circus-delight.webp",
    "category": "cold",
    "coldPercent": "65.3%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "heist-stakes",
    "title": "Heist Stakes",
    "provider": "PG",
    "image": "/images/slots/heist-stakes.webp",
    "category": "cold",
    "coldPercent": "65.6%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "crazy-hunter-2",
    "title": "Crazy Hunter 2",
    "provider": "JILI",
    "image": "/images/slots/crazy-hunter-2.webp",
    "category": "cold",
    "coldPercent": "66.0%",
    "theme": "Adventures",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "chinese-new-year-deluxe",
    "title": "CHINESE NEW YEAR DELUXE",
    "provider": "CQ9",
    "image": "/images/slots/chinese-new-year-deluxe.webp",
    "category": "cold",
    "coldPercent": "66.3%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "bubble-beauty",
    "title": "Bubble Beauty",
    "provider": "JILI",
    "image": "/images/slots/bubble-beauty.webp",
    "category": "cold",
    "coldPercent": "66.4%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "777-strike",
    "title": "777 Strike",
    "provider": "Unknown",
    "image": "/images/slots/777-strike.webp",
    "category": "cold",
    "coldPercent": "66.9%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "gates-of-olympus-xmas-1000",
    "title": "Gates of Olympus Xmas 1000",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus-xmas-1000.webp",
    "category": "cold",
    "coldPercent": "67.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "5-lions-megaways-2",
    "title": "5 Lions Megaways 2",
    "provider": "PP",
    "image": "/images/slots/5-lions-megaways-2.webp",
    "category": "cold",
    "coldPercent": "67.6%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "majestic-express-gold-run",
    "title": "Majestic Express Gold Run",
    "provider": "PP",
    "image": "/images/slots/majestic-express-gold-run.webp",
    "category": "cold",
    "coldPercent": "68.4%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "shanghai-beauty",
    "title": "Shanghai Beauty",
    "provider": "JILI",
    "image": "/images/slots/shanghai-beauty.webp",
    "category": "cold",
    "coldPercent": "68.7%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "anaconda-gold",
    "title": "Anaconda Gold",
    "provider": "PP",
    "image": "/images/slots/anaconda-gold.webp",
    "category": "cold",
    "coldPercent": "69.5%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "top-ace",
    "title": "Top Ace",
    "provider": "CQ9",
    "image": "/images/slots/top-ace.webp",
    "category": "cold",
    "coldPercent": "69.8%",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "elemental-link-fire",
    "title": "Elemental Link Fire",
    "provider": "JDB",
    "image": "/images/slots/elemental-link-fire.webp",
    "category": "cold",
    "coldPercent": "69.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "orientanimals",
    "title": "OrientAnimals",
    "provider": "JDB",
    "image": "/images/slots/orientanimals.webp",
    "category": "cold",
    "coldPercent": "70.0%",
    "theme": "Nature",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "santa-s-great-gifts",
    "title": "Santa's Great Gifts",
    "provider": "PP",
    "image": "/images/slots/santa-s-great-gifts.webp",
    "category": "cold",
    "coldPercent": "70.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "teeed-up",
    "title": "TEEED UP!",
    "provider": "JDB",
    "image": "/images/slots/teeed-up.webp",
    "category": "cold",
    "new": true,
    "coldPercent": "70.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ways-of-the-qilin-ultimate",
    "title": "WAYS OF THE QILIN Ultimate",
    "provider": "CQ9",
    "image": "/images/slots/ways-of-the-qilin-ultimate.webp",
    "category": "cold",
    "coldPercent": "70.8%",
    "theme": "Myth & History",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "monkeys-wild-party",
    "title": "Monkeys Wild Party",
    "provider": "PG",
    "image": "/images/slots/monkeys-wild-party.webp",
    "category": "cold",
    "coldPercent": "71.4%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "witch-heart-megawaystm",
    "title": "Witch Heart Megaways™",
    "provider": "PP",
    "image": "/images/slots/witch-heart-megawaystm.webp",
    "category": "cold",
    "coldPercent": "71.4%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "shogun",
    "title": "Shogun",
    "provider": "JILI",
    "image": "/images/slots/shogun.webp",
    "category": "cold",
    "coldPercent": "72.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "safari-wilds",
    "title": "Safari Wilds",
    "provider": "PG",
    "image": "/images/slots/safari-wilds.webp",
    "category": "cold",
    "coldPercent": "72.5%",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "potion-wizard",
    "title": "Potion Wizard",
    "provider": "JILI",
    "image": "/images/slots/potion-wizard.webp",
    "category": "cold",
    "coldPercent": "72.7%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "vault-cracker",
    "title": "Vault Cracker",
    "provider": "Unknown",
    "image": "/images/slots/vault-cracker.webp",
    "category": "cold",
    "coldPercent": "72.8%",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mummy-s-jewels",
    "title": "Mummy’s Jewels",
    "provider": "PP",
    "image": "/images/slots/mummy-s-jewels.webp",
    "category": "cold",
    "coldPercent": "72.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "cake-and-ice-cream",
    "title": "Cake and Ice Cream",
    "provider": "Unknown",
    "image": "/images/slots/cake-and-ice-cream.webp",
    "category": "cold",
    "coldPercent": "73.1%",
    "theme": "Foods",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "sugarlicious-everywaytm",
    "title": "Sugarlicious EveryWay™",
    "provider": "Unknown",
    "image": "/images/slots/sugarlicious-everywaytm.webp",
    "category": "cold",
    "coldPercent": "73.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "starlight-princess-super-scatter",
    "title": "Starlight Princess Super Scatter",
    "provider": "PP",
    "image": "/images/slots/starlight-princess-super-scatter.webp",
    "category": "cold",
    "coldPercent": "73.7%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wukong-peaches",
    "title": "WuKong&Peaches",
    "provider": "CQ9",
    "image": "/images/slots/wukong-peaches.webp",
    "category": "cold",
    "coldPercent": "73.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "big-bass-bonanza",
    "title": "Big Bass Bonanza",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza.webp",
    "category": "cold",
    "coldPercent": "73.8%",
    "theme": "Nature",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-tree",
    "title": "Fortune Tree",
    "provider": "JILI",
    "image": "/images/slots/fortune-tree.webp",
    "category": "cold",
    "coldPercent": "74.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "bounty-raid-2",
    "title": "Bounty Raid 2",
    "provider": "Unknown",
    "image": "/images/slots/bounty-raid-2.webp",
    "category": "cold",
    "coldPercent": "74.1%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "legacy-of-olympus",
    "title": "Legacy of Olympus",
    "provider": "CQ9",
    "image": "/images/slots/legacy-of-olympus.webp",
    "category": "cold",
    "coldPercent": "74.3%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "winning-mask",
    "title": "Winning Mask",
    "provider": "JDB",
    "image": "/images/slots/winning-mask.webp",
    "category": "cold",
    "coldPercent": "74.4%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "rapid-gems-777",
    "title": "Rapid Gems 777",
    "provider": "JILI",
    "image": "/images/slots/rapid-gems-777.webp",
    "category": "cold",
    "coldPercent": "74.4%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "arcade-bomb",
    "title": "Arcade Bomb",
    "provider": "Unknown",
    "image": "/images/slots/arcade-bomb.webp",
    "category": "cold",
    "coldPercent": "74.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-serge",
    "title": "Super Serge",
    "provider": "PP",
    "image": "/images/slots/super-serge.webp",
    "category": "cold",
    "new": true,
    "coldPercent": "74.9%",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-rich",
    "title": "Super Rich",
    "provider": "JILI",
    "image": "/images/slots/super-rich.webp",
    "category": "cold",
    "coldPercent": "75.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "aztec-gems-megawaystm",
    "title": "Aztec Gems Megaways™",
    "provider": "PP",
    "image": "/images/slots/aztec-gems-megawaystm.webp",
    "category": "cold",
    "coldPercent": "75.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "rooster-in-love",
    "title": "Rooster In Love",
    "provider": "JDB",
    "image": "/images/slots/rooster-in-love.webp",
    "category": "cold",
    "coldPercent": "75.5%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fruity-wheel",
    "title": "Fruity Wheel",
    "provider": "JILI",
    "image": "/images/slots/fruity-wheel.webp",
    "category": "cold",
    "coldPercent": "75.5%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "100-blazing-clover",
    "title": "100 Blazing Clover",
    "provider": "JILI",
    "image": "/images/slots/100-blazing-clover.webp",
    "category": "cold",
    "coldPercent": "75.5%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "supernova",
    "title": "Supernova",
    "provider": "JILI",
    "image": "/images/slots/supernova.webp",
    "category": "cold",
    "coldPercent": "75.5%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "zeus-lightning-power-reels",
    "title": "Zeus' Lightning Power Reels",
    "provider": "Unknown",
    "image": "/images/slots/zeus-lightning-power-reels.webp",
    "category": "cold",
    "coldPercent": "75.9%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "candy-baby",
    "title": "Candy Baby",
    "provider": "JILI",
    "image": "/images/slots/candy-baby.webp",
    "category": "cold",
    "coldPercent": "76.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dreams-of-macau",
    "title": "Dreams of Macau",
    "provider": "PG",
    "image": "/images/slots/dreams-of-macau.webp",
    "category": "cold",
    "coldPercent": "76.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "big-bass-boxing-bonus-round",
    "title": "Big Bass Boxing Bonus Round",
    "provider": "PP",
    "image": "/images/slots/big-bass-boxing-bonus-round.webp",
    "category": "cold",
    "coldPercent": "76.1%",
    "theme": "Nature",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "vampy-party",
    "title": "Vampy Party",
    "provider": "PP",
    "image": "/images/slots/vampy-party.webp",
    "category": "cold",
    "coldPercent": "76.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fa-fa-babies",
    "title": "Fa Fa Babies",
    "provider": "Unknown",
    "image": "/images/slots/fa-fa-babies.webp",
    "category": "cold",
    "coldPercent": "77.4%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "triple-tigers",
    "title": "Triple Tigers",
    "provider": "PP",
    "image": "/images/slots/triple-tigers.webp",
    "category": "cold",
    "coldPercent": "77.5%",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "6-jokers",
    "title": "6 Jokers",
    "provider": "PP",
    "image": "/images/slots/6-jokers.webp",
    "category": "cold",
    "coldPercent": "77.6%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "dragon",
    "title": "Dragon",
    "provider": "JDB",
    "image": "/images/slots/dragon.webp",
    "category": "cold",
    "coldPercent": "77.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "ganesha-fortune",
    "title": "Ganesha Fortune",
    "provider": "PG",
    "image": "/images/slots/ganesha-fortune.webp",
    "category": "cold",
    "coldPercent": "77.7%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "top-ace-2",
    "title": "Top Ace 2",
    "provider": "CQ9",
    "image": "/images/slots/top-ace-2.webp",
    "category": "cold",
    "coldPercent": "78.1%",
    "theme": "Sports",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "wheel-o-gold",
    "title": "Wheel O'Gold",
    "provider": "PP",
    "image": "/images/slots/wheel-o-gold.webp",
    "category": "cold",
    "coldPercent": "78.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "gates-of-olympus",
    "title": "Gates of Olympus",
    "provider": "PP",
    "image": "/images/slots/gates-of-olympus.webp",
    "category": "cold",
    "coldPercent": "78.2%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "mahjong-wilds",
    "title": "Mahjong Wilds",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds.webp",
    "category": "cold",
    "coldPercent": "78.3%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "knockout-riches",
    "title": "Knockout Riches",
    "provider": "PG",
    "image": "/images/slots/knockout-riches.webp",
    "category": "cold",
    "coldPercent": "78.8%",
    "theme": "Sports",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-disco-night",
    "title": "Wild Disco Night",
    "provider": "CQ9",
    "image": "/images/slots/wild-disco-night.webp",
    "category": "cold",
    "coldPercent": "78.9%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "vampirekiss",
    "title": "VampireKiss",
    "provider": "CQ9",
    "image": "/images/slots/vampirekiss.webp",
    "category": "cold",
    "coldPercent": "78.9%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "sung-wukong",
    "title": "Sung Wukong",
    "provider": "CQ9",
    "image": "/images/slots/sung-wukong.webp",
    "category": "cold",
    "coldPercent": "79.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "lucky-coming",
    "title": "Lucky Coming",
    "provider": "JILI",
    "image": "/images/slots/lucky-coming.webp",
    "category": "cold",
    "coldPercent": "79.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "winter-wonders",
    "title": "Winter Wonders",
    "provider": "Unknown",
    "image": "/images/slots/winter-wonders.webp",
    "category": "cold",
    "coldPercent": "79.0%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mystic-potion",
    "title": "Mystic Potion",
    "provider": "PG",
    "image": "/images/slots/mystic-potion.webp",
    "category": "cold",
    "coldPercent": "79.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "destiny-of-sun-moon",
    "title": "Destiny of Sun & Moon",
    "provider": "PG",
    "image": "/images/slots/destiny-of-sun-moon.webp",
    "category": "cold",
    "coldPercent": "79.5%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "zeus-2",
    "title": "Zeus",
    "provider": "JILI",
    "image": "/images/slots/zeus-2.webp",
    "category": "cold",
    "coldPercent": "79.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "journey-to-the-wealth",
    "title": "Journey to the Wealth",
    "provider": "PG",
    "image": "/images/slots/journey-to-the-wealth.webp",
    "category": "cold",
    "coldPercent": "79.5%",
    "theme": "Adventures",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-monkey",
    "title": "Fortune Monkey",
    "provider": "JILI",
    "image": "/images/slots/fortune-monkey.webp",
    "category": "cold",
    "coldPercent": "79.6%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "barn-festival",
    "title": "Barn Festival",
    "provider": "PP",
    "image": "/images/slots/barn-festival.webp",
    "category": "cold",
    "coldPercent": "80.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "prosperity-fortune-tree",
    "title": "Prosperity Fortune Tree",
    "provider": "PG",
    "image": "/images/slots/prosperity-fortune-tree.webp",
    "category": "cold",
    "coldPercent": "80.1%",
    "theme": "Others",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "sevensevenseven",
    "title": "SevenSevenSeven",
    "provider": "JILI",
    "image": "/images/slots/sevensevenseven.webp",
    "category": "cold",
    "coldPercent": "80.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "book-of-golden-sands",
    "title": "Book of Golden Sands",
    "provider": "PP",
    "image": "/images/slots/book-of-golden-sands.webp",
    "category": "cold",
    "coldPercent": "80.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "trial-of-phoenix",
    "title": "Trial of Phoenix",
    "provider": "JILI",
    "image": "/images/slots/trial-of-phoenix.webp",
    "category": "cold",
    "coldPercent": "80.3%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "starlight-princess",
    "title": "Starlight Princess",
    "provider": "PP",
    "image": "/images/slots/starlight-princess.webp",
    "category": "cold",
    "coldPercent": "80.4%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "world-cup",
    "title": "World Cup",
    "provider": "JILI",
    "image": "/images/slots/world-cup.webp",
    "category": "cold",
    "coldPercent": "80.5%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-queen",
    "title": "Golden Queen",
    "provider": "JILI",
    "image": "/images/slots/golden-queen.webp",
    "category": "cold",
    "coldPercent": "81.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sugar-rush",
    "title": "Sugar Rush",
    "provider": "PP",
    "image": "/images/slots/sugar-rush.webp",
    "category": "cold",
    "coldPercent": "81.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "ninja-raccoon-frenzy",
    "title": "Ninja Raccoon Frenzy",
    "provider": "PG",
    "image": "/images/slots/ninja-raccoon-frenzy.webp",
    "category": "cold",
    "coldPercent": "81.3%",
    "theme": "Anime",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "golden-bank",
    "title": "Golden Bank",
    "provider": "JILI",
    "image": "/images/slots/golden-bank.webp",
    "category": "cold",
    "coldPercent": "81.5%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "candy-corner",
    "title": "Candy Corner",
    "provider": "PP",
    "image": "/images/slots/candy-corner.webp",
    "category": "cold",
    "coldPercent": "82.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "dragonsworld",
    "title": "DragonsWorld",
    "provider": "JDB",
    "image": "/images/slots/dragonsworld.webp",
    "category": "cold",
    "coldPercent": "82.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-of-olympus",
    "title": "Fortune Of Olympus",
    "provider": "PP",
    "image": "/images/slots/fortune-of-olympus.webp",
    "category": "cold",
    "coldPercent": "82.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "ways-of-the-qilin",
    "title": "Ways of the Qilin",
    "provider": "PG",
    "image": "/images/slots/ways-of-the-qilin.webp",
    "category": "cold",
    "coldPercent": "82.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fortune-ox",
    "title": "Fortune Ox",
    "provider": "PG",
    "image": "/images/slots/fortune-ox.webp",
    "category": "cold",
    "coldPercent": "83.1%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "starlight-wins",
    "title": "Starlight Wins",
    "provider": "PP",
    "image": "/images/slots/starlight-wins.webp",
    "category": "cold",
    "coldPercent": "83.1%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "10-sparkling-crown",
    "title": "10 Sparkling Crown",
    "provider": "JILI",
    "image": "/images/slots/10-sparkling-crown.webp",
    "category": "cold",
    "coldPercent": "83.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bounty-deluxe",
    "title": "WILD BOUNTY Deluxe",
    "provider": "CQ9",
    "image": "/images/slots/wild-bounty-deluxe.webp",
    "category": "cold",
    "coldPercent": "83.3%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "fortune-coins",
    "title": "Fortune Coins",
    "provider": "JILI",
    "image": "/images/slots/fortune-coins.webp",
    "category": "cold",
    "coldPercent": "83.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "egypt-megawaystm",
    "title": "Egypt Megaways™",
    "provider": "Unknown",
    "image": "/images/slots/egypt-megawaystm.webp",
    "category": "cold",
    "coldPercent": "83.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "sweet-rush-bonanza",
    "title": "Sweet Rush Bonanza",
    "provider": "PP",
    "image": "/images/slots/sweet-rush-bonanza.webp",
    "category": "cold",
    "coldPercent": "83.8%",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "battleground-royale",
    "title": "Battleground Royale",
    "provider": "PG",
    "image": "/images/slots/battleground-royale.webp",
    "category": "cold",
    "coldPercent": "83.9%",
    "theme": "Sports",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-coin-wild-horse",
    "title": "3 Coin Wild Horse",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-horse.webp",
    "category": "cold",
    "coldPercent": "84.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "xmas",
    "title": "Xmas",
    "provider": "CQ9",
    "image": "/images/slots/xmas.webp",
    "category": "cold",
    "coldPercent": "84.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-tiger-gold",
    "title": "Lucky Tiger Gold",
    "provider": "PP",
    "image": "/images/slots/lucky-tiger-gold.webp",
    "category": "cold",
    "coldPercent": "84.4%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "cricket-sah-75",
    "title": "Cricket Sah 75",
    "provider": "JILI",
    "image": "/images/slots/cricket-sah-75.webp",
    "category": "cold",
    "coldPercent": "84.5%",
    "theme": "Sports",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "jurassic-kingdom",
    "title": "Jurassic Kingdom",
    "provider": "PG",
    "image": "/images/slots/jurassic-kingdom.webp",
    "category": "cold",
    "coldPercent": "85.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-lucky-lion",
    "title": "3 Lucky Lion",
    "provider": "JILI",
    "image": "/images/slots/3-lucky-lion.webp",
    "category": "cold",
    "coldPercent": "85.0%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "graffiti-rush",
    "title": "Graffiti Rush",
    "provider": "PG",
    "image": "/images/slots/graffiti-rush.webp",
    "category": "cold",
    "coldPercent": "85.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "fruity-candy",
    "title": "Fruity Candy",
    "provider": "PG",
    "image": "/images/slots/fruity-candy.webp",
    "category": "cold",
    "coldPercent": "85.3%",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "release-the-kraken-2",
    "title": "Release the Kraken 2",
    "provider": "PP",
    "image": "/images/slots/release-the-kraken-2.webp",
    "category": "cold",
    "coldPercent": "85.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "coin-of-lightning",
    "title": "Coin of Lightning",
    "provider": "JILI",
    "image": "/images/slots/coin-of-lightning.webp",
    "category": "cold",
    "coldPercent": "85.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "big-bass-bonanza-1000",
    "title": "Big Bass Bonanza 1000",
    "provider": "PP",
    "image": "/images/slots/big-bass-bonanza-1000.webp",
    "category": "cold",
    "coldPercent": "85.7%",
    "theme": "Sports",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "1000"
  },
  {
    "id": "dragon-soar-hyper-wild",
    "title": "Dragon Soar - Hyper Wild",
    "provider": "JDB",
    "image": "/images/slots/dragon-soar-hyper-wild.webp",
    "category": "cold",
    "coldPercent": "85.9%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "bonus-hunter",
    "title": "Bonus Hunter",
    "provider": "JILI",
    "image": "/images/slots/bonus-hunter.webp",
    "category": "cold",
    "coldPercent": "85.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sweet-magic",
    "title": "Sweet Magic",
    "provider": "JILI",
    "image": "/images/slots/sweet-magic.webp",
    "category": "cold",
    "coldPercent": "86.0%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "buffalo-king-megaways",
    "title": "Buffalo King Megaways",
    "provider": "PP",
    "image": "/images/slots/buffalo-king-megaways.webp",
    "category": "cold",
    "coldPercent": "86.0%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "blitz-super-wheel",
    "title": "Blitz Super Wheel",
    "provider": "PP",
    "image": "/images/slots/blitz-super-wheel.webp",
    "category": "cold",
    "coldPercent": "86.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fire-stampede-2",
    "title": "Fire Stampede 2",
    "provider": "PP",
    "image": "/images/slots/fire-stampede-2.webp",
    "category": "cold",
    "hotPercent": "86.2%",
    "coldPercent": "86.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-s-luck-megawaystm",
    "title": "Dragon's Luck MegaWays™",
    "provider": "Unknown",
    "image": "/images/slots/dragon-s-luck-megawaystm.webp",
    "category": "cold",
    "coldPercent": "86.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "fire-chibi-2",
    "title": "Fire Chibi 2",
    "provider": "CQ9",
    "image": "/images/slots/fire-chibi-2.webp",
    "category": "cold",
    "coldPercent": "86.6%",
    "theme": "Anime",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "cash-elevator",
    "title": "Cash Elevator",
    "provider": "PP",
    "image": "/images/slots/cash-elevator.webp",
    "category": "cold",
    "coldPercent": "86.6%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "magic-lamp",
    "title": "Magic Lamp",
    "provider": "JILI",
    "image": "/images/slots/magic-lamp.webp",
    "category": "cold",
    "coldPercent": "86.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "super-wildrix",
    "title": "Super Wildrix",
    "provider": "PG",
    "image": "/images/slots/super-wildrix.webp",
    "category": "cold",
    "coldPercent": "86.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "jelly-express",
    "title": "Jelly Express",
    "provider": "PP",
    "image": "/images/slots/jelly-express.webp",
    "category": "cold",
    "coldPercent": "87.1%",
    "theme": "Foods",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "piggy-bank",
    "title": "Piggy Bank",
    "provider": "JDB",
    "image": "/images/slots/piggy-bank.webp",
    "category": "cold",
    "coldPercent": "87.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "master-tiger",
    "title": "Master Tiger",
    "provider": "JILI",
    "image": "/images/slots/master-tiger.webp",
    "category": "cold",
    "coldPercent": "87.4%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "crazy777-2",
    "title": "Crazy777 2",
    "provider": "JILI",
    "image": "/images/slots/crazy777-2.webp",
    "category": "cold",
    "coldPercent": "87.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "clover-coins-3x3",
    "title": "Clover Coins 3x3",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-3x3.webp",
    "category": "cold",
    "coldPercent": "87.6%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "samba",
    "title": "Samba",
    "provider": "JILI",
    "image": "/images/slots/samba.webp",
    "category": "cold",
    "coldPercent": "87.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-joker",
    "title": "Golden Joker",
    "provider": "JILI",
    "image": "/images/slots/golden-joker.webp",
    "category": "cold",
    "coldPercent": "87.9%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "happy-taxi",
    "title": "Happy Taxi",
    "provider": "JILI",
    "image": "/images/slots/happy-taxi.webp",
    "category": "cold",
    "coldPercent": "88.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wheel-money",
    "title": "Wheel Money",
    "provider": "CQ9",
    "image": "/images/slots/wheel-money.webp",
    "category": "cold",
    "coldPercent": "88.2%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-charge-buffalo",
    "title": "3 Charge Buffalo",
    "provider": "JILI",
    "image": "/images/slots/3-charge-buffalo.webp",
    "category": "cold",
    "coldPercent": "88.4%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "8-dragons",
    "title": "8 Dragons",
    "provider": "PP",
    "image": "/images/slots/8-dragons.webp",
    "category": "cold",
    "coldPercent": "88.4%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "lucky-neko",
    "title": "Lucky Neko",
    "provider": "PG",
    "image": "/images/slots/lucky-neko.webp",
    "category": "cold",
    "coldPercent": "88.8%",
    "theme": "Anime",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "ultimate-striker",
    "title": "Ultimate Striker",
    "provider": "PG",
    "image": "/images/slots/ultimate-striker.webp",
    "category": "cold",
    "coldPercent": "89.0%",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "cocktail-nights",
    "title": "Cocktail Nights",
    "provider": "PG",
    "image": "/images/slots/cocktail-nights.webp",
    "category": "cold",
    "coldPercent": "89.1%",
    "theme": "Foods",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "mayan-empire",
    "title": "Mayan Empire",
    "provider": "JILI",
    "image": "/images/slots/mayan-empire.webp",
    "category": "cold",
    "coldPercent": "89.2%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "go-fishing",
    "title": "Go Fishing",
    "provider": "CQ9",
    "image": "/images/slots/go-fishing.webp",
    "category": "cold",
    "coldPercent": "89.3%",
    "theme": "Nature",
    "features": [
      "Auto Game",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasure-quest",
    "title": "Treasure Quest",
    "provider": "JILI",
    "image": "/images/slots/treasure-quest.webp",
    "category": "cold",
    "coldPercent": "89.5%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "gold-rush",
    "title": "Gold Rush",
    "provider": "JILI",
    "image": "/images/slots/gold-rush.webp",
    "category": "cold",
    "coldPercent": "89.7%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "jackpot-joker",
    "title": "Jackpot Joker",
    "provider": "JILI",
    "image": "/images/slots/jackpot-joker.webp",
    "category": "cold",
    "coldPercent": "89.7%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "lucky-ball",
    "title": "Lucky Ball",
    "provider": "JILI",
    "image": "/images/slots/lucky-ball.webp",
    "category": "cold",
    "coldPercent": "89.9%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Prize Pool"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "money-coming-2",
    "title": "Money Coming 2",
    "provider": "JILI",
    "image": "/images/slots/money-coming-2.webp",
    "category": "cold",
    "coldPercent": "89.9%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "jackpot-joker-fever",
    "title": "Jackpot Joker FEVER",
    "provider": "JILI",
    "image": "/images/slots/jackpot-joker-fever.webp",
    "category": "cold",
    "coldPercent": "90.0%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "forge-of-wealth",
    "title": "Forge of Wealth",
    "provider": "PG",
    "image": "/images/slots/forge-of-wealth.webp",
    "category": "cold",
    "coldPercent": "90.2%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "raider-janes-crypt-of-fortune",
    "title": "Raider Janes Crypt of Fortune",
    "provider": "PG",
    "image": "/images/slots/raider-janes-crypt-of-fortune.webp",
    "category": "cold",
    "coldPercent": "90.5%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "lucky-elephant-x-huge",
    "title": "Lucky Elephant X-Huge",
    "provider": "JDB",
    "image": "/images/slots/lucky-elephant-x-huge.webp",
    "category": "cold",
    "coldPercent": "90.8%",
    "theme": "Nature",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-jaguar-500",
    "title": "Lucky Jaguar 500",
    "provider": "JILI",
    "image": "/images/slots/lucky-jaguar-500.webp",
    "category": "cold",
    "coldPercent": "90.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "neko-fortune",
    "title": "Neko Fortune",
    "provider": "JILI",
    "image": "/images/slots/neko-fortune.webp",
    "category": "cold",
    "coldPercent": "90.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "crypto-gold",
    "title": "Crypto Gold",
    "provider": "PG",
    "image": "/images/slots/crypto-gold.webp",
    "category": "cold",
    "coldPercent": "91.0%",
    "theme": "Science Fiction",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "speed-winner",
    "title": "Speed Winner",
    "provider": "PG",
    "image": "/images/slots/speed-winner.webp",
    "category": "cold",
    "coldPercent": "91.0%",
    "theme": "Sports",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "ali-baba",
    "title": "Ali Baba",
    "provider": "JILI",
    "image": "/images/slots/ali-baba.webp",
    "category": "cold",
    "coldPercent": "91.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "super-ace-2",
    "title": "Super Ace 2",
    "provider": "JILI",
    "image": "/images/slots/super-ace-2.webp",
    "category": "cold",
    "coldPercent": "91.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-garuda-500",
    "title": "Fortune Garuda 500",
    "provider": "JILI",
    "image": "/images/slots/fortune-garuda-500.webp",
    "category": "cold",
    "coldPercent": "91.2%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "500"
  },
  {
    "id": "legacy-of-olympus1000",
    "title": "Legacy of Olympus1000",
    "provider": "CQ9",
    "image": "/images/slots/legacy-of-olympus1000.webp",
    "category": "cold",
    "coldPercent": "91.2%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "1000"
  },
  {
    "id": "3-coin-wild-tiger",
    "title": "3 Coin Wild Tiger",
    "provider": "JILI",
    "image": "/images/slots/3-coin-wild-tiger.webp",
    "category": "cold",
    "coldPercent": "91.3%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bandito",
    "title": "Wild Bandito",
    "provider": "PG",
    "image": "/images/slots/wild-bandito.webp",
    "category": "cold",
    "coldPercent": "91.4%",
    "theme": "Adventure",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "boxing-king-title-match",
    "title": "Boxing King Title Match",
    "provider": "JILI",
    "image": "/images/slots/boxing-king-title-match.webp",
    "category": "cold",
    "coldPercent": "91.6%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-gems-2",
    "title": "Fortune Gems 2",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-2.webp",
    "category": "cold",
    "coldPercent": "91.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-bandito-2",
    "title": "WILD BANDITO 2",
    "provider": "CQ9",
    "image": "/images/slots/wild-bandito-2.webp",
    "category": "cold",
    "coldPercent": "92.0%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "power-of-thor-megaways",
    "title": "Power of Thor Megaways",
    "provider": "PP",
    "image": "/images/slots/power-of-thor-megaways.webp",
    "category": "cold",
    "coldPercent": "92.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "Megaways"
  },
  {
    "id": "fortune-gems",
    "title": "Fortune Gems",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems.webp",
    "category": "cold",
    "coldPercent": "92.3%",
    "theme": "Nature",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "incan-wonders",
    "title": "Incan Wonders",
    "provider": "PG",
    "image": "/images/slots/incan-wonders.webp",
    "category": "cold",
    "coldPercent": "92.4%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool",
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "lucky-goldbricks",
    "title": "Lucky Goldbricks",
    "provider": "JILI",
    "image": "/images/slots/lucky-goldbricks.webp",
    "category": "cold",
    "coldPercent": "92.6%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "number-king",
    "title": "Number King",
    "provider": "JILI",
    "image": "/images/slots/number-king.webp",
    "category": "cold",
    "coldPercent": "92.7%",
    "theme": "Others",
    "features": [
      "Auto Game"
    ],
    "winningLine": "20 lines"
  },
  {
    "id": "guardians-of-ice-and-fire",
    "title": "Guardians of Ice and Fire",
    "provider": "PG",
    "image": "/images/slots/guardians-of-ice-and-fire.webp",
    "category": "cold",
    "coldPercent": "92.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "money-coming",
    "title": "Money Coming",
    "provider": "JILI",
    "image": "/images/slots/money-coming.webp",
    "category": "cold",
    "coldPercent": "92.9%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "star-bounty",
    "title": "Star Bounty",
    "provider": "PP",
    "image": "/images/slots/star-bounty.webp",
    "category": "cold",
    "coldPercent": "92.9%",
    "theme": "Science Fiction",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "genie-s-3-wishes",
    "title": "Genie\"s 3 Wishes",
    "provider": "PG",
    "image": "/images/slots/genie-s-3-wishes.webp",
    "category": "cold",
    "coldPercent": "93.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mahjong-wilds-2",
    "title": "Mahjong Wilds 2",
    "provider": "CQ9",
    "image": "/images/slots/mahjong-wilds-2.webp",
    "category": "cold",
    "coldPercent": "93.0%",
    "theme": "Others",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "midas-fortune",
    "title": "Midas Fortune",
    "provider": "PG",
    "image": "/images/slots/midas-fortune.webp",
    "category": "cold",
    "coldPercent": "93.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "clover-coins-4x4",
    "title": "Clover Coins 4x4",
    "provider": "JILI",
    "image": "/images/slots/clover-coins-4x4.webp",
    "category": "cold",
    "coldPercent": "93.5%",
    "theme": "Romantic",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "golden-empire",
    "title": "Golden Empire",
    "provider": "JILI",
    "image": "/images/slots/golden-empire.webp",
    "category": "cold",
    "coldPercent": "93.7%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "treasures-of-aztec",
    "title": "Treasures of Aztec",
    "provider": "PG",
    "image": "/images/slots/treasures-of-aztec.webp",
    "category": "cold",
    "coldPercent": "93.7%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasures-of-aztec-1024",
    "title": "Treasures Of Aztec 1024",
    "provider": "CQ9",
    "image": "/images/slots/treasures-of-aztec-1024.webp",
    "category": "cold",
    "coldPercent": "93.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "the-queen-s-banquet",
    "title": "The Queen’s Banquet",
    "provider": "PG",
    "image": "/images/slots/the-queen-s-banquet.webp",
    "category": "cold",
    "coldPercent": "93.8%",
    "theme": "Entertainment",
    "features": [
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "charge-buffalo-ascent",
    "title": "Charge Buffalo Ascent",
    "provider": "JILI",
    "image": "/images/slots/charge-buffalo-ascent.webp",
    "category": "cold",
    "coldPercent": "93.9%",
    "theme": "Adventures",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "trees-of-treasure",
    "title": "Trees of Treasure",
    "provider": "PP",
    "image": "/images/slots/trees-of-treasure.webp",
    "category": "cold",
    "coldPercent": "93.9%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "3-magic-eggs",
    "title": "3 Magic Eggs",
    "provider": "PP",
    "image": "/images/slots/3-magic-eggs.webp",
    "category": "cold",
    "coldPercent": "94.0%",
    "theme": "Entertainment",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "mr-treasure-s-fortune",
    "title": "Mr. Treasure’s Fortune",
    "provider": "PG",
    "image": "/images/slots/mr-treasure-s-fortune.webp",
    "category": "cold",
    "coldPercent": "94.2%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "Pay Anywhere"
  },
  {
    "id": "kong",
    "title": "Kong",
    "provider": "JDB",
    "image": "/images/slots/kong.webp",
    "category": "cold",
    "coldPercent": "94.3%",
    "theme": "Movie",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "dragon-hatch-2",
    "title": "Dragon Hatch 2",
    "provider": "PG",
    "image": "/images/slots/dragon-hatch-2.webp",
    "category": "cold",
    "coldPercent": "94.4%",
    "theme": "Myth & History",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "jewels-of-prosperity",
    "title": "Jewels of Prosperity",
    "provider": "PG",
    "image": "/images/slots/jewels-of-prosperity.webp",
    "category": "cold",
    "coldPercent": "94.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "john-hunter-the-book-of-tut-respin",
    "title": "John Hunter & the Book of Tut Respin",
    "provider": "PP",
    "image": "/images/slots/john-hunter-the-book-of-tut-respin.webp",
    "category": "cold",
    "coldPercent": "94.4%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "joker-coins-expanded",
    "title": "Joker Coins Expanded",
    "provider": "JILI",
    "image": "/images/slots/joker-coins-expanded.webp",
    "category": "cold",
    "coldPercent": "94.5%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "aztec-priestess",
    "title": "Aztec Priestess",
    "provider": "JILI",
    "image": "/images/slots/aztec-priestess.webp",
    "category": "cold",
    "coldPercent": "94.7%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "3-super-ace",
    "title": "3 Super Ace",
    "provider": "JILI",
    "image": "/images/slots/3-super-ace.webp",
    "category": "cold",
    "coldPercent": "94.7%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game",
      "Buy Spins"
    ],
    "winningLine": "1024"
  },
  {
    "id": "sweet-bonanza",
    "title": "Sweet Bonanza",
    "provider": "PP",
    "image": "/images/slots/sweet-bonanza.webp",
    "category": "cold",
    "coldPercent": "94.7%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "fortune-gems-3",
    "title": "Fortune Gems 3",
    "provider": "JILI",
    "image": "/images/slots/fortune-gems-3.webp",
    "category": "cold",
    "coldPercent": "94.8%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "treasures-of-aztec-2",
    "title": "Treasures Of Aztec 2",
    "provider": "CQ9",
    "image": "/images/slots/treasures-of-aztec-2.webp",
    "category": "cold",
    "coldPercent": "95.0%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "circus-joker-4096",
    "title": "Circus Joker 4096",
    "provider": "JILI",
    "image": "/images/slots/circus-joker-4096.webp",
    "category": "cold",
    "coldPercent": "95.1%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "4096"
  },
  {
    "id": "buffalo-win",
    "title": "Buffalo Win",
    "provider": "PG",
    "image": "/images/slots/buffalo-win.webp",
    "category": "cold",
    "coldPercent": "95.2%",
    "theme": "Nature",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "mega-ace",
    "title": "Mega Ace",
    "provider": "JILI",
    "image": "/images/slots/mega-ace.webp",
    "category": "cold",
    "coldPercent": "95.2%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "jili-caishen",
    "title": "JILI CAISHEN",
    "provider": "JILI",
    "image": "/images/slots/jili-caishen.webp",
    "category": "cold",
    "coldPercent": "95.2%",
    "theme": "Myth & History",
    "features": [
      "Buy Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "wild-racer",
    "title": "Wild Racer",
    "provider": "JILI",
    "image": "/images/slots/wild-racer.webp",
    "category": "cold",
    "coldPercent": "95.3%",
    "theme": "Sports",
    "features": [
      "Free Spins",
      "Auto Game",
      "Prize Pool"
    ],
    "winningLine": "1024"
  },
  {
    "id": "boxing-king",
    "title": "Boxing King",
    "provider": "JILI",
    "image": "/images/slots/boxing-king.webp",
    "category": "cold",
    "coldPercent": "95.3%",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "fiesta-fortune",
    "title": "Fiesta Fortune",
    "provider": "PP",
    "image": "/images/slots/fiesta-fortune.webp",
    "category": "cold",
    "coldPercent": "95.3%",
    "theme": "Entertainment",
    "features": [
      "Prize Pool"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-ace-joker",
    "title": "Super Ace Joker",
    "provider": "JILI",
    "image": "/images/slots/super-ace-joker.webp",
    "category": "cold",
    "coldPercent": "95.4%",
    "theme": "Entertainment",
    "features": [
      "Auto Game"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "pirate-queen-2",
    "title": "Pirate Queen 2",
    "provider": "JILI",
    "image": "/images/slots/pirate-queen-2.webp",
    "category": "cold",
    "coldPercent": "95.4%",
    "theme": "Adventures",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "1024"
  },
  {
    "id": "wild-ace",
    "title": "Wild Ace",
    "provider": "JILI",
    "image": "/images/slots/wild-ace.webp",
    "category": "cold",
    "coldPercent": "95.5%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "legacy-of-egypt",
    "title": "Legacy of Egypt",
    "provider": "JILI",
    "image": "/images/slots/legacy-of-egypt.webp",
    "category": "cold",
    "coldPercent": "95.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "243"
  },
  {
    "id": "super-ace",
    "title": "Super Ace",
    "provider": "JILI",
    "image": "/images/slots/super-ace.webp",
    "category": "cold",
    "coldPercent": "95.8%",
    "theme": "Entertainment",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  {
    "id": "serpent-king",
    "title": "Serpent King",
    "provider": "Unknown",
    "image": "/images/slots/serpent-king.webp",
    "category": "cold",
    "coldPercent": "8.8%",
    "theme": "Myth & History",
    "features": [
      "Free Spins"
    ],
    "winningLine": "All Ways"
  },
  {
    "id": "hotpot",
    "title": "Hotpot",
    "provider": "PG",
    "image": "/images/slots/hotpot.webp",
    "category": "cold",
    "coldPercent": "28.6%",
    "theme": "Foods",
    "features": [
      "Free Spins",
      "Auto Game"
    ],
    "winningLine": "243"
  },
  
]

export const SLOTS: SlotGame[] = [
  ...slotsBatch1,
  ...slotsBatch2,
  ...slotsBatch3,
  ...slotsBatch4
]
