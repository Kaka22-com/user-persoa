import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => {
  return (
    <section>
      <h3 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">
        {title}
      </h3>
      <div className="text-gray-600">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
