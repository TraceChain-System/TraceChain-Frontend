// Admin Panel Types

export interface StatCard {
  id: string;
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: 'emerald' | 'blue' | 'purple' | 'indigo' | 'amber' | 'pink' | 'cyan' | 'red' | 'green';
}

export interface AdminModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  badgeColor: 'blue' | 'green' | 'purple' | 'amber' | 'pink' | 'indigo' | 'cyan' | 'red' | 'emerald';
  path: string;
}

export interface User {
  id: string;
  name: string;
  initials: string;
  role: string;
  avatar?: string;
}

export interface DashboardStats {
  activeUsers: number;
  projects: number;
  itemTypes: number;
  workflows: number;
}
