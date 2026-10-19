import Img from './Img'

// Copy left, image right on desktop; the image drops below the copy on mobile
// so the heading leads, matching the other sections on this page.
export default function ShirtPressingTowns() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="max-w-xl">
          <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[32px]">
            <span className="text-brand">Shirt Laundry and Pressing</span>
            <br />
            for Bellmore and Nearby Towns
          </h2>

          <p className="mt-5 text-[14px] leading-7 text-muted sm:text-[15px] sm:leading-8">
            Need clean, pressed shirts for work or everyday wear? Bellmore Dry
            Cleaner makes laundry easier with dress shirt washing and pressing for{' '}
            <strong className="font-bold text-brand">$2.75 per shirt.</strong> Each
            shirt comes back pressed and ready to wear on a hanger. We welcome
            customers looking for a wash and press shirts near me service, a shirt
            laundry service Wantagh NY, or professional shirt cleaning East Meadow
            NY. If you need dress shirt laundry near me or shirt cleaning Seaford
            NY, visit our North Bellmore store for convenient, affordable shirt care.
          </p>

          <a
            href="tel:+15166561221"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Call (516) 656-1221
          </a>
        </div>

        <Img
          src="/assets/images/laundry4.webp"
          alt="Freshly pressed dress shirts in grey, white, blue and cream hanging on a rail"
          loading="lazy"
          className="w-full max-w-[420px] justify-self-center rounded-2xl object-cover lg:justify-self-end"
        />
      </div>
    </section>
  )
}
