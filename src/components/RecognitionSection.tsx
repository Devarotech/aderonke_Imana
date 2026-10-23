import React from 'react';
import { CheckCircle2, ShieldCheck, Award, Lock, ExternalLink } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const RecognitionSection: React.FC = () => {
  const { contributions } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const renderHighlightIcon = (id: string) => {
    switch (id) {
      case 'con-1':
        return <CheckCircle2 className="w-6 h-6 text-[#B89A62]" />;
      case 'con-2':
        return <ShieldCheck className="w-6 h-6 text-[#B89A62]" />;
      case 'con-3':
        return <Award className="w-6 h-6 text-[#B89A62]" />;
      default:
        return <Award className="w-6 h-6 text-[#B89A62]" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contributions"
      aria-label="Professional Contributions and Institutional Recognition"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#141113] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B89A62]" />
            <span className={`text-xs font-semibold tracking-widest uppercase ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              {contributions.sectionLabel}
            </span>
            <span className="w-8 h-px bg-[#B89A62]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            {contributions.mainHeading}
          </h2>
          <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
            isDay ? 'text-[#556377]' : 'text-stone-300'
          }`}>
            {contributions.introductoryText}
          </p>
        </motion.div>

        {/* 3 Highlights in Refined Editorial Panels with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {contributions.highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              className={`p-8 rounded-sm relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border ${
                isDay
                  ? 'bg-white border-[#E0D8CB] hover:border-[#B89A62] shadow-sm'
                  : 'bg-[#1D191B] border-[#B89A62]/30 hover:border-[#B89A62] shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-sm border flex items-center justify-center ${
                    isDay
                      ? 'bg-[#F9F6F0] border-[#B89A62]/30'
                      : 'bg-[#141113] border-white/10'
                  }`}>
                    {renderHighlightIcon(highlight.id)}
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border ${
                    isDay
                      ? 'bg-[#F2ECE1] text-[#96773E] border-[#B89A62]/30'
                      : 'bg-[#141113] text-[#D8BD8A] border-[#B89A62]/30'
                  }`}>
                    {highlight.badge}
                  </span>
                </div>

                <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-3 ${
                  isDay ? 'text-[#101B2D]' : 'text-white'
                }`}>
                  {highlight.title}
                </h3>

                <p className={`text-sm leading-relaxed font-light ${
                  isDay ? 'text-[#556377]' : 'text-stone-300'
                }`}>
                  {highlight.description}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center gap-2 ${
                isDay ? 'border-stone-100' : 'border-white/10'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62]" />
                <span className={`text-xs font-medium tracking-wide ${
                  isDay ? 'text-[#687386]' : 'text-stone-300'
                }`}>
                  Verified Prosecutorial Record
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Discreet Professional Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={`p-4 sm:p-5 rounded-sm border flex items-start sm:items-center gap-3 ${
            isDay
              ? 'bg-[#F2ECE1] border-stone-200 text-[#556377]'
              : 'bg-[#1D191B]/60 border-white/5 text-stone-300'
          }`}
        >
          <Lock className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs leading-relaxed font-light">
            {contributions.note}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
