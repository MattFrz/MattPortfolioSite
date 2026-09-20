import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import Reveal from './Reveal'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact" aria-labelledby="contact-title" tabIndex={-1}>
      <Reveal className="contact-layout">
        <div><p className="eyebrow"><span className="section-number">05</span>Contact</p><h2 id="contact-title">Let’s talk systems.</h2><p className="contact-intro">Low-latency infrastructure, quantitative research, or a difficult data problem. I’d like to hear what you’re building.</p><p className="contact-location mono">Based in Toronto, ON</p></div>
        <div className="contact-links">
          <a className="contact-link" href="mailto:mattfarzaneh21@gmail.com"><FiMail aria-hidden="true" /><span><span className="contact-label">Email</span>mattfarzaneh21@gmail.com</span><FiArrowUpRight aria-hidden="true" /></a>
          <a className="contact-link" href="tel:+14165757366"><FiPhone aria-hidden="true" /><span><span className="contact-label">Phone</span>416-575-7366</span><FiArrowUpRight aria-hidden="true" /></a>
          <div className="contact-socials"><a className="text-link" href="https://github.com/MattFrz" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><FiGithub aria-hidden="true" />GitHub<FiArrowUpRight aria-hidden="true" /></a><a className="text-link" href="https://www.linkedin.com/in/matt-farzaneh-36153727a/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><FiLinkedin aria-hidden="true" />LinkedIn<FiArrowUpRight aria-hidden="true" /></a></div>
          <a className="contact-link resume-link" href="/resume.pdf" download="Matt-Farzaneh-Resume.pdf"><FiDownload aria-hidden="true" /><span>Download resume<span className="contact-label">PDF / 160 KB</span></span><FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </Reveal>
    </section>
  )
}
