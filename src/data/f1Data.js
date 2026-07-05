// All editable season content lives here.
// Update points, results, and news each race weekend — no JSX to touch.

export const fanDriver = 'VER'; // code of the driver this dashboard follows

export const roundsCompleted = 8; // rounds fully finished before the current weekend

export const currentRace = {
  round: 9,
  totalRounds: 22,
  status: 'Live Weekend',
  flag: '🇬🇧',
  name: 'British',
  nameEm: 'Grand Prix',
  circuit: 'Silverstone Circuit',
  venue: 'Silverstone, Northamptonshire',
  laps: 52,
  distanceKm: 306.198,
  format: 'Sprint Format',
  raceDateLabel: 'Jul 5 · Sun',
  // ISO timestamp used for the lights-out countdown (15:00 BST / 14:00 UTC)
  lightsOutISO: '2026-07-05T14:00:00Z',
  fp1: { driver: 'K. Antonelli', time: 'Sprint Winner', label: 'Sprint Winner', timeLabel: 'Sprint Gap to P2' },
};

export const verstappenSpotlight = {
  number: '07',
  eyebrow: '⚡ Favourite Driver · Oracle Red Bull Racing',
  name: 'Max',
  nameEm: 'Verstappen',
  meta: 'NED · 4× World Champion · #33 · RB22',
  stats: [
    { label: 'Sprint · Silverstone', value: 'P5' },
    { label: 'Championship', value: 'P7 · 76pts' },
    { label: 'Gap to P1', value: '−103', highlight: true },
  ],
};

export const seasonProgressPct = Math.round((8.5 / 22) * 100 * 10) / 10;

