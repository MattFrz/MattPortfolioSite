import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className, id }) {
  const reduced = useReducedMotion()
  const style = getComputedStyle(document.documentElement)
  const ease = style.getPropertyValue('--ease').match(/[\d.]+/g).map(Number)
  const duration = parseFloat(style.getPropertyValue('--duration-enter')) / 1000
  return (
    <Motion.div id={id} className={className}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration, ease }}>
      {children}
    </Motion.div>
  )
}
