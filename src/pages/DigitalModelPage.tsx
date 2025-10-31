import { Link } from "react-router-dom";
import {
  Crown,
  RefreshCw,
  Database,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import BusinessCoach from "../assets/Business_Coach.jpg";
import BusinessConsulting from "../assets/Business_Consulting.jpg";
import ExecutiveCoach from "../assets/Executive_Coach.jpg";
import HealthcareConsulting from "../assets/Healthcare_Consulting.jpg";
import PublicSpeaking from "../assets/Public_Speaking.jpg";

const DigitalModelPage = () => {
  const dimensions = [
    {
      icon: <Crown className="h-8 w-8 text-white" />,
      title: "Visionary Leadership",
      description:
        "Transformation begins with a clear vision from the top. We assess how effectively your leadership team inspires and guides the organization through digital change.",
      points: [
        "Forging a compelling vision for digital adoption",
        "Designing agile workflows and decision-making structures",
        "Fostering cross-departmental synergy and collaboration",
        "Empowering teams through transparency and open dialogue",
      ],
      conclusion:
        "Without inspired leadership, even the best strategies can falter. True transformation requires a unified vision.",
      image: BusinessCoach,
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-white" />,
      title: "Adaptive Business Models",
      description:
        "In a fast-paced digital world, your business model must be agile and resilient. We evaluate your ability to adapt and innovate in response to market shifts.",
      points: [
        "Harnessing data to enrich your value proposition",
        "Optimizing internal processes with cutting-edge technology",
        "Rapidly prototyping and scaling new digital products",
        "Monetizing digital channels and automating for efficiency",
      ],
      conclusion:
        "Stagnant business models lead to irrelevance. The future belongs to those who can adapt and evolve.",
      image: BusinessConsulting,
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Integrated Technology",
      description:
        "Mature organizations build a seamless technology ecosystem. We measure the integration and effectiveness of your digital infrastructure.",
      points: [
        "Creating a unified data repository for shared insights",
        "Equipping your workforce with collaborative digital tools",
        "Ensuring legacy systems and modern touchpoints work in harmony",
        "Building a robust, scalable, and secure cloud infrastructure",
      ],
      conclusion:
        "Siloed technology hinders growth. A fully integrated ecosystem is the backbone of a successful digital transformation.",
      image: ExecutiveCoach,
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Trust & Ethics",
      description:
        "Digital transformation is as much about culture as it is about technology. We gauge the level of trust and ethical alignment within your organization.",
      points: [
        "Aligning organizational values with technology adoption",
        "Building trust through transparency and shared governance",
        "Establishing effective two-way communication channels",
        "Committing to ethical data practices and digital equity",
      ],
      conclusion:
        "Culture is the engine of transformation. Without trust and ethical principles, progress is impossible.",
      image: HealthcareConsulting,
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Workforce Enablement",
      description:
        "Your people are your greatest asset. We focus on how you cultivate the talent and skills needed for sustained innovation and growth.",
      points: [
        "Developing strategic skills for future capability needs",
        "Implementing knowledge management systems to retain expertise",
        "Modeling digital behaviors to inspire widespread adoption",
        "Creating structures that support internal mobility and empowerment",
      ],
      conclusion:
        "An empowered workforce is an innovative workforce. Invest in your people to secure your future.",
      image: PublicSpeaking,
    },
  ];

  return (
    <div className="bg-gray-50 overflow-hidden pt-16">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="lg:col-start-1">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              The DTX Model
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Digital Transformation & Organizational Maturity Model
            </h3>
            <div className="mt-8">
              <p className="text-lg text-gray-500">
                Navigating the complexities of digital transformation is a
                monumental task. Our DTX Maturity Model, co-created with
                Professor Alan Brown, provides a clear roadmap to assess and
                elevate your organization's digital capabilities. It’s a
                versatile framework, equally effective for digital, cultural,
                or organizational transformations.
              </p>
              <p className="mt-5 text-lg text-gray-500">
                The model pinpoints your organization's current state across
                several key dimensions, using a simple 1-5 scale. This
                user-friendly approach not only clarifies where you stand but
                also illuminates the path to the next level of maturity. It's
                like having a personal guide for your transformation journey.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="relative">
              <svg
                className="hidden lg:block absolute -top-20 -right-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4029-42d3-89ec-fb68d618b685"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4029-42d3-89ec-fb68d618b685)"
                />
              </svg>
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={BusinessCoach}
                    alt="Business Coach"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              The 5 Dimensions of the DTX Model
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our model is built around five core dimensions that are critical
              for successful transformation.
            </p>
          </div>

          <div className="mt-20">
            <div className="flow-root">
              <ul className="-mb-8">
                {dimensions.map((dimension, dimensionIdx) => (
                  <li key={dimension.title}>
                    <div className="relative pb-8">
                      {dimensionIdx !== dimensions.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-white">
                            {dimension.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-xl font-medium text-gray-900">
                              {dimension.title}
                            </p>
                            <p className="mt-1 text-base text-gray-500">
                              {dimension.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {dimension.points.map((point) => (
                                <li key={point} className="flex items-start">
                                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-base text-gray-600">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 font-semibold text-gray-800">
                              {dimension.conclusion}
                            </p>
                          </div>
                          <div className="hidden lg:block lg:w-1/3">
                            <img
                              src={dimension.image}
                              alt={dimension.title}
                              className="rounded-lg shadow-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to accelerate your transformation?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  The DTX Model provides an objective, 360-degree view of your
                  digital maturity. Let's connect and explore how we can tailor
                  this framework to your unique needs.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="rounded-md object-cover object-center"
                src={PublicSpeaking}
                alt="Public Speaking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalModelPage;
