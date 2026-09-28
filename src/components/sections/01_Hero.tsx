import React from 'react';
import { HERO_CONTENT } from '../../content';
import { Button } from '../common/Button';
import { MapPin, Star, TrendingUp, CheckCircle, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-blue">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-6 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{HERO_CONTENT.eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.12] tracking-tight mb-6">
              {HERO_CONTENT.h1}
            </h1>

            {/* Body Lines */}
            <div className="space-y-3 mb-8 text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              <p>{HERO_CONTENT.body1}</p>
              <p>{HERO_CONTENT.body2}</p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <Button variant="gold" size="lg" showIcon className="w-full sm:w-auto">
                {HERO_CONTENT.primaryCTA}
              </Button>
            </div>

            {/* Small Muted Italic Under CTA */}
            <p className="text-xs sm:text-sm text-text-muted/80 italic mb-8 max-w-xl">
              *{HERO_CONTENT.underCTA}*
            </p>

            {/* Trust Row */}
            <div className="pt-6 border-t border-white/10 flex items-center">
              <a
                href="#results"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm text-text-muted hover:text-gold transition-colors font-medium"
              >
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{HERO_CONTENT.trustRowText}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code-Built Google Maps Local Pack Mock Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Local Pack Card */}
              <div className="glass-card rounded-2xl p-5 border border-white/15 shadow-2xl relative z-10 backdrop-blur-xl">
                {/* Search Bar Top */}
                <div className="bg-navy-950/90 rounded-xl p-3 mb-4 flex items-center space-x-3 border border-white/10">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <div className="flex-1 text-xs font-mono text-white/90 truncate">
                    Google Maps · <span className="text-gold font-semibold">[Your Service] Near Me</span>
                  </div>
                  <span className="text-[10px] bg-primary-blue/30 text-primary-light px-2 py-0.5 rounded font-mono">MAP PACK</span>
                </div>

                {/* 3 Pack Listings */}
                <div className="space-y-3">
                  
                  {/* #1 HIGHLIGHTED YOUR BUSINESS LISTING */}
                  <div className="relative bg-gradient-to-r from-navy-900 to-navy-800 p-4 rounded-xl border-2 border-gold/60 shadow-gold-glow/40 transition-all transform hover:scale-[1.02]">
                    <div className="absolute -top-3 right-3 bg-gradient-to-r from-gold to-gold-light text-navy-950 font-heading font-extrabold text-xs px-3 py-0.5 rounded-full shadow-md flex items-center space-x-1">
                      <span>#1 RANKED</span>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-heading font-bold text-white text-base">Your Business</h3>
                          <CheckCircle className="w-4 h-4 text-gold fill-gold/20" />
                        </div>
                        <div className="flex items-center space-x-1 text-gold text-xs mt-1">
                          <span className="font-bold">5.0</span>
                          <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                            ))}
                          </div>
                          <span className="text-text-muted text-[11px]">(128 reviews)</span>
                        </div>
                        <p className="text-[11px] text-text-muted mt-1">Local Service Specialist · Open 24/7</p>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <span className="p-1.5 bg-gold/20 text-gold rounded-lg flex items-center justify-center">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <span className="p-1.5 bg-primary-blue/20 text-primary-light rounded-lg flex items-center justify-center">
                          <Navigation className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Competitor Listing 2 (Muted) */}
                  <div className="bg-navy-900/40 p-3 rounded-xl border border-white/5 opacity-60">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono text-text-muted">#2</span>
                          <h4 className="font-heading font-semibold text-text-muted text-sm">Competitor Business A</h4>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-text-muted/70 mt-0.5">
                          <span>4.2</span>
                          <Star className="w-3 h-3 fill-text-muted/50 text-text-muted/50" />
                          <span>(34 reviews)</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted/60">0.8 mi</span>
                    </div>
                  </div>

                  {/* Competitor Listing 3 (Muted) */}
                  <div className="bg-navy-900/30 p-3 rounded-xl border border-white/5 opacity-40">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono text-text-muted">#3</span>
                          <h4 className="font-heading font-semibold text-text-muted text-sm">Competitor Business B</h4>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-text-muted/70 mt-0.5">
                          <span>3.9</span>
                          <Star className="w-3 h-3 fill-text-muted/50 text-text-muted/50" />
                          <span>(19 reviews)</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted/60">1.4 mi</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Mini Ranking Chart Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 z-20 bg-navy-900/95 border border-gold/40 rounded-xl p-3.5 shadow-2xl backdrop-blur-xl max-w-[210px]"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-gold/20 text-gold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-mono uppercase">Local Rank Trend</div>
                    <div className="text-xs font-bold text-white flex items-center">
                      <span>Rank #12</span>
                      <span className="text-gold mx-1">→</span>
                      <span className="text-gold font-extrabold">Rank #1</span>
                    </div>
                  </div>
                </div>
                {/* Mini SVG Trend Line */}
                <svg viewBox="0 0 160 35" className="w-full h-8 overflow-visible">
                  <path
                    d="M 10 30 L 50 24 L 90 14 L 150 4"
                    fill="none"
                    stroke="#F5B82E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="150" cy="4" r="4" fill="#FFD166" className="animate-ping" />
                  <circle cx="150" cy="4" r="4" fill="#F5B82E" />
                </svg>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
