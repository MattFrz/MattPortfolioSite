import { FiArrowLeft, FiArrowRight, FiGithub } from 'react-icons/fi'
import { liveTraces, projects, quantFlow } from '../content'
import { Link } from './Link'
import LiveTrace from './LiveTrace'
import { External, SectionHeading } from './Sheet'
import { BarFigure, FlowFigure, PhotoGallery, StageTrace } from './Figures'

function ArchitectureFigure({ project }) {
  if (project.slug === 'urbanova') return <LiveTrace traces={liveTraces} compact label="Illustrative replay of the Urbanova job pipeline" />
  if (project.slug === 'ai-quant-council') {
    return <FlowFigure caption="Running a 60 to 90 second research job outside the HTTP request." steps={quantFlow}
      returnPath="Finished runs go to a disk cache tagged with a cache version. Entries from an older version are recomputed, not replayed." />
  }
  if (project.slug === 'itch-engine') {
    return <StageTrace stages={project.detail.stageChart} total="23.27 ns per message · 43.0M messages/s"
      caption="Time per message by stage on the packet path. In-memory replay on one pinned core of a Windows 11 desktop, best of five passes. Host processing only, not network latency." />
  }
  return null
}

export default function ProjectPage({ slug }) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />
  const p = projects[index]
  const d = p.detail
  const next = projects[(index + 1) % projects.length]

  return (
    <main id="main" className="page project-page" tabIndex={-1}>
      <header className="project-hero">
        <Link className="back-link" to="/#work"><FiArrowLeft aria-hidden="true" />All work</Link>
        <h1 id="page-title" tabIndex={-1}>{p.name}</h1>
        <p className="work-meta">{p.context} · {p.date}</p>
        <p className="hero-sub">{p.summary}</p>
        <div className="btn-row">
          <External className="btn btn-primary" href={p.code} label={p.name + ' source code on GitHub'}><FiGithub aria-hidden="true" />Code</External>
          <External className="btn" href={p.live} label={p.name + ' live demo'}>Live demo</External>
        </div>
        <dl className="fact-list">
          <div><dt>Team</dt><dd>{p.team === 'Solo' ? 'Solo' : p.team}</dd></div>
          <div><dt>My part</dt><dd>{p.role}</dd></div>
          <div><dt>Stack</dt><dd>{p.stack.join(', ')}</dd></div>
        </dl>
      </header>

      <div className="doc-layout">
        <div className="doc-body">
          <section aria-labelledby="problem"><SectionHeading id="problem">The problem</SectionHeading><p className="prose">{d.problem}</p></section>
          <section aria-labelledby="product">
            <SectionHeading id="product">What it does</SectionHeading>
            <p className="prose">{d.product}</p>
            {p.photos && <div className="figure-slot"><PhotoGallery photos={p.photos} /></div>}
          </section>
          <section aria-labelledby="built">
            <SectionHeading id="built">What I built</SectionHeading>
            {d.teamNote && <p className="team-note"><strong>Team context.</strong> {d.teamNote}</p>}
            <ul className="tick-list tick-list-long">{d.mine.map((m) => <li key={m}>{m}</li>)}</ul>
            {p.slug === 'urbanova' && (
              <figure className="figure figure-image figure-slot">
                <img src="/images/urbanova-walking-route-500-dundas.webp" width="800" height="770" loading="lazy" decoding="async"
                  alt="Street map around 500 Dundas Street East showing a blue walking route from the development to the nearest streetcar stop, about 229 metres." />
                <figcaption>From the reviewed data pipeline I built: the mapped walking route from the proposal at 500 Dundas St E to its nearest 505 stop. The pipeline produces one of these for each proposal. Blue is the mapped walking route; the red dashes are an estimated link from the address to the path, because the real entrance hasn’t been checked. Map data © OpenStreetMap contributors (ODbL); development data © City of Toronto.</figcaption>
              </figure>
            )}
          </section>
          <section aria-labelledby="architecture">
            <SectionHeading id="architecture">Architecture</SectionHeading>
            <p className="prose">{d.architecture}</p>
            <div className="figure-slot"><ArchitectureFigure project={p} /></div>
          </section>
          <section aria-labelledby="hard-problem">
            <SectionHeading id="hard-problem">{d.hardProblem.title}</SectionHeading>
            {d.hardProblem.body.map((para) => <p key={para} className="prose">{para}</p>)}
          </section>
          <section aria-labelledby="evidence">
            <SectionHeading id="evidence">Evidence</SectionHeading>
            <ul className="tick-list tick-list-long">{d.evidence.map((e) => <li key={e}>{e}</li>)}</ul>
            {p.slug === 'itch-engine' && (
              <div className="figure-slot">
                <BarFigure diverging unit="US dollars"
                  caption="Backtest PnL for the same signal on the same clock under two fill models. AAPL, one session, after fixing the duplicate-execution bug."
                  rows={[
                    { label: 'Naive: fills at mid, no latency', value: 378, display: '+$378' },
                    { label: 'Realistic: queue position, 2/3 ms latency, fees', value: -1598, display: '−$1,598' },
                  ]} />
              </div>
            )}
          </section>
          <section aria-labelledby="limits"><SectionHeading id="limits">Limitations</SectionHeading><p className="prose">{d.limits}</p></section>
        </div>
      </div>

      <nav className="next-project" aria-label="Next project">
        <Link to={'/work/' + next.slug}><span><span className="next-label">Next:</span> {next.name}</span><FiArrowRight aria-hidden="true" /></Link>
      </nav>
    </main>
  )
}

function NotFound() {
  return (
    <main id="main" className="page project-page" tabIndex={-1}>
      <header className="project-hero">
        <h1 id="page-title" tabIndex={-1}>Page not found</h1>
        <p className="hero-sub"><Link to="/">Back to the home page</Link></p>
      </header>
    </main>
  )
}
