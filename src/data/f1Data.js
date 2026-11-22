// All editable season content lives here.
// Update points, results, and news each race weekend — no JSX to touch.
// Last refreshed: Sun 22 Nov 2026, after the Las Vegas Grand Prix (R21 of 23).

export const fanDriver = 'VER'; // code of the driver this dashboard follows

export const totalRounds = 23;
export const roundsCompleted = 21; // rounds fully finished before the current weekend

export const currentRace = {
  round: 22,
  totalRounds,
  status: 'Up Next',
  live: false,
  flag: '🇶🇦',
  name: 'Qatar',
  nameEm: 'Grand Prix',
  circuit: 'Lusail International Circuit',
  venue: 'Lusail, Qatar',
  laps: 57,
  distanceKm: 308.611,
  format: 'Standard Weekend',
  raceDateLabel: 'Nov 29 · Sun',
  // ISO timestamp used for the lights-out countdown (19:00 AST / 16:00 UTC)
  lightsOutISO: '2026-11-29T16:00:00Z',
  fp1: { driver: 'M. Verstappen', time: 'Winner · LAS', label: 'Last Race Winner', timeLabel: 'Las Vegas GP Result' },
};

// The two 2026 title winners — both already decided. Rendered by <Champions />.
export const champions = {
  asOf: 'After Round 21 · Las Vegas GP',
  drivers: {
    kicker: 'World Drivers\u2019 Champion',
    name: 'Kimi',
    nameEm: 'Antonelli',
    flag: '🇮🇹',
    team: 'Mercedes-AMG Petronas',
    teamVar: '--mercedes',
    number: '12',
    stats: [
      { label: 'Points', value: '402' },
      { label: 'Wins', value: '9' },
      { label: 'Age at clinch', value: '20y 68d' },
    ],
    clinched: 'Clinched at the Mexico City GP · Nov 1 · four races to spare',
    note: 'Youngest world champion in F1 history and the first Italian champion since Alberto Ascari in 1953.',
    runnerUp: 'Runner-up: M. Verstappen · 304 pts',
  },
  constructors: {
    kicker: 'World Constructors\u2019 Champion',
    name: 'Mercedes-AMG',
    nameEm: 'Petronas',
    flag: '🇩🇪',
    team: 'Mercedes PU · DEU',
    teamVar: '--mercedes',
    number: '9',
    stats: [
      { label: 'Points', value: '666' },
      { label: 'Wins', value: '12' },
      { label: 'Title no.', value: '9th' },
    ],
    clinched: 'Clinched at the São Paulo GP · Nov 8 · three races to spare',
    note: 'First constructors\u2019 crown since 2021, completing the double with Antonelli\u2019s drivers\u2019 title.',
    runnerUp: 'Runner-up (provisional): Ferrari · 517 pts',
  },
};

export const verstappenSpotlight = {
  // Big background number = his current championship position (was a stale '07').
  number: '02',
  eyebrow: '⚡ Favourite Driver · Oracle Red Bull Racing',
  name: 'Max',
  nameEm: 'Verstappen',
  meta: 'NED · 4× World Champion · #3 · RB22',
  stats: [
    { label: 'Las Vegas GP · Strip Circuit', value: 'P1' },
    { label: 'Championship', value: 'P2 · 304pts' },
    { label: 'Gap to P1', value: '−98', highlight: true },
  ],
};

export const seasonProgressPct = Math.round((roundsCompleted / totalRounds) * 100 * 10) / 10;

