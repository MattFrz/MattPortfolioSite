import { FiArrowUpRight, FiMoon, FiSun } from 'react-icons/fi'
import { profile } from '../content'
import { useTheme } from '../hooks/useTheme'
import { Link } from './Link'

// Shared page furniture: top bar, external links, profile buttons, section
// headings and the footer.

const nav = [
  ['/#work', 'Work'],
  ['/#numbers', 'Measurements'],
  ['/#experience', 'Experience'],
  ['/#about', 'About'],
  ['/#contact', 'Contact'],
]

export function TopBar() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="mark" aria-label="Matt Farzaneh, home"><span aria-hidden="true">MF</span></Link>
        <nav className="topnav" aria-label="Main">
          {nav.map(([href, label]) => <Link key={href} to={href}>{label}</Link>)}
        </nav>
        <div className="topbar-actions">
          <a className="nav-resume" href={profile.resume} download="Matt-Farzaneh-Resume.pdf">Résumé</a>
          <button className="icon-btn" onClick={toggleTheme} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function External({ href, children, label, className = 'ext-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label ? label + ' (opens in a new tab)' : undefined}>
      {children}<FiArrowUpRight aria-hidden="true" className="ext-icon" />
    </a>
  )
}

export function SectionHeading({ id, children, aside }) {
  return (
    <div className="section-head">
      <h2 id={id}>{children}</h2>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <p>Copyright © {new Date().getFullYear()} {profile.name}. Toronto, Ontario.</p>
        <p><a href={'mailto:' + profile.email}>{profile.email}</a></p>
      </div>
    </footer>
  )
}
