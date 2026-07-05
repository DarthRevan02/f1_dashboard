// All editable season content lives here.
// Update points, results, and news each race weekend — no JSX to touch.

export const fanDriver = 'VER'; // code of the driver this dashboard follows

export const roundsCompleted = 9; // rounds fully finished before the current weekend

export const currentRace = {
  round: 10,
  totalRounds: 22,
  status: 'Up Next',
  live: false,
  flag: '🇧🇪',
  name: 'Belgian',
  nameEm: 'Grand Prix',
  circuit: 'Circuit de Spa-Francorchamps',
  venue: 'Stavelot, Belgium',
  laps: 44,
  distanceKm: 308.052,
  format: 'Standard Format',
  raceDateLabel: 'Jul 19 · Sun',
  // ISO timestamp used for the lights-out countdown (15:00 CEST / 14:00 BST / 13:00 UTC)
  lightsOutISO: '2026-07-19T13:00:00Z',
  fp1: { driver: 'C. Leclerc', time: 'Winner · GBR', label: 'Last Race Winner', timeLabel: 'British GP Result' },
};

export const verstappenSpotlight = {
  number: '07',
  eyebrow: '⚡ Favourite Driver · Oracle Red Bull Racing',
  name: 'Max',
  nameEm: 'Verstappen',
  meta: 'NED · 4× World Champion · #3 · RB22',
  stats: [
    { label: 'British GP · Silverstone', value: 'DNF' },
    { label: 'Championship', value: 'P7 · 76pts' },
    { label: 'Gap to P1', value: '−103', highlight: true },
  ],
};

export const seasonProgressPct = Math.round((9 / 22) * 100 * 10) / 10;

