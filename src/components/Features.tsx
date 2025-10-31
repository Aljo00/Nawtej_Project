
import { BrainCircuit, BarChart3, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit size={48} className="text-blue-500" />,
    headline: "AI-Powered Leadership",
    text: "Master ambidextrous leadership with our AI-powered frameworks. We help your teams excel at both efficiency and innovation, driving comprehensive growth.",
  },
  {
    icon: <BarChart3 size={48} className="text-blue-500" />,
    headline: "Strategic Growth ",
    text: "Achieve strategic clarity with our Digital Maturity Model. We create personalized growth plans that adapt to your unique needs at individual, team, or project levels.",
  },
  {
    icon: <Briefcase size={48} className="text-blue-500" />,
    headline: "Expert-Led Transformation",
    text: "Leverage our extensive experience in process innovation and strategic leadership to navigate your digital transformation successfully.",
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Innovative Digital Tools for Modern Leadership
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Drive your success with our cutting-edge solutions.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.headline} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{feature.headline}</h3>
                <p className="mt-4 text-base text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
