export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      id="dm-toggle"
      aria-label="Toggle dark mode"
      data-tip={isDark ? 'Light Mode' : 'Dark Mode'}
      onClick={onToggle}
    >
      <span className="icon-moon" style={{ display: isDark ? 'none' : 'inline' }}>🌙</span>
      <span className="icon-sun" style={{ display: isDark ? 'inline' : 'none' }}>☀️</span>
    </button>
  );
}
