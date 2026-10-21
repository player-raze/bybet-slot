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

export interface SlotSection {
  id: string
  title: string
  emoji?: string
  iconImage?: string
  iconName: string
  count: number
  hasHelp?: boolean
  games: SlotGame[]
}

export interface ReferenceGame {
  title: string
  provider: string
  image: string
}

export const newGames: ReferenceGame[] = [
  { title: 'Wild Hop & Drop', provider: 'Pragmatic Play', image: '/images/games/new-releases/wild-hop-and-drop.webp' },
  { title: 'Spin & Score Megaways', provider: 'Pragmatic Play', image: '/images/games/new-releases/spin-and-score-megaways.webp' },
  { title: 'Super Wildrix', provider: 'Play’n GO', image: '/images/games/new-releases/super-wildrix.webp' },
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
  { key: 'bonus', label: 'Bonus', shortLabel: 'Bonus', iconName: 'Percent', emoji: '🟡', iconImage: '/icons/slots/bonuses.png', svg: SLOT_CATEGORY_SVGS.bonus },
  { key: 'top-pick', label: 'Top Pick', shortLabel: 'Top Pick', iconName: 'ThumbsUp', emoji: '👍', iconImage: '/icons/slots/top-pick.png' },
  { key: 'top', label: 'Top', shortLabel: 'Top', iconName: 'Medal', emoji: '🏅', iconImage: '/icons/slots/top.png' },
  { key: 'new', label: 'New', shortLabel: 'New', iconName: 'Sparkles', emoji: '🆕', iconImage: '/icons/slots/new.png' },
  { key: 'hot', label: 'Hot games', shortLabel: 'Hot...', iconName: 'Flame', emoji: '🔥', iconImage: '/icons/slots/hot.png' },
  { key: 'cold', label: 'Cold Games', shortLabel: 'Cold...', iconName: 'Snowflake', emoji: '❄️', iconImage: '/icons/slots/cold.png' },
  { key: 'max-rpt', label: 'Max RTP', shortLabel: 'Max...', iconName: 'Banknote', emoji: '💵', iconImage: '/icons/slots/max-rtp.png' },
]

export const SLOT_PROVIDERS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'PG', label: 'PG' },
  { key: 'JILI', label: 'JILI' },
  { key: 'PP', label: 'PP' },
  { key: 'CQ9', label: 'CQ9' },
  { key: 'JDB', label: 'JDB' },
  { key: 'Red Tiger', label: 'Red Tiger' },
]

