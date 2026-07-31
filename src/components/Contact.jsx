import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-head">
        <span className="eyebrow">05 / Contact</span>
        <h2>Contact</h2>
        <div className="section-rule" />
      </div>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <a className="contact-card primary" href="mailto:mattfarzaneh21@gmail.com">
          <span className="contact-icon"><FaEnvelope /></span>
          <span className="contact-text">mattfarzaneh21@gmail.com</span>
          <FiArrowUpRight className="contact-arrow" />
        </a>

        <p className="contact-card static">
          <span className="contact-icon"><FaMapMarkerAlt /></span>
          <span className="contact-text">Toronto, ON</span>
        </p>

        <a
          className="contact-card"
          href="https://github.com/MattFrz"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon"><FaGithub /></span>
          <span className="contact-text">GitHub</span>
          <FiArrowUpRight className="contact-arrow" />
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/matt-farzaneh-36153727a/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon"><FaLinkedin /></span>
          <span className="contact-text">LinkedIn</span>
          <FiArrowUpRight className="contact-arrow" />
        </a>
      </motion.div>

      <footer className="footer">
        <p>© 2026 Matt Farzaneh. Built with React &amp; Vite.</p>
      </footer>
    </section>
  )
}

export default Contact
