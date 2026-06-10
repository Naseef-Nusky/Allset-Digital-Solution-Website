import BackgroundBlobs from './BackgroundBlobs'
import SectionLabel from './SectionLabel'
import Button from './Button'

export default function PageHero({
  label,
  title,
  highlight,
  description,
  cta,
  ctaTo = '/contact',
  secondaryCta,
  secondaryCtaTo,
  centered = true,
}) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <BackgroundBlobs />
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${centered ? 'text-center' : ''}`}>
        {label && (
          <SectionLabel className={centered ? 'mb-4' : 'mb-4'}>{label}</SectionLabel>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {highlight ? (
            <>
              {titleParts[0]}
              <span className="text-emerald-600">{highlight}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {description && (
          <p className={`mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className={`mt-8 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
            {cta && (
              <Button to={ctaTo} showArrow>
                {cta}
              </Button>
            )}
            {secondaryCta && (
              <Button to={secondaryCtaTo} variant="outline">
                {secondaryCta}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
