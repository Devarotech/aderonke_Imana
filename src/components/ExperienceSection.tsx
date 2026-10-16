import React from 'react';
import { Building, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;
  const { appointment, responsibilities } = experience;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="experience"
      aria-label="Professional Experience and Current Appointment"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#101B2D] text-white'
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
              {experience.sectionLabel}
            </span>
            <span className="w-8 h-px bg-[#B89A62]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            {experience.mainHeading}
          </h2>
        </motion.div>

        {/* Current Official Appointment Editorial Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`border rounded-sm shadow-xl overflow-hidden mb-16 ${
            isDay
              ? 'bg-white border-[#E0D8CB]'
              : 'bg-[#17263D] border-[#B89A62]/30'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Header Panel */}
            <div className={`lg:col-span-5 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
              isDay
                ? 'bg-[#101B2D] text-white border-stone-200'
                : 'bg-[#101B2D] text-white border-[#B89A62]/30'
            }`}>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#17263D] border border-[#B89A62]/40 text-[#D8BD8A] text-xs font-semibold uppercase tracking-wider mb-4">
                  <Shield className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Public Prosecutorial Service</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {appointment.position}
                </h3>
                
                <p className="text-lg text-[#D8BD8A] font-serif italic mb-6">
                  {appointment.unit}
                </p>

                <div className="space-y-3 text-sm text-stone-300">
                  <div className="flex items-center gap-2.5">
                    <Building className="w-4 h-4 text-[#B89A62] shrink-0" />
                    <span className="text-stone-200">{appointment.institution}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 flex items-center justify-center text-xs text-[#B89A62] font-bold">🏛️</span>
                    <span className="text-stone-300">{appointment.organization}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B89A62] shrink-0" />
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator (without unconfirmed dates) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#B89A62]" />
                <span className="font-semibold text-xs tracking-wider uppercase text-[#D8BD8A]">Active Federal Prosecutorial Commission</span>
              </div>
            </div>

            {/* Right Context Panel */}
            <div className={`lg:col-span-7 p-8 md:p-10 flex flex-col justify-center ${
              isDay ? 'bg-white text-[#101B2D]' : 'bg-[#17263D] text-stone-200'
            }`}>
              <span className={`text-xs font-semibold uppercase tracking-widest mb-3 block ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                Mandate & Institutional Role
              </span>
              <p className={`text-lg sm:text-xl font-serif leading-relaxed mb-6 italic ${
                isDay ? 'text-[#101B2D]' : 'text-stone-100'
              }`}>
                “{appointment.introductoryDescription}”
              </p>
              <p className={`text-sm leading-relaxed ${
                isDay ? 'text-[#556377]' : 'text-stone-300'
              }`}>
                Operating within the federal prosecution apparatus to evaluate evidence, uphold statutory safeguards, and conduct complex criminal proceedings on behalf of the Federal Republic of Nigeria.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Responsibilities Subheading (Without Filter) */}
        <div>
          <div className="mb-8">
            <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${
              isDay ? 'text-[#101B2D]' : 'text-white'
            }`}>
              {experience.subheading}
            </h3>
            <p className={`text-xs mt-1.5 ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
              Comprehensive schedule of prosecutorial responsibilities and institutional casework
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {responsibilities.map((resp) => (
              <motion.div
                key={resp.id}
                variants={itemVariants}
                className={`p-6 sm:p-7 border rounded-sm transition-all flex items-start gap-4 shadow-sm hover:shadow-md ${
                  isDay
                    ? 'bg-white border-[#E0D8CB] hover:border-[#B89A62]'
                    : 'bg-[#17263D] border-white/10 hover:border-[#B89A62]'
                }`}
              >
                <div className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 ${
                  isDay
                    ? 'bg-[#F2ECE1] border-[#B89A62]/40 text-[#96773E]'
                    : 'bg-[#101B2D] border-[#B89A62]/30 text-[#B89A62]'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-[#B89A62]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <h4 className={`font-serif text-lg sm:text-xl font-bold ${
                      isDay ? 'text-[#101B2D]' : 'text-white'
                    }`}>
                      {resp.title}
                    </h4>
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${
                      isDay
                        ? 'bg-[#FAF8F5] text-[#96773E] border-[#E0D8CB]'
                        : 'bg-[#101B2D] text-[#D8BD8A] border-[#B89A62]/30'
                    }`}>
                      {resp.category}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    isDay ? 'text-[#556377]' : 'text-stone-300'
                  }`}>
                    {resp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
