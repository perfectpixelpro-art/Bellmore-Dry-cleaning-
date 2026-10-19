import Img from './Img'

// `titleFlow` lets the accent run wrap inline with the rest of the heading
// instead of sitting on its own line, and `intro` takes a string or an array
// of paragraphs.
export default function ServiceHero({
  titleTop,
  titleAccent,
  titleBottom,
  titleFlow = false,
  intro,
  note,
  image,
  imageAlt,
}) {
  const paragraphs = Array.isArray(intro) ? intro : [intro]

  return (
    <section className="mx-auto max-w-[1920px] px-5 pt-12 pb-16 sm:px-8 lg:px-[60px] lg:pt-16 lg:pb-24 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 2xl:gap-32">
        <div className="max-w-xl">
          <h1 className="h1-service font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
            {titleTop && (
              <>
                {titleTop}
                {titleFlow ? ' ' : <br />}
              </>
            )}
            <span className="text-brand">{titleAccent}</span>
            {titleBottom && (
              <>
                {titleFlow ? ' ' : <br />}
                {titleBottom}
              </>
            )}
          </h1>

          {paragraphs.map((paragraph, i) => (
            <p
              key={paragraph}
              className={`text-[15px] leading-7 text-muted sm:text-[16px] ${i === 0 ? 'mt-5' : 'mt-4'}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-7 flex flex-wrap items-center gap-4">
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

          {note && <p className="mt-6 text-[13px] leading-6 text-muted">{note}</p>}
        </div>

        <div className="relative w-full max-w-[520px] justify-self-center lg:justify-self-end">
          <Img src={image} alt={imageAlt} className="w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  )
}
