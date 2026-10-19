import { useState } from 'react'

const HOME_FAQS = [
  {
    q: 'Do you offer same-day service?',
    a: "Yes. Drop off your items by 9am and they'll be ready that day. Regular orders take 3 to 4 days. Same-day service is a big reason customers choose us as their dry cleaner in North Bellmore NY.",
  },
  {
    q: 'What items do you accept?',
    a: 'Pretty much everything. Suits, dresses, coats and delicate pieces are all welcome. Household items are fine too.',
  },
  {
    q: 'Can you remove stains?',
    a: 'Yes. We treat stains before cleaning so they come out properly. Just point them out when you drop off.',
  },
  {
    q: 'How much is a dress shirt?',
    a: "It's $2.75 per shirt. That price includes pressing. Every shirt comes back on a hanger.",
  },
  {
    q: 'Do you clean bedding and linens?',
    a: 'Yes. We wash and fold comforters, sheets and other linens. We also offer regular wash and fold service.',
  },
  {
    q: 'What alterations do you offer?',
    a: 'All of them. Hems, sleeves, waists, zippers and fittings are all covered. Most alterations are ready in 3 to 4 days.',
  },
  {
    q: 'Do you make custom clothing?',
    a: 'No. We focus on custom alterations to clothes you already own. That way your favorite pieces fit just right.',
  },
  {
    q: "What's included with wedding gown cleaning?",
    a: "We dry clean the gown and pack it in a wedding box. It costs $195 and takes about a week. We don't offer storage.",
  },
  {
    q: 'Can you alter my wedding dress?',
    a: "Yes. We handle wedding dress alterations too. Bring it in early so there's plenty of time before the big day.",
  },
  {
    q: 'Can you pick up or deliver?',
    a: 'Not right now. Parking is easy though. There are spots out front and a lot behind the store.',
  },
  {
    q: 'How can I reach you?',
    a: "Call us at (516) 656-1221 or email chris@bellmoredrycleaner.com. We don't take texts just yet.",
  },
  {
    q: 'Are you open on Sundays?',
    a: "No. We're closed on Sundays and holidays. Need a dry cleaner North Bellmore NY on a weekday? Just stop by and see us.",
  },
]

export default function Faq({ items = HOME_FAQS }) {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]"
    >
      <h2 className="text-center text-[26px] font-extrabold tracking-[-0.02em] text-ink sm:text-[30px] lg:text-[34px]">
        Frequently Asked Questions
      </h2>

      <ul className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-line lg:mt-10">
        {items.map((item, i) => {
          const isOpen = open === i
          const panelId = `faq-panel-${i}`

          return (
            <li key={item.q} className={i === 0 ? '' : 'border-t border-line'}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-brand-soft/50 sm:gap-6 sm:px-6 sm:py-5"
                >
                  <span className="shrink-0 text-[13px] font-semibold tabular-nums text-muted/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[15px] font-semibold leading-6 text-ink sm:text-[16px]">
                    {item.q}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-brand transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>

              <div
                id={panelId}
                hidden={!isOpen}
                className="px-4 pb-5 pl-[2.6rem] text-[14px] leading-7 text-muted sm:px-6 sm:pl-[4.1rem] sm:text-[15px]"
              >
                {item.a}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
