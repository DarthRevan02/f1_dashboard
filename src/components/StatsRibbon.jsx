export default function StatsRibbon({ stats }) {
  return (
    <section className="stats-ribbon">
      <div className="stats-grid">
        {stats.map((s) => (
          <div className={`stat${s.isVer ? ' ver-stat' : ''}`} key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-big">
              {s.big} <em>{s.bigEm}</em> {s.bigTail}
            </div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