export const calendar = [
  { id: 'R01', round: 'R01', status: 'done', flag: '🇦🇺', country: 'Australia', name: 'Albert Park', date: 'Mar 06–08', winner: 'G. Russell' },
  { id: 'R02', round: 'R02', status: 'done', flag: '🇨🇳', country: 'China', name: 'Shanghai', date: 'Mar 13–15', winner: 'K. Antonelli' },
  { id: 'R03', round: 'R03', status: 'done', flag: '🇯🇵', country: 'Japan', name: 'Suzuka', date: 'Mar 27–29', winner: 'K. Antonelli' },
  { id: 'R04', round: 'R04', status: 'done', flag: '🇺🇸', country: 'USA', name: 'Miami', date: 'May 01–03', winner: 'K. Antonelli' },
  { id: 'R05', round: 'R05', status: 'done', flag: '🇨🇦', country: 'Canada', name: 'Montreal', date: 'May 22–24', winner: 'K. Antonelli' },
  { id: 'R06', round: 'R06', status: 'done', flag: '🇲🇨', country: 'Monaco', name: 'Monte Carlo', date: 'Jun 05–07', winner: 'K. Antonelli' },
  { id: 'R07', round: 'R07', status: 'done', flag: '🇪🇸', country: 'Spain', name: 'Barcelona', date: 'Jun 12–14', winner: 'L. Hamilton' },
  { id: 'R08', round: 'R08', status: 'done', flag: '🇦🇹', country: 'Austria', name: 'Red Bull Ring', date: 'Jun 26–28', winner: 'G. Russell' },
  { id: 'R09', round: 'R09', status: 'done', flag: '🇬🇧', country: 'UK', name: 'Silverstone', date: 'Jul 03–05', winner: 'C. Leclerc' },
  { id: 'R10', round: 'R10', status: 'done', flag: '🇧🇪', country: 'Belgium', name: 'Spa', date: 'Jul 17–19', winner: 'K. Antonelli' },
  { id: 'R11', round: 'R11', status: 'done', flag: '🇭🇺', country: 'Hungary', name: 'Hungaroring', date: 'Jul 24–26', winner: 'L. Norris' },
  { id: 'R12', round: 'R12', status: 'done', flag: '🇳🇱', country: 'Netherlands', name: 'Zandvoort', date: 'Aug 21–23', winner: 'L. Norris' },
  { id: 'R13', round: 'R13', status: 'done', flag: '🇮🇹', country: 'Italy', name: 'Monza', date: 'Sep 04–06', winner: 'K. Antonelli' },
  { id: 'R14', round: 'R14', status: 'done', flag: '🇪🇸', country: 'Spain', name: 'Madrid', date: 'Sep 11–13', winner: 'K. Antonelli' },
  { id: 'R15', round: 'R15', status: 'done', flag: '🇦🇿', country: 'Azerbaijan', name: 'Baku', date: 'Sep 24–26', winner: 'G. Russell' },
  { id: 'R16', round: 'R16', status: 'done', flag: '🇧🇭', country: 'Bahrain', name: 'Sepang (Malaysia)', date: 'Oct 02–04', winner: 'M. Verstappen' },
  { id: 'R17', round: 'R17', status: 'done', flag: '🇸🇬', country: 'Singapore', name: 'Marina Bay', date: 'Oct 09–11', winner: 'M. Verstappen' },
  { id: 'R18', round: 'R18', status: 'done', flag: '🇺🇸', country: 'USA', name: 'Austin', date: 'Oct 23–25', winner: 'K. Antonelli' },
  { id: 'R19', round: 'R19', status: 'done', flag: '🇲🇽', country: 'Mexico', name: 'Mexico City', date: 'Oct 30–Nov 1', winner: 'M. Verstappen' },
  { id: 'R20', round: 'R20', status: 'done', flag: '🇧🇷', country: 'Brazil', name: 'São Paulo', date: 'Nov 06–08', winner: 'L. Norris' },
  { id: 'R21', round: 'R21', status: 'done', flag: '🇺🇸', country: 'USA', name: 'Las Vegas', date: 'Nov 19–21', winner: 'M. Verstappen' },
  { id: 'R22', round: 'R22 · NEXT', status: 'next', flag: '🇶🇦', country: 'Qatar', name: 'Lusail', date: 'Nov 27–29' },
  { id: 'R23', round: 'R23', status: 'upcoming', flag: '🇦🇪', country: 'UAE', name: 'Yas Marina', date: 'Dec 04–06' },
];

