import BackgroundBlobs from '../components/BackgroundBlobs'
import SectionLabel from '../components/SectionLabel'
import QuoteForm from '../components/QuoteForm'
import Button from '../components/Button'
import { MailIcon, MapPinIcon, PhoneIcon } from '../components/Icons'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <BackgroundBlobs />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="mb-4">Contact</SectionLabel>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get your free quote
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Tell us what you need. We reply within 24 hours with honest advice and a clear plan.
            </p>
            <div className="mt-8">
              <Button href={PHONE_HREF} variant="outline">
                <PhoneIcon className="h-4 w-4" />
                Call {PHONE}
              </Button>
            </div>
          </div>
        </div>
      </section>

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
