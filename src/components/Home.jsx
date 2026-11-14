import { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { experience, home, profile, projects, skills } from '../content'
import { useEntrance } from '../hooks/useMotion'
import { Link } from './Link'
import { Screenshot } from './Figures'

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

function Chapter({ project }) {
  const copy = home.chapters[project.slug]
  return (
    <section className="chapter" aria-labelledby={'c-' + project.slug}>
      <Reveal className="chapter-head">
        <h2 id={'c-' + project.slug}>{copy.headline}</h2>
        <p className="chapter-lede">{copy.lede}</p>
        <p className="chapter-credit">{copy.credit}</p>
        <ul className="chapter-details">{copy.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <p className="chapter-links">
          <More to={'/work/' + project.slug}>Read the write-up</More>
          <More href={project.code} external>View the code</More>
          <More href={project.live} external>Try the demo</More>
        </p>
      </Reveal>
      <div className="showcase">
        <Screenshot {...copy.shot} />
      </div>
    </section>
  )
}

function Role({ job }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal as="li" className={'role' + (open ? ' is-open' : '')} id={job.id}>
      <p className="role-dates">{job.dates}</p>
      <div className="role-body">
        {/* Decorative: the company name sits right beside it. */}
        {job.logo && <img className="role-logo" src={job.logo.src} width={job.logo.width} height={job.logo.height} alt="" loading="lazy" decoding="async" />}
        <div className="role-main">
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
      </div>
    </Reveal>
  )
}

export default function Home() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
  return (
    <main id="main" className="page" tabIndex={-1}>
      <Hero />

      <div id="work" className="chapters">
        <Chapter project={bySlug.urbanova} />
        <Chapter project={bySlug['itch-engine']} />
        <Chapter project={bySlug['ai-quant-council']} />
      </div>

      <section className="band" aria-labelledby="experience">
        <Reveal as="h2" className="section-title" id="experience">Experience.</Reveal>
        <ol className="roles">{experience.map((job) => <Role key={job.id} job={job} />)}</ol>
      </section>

      <section className="band about" aria-labelledby="about">
        <Reveal as="h2" className="section-title" id="about">Outside of work.</Reveal>
        <Reveal className="about-body">{home.about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <Reveal as="figure" className="about-photo">
          <img {...bySlug.urbanova.photos.items[2]} loading="lazy" decoding="async" />
          <figcaption>With a fellow hacker at Hack the Valley 11, October 2026.</figcaption>
        </Reveal>
        <Reveal as="dl" className="skills">
          {skills.map((s) => <div key={s.group}><dt>{s.group}</dt><dd>{s.items}</dd></div>)}
        </Reveal>
      </section>

      <section className="band contact" aria-labelledby="contact">
        <Reveal className="contact-photo">
          <img src={profile.headshot.src} width={profile.headshot.width} height={profile.headshot.height}
            alt={profile.headshot.alt} loading="lazy" decoding="async" />
        </Reveal>
        <Reveal as="h2" className="contact-title" id="contact">Email me.</Reveal>
        <Reveal as="p" className="contact-email"><a href={'mailto:' + profile.email}>{profile.email}</a></Reveal>
        <Reveal as="p" className="contact-links">
          <More href={profile.resume} download="Matt-Farzaneh-Resume.pdf">Résumé (PDF)</More>
          <More href={profile.github} external>GitHub</More>
          <More href={profile.linkedin} external>LinkedIn</More>
        </Reveal>
      </section>

    </main>
  )
}
