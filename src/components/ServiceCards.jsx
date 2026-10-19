import { Link } from 'react-router-dom'

// Scalloped badge with a tick. Inline so it inherits the brand colour; swap
// for an <img> if a PNG lands in /assets/icons.
function BadgeCheck({ className = 'h-9 w-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.1 1.6 2.6-.3 1 2.4 2.4 1-.3 2.6 1.6 2.1-1.6 2.1.3 2.6-2.4 1-1 2.4-2.6-.3-2.1 1.6-2.1-1.6-2.6.3-1-2.4-2.4-1 .3-2.6L2.6 12l1.6-2.1-.3-2.6 2.4-1 1-2.4 2.6.3L12 2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  )
}

// Renders body text, styling an optional `highlight` substring (a price, say)
// so the card copy can stay plain strings in the data file.
function Body({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) return text
  const [before, ...rest] = text.split(highlight)
  return (
    <>
      {before}
      <strong className="font-bold text-brand">{highlight}</strong>
      {rest.join(highlight)}
    </>
  )
}

// Shared four-up card grid used by the service pages. `titleAccent` is the
// blue run of the heading and `titleRest` the ink-coloured remainder.
export default function ServiceCards({ titleAccent, titleRest, intro, items }) {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[32px]">
        <span className="text-brand">{titleAccent}</span> {titleRest}
      </h2>
      {intro && (
        <p className="mt-3 text-[14px] leading-7 text-muted sm:text-[15px]">{intro}</p>
      )}

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              to={item.to}
              className={`flex h-full flex-col rounded-2xl border p-5 transition-colors ${
                item.featured
                  ? 'border-brand/30 bg-brand-soft/50 hover:bg-brand-soft'
                  : 'border-line bg-white hover:border-brand/40 hover:bg-brand-soft/30'
              }`}
            >
              <BadgeCheck className="h-9 w-9 shrink-0 text-ink/70" />
              <h3 className="mt-4 text-[15px] font-bold leading-snug text-brand">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-muted">
                <Body text={item.body} highlight={item.highlight} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
