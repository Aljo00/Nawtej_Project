import { User } from 'lucide-react';
import Hero_Img from "../assets/Public_Speaking.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Educator. Innovator. Author. Leader.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Shaping the future of education, technology, and business through strategic innovation and executive coaching.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img src={Hero_Img} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
