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
          I'm a CS student at Western University, and my path into fintech started with a simple realization: the instinct that makes me automate a boring task is the same one that works on markets. Find the inefficiency, build the system, let it run.
        </p>
        <p>
          That's taken me from building a 3-layer LSTM to forecast S&P 500 price action, to writing Python pipelines that transform Bloomberg and Albourne data for a pension fund's quant team, to co-founding a SaaS platform with real production traffic. I'm most interested in where AI, data infrastructure, and financial decision-making meet. Not just building models, but building systems people can actually trust and use.
        </p>
        <p>
          Outside of that, I'm usually reading ML research, tinkering with a side project, or figuring out how something works well enough to rebuild it myself.
        </p>
      </div>
    </motion.section>
  )
}

export default About