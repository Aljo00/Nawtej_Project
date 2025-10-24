import BenefitCard from './BenefitCard';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Lightbulb className="text-white" size={32} />,
    title: 'EXPERT GUIDANCE AND KNOWLEDGE',
    content: 'Leverage my extensive experience in process innovation and strategic leadership from the academic and healthcare sectors. I partner with leaders to navigate digital transformations, built on a foundation of collaboration with universities and global business leaders.',
  },
  {
    icon: <Target className="text-white" size={32} />,
    title: 'ACCOUNTABILITY AND GOAL SETTING',
    content: 'Stay focused on strategy implementation with tailored frameworks designed to set clear goals and KPIs. Through frequent check-ins and collaborative reviews, we ensure consistent progress and positive momentum, adapting our approach to fit your needs.',
  },
  {
    icon: <TrendingUp className="text-white" size={32} />,
    title: 'INNOVATIVE LEADERSHIP AND INNOVATIVE DIGITAL TOOLS',
    content: 'Utilize leading-edge AI tools and frameworks like the Ambidextrous Leadership and Digital Maturity Models to foster innovation and efficiency. We create personalized strategic growth plans to unlock potential at every level of your organization.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-charcoal text-center mb-16">
          Benefits of Hiring a Business Coach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              content={benefit.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
