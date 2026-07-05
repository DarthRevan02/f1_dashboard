import { useEffect, useRef, useState } from 'react';
import CircuitCard from './CircuitCard';
import { circuitDetails } from '../data/f1Data';

export default function Calendar({ rounds, progressPct }) {
  const stripRef = useRef(null);
  const nextRef = useRef(null);
  const [activeRound, setActiveRound] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (nextRef.current && stripRef.current) {
        stripRef.current.scrollTo({ left: nextRef.current.offsetLeft - 60, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="cal-section">
      <div className="cal-head">
        <div className="cal-title">Season <em>Calendar</em></div>
        <div className="cal-meta">{rounds.length} Rounds · Mar → Dec 2026</div>
      </div>

      <div className="cal-strip-wrap">
        <div className="cal-progress-track">
          <div className="cal-progress-fill" style={{ width: `${progressPct}%` }}></div>
        </div>
        <div className="cal-strip" ref={stripRef}>
          {rounds.map((r) => {
            const isNext = r.status === 'next';
            const isDone = r.status === 'done';
            return (
              <div
                key={r.round}
                ref={isNext ? nextRef : null}
                className={`cal-round${isDone ? ' done' : ''}${isNext ? ' next' : ''}`}
                onClick={() => setActiveRound(r)}
                role="button"
                tabIndex={0}
              >
                <div className="cal-rnum">
                  {r.round}
                  {(isDone || isNext) && <span className="cal-status-dot"></span>}
                </div>
                <div className="cal-flag-emoji">{r.flag}</div>
                <div className="cal-country">{r.country}</div>
                <div className="cal-flag-name">{r.name}</div>
                <div className="cal-date">{r.date}</div>
                {r.winner && <div className="cal-winner">{r.winner}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {activeRound && (
        <CircuitCard
          round={activeRound}
          details={circuitDetails[activeRound.id]}
          onClose={() => setActiveRound(null)}
        />
      )}
    </section>
  );
}
