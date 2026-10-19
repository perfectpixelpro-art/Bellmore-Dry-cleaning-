import Hero from '../components/Hero'
import Services from '../components/Services'
import SameDayBanner from '../components/SameDayBanner'
import Prices from '../components/Prices'
import Coupons from '../components/Coupons'
import Faq from '../components/Faq'
import Visit from '../components/Visit'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <SameDayBanner />
      <Prices />
      <Coupons />
      <Visit />
      <Faq />
    </main>
  )
}
