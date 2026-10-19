// Image left, copy right on desktop. On mobile the order flips so the
// heading is read before the photo, which is why the image carries
// `order-last lg:order-first` rather than simply coming first in the markup.
export default function ShirtLaundering() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <img
          src="/assets/images/laundryservice2.png"
          alt="A dress shirt being pressed on an ironing board, with freshly laundered shirts on hangers below"
          loading="lazy"
          className="order-last w-full max-w-[520px] justify-self-center rounded-2xl object-cover lg:order-first lg:justify-self-start"
        />

        <div className="max-w-xl">
          <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[30px] lg:text-[34px]">
            Affordable Shirt
            <br />
            Laundering and Pressing
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-8">
            Our shirt laundering and pressing service is simple. You drop off your
            dress shirts. We wash and press them. They come back on hangers.
            Pressing is included in the{' '}
            <strong className="font-bold text-brand">$2.75 price.</strong> There are
            no extra charges for it. It is an affordable shirt laundry service for
            anyone who wears dress shirts often.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-8">
            In a hurry? Items brought in by 9 AM may qualify for same-day service,
            so call ahead to confirm availability.
          </p>

          <a
            href="tel:+15166561221"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Call (516) 656-1221
          </a>
        </div>
      </div>
    </section>
  )
}
