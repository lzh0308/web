import React from 'react';

interface BackgroundProps {
  imageUrl?: string;
}

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 to-white" />
  );
};