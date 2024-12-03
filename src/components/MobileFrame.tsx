import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-gray-800">
        {/* 顶部刘海 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50" />
        
        {/* 内容区域 */}
        <div className="w-full h-full overflow-hidden rounded-[45px]">
          {children}
        </div>
        
        {/* 底部横条 */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};