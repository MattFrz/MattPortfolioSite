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
          <span>JavaScript/TypeScript</span>
          <span>C/C++</span>
          <span>SQL</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Frameworks & Libraries</h3>
        <div className="skill-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Flask</span>
          <span>FastAPI</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>Pandas</span>
          <span>NumPy</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Tools & Platforms</h3>
        <div className="skill-tags">
          <span>AWS</span>
          <span>Docker</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Linux</span>
          <span>REST APIs</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Jira</span>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills