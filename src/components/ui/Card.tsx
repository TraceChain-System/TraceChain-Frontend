import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'bordered';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  onClick,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-white border border-slate-200/60 shadow-sm',
    elevated: 'bg-white shadow-md shadow-slate-200/50',
    bordered: 'bg-white border-2 border-slate-200',
  };

  const baseClasses = `rounded-2xl ${variantClasses[variant]}`;
  const hoverClasses = hover
    ? 'transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/60'
    : '';

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
