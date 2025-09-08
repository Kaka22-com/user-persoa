import React from 'react';

interface PillProps {
  text: string;
}

const Pill: React.FC<PillProps> = ({ text }) => {
  return (
    <div className="bg-red-100 text-red-800 text-sm font-medium me-2 px-3 py-1.5 rounded-full">
      {text}
    </div>
  );
};

export default Pill;
