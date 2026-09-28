import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { Menu, X } from 'lucide-react';
import { CTA_URL } from '../../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group focus:outline-none" aria-label="Magdio Home">
          <Logo height={40} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-muted hover:text-white font-medium text-sm transition-colors duration-200 focus:outline-none focus:text-gold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <Button variant="gold" size="sm" href={CTA_URL}>
            Get My Free SEO Audit
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-muted hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/95 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-muted hover:text-gold font-medium py-2 text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="gold"
              size="md"
              fullWidth
              href={CTA_URL}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get My Free SEO Audit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
