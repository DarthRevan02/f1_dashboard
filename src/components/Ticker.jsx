import { tickerItems } from '../data/f1Data';

function TickerItem({ item }) {
  return (
    <>
      <span className="tick">
        <span className="sym">{item.sym}</span> <span className="val">{item.val}</span>{' '}
        <span className="pts">{item.pts}</span>
      </span>
      <span className="tick tick-dot">◆</span>
    </>
  );
}

export default function Ticker() {
  // Duplicate the list so the CSS marquee animation (translateX -50%) loops seamlessly.
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {tickerItems.map((item, i) => (
          <TickerItem key={`a-${i}`} item={item} />
        ))}
        {tickerItems.map((item, i) => (
          <TickerItem key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