// Per-circuit reference info shown in the circuit detail card when a
// calendar round is clicked. Keyed by the round `id` above.
// Add an entry here for any round to make its card show real data —
// rounds without an entry fall back to a "coming soon" state.
// Finished rounds: `defendingChampion` = that race's 2026 winner (same as `winner2026`).
// Upcoming rounds: `defendingChampion` = the circuit's most recent winner (2025).
export const circuitDetails = {
  R01: {
    circuitLength: '5.278 km',
    raceDistance: '306.124 km',
    laps: 58,
    lapRecord: { time: '1:19.813', holder: 'Charles Leclerc', year: 2024 },
    winner2026: 'G. Russell',
    defendingChampion: 'G. Russell',
  },
  R02: {
    circuitLength: '5.451 km',
    raceDistance: '305.066 km',
    laps: 56,
    lapRecord: { time: '1:32.238', holder: 'Michael Schumacher', year: 2004 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R03: {
    circuitLength: '5.807 km',
    raceDistance: '307.471 km',
    laps: 53,
    lapRecord: { time: '1:30.965', holder: 'Kimi Antonelli', year: 2025 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R04: {
    circuitLength: '5.412 km',
    raceDistance: '308.326 km',
    laps: 57,
    lapRecord: { time: '1:29.708', holder: 'Max Verstappen', year: 2023 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R05: {
    circuitLength: '4.361 km',
    raceDistance: '305.270 km',
    laps: 70,
    lapRecord: { time: '1:13.078', holder: 'Valtteri Bottas', year: 2019 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R06: {
    circuitLength: '3.337 km',
    raceDistance: '260.286 km',
    laps: 78,
    lapRecord: { time: '1:12.909', holder: 'Lewis Hamilton', year: 2021 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R07: {
    circuitLength: '4.657 km',
    raceDistance: '307.236 km',
    laps: 66,
    lapRecord: { time: '1:15.743', holder: 'Oscar Piastri', year: 2025 },
    winner2026: 'L. Hamilton',
    defendingChampion: 'L. Hamilton',
  },
  R08: {
    circuitLength: '4.318 km',
    raceDistance: '306.452 km',
    laps: 71,
    lapRecord: { time: '1:07.924', holder: 'Oscar Piastri', year: 2025 },
    winner2026: 'G. Russell',
    defendingChampion: 'G. Russell',
  },
  R09: {
    circuitLength: '5.891 km',
    raceDistance: '306.33 km',
    laps: 52,
    lapRecord: { time: '1:27.097', holder: 'Max Verstappen', year: 2020 },
    winner2026: 'C. Leclerc',
    defendingChampion: 'C. Leclerc',
    mapImage: '/circuits/silverstone.png',
  },
  R10: {
    circuitLength: '7.004 km',
    raceDistance: '308.052 km',
    laps: 44,
    lapRecord: { time: '1:44.701', holder: 'Sergio Pérez', year: 2024 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
    mapImage: '/circuits/spa.png',
  },
  R11: {
    circuitLength: '4.381 km',
    raceDistance: '306.63 km',
    laps: 70,
    lapRecord: { time: '1:16.627', holder: 'Lewis Hamilton', year: 2020 },
    winner2026: 'L. Norris',
    defendingChampion: 'L. Norris',
    mapImage: '/circuits/hungaroring.png',
  },
  R12: {
    circuitLength: '4.259 km',
    raceDistance: '306.587 km',
    laps: 72,
    lapRecord: { time: '1:11.097', holder: 'Lewis Hamilton', year: 2021 },
    winner2026: 'L. Norris',
    defendingChampion: 'L. Norris',
    mapImage: '/circuits/zandvoort.png',
  },
  R13: {
    circuitLength: '5.793 km',
    raceDistance: '306.72 km',
    laps: 53,
    lapRecord: { time: '1:20.901', holder: 'Lando Norris', year: 2025 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
    mapImage: '/circuits/monza.png',
  },
  R14: {
    circuitLength: '5.414 km',
    raceDistance: '308.399 km',
    laps: 57,
    lapRecord: { time: '1:35.587', holder: 'George Russell', year: 2026 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R15: {
    circuitLength: '6.003 km',
    raceDistance: '306.049 km',
    laps: 51,
    lapRecord: { time: '1:43.009', holder: 'Charles Leclerc', year: 2019 },
    winner2026: 'G. Russell',
    defendingChampion: 'G. Russell',
    mapImage: '/circuits/baku.png',
  },
  // Bahrain GP relocated to Sepang International Circuit, Malaysia, after the
  // original April Sakhir date was cancelled due to the 2026 Iran war.
  R16: {
    circuitLength: '5.543 km',
    raceDistance: '310.408 km',
    laps: 56,
    lapRecord: { time: '1:34.080', holder: 'Lewis Hamilton', year: 2017 },
    winner2026: 'M. Verstappen',
    defendingChampion: 'M. Verstappen',
  },
  R17: {
    circuitLength: '4.940 km',
    raceDistance: '306.143 km',
    laps: 62,
    lapRecord: { time: '1:33.808', holder: 'Lewis Hamilton', year: 2025 },
    winner2026: 'M. Verstappen',
    defendingChampion: 'M. Verstappen',
    mapImage: '/circuits/marina_bay.png',
  },
  R18: {
    circuitLength: '5.513 km',
    raceDistance: '308.405 km',
    laps: 56,
    lapRecord: { time: '1:36.169', holder: 'Charles Leclerc', year: 2019 },
    winner2026: 'K. Antonelli',
    defendingChampion: 'K. Antonelli',
  },
  R19: {
    circuitLength: '4.304 km',
    raceDistance: '305.354 km',
    laps: 71,
    lapRecord: { time: '1:17.774', holder: 'Valtteri Bottas', year: 2021 },
    winner2026: 'M. Verstappen',
    defendingChampion: 'M. Verstappen',
  },
  R20: {
    circuitLength: '4.309 km',
    raceDistance: '305.879 km',
    laps: 71,
    lapRecord: { time: '1:10.540', holder: 'Valtteri Bottas', year: 2018 },
    winner2026: 'L. Norris',
    defendingChampion: 'L. Norris',
  },
  R21: {
    circuitLength: '6.201 km',
    raceDistance: '309.958 km',
    laps: 50,
    lapRecord: { time: '1:33.365', holder: 'Max Verstappen', year: 2025 },
    winner2026: 'M. Verstappen',
    defendingChampion: 'M. Verstappen',
    mapImage: '/circuits/las_vegas.png',
  },
  R22: {
    circuitLength: '5.419 km',
    raceDistance: '308.611 km',
    laps: 57,
    lapRecord: { time: '1:22.384', holder: 'Lando Norris', year: 2024 },
    defendingChampion: 'M. Verstappen',
    mapImage: '/circuits/lusail.png',
  },
  R23: {
    circuitLength: '5.281 km',
    raceDistance: '306.183 km',
    laps: 58,
    lapRecord: { time: '1:25.637', holder: 'Kevin Magnussen', year: 2024 },
    defendingChampion: 'M. Verstappen',
    mapImage: '/circuits/yas_marina.png',
  },
};

// Drivers' Championship — after the Las Vegas Grand Prix (Sat 21 Nov 2026, local)
export const drivers = [
  { pos: 1, name: 'K. Antonelli', code: 'ANT', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'ITA', gap: null, pts: 402, leader: true, champion: true },
  { pos: 2, name: 'M. Verstappen', code: 'VER', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'NED', gap: -98, pts: 304, favDriver: true },
  { pos: 3, name: 'L. Hamilton', code: 'HAM', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'GBR', gap: -135, pts: 267 },
  { pos: 4, name: 'G. Russell', code: 'RUS', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'GBR', gap: -138, pts: 264 },
  { pos: 5, name: 'L. Norris', code: 'NOR', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'GBR', gap: -138, pts: 264 },
  { pos: 6, name: 'C. Leclerc', code: 'LEC', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'MON', gap: -152, pts: 250 },
  { pos: 7, name: 'O. Piastri', code: 'PIA', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'AUS', gap: -235, pts: 167 },
  { pos: 8, name: 'I. Hadjar', code: 'HAD', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'FRA', gap: -280, pts: 122 },
  { pos: 9, name: 'L. Lawson', code: 'LAW', team: 'Racing Bulls', codeColor: 'var(--racingbulls)', nat: 'NZL', gap: -313, pts: 89 },
  { pos: 10, name: 'P. Gasly', code: 'GAS', team: 'Alpine', codeColor: 'var(--alpine)', nat: 'FRA', gap: -350, pts: 52 },
];

// Constructors' Cup — after the Las Vegas Grand Prix (barPct = pts / leader pts)
export const constructors = [
  { pos: 1, name: 'Mercedes-AMG', engine: 'Mercedes PU · DEU', teamVar: '--mercedes', pts: 666, barPct: 100, champion: true },
  { pos: 2, name: 'Scuderia Ferrari', engine: 'Ferrari PU · ITA', teamVar: '--ferrari', pts: 517, barPct: 78 },
  { pos: 3, name: 'Red Bull Racing ⚡', engine: 'Red Bull Ford · AUT', teamVar: '--redbull', pts: 440, barPct: 66, favTeam: true },
  { pos: 4, name: 'McLaren', engine: 'Mercedes PU · GBR', teamVar: '--mclaren', pts: 431, barPct: 65 },
  { pos: 5, name: 'Racing Bulls', engine: 'Red Bull Ford · ITA', teamVar: '--racingbulls', pts: 114, barPct: 17 },
  { pos: 6, name: 'Alpine', engine: 'Mercedes PU · FRA', teamVar: '--alpine', pts: 87, barPct: 13 },
  { pos: 7, name: 'Haas F1', engine: 'Ferrari PU · USA', teamVar: '--haas', pts: 31, barPct: 5 },
  { pos: 8, name: 'Audi', engine: 'Audi PU · DEU', teamVar: '--audi', pts: 28, barPct: 4 },
  { pos: 9, name: 'Williams', engine: 'Mercedes PU · GBR', teamVar: '--williams', pts: 16, barPct: 2 },
  { pos: 10, name: 'Aston Martin', engine: 'Honda PU · GBR', teamVar: '--aston', pts: 7, barPct: 1 },
  { pos: 11, name: 'Cadillac', engine: 'Ferrari PU · USA · NEW', teamVar: '--cadillac', pts: 0, barPct: 0 },
];

export const paddockMeta = {
  sessionLine: 'Las Vegas Result · Nov 21, 2026',
  podiumHead: 'Las Vegas GP · Top 3 · Sat 21 Nov',
};

// Las Vegas Grand Prix result, Sat 21 November 2026 (local)
export const fp1Podium = [
  { pos: 'P1', name: 'Max Verstappen', team: 'Red Bull · Winner', time: 'Winner' },
  { pos: 'P2', name: 'Lando Norris', team: 'McLaren · +0.639s', time: '+0.639s' },
  { pos: 'P3', name: 'Oscar Piastri', team: 'McLaren · +1.529s', time: '+1.529s' },
];

export const news = [
  {
    kicker: 'RACE · NOV 21',
    num: '01',
    lead: true,
    tone: 'default',
    headline: 'Verstappen wins a pulsating Las Vegas GP as the Ferraris collide and Russell hits the wall',
    body: 'Max Verstappen converted pole into his fourth win of 2026, holding off Lando Norris by 0.639 seconds with Oscar Piastri charging from 17th on the grid to complete the podium. Behind them it was chaos: Charles Leclerc was penalised for spinning Ferrari team mate Lewis Hamilton, George Russell crashed three laps from the end and was classified ninth, and Kimi Antonelli missed out on a podium after a mistake of his own.',
  },
  {
    kicker: '⚡ Red Bull Watch',
    num: '02',
    tone: 'default',
    headline: 'Verstappen locks in P2 as Red Bull close in on Ferrari for second in the Cup',
    body: 'Max\u2019s Las Vegas win — his fourth after Sepang, Singapore and Mexico City — lifts him to 304 points, 37 clear of Hamilton in the fight for runner-up. Red Bull now sit third on 440, 77 behind Ferrari and nine ahead of McLaren, with two rounds left to decide second to fourth in the Constructors\u2019 Championship.',
  },
  {
    kicker: 'Champion · Drivers',
    num: '03',
    tone: 'neutral',
    headline: 'Antonelli crowned youngest world champion in F1 history in Mexico City',
    body: 'Kimi Antonelli sealed the 2026 Drivers\u2019 title with third place at the Mexico City GP, which Verstappen won. At 20 years and 68 days he broke Sebastian Vettel\u2019s age record, became Italy\u2019s first champion since Alberto Ascari in 1953, and wrapped it up with four races still to run.',
  },
  {
    kicker: 'Champion · Constructors',
    num: '04',
    tone: 'neutral',
    headline: 'Mercedes win their ninth Constructors\u2019 title in São Paulo, completing the double',
    body: 'Mercedes clinched the Constructors\u2019 Championship at Interlagos a week after Antonelli\u2019s drivers\u2019 crown — their first team title since 2021, with three rounds to spare. Lando Norris won that race for McLaren. They arrive at the finale on 666 points, 149 clear of Ferrari.',
  },
  {
    kicker: 'Next Up',
    num: '05',
    tone: 'alert',
    headline: 'Qatar GP next: Lusail double-header leads into the Abu Dhabi finale',
    body: 'The Qatar Grand Prix runs Nov 27–29 with lights out at 19:00 local time on Sunday over 57 laps of Lusail, followed by the season finale at Yas Marina on Dec 4–6. Both titles are already decided, so the remaining fights are for runner-up in each championship — and Cadillac\u2019s Sergio Perez has been handed a Qatar grid penalty for his Las Vegas collision.',
  },
];

export const tickerItems = [
  { sym: 'RACE', val: 'VERSTAPPEN WINS', pts: 'LAS VEGAS · +0.639s OVER NORRIS' },
  { sym: 'WDC 🏆', val: 'ANTONELLI CHAMPION', pts: '402 PTS · YOUNGEST EVER' },
  { sym: 'WCC 🏆', val: 'MERCEDES CHAMPIONS', pts: '666 PTS · NINTH TITLE' },
  { sym: 'VER ⚡', val: 'P1 · LAS VEGAS', pts: 'P2 CHAMPIONSHIP · 304' },
  { sym: 'RED BULL', val: 'P3 · 440 PTS', pts: '+9 OVER McLAREN' },
  { sym: 'NEXT UP', val: 'QATAR GP', pts: 'LUSAIL · NOV 29' },
  { sym: 'LUSAIL', val: '57 LAPS', pts: '308.611 KM · 19:00 LOCAL' },
  { sym: 'FINALE', val: 'ABU DHABI', pts: 'YAS MARINA · DEC 06' },
];

export const statsRibbon = [
  { label: 'Race Winner · Las Vegas', big: 'VER', bigEm: 'P1', sub: 'Verstappen\u2019s fourth win of 2026 · Norris P2, Piastri P3' },
  { label: 'World Champion', big: 'ANT', bigEm: '402', bigTail: 'pts', sub: 'Antonelli · youngest ever · clinched in Mexico City' },
  { label: '⚡ Verstappen · Las Vegas GP', big: 'P1', bigEm: 'P2 WDC', sub: 'Back-to-back wins · 98 behind the champion', isVer: true },
  { label: 'Constructors\u2019 Champion', big: 'MER', bigEm: '666', bigTail: 'pts', sub: 'Ninth title · clinched in São Paulo · Ferrari P2 on 517' },
];
