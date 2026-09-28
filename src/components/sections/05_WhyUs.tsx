import React from 'react';
import { WHY_US_CONTENT } from '../../content';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { Wrench, MapPin, Users, Search, Award, Store, Code2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUsSection: React.FC = () => {
  const chipIcons = [
    <Wrench className="w-4 h-4 text-gold" />,
    <MapPin className="w-4 h-4 text-gold" />,
    <Users className="w-4 h-4 text-gold" />,
    <Search className="w-4 h-4 text-gold" />,
    <Award className="w-4 h-4 text-gold" />,
    <Store className="w-4 h-4 text-gold" />,
    <Code2 className="w-4 h-4 text-gold" />,
  ];

  return (
    <section id={WHY_US_CONTENT.id} className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title={WHY_US_CONTENT.h2}
          align="center"
        />

        {/* Split Layout: Left Text & Right Chip Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 shadow-xl">
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-snug">
                {WHY_US_CONTENT.leftText}
              </p>
              <div className="mt-4 flex items-center space-x-2 text-gold font-semibold text-sm">
                <span>Custom tailored strategy</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 7 Glass Chips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {WHY_US_CONTENT.chips.map((chip, idx) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-chip px-4 py-3 rounded-xl flex items-center space-x-3 text-sm sm:text-base font-semibold text-white shadow-md hover:border-gold/50"
                >
                  <span className="p-1.5 rounded-lg bg-gold/10 border border-gold/20">
                    {chipIcons[idx]}
                  </span>
                  <span>{chip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Below Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard padding="p-8 sm:p-10" className="border-gold/30">
            <div className="space-y-6 text-center sm:text-left">
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
                {WHY_US_CONTENT.belowText}
              </p>
              
              <p className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                {WHY_US_CONTENT.boldText}
              </p>

              {/* Highlight Line with Gold Left Border */}
              <div className="p-4 sm:p-5 rounded-r-xl bg-navy-950/80 border-l-4 border-gold shadow-inner">
                <p className="text-base sm:text-lg font-bold text-gold italic">
                  {WHY_US_CONTENT.highlightLine}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
