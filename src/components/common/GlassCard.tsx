import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'p-6 sm:p-8',
}) => {
  return (
    <div
      className={`glass-card rounded-2xl relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1' : ''
      } ${padding} ${className}`}
    >
      {/* Subtle radial glow background inside card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
