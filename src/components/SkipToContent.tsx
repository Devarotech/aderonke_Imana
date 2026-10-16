import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B89A62] focus:text-[#101B2D] focus:font-bold focus:shadow-lg focus:rounded focus:outline-none"
    >
      Skip to main content
    </a>
  );
};
