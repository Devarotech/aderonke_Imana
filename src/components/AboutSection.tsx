import React, { useState } from 'react';
import { Building2, MapPin, Briefcase, FileCheck, Award, Scale, FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { ExecutiveDossierModal } from './ExecutiveDossierModal';
import { downloadVCard } from '../utils/vcard';

export const AboutSection: React.FC = () => {
  const { about, profile } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const [dossierOpen, setDossierOpen] = useState(false);

  return (
    <section
      id="about"
      aria-label="About Yetunde Aderonke Imana"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#101B2D] text-white'
      }`}
    >
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className={`w-full h-full ${
          isDay
            ? 'bg-[radial-gradient(#B89A62_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-20'
            : 'bg-[radial-gradient(#B89A62_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B89A62]" />
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>
              {about.sectionLabel}
            </span>
            <span className="w-8 h-px bg-[#B89A62]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            {about.mainHeading}
          </h2>
          <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
            isDay ? 'text-[#556377]' : 'text-stone-300'
          }`}>
            {about.leadStatement}
          </p>
        </motion.div>

        {/* Content Grid: Editorial Columns + Summary Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Text (Editorial Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            className={`lg:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed font-normal ${
              isDay ? 'text-[#2C384A]' : 'text-stone-200'
            }`}
          >
            {about.paragraphs.map((para, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? `text-lg sm:text-xl font-serif leading-relaxed border-l-2 pl-4 italic ${
                        isDay
                          ? 'text-[#101B2D] border-[#B89A62]'
                          : 'text-[#F4EFE6] border-[#B89A62]'
                      }`
                    : ''
                }
              >
                {para}
              </p>
            ))}

            {/* Editorial Quotation Callout */}
            <div className={`mt-8 p-6 sm:p-7 rounded-sm shadow-sm border ${
              isDay
                ? 'bg-white border-[#E5DFD3] text-[#101B2D]'
                : 'bg-[#17263D] border-[#B89A62]/30 text-white'
            }`}>
              <blockquote className={`font-serif text-lg md:text-xl italic leading-relaxed ${
                isDay ? 'text-[#101B2D]' : 'text-[#F4EFE6]'
              }`}>
                “Guided by a strong belief in justice, institutional integrity, and the rule of law, dedicated to contributing to a legal system that respects due process and public confidence.”
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#B89A62]" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>
                  Chief State Counsel Yetunde Aderonke Imana
                </span>
              </div>
            </div>
          </motion.div>

          {/* Professional Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Appointment Card */}
            <div className={`p-7 rounded-sm shadow-xl border-t-4 border-[#B89A62] ${
              isDay
                ? 'bg-white border border-[#E5DFD3] text-[#101B2D]'
                : 'bg-[#17263D] border border-white/10 text-white'
            }`}>
              <span className={`text-[11px] uppercase tracking-widest font-semibold block mb-2 ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                Official Appointment
              </span>
              <h3 className={`font-serif text-2xl font-bold mb-1 ${
                isDay ? 'text-[#101B2D]' : 'text-white'
              }`}>
                {profile.title}
              </h3>
              <p className={`text-sm font-medium mb-4 ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                {profile.department}
              </p>

              <div className={`space-y-4 pt-4 border-t text-xs sm:text-sm ${
                isDay ? 'border-stone-200' : 'border-white/10'
              }`}>
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className={`block text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                      Institution
                    </span>
                    <span className={`font-medium ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                      {profile.chambers}
                    </span>
                    <span className={`block ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                      {profile.ministry}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className={`block text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                      Duty Station
                    </span>
                    <span className={`font-medium ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                      {profile.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <div>
                    <span className={`block text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                      Focus Area
                    </span>
                    <span className={`font-medium ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                      Complex Casework & Counterterrorism
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer with Executive Brief and Save Contact actions */}
              <div className={`mt-6 pt-4 border-t space-y-3 ${
                isDay ? 'border-stone-200' : 'border-white/10'
              }`}>
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${
                  isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                }`}>
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Active Federal Commission</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={() => setDossierOpen(true)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                      isDay
                        ? 'bg-white hover:bg-[#F2ECE1] text-[#101B2D] border-stone-300 hover:border-[#B89A62]'
                        : 'bg-[#101B2D] hover:bg-[#1f3250] text-stone-200 hover:text-white border-white/10 hover:border-[#B89A62]'
                    }`}
                  >
                    <FileText className="w-3 h-3 text-[#B89A62]" />
                    <span>Executive Brief</span>
                  </button>

                  <button
                    type="button"
                    onClick={downloadVCard}
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                      isDay
                        ? 'bg-[#B89A62]/15 hover:bg-[#B89A62] text-[#96773E] hover:text-[#101B2D] border-[#B89A62]/40'
                        : 'bg-[#B89A62]/20 hover:bg-[#B89A62] text-[#D8BD8A] hover:text-[#101B2D] border-[#B89A62]/40'
                    }`}
                  >
                    <Download className="w-3 h-3" />
                    <span>Save Contact</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Core Tenets / Summary Pillars */}
            <div className={`p-6 rounded-sm space-y-4 border shadow-sm ${
              isDay
                ? 'bg-white border-[#E5DFD3] text-[#101B2D]'
                : 'bg-[#17263D] border-white/10 text-white'
            }`}>
              <div className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-[#B89A62]" />
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-300'}`}>
                  Core Tenets of Practice
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {about.summaryPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 border-b last:border-0 ${
                      isDay ? 'border-stone-100' : 'border-white/5'
                    }`}
                  >
                    <span className={`text-xs font-medium ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                      {pillar.label}
                    </span>
                    <span className={`text-xs font-semibold text-right ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                      {pillar.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Executive Dossier Modal */}
      <ExecutiveDossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />
    </section>
  );
};
