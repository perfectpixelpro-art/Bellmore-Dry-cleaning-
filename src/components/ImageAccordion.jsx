import { useState } from 'react'
import Img from './Img'

// Image on the left, expandable panels on the right. Shared by the service
// pages. `panelTag` keeps the panel titles at the right heading level: pages
// that already have a section <h2> above pass "h3".
export default function ImageAccordion({
  image,
  imageAlt,
  panels,
  idPrefix,
  panelTag: PanelTag = 'h3',
  imageClassName = 'w-full rounded-2xl object-cover lg:max-w-[420px]',
}) {
  const [open, setOpen] = useState(0)

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-10">
      <Img src={image} alt={imageAlt} loading="lazy" className={imageClassName} />

      <ul>
        {panels.map((panel, i) => {
          const isOpen = open === i
          const panelId = `${idPrefix}-${i}`

          return (
            <li key={panel.title} className={i === 0 ? '' : 'border-t border-line'}>
              <PanelTag>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[16px] font-bold leading-6 text-ink sm:text-[18px]">
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
              </PanelTag>

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
  )
}
