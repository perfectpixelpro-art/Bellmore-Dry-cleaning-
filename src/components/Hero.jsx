import Img from './Img'

const HIGHLIGHTS = [
  { icon: '/assets/icons/hero1icon.webp', lines: ['Same day', 'service'] },
  { icon: '/assets/icons/hero2icon.webp', lines: ['Tailor on the', 'premises'] },
  { icon: '/assets/icons/hero3icon.webp', lines: ['4x on', 'Google'] },
]

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pt-12 pb-16 sm:px-8 lg:px-[60px] lg:pt-16 lg:pb-24 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 2xl:gap-32">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="h1-hero font-extrabold leading-[1.12] tracking-[-0.02em] text-ink">
            <span className="text-brand">Best Dry Cleaner</span> in
            <br />
            North Bellmore, NY
          </h1>

          <p className="mt-6 text-[17px] leading-8 text-muted">
            Need your clothes cleaned in a hurry? Drop off your items by 9 AM for
            same-day service. Most other orders are ready within 3 to 4 days.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+15166561221"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Call (516) 656-1221
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=1904+Newbridge+Road%2C+North+Bellmore%2C+NY+11710"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand/40 px-7 py-3.5 text-[15px] font-semibold text-brand transition-colors hover:bg-brand-soft"
            >
              Get directions
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-6">
            {HIGHLIGHTS.map((item, i) => (
              <li
                key={item.lines.join(' ')}
                className={`flex items-center gap-3 ${i > 0 ? 'sm:border-l sm:border-line sm:pl-6' : ''}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Img src={item.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
                </span>
                <span className="text-[14px] font-medium leading-5 text-ink/80">
                  {item.lines[0]}
                  <br />
                  {item.lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[520px] justify-self-center lg:justify-self-end">
          <Img
            src="/assets/images/herobell.webp"
            alt="Freshly laundered shirts on hangers at Bellmore Dry Cleaner"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
