import { Link } from "react-router-dom";

const PlatformCTA = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to Lead with AI?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Get the frameworks, tools, and knowledge you need to transform
          uncertainty into a competitive advantage. Our platform is designed for
          busy leaders who need results.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/ai-platform"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-light-gray"
          >
            Explore Platform
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformCTA;