import Img from './Img'

const PARAGRAPHS = [
  'Make time to clean your wedding dress after the celebration, especially if it has makeup, dirt, or food stains. Early care can help prepare your gown for preservation.',
  "At Bellmore Dry Cleaner, our wedding dress care service includes cleaning and stain removal. If you're searching for professional bridal gown cleaning near me, our experienced team can help. We also provide wedding dress cleaning near North Bellmore and bridal gown care services North Bellmore NY for brides seeking local care.",
  'Looking for a wedding gown cleaner specialist in Bellmore NY? Let our team know about any visible stains when you bring in your dress.',
]

export default function WhenToBook() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div>
          <h2 className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[27px] lg:text-[30px]">
            <span className="text-brand">When to Book Bridal</span> Gown Cleaning and Care?
          </h2>

          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        <Img
          src="/assets/images/bridal2.webp"
          alt="A bride holding up a lace wedding gown for inspection before cleaning"
          loading="lazy"
          className="w-full max-w-[320px] rounded-2xl justify-self-center sm:max-w-[360px] lg:justify-self-end"
        />
      </div>
    </section>
  )
}
