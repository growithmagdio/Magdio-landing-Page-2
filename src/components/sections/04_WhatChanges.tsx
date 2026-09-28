import React from 'react';
import { WHAT_CHANGES_CONTENT } from '../../content';
import { ArrowRight, Eye, PhoneCall, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatChangesSection: React.FC = () => {
  const stepIcons = [
    <CheckCircle className="w-6 h-6 text-gold" />,
    <Eye className="w-6 h-6 text-gold" />,
    <PhoneCall className="w-6 h-6 text-gold" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-900/60 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* H2 Heading with Animated Gold Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight tracking-tight flex flex-wrap items-center justify-center gap-3">
            <span>From Being Hard to Find</span>
            <span className="inline-flex items-center text-gold px-2">
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-gold stroke-[3]" />
              </motion.span>
            </span>
            <span className="text-gold">To Being Visible Where It Matters</span>
          </h2>
        </motion.div>

        {/* Body Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-2 text-base sm:text-lg text-text-muted"
        >
          <p>{WHAT_CHANGES_CONTENT.body1}</p>
          <p className="font-semibold text-white">{WHAT_CHANGES_CONTENT.body2}</p>
        </motion.div>

        {/* 3-Step Flow Connected by Gold Line */}
        <div className="relative mb-14">
          
          {/* Connecting Line (Desktop Horizontal, Mobile Vertical) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {WHAT_CHANGES_CONTENT.steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-between relative group hover:border-gold/50"
              >
                {/* Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/40 flex items-center justify-center mb-6 shadow-gold-glow/20 group-hover:scale-110 transition-transform">
                  <span className="font-heading font-extrabold text-gold text-lg">{step.num}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  {step.title}
                </h3>

                <div className="pt-4 flex items-center justify-center space-x-2 text-gold text-xs font-semibold uppercase tracking-wider">
                  {stepIcons[idx]}
                  <span>Step {step.num} Outcome</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Small Muted Italic Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-text-muted/70 italic max-w-xl mx-auto">
            *{WHAT_CHANGES_CONTENT.note}*
          </p>
        </motion.div>

      </div>
    </section>
  );
};
