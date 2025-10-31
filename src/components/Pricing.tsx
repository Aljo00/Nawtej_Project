import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    href: "#",
    price: "Free",
    period: "Forever",
    description: "Perfect for getting started with AI strategy",
    features: [
      "AI Strategy Canvas",
      "AI Business Glossary",
      "Quick AI Knowledge Check",
      "Basic templates & checklists",
      "Email newsletter access",
    ],
    buttonText: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    href: "#",
    price: "£49",
    period: "/month",
    yearly: "or £500 annually",
    description: "Complete toolkit for AI implementation",
    features: [
      "Everything in Starter",
      "Complete Executive AI Course",
      "Full AI Leadership Assessment",
      "Advanced templates & frameworks",
      "Monthly new content drops",
    ],
    buttonText: "Start Pro",
    highlighted: true,
  },
  {
    name: "Team",
    href: "#contact",
    price: "£400",
    period: "/month",
    yearly: "or £4,000 annually",
    description: "Professional functionality for up to 10 users",
    features: [
      "Everything in Professional",
      "Up to 10 user accounts",
      "Onboarding support",
      "Dedicated team support",
    ],
    buttonText: "Contact for Team Setup",
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="pricing" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-charcoal">
            Select the perfect plan for your AI strategy journey
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${tier.highlighted ? "border-primary" : "border-gray-200"}`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-charcoal">{tier.name}</h3>
                {tier.highlighted && (
                  <p className="absolute top-0 py-1.5 px-4 bg-primary rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-charcoal">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.period}
                  </span>
                </p>
                {tier.yearly && (
                  <p className="mt-1 text-sm text-charcoal">{tier.yearly}</p>
                )}
                <p className="mt-6 text-charcoal">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check
                        className="flex-shrink-0 w-6 h-6 text-primary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                onClick={tier.name === 'Team' ? scrollToContact : undefined}
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${tier.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-secondary text-white hover:bg-secondary-dark"}`}>
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;