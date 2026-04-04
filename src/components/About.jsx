import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a CS student at Western University who got hooked on programming 
          the first time I automated something that used to take hours. That 
          feeling of "wait, I can just build that?" hasn't gone away.
        </p>
        <p>
          Since then, I've co-founded a SaaS company, built AI models that 
          predict stock prices, and automated data pipelines processing 
          hundreds of financial spreadsheets. I care about writing clean code 
          that actually ships and solves real problems for real people.
        </p>
        <p>
          When I'm not coding, I'm probably exploring new tech, breaking 
          something in a side project, or figuring out how things work 
          under the hood.
        </p>
      </div>
    </motion.section>
  )
}

export default About