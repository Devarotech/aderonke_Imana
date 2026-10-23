import React from 'react';
import { X, Printer, Download, Scale, Building2, MapPin, Mail, Phone, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';
import { useTheme } from '../context/ThemeContext';

interface ExecutiveDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveDossierModal: React.FC<ExecutiveDossierModalProps> = ({ isOpen, onClose }) => {
  const { profile, expertise, experience, contributions, contact } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 py-8 md:py-12"
    >
      <div
        className={`relative w-full max-w-4xl rounded-sm shadow-2xl border my-8 transition-colors ${
          isDay
            ? 'bg-[#FAF8F5] text-[#101B2D] border-[#B89A62]/40'
            : 'bg-[#141113] text-stone-100 border-[#B89A62]/40'
        }`}
      >
        {/* Top Action Bar (hidden when printing) */}
        <div className={`print:hidden flex items-center justify-between px-6 py-4 border-b ${
          isDay
            ? 'border-stone-200 bg-[#F2ECE1]/80 text-[#101B2D]'
            : 'border-white/10 bg-black/20 text-white'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B89A62]" />
            <span className={`text-xs font-semibold uppercase tracking-wider ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              Official Executive Dossier & Brief
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#B89A62] text-[#101B2D] font-bold text-xs uppercase tracking-wider hover:bg-[#D8BD8A] transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={downloadVCard}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                isDay
                  ? 'bg-white border-stone-300 text-[#101B2D] hover:bg-stone-100'
                  : 'bg-[#1D191B] border-white/10 text-stone-200 hover:border-[#B89A62]'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-[#B89A62]" />
              <span>Save Contact (.vcf)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close dossier modal"
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                isDay ? 'text-stone-600 hover:text-black hover:bg-black/5' : 'text-stone-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Dossier Content */}
        <div className="p-8 sm:p-12 space-y-8 print:p-0 print:space-y-6">
          
          {/* Header Block */}
          <div className={`border-b pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
            isDay ? 'border-stone-200' : 'border-[#B89A62]/30'
          }`}>
            <div className="space-y-1.5">
              <span className={`text-xs font-bold uppercase tracking-widest block ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                Public Prosecutorial Service • Federal Republic of Nigeria
              </span>
              <h2 id="dossier-title" className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
                isDay ? 'text-[#101B2D]' : 'text-white'
              }`}>
                {profile.fullName}
              </h2>
              <p className={`text-sm font-semibold tracking-wider uppercase ${
                isDay ? 'text-[#96773E]' : 'text-stone-300'
              }`}>
                {profile.title}
              </p>
              <p className={`text-xs ${isDay ? 'text-[#556377]' : 'text-stone-400'}`}>
                {profile.department} • {profile.chambers}
              </p>
            </div>

            <div className={`p-4 rounded-sm border text-right space-y-1 text-xs shrink-0 ${
              isDay
                ? 'bg-[#F2ECE1] border-stone-300 text-[#101B2D]'
                : 'bg-black/20 border-[#B89A62]/30 text-stone-200'
            }`}>
              <div className={`flex items-center gap-2 justify-end ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                <Scale className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Federal Counsel</span>
              </div>
              <p className={isDay ? 'text-[#2C384A]' : 'text-stone-300'}>{profile.location}</p>
              <p className={isDay ? 'text-[#556377]' : 'text-stone-400'}>{profile.email}</p>
              <p className={`font-semibold ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>{contact.phone}</p>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              <ShieldCheck className="w-4 h-4" />
              <span>Executive Profile & Mandate</span>
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDay ? 'text-[#2C384A]' : 'text-stone-300'
            }`}>
              Yetunde Aderonke Imana serves as Chief State Counsel within the Complex Casework Group, Chambers of the Honourable Attorney-General of the Federation, Federal Ministry of Justice, Abuja. Her legal practice focuses on complex criminal litigation, counterterrorism prosecution, sexual and gender-based violence (SGBV) matters, and criminal appeals, advancing justice through the diligent upholding of statutory safeguards and due process.
            </p>
          </div>

          {/* Section 2: Core Areas of Expertise */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              <Building2 className="w-4 h-4" />
              <span>Core Areas of Prosecutorial Practice</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.items.map((item) => (
                <div key={item.id} className={`p-4 rounded-sm border text-xs ${
                  isDay
                    ? 'bg-white border-stone-200 shadow-sm'
                    : 'bg-black/20 border-stone-200/10'
                }`}>
                  <p className={`font-serif font-bold text-sm mb-1 ${
                    isDay ? 'text-[#101B2D]' : 'text-stone-100'
                  }`}>{item.title}</p>
                  <p className={`leading-relaxed font-light ${
                    isDay ? 'text-[#556377]' : 'text-stone-300'
                  }`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Professional Experience & Duties */}
          <div>
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>Principal Responsibilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {experience.responsibilities.map((resp) => (
                <div key={resp.id} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] mt-1.5 shrink-0" />
                  <div>
                    <span className={`font-semibold ${isDay ? 'text-[#101B2D]' : 'text-stone-200'}`}>
                      {resp.title}:{' '}
                    </span>
                    <span className={isDay ? 'text-[#556377]' : 'text-stone-400'}>
                      {resp.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Public Recognition & Contributions */}
          <div className={`border-t pt-6 ${isDay ? 'border-stone-200' : 'border-[#B89A62]/30'}`}>
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              <Award className="w-4 h-4" />
              <span>Verified Institutional Recognition</span>
            </h3>
            <div className="space-y-2 text-xs">
              {contributions.highlights.map((h) => (
                <div key={h.id} className="flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 text-[#B89A62] mt-0.5 shrink-0" />
                  <p className={isDay ? 'text-[#2C384A]' : 'text-stone-300'}>
                    <strong className={isDay ? 'text-[#101B2D]' : 'text-stone-100'}>
                      {h.title} ({h.badge}):{' '}
                    </strong>
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Verification Footer */}
          <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
            isDay ? 'border-stone-200 text-[#556377]' : 'border-stone-200/20 text-stone-400'
          }`}>
            <div>
              <p className={`font-semibold ${isDay ? 'text-[#101B2D]' : 'text-stone-300'}`}>
                Direct Contact: ronkeimana@gmail.com | +234 805 581 7314
              </p>
              <p className={`text-[11px] ${isDay ? 'text-stone-500' : 'text-stone-500'}`}>
                Official correspondence addressed to the Chambers of the HAGF, Abuja.
              </p>
            </div>
            <p className="text-[11px] font-mono text-[#B89A62]">
              Document verified • {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
