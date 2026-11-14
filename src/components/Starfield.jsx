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
const constellationPatterns = [
  [[15, 40], [42, 24], [65, 43], [95, 27], [123, 51]],
  [[18, 22], [48, 36], [75, 62], [119, 54], [106, 91], [66, 94], [75, 62]],
  [[22, 78], [46, 45], [74, 56], [99, 22], [122, 48]],
]


// Uneven spacing and varied silhouettes without changing on every render.
const constellations = [
  { x: 11, y: 19, size: 130, angle: -18, pattern: 0 },
  { x: 48, y: 12, size: 100, angle: 32, pattern: 2 },
  { x: 79, y: 34, size: 155, angle: 14, pattern: 1 },
  { x: 35, y: 55, size: 120, angle: -42, pattern: 1 },
  { x: 63, y: 78, size: 145, angle: 65, pattern: 0 },
  { x: 14, y: 85, size: 95, angle: 24, pattern: 2 },
]

export default function Starfield() {
  const visible = usePageVisible()
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const running = visible && !reduced && !paused

  return (
    <div className="starfield">
      <div className="starfield-sky" aria-hidden="true" data-running={running}>
        {constellations.map((group, i) => (
          <svg key={i} className="constellation" style={{
              left: group.x + '%', top: group.y + '%',
              '--constellation-size': group.size + 'px',
              '--constellation-angle': group.angle + 'deg',
              '--constellation-delay': -i * 2.7 + 's',
            }}
            viewBox="0 0 140 120" focusable="false">
            <polyline points={constellationPatterns[group.pattern].map((point) => point.join(',')).join(' ')} />
            {constellationPatterns[group.pattern].map(([x, y], j) => <circle key={j} cx={x} cy={y} r={j % 3 === 0 ? 2.5 : 1.8} />)}
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
