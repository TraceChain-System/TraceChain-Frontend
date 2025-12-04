import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/layout';
import { Card } from '../components/ui';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
}

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, icon }) => {
  return (
    <AdminLayout>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link 
          to="/admin" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
            <p className="text-slate-500 mt-1">{description}</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Card */}
      <Card className="p-12 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">Module Under Development</h3>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
          We're working hard to bring you this feature. This module will be available in an upcoming release.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Return to Dashboard
          </Link>
        </div>
      </Card>
    </AdminLayout>
  );
};

// Organization & Projects
export const OrganizationPage: React.FC = () => (
  <PlaceholderPage
    title="Organization & Projects"
    description="Manage organizational structure, projects, and team hierarchies."
    icon="🏢"
  />
);

// Editor / Templates
export const TemplatesPage: React.FC = () => (
  <PlaceholderPage
    title="Editor / Templates"
    description="Configure rich text editor and manage document templates."
    icon="✏️"
  />
);

// Item Types
export const ItemTypesPage: React.FC = () => (
  <PlaceholderPage
    title="Item Types"
    description="Define item types, custom fields, and compliance configurations."
    icon="📋"
  />
);

// Picklists
export const PicklistsPage: React.FC = () => (
  <PlaceholderPage
    title="Picklists"
    description="Create and manage dropdown options for item fields and forms."
    icon="📝"
  />
);

// Relationships
export const RelationshipsPage: React.FC = () => (
  <PlaceholderPage
    title="Relationships"
    description="Define how different item types relate and connect to each other."
    icon="🔗"
  />
);

// Workflows
export const WorkflowsPage: React.FC = () => (
  <PlaceholderPage
    title="Workflows"
    description="Create automated workflows and state transitions for items."
    icon="⚙️"
  />
);

// Lookup Matrices
export const LookupMatricesPage: React.FC = () => (
  <PlaceholderPage
    title="Lookup Matrices"
    description="Configure complex multi-dimensional lookup tables and matrices."
    icon="🔍"
  />
);

// Permissions
export const PermissionsPage: React.FC = () => (
  <PlaceholderPage
    title="Permissions"
    description="Manage user permissions, roles, and access control policies."
    icon="🔐"
  />
);

// Users
export const UsersPage: React.FC = () => (
  <PlaceholderPage
    title="Users"
    description="Add, edit, and manage user accounts and profile information."
    icon="👥"
  />
);

export default PlaceholderPage;
