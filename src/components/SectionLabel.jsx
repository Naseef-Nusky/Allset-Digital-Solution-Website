export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-emerald-600 sm:text-xs sm:tracking-[0.2em] ${className}`}>
      {children}
    </p>
  )
}
