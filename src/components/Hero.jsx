import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Matt Farzaneh</h1>
      <p className="subtitle">CS Student & Full-Stack Developer</p>
      <p className="location">Toronto, ON</p>
      <div className="hero-links">
        <a href="https://github.com/MattFrz" target="_blank"><FaGithub /> GitHub</a>
        <a href="#" target="_blank"><FaLinkedin /> LinkedIn</a>
        <a href="#projects" className="cta">View Projects ↓</a>
      </div>
    </motion.section>
  )
}

export default Hero