import React from 'react';

interface SkillIndicatorProps {
  name: string;
  level: number; // 1 to 5
}

const SkillIndicator: React.FC<SkillIndicatorProps> = ({ name, level }) => {
  const totalDots = 5;

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700 font-medium text-base">{name}</span>
      <div className="flex space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index < level ? 'bg-red-500' : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillIndicator;
