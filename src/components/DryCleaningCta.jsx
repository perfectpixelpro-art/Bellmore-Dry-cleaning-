import Img from './Img'

// The banner is a single piece of artwork; the two anchors sit over the phone
// and email buttons drawn into it, positioned as percentages so they track the
// image at any width.
const HOTSPOTS = [
  {
    href: 'tel:+15166561221',
    label: 'Call (516) 656-1221',
    style: { left: '3%', top: '69.3%', width: '18.1%', height: '10.4%' },
  },
  {
    href: 'mailto:chris@bellmoredrycleaner.com',
    label: 'Email chris@bellmoredrycleaner.com',
    style: { left: '22.7%', top: '69.3%', width: '26.3%', height: '10.4%' },
  },
]

export default function DryCleaningCta() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="relative overflow-hidden rounded-3xl">
        <Img
          src="/assets/images/DryCleaningsection.webp"
          alt="Fast, reliable dry cleaning in Bellmore, NY for your busy schedule. Got a suit for Friday or a stack of shirts that need pressing? Bring them in by 9 AM and we can have them ready the same day. Everything else takes 3 to 4 days."
          loading="lazy"
          className="w-full"
        />

        {HOTSPOTS.map((hotspot) => (
          <a
            key={hotspot.href}
            href={hotspot.href}
            aria-label={hotspot.label}
            style={hotspot.style}
            className="absolute hidden rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 lg:block"
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 lg:hidden">
        <a
          href="tel:+15166561221"
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Call (516) 656-1221
        </a>
        <a
          href="mailto:chris@bellmoredrycleaner.com"
          className="inline-flex items-center justify-center rounded-full border border-brand/40 px-6 py-3 text-[14px] font-semibold text-brand transition-colors hover:bg-brand-soft"
        >
          chris@bellmoredrycleaner.com
        </a>
      </div>
    </section>
  )
}
