export default function VerSpotlight({ spotlight }) {
  return (
    <section className="ver-spotlight">
      <div className="ver-card">
        <div className="ver-num">{spotlight.number}</div>
        <div className="ver-info">
          <div className="ver-eyebrow">{spotlight.eyebrow}</div>
          <div className="ver-name">{spotlight.name} <em>{spotlight.nameEm}</em></div>
          <div className="ver-team">{spotlight.meta}</div>
        </div>
        <div className="ver-stats-right">
          {spotlight.stats.map((s) => (
            <div className="ver-stat-item" key={s.label}>
              <div className="ver-stat-label">{s.label}</div>
              <div className={`ver-stat-val${s.highlight ? ' highlight' : ''}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
