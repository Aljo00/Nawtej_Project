import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function BenefitCard({ icon, title, content }: BenefitCardProps) {
  return (
    <div className="bg-light-gray p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary">
        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-4">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
    </div>
  );
}