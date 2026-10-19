import ServiceHero from '../components/ServiceHero'
import BridalGownCare from '../components/BridalGownCare'
import BridalNearbyTowns from '../components/BridalNearbyTowns'
import WhenToBook from '../components/WhenToBook'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'
import { BRIDAL_FAQS } from '../data/bridalFaqs'
import PageMeta from '../components/PageMeta'

export default function BridalGown() {
  return (
    <>
      <PageMeta
        title="Bridal Gown Cleaning & Preservation in North Bellmore, NY"
        description="Wedding gown cleaning and preservation boxing for $195, with about a one-week turnaround. Wedding dress alterations also available."
      />
      <main>
      <ServiceHero
        titleAccent="Professional Bridal Gown Cleaning"
        titleBottom="& Preservation in North Bellmore, NY"
        titleFlow
        intro={[
          'Your wedding dress deserves careful attention long after your special day. Bellmore Dry Cleaner provides professional bridal gown cleaning and preservation boxing to help protect your gown after the celebration. We also offer wedding dress alterations to ensure a better fit.',
          'Our bridal gown dry cleaning service costs $195 and includes dry cleaning and boxing, with an approximate one-week turnaround. If you need wedding dress preservation North Bellmore NY, our team can help prepare your gown for safekeeping.',
        ]}
        image="/assets/images/bridalhero.webp"
        imageAlt="Wedding gowns in protective covers hanging on a rail at Bellmore Dry Cleaner"
      />
      <BridalGownCare />
      <BridalNearbyTowns />
      <WhenToBook />
      <Faq items={BRIDAL_FAQS} />
      <CtaBanner
        image="/assets/images/bridal3.webp"
        alt="Book your bridal gown cleaning in North Bellmore, NY. Give your wedding dress the care it deserves with professional bridal gown cleaning in North Bellmore, NY. Bellmore Dry Cleaner offers cleaning and preservation boxing for $195, with an approximate one-week turnaround."
      />
      </main>
    </>
  )
}
