function ChampionCard({ data, variant }) {
  return (
    <article
      className={`champ-card champ-${variant}`}
      style={{ '--team-color': `var(${data.teamVar})` }}
    >
      <div className="champ-num" aria-hidden="true">{data.number}</div>

      <div className="champ-body">
        <div className="champ-kicker">
          <span className="champ-trophy">🏆</span> {data.kicker}
        </div>
        <div className="champ-name">
          {data.name} <em>{data.nameEm}</em>
          <span className="champ-flag">{data.flag}</span>
        </div>
        <div className="champ-team">{data.team}</div>

        <div className="champ-stats">
          {data.stats.map((s) => (
            <div className="champ-stat" key={s.label}>
              <div className="champ-stat-label">{s.label}</div>
              <div className="champ-stat-val">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="champ-clinched">{data.clinched}</div>
        <p className="champ-note">{data.note}</p>
        <div className="champ-runner">{data.runnerUp}</div>
      </div>
    </article>
  );
}

export default function Champions({ champions }) {
  return (
    <section className="champions">
      <div className="cal-head">
        <div className="cal-title">2026 <em>Champions</em></div>
        <div className="cal-meta">{champions.asOf}</div>
      </div>

      <div className="champ-grid">
        <ChampionCard data={champions.drivers} variant="drivers" />
        <ChampionCard data={champions.constructors} variant="constructors" />
      </div>
    </section>
  );
}
