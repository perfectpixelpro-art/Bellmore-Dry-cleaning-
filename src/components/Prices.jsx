import PriceIcon from './PriceIcon'

const LEFT = [
  { icon: 'shirt', label: 'Shirt, laundered on hanger', price: '$2.75' },
  { icon: 'pants', label: 'Pants', price: '$8.00', from: true },
  { icon: 'skirt', label: 'Skirts', price: '$7.00', from: true },
  { icon: 'suit', label: 'Two-piece suit', price: '$18.00', from: true },
  { icon: 'dress', label: 'Dress', price: '$16.00', from: true },
  { icon: 'coat', label: 'Winter coat', price: '$18.00', from: true },
]

const RIGHT = [
  { icon: 'hemPants', label: 'Hem (pants)', price: '$16.00', from: true },
  { icon: 'comforter', label: 'Comforter (queen / king)', price: '$39.00', from: true },
  { icon: 'gown', label: 'Wedding gown', price: '$195.00', from: true },
  { icon: 'hemDress', label: 'Hem dress', price: '$40.00', from: true },
  { icon: 'sleeve', label: 'Suit jacket sleeve alteration', price: '$20.00', from: true },
  { icon: 'jacket', label: 'Suit jacket (Entire)', price: '$30.00', from: true },
]

function Row({ item, last }) {
  return (
    <li
      className={`flex items-center justify-between gap-4 py-4 ${last ? '' : 'border-b border-line'}`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <PriceIcon name={item.icon} className="h-5 w-5 shrink-0 text-brand" />
        <span className="truncate text-[14px] text-muted" title={item.label}>
          {item.label}
        </span>
      </span>
      <span className="shrink-0 whitespace-nowrap text-[15px] font-bold text-ink">
        {item.from && <span className="mr-1 text-[12px] font-medium text-muted">from</span>}
        {item.price}
      </span>
    </li>
  )
}

export default function Prices() {
  return (
    <section
      id="prices"
      className="mx-auto max-w-[1920px] px-5 py-14 sm:px-8 lg:px-[60px] lg:py-20 xl:px-[120px] 2xl:px-[250px]"
    >
      {/* Heading + note */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]">
            Straightforward <span className="text-brand">prices</span>
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
            Here's where most items start. Fabric, trim and special care can change
            the final price - we'll always tell you before we start.
          </p>
        </div>

        <div className="flex items-start gap-3 self-start rounded-xl bg-brand-soft px-4 py-4 lg:mt-3">
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2 3.5a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[14px] leading-6 text-ink/80">
            Drop off eligible items by 9 AM, pick them up after 5 PM the same day.
            Monday through Saturday.
          </p>
        </div>
      </div>

      {/* Price table */}
      <div className="mt-8 rounded-2xl border border-line bg-white px-5 py-2 sm:px-8 lg:mt-10">
        <div className="grid lg:grid-cols-2 lg:gap-x-14">
          <ul className="lg:border-r lg:border-line lg:pr-14">
            {LEFT.map((item, i) => (
              <Row key={item.label} item={item} last={i === LEFT.length - 1} />
            ))}
          </ul>
          <ul>
            {RIGHT.map((item, i) => (
              <Row key={item.label} item={item} last={i === RIGHT.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
