import { useEffect, useState } from 'react'

// A tiny History API router: two kinds of route, no dependency.
const listeners = new Set()

function readLocation() {
  return { path: window.location.pathname.replace(/\/+$/, '') || '/', hash: window.location.hash }
}

export function navigate(to) {
  const url = new URL(to, window.location.origin)
  const samePage = url.pathname === window.location.pathname
  const update = () => {
    window.history.pushState({}, '', url.pathname + url.hash)
    listeners.forEach((fn) => fn(readLocation()))
  }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!samePage && document.startViewTransition && !reduce) document.startViewTransition(update)
  else update()
}

export function useLocation() {
  const [location, setLocation] = useState(readLocation)
  useEffect(() => {
    const onPop = () => setLocation(readLocation())
    listeners.add(setLocation)
    window.addEventListener('popstate', onPop)
    window.addEventListener('hashchange', onPop)
    return () => { listeners.delete(setLocation); window.removeEventListener('popstate', onPop); window.removeEventListener('hashchange', onPop) }
  }, [])
  return location
}
