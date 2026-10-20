import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Services', to: '/#service' },
  { label: 'Prices', to: '/#prices' },
  { label: 'Visit', to: '/#visit' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f1b2d] text-white">
      <div className="mx-auto max-w-[1920px] px-5 py-10 sm:px-8 lg:px-[60px] lg:py-12 xl:px-[120px] 2xl:px-[250px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[22px] font-bold tracking-[-0.02em] sm:text-[26px] lg:text-[28px]">
              Bellmore Dry Cleaner
            </p>
            <p className="mt-2 text-[14px] leading-6 text-white/80">
              1904 Newbridge Road, North Bellmore, NY ·{' '}
              <a href="tel:+15166561221" className="font-semibold underline underline-offset-4 hover:text-white">
                (516) 656-1221
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:gap-x-7">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[14px] text-white/85 underline underline-offset-4 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-[12px] text-white/60 lg:mt-6">
          © 2026 Bellmore Dry Cleaner. Prices and offers subject to change.
        </p>
      </div>
    </footer>
  )
}
