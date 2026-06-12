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
        hasBanner
          ? 'flex max-h-[calc(100dvh-4.5rem)] min-h-[36vh] items-center sm:min-h-[40vh]'
          : 'bg-white py-16 sm:py-20'
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
        className={`relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 ${
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
          className={`text-balance font-hero text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl ${
            hasBanner ? 'text-white' : 'text-slate-900'
          }`}
        />
        {description && (
          <p
            className={`mt-3 max-w-3xl text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg ${
              hasBanner ? 'text-slate-200' : 'text-slate-600'
            } ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div
            className={`mt-5 flex gap-2 sm:mt-6 sm:gap-4 ${
              secondaryCta ? 'flex-nowrap items-stretch' : 'flex-wrap'
            } ${centered ? 'justify-center' : ''}`}
          >
            {cta && (
              <Button
                to={ctaHref ? undefined : ctaTo}
                href={ctaHref}
                variant={hasBanner && ctaHref ? 'secondary' : ctaVariant}
                showArrow={showArrow && !ctaHref && !secondaryCta}
                className={
                  secondaryCta
                    ? 'flex-1 whitespace-nowrap px-2.5 py-2.5 text-[11px] min-[400px]:text-xs sm:flex-none sm:px-6 sm:py-3 sm:text-sm'
                    : ''
                }
              >
                {cta}
              </Button>
            )}
            {secondaryCta && (
              <Button
                to={secondaryCtaTo}
                variant={hasBanner ? 'secondary' : 'outline'}
                className="flex-1 whitespace-nowrap px-2.5 py-2.5 text-[11px] min-[400px]:text-xs sm:flex-none sm:px-6 sm:py-3 sm:text-sm"
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
