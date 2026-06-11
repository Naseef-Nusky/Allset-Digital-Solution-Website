import { useEffect, useRef, useState } from 'react'

function parseStatValue(value) {
  if (value.endsWith('+')) {
    return { end: Number.parseInt(value, 10), suffix: '+' }
  }
  if (value.endsWith('%')) {
    return { end: Number.parseInt(value, 10), suffix: '%' }
  }
  if (value.includes('days')) {
    return { end: Number.parseInt(value, 10), suffix: ' days' }
  }
  return { end: Number.parseInt(value, 10) || 0, suffix: '' }
}

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const onChange = (event) => setReduced(event.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function useCountUp(end, active, reducedMotion, duration = 1400) {
  const [count, setCount] = useState(reducedMotion ? end : 0)

  useEffect(() => {
    if (!active) return undefined

    if (reducedMotion) {
      setCount(end)
      return undefined
    }

    let frameId
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(eased * end))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [active, end, duration, reducedMotion])

  return count
}

function StatCard({ stat, index, active, reducedMotion }) {
  const { end, suffix } = parseStatValue(stat.value)
  const count = useCountUp(end, active, reducedMotion)

  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm ${
        reducedMotion ? '' : 'transition-all duration-700'
      } ${active ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: reducedMotion ? '0ms' : `${index * 120}ms` }}
    >
      <p className="text-3xl font-bold text-emerald-600 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {stat.label}
      </p>
    </div>
  )
}

export default function AnimatedStats({ stats }) {
  const { ref, inView } = useInView()
  const reducedMotion = useReducedMotion()
  const active = inView || reducedMotion

  return (
    <div ref={ref} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          index={index}
          active={active}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  )
}
