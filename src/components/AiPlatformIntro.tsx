import { BrainCircuit, Zap, ShieldCheck, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const AiPlatformIntro = () => {
  return (
    <div className="py-12 bg-light-gray sm:py-16 lg:py-20">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              The AI Strategy Platform for Busy Leaders
            </h2>
            <p className="mt-4 text-lg text-charcoal">
              Get practical frameworks, proven templates, and actionable tools
              to implement AI successfully in your organization. No jargon, no
              hype—just results.
            </p>
            <Link
              to="/ai-platform"
              className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark"
            >
              Explore the Platform
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-8 mt-10 lg:mt-0">
            <BrainCircuit className="w-24 h-24 text-primary" />
            <Zap className="w-24 h-24 text-secondary" />
            <ShieldCheck className="w-24 h-24 text-primary" />
            <Rocket className="w-24 h-24 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPlatformIntro;