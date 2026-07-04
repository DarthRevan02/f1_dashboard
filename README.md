# Aadi's Pit Wall 🏎️

A personal F1 2026 season dashboard — live-race hero, lights-out countdown, season calendar,
Drivers'/Constructors' standings, and a paddock news feed, themed around Red Bull and built for
a Verstappen fan. Originally a single static HTML page, rebuilt here as a proper React + Vite project.

## Stack

- **React 18** + **Vite** — fast dev server, instant HMR
- Plain CSS (no framework) — all styling lives in `src/App.css`, ported 1:1 from the original design
- No external UI libraries — the whole thing is hand-rolled components + CSS animations

## Project structure

```
aadis-pitwall/
├── index.html                # HTML shell + Google Fonts (Playfair Display, Inter, JetBrains Mono)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Composes all sections
│   ├── App.css                # All styling (design tokens, layout, animations)
│   ├── data/
│   │   └── f1Data.js          # ⭐ All editable content: race weekend, standings, calendar, news
│   ├── hooks/
│   │   ├── useCountdown.js    # "Lights Out In" countdown ticker
│   │   └── useTheme.js        # Light/dark mode, persisted to localStorage
│   └── components/
│       ├── Ticker.jsx         # Scrolling headline marquee
│       ├── ThemeToggle.jsx    # Floating dark-mode button
│       ├── Hero.jsx           # Page title + live greeting/date
│       ├── RaceHero.jsx       # Current race weekend block + countdown
│       ├── VerSpotlight.jsx   # Favourite-driver spotlight card
│       ├── Calendar.jsx       # Scrollable 23-round season strip (auto-scrolls to next race)
│       ├── Drivers.jsx        # Drivers' Championship standings
│       ├── Constructors.jsx   # Constructors' Cup standings
│       ├── Paddock.jsx        # FP1 podium + news articles
│       ├── StatsRibbon.jsx    # Bottom stat cards
│       └── Footer.jsx
└── public/
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Updating race-weekend data

Everything you'd want to change on a normal race weekend — the current race, countdown target,
standings, calendar results, FP1 podium, and news articles — lives in one file:

```
src/data/f1Data.js
```

No JSX editing required for routine updates. A few pointers:

- `currentRace.lightsOutISO` — ISO timestamp the countdown ticks down to (in UTC)
- `calendar[].status` — one of `"done"`, `"next"`, or `"upcoming"` (controls styling + the auto-scroll target)
- `drivers[].favDriver` / `constructors[].favTeam` — highlights the row you're rooting for
- `fanDriver` — the driver code your countdown/spotlight card is centred on

## Notes on the rebuild

- The original page manipulated the DOM directly with vanilla JS (`setInterval` for the countdown,
  `localStorage` for theme, manual ticker string-building). These are now `useEffect`/`useState`-based
  hooks (`useCountdown`, `useTheme`) instead — same behavior, React-idiomatic.
- All hardcoded race content was extracted into `src/data/f1Data.js` so the season can be updated
  without touching any component code.
- Dark mode still persists across visits via `localStorage`, applied as `data-theme="dark"` on
  `<html>`, matching the original CSS variable-swap approach.
