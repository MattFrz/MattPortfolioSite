import Reveal from './Reveal'
import './Experience.css'

const jobs = [
  {
    id: 'upp', start: 'May 2026', end: 'Present', role: 'Software Engineer Intern, Data Infrastructure',
    company: 'University Pension Plan Ontario', category: 'Investment data',
    points: [
      'Built a Python / SQL / Streamlit ETL pipeline for the Public Markets Quant team. It pulls from GCP, Bloomberg, Albourne, and DataHub, applies CAD FX transformations, refreshes Excel reports, and writes the results back to GCP. This saves hours of recurring manual work.',
      'Deployed an upgraded Streamlit app that standardized reporting and delivered analysis-ready datasets for quantitative research and portfolio analysis.',
      'Gathered requirements directly from portfolio managers, business stakeholders, and engineers.',
    ],
  },
  {
    id: 'after-image', start: 'Jun 2025', end: 'Present', role: 'Co-Founder / Developer',
    company: 'After Image Inc', category: 'Production SaaS',
    points: [
      'Shipped a B2B SaaS platform to production on AWS. Built the full-stack Node.js system with role-based access control separating tenant and admin permissions.',
      'Built a multi-tenant dashboard with Stripe integration to automate billing, invoicing, and analytics.',
      'Designed the MySQL schema and REST APIs with indexed access paths and query tuning to keep tenant-scoped endpoints responsive as data grew.',
    ],
  },
  {
    id: 'kd-consulting', start: 'May 2024', end: 'Sep 2025', role: 'Data Engineer & Business Analyst',
    company: 'K&D Consulting', category: 'Financial automation',
    points: [
      'Built a Python automation framework driven by YAML pipeline configs, cutting manual Excel processing by 95% and developer intervention by 90%+.',
      'Processed 500+ financial workbook integrations per month through the framework, saving 40+ hours of client reporting effort each week.',
      'Coordinated delivery in Jira using Agile methods, keeping work aligned with client requirements and deadlines.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="section-heading"><p className="eyebrow"><span className="section-number">02</span>Experience</p><div><h2 id="experience-title">Systems people work with.</h2><p className="section-intro">Investment research, production software, and the reporting in between.</p></div></div>
      <div className="experience-ledger">
        {jobs.map(job => <Reveal key={job.id}>
          <article className="job" id={job.id} tabIndex={-1}>
            <div className="job-meta"><p className="job-date mono">{job.start}<span>to {job.end}</span></p><p className="job-location">Toronto, ON</p><span className="job-category">{job.category}</span></div>
            <div className="job-body"><p className="job-company">{job.company}</p><h3>{job.role}</h3><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div>
          </article>
        </Reveal>)}
      </div>
    </section>
  )
}
