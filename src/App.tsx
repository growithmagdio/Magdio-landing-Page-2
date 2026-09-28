import { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/01_Hero';
import { TheGapSection } from './components/sections/02_TheGap';
import { WhatWeDoSection } from './components/sections/03_WhatWeDo';
import { WhatChangesSection } from './components/sections/04_WhatChanges';
import { WhyUsSection } from './components/sections/05_WhyUs';
import { ResultsSection } from './components/sections/06_Results';
import { AuditSection } from './components/sections/07_Audit';
import { FAQSection } from './components/sections/08_FAQ';
import { FinalCTASection } from './components/sections/09_FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingMobileCTA } from './components/sections/FloatingMobileCTA';
import { Lightbox } from './components/common/Lightbox';

export function App() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption?: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const handleOpenLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans selection:bg-gold selection:text-navy-950 relative overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <TheGapSection />
        <WhatWeDoSection />
        <WhatChangesSection />
        <WhyUsSection />
        <ResultsSection onImageClick={handleOpenLightbox} />
        <AuditSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <FloatingMobileCTA />

      {/* Image Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        alt={lightboxState.alt}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}

export default App;
