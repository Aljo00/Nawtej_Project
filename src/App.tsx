import Header from './components/Header';
import Hero from './components/Hero';
import PlatformIntro from './components/PlatformIntro';
import CoreToolkit from './components/CoreToolkit';
import BenefitsSection from './components/BenefitsSection';
import Pricing from './components/Pricing';
import PlatformCTA from './components/PlatformCTA';
import About from './components/About';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ServicesSection from './components/ServicesSection';

function App() { 
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
