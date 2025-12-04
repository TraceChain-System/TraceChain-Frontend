import React from 'react';

interface UserAvatarProps {
  initials: string;
  name?: string;
  showName?: boolean;
  size?: 'sm' | 'md' | 'lg';
  gradient?: string;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const UserAvatar: React.FC<UserAvatarProps> = ({
  initials,
  name,
  showName = true,
  size = 'md',
  gradient = 'from-indigo-500 to-purple-600',
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  return (
    <button className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200 group">
      <div
        className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold shadow-sm`}
      >
        {initials}
      </div>
      {showName && name && (
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-sm font-medium text-slate-700">{name}</span>
          <ChevronDownIcon className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-y-0.5" />
        </div>
      )}
    </button>
  );
};

export default UserAvatar;
