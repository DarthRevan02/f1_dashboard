// All editable season content lives here.
// Update points, results, and news each race weekend — no JSX to touch.

export const fanDriver = 'VER'; // code of the driver this dashboard follows

export const roundsCompleted = 11; // rounds fully finished before the current weekend

export const currentRace = {
  round: 12,
  totalRounds: 23,
  status: 'Up Next',
  live: false,
  flag: '🇳🇱',
  name: 'Dutch',
  nameEm: 'Grand Prix',
  circuit: 'Circuit Zandvoort',
  venue: 'Zandvoort, Netherlands',
  laps: 72,
  distanceKm: 306.587,
  format: 'Sprint Weekend',
  raceDateLabel: 'Aug 23 · Sun',
  // ISO timestamp used for the lights-out countdown (15:00 CEST / 14:00 BST / 13:00 UTC)
  lightsOutISO: '2026-08-23T13:00:00Z',
  fp1: { driver: 'L. Norris', time: 'Winner · HUN', label: 'Last Race Winner', timeLabel: 'Hungarian GP Result' },
};

export const verstappenSpotlight = {
  number: '07',
  eyebrow: '⚡ Favourite Driver · Oracle Red Bull Racing',
  name: 'Max',
  nameEm: 'Verstappen',
  meta: 'NED · 4× World Champion · #3 · RB22',
  stats: [
    { label: 'Hungarian GP · Hungaroring', value: 'P2' },
    { label: 'Championship', value: 'P7 · 91pts' },
    { label: 'Gap to P1', value: '−113', highlight: true },
  ],
};