export const calendar = [
  { id: 'R01', round: 'R01', status: 'done', flag: '🇦🇺', country: 'Australia', name: 'Albert Park', date: 'Mar 06–08', winner: 'G. Russell' },
  { id: 'R02', round: 'R02', status: 'done', flag: '🇨🇳', country: 'China', name: 'Shanghai', date: 'Mar 13–15', winner: 'K. Antonelli' },
  { id: 'R03', round: 'R03', status: 'done', flag: '🇯🇵', country: 'Japan', name: 'Suzuka', date: 'Mar 27–29', winner: 'K. Antonelli' },
  { id: 'R04', round: 'R04', status: 'done', flag: '🇺🇸', country: 'USA', name: 'Miami', date: 'May 01–03', winner: 'K. Antonelli' },
  { id: 'R05', round: 'R05', status: 'done', flag: '🇨🇦', country: 'Canada', name: 'Montreal', date: 'May 22–24', winner: 'K. Antonelli' },
  { id: 'R06', round: 'R06', status: 'done', flag: '🇲🇨', country: 'Monaco', name: 'Monte Carlo', date: 'Jun 04–07', winner: 'K. Antonelli' },
  { id: 'R07', round: 'R07', status: 'done', flag: '🇪🇸', country: 'Spain', name: 'Barcelona', date: 'Jun 11–14', winner: 'L. Hamilton' },
  { id: 'R08', round: 'R08', status: 'done', flag: '🇦🇹', country: 'Austria', name: 'Red Bull Ring', date: 'Jun 25–28', winner: 'G. Russell' },
  { id: 'R09', round: 'R09', status: 'done', flag: '🇬🇧', country: 'UK', name: 'Silverstone', date: 'Jul 02–05', winner: 'C. Leclerc' },
  { id: 'R10', round: 'R10 · NEXT', status: 'next', flag: '🇧🇪', country: 'Belgium', name: 'Spa', date: 'Jul 17–19' },
  { id: 'R11', round: 'R11', status: 'upcoming', flag: '🇭🇺', country: 'Hungary', name: 'Hungaroring', date: 'Jul 24–26' },
  { id: 'R12', round: 'R12', status: 'upcoming', flag: '🇳🇱', country: 'Netherlands', name: 'Zandvoort', date: 'Aug 21–23' },
  { id: 'R13', round: 'R13', status: 'upcoming', flag: '🇮🇹', country: 'Italy', name: 'Monza', date: 'Sep 04–06' },
  { id: 'R14', round: 'R14', status: 'upcoming', flag: '🇪🇸', country: 'Spain', name: 'Madrid', date: 'Sep 10–13' },
  { id: 'R15', round: 'R15', status: 'upcoming', flag: '🇦🇿', country: 'Azerbaijan', name: 'Baku', date: 'Sep 23–26' },
  { id: 'R16', round: 'R16', status: 'upcoming', flag: '🇸🇬', country: 'Singapore', name: 'Marina Bay', date: 'Oct 09–11' },
  { id: 'R17', round: 'R17', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Austin', date: 'Oct 23–25' },
  { id: 'R18', round: 'R18', status: 'upcoming', flag: '🇲🇽', country: 'Mexico', name: 'Mexico City', date: 'Oct 30–Nov 1' },
  { id: 'R19', round: 'R19', status: 'upcoming', flag: '🇧🇷', country: 'Brazil', name: 'São Paulo', date: 'Nov 06–08' },
  { id: 'R20', round: 'R20', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Las Vegas', date: 'Nov 19–21' },
  { id: 'R21', round: 'R21', status: 'upcoming', flag: '🇶🇦', country: 'Qatar', name: 'Lusail', date: 'Nov 27–29' },
  { id: 'R22', round: 'R22', status: 'upcoming', flag: '🇦🇪', country: 'UAE', name: 'Yas Marina', date: 'Dec 04–06' },
];

// Per-circuit reference info shown in the circuit detail card when a
// calendar round is clicked. Keyed by the round `id` above.
// Add an entry here for any round to make its card show real data —
// rounds without an entry fall back to a "coming soon" state.
export const circuitDetails = {
  R01: {
    circuitLength: '5.278 km',
    raceDistance: '306.124 km',
    laps: 58,
    lapRecord: { time: '1:19.813', holder: 'Charles Leclerc', year: 2024 },
    defendingChampion: 'G. Russell',
  },
  R02: {
    circuitLength: '5.451 km',
    raceDistance: '305.066 km',
    laps: 56,
    lapRecord: { time: '1:32.238', holder: 'Michael Schumacher', year: 2004 },
    defendingChampion: 'K. Antonelli',
  },
  R03: {
    circuitLength: '5.807 km',
    raceDistance: '307.471 km',
    laps: 53,
    lapRecord: { time: '1:30.965', holder: 'Kimi Antonelli', year: 2025 },
    defendingChampion: 'K. Antonelli',
  },
  R04: {
    circuitLength: '5.412 km',
    raceDistance: '308.326 km',
    laps: 57,
    lapRecord: { time: '1:29.708', holder: 'Max Verstappen', year: 2023 },
    defendingChampion: 'K. Antonelli',
  },
  R05: {
    circuitLength: '4.361 km',
    raceDistance: '305.270 km',
    laps: 70,
    lapRecord: { time: '1:13.078', holder: 'Valtteri Bottas', year: 2019 },
    defendingChampion: 'K. Antonelli',
  },
  R06: {
    circuitLength: '3.337 km',
    raceDistance: '260.286 km',
    laps: 78,
    lapRecord: { time: '1:12.909', holder: 'Lewis Hamilton', year: 2021 },
    defendingChampion: 'K. Antonelli',
  },
  R07: {
    circuitLength: '4.657 km',
    raceDistance: '307.236 km',
    laps: 66,
    lapRecord: { time: '1:15.743', holder: 'Oscar Piastri', year: 2025 },
    defendingChampion: 'L. Hamilton',
  },
  R08: {
    circuitLength: '4.318 km',
    raceDistance: '306.452 km',
    laps: 71,
    lapRecord: { time: '1:07.924', holder: 'Oscar Piastri', year: 2025 },
    defendingChampion: 'G. Russell',
  },
  R09: {
    circuitLength: '5.891 km',
    raceDistance: '306.33 km',
    laps: 52,
    lapRecord: { time: '1:27.097', holder: 'Max Verstappen', year: 2020 },
    defendingChampion: 'Charles Leclerc',
    mapImage: '/circuits/silverstone.png',
  },
  R10: {
    circuitLength: '7.004 km',
    raceDistance: '308.052 km',
    laps: 44,
    lapRecord: { time: '1:44.701', holder: 'Sergio Pérez', year: 2024 },
    defendingChampion: 'Oscar Piastri',
    mapImage: '/circuits/spa.png',
  },
  R11: {
    circuitLength: '4.381 km',
    raceDistance: '306.63 km',
    laps: 70,
    lapRecord: { time: '1:16.627', holder: 'Lewis Hamilton', year: 2020 },
    defendingChampion: 'Lando Norris',
    mapImage: '/circuits/hungaroring.png',
  },
  R12: {
    circuitLength: '4.259 km',
    raceDistance: '306.587 km',
    laps: 72,
    lapRecord: { time: '1:11.097', holder: 'Lewis Hamilton', year: 2021 },
    defendingChampion: 'Oscar Piastri',
    mapImage: '/circuits/zandvoort.png',
  },
  R13: {
    circuitLength: '5.793 km',
    raceDistance: '306.72 km',
    laps: 53,
    lapRecord: { time: '1:20.901', holder: 'Lando Norris', year: 2025 },
    defendingChampion: 'Max Verstappen',
    mapImage: '/circuits/monza.png',
  },
  R14: {
    circuitLength: '5.474 km',
    raceDistance: '312.02 km',
    laps: 57,
    lapRecord: { time: 'N/A', holder: 'Circuit debut', year: 2026 },
    defendingChampion: 'Inaugural race',
  },
  R15: {
    circuitLength: '6.003 km',
    raceDistance: '306.049 km',
    laps: 51,
    lapRecord: { time: '1:43.009', holder: 'Charles Leclerc', year: 2019 },
    defendingChampion: 'Max Verstappen',
    mapImage: '/circuits/baku.png',
  },
  R16: {
    circuitLength: '4.940 km',
    raceDistance: '306.143 km',
    laps: 62,
    lapRecord: { time: '1:33.808', holder: 'Lewis Hamilton', year: 2025 },
    defendingChampion: 'George Russell',
    mapImage: '/circuits/marina_bay.png',
  },
  R17: {
    circuitLength: '5.513 km',
    raceDistance: '308.405 km',
    laps: 56,
    lapRecord: { time: '1:36.169', holder: 'Charles Leclerc', year: 2019 },
    defendingChampion: 'Max Verstappen',
  },
  R18: {
    circuitLength: '4.304 km',
    raceDistance: '305.354 km',
    laps: 71,
    lapRecord: { time: '1:17.774', holder: 'Valtteri Bottas', year: 2021 },
    defendingChampion: 'Lando Norris',
  },
  R19: {
    circuitLength: '4.309 km',
    raceDistance: '305.879 km',
    laps: 71,
    lapRecord: { time: '1:10.540', holder: 'Valtteri Bottas', year: 2018 },
    defendingChampion: 'Lando Norris',
  },
  R20: {
    circuitLength: '6.201 km',
    raceDistance: '309.958 km',
    laps: 50,
    lapRecord: { time: '1:33.365', holder: 'Max Verstappen', year: 2025 },
    defendingChampion: 'Max Verstappen',
  },
  R21: {
    circuitLength: '5.419 km',
    raceDistance: '308.611 km',
    laps: 57,
    lapRecord: { time: '1:22.384', holder: 'Lando Norris', year: 2024 },
    defendingChampion: 'Max Verstappen',
  },
  R22: {
    circuitLength: '5.281 km',
    raceDistance: '306.183 km',
    laps: 58,
    lapRecord: { time: '1:25.637', holder: 'Kevin Magnussen', year: 2024 },
    defendingChampion: 'Max Verstappen',
  },
};

// Drivers' Championship — after the British Grand Prix (Sun 5 Jul 2026)
export const drivers = [
  { pos: 1, name: 'K. Antonelli', code: 'ANT', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'ITA', gap: null, pts: 179, leader: true },
  { pos: 2, name: 'G. Russell', code: 'RUS', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'GBR', gap: -25, pts: 154 },
  { pos: 3, name: 'L. Hamilton', code: 'HAM', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'GBR', gap: -32, pts: 147 },
  { pos: 4, name: 'C. Leclerc', code: 'LEC', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'MON', gap: -71, pts: 108 },
  { pos: 5, name: 'L. Norris', code: 'NOR', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'GBR', gap: -82, pts: 97 },
  { pos: 6, name: 'O. Piastri', code: 'PIA', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'AUS', gap: -97, pts: 82 },
  { pos: 7, name: 'M. Verstappen', code: 'VER', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'NED', gap: -103, pts: 76, favDriver: true },
  { pos: 8, name: 'I. Hadjar', code: 'HAD', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'FRA', gap: -127, pts: 52 },
  { pos: 9, name: 'P. Gasly', code: 'GAS', team: 'Alpine', codeColor: 'var(--alpine)', nat: 'FRA', gap: -137, pts: 42 },
  { pos: 10, name: 'L. Lawson', code: 'LAW', team: 'Racing Bulls', codeColor: 'var(--racingbulls)', nat: 'NZL', gap: -140, pts: 39 },
];

// Constructors' Cup — after the British Grand Prix
export const constructors = [
  { pos: 1, name: 'Mercedes-AMG', engine: 'Mercedes PU · DEU', teamVar: '--mercedes', pts: 333, barPct: 100 },
  { pos: 2, name: 'Scuderia Ferrari', engine: 'Ferrari PU · ITA', teamVar: '--ferrari', pts: 255, barPct: 77 },
  { pos: 3, name: 'McLaren', engine: 'Mercedes PU · GBR', teamVar: '--mclaren', pts: 179, barPct: 54 },
  { pos: 4, name: 'Red Bull Racing ⚡', engine: 'Red Bull Ford · AUT', teamVar: '--redbull', pts: 128, barPct: 38, favTeam: true },
  { pos: 5, name: 'Alpine', engine: 'Mercedes PU · FRA', teamVar: '--alpine', pts: 60, barPct: 18 },
  { pos: 6, name: 'Racing Bulls', engine: 'Red Bull Ford · ITA', teamVar: '--racingbulls', pts: 59, barPct: 18 },
  { pos: 7, name: 'Haas F1', engine: 'Ferrari PU · USA', teamVar: '--haas', pts: 21, barPct: 6 },
  { pos: 8, name: 'Williams', engine: 'Mercedes PU · GBR', teamVar: '--williams', pts: 11, barPct: 3 },
  { pos: 9, name: 'Audi', engine: 'Audi PU · DEU', teamVar: '--audi', pts: 6, barPct: 2 },
  { pos: 10, name: 'Aston Martin', engine: 'Honda PU · GBR', teamVar: '--aston', pts: 1, barPct: 0 },
  { pos: 11, name: 'Cadillac', engine: 'Ferrari PU · USA · NEW', teamVar: '--cadillac', pts: 0, barPct: 0 },
];

export const paddockMeta = {
  sessionLine: 'Silverstone Result · Jul 05, 2026',
  podiumHead: 'British GP · Top 3 · Sun 5 Jul',
};

// British Grand Prix result, Sun 5 July 2026 — race finished behind the Safety Car
export const fp1Podium = [
  { pos: 'P1', name: 'Charles Leclerc', team: 'Ferrari · Winner', time: 'Winner' },
  { pos: 'P2', name: 'George Russell', team: 'Mercedes · SC finish', time: 'SC' },
  { pos: 'P3', name: 'Lewis Hamilton', team: 'Ferrari · Under review', time: 'Investigation' },
];

export const news = [
  {
    kicker: 'RACE · JUL 05',
    num: '01',
    lead: true,
    tone: 'default',
    headline: 'Leclerc wins chaotic British GP as Antonelli\u2019s title charge unravels late',
    body: 'Charles Leclerc held firm through a dramatic Silverstone to claim his ninth career win and first at the circuit, after championship leader Kimi Antonelli — who had built a commanding lead — suffered a left-front wheel shield failure on Lap 41 and picked up a track-limits penalty that dropped him out of the points entirely. A late Verstappen crash brought out the Safety Car that sealed the result, with George Russell inheriting second by staying out during the stoppage.',
  },
  {
    kicker: '⚡ Red Bull Watch',
    num: '02',
    tone: 'alert',
    headline: 'Another blank for Verstappen as late Stowe crash ends his Silverstone weekend',
    body: 'Max spun into the gravel at Stowe on Lap 48 while running well outside the points, triggering the Safety Car that decided the race for those ahead of him. It is his second retirement of the season and leaves Red Bull\u2019s home-soil title defence looking increasingly remote — Max remains seventh in the standings, 103 points off the lead, as speculation over his long-term future keeps building in the paddock.',
  },
  {
    kicker: '⚠ Stewards\u2019 Inquiry',
    num: '03',
    tone: 'alert',
    headline: 'Hamilton\u2019s home podium in jeopardy after yellow-flag investigation',
    body: 'Lewis Hamilton crossed the line third in front of his home crowd, but the stewards have opened a post-race investigation into a yellow-flag infringement that could yet cost him the result. A decision is expected in the hours after the race, with Isack Hadjar\u2019s fifth-place Red Bull result also under scrutiny from the same phase of the Safety Car period.',
  },
  {
    kicker: 'Title Fight',
    num: '04',
    tone: 'neutral',
    headline: 'Antonelli\u2019s lead cut to 25 points as Mercedes team mates close in',
    body: 'Kimi Antonelli\u2019s non-score allowed both George Russell and Lewis Hamilton to close the gap at the top, with Russell now just a race win behind. Ferrari also clawed back 22 points on Mercedes in the Constructors\u2019 Championship thanks to Leclerc\u2019s win, setting up a tighter fight as the paddock heads to Spa-Francorchamps for round 10.',
  },
];

export const tickerItems = [
  { sym: 'RACE', val: 'LECLERC WINS', pts: 'FIRST AT SILVERSTONE' },
  { sym: 'WDC', val: 'ANTONELLI 179', pts: '+25 OVER RUSSELL' },
  { sym: 'VER ⚡', val: 'DNF · CRASH', pts: 'P7 CHAMPIONSHIP' },
  { sym: 'ANTONELLI', val: 'WHEEL SHIELD FAIL', pts: 'DROPPED OUT OF POINTS' },
  { sym: 'WCC', val: 'MERCEDES 333', pts: '+78 OVER FERRARI' },
  { sym: 'STEWARDS', val: 'HAMILTON UNDER REVIEW', pts: 'PODIUM AT RISK' },
  { sym: 'NEXT UP', val: 'BELGIAN GP', pts: 'SPA · JUL 19' },
  { sym: 'SPA', val: '44 LAPS', pts: '308.052 KM' },
];

export const statsRibbon = [
  { label: 'Race Winner · Silverstone', big: 'LEC', bigEm: 'P1', sub: 'Leclerc\u2019s first British GP win' },
  { label: 'Championship Gap', big: '', bigEm: '+25', bigTail: 'pts', sub: 'Antonelli leads Russell after a costly DNF' },
  { label: '⚡ Verstappen · British GP', big: 'DNF', bigEm: 'P7 WDC', sub: 'Late crash at Stowe triggers Safety Car', isVer: true },
  { label: 'Constructors\u2019 Gap', big: 'MER', bigEm: '+78', bigTail: 'pts', sub: 'Mercedes lead Ferrari · McLaren P3' },
];
