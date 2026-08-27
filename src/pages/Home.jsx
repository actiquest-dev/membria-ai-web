import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  automateAreas, steps, techTags, stats, caseStudy, industries,
  whyChoose, testimonials, pricing, faqs
} from '../data'
import { Reveal, SplitTitle, CountUp, Eyebrow, ArrowLink, ArrowUpRight } from '../components/ui'

function Marquee() {
  const logos = ['/img/marquee-1.svg', '/img/marquee-2.svg', '/img/marquee-3.svg']
  const row = [...logos, ...logos]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <Eyebrow num="01" label="intro" />
            <SplitTitle className="hero-title" text="Automate client operations with AI systems" />
            <div className="hero-actions">
              <Link to="/contacts" className="btn btn--dark">
                schedule an assessment <ArrowUpRight />
              </Link>
              <a href="/#process" className="btn btn--ghost">
                how it works
              </a>
            </div>
            <p className="hero-note">
              we built AI automation systems to reduce manual work and scale execution.
            </p>
          </div>
          <div className="hero-media">
            <img src="/img/hero-visual.png" alt="Automation in action at a modern office" />
            <div className="hero-badge">
              <span className="stat">
                <b>30+</b> automations launched
              </span>
              <span className="stat">
                <b>→</b> from lead intake to reporting
              </span>
            </div>
          </div>
        </div>
        <div className="hero-strip">
          <span className="dots">→ → →</span>
          <span>Cut admin time by up to 50%</span>
        </div>
      </div>
    </section>
  )
}

