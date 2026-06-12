export default function AnimatedStats({ stats }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:rounded-3xl sm:p-6"
        >
          <p className="text-2xl font-bold text-emerald-600 tabular-nums sm:text-3xl">{stat.value}</p>
          <p className="mt-1.5 text-[0.65rem] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:mt-2 sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
