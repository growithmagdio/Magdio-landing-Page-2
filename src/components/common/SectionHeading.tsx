import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase shadow-sm">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-[1.15] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-text-muted font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