export const seasonProgressPct = Math.round((11 / 23) * 100 * 10) / 10;

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
  { id: 'R10', round: 'R10', status: 'done', flag: '🇧🇪', country: 'Belgium', name: 'Spa', date: 'Jul 17–19', winner: 'K. Antonelli' },
  { id: 'R11', round: 'R11', status: 'done', flag: '🇭🇺', country: 'Hungary', name: 'Hungaroring', date: 'Jul 24–26', winner: 'L. Norris' },
  { id: 'R12', round: 'R12 · NEXT', status: 'next', flag: '🇳🇱', country: 'Netherlands', name: 'Zandvoort', date: 'Aug 21–23' },
  { id: 'R13', round: 'R13', status: 'upcoming', flag: '🇮🇹', country: 'Italy', name: 'Monza', date: 'Sep 04–06' },
  { id: 'R14', round: 'R14', status: 'upcoming', flag: '🇪🇸', country: 'Spain', name: 'Madrid', date: 'Sep 11–13' },
  { id: 'R15', round: 'R15', status: 'upcoming', flag: '🇦🇿', country: 'Azerbaijan', name: 'Baku', date: 'Sep 24–26' },
  { id: 'R16', round: 'R16', status: 'upcoming', flag: '🇧🇭', country: 'Bahrain', name: 'Sepang (Malaysia)', date: 'Oct 02–04' },
  { id: 'R17', round: 'R17', status: 'upcoming', flag: '🇸🇬', country: 'Singapore', name: 'Marina Bay', date: 'Oct 09–11' },
  { id: 'R18', round: 'R18', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Austin', date: 'Oct 23–25' },
  { id: 'R19', round: 'R19', status: 'upcoming', flag: '🇲🇽', country: 'Mexico', name: 'Mexico City', date: 'Oct 30–Nov 1' },
  { id: 'R20', round: 'R20', status: 'upcoming', flag: '🇧🇷', country: 'Brazil', name: 'São Paulo', date: 'Nov 06–08' },
  { id: 'R21', round: 'R21', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Las Vegas', date: 'Nov 19–21' },
  { id: 'R22', round: 'R22', status: 'upcoming', flag: '🇶🇦', country: 'Qatar', name: 'Lusail', date: 'Nov 27–29' },
  { id: 'R23', round: 'R23', status: 'upcoming', flag: '🇦🇪', country: 'UAE', name: 'Yas Marina', date: 'Dec 04–06' },
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
    defendingChampion: 'Kimi Antonelli',
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
  // Bahrain GP relocated to Sepang International Circuit, Malaysia, after the
  // original April Sakhir date was cancelled due to the 2026 Iran war.
  R16: {
    circuitLength: '5.543 km',
    raceDistance: '310.408 km',
    laps: 56,
    lapRecord: { time: '1:34.080', holder: 'Lewis Hamilton', year: 2017 },
    defendingChampion: 'N/A · First Bahrain GP hosted in Malaysia',
  },
  R17: {
    circuitLength: '4.940 km',
    raceDistance: '306.143 km',
    laps: 62,
    lapRecord: { time: '1:33.808', holder: 'Lewis Hamilton', year: 2025 },
    defendingChampion: 'George Russell',
    mapImage: '/circuits/marina_bay.png',
  },
  R18: {
    circuitLength: '5.513 km',
    raceDistance: '308.405 km',
    laps: 56,
    lapRecord: { time: '1:36.169', holder: 'Charles Leclerc', year: 2019 },
    defendingChampion: 'Max Verstappen',
  },
  R19: {
    circuitLength: '4.304 km',
    raceDistance: '305.354 km',
    laps: 71,
    lapRecord: { time: '1:17.774', holder: 'Valtteri Bottas', year: 2021 },
    defendingChampion: 'Lando Norris',
  },
  R20: {
    circuitLength: '4.309 km',
    raceDistance: '305.879 km',
    laps: 71,
    lapRecord: { time: '1:10.540', holder: 'Valtteri Bottas', year: 2018 },
    defendingChampion: 'Lando Norris',
  },
  R21: {
    circuitLength: '6.201 km',
    raceDistance: '309.958 km',
    laps: 50,
    lapRecord: { time: '1:33.365', holder: 'Max Verstappen', year: 2025 },
    defendingChampion: 'Max Verstappen',
  },
  R22: {
    circuitLength: '5.419 km',
    raceDistance: '308.611 km',
    laps: 57,
    lapRecord: { time: '1:22.384', holder: 'Lando Norris', year: 2024 },
    defendingChampion: 'Max Verstappen',
  },
  R23: {
    circuitLength: '5.281 km',
    raceDistance: '306.183 km',
    laps: 58,
    lapRecord: { time: '1:25.637', holder: 'Kevin Magnussen', year: 2024 },
    defendingChampion: 'Max Verstappen',
  },
};

// Drivers' Championship — after the Hungarian Grand Prix (Sun 26 Jul 2026)
export const drivers = [
  { pos: 1, name: 'K. Antonelli', code: 'ANT', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'ITA', gap: null, pts: 204, leader: true },
  { pos: 2, name: 'L. Hamilton', code: 'HAM', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'GBR', gap: -45, pts: 159 },
  { pos: 3, name: 'G. Russell', code: 'RUS', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'GBR', gap: -50, pts: 154 },
  { pos: 4, name: 'C. Leclerc', code: 'LEC', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'MON', gap: -78, pts: 126 },
  { pos: 5, name: 'L. Norris', code: 'NOR', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'GBR', gap: -101, pts: 103 },
  { pos: 6, name: 'O. Piastri', code: 'PIA', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'AUS', gap: -112, pts: 92 },
  { pos: 7, name: 'M. Verstappen', code: 'VER', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'NED', gap: -113, pts: 91, favDriver: true },
  { pos: 8, name: 'I. Hadjar', code: 'HAD', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'FRA', gap: -144, pts: 60 },
  { pos: 9, name: 'P. Gasly', code: 'GAS', team: 'Alpine', codeColor: 'var(--alpine)', nat: 'FRA', gap: -162, pts: 42 },
  { pos: 10, name: 'L. Lawson', code: 'LAW', team: 'Racing Bulls', codeColor: 'var(--racingbulls)', nat: 'NZL', gap: -165, pts: 39 },
];

// Constructors' Cup — after the Hungarian Grand Prix
export const constructors = [
  { pos: 1, name: 'Mercedes-AMG', engine: 'Mercedes PU · DEU', teamVar: '--mercedes', pts: 379, barPct: 100 },
  { pos: 2, name: 'Scuderia Ferrari', engine: 'Ferrari PU · ITA', teamVar: '--ferrari', pts: 307, barPct: 81 },
  { pos: 3, name: 'McLaren', engine: 'Mercedes PU · GBR', teamVar: '--mclaren', pts: 220, barPct: 58 },
  { pos: 4, name: 'Red Bull Racing ⚡', engine: 'Red Bull Ford · AUT', teamVar: '--redbull', pts: 177, barPct: 47, favTeam: true },
  { pos: 5, name: 'Racing Bulls', engine: 'Red Bull Ford · ITA', teamVar: '--racingbulls', pts: 66, barPct: 17 },
  { pos: 6, name: 'Alpine', engine: 'Mercedes PU · FRA', teamVar: '--alpine', pts: 61, barPct: 16 },
  { pos: 7, name: 'Haas F1', engine: 'Ferrari PU · USA', teamVar: '--haas', pts: 21, barPct: 6 },
  { pos: 8, name: 'Audi', engine: 'Audi PU · DEU', teamVar: '--audi', pts: 12, barPct: 3 },
  { pos: 9, name: 'Williams', engine: 'Mercedes PU · GBR', teamVar: '--williams', pts: 11, barPct: 3 },
  { pos: 10, name: 'Aston Martin', engine: 'Honda PU · GBR', teamVar: '--aston', pts: 1, barPct: 0 },
  { pos: 11, name: 'Cadillac', engine: 'Ferrari PU · USA · NEW', teamVar: '--cadillac', pts: 0, barPct: 0 },
];

export const paddockMeta = {
  sessionLine: 'Hungaroring Result · Jul 26, 2026',
  podiumHead: 'Hungarian GP · Top 3 · Sun 26 Jul',
};

// Hungarian Grand Prix result, Sun 26 July 2026
export const fp1Podium = [
  { pos: 'P1', name: 'Lando Norris', team: 'McLaren · Winner', time: 'Winner' },
  { pos: 'P2', name: 'Max Verstappen', team: 'Red Bull · +15.08s', time: '+15.08s' },
  { pos: 'P3', name: 'Kimi Antonelli', team: 'Mercedes · +18.72s', time: '+18.72s' },
];

export const news = [
  {
    kicker: 'RACE · JUL 26',
    num: '01',
    lead: true,
    tone: 'default',
    headline: 'Norris ends winless run with dominant Hungarian GP as Piastri retires from the lead',
    body: 'Lando Norris converted pole into McLaren\u2019s first win of 2026 at the Hungaroring, coming out on top of an early tussle with team mate Oscar Piastri before pulling clear in the closing stint. Piastri, who had led since a Lap 1 pass at Turn 2, retired late with a gearbox failure that triggered a Virtual Safety Car, while Max Verstappen salvaged an unexpected second and Kimi Antonelli held on for third to extend his championship lead.',
  },
  {
    kicker: '⚡ Red Bull Watch',
    num: '02',
    tone: 'default',
    headline: 'Verstappen fights back to P2 in Hungary after a difficult weekend with the RB22',
    body: 'Max battled the car\u2019s balance all weekend but still crossed the line 15 seconds behind Norris for a second Red Bull podium in three races, following his P3 at Spa. He now sits seventh in the standings on 91 points, 113 behind Antonelli, with the RB22\u2019s inconsistent form still the team\u2019s biggest question mark heading into the summer break.',
  },
  {
    kicker: 'Spa Recap',
    num: '03',
    tone: 'neutral',
    headline: 'Antonelli beats Leclerc for sixth win of the season as Russell\u2019s race ends on Lap 1',
    body: 'Kimi Antonelli survived early pressure from Verstappen and a mid-race strategy setback to reclaim the lead from Charles Leclerc on the Kemmel Straight, taking the chequered flag by 1.9 seconds at Spa-Francorchamps. Mercedes team mate George Russell was eliminated in a Lap 1 clash with Lewis Hamilton, a result that widened Antonelli\u2019s championship advantage heading into Hungary.',
  },
  {
    kicker: 'Calendar News',
    num: '04',
    tone: 'alert',
    headline: 'Bahrain GP returns to the calendar — relocated to Sepang, Malaysia, for October',
    body: 'The Bahrain and Saudi Arabian Grands Prix were cancelled in April after the outbreak of the 2026 Iran war, but F1 has now confirmed a replacement round: the Bahrain GP will be run at Sepang International Circuit from Oct 2\u20134, slotting in ahead of Singapore as part of a triple-header with Azerbaijan.',
  },
  {
    kicker: 'Title Fight',
    num: '05',
    tone: 'neutral',
    headline: 'Antonelli\u2019s lead swells to 45 points after back-to-back podiums',
    body: 'Kimi Antonelli\u2019s win at Spa and podium in Hungary have stretched his advantage at the top, with Lewis Hamilton\u2019s Hungaroring P4 lifting him ahead of Russell into second overall. Mercedes now lead Ferrari by 72 points in the Constructors\u2019 Championship, with McLaren\u2019s Hungary win closing the gap to Red Bull in the fight for third.',
  },
];

export const tickerItems = [
  { sym: 'RACE', val: 'NORRIS WINS', pts: 'FIRST MCLAREN WIN OF 2026' },
  { sym: 'WDC', val: 'ANTONELLI 204', pts: '+45 OVER HAMILTON' },
  { sym: 'VER ⚡', val: 'P2 · HUNGARY', pts: 'P7 CHAMPIONSHIP' },
  { sym: 'PIASTRI', val: 'GEARBOX DNF', pts: 'LOST LEAD LATE' },
  { sym: 'WCC', val: 'MERCEDES 379', pts: '+72 OVER FERRARI' },
  { sym: 'CALENDAR', val: 'BAHRAIN GP ADDED', pts: 'SEPANG · OCT 02\u201304' },
  { sym: 'NEXT UP', val: 'DUTCH GP', pts: 'ZANDVOORT · AUG 23' },
  { sym: 'ZANDVOORT', val: '72 LAPS', pts: '306.587 KM · SPRINT' },
];

export const statsRibbon = [
  { label: 'Race Winner · Hungaroring', big: 'NOR', bigEm: 'P1', sub: 'Norris \u0026 McLaren\u2019s first win of 2026' },
  { label: 'Championship Gap', big: '', bigEm: '+45', bigTail: 'pts', sub: 'Antonelli leads Hamilton after Spa \u0026 Hungary podiums' },
  { label: '⚡ Verstappen · Hungarian GP', big: 'P2', bigEm: 'P7 WDC', sub: 'Fights back for second Red Bull podium in three races', isVer: true },
  { label: 'Constructors\u2019 Gap', big: 'MER', bigEm: '+72', bigTail: 'pts', sub: 'Mercedes lead Ferrari · McLaren closing on Red Bull' },
];
