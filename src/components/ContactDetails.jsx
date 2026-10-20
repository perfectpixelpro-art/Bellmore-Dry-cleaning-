export default function ContactDetails() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pt-12 sm:px-8 lg:px-[60px] lg:pt-16 xl:px-[120px] 2xl:px-[250px]">
      <div className="rounded-2xl border border-brand/15 bg-brand-soft/50 p-5 sm:p-7 lg:p-8">
        <h2 className="max-w-2xl text-[19px] font-bold leading-[1.45] tracking-[-0.01em] text-ink sm:text-[21px] lg:text-[22px]">
          Looking for the Bellmore dry cleaner address or the dry cleaner phone
          number in Bellmore?
        </h2>

        <p className="mt-5 max-w-3xl text-[14px] leading-7 text-muted sm:text-[15px]">
          Call Bellmore Dry Cleaner at{' '}
          <a href="tel:+15166561221" className="font-semibold text-brand hover:underline">
            (516) 656-1221
          </a>{' '}
          for our store details or help planning your visit. You can also email{' '}
          <a
            href="mailto:info@bellmoredrycleaner.com"
            className="font-semibold text-brand hover:underline"
          >
            info@bellmoredrycleaner.com
          </a>{' '}
          with questions about our dry cleaning, laundry and garment care services.
        </p>

        <p className="mt-4 max-w-3xl text-[14px] leading-7 text-muted sm:text-[15px]">
          Call or email us before your visit. We do not accept text messages.
        </p>
      </div>
    </section>
  )
}
