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
          <h3>Co-Founder & Full-Stack Developer</h3>
          <span className="date">June 2025 - Present</span>
        </div>
        <p className="company">After Image Inc · Toronto, ON</p>
        <ul>
          <li>Co-founded After Image, a B2B SaaS platform that streamlines business operations through a secure, scalable web application built with Node.js, MySQL, and AWS.</li>
          <li>Architected the full-stack platform with role-based access control (RBAC), RESTful APIs, and a multi-tenant architecture, enabling multiple organizations to securely manage their own data and workflows.</li>
          <li>Developed an administrative dashboard featuring Stripe payment processing, automated subscriptions, invoicing, and real-time business analytics to simplify customer management.</li>
          <li>Designed and optimized the backend infrastructure, creating efficient MySQL database schemas and high-performance APIs capable of handling thousands of monthly transactions with low latency and high reliability.</li>
          <li>Led product development from concept to deployment, collaborating with clients to gather feedback, prioritize features, and iteratively improve the platform based on real-world business needs.</li>
        </ul>
      </motion.div>

      <motion.div
        className="job"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="job-header">
          <h3>Data Engineer & Business Analyst</h3>
          <span className="date">May 2024 - Sept 2025</span>
        </div>
        <p className="company">K&D Consulting · Toronto, ON</p>
        <ul>
          <li>Developed a Python-based automation framework using YAML-driven pipelines to streamline financial data processing workflows, reducing manual Excel processing by 95% and minimizing developer intervention by 90%+.</li>
          <li>Engineered scalable data integration workflows to process 500+ financial workbook integrations monthly, improving data reliability and reducing client reporting workload by 40+ hours per week.</li>
          <li>Translated business requirements into technical solutions, collaborating with clients and stakeholders to design, implement, and deliver automation tools aligned with operational needs.</li>
          <li>Managed iterative software delivery using Agile methodologies and Jira, coordinating development priorities, testing, and deployments to meet project deadlines.</li>
        </ul>
      </motion.div>

      <motion.div
        className="job"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="job-header">
          <h3>Technology Analyst, Strategic Initiatives</h3>
          <span className="date">May 2026 - Dec 2026</span>
        </div>
        <p className="company">University Pension Plan Ontario · Toronto, ON</p>
        <ul>
          <li>Designed and developed an end-to-end data automation platform for the Public Markets Quant team using Python, SQL, and Streamlit, eliminating hours of manual data preparation each reporting cycle.</li>
          <li>Engineered an ETL pipeline that integrated data from Bloomberg, Albourne, the internal DataHub, and Google Cloud Platform (GCP), performed CAD foreign exchange (FX) normalization, generated standardized Excel reports, and synchronized transformed datasets back to GCP.</li>
          <li>Built and deployed an interactive Streamlit application that automated data validation, transformation, and reporting, enabling analysts to generate analysis-ready datasets through a simple web interface.</li>
          <li>Partnered with portfolio managers, quantitative researchers, and business stakeholders to gather requirements, translate investment workflows into scalable software solutions, and deliver production-ready automation tools.</li>
        </ul>
      </motion.div>
    </section>
  )
}

export default Experience