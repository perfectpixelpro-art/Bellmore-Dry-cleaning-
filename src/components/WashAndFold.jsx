// The supplied icon sits in the top-left 296px of a 397px canvas, so it is
// scaled to 134% inside a clipped box to centre the artwork.
function LinensIcon() {
  return (
    <span className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-full sm:block">
      <img
        src="/assets/icons/laundryicon.png"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-[134%] w-[134%] max-w-none object-contain"
      />
    </span>
  )
}

// Desktop lays the card over the photo; on mobile the photo becomes a banner
// with the card below it, so the copy never sits on top of a busy image.
export default function WashAndFold() {
  return (
    <section className="mx-auto max-w-[1920px] px-5 pb-14 sm:px-8 lg:px-[60px] lg:pb-20 xl:px-[120px] 2xl:px-[250px]">
      <div className="relative overflow-hidden rounded-3xl border border-line lg:border-0">
        <img
          src="/assets/images/laundry3.png"
          alt="Pressing a stack of freshly washed striped bedding and linens"
          loading="lazy"
          className="h-52 w-full object-cover sm:h-64 lg:absolute lg:inset-0 lg:h-full"
        />

        <div className="relative p-5 sm:p-7 lg:py-12 lg:pl-10 lg:pr-0 xl:py-14 xl:pl-14">
          <div className="max-w-lg rounded-2xl bg-white p-5 sm:p-7 lg:shadow-xl lg:shadow-ink/10">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[26px] lg:text-[28px]">
                <span className="text-brand">Wash and Fold for</span>
                <br />
                Bedding and Linens
              </h2>
              <LinensIcon />
            </div>

            <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
              Bedding and linens take up a lot of space and time at home. Our wash
              and fold service in Bellmore takes care of comforters, sheets and
              other linens for you.
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-brand-soft px-4 py-3.5">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <p className="text-[13px] leading-6 text-ink/80">
                If you search for a{' '}
                <strong className="font-bold text-brand">wash and fold service</strong>{' '}
                near me, you can bring your items straight to our store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
