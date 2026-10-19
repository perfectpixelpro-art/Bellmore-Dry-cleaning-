import Img from './Img'

const POINTS = [
  'Bellmore Dry Cleaner is a laundry cleaning service Bellmore residents can reach easily. If you need laundry near Bellmore NY, we are ready to help.',
  'Most orders take 3 to 4 days. Items brought in by 9 AM qualify for same-day service.',
  'Laundry pickup and delivery Bellmore NY is not available right now. Please bring your items to the store. Parking is available in front of the store and in the lot behind it.',
  'Customers tell us they like our service, turnaround and price. Our staff is fully experienced and ready to help.',
]

export default function LaundryNearYou() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[32px]">
        <span className="text-brand">Laundry Cleaning</span> Service Near You
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
