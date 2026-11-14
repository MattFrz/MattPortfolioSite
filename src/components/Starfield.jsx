import { useState } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { usePageVisible, useReducedMotion } from '../hooks/useMotion'

// Fixed positions keep the sky consistent across renders and theme changes.
const stars = Array.from({ length: 64 }, (_, i) => ({
  x: (i * 61.8034) % 100,
  y: (i * 37.7137) % 100,
  size: i % 9 === 0 ? 3.5 : i % 3 === 0 ? 2.5 : 1.5,
  duration: 8 + (i % 7),
  drift: 20 + (i % 5) * 9,
  delay: -(i % 11),
}))

// Decorative patterns, rather than a geographically accurate sky map.
const constellations = [
  [[15, 40], [42, 24], [65, 43], [95, 27], [123, 51]],
  [[18, 22], [48, 36], [75, 62], [119, 54], [106, 91], [66, 94], [75, 62]],
  [[22, 78], [46, 45], [74, 56], [99, 22], [122, 48]],
]

export default function Starfield() {
  const visible = usePageVisible()
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const running = visible && !reduced && !paused

  return (
    <div className="starfield">
      <div className="starfield-sky" aria-hidden="true" data-running={running}>
        {constellations.map((points, i) => (
          <svg key={i} className={'constellation constellation-' + i}
            viewBox="0 0 140 120" focusable="false">
            <polyline points={points.map((point) => point.join(',')).join(' ')} />
            {points.map(([x, y], j) => <circle key={j} cx={x} cy={y} r={j % 3 === 0 ? 2.5 : 1.8} />)}
          </svg>
        ))}
        {stars.map((star, i) => (
          <span key={i} className={'star' + (i % 9 === 0 ? ' star-bright' : '')} style={{
            left: star.x + '%', top: star.y + '%',
            '--star-size': star.size + 'px',
            '--star-duration': star.duration + 's',
            '--star-delay': star.delay + 's',
            '--star-drift': star.drift + 'px',
          }} />
        ))}
        <span className="shooting-star" />
        <span className="shooting-star shooting-star-second" />
      </div>
      {!reduced && (
        <button className="starfield-toggle" onClick={() => setPaused(!paused)}
          aria-label={paused ? 'Play star animation' : 'Pause star animation'} aria-pressed={paused}>
          {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
          <span>Stars</span>
        </button>
      )}
    </div>
  )
}
