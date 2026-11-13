import { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { experience, home, liveTraces, profile, projects, skills } from '../content'
import { useCountUp, useEntrance, useScrollProgress } from '../hooks/useMotion'
import { Link } from './Link'
import LiveTrace from './LiveTrace'
import { Screenshot, StageTrace } from './Figures'

// Apple-style text link: blue, with a chevron that nudges on hover.
function More({ to, href, download, children, external }) {
  const inner = <>{children}<FiChevronRight aria-hidden="true" /></>
  if (to) return <Link className="more" to={to}>{inner}</Link>
  return <a className="more" href={href} download={download} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
    aria-label={external ? children + ' (opens in a new tab)' : undefined}>{inner}</a>
}

function Reveal({ as = 'div', className = '', children, ...rest }) {
  const Tag = as
  const [ref, motion] = useEntrance(0.15)
  return <Tag ref={ref} className={'reveal ' + className + motion} {...rest}>{children}</Tag>
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <h1 id="page-title" tabIndex={-1}>Matt Farzaneh</h1>
      <p className="hero-intro">{home.intro}</p>
      <p className="hero-links">
        <More href={profile.resume} download="Matt-Farzaneh-Resume.pdf">Download résumé</More>
        <More to="/#work">See the work</More>
      </p>
    </section>
  )
}

// Words brighten one by one as the section scrolls past.
function Statement() {
  const ref = useScrollProgress()
  const words = home.statement.split(' ')
  return (
    <section className="statement" ref={ref} data-span="height" aria-label="What I build">
      <div className="statement-sticky">
        <p style={{ '--n': words.length }}>
          {words.map((w, i) => <span key={i} style={{ '--i': i }}>{w} </span>)}
        </p>
      </div>
    </section>
  )
}

// The showcase card grows to full size as it arrives.
function Showcase({ children, label }) {
  const ref = useScrollProgress({ start: 1, end: 0.35 })
  return <div className="showcase" ref={ref} role="group" aria-label={label}>{children}</div>
}

function Chapter({ project, children }) {
  const copy = home.chapters[project.slug]
  return (
    <section className="chapter" aria-labelledby={'c-' + project.slug}>
      <Reveal className="chapter-head">
        <h2 id={'c-' + project.slug}>{copy.headline}</h2>
        <p className="chapter-lede">{copy.lede}</p>
        <p className="chapter-links">
          <More to={'/work/' + project.slug}>Read the write-up</More>
          <More href={project.code} external>View the code</More>
          <More href={project.live} external>Try the demo</More>
        </p>
      </Reveal>
      <Showcase label={copy.headline + ' visual'}>
        <Screenshot {...copy.shot} />
        {children}
      </Showcase>
      <Reveal as="p" className="chapter-credit">{copy.credit}</Reveal>
    </section>
  )
}

function Stat({ n }) {
  const [ref, display] = useCountUp(n.value, n.decimals)
  return (
    <Reveal as="li" className="number">
      <span className="number-value" ref={ref} aria-hidden="true">{display}{n.suffix}</span>
      <span className="sr-only">{n.value}{n.suffix}</span>
      <span className="number-label">{n.label}<sup><a href={'#fn-' + n.note} aria-label={'Footnote ' + n.note}>{n.note}</a></sup></span>
    </Reveal>
  )
}

function Role({ job }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal as="li" className={'role' + (open ? ' is-open' : '')} id={job.id}>
      <p className="role-dates">{job.dates}</p>
      <div className="role-body">
        <h3>{job.org}</h3>
        <p className="role-title">{job.role}</p>
        <p className="role-summary">{job.summary}</p>
        <button className="role-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={'d-' + job.id}>
          {open ? 'Show less' : 'More details'}<FiChevronDown aria-hidden="true" />
        </button>
        <div className="role-detail" id={'d-' + job.id} inert={!open}>
          <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        </div>
      </div>
    </Reveal>
  )
}

export default function Home() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
  const itch = bySlug['itch-engine']
  return (
    <main id="main" className="page" tabIndex={-1}>
      <Hero />
      <Statement />

      <div id="work" className="chapters">
        <Chapter project={bySlug.urbanova}>
          <LiveTrace traces={liveTraces} label="Live replay of Urbanova's job pipeline" />
        </Chapter>
        <Chapter project={itch}>
          <StageTrace stages={itch.detail.stageChart} total="23.27 ns per message (43.0M a second)"
            caption="Time per message at each stage of the packet path, in-memory replay.²" />
        </Chapter>
        <Chapter project={bySlug['ai-quant-council']} />
      </div>

      <section className="band" aria-labelledby="numbers">
        <Reveal as="h2" className="section-title" id="numbers">What I measured.</Reveal>
        <ul className="numbers">{home.numbers.map((n) => <Stat key={n.note} n={n} />)}</ul>
      </section>

      <section className="band" aria-labelledby="experience">
        <Reveal as="h2" className="section-title" id="experience">Experience.</Reveal>
        <ol className="roles">{experience.map((job) => <Role key={job.id} job={job} />)}</ol>
      </section>

      <section className="band about" aria-labelledby="about">
        <Reveal as="h2" className="section-title" id="about">Outside of work.</Reveal>
        <Reveal className="about-body">{home.about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <Reveal as="dl" className="skills">
          {skills.map((s) => <div key={s.group}><dt>{s.group}</dt><dd>{s.items}</dd></div>)}
        </Reveal>
      </section>

      <section className="band contact" aria-labelledby="contact">
        <Reveal as="h2" className="contact-title" id="contact">Email me.</Reveal>
        <Reveal as="p" className="contact-email"><a href={'mailto:' + profile.email}>{profile.email}</a></Reveal>
        <Reveal as="p" className="contact-links">
          <More href={profile.resume} download="Matt-Farzaneh-Resume.pdf">Résumé (PDF)</More>
          <More href={profile.github} external>GitHub</More>
          <More href={profile.linkedin} external>LinkedIn</More>
        </Reveal>
      </section>

      <section className="footnotes" aria-label="Footnotes">
        <ol>{home.footnotes.map((f, i) => <li key={f} id={'fn-' + (i + 1)}>{f}</li>)}</ol>
      </section>
    </main>
  )
}
