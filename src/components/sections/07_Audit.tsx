import React from 'react';
import { AUDIT_CONTENT } from '../../content';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { CheckCircle2, Search, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const AuditSection: React.FC = () => {
  return (
    <section id={AUDIT_CONTENT.id} className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & H2 */}
        <SectionHeading
          eyebrow={AUDIT_CONTENT.eyebrow}
          title={AUDIT_CONTENT.h2}
          align="center"
        />

        {/* Premium Audit Report Card */}
        <div className="max-w-5xl mx-auto">
          <GlassCard padding="p-8 sm:p-12" className="border-gold/40 shadow-gold-glow/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Copy & Value Prop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
                  <Search className="w-3.5 h-3.5" />
                  <span>Free Visibility Diagnosis</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                  {AUDIT_CONTENT.copy}
                </h3>

                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  {AUDIT_CONTENT.body.split('what is currently holding your visibility back')[0]}
                  <strong className="text-white font-semibold">
                    what is currently holding your visibility back and where there is room to improve.
                  </strong>
                </p>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  <h4 className="text-xl font-heading font-bold text-gold">
                    {AUDIT_CONTENT.subHeading}
                  </h4>

                  <Button variant="gold" size="lg" showIcon fullWidth className="sm:w-auto">
                    {AUDIT_CONTENT.cta}
                  </Button>

                  <p className="text-xs sm:text-sm text-text-muted italic">
                    *{AUDIT_CONTENT.smallText}*
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Self-Ticking Checklist on Scroll */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-6"
              >
                <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-gold uppercase tracking-wider font-semibold">
                      SEO Audit Report Breakdown
                    </span>
                    <Shield className="w-4 h-4 text-gold" />
                  </div>

                  <div className="space-y-3">
                    {AUDIT_CONTENT.checklist.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.12 }}
                        className="p-3.5 rounded-xl bg-navy-950/80 border border-white/5 flex items-center justify-between group hover:border-gold/30 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1 rounded-full bg-gold/20 text-gold">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-sm sm:text-base font-semibold text-white">
                            {item}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-gold/80 bg-gold/10 px-2.5 py-0.5 rounded">
                          Audited
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
