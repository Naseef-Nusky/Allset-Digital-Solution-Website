import PageHero from '../components/PageHero'
import QuoteSection from '../components/QuoteSection'
import { CheckIcon } from '../components/Icons'
import { googleAdsFeatures } from '../data/siteData'

export default function GoogleAds() {
  return (
    <>
      <PageHero
        label="Google Ads Management"
        title="Turn Google clicks into paying customers"
        description="ROI-focused Google Ads campaigns built, launched and optimised weekly for UK small businesses."
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
              End-to-end management so you can focus on running your business.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {googleAdsFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  )
}
