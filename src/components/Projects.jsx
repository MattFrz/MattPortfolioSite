import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import './Projects.css'

function ProjectLinks({ code, live, name }) {
  return <div className="project-links">
    <a className="text-link" href={code} target="_blank" rel="noreferrer" aria-label={name + ' source code (opens in a new tab)'}><FiGithub aria-hidden="true" /> Code <FiArrowUpRight aria-hidden="true" /></a>
    {live && <a className="text-link" href={live} target="_blank" rel="noreferrer" aria-label={name + ' live demo (opens in a new tab)'}>Live demo <FiArrowUpRight aria-hidden="true" /></a>}
  </div>
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="section-heading"><p className="eyebrow"><span className="section-number">03</span>Selected work</p><div><h2 id="projects-title">The result is in the details.</h2><p className="section-intro">Research tools and market infrastructure, with the assumptions left in.</p></div></div>
      <div className="featured-projects">
        <Reveal>
          <article className="project-panel" id="quant-council" tabIndex={-1} aria-labelledby="quant-title">
            <div className="project-topline"><span className="eyebrow">01 / Quantitative research</span><span className="project-date mono">Aug 2026</span></div>
            <div className="project-layout">
              <div className="project-copy">
                <p className="project-context">IgnitionHacks V7</p><h3 id="quant-title">AI Quant Council</h3>
                <p className="project-hook">A trade thesis needs more than a convincing answer.</p>
                <p>Seven GPT-4o-mini agents turn a plain-English thesis into source-linked trade ideas. A quantitative validator rejects ideas below a Sharpe floor or without positive benchmark excess.</p>
                <ul className="project-evidence">
                  <li><strong>Retrieval that respects the clock.</strong> Point-in-time retrieval over 26,000 SEC filing chunks in FAISS, using text-embedding-3-small. A 229-test suite caught a bug in the leakage detector itself.</li>
                  <li><strong>Returns after modeled costs.</strong> An event-driven backtester charges commission and participation-rate slippage. The seven top-ranked names came from a 499-name scored universe.</li>
                </ul>
                <p className="project-tech mono">Python / C++17 / FastAPI / Next.js / OpenAI API</p>
                <ProjectLinks name="AI Quant Council" code="https://github.com/MattFrz/AI-Quant-Council-Ignition-Hacks-V7-" live="https://ai-quant-council.vercel.app" />
              </div>
              <aside className="project-results" aria-label="AI Quant Council backtest measurements">
                <p className="eyebrow">Backtest / top 7 names</p>
                <div className="result-primary"><span className="mono positive">+6.0<span className="result-unit">%</span></span><p>Annualized excess return over SPY</p></div>
                <dl className="result-ledger"><div><dt>Sharpe ratio</dt><dd>1.23</dd></div><div><dt>Scored universe</dt><dd>499 names</dd></div><div><dt>SEC corpus</dt><dd>26,000 chunks</dd></div><div><dt>Test suite</dt><dd>229 tests</dd></div></dl>
                <p className="method-note">Historical simulation with commission and participation-rate slippage. These are backtest results, not live returns.</p>
              </aside>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="project-panel" id="itch-engine" tabIndex={-1} aria-labelledby="itch-title">
            <div className="project-topline"><span className="eyebrow">02 / Market microstructure</span><span className="project-date mono">Aug 2026</span></div>
            <div className="project-layout">
              <div className="project-copy">
                <h3 id="itch-title">Nasdaq ITCH<br className="desktop-break" /> Order Book Engine</h3>
                <p className="project-hook">Same signal. Same clock. A very different PnL.</p>
                <p>A C++17 / Python limit order book checked against real Nasdaq TotalView-ITCH data. Modeling the queue turned an apparently profitable strategy into a loss.</p>
                <ul className="project-evidence">
                  <li><strong>Zero drift at 1,000 random checkpoints.</strong> 8,000 assertions cross-checked levels, order counts, and exact FIFO queue position against an independent reference over a 14.47M-message day.</li>
                  <li><strong>Profile the boundary, then batch it.</strong> Python/C++ crossings accounted for 85% of scalar cost. Batching once per replay brought the boundary to 0.88 µs/event against a 20 µs target, and throughput to 7.8M events/sec.</li>
                </ul>
                <p className="project-tech mono">C++17 / Python / pybind11 / Databento API</p>
                <ProjectLinks name="Nasdaq ITCH Order Book Engine" code="https://github.com/MattFrz/ITCH-Engine" live="https://itch-engine-t4ngmjgaseufnqn5foske3.streamlit.app/" />
              </div>
              <aside className="project-results" aria-label="Execution model comparison">
                <p className="eyebrow">Backtest / execution matters</p>
                <div className="pnl-comparison"><div><span className="comparison-label">Naive fills at mid</span><strong className="mono positive">+$369</strong><span>100% assumed fill rate</span></div><div><span className="comparison-label">Queue-aware fills</span><strong className="mono negative">−$2,679</strong><span>45.7% passive fill rate</span></div></div>
                <dl className="result-ledger"><div><dt>Boundary cost</dt><dd>0.88 µs/event</dd></div><div><dt>Batched replay</dt><dd>7.8M events/s</dd></div><div><dt>Validated messages</dt><dd>14.47M</dd></div></dl>
                <p className="method-note">Same signal and clock. Queue-position-aware fills, two-sided 2 ms / 3 ms latency, and real Nasdaq fees.</p>
              </aside>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="project-compact" aria-labelledby="workout-title">
            <div><span className="eyebrow">03 / Desktop software</span><p className="project-date mono">Apr 2026</p></div>
            <div><h3 id="workout-title">WorkoutDuel</h3><p className="project-hook">Two players. One local database. No connection required.</p><p>Offline fitness challenges with equipment filtering, category-based scoring, match history, and SQLite analytics. Qt Test covers lifecycle, persistence, and scoring regressions.</p><p className="project-tech mono">C++17 / Qt 6 / SQLite / CMake</p><ProjectLinks name="WorkoutDuel" code="https://github.com/MattFrz/WorkoutDuel" /></div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
