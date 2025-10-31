
import { useState } from 'react';
import Healthcare_Consulting from "../assets/Healthcare_Consulting.jpg"
import Workshop_Training from "../assets/Workshop_Training.jpg"
import Public_Speaking from "../assets/Public_Speaking.jpg"

const services = [
  {
    title: "Healthcare Consulting",
    description:
      "Through our partnership with Vedere University and Access Healthcare, we drive innovation in healthcare. Our research in areas like fall prevention and substance abuse has yielded immense insights. We leverage AI and data science to enhance patient care, implementing evidence-based solutions for measurable improvements and significant cost savings.",
    imageUrl: Healthcare_Consulting,
  },
  {
    title: "Workshops & Training",
    description:
      "Our customized workshops and training sessions are designed to build critical capabilities for your organization's success. We focus on leadership development, AI.mbidextrous thinking, and other essential skills. Our engaging, interactive style fosters participation and motivation, ensuring lasting impact.",
    imageUrl: Workshop_Training,
  },
  {
    title: "Public Speaking",
    description:
      "As an accomplished speaker with thousands of hours of experience at prestigious institutions worldwide, I inspire leaders to adopt an ambidextrous approach. My talks focus on leading organizations to simultaneously maximize efficiency and innovation, driving sustainable growth and a competitive edge.",
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
