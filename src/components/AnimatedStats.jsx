import { useEffect, useRef, useState } from 'react'

function parseStatValue(value) {
  if (value.startsWith('£')) {
    return { end: Number.parseInt(value.slice(1), 10), prefix: '£', suffix: '' }
  }
  if (value.endsWith('+')) {
    return { end: Number.parseInt(value, 10), prefix: '', suffix: '+' }
  }
  if (value.endsWith('%')) {
    return { end: Number.parseInt(value, 10), prefix: '', suffix: '%' }
  }
  if (value.includes('days')) {
    return { end: Number.parseInt(value, 10), prefix: '', suffix: ' days' }
  }
  return { end: Number.parseInt(value, 10) || 0, prefix: '', suffix: '' }
}

function useInView() {
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
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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

function useCountUp(end, start, reducedMotion, duration = 1600) {
  const [count, setCount] = useState(start ? end : 0)

  useEffect(() => {
    if (!start) {
      setCount(0)
      return undefined
    }

    if (reducedMotion) {
      setCount(end)
      return undefined
    }

    setCount(0)
    let frameId
    const begin = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(eased * end))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [start, end, duration, reducedMotion])

  return count
}

function StatCard({ stat, index, visible, reducedMotion }) {
  const { end, prefix, suffix } = parseStatValue(stat.value)
  const count = useCountUp(end, visible, reducedMotion)

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:rounded-3xl sm:p-6 ${
        reducedMotion ? '' : 'transition-all duration-700 ease-out'
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: reducedMotion ? '0ms' : `${index * 150}ms` }}
    >
      <p className="text-2xl font-bold text-emerald-600 tabular-nums sm:text-3xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-1.5 text-[0.65rem] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:mt-2 sm:text-xs">
        {stat.label}
      </p>
    </div>
  )
}

export default function AnimatedStats({ stats, className = 'mt-8 sm:mt-12' }) {
  const { ref, inView } = useInView()
  const reducedMotion = useReducedMotion()
  const visible = inView || reducedMotion

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 ${className}`}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          index={index}
          visible={visible}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  )
}