export const calendar = [
  { round: 'R01', status: 'done', flag: '🇦🇺', country: 'Australia', name: 'Albert Park', date: 'Mar 06–08', winner: 'G. Russell' },
  { round: 'R02', status: 'done', flag: '🇨🇳', country: 'China', name: 'Shanghai', date: 'Mar 13–15', winner: 'K. Antonelli' },
  { round: 'R03', status: 'done', flag: '🇯🇵', country: 'Japan', name: 'Suzuka', date: 'Mar 27–29', winner: 'K. Antonelli' },
  { round: 'R04', status: 'done', flag: '🇺🇸', country: 'USA', name: 'Miami', date: 'May 01–03', winner: 'K. Antonelli' },
  { round: 'R05', status: 'done', flag: '🇨🇦', country: 'Canada', name: 'Montreal', date: 'May 22–24', winner: 'K. Antonelli' },
  { round: 'R06', status: 'done', flag: '🇲🇨', country: 'Monaco', name: 'Monte Carlo', date: 'Jun 04–07', winner: 'K. Antonelli' },
  { round: 'R07', status: 'done', flag: '🇪🇸', country: 'Spain', name: 'Barcelona', date: 'Jun 11–14', winner: 'L. Hamilton' },
  { round: 'R08', status: 'done', flag: '🇦🇹', country: 'Austria', name: 'Red Bull Ring', date: 'Jun 25–28', winner: 'G. Russell' },
  { round: 'R09 · LIVE 🔴', status: 'next', flag: '🇬🇧', country: 'UK', name: 'Silverstone', date: 'Jul 02–05' },
  { round: 'R10', status: 'upcoming', flag: '🇧🇪', country: 'Belgium', name: 'Spa', date: 'Jul 16–19' },
  { round: 'R11', status: 'upcoming', flag: '🇭🇺', country: 'Hungary', name: 'Hungaroring', date: 'Jul 23–26' },
  { round: 'R12', status: 'upcoming', flag: '🇳🇱', country: 'Netherlands', name: 'Zandvoort', date: 'Aug 20–23' },
  { round: 'R13', status: 'upcoming', flag: '🇮🇹', country: 'Italy', name: 'Monza', date: 'Sep 03–06' },
  { round: 'R14', status: 'upcoming', flag: '🇪🇸', country: 'Spain', name: 'Madrid', date: 'Sep 10–13' },
  { round: 'R15', status: 'upcoming', flag: '🇦🇿', country: 'Azerbaijan', name: 'Baku', date: 'Sep 23–26' },
  { round: 'R16', status: 'upcoming', flag: '🇸🇬', country: 'Singapore', name: 'Marina Bay', date: 'Oct 09–11' },
  { round: 'R17', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Austin', date: 'Oct 23–25' },
  { round: 'R18', status: 'upcoming', flag: '🇲🇽', country: 'Mexico', name: 'Mexico City', date: 'Oct 30–Nov 1' },
  { round: 'R19', status: 'upcoming', flag: '🇧🇷', country: 'Brazil', name: 'São Paulo', date: 'Nov 06–08' },
  { round: 'R20', status: 'upcoming', flag: '🇺🇸', country: 'USA', name: 'Las Vegas', date: 'Nov 19–21' },
  { round: 'R21', status: 'upcoming', flag: '🇶🇦', country: 'Qatar', name: 'Lusail', date: 'Nov 27–29' },
  { round: 'R22', status: 'upcoming', flag: '🇦🇪', country: 'UAE', name: 'Yas Marina', date: 'Dec 04–06' },
];

// Drivers' Championship — after the Silverstone Sprint (Sat 4 Jul 2026)
export const drivers = [
  { pos: 1, name: 'K. Antonelli', code: 'ANT', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'ITA', gap: null, pts: 179, leader: true },
  { pos: 2, name: 'G. Russell', code: 'RUS', team: 'Mercedes', codeColor: 'var(--mercedes)', codeText: '#000', nat: 'GBR', gap: -43, pts: 136 },
  { pos: 3, name: 'L. Hamilton', code: 'HAM', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'GBR', gap: -47, pts: 132 },
  { pos: 4, name: 'L. Norris', code: 'NOR', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'GBR', gap: -94, pts: 85 },
  { pos: 5, name: 'C. Leclerc', code: 'LEC', team: 'Ferrari', codeColor: 'var(--ferrari)', nat: 'MON', gap: -96, pts: 83 },
  { pos: 6, name: 'O. Piastri', code: 'PIA', team: 'McLaren', codeColor: 'var(--mclaren)', nat: 'AUS', gap: -97, pts: 82 },
  { pos: 7, name: 'M. Verstappen', code: 'VER', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'NED', gap: -103, pts: 76, favDriver: true },
  { pos: 8, name: 'I. Hadjar', code: 'HAD', team: 'Red Bull', codeColor: 'var(--redbull)', nat: 'FRA', gap: -137, pts: 42 },
  { pos: 9, name: 'P. Gasly', code: 'GAS', team: 'Alpine', codeColor: 'var(--alpine)', nat: 'FRA', gap: -138, pts: 41 },
  { pos: 10, name: 'L. Lawson', code: 'LAW', team: 'Racing Bulls', codeColor: 'var(--racingbulls)', nat: 'NZL', gap: -148, pts: 31 },
];

// Constructors' Cup — after the Silverstone Sprint
export const constructors = [
  { pos: 1, name: 'Mercedes-AMG', engine: 'Mercedes PU · DEU', teamVar: '--mercedes', pts: 315, barPct: 100 },
  { pos: 2, name: 'Scuderia Ferrari', engine: 'Ferrari PU · ITA', teamVar: '--ferrari', pts: 215, barPct: 68 },
  { pos: 3, name: 'McLaren', engine: 'Mercedes PU · GBR', teamVar: '--mclaren', pts: 167, barPct: 53 },
  { pos: 4, name: 'Red Bull Racing ⚡', engine: 'Red Bull Ford · AUT', teamVar: '--redbull', pts: 118, barPct: 37, favTeam: true },
  { pos: 5, name: 'Alpine', engine: 'Mercedes PU · FRA', teamVar: '--alpine', pts: 57, barPct: 18 },
  { pos: 6, name: 'Racing Bulls', engine: 'Red Bull Ford · ITA', teamVar: '--racingbulls', pts: 45, barPct: 14 },
  { pos: 7, name: 'Haas F1', engine: 'Ferrari PU · USA', teamVar: '--haas', pts: 21, barPct: 7 },
  { pos: 8, name: 'Williams', engine: 'Mercedes PU · GBR', teamVar: '--williams', pts: 11, barPct: 3 },
  { pos: 9, name: 'Audi', engine: 'Audi PU · DEU', teamVar: '--audi', pts: 2, barPct: 1 },
  { pos: 10, name: 'Aston Martin', engine: 'Honda PU · GBR', teamVar: '--aston', pts: 1, barPct: 0 },
  { pos: 11, name: 'Cadillac', engine: 'Ferrari PU · USA · NEW', teamVar: '--cadillac', pts: 0, barPct: 0 },
];

export const paddockMeta = {
  sessionLine: 'Silverstone Live · Jul 05, 2026',
  podiumHead: 'British GP Sprint · Top 3 · Sat 4 Jul',
};

// Silverstone Sprint result, Sat 4 July 2026
export const fp1Podium = [
  { pos: 'P1', name: 'Kimi Antonelli', team: 'Mercedes · Winner', time: 'Winner' },
  { pos: 'P2', name: 'Lewis Hamilton', team: 'Ferrari · +2.745s', time: '+2.745' },
  { pos: 'P3', name: 'Lando Norris', team: 'McLaren · +9.783s', time: '+9.783' },
];

export const news = [
  {
    kicker: 'SPRINT · JUL 04',
    num: '01',
    lead: true,
    tone: 'default',
    headline: 'Antonelli hunts down Hamilton to win Silverstone Sprint in front of his home crowd',
    body: 'Lewis Hamilton led the opening laps from pole and had home fans dreaming, but championship leader Kimi Antonelli passed him at half-distance and pulled away to win by 2.7 seconds. Lando Norris took a comfortable third after a frantic multi-car scrap in the early laps involving Russell, Piastri, Verstappen and Leclerc. Antonelli now leads Russell by 43 points and Hamilton by 47 heading into Sunday\u2019s Grand Prix.',
  },
  {
    kicker: '⚡ Red Bull Watch',
    num: '02',
    tone: 'neutral',
    headline: 'Verstappen stuck in P5 at the Sprint as Red Bull\u2019s summer-break exit clause looms',
    body: 'Max finished fifth in the Sprint, three seconds off the podium places, and sits seventh in the championship — the position widely reported to trigger a clause letting him leave Red Bull if he\u2019s outside the top two by the summer break. With McLaren\u2019s Zak Brown already fielding questions about a possible Verstappen signing, speculation over his 2027 seat is intensifying just as the team looks for a response at his home-away-from-home circuit.',
  },
  {
    kicker: '⚠ Stewards\u2019 Inquiry',
    num: '03',
    tone: 'alert',
    headline: 'Lawson\u2019s late Sprint overtake under investigation — Hadjar could inherit the point',
    body: 'Liam Lawson\u2019s defensive move on Oscar Piastri for eighth place on the penultimate lap of the Sprint has been referred to the stewards. A points swap would promote Red Bull\u2019s Isack Hadjar into the last scoring position, with a decision expected before Sunday\u2019s Grand Prix grid is finalised.',
  },
  {
    kicker: 'Team Update',
    num: '04',
    tone: 'neutral',
    headline: 'Mercedes\u2019 100-point constructors\u2019 lead grows as McLaren edges closer to Red Bull',
    body: 'The Silver Arrows now lead Ferrari by exactly 100 points in the Constructors\u2019 Championship after Silverstone\u2019s sprint. Behind them, McLaren\u2019s 167 points put real distance between themselves and a struggling Red Bull, who sit fourth on 118 — a reversal from years past that has fuelled the paddock chatter around Verstappen\u2019s future.',
  },
];

export const tickerItems = [
  { sym: 'SPRINT', val: 'ANTONELLI WINS', pts: 'BEATS HAMILTON' },
  { sym: 'WDC', val: 'ANTONELLI 179', pts: '+43 OVER RUSSELL' },
  { sym: 'VER ⚡', val: 'P5 IN SPRINT', pts: 'P7 CHAMPIONSHIP' },
  { sym: 'EXIT CLAUSE', val: 'SUMMER BREAK', pts: 'TOP 2 OR OUT' },
  { sym: 'WCC', val: 'MERCEDES 315', pts: '+100 OVER FERRARI' },
  { sym: 'STEWARDS', val: 'LAWSON UNDER REVIEW', pts: 'HADJAR MAY GAIN' },
  { sym: 'GP TODAY', val: '3PM BST', pts: 'SILVERSTONE' },
  { sym: 'MCLAREN', val: 'BROWN ON VER', pts: '2027 SPECULATION' },
];

export const statsRibbon = [
  { label: 'Sprint Winner · Silverstone', big: 'ANT', bigEm: 'P1', sub: 'Antonelli beats Hamilton by 2.745s' },
  { label: 'Championship Gap', big: '', bigEm: '+43', bigTail: 'pts', sub: 'Antonelli leads Russell after the Sprint' },
  { label: '⚡ Verstappen · Sprint', big: 'P5', bigEm: 'P7 WDC', sub: 'Exit clause looms at summer break', isVer: true },
  { label: 'Constructors\u2019 Gap', big: 'MER', bigEm: '+100', bigTail: 'pts', sub: 'Mercedes lead Ferrari · McLaren P3' },
];
