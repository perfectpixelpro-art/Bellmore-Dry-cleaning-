export default function NearbyTowns() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-16 sm:px-8 lg:px-[60px] lg:pb-24 xl:px-[120px] 2xl:px-[250px]">
      <h2 className="text-center text-[24px] font-extrabold tracking-[-0.02em] text-ink sm:text-[27px] lg:text-[30px]">
        Serving <span className="text-brand">Nearby Towns</span>
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="space-y-5 text-[14px] leading-7 text-muted sm:text-[15px]">
          <p>
            Bellmore Dry Cleaner welcomes customers from nearby communities who need
            reliable garment care. We provide a convenient option for those looking
            for dry cleaning services Merrick NY, a dry cleaner Wantagh NY, or dry
            cleaning East Meadow NY. We also serve customers searching for dry
            cleaners Seaford NY.
          </p>
          <p>
            Our North Bellmore location is also convenient for customers from North
            Merrick, Freeport, Levittown and Massapequa. Whether you need a dry
            cleaner North Merrick NY, dry cleaning Freeport NY, a dry cleaner
            Levittown NY, or dry cleaning Massapequa NY, visit us for help with
            everyday clothing, suits, dresses and other garments.
          </p>
        </div>

        <img
          src="/assets/images/DryCleaning2.png"
          alt="A Bellmore Dry Cleaner garment bag being handed over at a customer's door"
          loading="lazy"
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
