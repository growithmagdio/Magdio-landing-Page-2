import React from 'react';
import { WHAT_WE_DO_CONTENT } from '../../content';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { MapPin, Globe, Target, ShieldCheck, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatWeDoSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-8 h-8 text-gold" />,
    Globe: <Globe className="w-8 h-8 text-gold" />,
    Target: <Target className="w-8 h-8 text-gold" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-gold" />,
    LineChart: <LineChart className="w-8 h-8 text-gold" />,
  };

  const cards = WHAT_WE_DO_CONTENT.cards;
  const topRow = cards.slice(0, 3);
  const bottomRow = cards.slice(3, 5);

  return (
    <section id={WHAT_WE_DO_CONTENT.id} className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title={WHAT_WE_DO_CONTENT.h2}
          subtitle={WHAT_WE_DO_CONTENT.intro}
          align="center"
        />

        {/* 3 + 2 Glass Cards Grid Layout */}
        <div className="space-y-6">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {topRow.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="p-3.5 rounded-xl bg-navy-900 border border-white/10 inline-block mb-6 shadow-md group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                      {iconMap[card.iconName]}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-text-muted text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Focused SEO Signal</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards (Centered on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:max-w-4xl md:mx-auto">
            {bottomRow.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="p-3.5 rounded-xl bg-navy-900 border border-white/10 inline-block mb-6 shadow-md group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                      {iconMap[card.iconName]}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-text-muted text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Focused SEO Signal</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
