import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BrowserFrameProps {
  src: string;
  alt: string;
  caption?: string;
  onImageClick?: (src: string, alt: string, caption?: string) => void;
  className?: string;
  aspectRatio?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  src,
  alt,
  caption,
  onImageClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onImageClick) {
      onImageClick(src, alt, caption);
    }
  };

  return (
    <div className={`flex flex-col group ${className}`}>
      <div
        onClick={handleClick}
        className="rounded-xl overflow-hidden border border-white/10 bg-navy-900 shadow-2xl transition-all duration-300 hover:border-gold/40 hover:shadow-gold-glow/20 cursor-pointer group-hover:-translate-y-1"
        role="button"
        tabIndex={0}
        aria-label={`View enlarged screenshot: ${alt}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Browser Top Bar */}
        <div className="bg-navy-950/90 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="bg-navy-900 px-3 py-1 rounded-md text-[11px] font-mono text-text-muted/70 flex items-center space-x-1 max-w-[200px] sm:max-w-[300px] truncate">
            <span className="text-gold/80">https://</span>
            <span className="truncate">google.com/search?q=verified-seo-results</span>
          </div>
          <div className="text-text-muted/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative bg-navy-950 overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <span className="bg-navy-900/90 text-gold text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/30 backdrop-blur-md flex items-center space-x-1">
              <span>Click to view full image</span>
            </span>
          </div>
        </div>
      </div>

      {caption && (
        <p className="mt-2.5 text-xs sm:text-sm text-center text-text-muted italic font-sans">
          {caption}
        </p>
      )}
    </div>
  );
};
