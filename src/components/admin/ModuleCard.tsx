import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from '../ui';
import { ArrowRightIcon } from '../icons';

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

interface ModuleCardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  badgeColor: BadgeColor;
  path: string;
}

interface ModuleCardProps {
  module: ModuleCardData;
}

const colorClasses: Record<BadgeColor, string> = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  amber: 'bg-amber-100',
  pink: 'bg-pink-100',
  indigo: 'bg-indigo-100',
  cyan: 'bg-cyan-100',
  red: 'bg-red-100',
  emerald: 'bg-emerald-100',
};

const textColorClasses: Record<BadgeColor, string> = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  amber: 'text-amber-600',
  pink: 'text-pink-600',
  indigo: 'text-indigo-600',
  cyan: 'text-cyan-600',
  red: 'text-red-600',
  emerald: 'text-emerald-600',
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Link to={module.path} className="group">
      <Card
        hover
        className="p-6 h-full relative overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-100/0 group-hover:from-slate-50/50 group-hover:to-slate-100/30 transition-all duration-300 pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-5">
            <div
              className={`w-14 h-14 rounded-2xl ${colorClasses[module.badgeColor]} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
            >
              {module.icon}
            </div>
            <Badge color={module.badgeColor}>{module.badge}</Badge>
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-800">{module.title}</h4>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">{module.description}</p>
          <div className={`flex items-center text-sm ${textColorClasses[module.badgeColor]} font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            <span>Open Module</span>
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

interface ModulesGridProps {
  modules: ModuleCardData[];
}

export const ModulesGrid: React.FC<ModulesGridProps> = ({ modules }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleCard;
export type { ModuleCardData };
