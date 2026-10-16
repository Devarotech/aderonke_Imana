import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Scale, Landmark, RotateCw, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface LegalPortraitProps {
  className?: string;
}

const STORAGE_KEY = 'yetunde_aderonke_imana_portrait';

export const LegalPortrait: React.FC<LegalPortraitProps> = ({ className = '' }) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const { profile } = PORTFOLIO_DATA;

  // Load saved photo from localStorage or check for public/portrait.png
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPhotoSrc(saved);
        return;
      }
    } catch {
      // safe fallback
    }

    const img = new Image();
    img.src = '/portrait.png';
    img.onload = () => {
      setPhotoSrc('/portrait.png');
    };
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // safe
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const resetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // safe
    }
    setPhotoSrc(null);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative w-full flex flex-col items-center ${className}`}
    >
      {/* Hidden File Input for Custom Portrait Upload */}
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

      {/* Floating Photo Upload / Reset Trigger (Discreet & Frameless) */}
      <div className="absolute top-2 right-2 z-30 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={triggerUpload}
          title="Upload or change official portrait"
          aria-label="Upload or change portrait photo"
          className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer shadow-sm ${
            isDay
              ? 'bg-white/80 hover:bg-white text-stone-700 hover:text-black border-stone-300'
              : 'bg-[#101B2D]/80 hover:bg-[#17263D] text-stone-300 hover:text-white border-white/10 hover:border-[#B89A62]'
          }`}
        >
          <Camera className="w-3.5 h-3.5 text-[#B89A62]" />
        </button>

        {photoSrc && (
          <button
            type="button"
            onClick={resetPhoto}
            title="Reset to default portrait"
            aria-label="Reset portrait"
            className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer shadow-sm ${
              isDay
                ? 'bg-white/80 hover:bg-white text-stone-600 hover:text-rose-600 border-stone-300'
                : 'bg-[#101B2D]/80 hover:bg-[#17263D] text-stone-400 hover:text-rose-400 border-white/10'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 3D Flip Card Container: Frameless & Blended with Hero Section Background */}
      <div
        onClick={toggleFlip}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFlip();
          }
        }}
        title="Click to flip between Portrait and Chambers Image"
        aria-label="Flip between Chief State Counsel Portrait and Chambers Image"
        className={`relative w-full max-w-sm sm:max-w-md aspect-[3/4] cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.015] ${
          isDragging ? 'ring-2 ring-[#B89A62] rounded-3xl' : ''
        }`}
        style={{ perspective: 1400 }}
      >
        {/* Soft Ambient Radial Glow (Seamlessly Blends with Hero) */}
        <div className={`absolute inset-0 rounded-full blur-3xl pointer-events-none transition-opacity ${
          isDay
            ? 'bg-gradient-to-tr from-[#B89A62]/10 via-[#EFE9DD]/50 to-transparent opacity-80'
            : 'bg-gradient-to-tr from-[#B89A62]/08 via-[#1B2A42]/40 to-transparent opacity-75'
        }`} />

        {/* 3D Rotating Inner Card */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* ==================== FRONT FACE: THE PORTRAIT ==================== */}
          <div
            className="absolute inset-0 w-full h-full flex flex-col justify-end overflow-hidden rounded-2xl bg-transparent"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {photoSrc ? (
              <div className="relative w-full h-full">
                <img
                  src={photoSrc}
                  alt="Chief State Counsel Yetunde Aderonke Imana"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />
                {/* Seamless Edge Blending Vignette Gradients */}
                <div className={`absolute inset-0 pointer-events-none ${
                  isDay
                    ? 'bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/30 to-transparent'
                    : 'bg-gradient-to-t from-[#101B2D] via-[#101B2D]/35 to-transparent'
                }`} />
                <div className={`absolute inset-0 pointer-events-none ${
                  isDay
                    ? 'bg-[radial-gradient(ellipse_at_center,transparent_45%,#FAF8F5_100%)] opacity-70'
                    : 'bg-[radial-gradient(ellipse_at_center,transparent_45%,#101B2D_100%)] opacity-75'
                }`} />
              </div>
            ) : (
              /* High-Fidelity Executive Barrister Portrait Art blending directly into background */
              <div className="relative w-full h-full flex flex-col items-center justify-end">
                <svg
                  viewBox="0 0 200 270"
                  className="w-full h-full object-contain filter drop-shadow(0 15px 30px rgba(0,0,0,0.3))"
                >
                  <defs>
                    <linearGradient id="framelessSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8A4A28" />
                      <stop offset="50%" stopColor="#6E381C" />
                      <stop offset="100%" stopColor="#532611" />
                    </linearGradient>
                    <linearGradient id="framelessWig" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="35%" stopColor="#F5F0E4" />
                      <stop offset="70%" stopColor="#DFD5C2" />
                      <stop offset="100%" stopColor="#B3A58E" />
                    </linearGradient>
                    <linearGradient id="framelessGown" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#252F3E" />
                      <stop offset="60%" stopColor="#121822" />
                      <stop offset="100%" stopColor="#0B0F15" />
                    </linearGradient>
                    <linearGradient id="goldFillet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E6D3AB" />
                      <stop offset="50%" stopColor="#B89A62" />
                      <stop offset="100%" stopColor="#8A6D3B" />
                    </linearGradient>
                  </defs>

                  {/* Soft Radiant Halo */}
                  <circle cx="100" cy="115" r="75" fill="url(#goldFillet)" opacity={isDay ? "0.08" : "0.12"} />

                  {/* Barrister Wig Back Full Volume */}
                  <ellipse cx="100" cy="98" rx="55" ry="54" fill="url(#framelessWig)" />

                  {/* Wig Tiered Lateral Curls */}
                  <g fill="#D6CBB8" stroke="#FFFFFF" strokeWidth="0.8">
                    <circle cx="56" cy="100" r="13" />
                    <circle cx="54" cy="120" r="12" />
                    <circle cx="58" cy="138" r="11" />
                    <circle cx="144" cy="100" r="13" />
                    <circle cx="146" cy="120" r="12" />
                    <circle cx="142" cy="138" r="11" />
                  </g>

                  {/* Neck & Graceful Poise */}
                  <path d="M 88,140 L 88,172 Q 100,178 112,172 L 112,140 Z" fill="#6E381C" />

                  {/* Oval Face Contour */}
                  <ellipse cx="100" cy="116" rx="30" ry="34" fill="url(#framelessSkin)" />

                  {/* Top Wig Arch & Structured Rows */}
                  <path d="M 66,95 Q 100,58 134,95 Q 100,82 66,95 Z" fill="url(#framelessWig)" />
                  <path d="M 72,86 Q 100,68 128,86" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.9" />
                  <path d="M 77,76 Q 100,62 123,76" stroke="#DFD5C2" strokeWidth="2" fill="none" opacity="0.8" />

                  {/* Serene Forehead Line */}
                  <path d="M 74,96 Q 100,88 126,96" stroke="#48200C" strokeWidth="2" fill="none" />

                  {/* Sculpted Arched Eyebrows */}
                  <path d="M 77,100 Q 86,93 94,98" stroke="#1C0D05" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                  <path d="M 106,98 Q 114,93 123,100" stroke="#1C0D05" strokeWidth="2.6" strokeLinecap="round" fill="none" />

                  {/* Expressive Warm Eyes */}
                  <ellipse cx="86" cy="104" rx="5" ry="3" fill="#1C0D05" />
                  <ellipse cx="114" cy="104" rx="5" ry="3" fill="#1C0D05" />
                  <circle cx="87" cy="103" r="1.3" fill="#FFFFFF" />
                  <circle cx="115" cy="103" r="1.3" fill="#FFFFFF" />

                  {/* Nose & High Cheek Glow */}
                  <path d="M 100,103 L 98,121 Q 100,124 103,121" stroke="#4D220B" strokeWidth="2" fill="none" />
                  <ellipse cx="80" cy="120" rx="6" ry="3" fill="#A85732" opacity="0.3" />
                  <ellipse cx="120" cy="120" rx="6" ry="3" fill="#A85732" opacity="0.3" />

                  {/* Poised Elegant Smile */}
                  <path d="M 91,135 Q 100,132 109,135 Q 100,144 91,135 Z" fill="#914354" />

                  {/* Barrister Court Gown with Deep Folds */}
                  <path d="M 22,176 Q 60,154 100,158 Q 140,154 178,176 L 196,270 L 4,270 Z" fill="url(#framelessGown)" />

                  {/* Stiff Wing Collar */}
                  <polygon points="72,160 100,188 82,196 68,170" fill="#F8F6F0" />
                  <polygon points="128,160 100,188 118,196 132,170" fill="#FFFFFF" />

                  {/* Dual Hanging Barrister Bands */}
                  <rect x="88" y="186" width="10.5" height="46" fill="#FFFFFF" rx="1.5" />
                  <rect x="101.5" y="186" width="10.5" height="46" fill="#F4EFE6" rx="1.5" />
                </svg>

                {/* Seamless Edge Blending Vignette Gradients */}
                <div className={`absolute inset-0 pointer-events-none ${
                  isDay
                    ? 'bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/25 to-transparent'
                    : 'bg-gradient-to-t from-[#101B2D] via-[#101B2D]/35 to-transparent'
                }`} />
              </div>
            )}

            {/* Seamless Bottom Name Overlay */}
            <div className="relative p-5 text-center z-10 pointer-events-none">
              <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1 ${
                isDay
                  ? 'bg-[#EFE9DD]/90 text-[#96773E] shadow-sm'
                  : 'bg-[#17263D]/90 text-[#D8BD8A] shadow-sm'
              }`}>
                CHIEF STATE COUNSEL
              </span>
              <h3 className={`font-serif text-2xl font-bold tracking-wide ${
                isDay ? 'text-[#101B2D]' : 'text-white'
              }`}>
                {profile.fullName}
              </h3>
              <p className={`text-xs mt-0.5 ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                Chambers of the HAGF • Federal Ministry of Justice
              </p>
            </div>
          </div>

          {/* ==================== BACK FACE: THE CHAMBERS SEAL ==================== */}
          <div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center rounded-2xl bg-transparent"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Seamless Edge Blending Vignette Gradients */}
            <div className={`absolute inset-0 pointer-events-none ${
              isDay
                ? 'bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]'
                : 'bg-gradient-to-t from-[#101B2D] via-transparent to-[#101B2D]'
            }`} />

            {/* Top Federal Eyebrow */}
            <div className="relative z-10 flex items-center gap-2 mb-4">
              <Landmark className="w-4 h-4 text-[#B89A62]" />
              <span className={`text-[11px] font-bold tracking-widest uppercase ${
                isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
              }`}>
                Chambers of the HAGF
              </span>
            </div>

            {/* Embossed Gold Chambers Seal */}
            <div className="relative z-10 my-2 flex items-center justify-center">
              <div className={`w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 flex items-center justify-center relative shadow-2xl ${
                isDay
                  ? 'bg-gradient-to-tr from-[#EBE2D0] via-white to-[#E3D7C1]'
                  : 'bg-gradient-to-tr from-[#1B2A42] via-[#0E1726] to-[#25395A]'
              }`}>
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <defs>
                    <linearGradient id="chambersGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DFCEAA" />
                      <stop offset="50%" stopColor="#B89A62" />
                      <stop offset="100%" stopColor="#8A6D3B" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Crest Borders */}
                  <circle cx="80" cy="80" r="76" fill="none" stroke="url(#chambersGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="url(#chambersGold)" strokeWidth="2.5" />
                  <circle cx="80" cy="80" r="54" fill="none" stroke="url(#chambersGold)" strokeWidth="1" opacity="0.4" />

                  {/* Scales of Justice in Burnished Gold */}
                  <g transform="translate(80, 78) scale(0.72) translate(-50, -50)">
                    <rect x="47" y="14" width="6" height="74" fill="url(#chambersGold)" rx="2" />
                    <circle cx="50" cy="14" r="5" fill="url(#chambersGold)" />
                    <path d="M 16,28 L 84,28" stroke="url(#chambersGold)" strokeWidth="4.5" strokeLinecap="round" />
                    <circle cx="50" cy="28" r="4.5" fill="#FFFFFF" stroke="url(#chambersGold)" strokeWidth="2" />
                    <line x1="20" y1="28" x2="10" y2="56" stroke="url(#chambersGold)" strokeWidth="1.8" />
                    <line x1="20" y1="28" x2="30" y2="56" stroke="url(#chambersGold)" strokeWidth="1.8" />
                    <path d="M 6,56 Q 20,68 34,56 Z" fill="url(#chambersGold)" />
                    <line x1="80" y1="28" x2="70" y2="56" stroke="url(#chambersGold)" strokeWidth="1.8" />
                    <line x1="80" y1="28" x2="90" y2="56" stroke="url(#chambersGold)" strokeWidth="1.8" />
                    <path d="M 66,56 Q 80,68 94,56 Z" fill="url(#chambersGold)" />
                    <ellipse cx="50" cy="88" rx="28" ry="6" fill="url(#chambersGold)" />
                    <rect x="30" y="86" width="40" height="4" fill="url(#chambersGold)" rx="1.5" />
                  </g>

                  {/* Flanking Laurel Elements */}
                  <path d="M 30,110 Q 50,132 80,132 Q 110,132 130,110" fill="none" stroke="url(#chambersGold)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Inscriptions on Chambers Seal */}
            <div className="relative z-10 space-y-1.5 max-w-xs mt-3">
              <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full ${
                isDay ? 'bg-[#EFE9DD] text-[#96773E]' : 'bg-[#17263D] text-[#D8BD8A]'
              }`}>
                FEDERAL REPUBLIC OF NIGERIA
              </span>
              <h4 className={`font-serif text-xl sm:text-2xl font-bold ${
                isDay ? 'text-[#101B2D]' : 'text-white'
              }`}>
                Chief State Counsel
              </h4>
              <p className={`text-xs font-semibold text-[#B89A62]`}>
                Complex Casework Group
              </p>
              <p className={`text-[11px] leading-relaxed ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                Federal Ministry of Justice • Abuja, Nigeria
              </p>
            </div>

            {/* Badges on back */}
            <div className="relative z-10 mt-4 flex items-center justify-center gap-3">
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full ${
                isDay ? 'bg-[#EFE9DD] text-[#96773E]' : 'bg-[#17263D] text-[#D8BD8A]'
              }`}>
                <ShieldCheck className="w-3 h-3" />
                Prosecution
              </span>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full ${
                isDay ? 'bg-[#EFE9DD] text-[#96773E]' : 'bg-[#17263D] text-[#D8BD8A]'
              }`}>
                <Award className="w-3 h-3" />
                Litigation
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Frameless Flip Prompt */}
      <div
        onClick={toggleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFlip();
          }
        }}
        className={`mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-200 select-none ${
          isDay
            ? 'text-[#96773E] hover:text-[#101B2D] hover:bg-[#EFE9DD]/60'
            : 'text-[#D8BD8A] hover:text-white hover:bg-white/5'
        }`}
      >
        <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
        <span className="text-xs font-medium tracking-wide">
          Click image to flip to {isFlipped ? 'Official Portrait' : 'Chambers Image'}
        </span>
      </div>
    </motion.div>
  );
};
