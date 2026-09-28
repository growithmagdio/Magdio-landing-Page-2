import React, { useState } from 'react';
import { RESULTS_CONTENT } from '../../content';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { BrowserFrame } from '../common/BrowserFrame';
import { Award, CheckCircle2, Star, TrendingUp, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsSectionProps {
  onImageClick: (src: string, alt: string, caption?: string) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onImageClick }) => {
  const [activeTab, setActiveTab] = useState<'haber' | 'auto'>('haber');

  const activeCaseStudy = RESULTS_CONTENT.caseStudies.find((cs) => cs.id === activeTab)!;

  return (
    <section id={RESULTS_CONTENT.id} className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title={RESULTS_CONTENT.h2}
          subtitle={RESULTS_CONTENT.sub}
          align="center"
        />

        {/* A) Stat Strip (4 Tiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RESULTS_CONTENT.stats.map((stat, idx) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full text-center border-gold/30 hover:border-gold shadow-gold-glow/10">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gold mb-3 tracking-tight">
                  {stat.number}
                </div>
                <p className="text-sm sm:text-base text-text-muted font-medium leading-snug">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* B) Proof Blocks */}
        <div className="space-y-16">
          
          {/* Proof 1: Google Maps / Ranking Screenshot (Nethi Exports) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard padding="p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>Proof Block 01 · Local Business Visibility</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {RESULTS_CONTENT.proof1_nethi.title}
                  </h3>
                  <p className="text-text-muted text-sm sm:text-base mt-1">
                    {RESULTS_CONTENT.proof1_nethi.category}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-white/10 max-w-lg">
                  <div className="flex items-center space-x-2 text-gold text-xs font-semibold uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Rankings</span>
                  </div>
                  <p className="text-sm text-white font-medium">
                    {RESULTS_CONTENT.proof1_nethi.highlights}
                  </p>
                </div>
              </div>

              {/* 2 Browser Frames Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESULTS_CONTENT.proof1_nethi.images.map((img) => (
                  <BrowserFrame
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    caption={img.alt}
                    onImageClick={onImageClick}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Proof 2: Interactive Tabbed Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard padding="p-6 sm:p-10" className="border-primary-blue/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-blue/20 border border-primary-light/30 text-primary-light text-xs font-semibold mb-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Proof Block 02 · Detailed Case Study</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    E-Commerce Case Studies
                  </h3>
                </div>

                {/* Case Study Switcher Tabs */}
                <div className="flex p-1 rounded-xl bg-navy-950 border border-white/10">
                  <button
                    onClick={() => setActiveTab('haber')}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === 'haber'
                        ? 'bg-gold text-navy-950 shadow-md'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    Haber Living
                  </button>
                  <button
                    onClick={() => setActiveTab('auto')}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === 'auto'
                        ? 'bg-gold text-navy-950 shadow-md'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    Auto Spare Parts
                  </button>
                </div>
              </div>

              {/* Active Case Study Details */}
              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-gold mb-2">
                    {activeCaseStudy.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-mono">
                    {activeCaseStudy.category}
                  </p>
                </div>

                {/* 4-Step Horizontal Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10">
                    <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">01. Business</div>
                    <p className="text-sm text-white">{activeCaseStudy.business}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10">
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">02. Challenge</div>
                    <p className="text-sm text-text-muted">{activeCaseStudy.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10">
                    <div className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">03. SEO Work</div>
                    <p className="text-sm text-text-muted">{activeCaseStudy.seoWork}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900 border border-gold/40 shadow-gold-glow/10">
                    <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">04. Result</div>
                    <p className="text-sm font-semibold text-white">{activeCaseStudy.result}</p>
                  </div>
                </div>

                {/* Before / After Table for Haber */}
                {activeCaseStudy.beforeAfterTable && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-navy-950/60 p-4">
                    <div className="flex items-center space-x-2 text-gold text-xs font-bold uppercase mb-3">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Before → After SEO Performance</span>
                    </div>
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 text-text-muted">
                          <th className="py-2.5 px-3">Metric</th>
                          <th className="py-2.5 px-3 text-red-400">Before</th>
                          <th className="py-2.5 px-3 text-gold">After</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {activeCaseStudy.beforeAfterTable.map((row) => (
                          <tr key={row.metric} className="hover:bg-white/5">
                            <td className="py-2.5 px-3 font-medium text-white">{row.metric}</td>
                            <td className="py-2.5 px-3 text-text-muted">{row.before}</td>
                            <td className="py-2.5 px-3 font-bold text-gold">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Screenshots */}
                <div className={`grid grid-cols-1 ${activeCaseStudy.images.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-2xl mx-auto'} gap-6 pt-4`}>
                  {activeCaseStudy.images.map((img) => (
                    <BrowserFrame
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      caption={'caption' in img ? img.caption : img.alt}
                      onImageClick={onImageClick}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Proof 3: Conditional Testimonial (Hidden if showTestimonial is false) */}
          {RESULTS_CONTENT.showTestimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard padding="p-8">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <div className="flex justify-center text-gold space-x-1">
                    {[...Array(RESULTS_CONTENT.testimonialPlaceholder.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl text-white italic">
                    "{RESULTS_CONTENT.testimonialPlaceholder.quote}"
                  </p>
                  <div>
                    <h5 className="font-heading font-bold text-gold">
                      {RESULTS_CONTENT.testimonialPlaceholder.clientName}
                    </h5>
                    <p className="text-xs text-text-muted">
                      {RESULTS_CONTENT.testimonialPlaceholder.businessName}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Proof 4: Search Console Report */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard padding="p-6 sm:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Proof Block 04 · Real Search Visibility Report</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  Google Search Console Performance
                </h3>
              </div>

              <div className="max-w-4xl mx-auto">
                <BrowserFrame
                  src={RESULTS_CONTENT.report.image.src}
                  alt={RESULTS_CONTENT.report.image.alt}
                  caption={RESULTS_CONTENT.report.image.caption}
                  onImageClick={onImageClick}
                />
              </div>
            </GlassCard>
          </motion.div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-text-muted/80 italic">
            *{RESULTS_CONTENT.footerNote}*
          </p>
        </div>

      </div>
    </section>
  );
};
