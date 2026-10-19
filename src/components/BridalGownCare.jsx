import Img from './Img'

const POINTS = [
  'Your wedding dress may need professional cleaning before you pack it away after the celebration. Bellmore Dry Cleaner offers bridal gown preservation Bellmore NY brides can rely on, with a service that includes dry cleaning and packing the gown in a wedding box for $195.',
  "If you're looking for a bridal gown cleaning North Bellmore NY, our experienced team also handles wedding dress alterations if your gown needs adjustments. We provide wedding dress cleaning Bellmore NY and bridal dress cleaning services Bellmore with a focus on careful handling and dependable service.",
  'The cleaning and boxing service takes approximately one week. While we prepare gowns for preservation, we do not offer long-term storage.',
]

// Bordered card holding the image and copy side by side. The photo is shown
// whole, so its width is capped to keep the tall portrait from driving the
// card height, and the two columns are centred against each other.
export default function BridalGownCare() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="rounded-2xl border border-line p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-12">
          <Img
            src="/assets/images/bridal1.webp"
            alt="A wedding gown being steamed and finished by hand before preservation"
            loading="lazy"
            className="w-full max-w-[320px] rounded-xl justify-self-center sm:max-w-[360px] lg:justify-self-start"
          />

          <div>
            <h2 className="text-[22px] font-extrabold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[25px] lg:text-[27px]">
              Wedding Gown Cleaning,
              <br className="hidden sm:block" /> Preservation and Alterations
            </h2>

            <ul className="mt-5 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] leading-7 text-muted sm:text-[15px]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
