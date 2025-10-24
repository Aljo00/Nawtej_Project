import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for getting started with AI strategy',
      features: [
        'AI Strategy Canvas',
        'AI Business Glossary',
        'Quick AI Knowledge Check',
        'Basic templates & checklists',
        'Email newsletter access',
      ],
      buttonText: 'Start Free',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '£49',
      period: '/month',
      yearlyPrice: '£500 annually',
      description: 'Complete toolkit for AI implementation',
      features: [
        'Everything in Starter',
        'Complete Executive AI Course',
        'Full AI Leadership Assessment',
        'Advanced templates & frameworks',
        'Monthly new content drops',
      ],
      buttonText: 'Start Pro',
      buttonStyle: 'bg-primary hover:bg-primary-dark',
      highlighted: true,
    },
    {
      name: 'Team',
      price: '£400',
      period: '/month',
      yearlyPrice: '£4,000 annually',
      description: 'Professional functionality for up to 10 users',
      features: [
        'Everything in Professional',
        'Up to 10 user accounts',
        'Onboarding support',
        'Dedicated team support',
      ],
      buttonText: 'Contact for Team Setup',
      buttonStyle: 'bg-secondary hover:bg-secondary-dark',
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="min-h-screen bg-light-gray flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your AI strategy journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                plan.highlighted
                  ? 'ring-4 ring-primary transform md:scale-105'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                  RECOMMENDED
                </div>
              )}

              <h3 className="text-2xl font-bold text-charcoal mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-charcoal">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.period}</span>
                {plan.yearlyPrice && (
                  <div className="text-sm text-gray-500 mt-1">
                    or {plan.yearlyPrice}
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.name === 'Team' ? scrollToContact : undefined}
                className={`w-full ${plan.buttonStyle} text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
