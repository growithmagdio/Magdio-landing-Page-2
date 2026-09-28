import React, { useState } from 'react';
import { FAQ_CONTENT } from '../../content';
import { SectionHeading } from '../common/SectionHeading';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={FAQ_CONTENT.id} className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title={FAQ_CONTENT.h2}
          align="center"
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_CONTENT.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-navy-900/90 border-gold/50 shadow-gold-glow/10'
                      : 'bg-navy-900/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-950 rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-lg sm:text-xl font-heading font-bold text-white pr-4">
                      {item.q}
                    </span>
                    <span
                      className={`p-2 rounded-full border transition-colors flex-shrink-0 ${
                        isOpen
                          ? 'bg-gold text-navy-950 border-gold'
                          : 'bg-white/5 text-text-muted border-white/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-base text-text-muted leading-relaxed border-t border-white/5 mt-1">
                          <p>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
