export default function Paddock({ podium, news, sessionLine, podiumHead }) {
  return (
    <div className="col">
      <div className="col-head">
        <div className="col-num">§ 03</div>
        <div className="col-name">Paddock <em>Intel</em></div>
        <div className="col-sub">{sessionLine}</div>
      </div>

      <div className="podium-block">
        <div className="podium-head">{podiumHead}</div>
        <div className="podium-list">
          {podium.map((p) => (
            <div className={`pod-row ${p.pos.toLowerCase()}`} key={p.pos}>
              <div className="pod-badge">{p.pos}</div>
              <div>
                <div className="pod-driver-name">{p.name}</div>
                <div className="pod-driver-team">{p.team}</div>
              </div>
              <div className="pod-time">{p.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="news-block">
        {news.map((n) => (
          <article
            className={`news-item${n.lead ? ' lead' : ''}${n.tone !== 'default' ? ` ${n.tone}` : ''}`}
            key={n.num}
          >
            <div className="news-meta">
              <span className="news-kicker">{n.kicker}</span>
              <span className="news-num">{n.num}</span>
            </div>
            <h3 className="news-headline">{n.headline}</h3>
            <p className="news-body">{n.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
