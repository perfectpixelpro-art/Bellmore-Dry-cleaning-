import ContactHero from '../components/ContactHero'
import ContactDetails from '../components/ContactDetails'
import StoreLocation from '../components/StoreLocation'
import ContactServices from '../components/ContactServices'
import TurnaroundTimes from '../components/TurnaroundTimes'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Bellmore Dry Cleaner"
        description="Call (516) 656-1221 or email info@bellmoredrycleaner.com. Visit us at 1904 Newbridge Road, North Bellmore, NY."
      />
      <main>
      <ContactHero />
      <ContactDetails />
      <StoreLocation />
      <ContactServices />
      <TurnaroundTimes />
      <CtaBanner
        image="/assets/images/contact2.webp"
        alt="Contact your local dry cleaner. We've been serving customers for years, with a focus on good service, timely turnaround and fair prices. Whether you need everyday clothing cleaned, an alteration or wedding gown care, we're happy to help."
      />
      </main>
    </>
  )
}