export const SLOT_SECTIONS: SlotSection[] = [
  {
    id: 'bonuses',
    title: 'Bonuses',
    emoji: '🟡',
    iconImage: '/icons/slots/bonuses.png',
    iconName: 'Percent',
    count: 334,
    games: [
      {
        id: 'super-ace',
        title: 'Super Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
      },
      {
        id: 'super-ace-deluxe',
        title: 'Super Ace Deluxe',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
      },
      {
        id: 'super-ace-2',
        title: 'Super Ace 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
      },
      {
        id: '3-super-ace',
        title: '3 Super Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
      },
      {
        id: 'super-ace-joker',
        title: 'Super Ace Joker',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
      },
      {
        id: 'pinata-wins',
        title: 'Pinata Wins',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
      },
      {
        id: 'wild-bounty-showdown',
        title: 'Wild Bounty Showdown',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
      },
      {
        id: 'wild-ace',
        title: 'Wild Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
      },
      {
        id: 'wild-bronco',
        title: 'Wild Bronco',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/spin-and-score-megaways.webp',
        badge: 'NEW',
      },
      {
        id: 'fortune-gems-2',
        title: 'Fortune Gems 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/fortune-gems-2.webp',
      },
      {
        id: 'fortune-gems',
        title: 'Fortune Gems',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/fortune-gems-2.webp',
      },
      {
        id: 'fortune-garuda-500',
        title: 'Fortune Garuda 500',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/gates-of-olympus.webp',
      },
      {
        id: 'golden-empire',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
      },
    ],
  },
  {
    id: 'top-pick',
    title: 'Top Pick',
    emoji: '👍',
    iconImage: '/icons/slots/top-pick.png',
    iconName: 'ThumbsUp',
    count: 92,
    games: [
      {
        id: 'wild-bandito',
        title: 'Wild Bandito',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
      },
      {
        id: 'golden-empire-tp',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
      },
      {
        id: 'sweet-bonanza',
        title: 'Sweet Bonanza',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
      },
      {
        id: 'wheel-money',
        title: 'Wheel Money',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
      },
      {
        id: 'open-sesame',
        title: 'Open Sesame',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/open-sesame.webp',
        badge: '1200X',
      },
      {
        id: '777-strike',
        title: '777 Strike',
        provider: 'Red Tiger',
        providerLogo: '/images/providers/red-tiger.png',
        image: '/images/games/new-releases/777-strike.webp',
      },
    ],
  },
  {
    id: 'top',
    title: 'Top',
    emoji: '🏅',
    iconImage: '/icons/slots/top.png',
    iconName: 'Medal',
    count: 406,
    games: [
      {
        id: 'super-ace-top',
        title: 'Super Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
        livePlayers: 4249,
      },
      {
        id: 'super-ace-deluxe-top',
        title: 'Super Ace Deluxe',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
        livePlayers: 2979,
      },
      {
        id: 'pinata-wins',
        title: 'Piñata Wins',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        livePlayers: 2858,
      },
      {
        id: 'wild-bounty-showdown',
        title: 'Wild Bounty Showdown',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp',
        livePlayers: 2390,
      },
      {
        id: 'wild-ace-top',
        title: 'Wild Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
        livePlayers: 1244,
      },
      {
        id: 'wild-bandito-top',
        title: 'Wild Bandito',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
        livePlayers: 982,
      },
    ],
  },
  {
    id: 'new',
    title: 'New',
    emoji: '🆕',
    iconImage: '/icons/slots/new.png',
    iconName: 'Sparkles',
    count: 4,
    games: [
      {
        id: 'wild-bronco',
        title: 'Wild Bronco',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/spin-and-score-megaways.webp',
        badge: 'NEW',
      },
      {
        id: 'teeed-up',
        title: 'TEEED UP!',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        badge: 'NEW',
        buyBonus: true,
        bottomMultiplier: '10.000x',
      },
      {
        id: 'jade-legends',
        title: 'Jade Legends',
        provider: 'Play’n GO',
        image: '/images/games/popular/golden-empire.webp',
        badge: 'NEW',
      },
      {
        id: 'super-serge',
        title: 'Super Serge',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/super-wildrix.webp',
        badge: 'NEW',
      },
    ],
  },
  {
    id: 'hot',
    title: 'Hot Games',
    emoji: '🔥',
    iconImage: '/icons/slots/hot.png',
    iconName: 'Flame',
    count: 108,
    hasHelp: true,
    games: [
      {
        id: 'return-of-the-dead',
        title: 'Return of the Dead',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp',
        hotPercent: '213.1%',
      },
      {
        id: 'chinese-new-year-hot',
        title: 'CHINESE NEW YE...',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/chinese-new-year-deluxe.webp',
        hotPercent: '191.4%',
      },
      {
        id: 'good-fortune-m',
        title: 'Good Fortune M',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/fortune-gems-2.webp',
        hotPercent: '180.4%',
      },
      {
        id: 'gates-of-olympus-hot',
        title: 'Gates of Olympus...',
        provider: 'Play’n GO',
        image: '/images/games/popular/gates-of-olympus.webp',
        hotPercent: '170.5%',
      },
      {
        id: 'cash-volt',
        title: 'Cash Volt',
        provider: 'Red Tiger',
        providerLogo: '/images/providers/red-tiger.png',
        image: '/images/games/new-releases/777-strike.webp',
        hotPercent: '166.9%',
      },
      {
        id: 'fortune-gems-hot-2',
        title: 'Fortune Gems 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
        hotPercent: '155.2%',
      },
    ],
  },
  {
    id: 'cold',
    title: 'Cold Games',
    emoji: '❄️',
    iconImage: '/icons/slots/cold.png',
    iconName: 'Snowflake',
    count: 297,
    hasHelp: true,
    games: [
      {
        id: 'dragons-world',
        title: 'DragonsWorld',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/popular/mega-ace.webp',
        badge: '7000X',
      },
      {
        id: 'floating-dragon',
        title: 'Floating Dragon ...',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/lucky-neko.webp',
      },
      {
        id: 'glamorous-girl',
        title: 'GlamorousGirl',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/wild-bandito.webp',
        badge: '3600X',
        coldPercent: '5.0%',
      },
      {
        id: 'bigger-bass-blizzard-cold',
        title: 'Bigger Bass Blizz...',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/bigger-bass-blizzard.webp',
        coldPercent: '13.4%',
      },
      {
        id: 'bee-keeper',
        title: 'Bee Keeper',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/new-releases/snakes-and-ladders-snake-eyes.webp',
        coldPercent: '16.2%',
      },
      {
        id: 'sweet-bonanza-cold',
        title: 'Sweet Bonanza',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        coldPercent: '18.5%',
      },
    ],
  },
  {
    id: 'max-rtp',
    title: 'Max RTP',
    emoji: '💵',
    iconImage: '/icons/slots/max-rtp.png',
    iconName: 'Banknote',
    count: 1439,
    games: [
      {
        id: 'fruity-carnival',
        title: 'FruityCarnival',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'jewel-luxury',
        title: 'JewelLuxury',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'xmas',
        title: 'Xmas',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'legacy-of-olympus',
        title: 'Legacy of Olympus',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/open-sesame.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'mahjong-wilds',
        title: 'Mahjong Wilds',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/fortune-rabbit-xtreme.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'golden-empire-rtp',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
        rtpPercent: '97.2%',
      },
    ],
  },
]