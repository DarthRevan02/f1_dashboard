import { useEffect, useState } from 'react';
import { getTeamMeta, getNationCode } from '../data/teamMeta';

const DRIVER_STANDINGS_URL = 'https://api.jolpi.ca/ergast/f1/current/driverstandings/.json';
const CONSTRUCTOR_STANDINGS_URL = 'https://api.jolpi.ca/ergast/f1/current/constructorstandings/.json';

// How the driver we're following is identified in the API (3-letter code).
const FAN_DRIVER_CODE = 'VER';

function mapDrivers(list) {
  const leaderPts = Number(list[0]?.points ?? 0);
  return list.map((row) => {
    const constructorName = row.Constructors?.[0]?.name || '';
    const meta = getTeamMeta(constructorName);
    const pts = Number(row.points);
    const pos = Number(row.position);
    return {
      pos,
      name: `${row.Driver.givenName[0]}. ${row.Driver.familyName}`,
      code: row.Driver.code || row.Driver.familyName.slice(0, 3).toUpperCase(),
      team: constructorName,
      codeColor: `var(${meta.colorVar})`,
      codeText: meta.codeText,
      nat: getNationCode(row.Driver.nationality),
      gap: pos === 1 ? null : pts - leaderPts,
      pts,
      leader: pos === 1,
      favDriver: (row.Driver.code || '') === FAN_DRIVER_CODE,
    };
  });
}

function mapConstructors(list) {
  const maxPts = Math.max(...list.map((row) => Number(row.points)), 1);
  return list.map((row) => {
    const meta = getTeamMeta(row.Constructor.name);
    const pts = Number(row.points);
    return {
      pos: Number(row.position),
      name: row.Constructor.name,
      engine: `${meta.engine} · ${getNationCode(row.Constructor.nationality)}`,
      teamVar: meta.colorVar,
      pts,
      barPct: Math.round((pts / maxPts) * 100),
      favTeam: meta.colorVar === '--redbull',
    };
  });
}

/**
 * Fetches live driver + constructor standings from the Jolpica-F1 API
 * (the free, no-auth Ergast successor). Falls back silently to whatever
 * static data the caller already has if the fetch fails, so the dashboard
 * never shows a broken state — just slightly stale numbers.
 */
export function useStandings({ fallbackDrivers, fallbackConstructors }) {
  const [state, setState] = useState({
    drivers: fallbackDrivers,
    constructors: fallbackConstructors,
    status: 'loading', // 'loading' | 'live' | 'error'
    updatedAt: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [driverRes, constructorRes] = await Promise.all([
          fetch(DRIVER_STANDINGS_URL),
          fetch(CONSTRUCTOR_STANDINGS_URL),
        ]);
        if (!driverRes.ok || !constructorRes.ok) throw new Error('Bad response');

        const driverJson = await driverRes.json();
        const constructorJson = await constructorRes.json();

        const driverList =
          driverJson.MRData.StandingsTable.StandingsLists[0]?.DriverStandings;
        const constructorList =
          constructorJson.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;

        if (!driverList || !constructorList) throw new Error('Empty standings');
        if (cancelled) return;

        setState({
          drivers: mapDrivers(driverList),
          constructors: mapConstructors(constructorList),
          status: 'live',
          updatedAt: new Date(),
        });
      } catch (err) {
        if (cancelled) return;
        // Keep showing fallback data — just flag that live fetch didn't work.
        setState((prev) => ({ ...prev, status: 'error' }));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
