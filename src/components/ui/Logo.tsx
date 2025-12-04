import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  return (
    <Link to="/admin" className="flex items-center gap-3 group">
      <div
        className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105`}
      >
        TC
      </div>
      {showText && (
        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">TraceChain</h1>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Admin Console</p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
