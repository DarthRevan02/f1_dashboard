import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pitwall-theme';

/**
 * Persists light/dark preference to localStorage and returns
 * [theme, toggleTheme]. Applies `data-theme="dark"` to <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return [theme, toggleTheme];
}
