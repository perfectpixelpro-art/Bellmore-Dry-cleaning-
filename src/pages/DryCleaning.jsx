import ServiceHero from '../components/ServiceHero'
import GarmentCare from '../components/GarmentCare'
import NearbyTowns from '../components/NearbyTowns'
import OtherServices from '../components/OtherServices'
import DryCleaningCta from '../components/DryCleaningCta'
import Faq from '../components/Faq'
import { DRY_CLEANING_FAQS } from '../data/dryCleaningFaqs'

export default function DryCleaning() {
  return (
    <main>
      <ServiceHero
        titleTop="Dry Cleaning Services &"
        titleAccent="Specialty Garment Care"
        titleBottom="in Bellmore, NY"
        intro="Customers tell us they like our service, turnaround and price. Our staff is fully experienced."
        note="Contact us for dry cleaning services Bellmore NY and tell us what needs cleaning."
        image="/assets/images/DryCleaninghero.png"
        imageAlt="A stack of freshly cleaned and folded knitwear"
      />
      <GarmentCare />
      <NearbyTowns />
      <OtherServices />
      <Faq items={DRY_CLEANING_FAQS} />
      <DryCleaningCta />
    </main>
  )
}
