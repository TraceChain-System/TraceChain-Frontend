import React from 'react';
import { Card } from '../ui';
import { UsersIcon, FolderIcon, DocumentIcon, LightningIcon } from '../icons';

interface StatCardData {
  id: string;
  title: string;
  value: number | string;
  icon: 'users' | 'folder' | 'document' | 'lightning';
  color: 'emerald' | 'blue' | 'purple' | 'indigo';
}

interface StatCardProps {
  stat: StatCardData;
}

const iconComponents = {
  users: UsersIcon,
  folder: FolderIcon,
  document: DocumentIcon,
  lightning: LightningIcon,
};

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
  },
};

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = iconComponents[stat.icon];
  const colors = colorClasses[stat.color];

  return (
    <Card className="p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.title}</div>
          <div className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">{stat.value}</div>
          <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-500">↑</span>
            <span>12% from last month</span>
          </div>
        </div>
        <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
          <IconComponent className={`w-7 h-7 ${colors.text}`} />
        </div>
      </div>
    </Card>
  );
};

interface StatsGridProps {
  stats: StatCardData[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default StatCard;
export type { StatCardData };
