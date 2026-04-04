import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'Stock Prediction AI',
    emoji: '📈',
    hook: 'Can a neural network beat basic market indicators? I had to find out.',
    description: 'Trained a 3-layer LSTM on 60 days of S&P 500 data. Turns out — it actually works. Competitive RMSE and R² scores against real market benchmarks.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    github: 'https://github.com/MattFrz',
  },
  {
    title: 'Smart Crypto Wallet',
    emoji: '💰',
    hook: 'I wanted to understand how blockchain transactions actually work — so I built one.',
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
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="project-emoji">{project.emoji}</span>
            <h3>{project.title}</h3>
            <p className="project-hook">{project.hook}</p>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t, j) => <span key={j}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank"><FaGithub /> View Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects