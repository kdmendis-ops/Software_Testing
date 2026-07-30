import type { MiniCardItem, StatItem } from '../data/content'

interface HeroProps {
  stats: StatItem[]
  sparklineBars: number[]
  miniCards: MiniCardItem[]
  activeSessions: number
  onGetStarted: () => void
  onViewComponents: () => void
}

export function Hero({
  stats,
  sparklineBars,
  miniCards,
  activeSessions,
  onGetStarted,
  onViewComponents,
}: HeroProps) {
  return (
    <section className="hero card">
      <div className="hero-copy">
        <p className="eyebrow">Design system sample</p>
        <h1>Build a frontend that feels premium from the first glance.</h1>
        <p className="lede">
          A bold, responsive UI with layered depth, crisp spacing, and purposeful motion for a
          polished first impression.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onGetStarted}>
            Get started
          </button>
          <button className="secondary-button" type="button" onClick={onViewComponents}>
            View components
          </button>
        </div>

        <div className="hero-stats" id="analytics">
          {stats.map((stat) => (
            <article key={stat.id} data-testid={`stat-${stat.id}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-panel">
        <div className="device-frame">
          <div className="device-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="dashboard">
            <div className="dashboard-card focus-card">
              <p>Active sessions</p>
              <h2 data-testid="active-sessions">{activeSessions.toLocaleString()}</h2>
              <div className="sparkline">
                {sparklineBars.map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }}></span>
                ))}
              </div>
            </div>

            <div className="dashboard-grid">
              {miniCards.map((mini) => (
                <article
                  key={mini.id}
                  className={`mini-card${mini.variant && mini.variant !== 'default' ? ` ${mini.variant}` : ''}`}
                >
                  <p>{mini.label}</p>
                  <strong>{mini.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
