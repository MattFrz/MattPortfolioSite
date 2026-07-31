import { motion } from 'framer-motion'
import './Experience.css'

const jobs = [
  {
    role: 'Technology Analyst, Strategic Initiatives',
    company: 'University Pension Plan Ontario',
    location: 'Toronto, ON',
    date: 'May 2026 - Dec 2026',
    points: [
      'Designed and developed an end-to-end data automation platform for the Public Markets Quant team using Python, SQL, and Streamlit, eliminating hours of manual data preparation each reporting cycle.',
      'Engineered an ETL pipeline that integrated data from Bloomberg, Albourne, the internal DataHub, and Google Cloud Platform (GCP), performed CAD foreign exchange (FX) normalization, generated standardized Excel reports, and synchronized transformed datasets back to GCP.',
      'Built and deployed an interactive Streamlit application that automated data validation, transformation, and reporting, enabling analysts to generate analysis-ready datasets through a simple web interface.',
      'Partnered with portfolio managers, quantitative researchers, and business stakeholders to gather requirements, translate investment workflows into scalable software solutions, and deliver production-ready automation tools.',
    ],
  },
  {
    role: 'Co-Founder & Full-Stack Developer',
    company: 'After Image Inc',
    location: 'Toronto, ON',
    date: 'June 2025 - Present',
    points: [
      'Co-founded After Image, a B2B SaaS platform that streamlines business operations through a secure, scalable web application built with Node.js, MySQL, and AWS.',
      'Architected the full-stack platform with role-based access control (RBAC), RESTful APIs, and a multi-tenant architecture, enabling multiple organizations to securely manage their own data and workflows.',
      'Developed an administrative dashboard featuring Stripe payment processing, automated subscriptions, invoicing, and real-time business analytics to simplify customer management.',
      'Designed and optimized the backend infrastructure, creating efficient MySQL database schemas and high-performance APIs capable of handling thousands of monthly transactions with low latency and high reliability.',
      'Led product development from concept to deployment, collaborating with clients to gather feedback, prioritize features, and iteratively improve the platform based on real-world business needs.',
    ],
  },
  {
    role: 'Data Engineer & Business Analyst',
    company: 'K&D Consulting',
    location: 'Toronto, ON',
    date: 'May 2024 - Sept 2025',
    points: [
      'Developed a Python-based automation framework using YAML-driven pipelines to streamline financial data processing workflows, reducing manual Excel processing by 95% and minimizing developer intervention by 90%+.',
      'Engineered scalable data integration workflows to process 500+ financial workbook integrations monthly, improving data reliability and reducing client reporting workload by 40+ hours per week.',
      'Translated business requirements into technical solutions, collaborating with clients and stakeholders to design, implement, and deliver automation tools aligned with operational needs.',
      'Managed iterative software delivery using Agile methodologies and Jira, coordinating development priorities, testing, and deployments to meet project deadlines.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-head">
        <span className="eyebrow">02 / Experience</span>
        <h2>Experience</h2>
        <div className="section-rule" />
      </div>

      <div className="timeline">
        {jobs.map((job, i) => (
          <motion.article
            className="job"
            key={job.company}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <span className="job-node" aria-hidden="true" />

            <div className="job-body">
              <div className="job-header">
                <h3>{job.role}</h3>
                <span className="date">{job.date}</span>
              </div>

              <p className="company">
                <span className="company-name">{job.company}</span>
                <span className="dot">·</span>
                <span className="job-location">{job.location}</span>
              </p>

              <ul>
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
