import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ScrollIndicator from "@/components/scroll-indicator"
import IntroSection from "@/components/intro-section"
import FeaturesSection from "@/components/features-section"
import WhySection from "@/components/why-section"
import TokenSection from "@/components/token-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1014] text-white">
      <Header />
      <HeroSection />
      <ScrollIndicator />
      <IntroSection />
      <FeaturesSection />
      <WhySection />
      <TokenSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
