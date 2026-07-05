import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function CircuitCard({ round, details, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock background scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!round) return null;

  const stats = details
    ? [
        { label: 'Circuit Length', value: details.circuitLength },
        { label: 'Race Distance', value: details.raceDistance },
        { label: 'Number of Laps', value: details.laps },
        {
          label: 'Lap Record',
          value: details.lapRecord.time,
          sub: `${details.lapRecord.holder} (${details.lapRecord.year})`,
        },
        { label: 'Defending Champion', value: details.defendingChampion },
      ]
    : [];

  return createPortal(
    <div className="circuit-modal-backdrop" onClick={onClose}>
      <div className="circuit-modal" onClick={(e) => e.stopPropagation()}>
        <button className="circuit-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="circuit-modal-head">
          <span className="circuit-modal-flag">{round.flag}</span>
          <div>
            <div className="circuit-modal-country">{round.country}</div>
            <div className="circuit-modal-name">{round.name}</div>
          </div>
        </div>

        {details ? (
          <>
            <div className="circuit-stats-grid">
              {stats.map((s) => (
                <div className="circuit-stat" key={s.label}>
                  <div className="circuit-stat-label">{s.label}</div>
                  <div className="circuit-stat-value">{s.value}</div>
                  {s.sub && <div className="circuit-stat-sub">{s.sub}</div>}
                </div>
              ))}
            </div>

            {details.mapImage && (
              <div className="circuit-map-block">
                <div className="circuit-map-label">Track Layout</div>
                <div className="circuit-map">
                  <img src={details.mapImage} alt={`${round.name} circuit layout`} />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="circuit-modal-empty">Circuit data coming soon.</div>
        )}
      </div>
    </div>,
    document.body
  );
}
