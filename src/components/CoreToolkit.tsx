import { GraduationCap, Target, Wrench } from "lucide-react";

const features = [
  {
    name: "AI Strategy Assessment",
    description:
      "Get your AI readiness score in 15 minutes with our comprehensive assessment. Includes personalized roadmap and priority recommendations.",
    icon: Target,
  },
  {
    name: "Executive AI Course",
    description:
      "Master AI strategy fundamentals with our 6-week intensive program. 18+ chapters packed with practical frameworks and real-world examples.",
    icon: GraduationCap,
  },
  {
    name: "Implementation Tools",
    description:
      "Ready-to-use templates, checklists, and frameworks that you can deploy immediately in your organization.",
    icon: Wrench,
  },
];

const CoreToolkit = () => {
  return (
    <div className="bg-light-gray py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            Core Toolkit Features
          </h2>
          <p className="mt-4 text-lg text-charcoal">
            Everything you need to build and execute a successful AI strategy.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-charcoal">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-charcoal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreToolkit;