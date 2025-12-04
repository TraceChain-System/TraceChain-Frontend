import React from 'react';
import { InfoIcon } from '../icons';

interface InfoBoxProps {
  title: string;
  message: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, message, variant = 'info' }) => {
  const variantClasses = {
    info: {
      container: 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200',
      icon: 'text-purple-600',
      title: 'text-purple-900',
      message: 'text-purple-800',
    },
    warning: {
      container: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200',
      icon: 'text-amber-600',
      title: 'text-amber-900',
      message: 'text-amber-800',
    },
    success: {
      container: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
      icon: 'text-emerald-600',
      title: 'text-emerald-900',
      message: 'text-emerald-800',
    },
    error: {
      container: 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200',
      icon: 'text-red-600',
      title: 'text-red-900',
      message: 'text-red-800',
    },
  };

  const styles = variantClasses[variant];

  return (
    <div className={`${styles.container} border rounded-xl p-6`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <InfoIcon className={`w-6 h-6 ${styles.icon}`} />
        </div>
        <div>
          <h4 className={`text-sm font-bold ${styles.title} mb-1`}>{title}</h4>
          <p className={`text-sm ${styles.message}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
