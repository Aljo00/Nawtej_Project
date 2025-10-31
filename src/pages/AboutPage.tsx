import { Target, GraduationCap, BookOpen, School, Star, Briefcase, ShieldAlert, Users, Calendar, CheckCircle } from 'lucide-react';

const AdvisoryServiceCard = ({ icon, title, details }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold text-charcoal ml-4">{title}</h3>
    </div>
    <p className="text-gray-600">{details}</p>
  </div>
);

const SupplementalServiceItem = ({ icon, text }) => (
  <div className="flex items-start">
    {icon}
    <p className="text-gray-600 ml-4">{text}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="bg-white text-charcoal mt-12">
      <header className="bg-gray-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-primary">Nawtej Dosanjh Advisory</h1>
        <p className="text-xl text-gray-600 mt-4">Strategic Counsel for the Next Generation</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section id="why-nawtej" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Dr Nawtej Dosanjh</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Private Academic Advisor to Global Families</h3>
              <h4 className="text-xl font-semibold text-charcoal mb-6">Founder & President, Vedere University</h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Nawtej Dosanjh is a career academic and global strategist trusted by ultra-high-net-worth families to guide their children through some of the most critical developmental years.</p>
                <p>As the founder of Vedere University, he leads a global academic ecosystem and offers strategic mentorship and long-term educational planning. He is not a tutor. He is not a coach. He is a discreet, thoughtful architect of intellectual development and purpose.</p>
                <p>He creates structures of thought — frameworks, models, and questions — that enable others to build their own understanding.</p>
                <p>Rather than someone who hands out knowledge he designs scaffolding that allows people to grow intellectually, to make connections, and to find insights that endure long after a collaboration.</p>
                <p>Future proofing the Next Generation isn’t about predicting jobs or technologies. It’s about cultivating adaptability, curiosity, and resilience.</p>
                <p>A future-proof student is one who knows how to learn, unlearn, and relearn — someone who can thrive amidst disruption because they carry both depth of discipline and breadth of imagination.</p>
                <p>He shows that ambidextrous thinking is not just an academic idea, but a lived practice that can empower individuals and organizations alike.</p>
                <p>He empowers people with tools — intellectual and practical — that help them navigate complexity and build futures that mattered.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6">He is supported by a network of:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Users className="text-primary w-6 h-6 mr-3 mt-1" /><span className="text-gray-700">Professors and researchers from IIvy League institutions in Europe and North America</span></li>
                <li className="flex items-start"><GraduationCap className="text-primary w-6 h-6 mr-3 mt-1" /><span className="text-gray-700">Former school heads, Deans, Provosts, admissions officers, and curriculum experts</span></li>
                <li className="flex items-start"><BookOpen className="text-primary w-6 h-6 mr-3 mt-1" /><span className="text-gray-700">Subject specialists in neuroscience, ethics, global policy, and the arts</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="philosophy" className="mb-20">
          <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Philosophy</h2>
            <blockquote className="text-xl text-gray-700 italic space-y-4">
              <p>"We don’t just prepare students to get into university. We help them grow, adapt, and thrive through education’s most transformative years."</p>
              <p>"Especially for children of privilege, we offer grounded, strategic guidance to build character, purpose, and lifelong ambition."</p>
              <p>"We put together a tailored, highly personalized program to ensure long term future proofing."</p>
            </blockquote>
          </div>
        </section>

        <section id="advisory-services" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Advisory Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AdvisoryServiceCard icon={<Target className="text-secondary w-8 h-8" />} title="1. Academic Identity, Purpose Mapping & Deep Mentorship" details="For ages 13–18. Deep discovery of strengths, motivations, and learning preferences. Personalised “Academic North Star” roadmap." />
            <AdvisoryServiceCard icon={<Star className="text-secondary w-8 h-8" />} title="2. Portfolio Strategy" details="Extracurricular positioning, personal statement coaching, mock interviews. Strategic narrative development." />
            <AdvisoryServiceCard icon={<GraduationCap className="text-secondary w-8 h-8" />} title="3. Graduate School & Fellowship Advisory" details="Support for master’s, PhD, MBA and fellowship applications. Academic writing, publishing mentorship, and research strategy." />
            <AdvisoryServiceCard icon={<School className="text-secondary w-8 h-8" />} title="4. Educational Transitions & Future Proofing" details="Transition support for students entering university or relocating abroad. Study skills, emotional regulation, course selection and adaptation. Support for both students and parents." />
          </div>
        </section>

        <section id="supplemental-services" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Supplemental & Custom Services</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <SupplementalServiceItem icon={<Briefcase className="text-primary w-6 h-6 mr-3 mt-1" />} text="Gap Year & Sabbatical Planning: Design of intellectually enriching experiences including research, service, or mentorship" />
            <SupplementalServiceItem icon={<ShieldAlert className="text-primary w-6 h-6 mr-3 mt-1" />} text="Academic Emergency Response: Discreet support during suspension, withdrawal, or crisis" />
            <SupplementalServiceItem icon={<Users className="text-primary w-6 h-6 mr-3 mt-1" />} text="Family Education Strategy: Sessions with parents to align goals, review tutors/schools, and define direction" />
            <SupplementalServiceItem icon={<Calendar className="text-primary w-6 h-6 mr-3 mt-1" />} text="Quarterly Narrative Reports: Holistic updates that track identity, confidence, and development" />
          </div>
        </section>

        <section id="how-we-work">
          <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-center"><CheckCircle className="text-green-500 w-6 h-6 mr-3" /><span className="text-gray-700">Engagements by referral or invitation only</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-6 h-6 mr-3" /><span className="text-gray-700">Available virtually or in-person</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-6 h-6 mr-3" /><span className="text-gray-700">Tiered access models: annual advisory, strategic intensives, and on-demand sessions</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-6 h-6 mr-3" /><span className="text-gray-700">All services confidential and bespoke</span></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}