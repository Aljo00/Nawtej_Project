import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-charcoal text-center mb-16">
          Meet the Expert Behind the Frameworks
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
              <User size={120} className="text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-charcoal mb-2">
              Dr. Nawtej Dosanjh
            </h3>
            <p className="text-xl text-primary mb-6 font-semibold">
              International Higher Education Leader, Digital Innovator, & Trusted Advisor
            </p>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Dr. Nawtej Dosanjh is an innovator and transformative leader in higher education and executive coaching. With a career focused on delivering impact and scaling education through digital innovation, his work is defined by a relentless drive for excellence.
              </p>
              <p>
                He has held prestigious roles as Global Dean at Hult International Business School and Chief Academic Officer at the Digital Academy at Global University Systems, where he has shaped the future of learning and leadership development on a global scale.
              </p>
              <p>
                Through his AIStrategiser platform, Dr. Dosanjh brings decades of expertise to leaders navigating the complex landscape of artificial intelligence, providing them with practical frameworks and proven strategies to transform uncertainty into competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
