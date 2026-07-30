import type { NavLink } from '../data/content'

interface TopbarProps {
  navLinks: NavLink[]
  demoLaunched: boolean
  onLaunchDemo: () => void
}

export function Topbar({ navLinks, demoLaunched, onLaunchDemo }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">N</div>
        <div>
          <p className="brand-name">Nova UI</p>
          <p className="brand-tag">sample frontend experience</p>
        </div>
      </div>
      <nav className="nav-links" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="ghost-button"
        type="button"
        onClick={onLaunchDemo}
        aria-pressed={demoLaunched}
      >
        {demoLaunched ? 'Demo running' : 'Launch demo'}
      </button>
    </header>
  )
}
