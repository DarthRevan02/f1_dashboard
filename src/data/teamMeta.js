// Maps live standings data (from the Jolpica-F1 API) onto the dashboard's
// existing visual language (team color vars, engine labels, nation codes).
// Matched by substring on the constructor/nationality name rather than by
// API id, since those ids aren't guaranteed stable across seasons/rebrands.

const TEAM_META = [
  { match: 'mercedes', colorVar: '--mercedes', codeText: '#000', engine: 'Mercedes PU' },
  { match: 'ferrari', colorVar: '--ferrari', engine: 'Ferrari PU' },
  { match: 'mclaren', colorVar: '--mclaren', engine: 'Mercedes PU' },
  { match: 'red bull', colorVar: '--redbull', engine: 'Red Bull Ford' },
  { match: 'williams', colorVar: '--williams', codeText: '#000', engine: 'Mercedes PU' },
  { match: 'haas', colorVar: '--haas', codeText: '#000', engine: 'Ferrari PU' },
  { match: 'alpine', colorVar: '--alpine', engine: 'Mercedes PU' },
  { match: 'audi', colorVar: '--audi', engine: 'Audi PU' },
  { match: 'sauber', colorVar: '--audi', engine: 'Audi PU' }, // 2026 rebrand overlap
  { match: 'rb ', colorVar: '--racingbulls', engine: 'Red Bull Ford' },
  { match: 'racing bulls', colorVar: '--racingbulls', engine: 'Red Bull Ford' },
  { match: 'aston martin', colorVar: '--aston', engine: 'Honda PU' },
  { match: 'cadillac', colorVar: '--cadillac', codeText: '#000', engine: 'Ferrari PU' },
];

const FALLBACK_META = { colorVar: '--haas', codeText: '#000', engine: '' };

export function getTeamMeta(constructorName = '') {
  const lower = constructorName.toLowerCase();
  const hit = TEAM_META.find((t) => lower.includes(t.match));
  return hit || FALLBACK_META;
}

// Ergast/Jolpica returns demonyms ("British", "Dutch") rather than ISO codes.
const NATIONALITY_TO_CODE = {
  British: 'GBR', Dutch: 'NED', Italian: 'ITA', Monegasque: 'MON',
  French: 'FRA', Australian: 'AUS', German: 'GER', Spanish: 'ESP',
  Finnish: 'FIN', Canadian: 'CAN', Mexican: 'MEX', Japanese: 'JPN',
  Thai: 'THA', Danish: 'DEN', American: 'USA', Brazilian: 'BRA',
  Chinese: 'CHN', 'New Zealander': 'NZL', Argentine: 'ARG', Austrian: 'AUT',
  Swiss: 'SUI', Belgian: 'BEL', Polish: 'POL', Swedish: 'SWE',
  Indian: 'IND', 'South African': 'RSA',
};

export function getNationCode(nationality = '') {
  return NATIONALITY_TO_CODE[nationality] || nationality.slice(0, 3).toUpperCase();
}
