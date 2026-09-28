import React from 'react';
import { FINAL_CTA_CONTENT } from '../../content';
import { Button } from '../common/Button';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-primary-dark/30 via-navy-900 to-navy-950 bg-grid-pattern border-t border-white/10">
      {/* Background Radial Glow & Animated Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Animated Rising Arrow Line SVG in Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <motion.path
            d="M 100 350 Q 350 250 500 200 T 900 50"
            fill="none"
            stroke="#F5B82E"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border-gold/40 shadow-gold-glow/30 backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Take Action Today</span>
          </div>

          {/* H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-4 tracking-tight">
            {FINAL_CTA_CONTENT.h2}
          </h2>

          {/* Large Gold Line */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-gold mb-6">
            {FINAL_CTA_CONTENT.goldLine}
          </p>

          {/* Body */}
          <p className="text-base sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {FINAL_CTA_CONTENT.body}
          </p>

          {/* Large Gold CTA Button */}
          <div className="flex flex-col items-center justify-center mb-8">
            <Button variant="gold" size="lg" showIcon className="text-lg px-10 py-5">
              {FINAL_CTA_CONTENT.cta}
            </Button>
          </div>

          {/* Closing Line */}
          <p className="text-sm sm:text-base font-bold text-white tracking-wide">
            {FINAL_CTA_CONTENT.closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
