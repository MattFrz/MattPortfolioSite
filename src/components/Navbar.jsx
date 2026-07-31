import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-inner">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">MF</span>
          <span className="logo-dot" />
        </a>

        <ul className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={open ? 'hamburger open' : 'hamburger'}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
