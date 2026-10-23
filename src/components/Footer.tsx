import React from 'react';
import { Mail, Scale, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SocialIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { footer, navigation, contact } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors duration-300 ${
        isDay
          ? 'bg-[#EFE9DD] text-[#2C384A] border-[#B89A62]/30'
          : 'bg-[#0b1320] text-stone-400 border-[#B89A62]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Identity, Navigation, Social Handles, and Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-400/20 items-start">
          
          {/* Identity */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded border flex items-center justify-center ${
                isDay
                  ? 'bg-[#E2DACB] border-[#B89A62] text-[#96773E]'
                  : 'bg-[#1D191B] border-[#B89A62]/30 text-[#B89A62]'
              }`}>
                <Scale className="w-4 h-4" />
              </div>
              <span className={`font-serif text-xl font-bold tracking-wide ${isDay ? 'text-[#101B2D]' : 'text-white'}`}>
                {footer.copyrightName}
              </span>
            </div>
            
            <p className={`text-xs uppercase tracking-wider font-semibold ${isDay ? 'text-[#96773E]' : 'text-[#B89A62]'}`}>
              {footer.designation}
            </p>

            <p className="text-xs leading-relaxed">
              Chambers of the Honourable Attorney-General of the Federation • Federal Ministry of Justice
            </p>
            <p className="text-xs">
              {footer.location}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <span className={`text-xs font-semibold uppercase tracking-wider block mb-3 ${isDay ? 'text-[#101B2D]' : 'text-stone-300'}`}>
              Portfolio Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`transition-colors py-1 inline-block ${
                      isDay ? 'hover:text-[#96773E] text-[#3A4759]' : 'hover:text-[#D8BD8A] text-stone-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className={`transition-colors py-1 inline-block ${
                    isDay ? 'hover:text-[#96773E] text-[#3A4759]' : 'hover:text-[#D8BD8A] text-stone-300'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Handles with Logos */}
          <div className="md:col-span-3 space-y-3">
            <span className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${isDay ? 'text-[#101B2D]' : 'text-stone-300'}`}>
              Official Social Channels
            </span>
            <div className="space-y-2">
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 text-xs py-1 transition-colors ${
                    isDay ? 'text-[#3A4759] hover:text-[#96773E]' : 'text-stone-300 hover:text-[#D8BD8A]'
                  }`}
                >
                  <SocialIcon name={social.icon} className="w-4 h-4 shrink-0" />
                  <span className="font-semibold">{social.name}:</span>
                  <span className="font-light truncate">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-2 space-y-2">
            <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${isDay ? 'text-[#101B2D]' : 'text-stone-300'}`}>
              Direct Contact
            </span>
            <div>
              <a
                href={`mailto:${footer.email}`}
                className={`inline-flex items-center gap-1.5 text-xs hover:underline break-all ${
                  isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                }`}
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{footer.email}</span>
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/2348055817314"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs hover:underline ${
                  isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+234 805 581 7314</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright without disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>© {currentYear} {footer.copyrightName}. All rights reserved.</p>
          <p className="tracking-wide">
            Prosecutor & Chief State Counsel • Abuja, Nigeria
          </p>
        </div>

      </div>
    </footer>
  );
};
