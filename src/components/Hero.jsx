import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi'
import './Hero.css'

const metrics = [
  { value: '1.23', unit: 'Sharpe', label: 'AI Quant Council · backtest', href: '#quant-council' },
  { value: '0.88', unit: 'µs / event', label: 'ITCH · Python/C++ boundary', href: '#itch-engine' },
  { value: '14.47', unit: 'M messages', label: 'ITCH · one validated day', href: '#itch-engine' },
  { value: '95', unit: '%', label: 'Less manual Excel processing', href: '#kd-consulting' },
]

export default function Hero() {
  return (
    <section className="hero section-shell" id="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-topline"><span className="eyebrow">Software engineer</span><span className="eyebrow">Toronto, ON <span className="hero-coordinate" aria-hidden="true">/</span> Western University</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Matt Farzaneh<span className="hero-period">.</span></h1>
          <p className="hero-positioning">Low-latency systems.<br />Quantitative finance.</p>
          <p className="hero-description">I build the infrastructure behind the result — from investment data pipelines to order books tested against real exchange data.</p>
          <div className="hero-links">
            <a href="#projects" className="button button-primary">Explore the work <FiArrowDown aria-hidden="true" /></a>
            <a href="/resume.pdf" download="Matt-Farzaneh-Resume.pdf" className="button"><FiDownload aria-hidden="true" /> Resume <span className="download-size">160 KB</span></a>
          </div>
        </div>
        <aside className="hero-note" aria-label="Current work">
          <span className="eyebrow">Currently building</span>
          <h2>Data infrastructure for investment research.</h2>
          <p>Software Engineer Intern<br /><strong>University Pension Plan Ontario</strong></p>
          <a href="#experience" className="text-link">Experience <FiArrowUpRight aria-hidden="true" /></a>
          <div className="note-foot mono">Python / SQL / GCP</div>
        </aside>
      </div>
      <div className="metric-strip" aria-label="Selected results">
        {metrics.map((metric) => <a key={metric.value} className="lead-metric" href={metric.href}>
          <span className="metric-value mono">{metric.value}<span className="metric-unit">{metric.unit}</span></span>
          <span className="metric-label">{metric.label}<FiArrowUpRight aria-hidden="true" /></span>
        </a>)}
      </div>
      <p className="metric-footnote">Selected measurements from projects and production work. Methods and context below.</p>
    </section>
  )
}
