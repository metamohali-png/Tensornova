import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyUs } from '@/components/home/WhyUs'
import { Process } from '@/components/home/Process'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { Testimonials } from '@/components/home/Testimonials'
import { TechStack } from '@/components/home/TechStack'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyUs />
      <Process />
      <CaseStudiesPreview />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>
  )
}
