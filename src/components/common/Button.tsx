import React from 'react';
import { CTA_URL } from '../../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'blue' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  href = CTA_URL,
  className = '',
  showIcon = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  const variantClasses = {
    gold: 'bg-gradient-to-r from-gold to-gold-light text-navy-950 hover:brightness-110 shadow-gold-glow hover:shadow-gold-glow/80 border border-gold/30',
    blue: 'bg-gradient-to-r from-primary-blue to-primary-dark text-white hover:brightness-110 shadow-blue-glow hover:shadow-blue-glow/80 border border-primary-light/30',
    outline: 'bg-transparent text-white border border-white/20 hover:border-gold hover:text-gold hover:bg-white/5',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-xl tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-950';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        onClick={onClick}
      >
        <span>{children}</span>
        {showIcon && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
      {showIcon && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
