export default function Footer({ fanName = 'Aadi' }) {
  return (
    <div className="footer-wrap">
      <footer className="footer">
        <div className="f-note">
          For {fanName} · eyes only<span className="f-dot"></span>Max P2 in FP1 — the hunt is on! 🐂
        </div>
        <div className="f-brand">The <em>Pit Wall</em></div>
      </footer>
    </div>
  );
}
