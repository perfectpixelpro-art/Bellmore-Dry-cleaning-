import Img from './Img'

const POINTS = [
  'Planning post-wedding gown care should be simple. Bellmore Dry Cleaner offers wedding gown cleaning services Nassau County brides can consider when they need professional care for their dress.',
  'Our experienced staff focuses on good service, reasonable pricing, and dependable turnaround times.',
  'Brides in East Meadow and Seaford NY can also contact Bellmore Dry Cleaner for wedding gown cleaning and care. If your gown has marks or stains, our team can help assess its cleaning needs.',
  'For customers visiting our shop, parking is available in front of the store and in the lot behind it. Please note that we are closed on Sundays and holidays.',
]

export default function BridalNearbyTowns() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[27px] lg:text-[30px]">
        Bridal Gown Cleaning for
        <br />
        <span className="text-brand">North Bellmore and Nearby Towns</span>
      </h2>

      <ul className="mt-6 space-y-4 lg:mt-7 lg:space-y-5">
        {POINTS.map((point) => (
          <li key={point} className="flex items-start gap-3 sm:gap-4">
            <Img
              src="/assets/icons/laundryicon2.webp"
              alt=""
              aria-hidden="true"
              className="mt-0.5 h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
            />
            <p className="text-[14px] leading-7 text-muted sm:text-[15px]">{point}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
