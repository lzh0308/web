import React from 'react';
import { Background } from './components/Background';
import { CircleGrid } from './components/CircleGrid';
import { LoginButton } from './components/LoginButton';
import { MobileFrame } from './components/MobileFrame';

function App() {
  const handleLogin = () => {
    console.log('点击了登录按钮');
  };

  return (
    <MobileFrame>
      <div className="relative flex flex-col min-h-full w-full">
        <Background />
        
        {/* 欢迎文字 */}
        <div className="relative z-10 pt-16 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">欢迎使用</h1>
        </div>

        {/* 主要内容区域 */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-8">
          <div className="px-6 space-y-4">
            <CircleGrid />
            <LoginButton onClick={handleLogin} />
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

export default App;