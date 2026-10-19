import { useState } from 'react'

const PANELS = [
  {
    title: 'Wedding Gown Cleaning, Preservation and Alterations',
    body: [
      'Many brides ask us about bridal gown cleaning North Bellmore NY after the wedding. We dry clean the gown and pack it in a wedding box. The price is $195 and it takes about a week.',
      'The box is a good option if you want bridal gown preservation Bellmore NY. We handle wedding dress cleaning Bellmore NY and bridal dress cleaning services Bellmore the same way. Need the fit changed? We do wedding dress alterations before or after the day.',
      "One thing to know. We don't offer long-term storage.",
    ],
  },
  {
    title: 'Clothing Alterations for a Better Fit',
    body: [
      'Good clothing alterations Bellmore NY can make an old favorite feel new again. Most people come to us for pants hemming Bellmore or suit fitting and alterations. We also take in dresses and fix zippers.',
      "Coming from Merrick or Wantagh? Our North Bellmore store offers tailoring services and clothing alterations for customers in both towns. If you're looking for a tailor near East Meadow, we're a short drive away. Most jobs take 3 to 4 days.",
    ],
  },
  {
    title: 'Custom Tailoring and Clothing Repairs',
    body: [
      'Sometimes a garment just needs a small fix, like a loose seam or a torn lining. We repair clothes you already own and adjust them for a better fit. Customers from Merrick and Wantagh stop by for clothing repairs and custom alterations, and our North Bellmore store is an easy drive from both.',
      "Looking for a tailor near Bellmore? Bring your clothes in and we'll see what we can do. Our local clothing alteration services help you keep wearing what's already in your closet.",
    ],
  },
]

export default function GownAndAlterations() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <img
          src="/assets/images/tailor2.png"
          alt="Two staff members brushing and cleaning a lace wedding gown on a hanger"
          loading="lazy"
          className="w-full rounded-2xl object-cover lg:max-w-[460px]"
        />

        <ul>
          {PANELS.map((panel, i) => {
            const isOpen = open === i
            const panelId = `tailoring-panel-${i}`

            return (
              <li key={panel.title} className={i === 0 ? '' : 'border-t border-line'}>
                <h2>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-[17px] font-bold leading-6 text-ink sm:text-[19px]">
                      {panel.title}
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
                </h2>

                <div id={panelId} hidden={!isOpen} className="pb-5">
                  {panel.body.map((paragraph) => (
                    <p key={paragraph} className="mt-2 text-[14px] leading-7 text-muted first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
