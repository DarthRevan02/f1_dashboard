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

/**
 * Ticks down to `targetISO` once a second.
 * Replaces the original vanilla-JS setInterval countdown.
 */
export function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime();
  const [parts, setParts] = useState(() => diffToParts(target - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setParts(diffToParts(target - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return parts;
}
