import { Link } from 'react-router-dom';
import About_Img from "../assets/About_Img.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-xl">
              <img src={About_Img} alt="Nawtej Dosanjh" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Why Dr Nawtej Dosanjh
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Nawtej Dosanjh is a career academic and global strategist trusted by ultra-high-net-worth families to guide their children through some of the most critical developmental years. As the founder of Vedere University, he leads a global academic ecosystem and offers strategic mentorship and long-term educational planning.
              </p>
            </div>
            <Link to="/about" className="mt-6 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
