import { useCallback, useEffect, useRef, useState } from 'react'
import Img from './Img'

const SERVICES = [
  {
    image: '/assets/images/service1.webp',
    title: 'Dry cleaning & shirt laundering',
    text: 'Suits, dresses, slacks and everyday shirts - pressed and on hangers, ready to wear.',
  },
  {
    image: '/assets/images/service2.webp',
    title: 'Alterations & custom tailoring',
    text: 'Hems, tapering, sleeves and zippers, done right here on the premises.',
  },
  {
    image: '/assets/images/service3.webp',
    title: 'Wedding gown care',
    text: 'Specialized cleaning for the dress before or after the big day. Ask about preservation.',
  },
  {
    image: '/assets/images/service4.webp',
    title: 'Leather & suede',
    text: 'Jackets, coats and more, cleaned with the care these materials need.',
  },
]

function Arrow({ dir, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous services' : 'Next services'}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand transition enabled:hover:bg-brand-soft disabled:cursor-not-allowed disabled:border-line disabled:text-ink/25"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'prev' ? <path d="M19 12H5M11 18l-6-6 6-6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
      </svg>
    </button>
  )
}

export default function Services() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [syncEdges])

  const scrollByCard = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section id="service" className="mx-auto max-w-[1920px] px-5 py-14 sm:px-8 lg:px-[60px] lg:py-20 xl:px-[120px] 2xl:px-[250px]">
      {/* Heading */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]">
          Our Dry Cleaning and
          <br />
          <span className="text-brand">Garment Care Services</span>
        </h2>

        <div className="flex items-center gap-3">
          <a
            href="#service"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-brand/40 px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            View all services
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <Arrow dir="prev" disabled={atStart} onClick={() => scrollByCard(-1)} />
          <Arrow dir="next" disabled={atEnd} onClick={() => scrollByCard(1)} />
        </div>
      </div>

      {/* Cards */}
      <ul
        ref={trackRef}
        onScroll={syncEdges}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-10">
        {SERVICES.map((service) => (
          <li
            key={service.title}
            className="flex w-[78%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
          >
            <Img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <h3 className="mt-4 px-1 text-[16px] font-bold leading-snug text-ink">
              {service.title}
            </h3>
            <p className="mt-2 px-1 pb-2 text-[13px] leading-6 text-muted">
              {service.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
