import { useEffect, useRef, useState } from 'react'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function LetterSplit({ text, delay = 0 }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, wi) => (
        <span className="word" key={`${word}-${wi}`} aria-hidden={wi > 0}>
          {word.split('').map((letter, li) => (
            <span
              className="letter"
              key={`${letter}-${li}`}
              style={{ animationDelay: `${delay + wi * 90 + li * 22}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </>
  )
}

export function SplitTitle({ text, className = '', delay = 0 }) {
  return (
    <h1 className={className}>
      <LetterSplit text={text} delay={delay} />
    </h1>
  )
}

export function CountUp({ end, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * end))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Eyebrow({ num, label, dark = false }) {
  return (
    <span className={`eyebrow ${dark ? '' : ''}`}>
      <span className="num">{num}</span>
      {label && (
        <>
          <span className="dot" />
          <span>{label}</span>
        </>
      )}
    </span>
  )
}

export function ArrowLink({ to, children, dark = false }) {
  return (
    <a href={to} className="arrow-link">
      {children}
      <span className="circle">
        <svg viewBox="0 0 12 12" fill="none">
          <path d="M0 6h12M6 0l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </a>
  )
}

export function ArrowUpRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
