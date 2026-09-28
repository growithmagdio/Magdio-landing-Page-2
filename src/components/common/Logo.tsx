import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', height = 44 }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <img
          src="/magdio icon lgo.jpeg"
          alt="MAGDIO — THE AI GROWTH STUDIO"
          style={{ height: `${height}px` }}
          className="w-auto object-contain rounded-md shadow-sm"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Precise SVG match for Magdio Logo */
        <div className="flex items-center gap-3" style={{ height: `${height}px` }}>
          <svg
            viewBox="0 0 100 100"
            className="h-full w-auto aspect-square overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoBlueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1E4FD8" />
                <stop offset="100%" stopColor="#2F6BFF" />
              </linearGradient>
              <linearGradient id="logoGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5B82E" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
            </defs>
            <rect x="10" y="48" width="15" height="34" rx="2" fill="url(#logoBlueGrad)" />
            <rect x="30" y="34" width="15" height="48" rx="2" fill="url(#logoBlueGrad)" />
            <rect x="50" y="20" width="15" height="62" rx="2" fill="url(#logoBlueGrad)" />
            <path d="M 5 66 L 30 46 L 50 25 L 75 12" stroke="url(#logoGoldGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 58 10 L 78 10 L 78 30" stroke="url(#logoGoldGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col leading-tight justify-center">
            <span className="font-heading font-extrabold text-white text-2xl tracking-wider">MAGDIO</span>
            <span className="font-sans font-bold text-white/90 text-[9.5px] tracking-[0.22em]">THE AI GROWTH STUDIO</span>
          </div>
        </div>
      )}
    </div>
  );
};
