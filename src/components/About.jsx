import Reveal from './Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section-shell about" aria-labelledby="about-title" tabIndex={-1}>
      <Reveal className="about-layout">
        <div className="about-aside">
          <p className="eyebrow"><span className="section-number">01</span>About</p>
          <h2 id="about-title">Build it.<br />Measure it.<br />Check the assumptions.</h2>
          <figure className="about-illustration">
            <img src="/images/toronto-editorial.webp" width="768" height="512" loading="lazy" decoding="async" alt="Architectural illustration of Toronto's skyline with the CN Tower and financial district." />
            <figcaption><span>Toronto, ON</span><span>AI illustration</span></figcaption>
          </figure>
        </div>
        <div className="about-content">
          <p className="about-lead">I work on systems where the details change the result: when a filing became available, where an order sits in the queue, or how a dataset gets to the desk.</p>
          <p>At UPP, I build data infrastructure for the Public Markets Quant team. Outside that work, I’m testing execution assumptions in C++ and building research tools that have to show their sources.</p>
          <div className="education"><span className="eyebrow">Education</span><h3>Western University</h3><p>B.Sc. Honors Computer Science<br />Minor in Software Engineering</p><span className="mono">Expected April 2028</span></div>
        </div>
      </Reveal>
    </section>
  )
}
