
const testimonials = [
    {
      quote: "His creativity is rooted in the possible and practical. His integrity is unparalleled, and I trust him completely to always do the right thing.",
      author: "Professor Alan Brown",
      title: "Academic, Entrepreneur, Digital Strategist.",
    },
    {
      quote: "His knack for asking insightful questions at the right moments and his genuine desire to help others grow were instrumental in guiding my path forward.",
      author: "Dr. Michael Haupt",
      title: "Managing Director, Accenture Strategy & Consulting.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Expert Guidance, Proven Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-md">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
