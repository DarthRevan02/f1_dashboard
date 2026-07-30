import { useCountdown } from '../hooks/useCountdown';

export default function RaceHero({ race }) {
  const cd = useCountdown(race.lightsOutISO);

  return (
    <section className="race-hero">
      <div className="race-block">
        <div className="race-grid">
          <div className="race-left">
            <div className="race-meta-row">
              <span className="race-round">◆ Round {String(race.round).padStart(2, '0')} · {race.status}{race.live ? ' 🔴' : ''}</span>
              <span className="race-flag-big">{race.flag}</span>
            </div>
            <h2 className="race-name">{race.name} <em>{race.nameEm}</em></h2>
            <div className="race-circuit"><strong>{race.circuit}</strong> · {race.venue}</div>
            <div className="race-circuit">
              Round {race.round} of {race.totalRounds} · {race.laps} laps · {race.distanceKm} km · {race.format}
            </div>
            <div className="race-stats">
              <div className="race-stat">
                <div className="race-stat-label">{race.fp1.label || 'Session Fastest'}</div>
                <div className="race-stat-val">{race.fp1.driver}</div>
              </div>
              <div className="race-stat">
                <div className="race-stat-label">{race.fp1.timeLabel || 'Time'}</div>
                <div className="race-stat-val">{race.fp1.time}</div>
              </div>
              <div className="race-stat">
                <div className="race-stat-label">Race Day</div>
                <div className="race-stat-val">{race.raceDateLabel}</div>
              </div>
            </div>
          </div>

          <div className="race-right">
            <div className="countdown-label">Lights Out In</div>
            <div className={`countdown stage-${cd.stage}`}>
              <div className="cd-cell"><div className="cd-num">{cd.d}</div><div className="cd-label">Days</div></div>
              <div className="cd-cell"><div className="cd-num">{cd.h}</div><div className="cd-label">Hours</div></div>
              <div className="cd-cell"><div className="cd-num">{cd.m}</div><div className="cd-label">Mins</div></div>
              <div className="cd-cell"><div className="cd-num">{cd.s}</div><div className="cd-label">Secs</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
