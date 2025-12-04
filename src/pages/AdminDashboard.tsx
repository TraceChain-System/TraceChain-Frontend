import React from 'react';
import { AdminLayout } from '../components/layout';
import { WelcomeSection, StatsGrid, ModulesGrid } from '../components/admin';
import { dashboardStats, adminModules } from '../data/adminData';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      {/* Welcome Section */}
      <WelcomeSection
        title="Admin Dashboard"
        subtitle="Configure and manage your TraceChain system settings, users, and workflows."
      />

      {/* Quick Stats */}
      <StatsGrid stats={dashboardStats} />

      {/* Admin Modules Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">System Modules</h3>
          <span className="text-xs text-slate-500 font-medium">{adminModules.length} modules available</span>
        </div>
      </div>

      {/* Modules Grid */}
      <ModulesGrid modules={adminModules} />
    </AdminLayout>
  );
};

export default AdminDashboard;
