import Img from './Img'

const COUPONS = [
  {
    badge: 'FREE',
    icon: '/assets/icons/icon1.webp',
    title: 'Laundered shirt',
    body: <>No purchase necessary.</>,
    expires: '12/12/2026',
  },
  {
    badge: 'FREE',
    icon: '/assets/icons/icon2.webp',
    title: 'Dry-cleaned garment',
    body: (
      <>
        With a dry-cleaning order of <strong className="font-bold text-brand">$30</strong> or more.
      </>
    ),
    expires: '12/12/2026',
  },
  {
    badge: '$10 OFF',
    icon: '/assets/icons/icon3.webp',
    title: 'Bedding',
    body: (
      <>
        Comforter, quilt or blanket cleaning. With a dry cleaning order of{' '}
        <strong className="font-bold text-brand">$20.00 or more</strong>
      </>
    ),
    expires: '12/12/2026',
  },
]

export default function Coupons() {
  return (
    <section
      id="coupons"
      className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]"
    >
      <div className="text-center">
        <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-ink sm:text-[30px] lg:text-[34px]">
          <span className="text-brand">Special Offers and</span> Dry Cleaning Coupons
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Ask us about these offers advertised by Bellmore Dry Cleaner:
        </p>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {COUPONS.map((coupon) => (
          <li
            key={coupon.title}
            className="relative flex flex-col items-center rounded-2xl bg-brand-soft px-6 pb-6 pt-14 text-center"
          >
            <span className="absolute left-5 top-5 rounded-md bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              {coupon.badge}
            </span>

            <Img src={coupon.icon} alt="" aria-hidden="true" className="h-14 w-14 object-contain" />

            <h3 className="mt-4 text-[19px] font-bold text-ink">{coupon.title}</h3>
            <p className="mt-2 max-w-[20rem] text-[14px] leading-6 text-muted">{coupon.body}</p>

            <p className="mt-6 text-[13px] font-semibold text-brand">
              Expires {coupon.expires}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
