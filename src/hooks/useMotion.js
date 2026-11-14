import { useEffect, useRef, useState } from 'react'

const query = '(prefers-reduced-motion: reduce)'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])
  return reduced
}

// Tracks whether an element is on screen.
export function useInView({ threshold = 0.25 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

export function usePageVisible() {
  const [visible, setVisible] = useState(() => !document.hidden)
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])
  return visible
}

// Content is visible by default. Only when motion is allowed and the element
// starts off screen does it get the "armed" state, then plays once on entry.
export function useEntrance(threshold = 0.2) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const [state, setState] = useState('')
  useEffect(() => {
    const el = ref.current
    if (reduced || !el) return
    let first = true
    const io = new IntersectionObserver(([entry]) => {
      if (first) {
        first = false
        if (entry.isIntersecting) io.disconnect()
        else setState(' motion-armed')
        return
      }
      if (entry.isIntersecting) { setState(' motion-in'); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [reduced, threshold])
  return [ref, state]
}
