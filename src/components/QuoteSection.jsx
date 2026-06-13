import SectionLabel from './SectionLabel'
import QuoteForm from './QuoteForm'
import BackgroundBlobs from './BackgroundBlobs'

export default function QuoteSection({ title = 'Get your free quote' }) {
  return (
    <section id="quote" className="relative overflow-hidden scroll-mt-24 bg-white py-16 sm:py-20">
      <BackgroundBlobs />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mb-4">Free Quote</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <QuoteForm source="Website - Quote Section" />
        </div>
      </div>
    </section>
  )
}
