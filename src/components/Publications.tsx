import { BookOpen, Sparkles } from 'lucide-react';

export default function Publications() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-charcoal text-center mb-16">
          Author & Thought Leader
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <BookOpen className="text-primary" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal">
                  A Climate of Chaos
                </h3>
                <p className="text-gray-600">This Parched Earth</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              An compelling novel exploring the intersection of environmental challenges and human resilience. Dr. Dosanjh brings his unique perspective on leadership and innovation to this thought-provoking narrative about our planet's future.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-secondary/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <Sparkles className="text-secondary" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal">
                  AI Leadership Guide
                </h3>
                <p className="text-secondary font-semibold">Coming Soon</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A comprehensive management book on AI strategy and implementation. Drawing from years of executive coaching and organizational transformation, this upcoming publication will provide leaders with actionable frameworks for navigating the AI revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
