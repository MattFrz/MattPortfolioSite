import { useEffect, useRef } from 'react'
import { projects } from './content'
import { useLocation } from './router'
import Home from './components/Home'
import ProjectPage from './components/ProjectPage'
import { Footer, TopBar } from './components/Sheet'

const titles = Object.fromEntries(projects.map((p) => ['/work/' + p.slug, p.name + ' | Matt Farzaneh']))

export default function App() {
  const { path, hash } = useLocation()
  const first = useRef(true)
  const slug = path.startsWith('/work/') ? path.slice(6) : null

  useEffect(() => {
    document.title = titles[path] || (slug ? 'Not found | Matt Farzaneh' : 'Matt Farzaneh | Software Engineer')
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) {
      target.scrollIntoView()
      // Mark where a link landed, so the jump reads as a jump.
      target.classList.remove('just-landed')
      void target.offsetWidth
      target.classList.add('just-landed')
    } else if (!first.current) window.scrollTo(0, 0)
    if (!first.current) (target || document.getElementById('page-title'))?.focus({ preventScroll: true })
    first.current = false
  }, [path, hash, slug])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <TopBar />
      {slug ? <ProjectPage key={slug} slug={slug} /> : <Home />}
      <Footer />
    </>
  )
}
