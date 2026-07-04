// All editable season content lives here.
// Update points, results, and news each race weekend — no JSX to touch.

export const fanDriver = 'VER'; // code of the driver Aadi follows

export const currentRace = {
  round: 4,
  totalRounds: 23,
  status: 'Live Weekend',
  flag: '🇺🇸',
  name: 'Miami',
  nameEm: 'Grand Prix',
  circuit: 'Miami International Autodrome',
  venue: 'Hard Rock Stadium',
  laps: 57,
  distanceKm: 308.326,
  format: 'Sprint Format',
  raceDateLabel: 'May 3 · Sun',
  // ISO timestamp used for the lights-out countdown
  lightsOutISO: '2026-05-03T20:00:00Z',
  fp1: { driver: 'C. Leclerc', time: '1:29.310' },
};

export const verstappenSpotlight = {
  number: '03',
  eyebrow: '⚡ Aadi\u2019s Driver · Oracle Red Bull Racing',
  name: 'Max',
  nameEm: 'Verstappen',
  meta: 'NED · 4× World Champion · #3 · RB22',
  stats: [
    { label: 'FP1 Miami', value: 'P2 ⚡', highlight: true },
    { label: 'Championship', value: 'P9 · 12pts' },
    { label: 'Gap to P1', value: '−60' },
  ],
};

export const seasonProgressPct = 13.6;

