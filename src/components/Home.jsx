import { AboutSection } from "./About-section"
import CtaSection from "./Cta-section"
import { FeaturesSection } from "./Feature-section"
import { Footer } from "./Footer"
import { Header } from "./Header"
import HeroSection from "./Hero-section"
import HowItWorksSection from "./Howit-works-section"
import { Keyfeatures } from "./Keyfeatures"
import { ScreenshotsSection } from "./Screenshot-section"
import { WhyChooseSection } from "./Why-choose-section"

function Home() {

  return (
    
      <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <CtaSection />
      {/* <Keyfeatures/> */}
      <Footer />
    </>
  )
}


export default Home
