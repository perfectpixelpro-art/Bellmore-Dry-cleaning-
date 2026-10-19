const PHONE = '(516) 656-1221'
const EMAIL = 'chris@bellmoredrycleaner.com'
const ADDRESS = '1904 Newbridge Road, North Bellmore, NY'
const MAP_HREF = 'https://www.google.com/maps/search/?api=1&query=1904+Newbridge+Road%2C+North+Bellmore%2C+NY+11710'

const iconProps = {
  className: 'h-[18px] w-[18px]',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const DETAILS = [
  {
    href: 'tel:+15166561221',
    label: PHONE,
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3 6.5 9 6 9-6" />
      </svg>
    ),
  },
  {
    href: MAP_HREF,
    label: ADDRESS,
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
  },
]

export default function ContactHero() {
  return (
    <>
      <section className="mx-auto max-w-[1920px] px-5 pt-12 pb-10 sm:px-8 lg:px-[60px] lg:pt-16 lg:pb-12 xl:px-[120px] 2xl:px-[250px]">
        <h1 className="h1-service text-center font-extrabold leading-[1.2] tracking-[-0.02em] text-ink">
          <span className="text-brand">Contact Bellmore Dry Cleaner</span>
          <br />
          in North Bellmore, NY
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-center text-[14px] leading-7 text-muted sm:text-[15px] sm:leading-8">
          Looking for dry cleaners near me in North Bellmore, NY? Bellmore Dry
          Cleaner offers dry cleaning, laundry, clothing alterations and bridal
          gown care. We focus on friendly service, fair prices and reliable
          turnaround times. Contact us with questions about our services or pricing.
        </p>
      </section>

      {/* Full-bleed contact strip, so it sits outside the page gutters. */}
      <section className="bg-brand text-white">
        <ul className="mx-auto flex max-w-[1920px] flex-col items-center justify-center gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:gap-8 lg:px-[40px] xl:gap-16 xl:px-[120px]">
          {DETAILS.map((detail) => (
            <li key={detail.label}>
              <a
                href={detail.href}
                {...(detail.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex items-center gap-3 text-[14px] font-semibold transition-opacity hover:opacity-80 sm:text-[15px] lg:whitespace-nowrap"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  {detail.icon}
                </span>
                {detail.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
