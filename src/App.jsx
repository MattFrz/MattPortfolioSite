import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer section-shell">
        <a href="#hero" className="text-link">Matt Farzaneh <span aria-hidden="true">↑</span></a>
        <p>Toronto, ON <span aria-hidden="true">/</span> © {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
