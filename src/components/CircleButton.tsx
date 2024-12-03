import React from 'react';

interface CircleButtonProps {
  onClick?: () => void;
}

export const CircleButton: React.FC<CircleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 bg-white rounded-full shadow-md 
                 transition-all duration-300 hover:scale-110
                 hover:shadow-lg border border-gray-100"
    />
  );
};