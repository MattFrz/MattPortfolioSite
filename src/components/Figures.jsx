import { useEntrance } from '../hooks/useMotion'

// Figures are drawn in HTML so they reflow on small screens and stay readable
// by assistive technology. Each draws in once when it scrolls into view.

export function FlowFigure({ caption, steps, returnPath }) {
  const [ref, motion] = useEntrance()
  return (
    <figure className={'figure' + motion} ref={ref}>
      <ol className="flow" aria-label={caption}>
        {steps.map((step, i) => (
          <li className="flow-step" key={step.title} style={{ '--i': i }}>
            <div className="flow-block">
              <span className="flow-title">{step.title}</span>
              <span className="flow-detail">{step.detail}</span>
            </div>
            {i < steps.length - 1 && <span className="flow-arrow" aria-hidden="true"><span className="flow-arrow-label">{step.out}</span><span className="flow-packet" /></span>}
          </li>
        ))}
      </ol>
      {returnPath && <p className="flow-return">{returnPath}</p>}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

// A screenshot of a live demo. `maxWidth` insets tall captures inside the tile
// so they don't fill several screens.
export function Screenshot({ src, width, height, alt, caption, maxWidth }) {
  return (
    <figure className={'figure figure-shot' + (maxWidth ? ' is-inset' : '')} style={maxWidth ? { '--shot-max': maxWidth + 'px' } : undefined}>
      <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

// Event photos at their natural aspect ratios. Portraits and landscapes share a
// row height because the grid columns follow each photo's width-to-height
// ratio (set as --r), so nothing is cropped.
export function PhotoGallery({ photos }) {
  const [ref, motion] = useEntrance(0.15)
  return (
    <figure className={'figure photo-gallery reveal' + motion} ref={ref}>
      <ul className="photo-grid" style={{ '--cols': photos.items.map((p) => (p.width / p.height).toFixed(3) + 'fr').join(' ') }}>
        {photos.items.map((p) => (
          <li key={p.src} className={p.width > p.height ? 'is-wide' : undefined}>
            <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
      <figcaption>{photos.caption}</figcaption>
    </figure>
  )
}

// A static trace waterfall: stages laid end to end on one time axis.
export function StageTrace({ stages, total, caption }) {
  const [ref, motion] = useEntrance()
  const sum = stages.reduce((a, s) => a + s.ns, 0)
  const starts = stages.map((_, i) => stages.slice(0, i).reduce((a, s) => a + s.ns, 0))
  return (
    <figure className={'figure stage-trace' + motion} ref={ref}>
      <ol className="stage-rows">
        {stages.map((s, i) => {
          const start = starts[i]
          return (
            <li key={s.stage} className="stage-row" data-svc={['api', 'pg', 'worker'][i % 3]} style={{ '--s': start / sum, '--w': s.ns / sum, '--i': i }}>
              <span className="stage-name">{s.stage}</span>
              <span className="stage-track"><span className="stage-bar" /></span>
              <span className="stage-dur">{s.ns.toFixed(2)} ns</span>
            </li>
          )
        })}
      </ol>
      <p className="stage-total">{total}</p>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

// Horizontal bars. With `diverging`, negative values extend left of a zero line
// and positive values right of it, on one shared scale.
export function BarFigure({ caption, rows, unit, diverging = false }) {
  const [ref, motion] = useEntrance()
  const max = Math.max(...rows.map((r) => Math.abs(r.value)))
  const negSpan = diverging ? Math.max(0, ...rows.map((r) => -r.value)) : 0
  const posSpan = diverging ? Math.max(0, ...rows.map((r) => r.value)) : max
  return (
    <figure className={'figure' + motion} ref={ref}>
      <table className={'bars' + (diverging ? ' bars-diverging' : '')} style={diverging ? { '--neg-share': negSpan / (negSpan + posSpan) } : undefined}>
        <caption className="sr-only">{caption}</caption>
        <thead className="sr-only"><tr><th scope="col">Series</th><th scope="col">{unit}</th></tr></thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} title={row.label + ': ' + row.display} style={{ '--i': i }}>
              <th scope="row">{row.label}</th>
              <td>
                {diverging ? (
                  <span className="dv-track">
                    <span className="dv-neg">{row.value < 0 && <span className="bar bar-neg" style={{ '--w': -row.value / negSpan }}><span className="bar-value">{row.display}</span></span>}</span>
                    <span className="dv-zero" aria-hidden="true" />
                    <span className="dv-pos">{row.value >= 0 && <span className="bar" style={{ '--w': row.value / posSpan }}><span className="bar-value">{row.display}</span></span>}</span>
                  </span>
                ) : (
                  <span className="bar-track"><span className="bar" style={{ '--w': Math.abs(row.value) / max }} /><span className="bar-value">{row.display}</span></span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
