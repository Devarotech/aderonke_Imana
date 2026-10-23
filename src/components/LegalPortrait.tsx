import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Scale, Landmark, Sparkles, Upload, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface LegalPortraitProps {
  className?: string;
}

const STORAGE_KEYS = [
  'yetunde_aderonke_imana_portrait',
  'yetunde_aderonke_imana_custom_portrait',
];

export const LegalPortrait: React.FC<LegalPortraitProps> = ({ className = '' }) => {
  // Starts on portrait view mode by default
  const [viewMode, setViewMode] = useState<'portrait' | 'seal'>('portrait');
  // Default to static committed asset so all laptops, mobile devices, and Vercel load it immediately
  const [photoSrc, setPhotoSrc] = useState<string>('/portrait.png');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const isDay = theme === 'day';

  // Check localStorage for custom override if available
  useEffect(() => {
    try {
      for (const key of STORAGE_KEYS) {
        const saved = localStorage.getItem(key);
        if (saved && saved.startsWith('data:image/')) {
          setPhotoSrc(saved);
          return;
        }
      }
    } catch {
      // safe fallback
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        for (const key of STORAGE_KEYS) {
          try {
            localStorage.setItem(key, result);
          } catch {
            // ignore
          }
        }

        // Permanently persist to public/portrait.png on the server
        fetch('/api/save-portrait', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: result }),
        }).catch(() => {});
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const toggleView = () => {
    setViewMode((prev) => (prev === 'portrait' ? 'seal' : 'portrait'));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      toggleView();
    }
    setTouchStartX(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className={`relative w-full max-w-[420px] mx-auto select-none ${className}`}
    >
      {/* Hidden file input for permanent portrait upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* Arched Architectural Frame matching reference design */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`Chief State Counsel Yetunde Aderonke Imana ${
          viewMode === 'portrait' ? 'Official Portrait' : 'Chambers Seal'
        }. Click or swipe to toggle.`}
        onClick={toggleView}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleView();
          }
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`group relative aspect-[3/4.2] w-full rounded-t-[140px] sm:rounded-t-[180px] lg:rounded-t-[220px] rounded-b-3xl overflow-hidden transition-all duration-300 shadow-2xl border cursor-pointer ${
          isDay
            ? 'bg-[#F2ECE1] border-[#C9A86A] shadow-[0_25px_60px_rgba(184,154,98,0.2)] hover:border-[#B89A62]'
            : 'bg-[#0B0F17] border-[#B89A62]/35 shadow-[0_30px_70px_rgba(0,0,0,0.85)] hover:border-[#B89A62]/70 hover:shadow-[0_0_40px_rgba(184,154,98,0.18)]'
        }`}
      >
        {/* Subtle Ambient Backlight Glow behind the Arch */}
        <div className="absolute inset-0 bg-radial from-[#B89A62]/12 via-transparent to-transparent pointer-events-none" />

        {/* Content Toggle: Courtroom Portrait vs Official Chambers Seal */}
        <AnimatePresence mode="wait">
          {viewMode === 'portrait' ? (
            <motion.div
              key="portrait"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative w-full h-full flex flex-col justify-end overflow-hidden"
            >
              {photoSrc ? (
                /* The Official Courtroom Photograph */
                <img
                  src={photoSrc}
                  alt="Chief State Counsel Yetunde Aderonke Imana in formal courtroom barrister wig and gown"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.03]"
                  loading="eager"
                />
              ) : (
                /* Fallback Courtroom Portrait Frame with One-Click Upload Trigger */
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1A1410] via-[#100D0A] to-[#0A0705]">
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-[#2B1B12] via-[#1F140D] to-[#2B1B12]" />
                  
                  <div className="relative z-10 space-y-4 max-w-xs">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#B89A62]/20 border border-[#B89A62]/40 flex items-center justify-center shadow-lg">
                      <Scale className="w-10 h-10 text-[#D8BD8A]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Yetunde Aderonke Imana
                      </h4>
                      <p className="text-xs text-[#D8BD8A] mt-1 font-medium">
                        Chief State Counsel • Prosecutor
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B89A62] hover:bg-[#C9A86A] text-[#101B2D] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Select Photo to Embed</span>
                    </button>
                    <p className="text-[11px] text-stone-400">
                      Drop &apos;Confident Barrister in Courtroom Attire.png&apos; anywhere here
                    </p>
                  </div>
                </div>
              )}

              {/* Executive Lower Nameplate beneath the profile picture */}
              <div className="relative z-20 px-5 pt-8 pb-5 text-left bg-gradient-to-t from-black/95 via-black/85 to-transparent">
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#B89A62] text-[#101B2D] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1.5 shadow-sm">
                  CHIEF STATE COUNSEL
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Yetunde Aderonke Imana
                </h3>
                <p className="text-xs text-stone-300 mt-1 font-light">
                  Complex Casework Group • Chambers of the HAGF
                </p>
                <p className="text-[11px] text-[#D8BD8A] mt-0.5 font-medium">
                  Federal Ministry of Justice • Abuja, Nigeria
                </p>
              </div>
            </motion.div>
          ) : (
            /* Chambers Seal inside matching Arched Frame */
            <motion.div
              key="seal"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`relative w-full h-full p-6 sm:p-8 flex flex-col items-center justify-between text-center overflow-hidden ${
                isDay
                  ? 'bg-gradient-to-b from-[#F7F2E8] via-[#EFE7D8] to-[#E5DAC6] text-[#101B2D]'
                  : 'bg-gradient-to-b from-[#101826] via-[#0B1019] to-[#070A10] text-white'
              }`}
            >
              {/* Top Institutional Header */}
              <div className="pt-8 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#B89A62]" />
                <span className={`text-[11px] font-semibold tracking-widest uppercase ${
                  isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                }`}>
                  Federal Republic of Nigeria
                </span>
              </div>

              {/* Embossed Concentric Judicial Seal */}
              <div className="my-auto flex items-center justify-center">
                <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2.5 flex items-center justify-center relative shadow-2xl ${
                  isDay
                    ? 'bg-gradient-to-tr from-[#EBE2D0] via-white to-[#E3D7C1] border-2 border-[#B89A62]'
                    : 'bg-gradient-to-tr from-[#1B2A42] via-[#0E1726] to-[#25395A] border-2 border-[#B89A62]/60'
                }`}>
                  <svg viewBox="0 0 160 160" className="w-full h-full">
                    <defs>
                      <linearGradient id="sealGoldArchFinal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DFCEAA" />
                        <stop offset="50%" stopColor="#B89A62" />
                        <stop offset="100%" stopColor="#8A6D3B" />
                      </linearGradient>
                    </defs>

                    {/* Concentric Rings */}
                    <circle cx="80" cy="80" r="76" fill="none" stroke="url(#sealGoldArchFinal)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <circle cx="80" cy="80" r="70" fill="none" stroke="url(#sealGoldArchFinal)" strokeWidth="2" />
                    <circle cx="80" cy="80" r="54" fill="none" stroke="url(#sealGoldArchFinal)" strokeWidth="1" opacity="0.4" />

                    {/* Scales of Justice */}
                    <g transform="translate(80, 78) scale(0.68) translate(-50, -50)">
                      <rect x="47" y="14" width="6" height="74" fill="url(#sealGoldArchFinal)" rx="2" />
                      <circle cx="50" cy="14" r="5" fill="url(#sealGoldArchFinal)" />
                      <path d="M 16,28 L 84,28" stroke="url(#sealGoldArchFinal)" strokeWidth="4.5" strokeLinecap="round" />
                      <circle cx="50" cy="28" r="4.5" fill="#FFFFFF" stroke="url(#sealGoldArchFinal)" strokeWidth="2" />
                      <line x1="20" y1="28" x2="10" y2="56" stroke="url(#sealGoldArchFinal)" strokeWidth="1.8" />
                      <line x1="20" y1="28" x2="30" y2="56" stroke="url(#sealGoldArchFinal)" strokeWidth="1.8" />
                      <path d="M 6,56 Q 20,68 34,56 Z" fill="url(#sealGoldArchFinal)" />
                      <line x1="80" y1="28" x2="70" y2="56" stroke="url(#sealGoldArchFinal)" strokeWidth="1.8" />
                      <line x1="80" y1="28" x2="90" y2="56" stroke="url(#sealGoldArchFinal)" strokeWidth="1.8" />
                      <path d="M 66,56 Q 80,68 94,56 Z" fill="url(#sealGoldArchFinal)" />
                      <ellipse cx="50" cy="88" rx="28" ry="6" fill="url(#sealGoldArchFinal)" />
                      <rect x="30" y="86" width="40" height="4" fill="url(#sealGoldArchFinal)" rx="1.5" />
                    </g>
                    <path d="M 30,110 Q 50,132 80,132 Q 110,132 130,110" fill="none" stroke="url(#sealGoldArchFinal)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Chambers Designation */}
              <div className="space-y-1.5 w-full max-w-xs pb-4">
                <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded border ${
                  isDay
                    ? 'bg-[#EFE9DD] border-[#B89A62]/40 text-[#96773E]'
                    : 'bg-[#1A283F] border-[#B89A62]/40 text-[#D8BD8A]'
                }`}>
                  CHIEF STATE COUNSEL
                </span>
                <h3 className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${
                  isDay ? 'text-[#101B2D]' : 'text-white'
                }`}>
                  Yetunde Aderonke Imana
                </h3>
                <p className={`text-xs ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                  Chambers of the HAGF • Complex Casework Group
                </p>
                <p className="text-[11px] text-[#B89A62]">
                  Federal Ministry of Justice • Abuja
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Toggle Control placed gracefully UNDER her frame */}
      <div className="mt-3.5 flex items-center justify-center">
        <button
          type="button"
          onClick={toggleView}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer ${
            isDay
              ? 'bg-white hover:bg-[#F4EFE6] text-[#101B2D] border-[#C9A86A]/50 hover:border-[#B89A62]'
              : 'bg-[#221D20] hover:bg-[#2A2427] text-[#D8BD8A] border-[#B89A62]/40 hover:border-[#B89A62]'
          }`}
        >
          {viewMode === 'portrait' ? (
            <>
              <Scale className="w-3.5 h-3.5 text-[#B89A62]" />
              <span>Click or swipe for Official Chambers Seal</span>
              <span className="text-xs font-bold">⇄</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#B89A62]" />
              <span>Click or swipe for Official Courtroom Portrait</span>
              <span className="text-xs font-bold">⇄</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
