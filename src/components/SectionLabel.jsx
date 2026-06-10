export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 ${className}`}>
      {children}
    </p>
  )
}
