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

// Tracks whether an element is on screen. With `once`, it latches true.
export function useInView({ threshold = 0.25, once = false } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting && once) io.disconnect()
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])
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

// Writes scroll progress (0 to 1) of an element through the viewport into a
// CSS custom property on that element. `start` and `end` are viewport
// fractions for the element's top edge: progress is 0 when the top is at
// `start` and 1 when it reaches `end`.
export function useScrollProgress({ start = 1, end = 0.5, prop = '--p' } = {}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) { el.style.setProperty(prop, 1); return }
    let raf = 0
    let active = false
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const range = el.dataset.span === 'height' ? r.height - vh : (start - end) * vh
      const travelled = el.dataset.span === 'height' ? -r.top : start * vh - r.top
      const p = Math.min(1, Math.max(0, travelled / Math.max(1, range)))
      el.style.setProperty(prop, p.toFixed(4))
    }
    const onScroll = () => { if (active && !raf) raf = requestAnimationFrame(update) }
    const io = new IntersectionObserver(([e]) => { active = e.isIntersecting; if (active) update() }, { rootMargin: '20% 0px' })
    io.observe(el)
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [reduced, start, end, prop])
  return ref
}

// Counts a number up once when it scrolls into view.
export function useCountUp(value, decimals = 0, duration = 1400) {
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.5, once: true })
  const [shown, setShown] = useState(null)
  useEffect(() => {
    if (reduced || !inView) return
    let raf
    const t0 = performance.now()
    const frame = (now) => {
      const k = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - k, 4)
      setShown(value * eased)
      if (k < 1) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, value, duration])
  const display = (reduced ? value : shown ?? 0).toFixed(decimals)
  return [ref, display]
}
