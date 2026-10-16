/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { SkipToContent } from './components/SkipToContent';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { RecognitionSection } from './components/RecognitionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function AppContent() {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-[#B89A62]/30 ${
        isDay
          ? 'bg-[#FAF8F5] text-[#101B2D] selection:text-[#101B2D]'
          : 'bg-[#101B2D] text-stone-100 selection:text-white'
      }`}
    >
      <SkipToContent />
      <Navbar />
      
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <RecognitionSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
