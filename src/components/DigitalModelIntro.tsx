import { Link } from "react-router-dom";
import { Network } from "lucide-react";

const DigitalModelIntro = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="flex justify-center">
            <Network className="h-48 w-48 text-blue-600" />
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Digital Transformation & Organizational Maturity Model
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Introducing the Digital Transformation (DTX) Maturity Model - a
              comprehensive framework Professor Alan Brown and I created to help
              assess and advance an organization's digital capabilities. Our
              model works equally well for any type of transformation, be it
              digital, cultural, or organizational. It figures out what you can
              do and then builds a personal path for you to follow. It’s like
              having a coach in your pocket.
            </p>
            <div className="mt-8">
              <Link
                to="/digital-model"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalModelIntro;