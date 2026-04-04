import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#hero" className="logo">MF</a>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
      <ul className={open ? 'nav-links open' : 'nav-links'}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar