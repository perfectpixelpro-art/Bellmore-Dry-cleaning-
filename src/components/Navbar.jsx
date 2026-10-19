import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SERVICE_ITEMS = [
  { label: 'Dry Cleaning & Specialty Garment Care', to: '/dry-cleaning' },
  { label: 'Laundry Services', to: '/laundry-services' },
  { label: 'Tailoring & Alterations', to: '/tailoring-alterations' },
  { label: 'Bridal Gown Cleaning & Preservation', to: '/#service' },
]

const NAV_LINKS = [
  { label: 'Prices', to: '/#prices' },
  { label: 'Coupons', to: '/#coupons' },
  { label: 'Contact', to: '/#visit' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Visit', to: '/#visit' },
]

const PHONE = '(516) 656-1221'
const PHONE_HREF = 'tel:+15166561221'

function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [services, setServices] = useState(false)
  const dropdown = useRef(null)

  // Close the desktop dropdown on an outside click or Escape.
  useEffect(() => {
    function onPointerDown(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) setServices(false)
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') setServices(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const closeAll = () => {
    setOpen(false)
    setServices(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" className="shrink-0">
          <img src="/assets/images/logo.png" alt="Bellmore Dry Cleaner" className="h-10 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          <div
            ref={dropdown}
            className="relative"
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <button
              type="button"
              onClick={() => setServices(true)}
              aria-expanded={services}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-[15px] font-medium text-ink/80 transition-colors hover:text-brand"
            >
              Service
              <Chevron open={services} />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[20rem] -translate-x-1/2 pt-3 ${services ? '' : 'pointer-events-none'}`}
            >
              <ul
                className={`overflow-hidden rounded-xl border border-line bg-white py-2 shadow-lg shadow-ink/5 transition duration-150 ${
                  services ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                }`}
              >
                {SERVICE_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={closeAll}
                      className="block px-4 py-2.5 text-[14px] leading-5 text-ink/80 transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[15px] font-medium text-ink/80 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            <PhoneIcon />
            {PHONE}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            <button
              type="button"
              onClick={() => setServices((v) => !v)}
              aria-expanded={services}
              className="flex items-center justify-between py-3 text-[15px] font-medium text-ink/80"
            >
              Service
              <Chevron open={services} />
            </button>

            {services && (
              <ul className="mb-1 border-l border-line pl-4">
                {SERVICE_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={closeAll}
                      className="block py-2.5 text-[14px] leading-5 text-muted"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeAll}
                className="py-3 text-[15px] font-medium text-ink/80"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={PHONE_HREF}
              className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-white sm:hidden"
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
