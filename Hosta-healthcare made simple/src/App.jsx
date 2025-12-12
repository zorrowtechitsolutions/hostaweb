import { AboutSection } from "./components/About-section"
import { CtaSection } from "./components/Cta-section"
import { FeaturesSection } from "./components/Feature-section"
import {  Keyfeatures } from "./components/Keyfeatures"
import { Header } from "./components/Header"
import { HeroSection } from "./components/Hero-section"
import { HowItWorksSection } from "./components/Howit-works-section"
import { ScreenshotsSection } from "./components/Screenshot-section"
import { WhyChooseSection } from "./components/Why-choose-section"
import { Footer } from "./components/Footer"
import AppRoutes from "./routes/Approutes"


function App() {

  return (
    
      <main className="w-full bg-gradient-to-br via-green-500">
   <AppRoutes/>
    </main>
  )
}

export default App

