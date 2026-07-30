import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

function diffToParts(diffMs) {
  if (diffMs <= 0) return { d: '00', h: '00', m: '00', s: '00' };
  return {
    d: pad(Math.floor(diffMs / 86400000)),
    h: pad(Math.floor((diffMs % 86400000) / 3600000)),
    m: pad(Math.floor((diffMs % 3600000) / 60000)),
    s: pad(Math.floor((diffMs % 60000) / 1000)),
  };
}

// Lights-out (targetISO) always falls on the Sunday of a race weekend, with
// Practice 1 starting the Friday before (2 days out) and Qualifying/Sprint
// running Saturday. Stage is derived purely from days-remaining so it needs
// no extra per-race config:
//   purple — race day itself (days <= 0, i.e. at/after lights-out)
//   green  — Fri/Sat of the race weekend (0 < days <= 2)
//   yellow — the lead-up window before the weekend starts (2 < days <= 4)
//   red    — everything further out than that (days > 4)
function diffToStage(diffMs) {
  const days = diffMs / 86400000;
  if (days <= 0) return 'purple';
  if (days <= 2) return 'green';
  if (days <= 4) return 'yellow';
  return 'red';
}

/**
 * Ticks down to `targetISO` once a second.
 * Replaces the original vanilla-JS setInterval countdown.
 * Also returns `stage` (green/purple/yellow/red) describing where the
 * countdown sits relative to the race weekend, for styling the display.
 */
export function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime();
  const [state, setState] = useState(() => {
    const diff = target - Date.now();
    return { ...diffToParts(diff), stage: diffToStage(diff) };
  });

  useEffect(() => {
    const id = setInterval(() => {
      const diff = target - Date.now();
      setState({ ...diffToParts(diff), stage: diffToStage(diff) });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return state;
}
