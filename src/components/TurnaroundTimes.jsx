const HOURS = [
  { day: 'Monday - Friday', time: '8:30 AM - 5:30 PM' },
  { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function TurnaroundTimes() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className="max-w-xl">
          <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink sm:text-[25px] lg:text-[27px]">
            Turnaround times
          </h2>

          <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
            Need your clothes back quickly? Items brought in by 9 AM qualify for
            same-day service. Other dry cleaning orders generally take 3-4 days,
            depending on the service required. Alterations usually take 3-4 days,
            while bridal gown cleaning and boxing takes about one week.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-ink/80 sm:text-[15px]">
            If you need an item by a specific date, contact us to confirm the
            expected turnaround.
          </p>
        </div>

        <div className="rounded-2xl border border-brand/15 bg-brand-soft/40 p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[18px] font-bold text-brand sm:text-[20px]">Business hours</h3>
            <svg
              className="h-6 w-6 shrink-0 text-brand"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
          </div>

          <dl className="mt-5">
            {HOURS.map((entry, i) => (
              <div
                key={entry.day}
                className={`flex items-center justify-between gap-4 py-3.5 ${
                  i === HOURS.length - 1 ? '' : 'border-b border-brand/15'
                }`}
              >
                <dt className="text-[14px] text-muted">{entry.day}</dt>
                <dd className="text-[14px] font-semibold text-ink">{entry.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-white/70 px-4 py-3.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <p className="text-[13px] leading-6 text-muted">
              For the latest dry cleaning hours in Bellmore,{' '}
              <a href="tel:+15166561221" className="font-semibold text-brand hover:underline">
                call us
              </a>{' '}
              before visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
