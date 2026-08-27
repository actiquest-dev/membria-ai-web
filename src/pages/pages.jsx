import { Link } from 'react-router-dom'
import { Reveal, Eyebrow, ArrowUpRight } from '../components/ui'
import { industries, automateAreas } from '../data'

export function PageHero({ num, label, title, lead }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal><Eyebrow num={num} label={label} /></Reveal>
        <Reveal delay={80}><h1>{title}</h1></Reveal>
        {lead && <Reveal delay={140}><p className="lead" style={{ marginTop: 22 }}>{lead}</p></Reveal>}
      </div>
    </section>
  )
}

export function About() {
  return (
    <>
      <PageHero
        num="01"
        label="about"
        title="We build AI systems around how you work"
        lead="Oberon is an AI automation agency that turns repetitive operations into intelligent systems — reducing manual work and creating scalable processes built for long-term growth."
      />
      <section className="page-body">
        <div className="container">
          <div className="prose">
            <h2>Strategy before automation</h2>
            <p>We start by auditing your workflows, tools, and data flows. Understanding where time is lost — in lead intake, support, scheduling, or reporting — lets us design automation that solves real business problems rather than layering technology on top of them.</p>
            <h2>Built around your team</h2>
            <p>Every system is fitted to the way your team already operates. That means fast adoption, minimal disruption, and automations your people actually want to use.</p>
            <h2>Focused on measurable results</h2>
            <p>From the first sprint we track outcomes: faster response times, fewer manual hours, and cleaner data. We launch early, monitor performance, and keep refining the system to improve results over time.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export function Solutions() {
  return (
    <>
      <PageHero
        num="02"
        label="solutions"
        title="Automation, sized to your industry"
        lead="Bespoke AI systems for the workflows that slow teams down the most."
      />
      <section className="page-body">
        <div className="container">
          <div className="industries">
            {industries.map((ind, i) => (
              <Reveal as="article" className="industry" key={ind.title} delay={i * 40}>
                <h3>{ind.title}</h3>
                <ul>
                  {ind.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><h2 className="h2" style={{ marginBottom: 28 }}>Core capabilities</h2></Reveal>
          <div className="grid-2">
            {automateAreas.map((a, i) => (
              <Reveal as="article" className="card" key={a.num} delay={i * 60}>
                <span className="num">{a.num}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Projects() {
  const projects = [
    { img: '/img/project-1.png', name: 'Interlock Industries', sector: 'E-commerce', result: '30% time saved' },
    { img: '/img/project-2.png', name: 'LAMA Auto', sector: 'Automotive', result: '45% more leads' },
    { img: '/img/project-3.png', name: 'Horizon Systems', sector: 'Science & research', result: '30% lower cost' },
    { img: '/img/project-4.png', name: 'BrightScale', sector: 'Marketing agency', result: '20+ hrs saved weekly' }
  ]
  return (
    <>
      <PageHero
        num="05"
        label="projects"
        title="Case studies"
        lead="A selection of automation systems we have designed, built, and measured."
      />
      <section className="page-body">
        <div className="container">
          <div className="grid-2">
            {projects.map((p, i) => (
              <Reveal as="article" className="card" key={p.name} delay={i * 60}>
                <div className="card-media" style={{ aspectRatio: 1.6 }}>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <h3 style={{ marginTop: 8 }}>{p.name}</h3>
                <p>{p.sector} · <span style={{ color: 'var(--accent)' }}>{p.result}</span></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Contacts() {
  return (
    <>
      <PageHero
        num="06"
        label="contacts"
        title="Schedule a free assessment"
        lead="Tell us where your team loses the most time, and we will show you how to automate it."
      />
      <section className="page-body">
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal>
            <form className="foot-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will be in touch shortly.') }} style={{ gap: 16 }}>
              <input type="text" placeholder="YOUR NAME" aria-label="Name" style={{ border: '1px solid var(--line)' }} />
              <input type="email" placeholder="EMAIL@ADDRESS.COM" aria-label="Email" style={{ border: '1px solid var(--line)' }} />
              <textarea
                placeholder="TELL US ABOUT YOUR WORKFLOW"
                aria-label="Message"
                rows={5}
                style={{
                  background: 'transparent', border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                  padding: '16px 20px', fontFamily: 'inherit', fontSize: 15, color: 'var(--ink)', resize: 'vertical'
                }}
              />
              <button type="submit" className="btn btn--accent" style={{ justifyContent: 'center' }}>
                let&apos;s talk <ArrowUpRight />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const legal = [
  {
    title: 'Privacy Policy',
    body: [
      'This is a demo privacy policy for the Oberon template. We collect only the information you actively share with us — for example a name and email you submit through a contact form.',
      'That information is used solely to respond to your enquiry and is never sold or shared with third parties for marketing purposes.',
      'If you would like your information updated or removed, contact us at hello@oberon.agency and we will action your request promptly.'
    ]
  },
  {
    title: 'Terms of Service',
    body: [
      'This site is provided for demonstration purposes. Content is illustrative and does not constitute professional, legal, or financial advice.',
      'By using this site you agree not to misuse it, attempt to disrupt service, or resell its content.',
      'All branding, imagery, and copy remain the property of their respective owners.'
    ]
  }
]

export function PrivacyPolicy() {
  const l = legal[0]
  return (
    <>
      <PageHero num="⋅" label="legal" title={l.title} />
      <section className="page-body">
        <div className="container"><div className="prose">{l.body.map((p) => <p key={p}>{p}</p>)}</div></div>
      </section>
    </>
  )
}

export function TermsOfService() {
  const l = legal[1]
  return (
    <>
      <PageHero num="⋅" label="legal" title={l.title} />
      <section className="page-body">
        <div className="container"><div className="prose">{l.body.map((p) => <p key={p}>{p}</p>)}</div></div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal><Eyebrow num="404" label="not found" /></Reveal>
        <Reveal delay={80}><h1>This page does not exist</h1></Reveal>
        <Reveal delay={140}>
          <p className="lead" style={{ marginTop: 22 }}>The link may be broken or the page may have moved.</p>
          <Link to="/" className="btn btn--dark" style={{ marginTop: 28 }}>back home</Link>
        </Reveal>
      </div>
    </section>
  )
}
