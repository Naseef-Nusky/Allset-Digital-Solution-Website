import BackgroundBlobs from './BackgroundBlobs'
import SectionLabel from './SectionLabel'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'

export default function PageHero({
  label,
  title,
  highlight,
  lines,
  parts,
  description,
  banner,
  cta,
  ctaTo = '/contact',
  ctaHref,
  ctaVariant = 'primary',
  showArrow = true,
  secondaryCta,
  secondaryCtaTo,
  centered = true,
}) {
  const hasBanner = Boolean(banner)

  return (
    <section
      className={`relative overflow-hidden ${
        hasBanner ? 'flex min-h-[42vh] items-center sm:min-h-[38vh]' : 'bg-white py-16 sm:py-20'
      }`}
    >
      {hasBanner ? (
        <>
          <img
            src={banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/65" />
        </>
      ) : (
        <BackgroundBlobs />
      )}

      <div
        className={`relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8 ${
          centered ? 'text-center' : ''
        }`}
      >
        {label && (
          <SectionLabel className={`mb-3 sm:mb-4 ${hasBanner ? 'text-emerald-400' : ''}`}>
            {label}
          </SectionLabel>
        )}
        <AnimatedTitle
          text={title}
          highlight={highlight}
          lines={lines}
          parts={parts}
          highlightClassName={hasBanner ? 'text-emerald-400' : 'text-emerald-600'}
          className={`font-sans text-4xl font-bold leading-snug tracking-tight sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl ${
            hasBanner ? 'text-white' : 'text-slate-900'
          }`}
        />
        {description && (
          <p
            className={`mt-4 max-w-3xl text-base leading-relaxed sm:mt-5 sm:text-lg ${
              hasBanner ? 'text-slate-200' : 'text-slate-600'
            } ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className={`mt-8 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
            {cta && (
              <Button
                to={ctaHref ? undefined : ctaTo}
                href={ctaHref}
                variant={hasBanner && ctaHref ? 'secondary' : ctaVariant}
                showArrow={showArrow && !ctaHref}
              >
                {cta}
              </Button>
            )}
            {secondaryCta && (
              <Button
                to={secondaryCtaTo}
                variant={hasBanner ? 'secondary' : 'outline'}
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
