import ServiceHero from '../components/ServiceHero'
import ShirtLaundering from '../components/ShirtLaundering'
import WashAndFold from '../components/WashAndFold'
import LaundryNearYou from '../components/LaundryNearYou'
import ShirtPressingTowns from '../components/ShirtPressingTowns'
import ServiceCards from '../components/ServiceCards'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'
import { LAUNDRY_FAQS } from '../data/laundryFaqs'
import { LAUNDRY_SERVICE_CARDS } from '../data/serviceCards'

export default function LaundryServices() {
  return (
    <main>
      <ServiceHero
        titleAccent="Shirt Laundry Service"
        titleBottom="in North Bellmore, NY"
        intro="Fresh shirts take time that most people do not have. Bellmore Dry Cleaner handles the washing and pressing so you can skip it. Our shirt laundry service North Bellmore NY customers use costs $2.75 per dress shirt. Each shirt is pressed and returned on a hanger."
        note="Contact us for professional laundry service in North Bellmore."
        image="/assets/images/laundryservicehero.png"
        imageAlt="A hand lifting the top shirt from a stack of freshly laundered and folded dress shirts"
      />
      <ShirtLaundering />
      <WashAndFold />
      <LaundryNearYou />
      <ShirtPressingTowns />
      <ServiceCards
        titleAccent="Other Services"
        titleRest="at Bellmore Dry Cleaner"
        intro="Laundry is only part of what we do. Bring in your clothes for any of these services too."
        items={LAUNDRY_SERVICE_CARDS}
      />
      <Faq items={LAUNDRY_FAQS} />
      <CtaBanner
        image="/assets/images/laundrylast.png"
        alt="Need a shirt laundry service in North Bellmore, NY? Skip the washing and pressing. Bring your dress shirts to Bellmore Dry Cleaner and pick them up fresh on hangers. Our shirt laundry service North Bellmore NY customers trust starts at $2.75 per shirt."
      />
    </main>
  )
}
