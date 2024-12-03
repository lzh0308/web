import React from 'react';

interface LoginButtonProps {
  onClick?: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-20 w-full py-4 px-6 
                 bg-blue-500 text-base font-medium 
                 text-white rounded-full shadow-lg
                 transition-all duration-300
                 hover:bg-blue-600 hover:shadow-xl active:scale-98"
    >
      立即登录
    </button>
  );
};