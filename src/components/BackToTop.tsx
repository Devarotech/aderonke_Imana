import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#101B2D] border border-[#B89A62]/60 text-[#D8BD8A] hover:bg-[#B89A62] hover:text-[#101B2D] shadow-xl transition-all transform hover:-translate-y-1 focus:ring-2 focus:ring-[#B89A62]"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
