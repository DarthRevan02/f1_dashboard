import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import RaceHero from './components/RaceHero';
import VerSpotlight from './components/VerSpotlight';
import Calendar from './components/Calendar';
import Drivers from './components/Drivers';
import Constructors from './components/Constructors';
import Paddock from './components/Paddock';
import StatsRibbon from './components/StatsRibbon';
import Footer from './components/Footer';

import {
  currentRace,
  verstappenSpotlight,
  calendar,
  seasonProgressPct,
  drivers,
  constructors,
  fp1Podium,
  news,
  statsRibbon,
  roundsCompleted,
  paddockMeta,
} from './data/f1Data';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Ticker />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <Hero />
      <RaceHero race={currentRace} />
      <VerSpotlight spotlight={verstappenSpotlight} />
      <Calendar rounds={calendar} progressPct={seasonProgressPct} />

      <section className="main-section">
        <div className="main-grid">
          <Drivers drivers={drivers} roundsCompleted={roundsCompleted} />
          <Constructors teams={constructors} roundsCompleted={roundsCompleted} />
          <Paddock
            podium={fp1Podium}
            news={news}
            sessionLine={paddockMeta.sessionLine}
            podiumHead={paddockMeta.podiumHead}
          />
        </div>
      </section>

      <StatsRibbon stats={statsRibbon} />
      <Footer />
    </>
  );
}
