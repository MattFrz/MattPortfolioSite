import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>

      <div className="skill-group">
        <h3>Languages</h3>
        <div className="skill-tags">
          <span>Python</span>
          <span>Java</span>
          <span>C++</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>R</span>
          <span>ARM Assembly</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Frameworks & Libraries</h3>
        <div className="skill-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>TensorFlow</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Qt 6</span>
          <span>Stellar SDK</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Tools & Platforms</h3>
        <div className="skill-tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>AWS</span>
          <span>MySQL</span>
          <span>SQLite</span>
          <span>Stripe</span>
          <span>CMake</span>
          <span>Linux</span>
          <span>Jira</span>
          <span>VS Code</span>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills