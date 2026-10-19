import TailoringHero from '../components/TailoringHero'
import GownAndAlterations from '../components/GownAndAlterations'
import ClothingCare from '../components/ClothingCare'
import ServiceCards from '../components/ServiceCards'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'
import { TAILORING_SERVICE_CARDS } from '../data/serviceCards'
import { TAILORING_FAQS } from '../data/tailoringFaqs'
import PageMeta from '../components/PageMeta'

export default function Tailoring() {
  return (
    <>
      <PageMeta
        title="Alterations & Custom Tailoring in North Bellmore, NY"
        description="Hems, sleeves, waists and zippers done on the premises in North Bellmore, NY. Most alterations are ready within 3 to 4 days."
      />
      <main>
      <TailoringHero />
      <GownAndAlterations />
      <ClothingCare />
      <ServiceCards
        titleAccent="More Services"
        titleRest="at Bellmore Dry Cleaner"
        intro="Alterations are only part of what we do. You can also bring us your cleaning and laundry."
        items={TAILORING_SERVICE_CARDS}
      />
      <Faq items={TAILORING_FAQS} />
      <CtaBanner
        image="/assets/images/tailor4.webp"
        alt="Need alterations and tailoring in North Bellmore, NY? Bellmore Dry Cleaner provides alterations and tailoring in North Bellmore, NY to help your clothes fit better. From pants hemming to suit alterations and dress adjustments, contact our team to discuss your needs and get a price."
      />
      </main>
    </>
  )
}
