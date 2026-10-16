# Yetunde Aderonke Imana | Professional Legal Portfolio

Executive portfolio website for **Yetunde Aderonke Imana**, Prosecutor, State Counsel, and Criminal Justice Professional in Abuja, Nigeria.

## Executive Profile Summary

- **Name:** Yetunde Aderonke Imana
- **Role:** State Counsel / Prosecutor
- **Department:** Complex Casework Group
- **Institution:** Chambers of the Honourable Attorney-General of the Federation, Federal Ministry of Justice
- **Location:** Abuja, Federal Capital Territory, Nigeria
- **Direct Email:** `ronkeimana@gmail.com`
- **Core Practice:** Complex Criminal Litigation, Counterterrorism Prosecution, Sexual & Gender-Based Violence (SGBV), Criminal Appeals, Financial Crimes & Corruption.

---

## Architecture & Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Motion & Interaction:** Framer Motion (`motion/react`) orchestrating coordinated viewport entrance animations (fade-in + slide-up with `easeOut`, staggered cards, and `whileInView` reveals).
- **Styling:** Tailwind CSS v4 with bespoke editorial tokens (Midnight Navy `#101B2D`, Dark Navy `#17263D`, Warm Ivory `#F8F6F0`, Muted Gold `#B89A62`, Light Border `#E5E0D6`).
- **Typography:** *Cormorant Garamond* (Editorial Serif) paired with *Inter* (Legible Modern Sans).
- **Icons:** Lucide React (`scale`, `shield-check`, `heart-handshake`, `book-open`, `landmark`, `mail`, `award`, `camera`, `upload`).
- **Accessibility:** WCAG 2.2 AA compliant landmarks, skip link, keyboard accessible drawer, focus rings, reduced motion queries.
- **Unit Testing:** Built-in `node:test` + `node:assert/strict` test suite verifying data integrity and configuration.

---

## Directory Structure

```text
├── index.html                  # HTML entry point with SEO, OpenGraph, fonts & monogram favicon
├── metadata.json               # AI Studio project metadata
├── package.json                # Project dependencies and build scripts
├── public/                     # Static assets (portrait image, favicons)
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Section 2: Biography & appointment card
│   │   ├── BackToTop.tsx           # Floating back to top controller
│   │   ├── ContactSection.tsx      # Section 7: Email mailto & copy functionality
│   │   ├── ExperienceSection.tsx   # Section 4: Current appointment & 7 core duties
│   │   ├── ExpertiseSection.tsx    # Section 3: 5 Core legal competencies
│   │   ├── Footer.tsx              # Section 8: Disclaimer, copyright, and quick links
│   │   ├── HeroSection.tsx         # Section 1: Introduction, CTAs & portrait showcase
│   │   ├── LegalPortrait.tsx       # Barrister portrait handler with Nigerian court attire fallback
│   │   ├── Navbar.tsx              # Sticky header with mobile menu drawer
│   │   ├── PhilosophySection.tsx   # Section 6: Professional philosophy & quotes
│   │   ├── RecognitionSection.tsx  # Section 5: Public service contributions & recognition
│   │   └── SkipToContent.tsx       # Accessibility skip link
│   ├── data/
│   │   ├── portfolioData.ts        # Centralized profile data & text configurations
│   │   └── portfolioData.test.ts   # Unit tests for data completeness and integrity
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global styles, Tailwind theme, and reduced-motion
│   └── main.tsx                # React DOM root mounting
└── tsconfig.json               # TypeScript compiler configuration
```

---

## How to Customize and Update Content

### 1. Replacing or Updating the Portrait Image

1. Place your high-resolution portrait photograph into the `/public` directory and name it `portrait.png` (or update the filename in `src/components/LegalPortrait.tsx`).
2. The `LegalPortrait` component automatically preserves the standard 3:4 aspect ratio with an executive gold frame, subtle vignette, and nameplate. If the file is ever missing or loading fails, it gracefully falls back to the embedded Nigerian courtroom attire illustration without breaking the layout.

### 2. Updating Profile Information or Contact Details

All biographical text, core competencies, responsibilities, and contact links are stored in `src/data/portfolioData.ts`.
- To change the contact email: edit `PORTFOLIO_DATA.profile.email` and `PORTFOLIO_DATA.contact.email`.
- To update appointment dates: edit `PORTFOLIO_DATA.experience.appointment.dates`.
- To add publications or bar call information: update the corresponding fields in `src/data/portfolioData.ts`.

---

## Verification & Build Commands

- **Run Unit Tests:**
  ```bash
  node --test src/data/portfolioData.test.ts
  ```

- **Compile / Build Production Bundle:**
  ```bash
  npm run build
  ```

- **Local Development Server:**
  ```bash
  npm run dev
  ```
