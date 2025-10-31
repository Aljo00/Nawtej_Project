import { BookOpen, Sparkles } from "lucide-react";

const publications = [
  {
    name: "A Climate of Chaos",
    subtitle: "This Parched Earth",
    description:
      "An compelling novel exploring the intersection of environmental challenges and human resilience. Dr. Dosanjh brings his unique perspective on leadership and innovation to this thought-provoking narrative about our planet's future.",
    icon: BookOpen,
  },
  {
    name: "AI Leadership Guide",
    subtitle: "Coming Soon",
    description:
      "A comprehensive management book on AI strategy and implementation. Drawing from years of executive coaching and organizational transformation, this upcoming publication will provide leaders with actionable frameworks for navigating the AI revolution.",
    icon: Sparkles,
  },
];

const Publications = () => {
  return (
    <div className="bg-light-gray py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            Author & Thought Leader
          </h2>
          <p className="mt-4 text-lg text-charcoal">
            Sharing insights on leadership, innovation, and our collective future.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {publications.map((pub) => (
            <div
              key={pub.name}
              className="bg-white p-8 rounded-lg shadow-md flex"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <pub.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-charcoal">
                  {pub.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-semibold ${pub.subtitle === "Coming Soon"
                      ? "text-secondary"
                      : "text-charcoal"}`}>
                  {pub.subtitle}
                </p>
                <p className="mt-2 text-base text-charcoal">
                  {pub.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;