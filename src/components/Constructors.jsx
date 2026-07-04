export default function Constructors({ teams }) {
  return (
    <div className="col">
      <div className="col-head">
        <div className="col-num">§ 02</div>
        <div className="col-name">Constructors' <em>Cup</em></div>
        <div className="col-sub">All {teams.length} teams · 2026</div>
      </div>

      {teams.map((t, i) => (
        <div
          key={t.name}
          className={`con-row${t.favTeam ? ' fav-team' : ''}`}
          style={{ '--team-color': `var(${t.teamVar})`, animationDelay: `${4.5 + i * 0.08}s` }}
        >
          <div className="con-top">
            <div className="con-pos">{String(t.pos).padStart(2, '0')}</div>
            <div>
              <div className="con-name">{t.name}</div>
              <div className="con-engine">{t.engine}</div>
            </div>
            <div className="con-pts">{t.pts}</div>
          </div>
          <div className="con-bar">
            <div
              className="con-bar-fill"
              style={{ width: `${t.barPct}%`, animationDelay: `${5.5 + i * 0.05}s` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
