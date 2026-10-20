import Img from './Img'

const PHONE = '(516) 656-1221'
const PHONE_HREF = 'tel:+15166561221'
const EMAIL = 'info@bellmoredrycleaner.com'
const EMAIL_HREF = 'mailto:info@bellmoredrycleaner.com'

// These banners are single pieces of artwork with the buttons drawn into them,
// and the drawn email button still shows the old address. So rather than
// invisible hotspots, real buttons are painted over the drawn ones at the
// positions measured from the PNGs — the live text then always matches
// EMAIL/PHONE below. Pass `hotspots` for artwork that places its buttons
// elsewhere. Below lg the banner is too small to read, so the buttons are
// hidden there and a normal row renders underneath instead.
// Measured off the artwork as plain percentages. BLEED grows each box a hair
// so the painted button is fully hidden underneath — without it the drawn
// pill's own outline shows around the live one as a second border.
const DEFAULT_HOTSPOTS = {
  call: { left: 4.72, top: 73.02, width: 18.26, height: 12.33 },
  email: { left: 24.38, top: 73.02, width: 26.62, height: 12.5 },
}

const BLEED = { x: 0.45, y: 0.9 }

function box({ left, top, width, height }) {
  return {
    left: `${left - BLEED.x}%`,
    top: `${top - BLEED.y}%`,
    width: `${width + BLEED.x * 2}%`,
    height: `${height + BLEED.y * 2}%`,
  }
}

// The buttons scale with the banner, so the label tracks the artwork rather
// than jumping between breakpoints. Kept out of a class name because the
// commas in clamp() do not survive Tailwind's scanner.
const LABEL_SIZE = 'clamp(10px, 1.08vw, 17px)'

export default function CtaBanner({ image, alt, hotspots = DEFAULT_HOTSPOTS }) {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="relative overflow-hidden rounded-3xl">
        <Img src={image} alt={alt} loading="lazy" className="w-full" />

        <a
          href={PHONE_HREF}
          style={{ ...box(hotspots.call), fontSize: LABEL_SIZE }}
          className="absolute hidden items-center justify-center rounded-full bg-brand font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 lg:flex"
        >
          Call {PHONE}
        </a>
        <a
          href={EMAIL_HREF}
          style={{ ...box(hotspots.email), fontSize: LABEL_SIZE }}
          className="absolute hidden items-center justify-center gap-2 rounded-full border border-brand/40 bg-white font-semibold whitespace-nowrap text-brand transition-colors hover:bg-brand-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 lg:flex"
        >
          <svg
            className="h-[1.1em] w-[1.1em] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
            <path d="m3 6.5 9 6 9-6" />
          </svg>
          {EMAIL}
        </a>
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
