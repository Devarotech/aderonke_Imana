import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const PhilosophySection: React.FC = () => {
  const { philosophy } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <section
      id="philosophy"
      aria-label="Professional Philosophy"
      className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#F5F0E6] text-[#101B2D]' : 'bg-[#101B2D] text-white'
      }`}
    >
      {/* Subtle Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <Quote className={`w-96 h-96 ${isDay ? 'text-[#101B2D]' : 'text-[#B89A62]'}`} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center justify-center gap-2 mb-4"
        >
          <span className="w-8 h-px bg-[#B89A62]" />
          <span className={`text-xs font-semibold tracking-widest uppercase ${
            isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
          }`}>
            {philosophy.sectionLabel}
          </span>
          <span className="w-8 h-px bg-[#B89A62]" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-10 ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}
        >
          {philosophy.mainHeading}
        </motion.h2>

        {/* Large Featured Quotation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
          className="relative py-8 my-6"
        >
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mb-8" />
          
          <blockquote className={`font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic leading-snug tracking-tight ${
            isDay ? 'text-[#101B2D]' : 'text-[#FAF8F5]'
          }`}>
            “{philosophy.featuredQuote}”
          </blockquote>

          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-8" />
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className={`mt-8 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto ${
            isDay ? 'text-[#556377]' : 'text-stone-300'
          }`}
        >
          {philosophy.supportingParagraph}
        </motion.p>

        {/* Signature Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-10 pt-6"
        >
          <p className={`font-serif text-xl font-bold ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            Yetunde Aderonke Imana
          </p>
          <p className={`text-xs font-medium uppercase tracking-widest mt-1 ${
            isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
          }`}>
            Prosecutor & Chief State Counsel • Abuja, Nigeria
          </p>
        </motion.div>

      </div>
    </section>
  );
};
