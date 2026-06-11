import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  showArrow = false,
  animated = false,
  className = '',
  type = 'button',
  onClick,
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-500/20',
    secondary: 'border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
    outline: 'border border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700',
    white: 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700',
  }

  const classes = `${base} ${variants[variant]} ${animated ? 'animate-btn-pulse hover:scale-105 active:scale-95' : ''} ${className}`

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
