
import { useState } from 'react';
import Business_coach from "../assets/Business_Coach.jpg"
import Business_consultant from "../assets/Business_Consulting.jpg"
import Healthcare_Consulting from "../assets/Healthcare_Consulting.jpg"
import Excutive_Coach from "../assets/Executive_Coach.jpg"
import Workshop_Training from "../assets/Workshop_Training.jpg"
import Public_Speaking from "../assets/Public_Speaking.jpg"

const services = [
  {
    title: "BUSINESS COACHING",
    description:
      "As a business and executive coach, I help optimize organizational effectiveness through personalized growth strategies focused on critical elements like leadership, digital innova-tion, and strategy. My coaching process begins with a discovery call to understand your business context and goals. Change your company, and boost your leadership skills—it all starts with a chat. Let’s talk, and I’ll develop a custom plan just for you.",
    imageUrl: Business_coach,
  },
  {
    title: "BUSINESS CONSULTING",
    description:
      "My consulting practice partners with organizations across industries and sectors to build capabilities for adaptation and success. Stuck on a plan? Let’s talk. Leadership training? Modernizing your digital systems? Or improving your processes? No problem, I’ll do it all. I’ll make sure your team has the tools—training, resources, and ongoing support—to get there. Lasting change starts with a solid foundation—that’s what we’re building. They will learn the best methods and then apply them immediately to improve your organization.",
    imageUrl: Business_consultant,
  },
  {
    title: "HEALTHCARE CONSULTING",
    description:
      "In healthcare, I partner with Vedere University to collaborate with Access Healthcare. We have created research programs in, for example, fall prevention and substance abuse, from which we have gained immense insights. We have innovated process improvement and used initiatives in AI and data science to help doctors provide a first-class service for pa-tients. We implement evidence-based solutions that drive measurable improvements. We’ll check where things stand now, create better ways of working, help you put the plan into action, and keep an eye on how well it’s all going. We have helped to create millions in cost savings.",
    imageUrl: Healthcare_Consulting,
  },
  {
    title: "EXECUTIVE COACHING",
    description:
      "As an executive coach, I help leaders excel in strategic thinking, digital leadership, change management, innovation, and cross-cultural leadership. Asking good questions and listen-ing carefully are my best tools. If you’re searching for long-term leadership growth, I en-hance your self-awareness and refine your leadership skills.",
    imageUrl: Excutive_Coach,
  },
  {
    title: "WORKSHOPS & TRAINING",
    description:
      "We design and facilitate interactive workshops and training customized to each organiza-tion’s needs. The workshop topics I cover include leadership development in AI.mbidextrous thinking (simultaneously maximizing being efficient and innovative) and other critical capabilities for organizational success. My engaging facilitation style pro-motes participation, motivation, and capability building.",
    imageUrl: Workshop_Training,
  },
  {
    title: "PUBLIC SPEAKING",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    imageUrl: Public_Speaking,
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            OUR SERVICES
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => setActiveService(service)}
              className={`px-4 py-3 text-sm font-semibold text-center rounded-md transition-colors duration-200 ease-in-out
                ${
                  activeService.title === service.title
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div className="mt-10 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="h-64 w-full object-cover md:h-full"
                src={activeService.imageUrl}
                alt={activeService.title}
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
              <p className="mt-4 text-base text-gray-600">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
