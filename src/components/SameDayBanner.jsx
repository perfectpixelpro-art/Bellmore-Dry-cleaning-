export default function SameDayBanner() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[100px] lg:pb-20 xl:px-[160px] 2xl:px-[250px]">
      {/* The whole banner is the artwork; the anchor makes the drawn
          phone button callable. */}
      <a
        href="tel:+15166561221"
        aria-label="Call (516) 656-1221 for same-day dry cleaning"
        className="group relative block overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
      >
        <img
          src="/assets/images/wholesection.png"
          alt="Need same-day dry cleaning? We advertise same-day service for eligible garments dropped off by 9 AM and picked up by 5 PM. Call (516) 656-1221."
          className="w-full"
        />
      </a>
    </section>
  )
}
