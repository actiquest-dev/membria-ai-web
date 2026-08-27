import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const MotionTag = motion.create(Tag)
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

function LetterSplit({ text, delay = 0 }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, wi) => (
        <span className="word" key={`${word}-${wi}`} aria-hidden={wi > 0}>
          {word.split('').map((letter, li) => (
            <motion.span
              className="letter"
              key={`${letter}-${li}`}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: (delay + wi * 90 + li * 22) / 1000, ease: EASE }}
            >
              {letter}
            </motion.span>
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

export function CountUp({ end, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, end, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v))
    })
    return () => controls.stop()
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Eyebrow({ num, label }) {
  return (
    <span className="eyebrow">
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

export function ArrowLink({ to, children }) {
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