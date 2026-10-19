const IMAGES = [
  {
    src: '/assets/images/tailorhero1.png',
    alt: 'A tailor chalking an alteration mark on the shoulder of a pinstriped suit jacket',
  },
  {
    src: '/assets/images/tailorhero2.png',
    alt: 'A tailor measuring a suit jacket lapel with a tape measure during a fitting',
  },
]

// Two portrait photos sit side by side beside the copy. They stay side by side
// all the way down to mobile, where they shrink together rather than stacking,
// so the pair still reads as one unit.
export default function TailoringHero() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pt-12 pb-16 sm:px-8 lg:px-[60px] lg:pt-16 lg:pb-24 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="max-w-xl">
          <h1 className="h1-service font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
            <span className="text-brand">Professional Alterations and Custom Tailoring</span>{' '}
            in North Bellmore, NY
          </h1>

          <p className="mt-5 text-[14px] leading-7 text-muted sm:text-[15px] sm:leading-8">
            A hem that's too long or a jacket that pulls across the shoulders can
            ruin an outfit. We fix that. Bellmore Dry Cleaner takes in pants,
            adjusts suits, reworks dresses and replaces broken zippers.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px] sm:leading-8">
            Bring in anything from a work shirt to a party dress. If you want suit
            alterations Bellmore NY or dress alterations North Bellmore NY, just
            walk in and show us what's wrong.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="tel:+15166561221"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Call (516) 656-1221
            </a>

            <a
              href="https://maps.google.com/?q=Bellmore+Dry+Cleaner+North+Bellmore+NY"
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
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:justify-self-end">
          {IMAGES.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