export const calendar = [
  { round: 'R01', status: 'done', flag: '🇦🇺', country: 'Australia', name: 'Albert Park', date: 'Mar 06–08', winner: 'G. Russell' },
  { round: 'R02', status: 'done', flag: '🇨🇳', country: 'China', name: 'Shanghai', date: 'Mar 13–15', winner: 'K. Antonelli' },
  { round: 'R03', status: 'done', flag: '🇯🇵', country: 'Japan', name: 'Suzuka', date: 'Mar 27–29', winner: 'K. Antonelli' },
  { round: 'R04 · LIVE 🔴', status: 'next', flag: '🇺🇸', country: 'USA', name: 'Miami', date: 'May 01–03' },
  { round: 'R05', status: 'upcoming', flag: '🇨🇦', country: 'Canada', name: 'Montreal', date: 'May 22–24' },
  { round: 'R06', status: 'upcoming', flag: '🇲🇨', country: 'Monaco', name: 'Monte Carlo', date: 'Jun 05–07' },
  { round: 'R07', status: 'upcoming', flag: '🇪🇸', country: 'Spain', name: 'Barcelona', date: 'Jun 12–14' },
  { round: 'R08', status: 'upcoming', flag: '🇦🇹', country: 'Austria', name: 'Red Bull Ring', date: 'Jun 26–28' },
  { round: 'R09', status: 'upcoming', flag: '🇬🇧', country: 'UK', name: 'Silverstone', date: 'Jul 03–05' },
  { round: 'R10', status: 'upcoming', flag: '🇧🇪', country: 'Belgium', name: 'Spa', date: 'Jul 24–26' },
  { round: 'R11', status: 'upcoming', flag: '🇭🇺', country: 'Hungary', name: 'Hungaroring', date: 'Jul 31–Aug 2' },
  { round: 'R12', status: 'upcoming', flag: '🇳🇱', country: 'Netherlands', name: 'Zandvoort', date: 'Aug 21–23' },
  { round: 'R13', status: 'upcoming', flag: '🇮🇹', country: 'Italy', name: 'Monza', date: 'Sep 04–06' },
  { round: 'R14', status: 'upcoming', flag: '🇪🇸', country: 'Spain', name: 'Madrid', date: 'Sep 11–13' },
  { round: 'R15', status: 'upcoming', flag: '🇦🇿', country: 'Azerbaijan', name: 'Baku', date: 'Sep 26 · Sat' },
  { round: 'R16', status: 'upcoming', flag: '🇸🇬', country: 'Singapore', name: 'Marina Bay', date: 'Oct 09–11' },
  { round: 'R17', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Austin', date: 'Oct 23–25' },
  { round: 'R18', status: 'upcoming', flag: '🇲🇽', country: 'Mexico', name: 'Mexico City', date: 'Oct 30–Nov 1' },
  { round: 'R19', status: 'upcoming', flag: '🇧🇷', country: 'Brazil', name: 'São Paulo', date: 'Nov 06–08' },
  { round: 'R20', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Las Vegas', date: 'Nov 19–21' },
  { round: 'R21', status: 'upcoming', flag: '🇶🇦', country: 'Qatar', name: 'Lusail', date: 'Nov 27–29' },
  { round: 'R22', status: 'upcoming', flag: '🇦🇪', country: 'UAE', name: 'Yas Marina', date: 'Dec 04–06' },
];

export const drivers = [
  { pos: 1, name: 'K. Antonelli', code: 'ANT', team: 'Mercedes', teamVar: '--mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'ITA', gap: null, pts: 72, leader: true },
  { pos: 2, name: 'G. Russell', code: 'RUS', team: 'Mercedes', teamVar: '--mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'GBR', gap: -9, pts: 63 },
  { pos: 3, name: 'C. Leclerc', code: 'LEC', team: 'Ferrari', teamVar: '--ferrari', codeColor: 'var(--ferrari)', nat: 'MON', gap: -23, pts: 49 },
  { pos: 4, name: 'L. Hamilton', code: 'HAM', team: 'Ferrari', teamVar: '--ferrari', codeColor: 'var(--ferrari)', nat: 'GBR', gap: -31, pts: 41 },
  { pos: 5, name: 'O. Piastri', code: 'PIA', team: 'McLaren', teamVar: '--mclaren', codeColor: 'var(--mclaren)', nat: 'AUS', gap: -47, pts: 25 },
  { pos: 6, name: 'L. Norris', code: 'NOR', team: 'McLaren', teamVar: '--mclaren', codeColor: 'var(--mclaren)', nat: 'GBR', gap: -51, pts: 21 },
  { pos: 7, name: 'E. Ocon', code: 'OCO', team: 'Haas', teamVar: '--haas', codeColor: '#4a4a4a', nat: 'FRA', gap: -57, pts: 15 },
  { pos: 8, name: 'L. Lawson', code: 'LAW', team: 'Racing Bulls', teamVar: '--racingbulls', codeColor: 'var(--racingbulls)', nat: 'NZL', gap: -60, pts: 12 },
  { pos: 9, name: 'M. Verstappen', code: 'VER', team: 'Red Bull', teamVar: '--redbull', codeColor: 'var(--redbull)', nat: 'NED', gap: -60, pts: 12, favDriver: true },
  { pos: 10, name: 'P. Gasly', code: 'GAS', team: 'Alpine', teamVar: '--alpine', codeColor: 'var(--alpine)', nat: 'FRA', gap: -63, pts: 9 },
];

export const constructors = [
  { pos: 1, name: 'Mercedes-AMG', engine: 'Mercedes PU · DEU', teamVar: '--mercedes', pts: 135, barPct: 100 },
  { pos: 2, name: 'Scuderia Ferrari', engine: 'Ferrari PU · ITA', teamVar: '--ferrari', pts: 90, barPct: 66 },
  { pos: 3, name: 'McLaren', engine: 'Mercedes PU · GBR', teamVar: '--mclaren', pts: 56, barPct: 41 },
  { pos: 4, name: 'Haas F1', engine: 'Ferrari PU · USA', teamVar: '--haas', pts: 18, barPct: 13 },
  { pos: 5, name: 'Red Bull Racing ⚡', engine: 'Red Bull Ford · AUT', teamVar: '--redbull', pts: 16, barPct: 12, favTeam: true },
  { pos: 6, name: 'Alpine', engine: 'Mercedes PU · FRA', teamVar: '--alpine', pts: 9, barPct: 7 },
  { pos: 7, name: 'Racing Bulls', engine: 'Red Bull Ford · ITA', teamVar: '--racingbulls', pts: 14, barPct: 10 },
  { pos: 8, name: 'Audi', engine: 'Audi PU · DEU', teamVar: '--audi', pts: 2, barPct: 2 },
  { pos: 9, name: 'Williams', engine: 'Mercedes PU · GBR', teamVar: '--williams', pts: 2, barPct: 2 },
  { pos: 10, name: 'Aston Martin', engine: 'Honda PU · GBR', teamVar: '--aston', pts: 0, barPct: 0 },
  { pos: 11, name: 'Cadillac', engine: 'Ferrari PU · USA · NEW', teamVar: '--cadillac', pts: 0, barPct: 0 },
];

export const fp1Podium = [
  { pos: 'P1', name: 'Charles Leclerc', team: 'Ferrari · 1:29.310', time: 'Fastest' },
  { pos: 'P2', name: 'Max Verstappen ⚡', team: 'Red Bull · +0.296s', time: '+0.296' },
  { pos: 'P3', name: 'Oscar Piastri', team: 'McLaren · +0.4s est.', time: '+0.4s' },
];

export const news = [
  {
    kicker: 'FP1 · May 02',
    num: '01',
    lead: true,
    tone: 'default',
    headline: 'Leclerc heads FP1 as Verstappen surges to P2 — Antonelli struck by power unit scare',
    body: 'Ferrari\u2019s Charles Leclerc set the benchmark at 1:29.310 in a 90-minute opener, with Max Verstappen an encouraging 0.3s back in P2 — his best showing of the 2026 season. Championship leader Kimi Antonelli was denied a soft-tyre run after a power unit issue hit his Mercedes late in session, leaving him only P5 on harder compounds. Hamilton was fourth despite a near-miss with Hulkenberg\u2019s Audi.',
  },
  {
    kicker: '⚡ Red Bull Watch',
    num: '02',
    tone: 'neutral',
    headline: 'Max P2 in FP1 — RB22 upgrade package shows first real signs of life in Miami heat',
    body: 'After a demoralising start to the season with P9 in the championship, the Red Bull looked transformed in FP1. Verstappen was just three tenths off Leclerc on the softs, and the RB22 upgrade package — which makes the car "almost unrecognisable" — has raised cautious optimism in the garage. Miami could be Max\u2019s first real shot at a podium in 2026.',
  },
  {
    kicker: '⚠ Weather Alert',
    num: '03',
    tone: 'alert',
    headline: 'Thunderstorms threaten Sunday\u2019s race — US law could halt or cancel Miami GP',
    body: 'AccuWeather forecasts an 88% chance of rain and a 53% chance of thunderstorms on race day. A unique US law mandates that all outdoor public events must be suspended when lightning is approaching — which would ground the medical helicopter and force a red flag. The FIA has a contingency plan ready and is monitoring closely; Friday and Saturday are expected to remain dry.',
  },
  {
    kicker: 'Team Update',
    num: '04',
    tone: 'neutral',
    headline: 'Mercedes face biggest threat yet — McLaren and Ferrari upgrades close the gap in FP1',
    body: 'The Silver Arrows\u2019 early-season dominance is under pressure. Ferrari\u2019s Macarena front wing and an extensively revised McLaren MCL40 — described as "almost unrecognisable" — both showed genuine pace in session. Russell was only P6 after a Turn 17 error on softs. Sprint Qualifying tonight will be the first real indicator of whether Mercedes can hold onto their advantage.',
  },
];

export const tickerItems = [
  { sym: 'FP1', val: 'LECLERC P1', pts: '1:29.310' },
  { sym: 'VER ⚡', val: 'P2 IN FP1', pts: 'BEST OF 2026' },
  { sym: 'WDC', val: 'ANTONELLI', pts: '72 pts · PU SCARE' },
  { sym: 'WEATHER', val: '88% RAIN SUN', pts: 'STORM ALERT' },
  { sym: 'WCC', val: 'MERCEDES', pts: '135 pts' },
  { sym: 'SPRINT QF', val: 'TONIGHT', pts: 'ORDER REVEALED' },
  { sym: 'RB22 UPG', val: 'NEAR UNRECOG', pts: 'MIAMI HOPE' },
  { sym: 'MCL40', val: 'MAJOR UPGRADE', pts: 'CLOSING THE GAP' },
];

export const statsRibbon = [
  { label: 'FP1 Fastest · Miami', big: 'LEC', bigEm: 'P1', sub: 'Ferrari leads the field · 1:29.310' },
  { label: 'Weather · Sunday', big: '', bigEm: '88%', bigTail: 'Rain', sub: '53% thunderstorm chance · FIA on alert' },
  { label: '⚡ Verstappen · FP1', big: 'P2', bigEm: '+0.3s', sub: 'Best result of 2026 · RB22 upgraded', isVer: true },
  { label: 'Antonelli · PU Scare', big: 'P5', bigEm: '·', bigTail: 'P1', sub: 'No soft lap · Still WDC leader · 72pts' },
];
