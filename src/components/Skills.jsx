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
          <span>C/C++</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>SQL</span>
          <span>R</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Frameworks & Libraries</h3>
        <div className="skill-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Spring Boot</span>
          <span>Flask</span>
          <span>FastAPI</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
          <span>Bootstrap</span>
          <span>Qt 6</span>
          <span>Stellar SDK</span>
          <span>JUnit</span>
          <span>Jest</span>
          <span>Jasmine</span>
          <span>Karma</span>
        </div>
      </div>

      <div className="skill-group">
        <h3>Tools & Platforms</h3>
        <div className="skill-tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>Linux</span>
          <span>UNIX</span>
          <span>Windows</span>
          <span>REST APIs</span>
          <span>Postman</span>
          <span>Jira</span>
          <span>Docker</span>
          <span>AWS</span>
          <span>CI/CD</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>SQLite</span>
          <span>Tableau</span>
          <span>Alteryx</span>
          <span>Stripe</span>
          <span>CMake</span>
          <span>Microsoft Office</span>
          <span>VS Code</span>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills