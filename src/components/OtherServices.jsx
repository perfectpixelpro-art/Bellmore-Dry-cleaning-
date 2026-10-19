import { Link } from 'react-router-dom'

const ITEMS = [
  {
    title: 'Shirt Laundering & Laundry Services',
    to: '/laundry-services',
    body: (
      <>
        Dress shirts are <strong className="font-bold text-brand">$2.75</strong> each,
        pressing included. We also wash and fold bedding and linens.
      </>
    ),
  },
  {
    title: 'Alterations & Custom Tailoring',
    to: '/tailoring-alterations',
    body: <>We adjust clothes you already own so they fit better.</>,
  },
  {
    title: 'Bridal Gown Cleaning & Preservation',
    to: '/#service',
    body: (
      <>
        Dry cleaning plus a wedding box for $195. It takes about a week. We don't
        offer long-term storage.
      </>
    ),
  },
]

export default function OtherServices() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[20px] font-bold tracking-[-0.01em] text-ink sm:text-[22px]">
        <span className="text-brand">Other Services</span> at Bellmore Dry Cleaner
      </h2>

      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <li key={item.title}>
            <Link
              to={item.to}
              className="flex h-full flex-col rounded-2xl border border-brand/25 bg-brand-soft/40 p-5 transition-colors hover:border-brand/50 hover:bg-brand-soft"
            >
              <img
                src="/assets/icons/DryCleaningicon.png"
                alt=""
                aria-hidden="true"
                className="h-9 w-9 object-contain"
              />
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-brand">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-muted">{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
