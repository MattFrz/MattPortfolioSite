import { useEffect, useState } from 'react'

const storageKey = 'matt-theme'
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = (next) => {
      document.documentElement.dataset.theme = next
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#111416' : '#f6f5f1')
      setTheme(next)
    }
    const syncSystem = () => {
      let saved
      try { saved = localStorage.getItem(storageKey) } catch { /* Storage can be unavailable. */ }
      if (saved !== 'light' && saved !== 'dark') apply(media.matches ? 'dark' : 'light')
    }
    const syncStorage = (event) => {
      if (event.key === storageKey || event.key === null) apply(event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', syncSystem)
    window.addEventListener('storage', syncStorage)
    return () => { media.removeEventListener('change', syncSystem); window.removeEventListener('storage', syncStorage) }
  }, [])
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#111416' : '#f6f5f1')
    try { localStorage.setItem(storageKey, next) } catch { /* The current session still works. */ }
    setTheme(next)
  }
  return { theme, toggleTheme }
}
