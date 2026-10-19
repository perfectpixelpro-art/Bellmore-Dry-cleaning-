import Hero from '../components/Hero'
import Services from '../components/Services'
import SameDayBanner from '../components/SameDayBanner'
import Prices from '../components/Prices'
import Coupons from '../components/Coupons'
import Faq from '../components/Faq'
import Visit from '../components/Visit'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Best Dry Cleaner in North Bellmore, NY"
        description="Same-day dry cleaning in North Bellmore, NY. Drop off by 9 AM for same-day service, with tailoring on the premises. Call (516) 656-1221."
      />
      <main>
      <Hero />
      <Services />
      <SameDayBanner />
      <Prices />
      <Coupons />
      <Visit />
      <Faq />
      </main>
    </>
  )
}
