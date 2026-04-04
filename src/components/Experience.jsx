import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <motion.div
        className="job"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="job-header">
          <h3>Co-Founder / Developer</h3>
          <span className="date">June 2025 – Present</span>
        </div>
        <p className="company">After Image Inc · Toronto, ON</p>
        <p className="job-summary">Built a B2B SaaS platform from scratch: full-stack Node.js, Stripe payments, AWS deployment, 10K+ monthly transactions.</p>
        <p className="takeaway">💡 Learned to ship a real product end-to-end with paying clients.</p>
      </motion.div>

      <motion.div
        className="job"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="job-header">
          <h3>Junior Developer</h3>
          <span className="date">May 2024 – September 2025</span>
        </div>
        <p className="company">K&D Consulting · Toronto, ON</p>
        <p className="job-summary">Automated financial data pipelines in Python: 500+ spreadsheets monthly, 99.9% accuracy, saved 40+ client hours per week.</p>
        <p className="takeaway">💡 Learned to build tools for non-technical users: simplicity wins.</p>
      </motion.div>
    </section>
  )
}

export default Experience