import { useEffect, useRef, useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { traceServices } from '../content'
import { useInView, usePageVisible, useReducedMotion } from '../hooks/useMotion'

const TOTAL = 1000 // trace length in trace-ms
const PLAY_MS = 7000 // wall-clock time to play one trace
const HOLD_MS = 2200 // pause on the finished trace before the next one

// One CSS custom property (--t) drives every bar, event and label, so a frame
// costs a single style write.
export default function LiveTrace({ traces, compact = false, label = 'Illustrative job trace' }) {
  const reduced = useReducedMotion()
  const pageVisible = usePageVisible()
  const [viewRef, inView] = useInView({ threshold: 0.15 })
  const [paused, setPaused] = useState(false)
  const [index, setIndex] = useState(0)
  const box = useRef(null)
  const clock = useRef(0)
  const running = !reduced && !paused && inView && pageVisible

  useEffect(() => {
    const el = box.current
    if (!el) return
    if (reduced) { el.style.setProperty('--t', TOTAL); return }
    el.style.setProperty('--t', Math.min(clock.current, TOTAL))
    if (!running) return
    let raf
    let last = performance.now()
    const frame = (now) => {
      clock.current += ((now - last) / PLAY_MS) * TOTAL
      last = now
      if (clock.current > TOTAL + (HOLD_MS / PLAY_MS) * TOTAL) {
        clock.current = 0
        setIndex((i) => (i + 1) % traces.length)
      }
      el.style.setProperty('--t', Math.min(clock.current, TOTAL).toFixed(1))
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [running, reduced, traces.length, index])

  const trace = traces[index]
  const end = Math.max(...trace.spans.map((s) => s.end))

  return (
    <section className={'trace' + (compact ? ' trace-compact' : '')} ref={viewRef} aria-label={label}>
      <div className="trace-head">
        <div className="trace-id">
          <span className={'live-dot' + (running ? ' is-live' : '')} aria-hidden="true" />
          <span className="trace-title">{trace.title}</span>
          <span className="trace-meta">trace {trace.id} · {trace.note}</span>
          <span className="trace-tag">Illustrative replay · not live telemetry</span>
        </div>
        <div className="trace-controls">
          <span className="trace-switch" role="group" aria-label="Choose trace">
            {traces.map((t, i) => (
              <button key={t.id} className={i === index ? 'is-current' : ''} aria-pressed={i === index}
                onClick={() => { clock.current = 0; setIndex(i) }}>{i + 1}</button>
            ))}
          </span>
          {!reduced && (
            <button className="trace-pause" onClick={() => setPaused((p) => !p)} aria-pressed={paused}
              aria-label={paused ? 'Play trace replay' : 'Pause trace replay'}>
              {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>

      <div className="trace-body" ref={box} key={trace.id} style={{ '--end': end }}>
        <div className="trace-axis" aria-hidden="true">
          <span className="axis-label">span</span>
          <span className="axis-ticks">{[0, 250, 500, 750, 1000].map((v) => <span key={v} style={{ '--at': v }}>{v} ms</span>)}</span>
          <span className="axis-dur">dur</span>
        </div>
        <ol className="spans">
          {trace.spans.map((s) => (
            <li key={s.name} className="span-row" data-svc={s.svc} data-status={s.status || 'ok'}
              style={{ '--s': s.start, '--e': s.end, '--depth': s.depth }}>
              <span className="span-label">
                <span className="svc">{traceServices[s.svc]}</span>
                <span className="span-name">{s.name}</span>
              </span>
              <span className="span-track">
                <span className="span-bar" />
                {s.events?.map((ev, k) => (
                  <span key={ev.label + ev.t} className="span-event" data-tone={ev.tone || 'neutral'} data-side={ev.t > 760 ? 'left' : 'right'} style={{ '--et': ev.t }}>
                    {(k === 0 || s.events[k - 1].label !== ev.label) && <span className="event-label">{ev.label}</span>}
                  </span>
                ))}
              </span>
              <span className="span-dur">{s.status === 'stalled' ? 'stalled' : s.status === 'error' ? '409' : (s.end - s.start) + ' ms'}</span>
            </li>
          ))}
        </ol>
        <span className="trace-cursor" aria-hidden="true" />
        <div className="trace-foot">
          <span className="trace-outcome" data-tone={trace.outcome.tone}>{trace.outcome.label}</span>
          <span className="trace-legend" aria-hidden="true">
            {Object.entries(traceServices).map(([k, v]) => <span key={k} data-svc={k}>{v}</span>)}
          </span>
        </div>
      </div>
      <p className="trace-caption">Replay of Urbanova’s job protocol, which I built. Timings and job numbers are illustrative; the sequence, lease renewals and revision checks are how the real system behaves.</p>
    </section>
  )
}
