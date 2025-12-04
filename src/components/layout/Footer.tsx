import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-8 mt-16">
      <div className="border-t border-slate-200/80 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-500 font-medium">
              © {currentYear} TraceChain
            </span>
            <nav className="hidden sm:flex items-center gap-4">
              <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Documentation</a>
              <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Support</a>
              <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-500">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
