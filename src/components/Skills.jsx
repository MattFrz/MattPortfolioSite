import Reveal from './Reveal'
import './Skills.css'

const groups = [
  { title: 'Languages', items: ['Python', 'Java', 'JavaScript / TypeScript', 'C / C++', 'SQL'] },
  { title: 'Frameworks & libraries', items: ['React', 'Node.js', 'Flask', 'FastAPI', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'] },
  { title: 'Tools & platforms', items: ['AWS', 'GCP', 'Docker', 'Git', 'GitHub', 'Linux', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB', 'Streamlit', 'Jira'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="section-heading"><p className="eyebrow"><span className="section-number">04</span>Technical skills</p><h2 id="skills-title">The working toolkit.</h2></div>
      <Reveal className="skills-grid">{groups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</Reveal>
    </section>
  )
}
