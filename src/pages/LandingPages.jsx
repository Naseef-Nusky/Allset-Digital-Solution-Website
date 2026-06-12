import BackgroundBlobs from '../components/BackgroundBlobs'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import QuoteSection from '../components/QuoteSection'
import StepsSection from '../components/StepsSection'
import { CheckIcon, FeatureIcon } from '../components/Icons'
import { landingPageFeatures, landingPageIncludes, pageBanners } from '../data/siteData'

export default function LandingPages() {
  return (
    <>
      <PageHero
        banner={pageBanners.landingPages}
        label="Landing Page Design"
        lines={[
          { text: 'Landing pages that turn', lineClassName: 'text-white' },
          {
            text: 'clicks into customers',
            lineClassName:
              'bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent',
          },
        ]}
        description="Conversion-focused landing pages for UK small businesses. Built in 48 hours with persuasive copy, fast load speeds and a clear call-to-action."
        cta="Get My Free Quote"
        ctaTo="/contact"
      />

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <BackgroundBlobs />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Why It Works</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Designed for{' '}
              <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                one
              </span>{' '}
              job
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every pound you spend on ads works harder when the page is built to convert.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {landingPageFeatures.map((item) => (
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What&apos;s included
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to launch a landing page that actually converts.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {landingPageIncludes.map((item) => (
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

      <StepsSection
        title={
          <>
            Live in{' '}
            <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              3
            </span>{' '}
            simple steps
          </>
        }
      />
      <QuoteSection />
    </>
  )
}