function WhatWeAutomate() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="02" label="areas" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>What we can automate</h2></Reveal>
          </div>
          <Reveal delay={140}>
            <ArrowLink to="/solutions">
              <span>explore all solutions</span>
            </ArrowLink>
          </Reveal>
        </div>
        <div className="grid-2">
          {automateAreas.map((a, i) => (
            <Reveal as="article" className="card" key={a.num} delay={i * 70}>
              <span className="num">{a.num}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <div className="card-media">
                <img src={a.img} alt="" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section dark" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="03" label="process" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>How it works</h2></Reveal>
          </div>
          <Reveal delay={120}><p className="lead" style={{ color: '#ffffffb3' }}>We turn complex workflows into simple, automated systems.</p></Reveal>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal as="article" className="step" key={s.num} delay={i * 70}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <span className="step-line" />
            </Reveal>
          ))}
        </div>
        <div className="flow">
          {techTags.map((t, i) => (
            <Reveal as="article" className="flow-item" key={t.title} delay={i * 70}>
              <div className="tag">{t.title} &gt;</div>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="04" label="results" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>Results of our work</h2></Reveal>
          </div>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal as="article" className="stat-block" key={s.label} delay={i * 80}>
              <div className="value">
                <CountUp end={s.value} suffix={s.unit} />
              </div>
              <div className="label">{s.label}</div>
              <p className="desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="05" label="projects" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>Case studies</h2></Reveal>
          </div>
          <Reveal delay={140}><ArrowLink to="/projects">see all case studies</ArrowLink></Reveal>
        </div>
        <div className="cases-grid">
          <Reveal className="case-visual">
            <img src="/img/project-1.png" alt="Interlock Industries project" loading="lazy" />
            <span className="tagline">project image 1</span>
          </Reveal>
          <div className="case-detail">
            <Reveal className="client">
              <span className="name">{caseStudy.name}</span>
              <span className="sector">{caseStudy.sector}</span>
            </Reveal>
            <Reveal><p>{caseStudy.summary}</p></Reveal>
            <div className="case-cols">
              <Reveal>
                <div className="kicker">problem &gt;</div>
                <ul>
                  {caseStudy.problem.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
              <Reveal>
                <div className="kicker">what we did &gt;</div>
                <ul>
                  {caseStudy.solution.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </Reveal>
              <Reveal>
                <div className="kicker">result &gt;</div>
                <ul className="result">
                  {caseStudy.result.map((r, i) => (
                    <li key={i}>
                      <b>{r}</b> {caseStudy.resultLabel[i]}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="06" label="environments" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>Solutions by industry</h2></Reveal>
          </div>
        </div>
        <div className="industries">
          {industries.map((ind, i) => (
            <Reveal as="article" className="industry" key={ind.title} delay={i * 50}>
              <h3>{ind.title}</h3>
              <ul>
                {ind.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  const tiles = ['/img/marquee-1.svg', '/img/marquee-2.svg', '/img/marquee-3.svg', '/img/logo-strip.png']
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="07" label="stack" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>Integrations</h2></Reveal>
          </div>
        </div>
        <Reveal>
          <div className="logo-cloud">
            {tiles.map((t, i) => (
              <div className="logo-tile" key={i}>
                {t ? <img src={t} alt="" loading="lazy" /> : 'your logo'}
              </div>
            ))}
            <div className="logo-tile">your logo</div>
            <div className="logo-tile">your logo</div>
            <div className="logo-tile">your logo</div>
            <div className="logo-tile">your logo</div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 24 }}>
            We connect your tools into one system, eliminating manual work and saving time.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="08" label="value" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14, maxWidth: '17ch' }}>Why choose us</h2></Reveal>
          </div>
          <Reveal delay={140}><p className="lead">We are focused only on measurable results.</p></Reveal>
        </div>
        <Reveal className="why-media">
          <img src="/img/middle-visual.png" alt="Why choose Oberon" loading="lazy" />
        </Reveal>
        <div className="why-grid">
          {whyChoose.map((w, i) => (
            <Reveal as="article" className="why-item" key={w.idx} delay={i * 60}>
              <span className="idx">{w.idx}</span>
              <h3>{w.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="section dark">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="09" label="testimonials" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>What clients say</h2></Reveal>
          </div>
        </div>
        <div className="testimonial">
          <Reveal>
            <div className="rating">
              <span className="score">4.9</span>
              <div>
                <div className="stars">★★★★★</div>
                <span style={{ fontSize: 14, color: '#ffffffb3' }}>Based on 300 verified reviews</span>
              </div>
            </div>
            <div className="avatar-row" style={{ marginTop: 26 }}>
              <span className="avatar">SM</span>
              <span className="avatar">MC</span>
              <span className="avatar">ER</span>
              <span className="avatar">JD</span>
              <span className="avatar">AK</span>
            </div>
          </Reveal>
          <Reveal delay={80} className="quote-card">
            <p className="quote">“{t.quote}”</p>
            <div className="person">
              <span className="avatar">{t.initials}</span>
              <span className="meta">
                <span className="name">{t.name}</span>
                <br />
                <span className="role">{t.role}</span>
              </span>
            </div>
            <div className="controls">
              <div className="dots-nav">
                {testimonials.map((_, i) => (
                  <button key={i} className={i === idx ? 'active' : ''} aria-label={`Slide ${i + 1}`} onClick={() => setIdx(i)} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="round-btn" onClick={prev} aria-label="Previous" style={{ color: '#fff' }}>←</button>
                <button className="round-btn" onClick={next} aria-label="Next" style={{ color: '#fff' }}>→</button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [annual, setAnnual] = useState(false)
  const priceFor = (base) => {
    const n = parseInt(base.replace(/[^0-9]/g, ''), 10)
    return (n * (annual ? 0.8 : 1)).toLocaleString('en-US')
  }
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="10" label="pricing" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>Pricing</h2></Reveal>
          </div>
          <Reveal delay={120}>
            <div className="dots-nav" style={{ background: 'none' }}>
              <button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)} style={{ height: 34, borderRadius: 999, padding: '0 16px', background: !annual ? 'var(--ink)' : 'var(--line)', color: !annual ? '#fff' : 'var(--ink)' }}>mon</button>
              <button className={annual ? 'active' : ''} onClick={() => setAnnual(true)} style={{ height: 34, borderRadius: 999, padding: '0 16px', background: annual ? 'var(--ink)' : 'var(--line)', color: annual ? '#fff' : 'var(--ink)' }}>ann</button>
            </div>
          </Reveal>
        </div>
        <div className="pricing">
          {pricing.map((p, i) => (
            <Reveal as="article" className={`price-card ${p.featured ? 'featured' : ''}`} key={p.tier} delay={i * 60}>
              {p.pop && <span className="pop">{p.pop}</span>}
              <span className="tier">{p.tier}</span>
              <div>
                <div className="amount">${priceFor(p.amount)}<span style={{ fontSize: 20 }}>/mo</span></div>
                <div className="amount-old">${priceFor(p.old)}</div>
              </div>
              <p className="period" style={{ color: p.featured ? '#ffffffcc' : 'var(--muted-2)' }}>
                {annual ? 'billed annually, per month' : 'billed monthly'}
              </p>
              <Link to="/contacts" className={`btn ${p.featured ? 'btn--accent' : 'btn--dark'}`}>{p.cta}</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow num="11" label="faq" /></Reveal>
            <Reveal delay={80}><h2 className="h2" style={{ marginTop: 14 }}>FAQ</h2></Reveal>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <Reveal className="cta-band" delay={100} style={{ marginTop: 48 }}>
          <h3>Got some other questions?</h3>
          <Link to="/contacts" className="btn btn--dark">send message <ArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeAutomate />
      <HowItWorks />
      <Results />
      <CaseStudies />
      <Industries />
      <Integrations />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Faq />
    </>
  )
}
