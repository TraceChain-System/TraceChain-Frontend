import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
