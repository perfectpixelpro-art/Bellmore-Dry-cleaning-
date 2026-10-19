const POINTS = [
  <>
    Short on time?{' '}
    <strong className="font-semibold text-brand">
      Drop your items off by 9 AM and we can do same-day service.
    </strong>{' '}
    Other dry cleaning orders usually take 3 to 4 days.
  </>,
  <>
    We also handle zipper repair and clothing repairs. Looking for pants hemming
    near me? That's covered. So are trouser alterations Bellmore NY and general
    garment repair and tailoring. If you need zipper repair North Bellmore NY,
    bring the garment in.
  </>,
  <>Customers tell us they like our service, turnaround and price.</>,
]

export default function ClothingCare() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
        <div className="max-w-xl">
          <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[30px]">
            <span className="text-brand">Convenient Clothing Care</span> in
            <br className="hidden sm:block" /> North Bellmore, NY
          </h2>

          <ul className="mt-6 space-y-4 lg:space-y-5">
            {POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4">
                <img
                  src="/assets/icons/laundryicon2.png"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
                />
                <p className="text-[14px] leading-7 text-muted sm:text-[15px]">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/assets/images/tailor3.png"
          alt="Hands mending a blue knitted sweater with a needle and reels of cotton thread"
          loading="lazy"
          className="w-full max-w-[460px] justify-self-center rounded-2xl object-cover lg:justify-self-end"
        />
      </div>
    </section>
  )
}
