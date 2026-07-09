import { useMemo } from 'react';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// A race weekend typically opens with FP1 ~3 days before lights out (Fri-Sun,
// or Thu-Sun for street circuits) and wraps up a few hours after the race.
const WEEKEND_LEAD_DAYS = 3;
const WEEKEND_TAIL_HOURS = 3;

function isRaceWeekend(lightsOutISO) {
  const raceTime = new Date(lightsOutISO).getTime();
  const now = Date.now();
  const start = raceTime - WEEKEND_LEAD_DAYS * 86400000;
  const end = raceTime + WEEKEND_TAIL_HOURS * 3600000;
  return now >= start && now <= end;
}

export default function Hero({ race }) {
  const { greeting, dateline } = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const g = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    const dl = `${DAYS[now.getDay()]} · ${String(now.getDate()).padStart(2, '0')} ${MONTHS[now.getMonth()]} · ${now.getFullYear()}`;
    return { greeting: g, dateline: dl };
  }, []);

  const liveWeekend = useMemo(() => isRaceWeekend(race.lightsOutISO), [race.lightsOutISO]);

  return (
    <section className="hero">
      <span className="speed-line"></span>
      <span className="speed-line"></span>
      <span className="speed-line"></span>

      <div className="hero-top">
        <div className="brand-eyebrow">
          <span className="rb-bull">🐂</span>
          <span>Personal Edition · F1 2026</span>
        </div>
        <div className="brand-right">
          <div className="greeting">{greeting}</div>
          <div className="dateline">{dateline}</div>
        </div>
      </div>

      <div className="title-wrap">
        <h1 className="hero-title">
          <span className="line1"><span>Apex</span></span>
          <span className="line2"><span>Briefing.</span></span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="hero-sub">
        {liveWeekend && <span className="live-badge">Live Weekend</span>}
        <span className="hero-nav">Drivers · Constructors · Paddock · Calendar</span>
      </div>
    </section>
  );
}
