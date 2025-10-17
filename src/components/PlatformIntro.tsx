import { Zap, Rocket } from 'lucide-react';

export default function PlatformIntro() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-platform" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4 flex items-center justify-center gap-3">
            The AI Strategy Platform for Busy Leaders
            <Zap className="text-secondary" size={40} />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Get practical frameworks, proven templates, and actionable tools to implement AI successfully in your organization. No jargon, no hype—just results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
          >
            <Rocket size={24} />
            Quick Start Wizard
          </button>
          <button
            onClick={scrollToPricing}
            className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
          >
            Start Free
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
            <div className="text-sm text-gray-600">Value Delivered</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-gray-600">Executives Trained</div>
          </div>
        </div>
      </div>
    </section>
  );
}
