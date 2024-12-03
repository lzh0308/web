import React from 'react';
import { CircleButton } from './CircleButton';

export const CircleGrid: React.FC = () => {
  return (
    <div className="relative z-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200">
      <div className="grid grid-cols-4 gap-4 w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <CircleButton key={index} />
        ))}
      </div>
    </div>
  );
};