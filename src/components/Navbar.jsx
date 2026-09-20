import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import './Navbar.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const dialog = useRef(null)
  const trigger = useRef(null)

  useEffect(() => {
    let scheduled = false
    const update = () => {
      scheduled = false
      const current = links.filter(({ id }) => document.getElementById(id)?.getBoundingClientRect().top <= 160).at(-1)
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      setActive(bottom ? 'contact' : current?.id || '')
    }
    const onScroll = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = (event) => { if (event.matches) dialog.current?.close() }
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.body.style.overflow = previousOverflow
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  const closeMenu = () => dialog.current?.close()
  const navigate = (id) => {
    closeMenu()
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }))
  }
  const navLinks = (mobile = false) => links.map(({ id, label }, index) => (
    <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}
      onClick={mobile ? () => navigate(id) : undefined}>
      {mobile && <span className="mono">{String(index + 1).padStart(2, '0')}</span>}{label}
    </a>
  ))

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="logo" aria-label="Matt Farzaneh, home">MF<span className="logo-rule" aria-hidden="true" /><span className="logo-name">Matt Farzaneh</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navLinks()}</nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button ref={trigger} className="icon-button menu-trigger" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation"
            onClick={() => { dialog.current.showModal(); setOpen(true) }}><FiMenu aria-hidden="true" /></button>
        </div>
      </div>
      <dialog ref={dialog} id="mobile-navigation" className="mobile-menu" aria-labelledby="menu-title"
        onClose={() => { setOpen(false); trigger.current?.focus() }}
        onClick={(event) => { if (event.target === dialog.current) closeMenu() }}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-heading"><span className="eyebrow" id="menu-title">Navigation</span><button autoFocus className="icon-button" onClick={closeMenu} aria-label="Close navigation"><FiX aria-hidden="true" /></button></div>
          <nav aria-label="Mobile navigation">{navLinks(true)}</nav>
          <a className="text-link mobile-email" href="mailto:mattfarzaneh21@gmail.com">Get in touch <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </dialog>
    </header>
  )
}
