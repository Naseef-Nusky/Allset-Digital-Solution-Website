import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { QuoteIcon, StarIcon } from './Icons'
import { testimonials } from '../data/siteData'
import BackgroundBlobs from './BackgroundBlobs'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mb-4">Reviews</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Real results for real <span className="text-emerald-600">small businesses</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by tradesmen, salons and local businesses across the UK.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm sm:flex-row sm:gap-6">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-6 w-6" />
              ))}
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-slate-900">5.0</p>
              <p className="text-sm text-slate-500">Average from happy customers across the UK</p>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="mt-12 lg:hidden">
          <ReviewCard review={testimonials[active]} featured />
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((review, index) => (
              <button
                key={review.name}
                type="button"
                aria-label={`Show review from ${review.name}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? 'w-8 bg-emerald-500' : 'w-2.5 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review, featured = false }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8 ${
        featured ? 'mx-auto max-w-xl' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <QuoteIcon className="h-8 w-8 shrink-0 text-emerald-500" />
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {review.industry}
        </span>
      </div>

      <div className="mt-4 flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="h-4 w-4" />
        ))}
      </div>

      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-700 sm:text-lg">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <footer className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${review.color}`}
        >
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{review.name}</p>
          <p className="text-sm text-slate-500">
            {review.role} — {review.location}
          </p>
        </div>
      </footer>
    </article>
  )
}
