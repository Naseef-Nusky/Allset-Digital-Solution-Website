import SectionLabel from './SectionLabel'
import { FeatureIcon } from './Icons'
import { steps } from '../data/siteData'

export default function StepsSection({ title = 'Live in 3 simple steps' }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mb-4">How It Works</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Step {item.step}
              </span>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <FeatureIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
