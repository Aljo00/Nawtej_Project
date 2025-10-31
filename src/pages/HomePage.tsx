import Hero from '../components/Hero';
import PlatformIntro from '../components/PlatformIntro';
import CoreToolkit from '../components/CoreToolkit';
import BenefitsSection from '../components/BenefitsSection';
import Pricing from '../components/Pricing';
import PlatformCTA from '../components/PlatformCTA';
import About from '../components/About';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import ServicesSection from '../components/ServicesSection';

function HomePage() { 
  return (
    <main>
      <Hero />
      <PlatformIntro />
      <CoreToolkit />
      <ServicesSection />
      <Pricing />
      <PlatformCTA />
      <About />
      <BenefitsSection />
      <Publications />
      <Contact />
    </main>
  );
}

export default HomePage;
