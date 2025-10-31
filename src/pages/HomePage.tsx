import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';
import DigitalModelIntro from '../components/DigitalModelIntro';
import AiPlatformIntro from '../components/AiPlatformIntro';
import Testimonials from '../components/Testimonials';
import PlatformCTA from '../components/PlatformCTA';
import Contact from '../components/Contact';
import Publications from '../components/Publications';

function HomePage() { 
  return (
    <main>
      <Hero />
      <section id="about">
        <About />
      </section>
      <Features />
      <section id="ai-platform">
        <AiPlatformIntro />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="digital-model">
        <DigitalModelIntro />
      </section>
      <section id="publications">
        <Publications />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <PlatformCTA />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default HomePage;