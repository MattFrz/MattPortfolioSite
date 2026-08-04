import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Stock Prediction AI',
    emoji: '📈',
    hook: 'Can a neural network beat basic market indicators? I had to find out.',
    description: 'Trained a 3-layer LSTM on 60 days of S&P 500 data. Turns out - it actually works. Competitive RMSE and R² scores against real market benchmarks.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    github: 'https://github.com/MattFrz',
  },
  {
    title: 'Smart Crypto Wallet',
    emoji: '💰',
    hook: 'I wanted to understand how blockchain transactions actually work - so I built one.',
    description: 'Full-stack wallet on Stellar. React frontend, Node.js backend, real transaction flow. Handled 2,000+ simulated transfers without a single failure.',
    tech: ['React', 'Node.js', 'Java', 'JavaScript'],
    github: 'https://github.com/MattFrz',
  },
  {
    title: 'WorkoutDuel',
    emoji: '💪',
    hook: 'What if working out was a competitive game you played against your friend?',
    description: 'Two-player desktop fitness app with match flow, scoring across 6 exercise types, and full test coverage. Built it in C++ because I wanted to suffer a little.',
    tech: ['C++', 'Qt 6', 'SQLite', 'CMake'],
    github: 'https://github.com/MattFrz',
  },
  {
    title: 'ITCH-Engine',
    emoji: '📊',
    hook: 'Everyone backtests like fills are instant and perfect. I proved that assumption is a lie.',
    description: 'Custom C++ order book engine that reconstructs a live Nasdaq exchange from 14.5M+ real ITCH messages, verified error-free against an independent reference implementation. Used it to show that a realistic backtest - real queue position, real latency - flips a "profitable" strategy into a loss.',
    tech: ['C++', 'Python', 'pybind11', 'Streamlit'],
    github: 'https://github.com/MattFrz/ITCH-Engine',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-head">
        <span className="eyebrow">03 / Projects</span>
        <h2>Projects</h2>
        <div className="section-rule" />
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.a
            className="project-card"
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-glow" aria-hidden="true" />

            <div className="card-top">
              <span className="project-emoji">{project.emoji}</span>
              <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-hook">{project.hook}</p>
            <p className="project-desc">{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <span className="project-link">
                <FaGithub /> View Code
              </span>
              <FiArrowUpRight className="arrow" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Projects
