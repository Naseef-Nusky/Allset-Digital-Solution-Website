import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import QuoteSection from '../components/QuoteSection'
import Button from '../components/Button'
import BackgroundBlobs from '../components/BackgroundBlobs'
import { ArrowRightIcon, CheckIcon, FeatureIcon, PhoneIcon, WarningIcon } from '../components/Icons'
import {
  pageBanners,
  PHONE,
  PHONE_HREF,
  serviceCards,
  servicesList,
  trades,
  whyWorkWithUs,
} from '../data/siteData'

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
        description="Over five years building coded websites and digital solutions for tradesmen, labourers, salons and start ups across the UK. No templates, no jargon, no surprise fees."
        cta="Get My Free Quote"
        ctaTo="/contact"
        secondaryCta="Explore what we offer"
        secondaryCtaTo="#services-offer"
      />

      <section id="services-offer" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Our Services</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore what we offer
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="bg-brand-icon flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                  <FeatureIcon name={service.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link
                  to={service.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <BackgroundBlobs />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Why Work With Us</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Five years of bespoke, coded websites
            </h2>
            <div className="mt-6 space-y-4 text-left text-lg leading-relaxed text-slate-600 sm:text-center">
              <p>
                All Set Digital Solutions has been designing, building and supporting websites for
                UK small businesses for over five years. In that time we have helped hundreds of
                tradesmen, labourers, salons, shops and brand new start ups get online with sites
                that bring in real enquiries, not just compliments.
              </p>
              <p>
                Every single project is coded from scratch. We do not use WordPress templates, drag
                and drop builders or recycled themes. Each website is custom written using the
                latest web standards so it loads quickly, ranks well on Google and feels genuinely
                yours, not a copy of every other small business site online.
              </p>
              <p>
                Whether you need a one page brochure, a full multi page website with online
                booking, local SEO to climb the Google rankings or paid Google Ads to bring instant
                enquiries, everything is delivered by the same small UK team that picks up the phone
                when you call. No outsourcing, no call centres, no ticket numbers.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyWorkWithUs.map((item) => (
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Who We Help</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for tradesmen, labourers and local UK businesses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Most of our customers are honest, hard working small businesses who just want a website
              that actually does its job. We speak plain English, work fast and never charge agency
              prices. If you run a small UK business, you are exactly who we built this for.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {trades.map((trade, index) => (
              <div
                key={trade}
                className={`flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm ${
                  index === trades.length - 1 ? 'mx-auto w-full max-w-md sm:col-span-2' : ''
                }`}
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
          <div className="flex flex-col gap-8 rounded-3xl border border-rose-100 bg-[#fff5f5] p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-10 lg:p-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
                <WarningIcon className="h-3.5 w-3.5 shrink-0" />
                Emergency Support
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Website down or lost your developer?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We offer fast, no nonsense help to get you back online, often the same day.
              </p>
            </div>
            <div className="flex w-full flex-nowrap items-stretch gap-2 sm:w-auto sm:gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-emerald-500 px-3 py-2.5 text-xs font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-600 sm:flex-none sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
              >
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Call now
              </a>
              <Link
                to="/contact"
                className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 sm:flex-none sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
              >
                Emergency enquiry
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Want to hear more about what we can do?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether it is a new website, a rebrand, or just advice on getting more customers online,
            we are happy to chat. No pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-nowrap items-stretch justify-center gap-2 sm:gap-4">
            <Button
              to="/contact"
              showArrow
              className="flex-1 whitespace-nowrap px-3 py-2.5 text-xs sm:flex-none sm:px-6 sm:py-3 sm:text-sm"
            >
              Get my free quote
            </Button>
            <Button
              href={PHONE_HREF}
              variant="outline"
              className="flex-1 whitespace-nowrap px-3 py-2.5 text-xs sm:flex-none sm:px-6 sm:py-3 sm:text-sm"
            >
              <PhoneIcon className="h-3.5 w-3.5 shrink-0 sm:hidden" />
              <span className="hidden sm:inline">Call us: </span>
              {PHONE}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">What We Offer</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need under one roof
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Alongside bespoke web design we offer search engine optimisation, Google Ads
                management, logo and brand design, website redesigns and rescues, landing pages,
                social media management, business email setup and ongoing support. If it is part of
                getting a small UK business online and bringing in customers, the chances are we
                already do it.
              </p>
              <p>
                Rather than dump every service in a long list, we prefer to chat first. Tell us what
                you need, what is and is not working, and we will put together an honest plan with a
                clear price. No upsells, no padded packages.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            {servicesList.map((service) => (
              <span
                key={service}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-2 text-center text-[0.7rem] font-medium leading-tight text-slate-700 shadow-sm min-[400px]:text-xs sm:justify-start sm:px-4 sm:py-2 sm:text-sm"
              >
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                {service}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/contact" showArrow>
              Get my free quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  )
}
