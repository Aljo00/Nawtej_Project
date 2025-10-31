import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';
import DigitalModelIntro from '../components/DigitalModelIntro';
import AiPlatformIntro from '../components/AiPlatformIntro';
import Testimonials from '../components/Testimonials';
import PlatformCTA from '../components/PlatformCTA';
import Contact from '../components/Contact';

function HomePage() { 
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <AiPlatformIntro />
      <ServicesSection />
      <DigitalModelIntro />
      <Testimonials />
      <PlatformCTA />
      <Contact />
    </main>
  );
}

export default HomePage;