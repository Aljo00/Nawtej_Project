import { User } from 'lucide-react';
import About_Img from "../assets/About_Img.jpg"

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-xl">
              <img src={About_Img} alt="Nawtej Dosanjh" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="text-lg text-primary font-semibold mb-4">
              YOUR LOCAL BUSINESS COACH / CONSULTANT
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              MEET NAWTEJ DOSANJH
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Dr. Nawtej Dosanjh is a renowned business coach & consultant. He is associated with Middlesex University, London as a Professor for its Master Programs in Healthcare Business & Management and Business Excellence & Innovation.
              </p>
              <p>
                He is passionate about helping businesses and has developed many frameworks for the NHS to help deliver great leaders & help companies to grow. His projects have delivered more than £1.5m in savings for NHS.
              </p>
              <p>
                As a business coach & consultant, Nawtej has helped many companies to reach their goals. His clients include businesses from all sectors and sizes, from startups to large corporations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
