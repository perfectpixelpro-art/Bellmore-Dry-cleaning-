import Img from './Img'

export default function StoreLocation() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 py-12 sm:px-8 lg:px-[60px] lg:py-16 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="max-w-xl">
          <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink sm:text-[25px] lg:text-[27px]">
            Store location and parking
          </h2>

          <p className="mt-4 inline-block rounded-full border border-brand/40 px-4 py-1.5 text-[13px] font-medium text-brand">
            Looking for a dry cleaning store in Bellmore?
          </p>

          <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
            Bellmore Dry Cleaner is a local dry cleaning store in Bellmore NY. You
            can contact us for garment care, laundry and other alterations.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
            Parking is available in front of the store and in the lot behind the
            building. We currently do not offer pickup or delivery, so please bring
            your items to the store.
          </p>
        </div>

        <Img
          src="/assets/images/contact1.webp"
          alt="A staff member loading a commercial washing machine at Bellmore Dry Cleaner"
          loading="lazy"
          className="w-full rounded-2xl lg:justify-self-end"
        />
      </div>
    </section>
  )
}
