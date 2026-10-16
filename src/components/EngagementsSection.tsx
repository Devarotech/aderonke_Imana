import React from 'react';
import { Globe, Users, BookOpen, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const EngagementsSection: React.FC = () => {
  const { engagements } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  };

  const renderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Globe className="w-5 h-5 text-[#B89A62]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#B89A62]" />;
      case 2:
        return <BookOpen className="w-5 h-5 text-[#B89A62]" />;
      case 3:
        return <Users className="w-5 h-5 text-[#B89A62]" />;
      default:
        return <Globe className="w-5 h-5 text-[#B89A62]" />;
    }
  };

  return (
    <section
      id="engagements"
      aria-label="Institutional Engagements and Professional Workshops"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FFFFFF] text-[#101B2D]' : 'bg-[#121E31] text-white'
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
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>
              {engagements.sectionLabel}
            </span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${isDay ? 'text-[#101B2D]' : 'text-white'}`}>
            {engagements.mainHeading}
          </h2>
          <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
            {engagements.introductoryText}
          </p>
        </motion.div>

        {/* 4 Engagements Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {engagements.items.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`p-7 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                isDay
                  ? 'bg-[#FAF8F5] border-[#E5DFD3] hover:border-[#B89A62]'
                  : 'bg-[#101B2D] border-white/10 hover:border-[#B89A62]/60'
              }`}
            >
              <div>
                {/* Header Tag and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                    isDay
                      ? 'bg-white border-[#B89A62]/30'
                      : 'bg-[#17263D] border-[#B89A62]/30'
                  }`}>
                    {renderIcon(idx)}
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm border ${
                    isDay
                      ? 'bg-white text-[#96773E] border-[#B89A62]/30'
                      : 'bg-[#17263D] text-[#D8BD8A] border-[#B89A62]/30'
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-2 leading-snug ${
                  isDay ? 'text-[#101B2D]' : 'text-white'
                }`}>
                  {item.title}
                </h3>

                {/* Organization & Focus Area */}
                <p className={`text-xs font-semibold mb-3 ${isDay ? 'text-[#96773E]' : 'text-[#B89A62]'}`}>
                  {item.organization} • {item.focusArea}
                </p>

                {/* Description */}
                <p className={`text-sm leading-relaxed font-light ${
                  isDay ? 'text-[#556377]' : 'text-stone-300'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Footer Indicator */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                isDay ? 'border-stone-200 text-[#687386]' : 'border-white/5 text-stone-400'
              }`}>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62]" />
                  <span>Verified Legal Public Service Record</span>
                </span>
                <span className="text-[11px] font-mono text-[#B89A62]">Abuja / Federal</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
