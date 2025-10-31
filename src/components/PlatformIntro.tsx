import { Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformIntro = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-light-gray">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            <Zap className="inline-block w-6 h-6" />
            AI Strategy Platform
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-charcoal sm:text-5xl sm:tracking-tight lg:text-6xl">
            The AI Strategy Platform for Busy Leaders
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-charcoal">
            Get practical frameworks, proven templates, and actionable tools to
            implement AI successfully in your organization. No jargon, no
            hype—just results.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/ai-platform"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
            >
              <Rocket className="-ml-1 mr-3 h-5 w-5" />
              Quick Start Wizard
            </Link>
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark"
            >
              Start Free
            </button>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-charcoal">25+</h3>
              <p className="mt-2 text-lg font-medium text-charcoal">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-charcoal">50+</h3>
              <p className="mt-2 text-lg font-medium text-charcoal">
                Countries
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-charcoal">$2B+</h3>
              <p className="mt-2 text-lg font-medium text-charcoal">
                Value Delivered
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-charcoal">1000+</h3>
              <p className="mt-2 text-lg font-medium text-charcoal">
                Executives Trained
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformIntro;