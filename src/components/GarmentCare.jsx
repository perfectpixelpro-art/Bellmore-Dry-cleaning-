import ImageAccordion from './ImageAccordion'

const PANELS = [
  {
    title: 'Stain Removal and Delicate Garments',
    body: [
      'Most stains can be treated. Our stain removal service covers clothing and other items we accept. How well it works depends on the fabric, the kind of stain and its age. Older stains are harder. If you need stain removal dry cleaning services, show us the spot at drop-off.',
      'Got something fragile? Delicate garment cleaning is available. Mention the fabric if you know it.',
    ],
  },
  {
    title: 'Shirt Cleaning and Pressing',
    body: [
      'Professional shirt cleaning and pressing is $2.75 per dress shirt. That price includes the pressing. Your shirts come back on hangers.',
      'Bedding and linens? We wash and fold those too.',
    ],
  },
  {
    title: 'Turnaround, Parking and Hours',
    body: [
      'Get your items here by 9 AM and we can finish them the same day. Anything dropped off later usually takes 3 to 4 days.',
      'Searching for professional dry cleaning near me? Look for our store. You can park out front or in the lot behind the building.',
      "We're closed on Sundays and holidays. We don't offer pickup or delivery yet, so you'll need to bring your items in.",
    ],
  },
]

export default function GarmentCare() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-ink sm:text-[27px] lg:text-[30px]">
        Suits, Dresses and Coats
      </h2>
      <p className="mt-3 max-w-4xl text-[14px] leading-7 text-muted sm:text-[15px]">
        Looking for a dry cleaning services Bellmore locals trust? Start here. Suit
        dry cleaning Bellmore NY is one of the jobs we do most. Dress dry cleaning
        Bellmore and coat dry cleaning come in steadily too, especially once it gets cold.
      </p>

      <div className="mt-7">
        <ImageAccordion
          image="/assets/images/service1.webp"
          imageAlt="Freshly pressed dress shirts hanging on wooden hangers"
          panels={PANELS}
          idPrefix="care-panel"
        />
      </div>
    </section>
  )
}
