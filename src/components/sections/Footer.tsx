import React from 'react';
import { FOOTER_CONTENT } from '../../content';
import { Logo } from '../common/Logo';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" aria-label="Magdio Home">
              <Logo height={42} />
            </a>
            <p className="text-sm text-text-muted/80 max-w-md font-sans leading-relaxed">
              Magdio builds focused local SEO strategies to get your business into Google's Top 3 in 90 days.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-gold pt-2">
              <Globe className="w-4 h-4" />
              <a
                href={`https://${FOOTER_CONTENT.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {FOOTER_CONTENT.website}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between">
            <nav className="flex flex-wrap gap-6 sm:gap-8">
              {FOOTER_CONTENT.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-semibold text-text-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted/60 space-y-4 sm:space-y-0">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p className="font-mono">Google Top 3 Local SEO Growth System</p>
        </div>

      </div>
    </footer>
  );
};
