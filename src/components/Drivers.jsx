export default function Drivers({ drivers }) {
  return (
    <div className="col">
      <div className="col-head">
        <div className="col-num">§ 01</div>
        <div className="col-name">Drivers' <em>Championship</em></div>
        <div className="col-sub">Top {drivers.length} · After 3 Rounds</div>
      </div>

      {drivers.map((d, i) => (
        <div
          key={d.code}
          className={`driver-row${d.leader ? ' leader' : ''}${d.favDriver ? ' fav-driver' : ''}`}
          style={{ '--team-color': d.codeColor, animationDelay: `${4.5 + i * 0.08}s` }}
        >
          <div className="driver-pos">{String(d.pos).padStart(2, '0')}</div>
          <div className="driver-info">
            <div className="driver-line">
              <span className="driver-name">{d.name}</span>
              <span
                className="driver-code"
                style={{ background: d.codeColor, color: d.codeText || '#fff' }}
              >
                {d.code}
              </span>
            </div>
            <div className="driver-team">
              {d.team} · {d.nat}
              {d.gap !== null && <> · <span className="gap">{d.gap}</span></>}
            </div>
          </div>
          <div className="driver-pts-wrap">
            <div className="driver-pts">{d.pts}</div>
            <div className="driver-pts-sub">pts</div>
          </div>
        </div>
      ))}
    </div>
  );
}
