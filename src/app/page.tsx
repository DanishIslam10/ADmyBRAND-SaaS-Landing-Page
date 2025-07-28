import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import PricingSection from '@/components/sections/Pricing'
import TestimonialCarousel from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <PricingSection />
      <TestimonialCarousel />
      <FAQ />
      <Footer />
    </main>
  )
}
