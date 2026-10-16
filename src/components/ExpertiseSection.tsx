import React, { useState } from 'react';
import { Scale, ShieldAlert, HeartHandshake, BookOpen, Landmark, ChevronRight, BookCheck } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA, ExpertiseItem } from '../data/portfolioData';
import { ExpertiseModal } from './ExpertiseModal';
import { useTheme } from '../context/ThemeContext';

export const ExpertiseSection: React.FC = () => {
  const { expertise } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null);

  const renderIcon = (name: ExpertiseItem['iconName']) => {
    const iconClass = "w-6 h-6 text-[#B89A62]";
    switch (name) {
      case 'scale':
        return <Scale className={iconClass} />;
      case 'shield':
        return <ShieldAlert className={iconClass} />;
      case 'heart-handshake':
        return <HeartHandshake className={iconClass} />;
      case 'book-open':
        return <BookOpen className={iconClass} />;
      case 'landmark':
        return <Landmark className={iconClass} />;
      default:
        return <Scale className={iconClass} />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <section
        id="expertise"
        aria-label="Areas of Professional Expertise"
        className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
          isDay ? 'bg-[#F2ECE1] text-[#101B2D]' : 'bg-[#17263D] text-white'
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
                {expertise.sectionLabel}
              </span>
              <span className="w-8 h-px bg-[#B89A62]" />
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
              isDay ? 'text-[#101B2D]' : 'text-white'
            }`}>
              {expertise.mainHeading}
            </h2>
            <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
              isDay ? 'text-[#556377]' : 'text-stone-300'
            }`}>
              {expertise.introductoryText}
            </p>
          </motion.div>

          {/* Editorial Grid Cards (Unnumbered, Clickable to open Statutory Deep-Dive) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {expertise.items.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onClick={() => setSelectedItem(item)}
                className={`group relative p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between cursor-pointer border ${
                  isDay
                    ? 'bg-white border-[#E0D8CB] hover:border-[#B89A62] shadow-sm'
                    : 'bg-[#101B2D] border-white/10 hover:border-[#B89A62]/70 shadow-md'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Card Header: Icon with Gold Accent */}
                  <div className={`flex items-center justify-between mb-6 pb-4 border-b ${
                    isDay ? 'border-stone-100' : 'border-white/5'
                  }`}>
                    <div className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-colors ${
                      isDay
                        ? 'bg-[#F9F6F0] border-[#B89A62]/40 group-hover:border-[#B89A62] group-hover:bg-[#EFE9DD]'
                        : 'bg-[#17263D] border-[#B89A62]/30 group-hover:border-[#B89A62] group-hover:bg-[#1c2e47]'
                    }`}>
                      {renderIcon(item.iconName)}
                    </div>
                    <span className={`text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                      isDay ? 'text-[#96773E] group-hover:text-[#101B2D]' : 'text-[#B89A62] group-hover:text-[#D8BD8A]'
                    }`}>
                      <span>View Framework</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-3 transition-colors leading-snug ${
                    isDay ? 'text-[#101B2D] group-hover:text-[#96773E]' : 'text-white group-hover:text-[#D8BD8A]'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed font-light mb-6 ${
                    isDay ? 'text-[#556377]' : 'text-stone-300'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-sm border ${
                            isDay
                              ? 'bg-[#FAF8F5] text-[#2C384A] border-stone-200'
                              : 'bg-[#17263D] text-stone-300 border-white/5'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Prompt */}
                  <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs ${
                    isDay ? 'border-stone-100 text-[#96773E]' : 'border-white/5 text-[#B89A62]'
                  }`}>
                    <span className="font-semibold tracking-wide flex items-center gap-1.5">
                      <BookCheck className="w-3.5 h-3.5" />
                      <span>Statutory & Procedural Details</span>
                    </span>
                    <span className={`font-mono text-[10px] uppercase ${isDay ? 'text-stone-400' : 'text-stone-400'}`}>
                      Click to read
                    </span>
                  </div>
                </div>

                {/* Subtle Bottom Gold Accent on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B89A62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Interactive Modal */}
      <ExpertiseModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};
