import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import StepsSection from '../components/StepsSection'
import AnimatedStats from '../components/AnimatedStats'
import { CheckIcon, FeatureIcon } from '../components/Icons'
import { beliefs, differentiators, pageBanners, stats } from '../data/siteData'

export default function About() {
  return (
    <>
      <PageHero
        banner={pageBanners.about}
        label="About us"
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
                All Set Digital Solutions has over 25 years combined experience designing and
                building websites. In that time we have helped tradesmen, beauty salons, barbers,
                builders, plumbers and brand-new start-ups across the UK get online with sites that
                bring in real enquiries.
              </p>
              <p>
                We specialise in modern, mobile-friendly websites built with the most up-to-date
                coding standards. Every project is hand-crafted from scratch, we never use templates
                and we never cut corners. Your site is yours: customised to your brand, your
                customers and the way you want to be found.
              </p>
              <p>
                And once your site is live, we stay with you. Full support is part of the package, no
                surprise invoices, no awkward conversations about extra fees.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={pageBanners.about}
              alt="A modern UK web design workspace with laptop, notebook and a cup of tea"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedStats stats={stats} className="" />
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
              Most cheap website builders hand you a recycled template and walk away. We do the
              opposite. Every site is written from the ground up using the latest standards in HTML,
              CSS, JavaScript and modern frameworks, so it loads quickly, ranks well and feels
              genuinely yours.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="bg-brand-icon flex h-12 w-12 items-center justify-center rounded-2xl text-white">
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
