import React, { useState, useEffect } from 'react';
import { GAP_CONTENT } from '../../content';
import { Search, MapPin, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export const TheGapSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = GAP_CONTENT.searchQuery;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
        }, 2000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* H2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight tracking-tight">
            {GAP_CONTENT.h2}
          </h2>
        </motion.div>

        {/* 2-Column Split: Search Scenario Mock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left Column Copy & Animated Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-lg sm:text-xl font-heading font-semibold text-white">
              {GAP_CONTENT.leftLead}
            </p>

            {/* Search Bar Mock with Typing Animation */}
            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-gold/30 shadow-gold-glow/20 flex items-center space-x-4">
              <Search className="w-6 h-6 text-gold flex-shrink-0" />
              <div className="flex-1 font-mono text-base sm:text-lg text-white">
                <span>{typedText}</span>
                <span className="animate-pulse text-gold font-bold">|</span>
              </div>
              <span className="bg-gold text-navy-950 px-3 py-1 rounded-lg font-heading font-bold text-xs sm:text-sm">
                SEARCH
              </span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-text-muted leading-relaxed">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                <span>{GAP_CONTENT.leftSub1}</span>
              </p>
              <p className="p-4 rounded-xl bg-navy-900/80 border border-white/10 text-white font-medium">
                {GAP_CONTENT.leftSub2}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Search Results Mock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-light" />
                  <span>Google Local Search Results</span>
                </span>
                <span className="text-xs text-text-muted">Top Rankings</span>
              </div>

              {/* 3 Clear Competitor Listings at Top */}
              <div className="space-y-3">
                <div className="bg-navy-900 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">1</span>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">Competitor A</h4>
                      <p className="text-xs text-text-muted">Local Ranking #1 · 4.9 ★ (86 reviews)</p>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-semibold">Visible</span>
                </div>

                <div className="bg-navy-900 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">Competitor B</h4>
                      <p className="text-xs text-text-muted">Local Ranking #2 · 4.7 ★ (52 reviews)</p>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-semibold">Visible</span>
                </div>

                <div className="bg-navy-900 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">Competitor C</h4>
                      <p className="text-xs text-text-muted">Local Ranking #3 · 4.6 ★ (41 reviews)</p>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-semibold">Visible</span>
                </div>
              </div>

              {/* Faded/Blurred "Your Business" Far Below */}
              <div className="pt-4 border-t border-dashed border-white/15">
                <div className="bg-navy-950/80 p-4 rounded-xl border border-red-500/30 opacity-40 blur-[0.6px] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center">?</span>
                    <div>
                      <h4 className="font-heading font-semibold text-text-muted text-sm line-through">Your Business</h4>
                      <p className="text-xs text-text-muted/60">Page 3+ · Not in top map results</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full flex items-center space-x-1">
                    <EyeOff className="w-3 h-3" />
                    <span>Not visible</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Stacked Lines Revealed One-by-One on Scroll */}
        <div className="max-w-4xl mx-auto space-y-6 text-center my-16">
          {GAP_CONTENT.stackedLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white/90"
            >
              <p>{line}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center pt-8"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold bg-gradient-to-r from-gold via-gold-light to-gold text-transparent bg-clip-text inline-block">
            {GAP_CONTENT.closingLine}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
