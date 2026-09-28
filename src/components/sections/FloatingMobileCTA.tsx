import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { CTA_URL } from '../../constants';

export const FloatingMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 500px)
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-navy-950/95 border-t border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-slideUp">
      <Button variant="gold" size="md" fullWidth href={CTA_URL}>
        Get My Free SEO Audit
      </Button>
    </div>
  );
};
