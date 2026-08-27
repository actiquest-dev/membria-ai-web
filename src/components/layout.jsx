import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import { ArrowUpRight } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container bar">
        <Link to="/" className="brand" aria-label="Oberon home">
          <span className="brand-mark">
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M0 6h12M6 0l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          Oberon
        </Link>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
          <a className="nav-cta" href="/contacts">
            book a call <ArrowUpRight />
          </a>
        </nav>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link to="/contacts" onClick={() => setOpen(false)}>
          book a call
        </Link>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg" aria-hidden="true">
        <img src="/img/footer-visual.png" alt="" loading="lazy" />
      </div>
      <div className="container">
        <div className="footer-head">
          <div className="footer-brand">
            <h2>Automate client operations with AI tools</h2>
            <a className="email-link" href="mailto:hello@oberon.agency">
              hello@oberon.agency
            </a>
          </div>
          <div className="footer-nav" aria-label="Footer">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
            <Link to="/legal/privacy-policy">privacy policy</Link>
            <Link to="/legal/terms-of-service">terms of service</Link>
          </div>
          <form className="foot-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="YOUR NAME" aria-label="Name" />
            <input type="email" placeholder="EMAIL@ADDRESS.COM" aria-label="Email" />
            <button type="submit" className="btn btn--accent">
              let&apos;s talk
            </button>
          </form>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Oberon. All rights reserved.</span>
          <div className="socials">
            <a href="https://x.com" rel="noopener noreferrer" target="_blank">X</a>
            <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">LN</a>
            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">FB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
