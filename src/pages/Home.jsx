import Button from '../components/Button'
import SectionLabel from '../components/SectionLabel'
import QuoteSection from '../components/QuoteSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { CheckIcon } from '../components/Icons'
import { homeStats, industries } from '../data/siteData'

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src="/hero.jpeg"
          alt="Modern office workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modern websites{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-300 bg-clip-text text-transparent">
              that grow with you
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            We design, build and support coded websites for UK small businesses. No templates,
            no jargon, no surprise invoices.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" showArrow>
              Start your project
            </Button>
            <Button to="/services" variant="secondary">
              Explore our services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">What We Do</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Websites built around your <span className="text-emerald-600">business</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Bespoke, coded websites with SEO, copy and support included. Built for tradesmen,
              salons, startups and local businesses across the UK.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-emerald-600">{stat.value}</p>
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
            <SectionLabel className="mb-4">Who We Help</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for UK <span className="text-emerald-600">Small Businesses</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 py-3">
                  <span className="text-sm font-semibold text-slate-800">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel className="mb-4">Our Promise</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A real team. Real support. Real results.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We&apos;re a small team that builds websites by hand, answers the phone, and stays
              around after launch. No templates, no outsourcing, no disappearing acts.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Bespoke design and copy, written by people who care.',
                'Ongoing support included, no extra fees.',
                'Built on modern, lightning fast code.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/about" showArrow>
                Learn more about us
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/hero.jpeg"
              alt="Team working together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <QuoteSection />
    </>
  )
}
