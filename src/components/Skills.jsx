import { motion } from 'framer-motion'
import './Skills.css'

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript/TypeScript', 'C/C++', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Flask', 'FastAPI', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'AWS',
      'Docker',
      'Git',
      'GitHub',
      'Linux',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Jira',
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-head">
        <span className="eyebrow">04 / Skills</span>
        <h2>Skills</h2>
        <div className="section-rule" />
      </div>

      <div className="skills-grid">
        {groups.map((group, i) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="skill-group-head">
              <h3>{group.title}</h3>
              <span className="skill-count">{String(group.items.length).padStart(2, '0')}</span>
            </div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="chip skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
