import './App.css'
import Hero from './pages/Hero.tsx'
import AboutPage from './pages/AboutPage.tsx'
import TeamSection from './pages/Teams.tsx'
import Services from './pages/Services.tsx'
import ContactSection from './pages/Contact.tsx'
import LogoMarquee from './pages/BrandsMarquee.tsx'

import { Routes, Route } from "react-router-dom";
import MainLayout from '../src/layout/MainLayout.tsx'
import Calculator from './pages/Calculator.tsx'
import Quiz from './pages/Quiz.tsx'
import AboutSection from './pages/About.tsx'
import ServicesSection from './pages/Services.tsx'
import ServiceDetails from './pages/ServiceDetails.tsx'
import ServicesPage from './pages/ServicePage.tsx'
import StrategySection from './pages/StrategySection.tsx'

function App() {

  return (
    <>
      <Routes>

        {/* Layout Wraper */}
        <Route element={<MainLayout />}>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LogoMarquee />
                <AboutSection />
                <ServicesSection />
                <StrategySection/>
                <TeamSection />
                <ContactSection />
              </>
            }
          />

          {/* INDIVIDUAL PAGE ROUTES */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
