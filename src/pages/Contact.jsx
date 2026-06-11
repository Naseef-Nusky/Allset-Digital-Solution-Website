import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import QuoteForm from '../components/QuoteForm'
import { MailIcon, MapPinIcon, PhoneIcon } from '../components/Icons'
import { EMAIL, EMAIL_HREF, pageBanners, PHONE, PHONE_HREF } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHero
        banner={pageBanners.contact}
        label="Contact"
        title="Get your free quote"
        description="Tell us what you need. We reply within 24 hours with honest advice and a clear plan."
        cta={`Call ${PHONE}`}
        ctaHref={PHONE_HREF}
        showArrow={false}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel className="mb-4">Free Quote</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s get your business all set.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Tell us a bit about what you need. We&apos;ll reply within 24 hours with honest advice
              and a clear quote, zero pressure to commit.
            </p>
            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 text-slate-700 transition hover:text-emerald-600"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <PhoneIcon />
                  </span>
                  <span className="font-medium">{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-4 text-slate-700 transition hover:text-emerald-600"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <MailIcon />
                  </span>
                  <span className="font-medium">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-700">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <MapPinIcon />
                </span>
                <span className="font-medium">Serving small businesses across the UK</span>
              </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
