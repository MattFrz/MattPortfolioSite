import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:mattfarzaneh21@gmail.com"><FaEnvelope /> mattfarzaneh21@gmail.com</a>
        <p><FaMapMarkerAlt /> Toronto, ON</p>
        <a href="https://github.com/MattFrz" target="_blank"><FaGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/matt-farzaneh-36153727a/" target="_blank"><FaLinkedin /> LinkedIn</a>
      </div>
      <footer className="footer">
        <p>© 2026 Matt Farzaneh. Built with React & Vite.</p>
      </footer>
    </motion.section>
  )
}

export default Contact