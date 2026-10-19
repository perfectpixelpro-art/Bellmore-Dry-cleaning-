import EnquiryForm from './EnquiryForm'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9165465916167!2d-73.5393258!3d40.67580770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27e947b25f84b%3A0xe07d520905dffa50!2s1904%20Newbridge%20Rd%2C%20North%20Bellmore%2C%20NY%2011710%2C%20USA!5e0!3m2!1sen!2sin!4v1792395578417!5m2!1sen!2sin'

function Detail({ children, icon }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 shrink-0 text-brand">{icon}</span>
      <span className="text-[14px] font-medium leading-6 text-ink">{children}</span>
    </div>
  )
}

const iconProps = {
  className: 'h-5 w-5',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export default function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto max-w-[1920px] px-5 pb-16 sm:px-8 lg:px-[60px] lg:pb-24 xl:px-[120px] 2xl:px-[250px]"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        {/* Map + details */}
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]">
            Come <span className="text-brand">see us</span>
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-line">
            <iframe
              src={MAP_SRC}
              title="Bellmore Dry Cleaner on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[260px] w-full border-0 sm:h-[320px] lg:h-[300px]"
            />
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
              <Detail
                icon={
                  <svg {...iconProps}>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                }
              >
                1904 Newbridge Road, North Bellmore, NY
              </Detail>

              <Detail
                icon={
                  <svg {...iconProps}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                }
              >
                <a href="tel:+15166561221" className="hover:text-brand">
                  516-656-1221
                </a>
              </Detail>
            </div>

            <Detail
              icon={
                <svg {...iconProps}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              }
            >
              Monday to Friday, 8:30 AM to 5:30 PM; Saturday, 9 AM to 5 PM.
            </Detail>
          </div>
        </div>

        {/* Form */}
        <EnquiryForm />
      </div>
    </section>
  )
}
