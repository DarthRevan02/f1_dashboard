import { useMemo } from 'react';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default function Hero({ fanName = 'Aadi' }) {
  const { greeting, dateline } = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const g = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    const dl = `${DAYS[now.getDay()]} · ${String(now.getDate()).padStart(2, '0')} ${MONTHS[now.getMonth()]} · ${now.getFullYear()}`;
    return { greeting: `${g}, ${fanName}`, dateline: dl };
  }, [fanName]);

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
          <span className="line1"><span>{fanName}'s</span></span>
          <span className="line2"><span>Pit Wall.</span></span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="hero-sub">
        <span className="live-badge">Live Weekend</span>
        <span>Drivers · Constructors · Paddock · Calendar</span>
      </div>
    </section>
  );
}
