const PHONE = '(516) 656-1221'
const PHONE_HREF = 'tel:+15166561221'
const EMAIL = 'chris@bellmoredrycleaner.com'
const EMAIL_HREF = 'mailto:chris@bellmoredrycleaner.com'

// These banners are single pieces of artwork with the buttons drawn into them.
// Both current banners come from the same template, so the defaults below are
// the positions measured from the PNGs; pass `hotspots` for artwork that
// places its buttons elsewhere. Below lg the drawn buttons are too small to
// tap, so real buttons render underneath instead.
const DEFAULT_HOTSPOTS = {
  call: { left: '4.72%', top: '73%', width: '18.26%', height: '12.4%' },
  email: { left: '24.38%', top: '73%', width: '26.62%', height: '12.5%' },
}

export default function CtaBanner({ image, alt, hotspots = DEFAULT_HOTSPOTS }) {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={image} alt={alt} loading="lazy" className="w-full" />

        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE}`}
          style={hotspots.call}
          className="absolute hidden rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 lg:block"
        />
        <a
          href={EMAIL_HREF}
          aria-label={`Email ${EMAIL}`}
          style={hotspots.email}
          className="absolute hidden rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 lg:block"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3 lg:hidden">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Call {PHONE}
        </a>
        <a
          href={EMAIL_HREF}
          className="inline-flex items-center justify-center rounded-full border border-brand/40 px-6 py-3 text-[14px] font-semibold text-brand transition-colors hover:bg-brand-soft"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  )
}
