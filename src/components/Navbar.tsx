import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, ChevronRight, Scale, Sun, Moon, Share2, ChevronDown, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SocialIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isDay = theme === 'day';
  const { contact } = PORTFOLIO_DATA;

  // Scrollspy & Scrolled state for top menu links
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'expertise', 'experience', 'contributions'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSocialDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDay
              ? 'bg-[#FCFAF6]/95 backdrop-blur-md shadow-md border-b border-[#B89A62]/30 py-3'
              : 'bg-[#141113]/95 backdrop-blur-md shadow-lg border-b border-[#B89A62]/20 py-3'
            : isDay
              ? 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#101B2D]/10 py-4 sm:py-5'
              : 'bg-[#141113]/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <a
              href="#hero"
              aria-label="Return to top of page"
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div
                className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
                  isDay
                    ? 'bg-[#F2ECE1] border border-[#B89A62] text-[#91723E]'
                    : 'bg-[#1D191B] border border-[#B89A62]/40 text-[#B89A62]'
                }`}
              >
                <Scale className="w-4 h-4 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span
                  className={`block font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                    isDay
                      ? 'text-[#101B2D] group-hover:text-[#91723E]'
                      : 'text-white group-hover:text-[#D8BD8A]'
                  }`}
                >
                  Yetunde Aderonke Imana
                </span>
                <span
                  className={`block text-[10px] sm:text-xs tracking-widest uppercase font-medium ${
                    isDay ? 'text-[#91723E]' : 'text-[#B89A62]/90'
                  }`}
                >
                  Chief State Counsel • Abuja
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Active Scrollspy Indicator */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center space-x-1 xl:space-x-1.5"
            >
              {PORTFOLIO_DATA.navigation.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-2.5 py-1.5 text-xs xl:text-sm rounded transition-all font-medium tracking-wide ${
                      isActive
                        ? isDay
                          ? 'text-[#96773E] font-bold bg-[#EFE9DD]'
                          : 'text-[#D8BD8A] font-bold bg-white/5'
                        : isDay
                          ? 'text-[#2C384A] hover:text-[#91723E] hover:bg-[#F0ECE1]'
                          : 'text-stone-300 hover:text-[#B89A62] hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#B89A62] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Direct Actions: Executive Brief, Socials Dropdown, Day/Night Toggle & Contact Counsel */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Social Channels Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSocialDropdownOpen(!socialDropdownOpen)}
                  aria-expanded={socialDropdownOpen}
                  aria-label="Open social channels menu"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isDay
                      ? 'bg-white border-stone-300 text-[#101B2D] hover:border-[#B89A62] hover:bg-stone-50'
                      : 'bg-[#1D191B] border-white/10 text-stone-200 hover:border-[#B89A62] hover:text-[#D8BD8A]'
                  }`}
                >
                  <Share2 className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Connect</span>
                  <ChevronDown className={`w-3 h-3 text-[#B89A62] transition-transform ${socialDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {socialDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-64 rounded-sm shadow-xl border p-2 z-50 ${
                    isDay
                      ? 'bg-white border-[#E0D8CB] text-[#101B2D]'
                      : 'bg-[#141113] border-[#B89A62]/40 text-white'
                  }`}>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 block ${
                      isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                    }`}>
                      Official Social Channels
                    </span>
                    <div className="space-y-1 mt-1">
                      {contact.socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setSocialDropdownOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded text-xs transition-colors ${
                            isDay
                              ? 'hover:bg-[#FAF8F5] text-[#101B2D] hover:text-[#96773E]'
                              : 'hover:bg-[#1D191B] text-stone-200 hover:text-[#D8BD8A]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <SocialIcon name={social.icon} className="w-4 h-4 shrink-0 text-[#B89A62]" />
                            <div className="text-left">
                              <span className="font-semibold block">{social.name}</span>
                              <span className="text-[10px] text-stone-400 block truncate max-w-[130px]">
                                {social.handle}
                              </span>
                            </div>
                          </div>
                          <ExternalLink className="w-3 h-3 text-stone-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Day / Night Theme Toggle Button (Icon Only - No Text as requested) */}
              <button
                type="button"
                onClick={toggleTheme}
                title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
                aria-label={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                  isDay
                    ? 'bg-[#EFE9DD] hover:bg-[#E5DDCB] text-[#101B2D] border-[#B89A62]/50 shadow-sm'
                    : 'bg-[#1D191B] hover:bg-[#2A2427] text-[#D8BD8A] border-[#B89A62]/40 shadow-sm'
                }`}
              >
                {isDay ? (
                  <Sun className="w-4 h-4 text-amber-600" />
                ) : (
                  <Moon className="w-4 h-4 text-[#D8BD8A]" />
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#101B2D] bg-[#B89A62] hover:bg-[#D8BD8A] transition-colors rounded-sm shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Counsel</span>
              </a>
            </div>

            {/* Mobile Right Controls: Day/Night button + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
                aria-label={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
                className={`p-2 rounded-full border transition-colors ${
                  isDay
                    ? 'bg-[#EFE9DD] text-[#101B2D] border-[#B89A62]/40'
                    : 'bg-[#1D191B] text-[#D8BD8A] border-[#B89A62]/30'
                }`}
              >
                {isDay ? <Sun className="w-4 h-4 text-amber-600" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className={`p-2 rounded focus:outline-none ${
                  isDay
                    ? 'text-[#101B2D] hover:bg-stone-200'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className={`lg:hidden fixed inset-x-0 top-full shadow-2xl transition-all border-b ${
              isDay
                ? 'bg-[#FCFAF6] border-[#B89A62]/30 text-[#101B2D]'
                : 'bg-[#141113] border-[#B89A62]/30 text-white'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {PORTFOLIO_DATA.navigation.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-3 py-3 rounded text-base font-medium transition-colors border-b ${
                      isActive
                        ? isDay
                          ? 'text-[#96773E] font-bold bg-[#F2ECE1] border-stone-200'
                          : 'text-[#D8BD8A] font-bold bg-white/5 border-white/5'
                        : isDay
                          ? 'text-[#101B2D] hover:text-[#91723E] hover:bg-[#F2ECE1] border-stone-200'
                          : 'text-stone-200 hover:text-[#D8BD8A] hover:bg-white/5 border-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#B89A62]" />
                  </a>
                );
              })}

              {/* Mobile Socials */}
              <div className="pt-3 pb-1 border-b border-stone-200/20">
                <span className={`text-[10px] uppercase tracking-wider font-semibold block mb-2 ${
                  isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                }`}>
                  Official Channels
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {contact.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-2 rounded text-xs border ${
                        isDay
                          ? 'bg-white border-stone-200 text-[#101B2D]'
                          : 'bg-[#1D191B] border-white/10 text-stone-200'
                      }`}
                    >
                      <SocialIcon name={social.icon} className="w-4 h-4 mb-1 text-[#B89A62]" />
                      <span className="text-[11px] font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#B89A62] text-[#101B2D] font-semibold text-sm tracking-wider uppercase shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Counsel</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
