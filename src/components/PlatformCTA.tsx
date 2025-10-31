const PlatformCTA = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to Lead with AI?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-100">
          Transform Uncertainty into Competitive Advantage.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
          >
            Start Free
          </button>
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformCTA;