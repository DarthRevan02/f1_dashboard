export default function Constructors({ teams, roundsCompleted, status = 'live' }) {
  return (
    <div className="col">
      <div className="col-head">
        <div className="col-num">§ 02</div>
        <div className="col-name">Constructors' <em>Cup</em></div>
        <div className="col-sub">
          All {teams.length} teams · After {roundsCompleted} Rounds
          {status === 'live' && <span className="live-dot" title="Live from Jolpica-F1">● live</span>}
          {status === 'error' && <span className="cached-dot" title="Showing last saved data">cached</span>}
        </div>
      </div>

      {status === 'loading'
        ? Array.from({ length: 6 }).map((_, i) => (
            <div className="con-row skeleton-row" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="con-top">
                <div className="skel skel-pos" />
                <div>
                  <div className="skel skel-line" />
                  <div className="skel skel-line short" />
                </div>
                <div className="skel skel-pts" />
              </div>
              <div className="skel skel-bar" />
            </div>
          ))
        : teams.map((t, i) => (
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
