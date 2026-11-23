export function generateLlmsContent(customSiteUrl?: string): string {
  const siteUrl = (customSiteUrl || process.env.SITE_URL || 'https://bybet.com').replace(/\/+$/, '')

  return `# ByBet Philippines

> ByBet Philippines is a premier online sports betting and gaming entertainment platform offering real-time betting odds, live match video streaming, online slots, live dealer casino, bingo, jackpots, and promotions.

ByBet is an online gaming and sports wagering portal built for players in the Philippines. It features real-time dynamic betting odds, low-latency live video streaming for football and basketball, high-definition casino lobbies from licensed providers (JILI, PG Soft, Pragmatic Play, Fa Chai, JDB), instant local payments (GCash, Maya, Bank Transfer), and dedicated responsible gaming resources.

## Core Lobbies

- [Home Lobby](${siteUrl}/): Official ByBet sports betting and online casino gaming portal.
- [Slots Lobby](${siteUrl}/egames/slots): Premier online video slots, classic slots, megaways, and bonus buy games.
- [Jackpot Games](${siteUrl}/egames/jackpot/all): Daily progressive jackpots, accumulating prize pools, and live counters.
- [Bingo Games](${siteUrl}/egames/bingo): Interactive online bingo, instant-win cards, and multiplier rewards.
- [Live Casino](${siteUrl}/entertainment/live-casino/baccarat): Real-time live dealer baccarat, roulette, blackjack, and game shows.
- [Arcade & Mini Games](${siteUrl}/entertainment/gaming): Fast-paced arcade titles, multiplier crash games, and casual games.
- [Lottery](${siteUrl}/entertainment/lottery): Online lottery draw results, lucky numbers, and lottery betting.

## Sports Betting & Live Video

- [Popular Sports](${siteUrl}/sports/popular): Top trending match odds and premier tournament betting lines.
- [In-Play Live Betting](${siteUrl}/sports/popular/inplay): Real-time live match odds with dynamic score updates and cash out.
- [Live Sports Streaming](${siteUrl}/sports/live): Low-latency live video streaming of basketball and football matches.
- [Upcoming Fixtures](${siteUrl}/sports/popular/upcoming): Sports schedules, early point spreads, and match totals.
- [Pre-Match Odds](${siteUrl}/sports/popular/pre-match): Comprehensive pre-match handicap, moneyline, and totals betting.
- [Outright Futures](${siteUrl}/sports/popular/outright): Long-term tournament outrights, champion predictions, and futures.
- [Basketball Betting](${siteUrl}/sports/basketball): NBA, PBA, and Euroleague point spreads, moneylines, and totals.
- [Football & Soccer](${siteUrl}/sports/soccer): Premier League, Champions League, La Liga, and Serie A betting markets.
- [Baseball Betting](${siteUrl}/sports/baseball): Major League Baseball (MLB) and NPB moneylines, run lines, and totals.
- [Tennis Betting](${siteUrl}/sports/tennis): ATP, WTA, and Grand Slam tennis tournament match betting.

## Live Plaza & Community

- [Live Plaza Home](${siteUrl}/live-plaza/home): Community hub for sports streamers, expert analyses, and live chat.
- [Streamer Broadcasts](${siteUrl}/live-plaza/streamer/all): Verified sports streamers and match watch parties.
- [Expert Predictions](${siteUrl}/live-plaza/expert-predictions): Verified sports predictions, daily game picks, and hit rate statistics.
- [Featured Analysts](${siteUrl}/live-plaza/experts): Top sports handicappers and prediction leaderboards.

## Promotions & VIP Rewards

- [Promotions Center](${siteUrl}/bonuses): Current promotional events, deposit bonuses, and seasonal rewards.
- [Most Popular Bonuses](${siteUrl}/bonuses/most-popular): Featured welcome offers and top player promotions.
- [Sports Betting Rebates](${siteUrl}/bonuses/sports): Daily sports turnover rebates and parlay safety net offers.
- [Slots Bonuses](${siteUrl}/bonuses/slots): Free spins, slot tournament prizes, and daily reloads.
- [Live Casino Bonuses](${siteUrl}/bonuses/live-casino): Baccarat cashbacks and live dealer bonuses.
- [Deposit Match Bonus](${siteUrl}/bonuses/deposit): First deposit bonuses and reload promotions.
- [Bonus Terms & Conditions](${siteUrl}/bonuses/terms-and-condition): Wagering requirements, rollover rules, and bonus eligibility.

## Game Rules & Betting Guidelines

- [General Sports Rules](${siteUrl}/game-rules/sports-betting-rules): General sports betting rules, bet acceptance, and void criteria.
- [Football Betting Rules](${siteUrl}/game-rules/football): Normal time settlement, extra time, penalty shootouts, and 1X2 rules.
- [Basketball Betting Rules](${siteUrl}/game-rules/basketball): Overtime rules, quarters/halves scoring, and settlement terms.
- [Tennis Betting Rules](${siteUrl}/game-rules/tennis): Walkovers, retirements, set betting, and tie-break rules.
- [Baseball Betting Rules](${siteUrl}/game-rules/baseball): 8.5 innings rule, listed pitchers, run lines, and totals.
- [Badminton Betting Rules](${siteUrl}/game-rules/badminton): Match completion, retirement conditions, and set handicap rules.
- [Table Tennis Rules](${siteUrl}/game-rules/table-tennis): Official point scoring, retirement, and set settlement standards.
- [Parlays & Multiples Rules](${siteUrl}/game-rules/parlays-multiples): Multi-leg bet calculations, push rules, and maximum payouts.
- [Cash Out Rules](${siteUrl}/game-rules/cash-out): Real-time cash out terms, market suspension, and partial cash-out.
- [Outright Betting Rules](${siteUrl}/game-rules/outright): Dead heat rules and future market settlements.

## Tutorials & User Assistance

- [Mock Betting Simulator](${siteUrl}/tutorial/mock-betting): Step-by-step risk-free interactive tutorial on placing bets.
- [Deposit Tutorial](${siteUrl}/tutorial/transactions/deposit): Guide to depositing funds using GCash, Maya, and local payment methods.
- [Withdrawal Tutorial](${siteUrl}/tutorial/transactions/withdraw): Guide to KYC verification and fast withdrawal payouts.
- [Customer Support](${siteUrl}/help/contact-us): 24/7 customer service chat and technical support.

## Trust, Compliance & Legal

- [Responsible Gaming](${siteUrl}/responsible-gaming): Player protection, self-exclusion, deposit limits, and support hotlines.
- [About ByBet](${siteUrl}/about-us): Brand vision, technological infrastructure, and compliance commitments.
- [Privacy Policy](${siteUrl}/privacy-policy): Personal data protection standards and processing guidelines.
- [Terms of Use](${siteUrl}/terms-of-use): User terms, platform terms, and legal agreements.
- [Cookie Policy](${siteUrl}/legal/cookie-policy): Cookie disclosures, preferences, and tracking settings.

## Optional

- [Sitemap XML](${siteUrl}/sitemap.xml): Complete XML sitemap index.
`
}
