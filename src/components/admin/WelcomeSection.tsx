import React from 'react';

interface WelcomeSectionProps {
  title: string;
  subtitle: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, subtitle }) => {
  // Get current time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-indigo-600 mb-1">{getGreeting()}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
          <p className="text-slate-500 mt-2 max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            System Online
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
