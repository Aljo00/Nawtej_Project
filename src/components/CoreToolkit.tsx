import { Target, GraduationCap, Wrench } from 'lucide-react';

export default function CoreToolkit() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-charcoal text-center mb-16">
          Core Toolkit Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-light-gray p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              AI Strategy Assessment
            </h3>
            <p className="text-gray-600">
              Get your AI readiness score in 15 minutes with our comprehensive assessment. Includes personalized roadmap and priority recommendations.
            </p>
          </div>

          <div className="bg-light-gray p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Executive AI Course
            </h3>
            <p className="text-gray-600">
              Master AI strategy fundamentals with our 6-week intensive program. 18+ chapters packed with practical frameworks and real-world examples.
            </p>
          </div>

          <div className="bg-light-gray p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Wrench className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Implementation Tools
            </h3>
            <p className="text-gray-600">
              Ready-to-use templates, checklists, and frameworks that you can deploy immediately in your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
