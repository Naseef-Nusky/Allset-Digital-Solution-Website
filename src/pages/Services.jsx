import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import QuoteSection from '../components/QuoteSection'
import Button from '../components/Button'
import BackgroundBlobs from '../components/BackgroundBlobs'
import { CheckIcon, FeatureIcon, WarningIcon } from '../components/Icons'
import { pageBanners, servicesList, supportIssues, trades } from '../data/siteData'

export default function Services() {
  return (
    <>
      <PageHero
        banner={pageBanners.services}
        label="Our Services"
        lines={[
          { text: 'Bespoke digital services' },
          {
            parts: [
              { text: 'for UK ' },
              { text: 'small businesses', className: 'text-emerald-400' },
            ],
          },
        ]}
        description="Websites, SEO, hosting and support — everything you need to get found online and win more enquiries, built by a team that actually answers the phone."
        cta="Get My Free Quote"
        ctaTo="/contact"
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <BackgroundBlobs />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Why Choose Us</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Five years of bespoke, coded websites
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                We&apos;ve spent years building websites for tradesmen, salons, restaurants and
                local businesses across the UK. Every site is coded by hand — no templates, no
                page builders, no shortcuts.
              </p>
              <p>
                That means faster loading, better Google rankings and a site that looks exactly
                like your business, not a theme with your logo dropped in.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: 'code', title: '100% bespoke code' },
              { icon: 'speed', title: 'Fast, scalable, and secure' },
              { icon: 'support', title: 'Always there for you' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="bg-brand-icon mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                  <FeatureIcon name={item.icon} />
                </div>
                <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Who We Help</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for tradesmen, labourers and local UK businesses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              If you run a local business and need a website that brings in enquiries, we&apos;re
              built for you.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {trades.map((trade) => (
              <div
                key={trade}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{trade}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4 text-rose-600">Critical Support and Rescue</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Website down? Lost your developer? We can help today.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              If your website has gone offline, been hacked or your developer has disappeared, we
              offer urgent rescue support to get you back online fast.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {supportIssues.map((issue) => (
              <div
                key={issue}
                className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50/50 px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <WarningIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{issue}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact">Contact us for help</Button>
            <Button to="/services/website-design" variant="outline">
              See our support packages
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">What We Do</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need under one roof
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From your first website to ongoing SEO and support, we handle the full digital
              picture so you can focus on running your business.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {servicesList.map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                <CheckIcon className="h-4 w-4 text-emerald-500" />
                {service}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/contact" showArrow>
              Get My Free Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  )
}
