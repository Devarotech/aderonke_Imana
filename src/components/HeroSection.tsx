import React from 'react';
import { ArrowDown, Mail, MapPin, ShieldCheck, Scale, Award } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LegalPortrait } from './LegalPortrait';
import { useTheme } from '../context/ThemeContext';
import { SocialIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  const { hero, profile, contact } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
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
      id="hero"
      aria-label="Introduction and Overview"
      className={`relative min-h-screen pt-20 pb-12 md:pt-24 md:pb-16 flex items-center transition-colors duration-300 overflow-hidden ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#101B2D] text-white'
      }`}
    >
      {/* Background Architectural Atmosphere: Pure Ambient Lighting (No Grid Lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isDay ? (
          <>
            <div className="absolute -top-32 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#EFE9DD]/85 blur-3xl" />
            <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-[#B89A62]/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-[#F2ECE1]/60 blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute -top-32 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#17263D]/80 blur-3xl" />
            <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-[#B89A62]/08 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-[#0D1524] blur-2xl" />
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text & Profile Credentials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow Pill with Gold Accent */}
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-inner ${
                isDay
                  ? 'bg-[#EFE9DD] border-[#B89A62]/40 text-[#96773E]'
                  : 'bg-[#17263D] border-[#B89A62]/30 text-[#D8BD8A]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#B89A62] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Editorial Serif Heading */}
            <motion.h1
              variants={itemVariants}
              className={`font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] ${
                isDay ? 'text-[#101B2D]' : 'text-white'
              }`}
            >
              <span className="block">{hero.mainHeadingLine1}</span>
              <span className={`block italic font-medium mt-1 ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>
                {hero.mainHeadingLine2}
              </span>
            </motion.h1>

            {/* Narrow Gold Decorative Line */}
            <motion.div
              variants={itemVariants}
              className="w-20 h-0.5 bg-gradient-to-r from-[#B89A62] via-[#D8BD8A] to-transparent"
            />

            {/* Professional Introduction */}
            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl leading-relaxed font-light max-w-2xl ${
                isDay ? 'text-[#2C384A]' : 'text-stone-200'
              }`}
            >
              {hero.introduction}
            </motion.p>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className={`text-sm sm:text-base leading-relaxed border-l-2 pl-4 italic ${
                isDay ? 'text-[#556377] border-[#B89A62]' : 'text-stone-300 border-[#B89A62]/40'
              }`}
            >
              {hero.supportingText}
            </motion.p>

            {/* Official Designation & Location Badges */}
            <motion.div variants={itemVariants} className="pt-2 pb-1 space-y-2">
              <div className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase ${
                isDay ? 'text-[#96773E]' : 'text-[#B89A62]'
              }`}>
                <span>{profile.designation}</span>
              </div>
              <div className={`flex items-center gap-2 text-xs ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                <MapPin className="w-3.5 h-3.5 text-[#B89A62] shrink-0" />
                <span>{profile.location}</span>
                <span>•</span>
                <span className="font-medium">Chambers of the HAGF • Complex Casework Group</span>
              </div>
            </motion.div>

            {/* Call-to-Action Buttons: Explore My Journey with Round Curve Corners & Get in Touch */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B89A62] text-[#101B2D] font-bold text-sm tracking-wide uppercase shadow-lg hover:bg-[#D8BD8A] transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[#B89A62]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border font-semibold text-sm tracking-wide uppercase transition-all focus:ring-2 focus:ring-[#B89A62] ${
                  isDay
                    ? 'bg-white text-[#101B2D] border-stone-300 hover:bg-[#F2ECE1] hover:border-[#B89A62]'
                    : 'bg-[#17263D] text-white border-[#B89A62]/40 hover:bg-[#1f3250] hover:border-[#B89A62]'
                }`}
              >
                <Mail className="w-4 h-4 text-[#B89A62]" />
                <span>{hero.secondaryCta}</span>
              </a>
            </motion.div>

            {/* Official Social Channels: Only the Logo (Instant Link to Her Social Pages) */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-3">
              <span className={`text-xs uppercase tracking-wider font-semibold ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                Official Channels:
              </span>
              <div className="flex items-center gap-2.5">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={`Visit official ${social.name} profile of Chief State Counsel Imana`}
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 shadow-sm ${
                      isDay
                        ? 'bg-white border-stone-300 text-[#101B2D] hover:border-[#B89A62] hover:text-[#96773E] hover:bg-[#F9F6F0]'
                        : 'bg-[#17263D] border-white/10 text-stone-200 hover:border-[#B89A62] hover:text-[#D8BD8A] hover:bg-[#1E304C]'
                    }`}
                  >
                    <SocialIcon name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Institutional Credentials Mini-Grid */}
            <motion.div
              variants={itemVariants}
              className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-4 ${
                isDay ? 'border-stone-200' : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded border flex items-center justify-center text-[#B89A62] ${
                  isDay ? 'bg-white border-stone-200' : 'bg-[#17263D] border-white/10'
                }`}>
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className={`text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                    Institution
                  </p>
                  <p className={`text-xs font-semibold ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                    Federal Min. of Justice
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded border flex items-center justify-center text-[#B89A62] ${
                  isDay ? 'bg-white border-stone-200' : 'bg-[#17263D] border-white/10'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className={`text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                    Casework
                  </p>
                  <p className={`text-xs font-semibold ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                    Counterterrorism & SGBV
                  </p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded border flex items-center justify-center text-[#B89A62] ${
                  isDay ? 'bg-white border-stone-200' : 'bg-[#17263D] border-white/10'
                }`}>
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className={`text-[11px] uppercase tracking-wider ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                    Recognition
                  </p>
                  <p className={`text-xs font-semibold ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                    UNODC & ONSA
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Borderless Executive Flip Card (Portrait & Chambers Seal) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-1 sm:pt-2 lg:pt-2 self-start">
            <div className="w-full max-w-md lg:max-w-none">
              <LegalPortrait />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
