import ImageAccordion from './ImageAccordion'

const PANELS = [
  {
    title: 'Dry cleaning and specialty garment care',
    body: [
      'We accept all garments and items for cleaning. We also offer stain treatment, although complete stain removal cannot be guaranteed.',
    ],
  },
  {
    title: 'Shirt laundering and laundry services',
    body: [
      'Dress shirt laundering costs $2.75 per shirt, including pressing. Shirts are returned on hangers. We also offer wash-and-fold services for bedding and linen items.',
    ],
  },
  {
    title: 'Alterations and custom tailoring',
    body: [
      'Need a garment adjusted or repaired? We offer all types of alterations for existing garments, including custom fitting. Most jobs take 3-4 days. We do not make new garments from scratch.',
    ],
  },
  {
    title: 'Bridal gown cleaning and preservation',
    body: [
      'We offer wedding gown dry cleaning and boxing for $195, with a turnaround of approximately one week. Wedding dress alterations are also available. We do not offer long-term storage.',
    ],
  },
]

export default function ContactServices() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-12 sm:px-8 lg:px-[60px] lg:pb-16 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink sm:text-[25px] lg:text-[27px]">
        Our services
      </h2>

      <div className="mt-6">
        <ImageAccordion
          image="/assets/images/tailor2.webp"
          imageAlt="Two staff members brushing and cleaning a lace wedding gown on a hanger"
          panels={PANELS}
          idPrefix="contact-service"
        />
      </div>
    </section>
  )
}
