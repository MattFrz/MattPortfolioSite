import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.p className="hero-eyebrow" variants={item}>
            <span className="ping" />
            Toronto, ON
          </motion.p>

          <motion.h1 variants={item}>Matt Farzaneh</motion.h1>

          <motion.p className="subtitle" variants={item}>
            CS Student &amp; Full-Stack Developer
          </motion.p>

          <motion.div className="hero-links" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowDown />
            </a>
            <a href="https://github.com/MattFrz" target="_blank" rel="noreferrer" className="btn">
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matt-farzaneh-36153727a/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visual-card">
            <svg viewBox="0 0 320 200" preserveAspectRatio="none" className="chart">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="60%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} className="chart-grid" />
              ))}

              <path
                className="chart-fill"
                d="M0,150 L26,138 L52,146 L78,118 L104,128 L130,96 L156,108 L182,74 L208,86 L234,54 L260,64 L286,36 L320,26 L320,200 L0,200 Z"
                fill="url(#fillGrad)"
              />
              <path
                className="chart-line"
                d="M0,150 L26,138 L52,146 L78,118 L104,128 L130,96 L156,108 L182,74 L208,86 L234,54 L260,64 L286,36 L320,26"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="visual-bars">
              {[38, 62, 45, 78, 55, 88, 70, 96].map((h, i) => (
                <span key={i} style={{ '--h': `${h}%`, '--i': i }} />
              ))}
            </div>
          </div>
          <div className="visual-glow" />
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="scroll-track"><span className="scroll-thumb" /></span>
      </motion.div>
    </section>
  )
}

export default Hero
