import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import QuoteSection from '../components/QuoteSection'
import StepsSection from '../components/StepsSection'
import { CheckIcon, FeatureIcon } from '../components/Icons'
import { pageBanners, websiteIncludes, whatYouGet } from '../data/siteData'

export default function WebsiteDesign() {
  return (
    <>
      <PageHero
        banner={pageBanners.webDesign}
        label="Website Design"
        lines={[
          { text: 'Affordable websites for' },
          {
            parts: [
              { text: 'UK small businesses ', className: 'text-emerald-400' },
              { text: 'from ' },
              { text: '£200', className: 'text-emerald-400' },
            ],
          },
        ]}
        description="Mobile-first, fast loading and built to bring in enquiries. SEO, copy and free business email all included."
        cta="Get My Free Quote"
        ctaTo="/contact"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What&apos;s included
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No hidden fees. Everything you need to launch a professional website.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {websiteIncludes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Included</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What You Get
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="bg-brand-icon mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StepsSection />
      <QuoteSection />
    </>
  )
}
