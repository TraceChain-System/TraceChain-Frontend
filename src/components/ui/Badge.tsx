import React from 'react';

type BadgeColor =
  | 'blue'
  | 'green'
  | 'purple'
  | 'amber'
  | 'pink'
  | 'indigo'
  | 'cyan'
  | 'red'
  | 'emerald';

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  size?: 'sm' | 'md';
  dot?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'blue', size = 'sm', dot = false }) => {
  const colorClasses: Record<BadgeColor, string> = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    purple: 'bg-purple-50 text-purple-700 ring-purple-600/20',
    amber: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    pink: 'bg-pink-50 text-pink-700 ring-pink-600/20',
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
    cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-600/20',
    red: 'bg-red-50 text-red-700 ring-red-600/20',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  };

  const dotColors: Record<BadgeColor, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
    red: 'bg-red-500',
    emerald: 'bg-emerald-500',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${colorClasses[color]} ${sizeClasses[size]} rounded-full font-medium ring-1 ring-inset`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[color]}`}></span>}
      {children}
    </span>
  );
};

export default Badge;
