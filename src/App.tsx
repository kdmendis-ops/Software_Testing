import { useState } from 'react'
import { Topbar } from './components/Topbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Contact } from './components/Contact'
import { navLinks, heroStats, sparklineBars, miniCards, features } from './data/content'
import './App.css'

const BASE_ACTIVE_SESSIONS = 1284

function App() {
  const [demoLaunched, setDemoLaunched] = useState(false)
  const [duplicateCount, setDuplicateCount] = useState(0)

  const activeSessions = BASE_ACTIVE_SESSIONS + duplicateCount * 12 + (demoLaunched ? 50 : 0)

  return (
    <>
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <Topbar
        navLinks={navLinks}
        demoLaunched={demoLaunched}
        onLaunchDemo={() => setDemoLaunched((prev) => !prev)}
      />

      {demoLaunched && (
        <div className="demo-banner" role="status" data-testid="demo-banner">
          Demo mode is live — sample data is streaming in.
        </div>
      )}

      <main className="page-shell">
        <Hero
          stats={heroStats}
          sparklineBars={sparklineBars}
          miniCards={miniCards}
          activeSessions={activeSessions}
          onGetStarted={() => setDemoLaunched(true)}
          onViewComponents={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />

        <Features features={features} />

        <Contact
          duplicateCount={duplicateCount}
          onCustomizeLayout={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
          }}
          onDuplicateSection={() => setDuplicateCount((prev) => prev + 1)}
        />
      </main>
    </>
  )
}

export default App
