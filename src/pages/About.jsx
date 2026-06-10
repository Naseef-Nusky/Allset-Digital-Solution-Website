import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import StepsSection from '../components/StepsSection'
import { CheckIcon, FeatureIcon } from '../components/Icons'
import { beliefs, differentiators, stats } from '../data/siteData'

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Bespoke websites for UK small businesses"
        highlight="small businesses"
        description="Over 25 years combined experience building modern, mobile-friendly sites, coded, never templated, and fully supported."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel className="mb-4">Our Story</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Over 25 years combined experience building websites that actually work
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                We started All Set Digital Solutions because small businesses deserve better than
                template websites and agencies that disappear after launch.
              </p>
              <p>
                Every site we build is hand-crafted from scratch — no page builders, no themes with
                your logo dropped in. Mobile-friendly, fast loading and built to bring in enquiries.
              </p>
              <p>
                We stay around after go-live with honest support, clear pricing and a team that
                actually picks up the phone.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/hero.jpeg"
              alt="Workspace with laptop showing code"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">What Makes Us Different</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Coded, modern and built to last
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We write every line of code ourselves. That means faster sites, better SEO and
              complete control over how your business looks online.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4">What We Believe</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Honest, affordable, properly supported
          </h2>
          <ul className="mt-10 space-y-4">
            {beliefs.map((belief) => (
              <li
                key={belief}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StepsSection title="Live in 3 simple steps" />
    </>
  )
}
