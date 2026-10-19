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
import PageMeta from '../components/PageMeta'

export default function LaundryServices() {
  return (
    <>
      <PageMeta
        title="Shirt Laundry Service in North Bellmore, NY"
        description="Dress shirts laundered and pressed for $2.75 each, returned on hangers. Wash and fold for bedding and linens in North Bellmore, NY."
      />
      <main>
      <ServiceHero
        titleAccent="Shirt Laundry Service"
        titleBottom="in North Bellmore, NY"
        intro="Fresh shirts take time that most people do not have. Bellmore Dry Cleaner handles the washing and pressing so you can skip it. Our shirt laundry service North Bellmore NY customers use costs $2.75 per dress shirt. Each shirt is pressed and returned on a hanger."
        note="Contact us for professional laundry service in North Bellmore."
        image="/assets/images/laundryservicehero.webp"
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
        image="/assets/images/laundrylast.webp"
        alt="Need a shirt laundry service in North Bellmore, NY? Skip the washing and pressing. Bring your dress shirts to Bellmore Dry Cleaner and pick them up fresh on hangers. Our shirt laundry service North Bellmore NY customers trust starts at $2.75 per shirt."
      />
      </main>
    </>
  )
}
