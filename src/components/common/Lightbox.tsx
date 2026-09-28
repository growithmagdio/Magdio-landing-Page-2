import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  src,
  alt,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-navy-900 border border-white/10 rounded-2xl p-3 sm:p-5 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-text-muted hover:text-white bg-navy-950/80 hover:bg-gold/20 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="w-full flex-1 flex items-center justify-center overflow-auto rounded-xl max-h-[80vh]">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="w-full mt-3 pt-3 border-t border-white/10 text-center">
            <p className="text-sm sm:text-base text-text-muted font-sans font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
