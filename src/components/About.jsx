import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="about-layout"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-aside">
          <div className="section-head">
            <span className="eyebrow">01 / About</span>
            <h2>About Me</h2>
            <div className="section-rule" />
          </div>
        </div>

        <div className="about-content">
          <p className="lead">
            I'm a CS student at Western University, and my path into fintech started with a simple realization: the instinct that makes me automate a boring task is the same one that works on markets. Find the inefficiency, build the system, let it run.
          </p>
          <p>
            That's taken me from building a 3-layer LSTM to forecast S&P 500 price action, to writing Python pipelines that transform Bloomberg and Albourne data for a pension fund's quant team, to co-founding a SaaS platform with real production traffic. I'm most interested in where AI, data infrastructure, and financial decision-making meet. Not just building models, but building systems people can actually trust and use.
          </p>
          <p>
            Outside of that, I'm usually reading ML research, tinkering with a side project, or figuring out how something works well enough to rebuild it myself.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
