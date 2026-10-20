import ServiceHero from '../components/ServiceHero'
import GarmentCare from '../components/GarmentCare'
import NearbyTowns from '../components/NearbyTowns'
import OtherServices from '../components/OtherServices'
import CtaBanner from '../components/CtaBanner'
import Faq from '../components/Faq'
import { DRY_CLEANING_FAQS } from '../data/dryCleaningFaqs'
import PageMeta from '../components/PageMeta'

export default function DryCleaning() {
  return (
    <>
      <PageMeta
        title="Dry Cleaning Services & Specialty Garment Care in Bellmore, NY"
        description="Suit, dress and coat dry cleaning in Bellmore, NY, plus stain removal and delicate garment care. Same-day service on items dropped off by 9 AM."
      />
      <main>
      <ServiceHero
        titleTop="Dry Cleaning Services &"
        titleAccent="Specialty Garment Care"
        titleBottom="in Bellmore, NY"
        intro="Customers tell us they like our service, turnaround and price. Our staff is fully experienced."
        note="Contact us for dry cleaning services Bellmore NY and tell us what needs cleaning."
        image="/assets/images/DryCleaninghero.webp"
        imageAlt="A stack of freshly cleaned and folded knitwear"
      />
      <GarmentCare />
      <NearbyTowns />
      <OtherServices />
      <Faq items={DRY_CLEANING_FAQS} />
      <CtaBanner
        image="/assets/images/DryCleaningsection.webp"
        alt="Fast, reliable dry cleaning in Bellmore, NY for your busy schedule. Got a suit for Friday or a stack of shirts that need pressing? Bring them in by 9 AM and we can have them ready the same day. Everything else takes 3 to 4 days."
        hotspots={{
          call: { left: 2.83, top: 68.14, width: 18.26, height: 12.38 },
          email: { left: 22.49, top: 68.14, width: 26.62, height: 12.5 },
        }}
      />
      </main>
    </>
  )
}
