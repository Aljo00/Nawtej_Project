export default function PlatformCTA() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Lead with AI?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-10">
          Transform Uncertainty into Competitive Advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToPricing}
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
          >
            Start Free
          </button>
          <button
            onClick={scrollToPricing}
            className="bg-charcoal hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </section>
  );
}
