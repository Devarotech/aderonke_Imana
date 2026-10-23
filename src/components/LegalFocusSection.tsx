import React, { useState } from 'react';
import { 
  Scale, 
  Globe, 
  HeartHandshake, 
  Gavel, 
  ShieldCheck, 
  BookOpen, 
  Landmark, 
  ArrowRight, 
  X, 
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export interface LegalFocusItem {
  id: string;
  category: 'international' | 'human-rights' | 'litigation' | 'governance';
  categoryLabel: string;
  title: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  icon: 'globe' | 'heart' | 'gavel' | 'scale' | 'shield' | 'landmark' | 'book';
  statutes: string[];
  mandates: string[];
  keyOutcomes: string[];
}

export const LEGAL_FOCUS_ITEMS: LegalFocusItem[] = [
  {
    id: 'international-criminal-law',
    category: 'international',
    categoryLabel: 'International Law',
    title: 'International Criminal Law',
    badge: 'Counterterrorism & Transnational Casework',
    shortDescription:
      'Prosecution of transnational offences, counterterrorism cases, and inter-jurisdictional cooperation adhering to international human rights standards.',
    fullDescription:
      'Advising on and prosecuting high-stakes counterterrorism matters and transnational criminal operations. This mandate coordinates with multinational bodies—including UNODC and Nigeria’s Office of the National Security Adviser (ONSA)—to ensure prosecutorial standards conform strictly with international humanitarian law, treaty covenants, and due process guarantees.',
    icon: 'globe',
    statutes: [
      'Terrorism (Prevention and Prohibition) Act 2022',
      'Rome Statute of the International Criminal Court',
      'Mutual Legal Assistance in Criminal Matters Act',
      'Geneva Conventions Act'
    ],
    mandates: [
      'Counterterrorism prosecution before the Federal High Court',
      'Bilateral mutual legal assistance & international extradition protocols',
      'Technical coordination with UNODC & inter-agency security roundtables'
    ],
    keyOutcomes: [
      'Secured precedent-setting convictions in complex federal terrorism trials',
      'Contributed to regional counterterrorism prosecution frameworks recognized by UNODC',
      'Enforced evidentiary safeguards for digital and electronic intelligence admissibility'
    ]
  },
  {
    id: 'human-rights-advocacy',
    category: 'human-rights',
    categoryLabel: 'Human Rights',
    title: 'Human Rights Advocacy',
    badge: 'SGBV & Vulnerable Witness Protection',
    shortDescription:
      'Vigorous protection of fundamental rights under Chapter IV of the Nigerian Constitution, prioritizing survivor advocacy and anti-SGBV enforcement.',
    fullDescription:
      'Championing victim-centered prosecutorial practices with specialized focus on Sexual and Gender-Based Violence (SGBV), domestic violence prevention, and child rights advocacy. Spearheading procedural adaptations that safeguard traumatized victims and whistleblowers through in-camera testimonies, victim support liaison, and trauma-informed courtroom cross-examinations.',
    icon: 'heart',
    statutes: [
      'Violence Against Persons (Prohibition) Act (VAPP) 2015',
      'Child Rights Act 2003',
      'Constitution of the Federal Republic of Nigeria 1999 (as amended)',
      'African Charter on Human and Peoples\' Rights'
    ],
    mandates: [
      'Dedicated prosecution of high-profile SGBV and human trafficking cases',
      'Enforcing constitutional bail and speedy trial protections for vulnerable defendants',
      'Formulating survivor-sensitive evidentiary protocols for trial courts'
    ],
    keyOutcomes: [
      'High prosecutorial conviction rate in aggravated sexual abuse and exploitation appeals',
      'Institutionalized victim-witness liaison procedures within the Ministry of Justice',
      'Mentored judicial desk officers on trauma-informed evidence presentation'
    ]
  },
  {
    id: 'complex-litigation',
    category: 'litigation',
    categoryLabel: 'Litigation & Appeals',
    title: 'Complex Criminal Litigation',
    badge: 'Federal Casework & Appellate Practice',
    shortDescription:
      'Managing multi-count federal prosecutions, multi-defendant conspiracies, and defending state judgments before the Court of Appeal and Supreme Court.',
    fullDescription:
      'Managing complicated, high-volume criminal litigation on behalf of the Federal Republic of Nigeria. This involves structuring multi-count indictments, managing forensic accounting evidence, navigating multi-jurisdictional conflicts, and drafting authoritative respondent briefs that establish binding precedent in criminal jurisprudence.',
    icon: 'gavel',
    statutes: [
      'Administration of Criminal Justice Act (ACJA) 2015',
      'Evidence Act 2011 (as amended 2023)',
      'Supreme Court Rules & Court of Appeal Rules',
      'Money Laundering (Prevention and Prohibition) Act 2022'
    ],
    mandates: [
      'Appellate advocacy before the Court of Appeal and Supreme Court of Nigeria',
      'Multi-agency prosecution teams for complex financial crimes and state corruption',
      'Strategic interlocutory appeal management to eliminate systemic delays'
    ],
    keyOutcomes: [
      'Successfully sustained state convictions on appeal before the apex bench',
      'Authored definitive appellate briefs on section 106 & 109 prosecutorial powers',
      'Spearheaded multi-defendant conspiracy trials involving intricate forensic trails'
    ]
  },
  {
    id: 'criminal-justice-administration',
    category: 'governance',
    categoryLabel: 'Justice Administration',
    title: 'Criminal Justice Administration',
    badge: 'ACJA 2015 Reform & Case Management',
    shortDescription:
      'Pioneering streamlined prosecution systems, active case management, electronic filings, and rapid disposition under the ACJA 2015.',
    fullDescription:
      'Driving systemic reforms to eliminate prolonged pre-trial detention and docket congestion. Leveraging the Administration of Criminal Justice Act (ACJA 2015) to implement strict day-to-day trial scheduling, electronic witness management, and transparent plea-bargaining frameworks that elevate public trust in justice institutions.',
    icon: 'scale',
    statutes: [
      'Administration of Criminal Justice Act (ACJA) 2015',
      'Federal High Court (Criminal Procedure) Rules',
      'National Policy on Justice Sector Reform',
      'Criminal Code Act / Penal Code Act'
    ],
    mandates: [
      'Deployment of active case-flow management in the Complex Casework Group',
      'Standardized plea bargaining protocols safeguarding victim restitution',
      'Supervision of awaiting-trial case audits across federal custodial centers'
    ],
    keyOutcomes: [
      'Reduced average trial cycle duration for complex federal casework',
      'Strengthened inter-agency coordination with the Nigerian Police and Correctional Service',
      'Implemented digitized evidence tracking reducing loss and chain-of-custody errors'
    ]
  },
  {
    id: 'constitutional-public-law',
    category: 'governance',
    categoryLabel: 'Public Law',
    title: 'Constitutional & Public Law',
    badge: 'Statutory Interpretation & State Power',
    shortDescription:
      'Defending the statutory and constitutional authority of the Attorney-General of the Federation in matters of federal law enforcement.',
    fullDescription:
      'Rendering authoritative legal opinions on executive discretion, inter-agency jurisdiction, and sovereign powers under section 174 of the 1999 Constitution. Safeguarding the institutional independence of the public prosecutor against unwarranted collateral challenges while preserving constitutional guarantees of fair hearing.',
    icon: 'landmark',
    statutes: [
      'Constitution of the Federal Republic of Nigeria 1999, Section 174',
      'Federal Ministry of Justice Strategic Guidelines',
      'Corrupt Practices and Other Related Offences Act (ICPC)',
      'Economic and Financial Crimes Commission (EFCC) Act'
    ],
    mandates: [
      'Rendering advisory opinions to the Honourable Attorney-General of the Federation',
      'Defense of public interest prosecutions against jurisdictional constitutional challenges',
      'Aligning federal prosecutorial guidelines with Supreme Court constitutional doctrines'
    ],
    keyOutcomes: [
      'Successfully defended state prosecutorial prerogatives against collateral dismissal motions',
      'Harmonized prosecutorial guidelines across federal criminal enforcement agencies',
      'Authored institutional whitepapers on the constitutional boundaries of prosecutorial immunity'
    ]
  },
  {
    id: 'institutional-mentorship',
    category: 'governance',
    categoryLabel: 'Capacity Building',
    title: 'Institutional Training & Mentorship',
    badge: 'Prosecutorial Capacity Building',
    shortDescription:
      'Mentoring junior state counsel, designing advanced trial advocacy workshops, and fostering judicial ethics.',
    fullDescription:
      'Committed to equipping the next generation of Nigerian prosecutors with advanced trial advocacy, digital evidence handling, and ethical courtroom mastery. Regularly delivering masterclasses and procedural clinics for state ministries of justice and law enforcement legal directorates across the Federation.',
    icon: 'book',
    statutes: [
      'Rules of Professional Conduct for Legal Practitioners (RPC)',
      'National Judicial Institute (NJI) Practice Directives',
      'Code of Conduct for Public Officers',
      'Legal Practitioners Act'
    ],
    mandates: [
      'Curriculum design for advanced prosecutorial practice and digital forensics',
      'Mentorship of junior counsel in the Federal Ministry of Justice Chambers',
      'Delivering CLE workshops on appellate brief drafting and trial cross-examination'
    ],
    keyOutcomes: [
      'Trained over 250 state counsel in ACJA courtroom compliance and forensic presentation',
      'Co-authored standard operating guidelines for frontline counterterrorism prosecution teams',
      'Recognized for exceptional commitment to legal professional mentorship and ethics'
    ]
  }
];

export const LegalFocusSection: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<LegalFocusItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Specializations' },
    { id: 'international', label: 'International Law' },
    { id: 'human-rights', label: 'Human Rights' },
    { id: 'litigation', label: 'Litigation & Appeals' },
    { id: 'governance', label: 'Justice Administration' },
  ];

  const filteredItems = LEGAL_FOCUS_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.statutes.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (icon: LegalFocusItem['icon']) => {
    const iconClass = "w-6 h-6 text-[#B89A62]";
    switch (icon) {
      case 'globe':
        return <Globe className={iconClass} />;
      case 'heart':
        return <HeartHandshake className={iconClass} />;
      case 'gavel':
        return <Gavel className={iconClass} />;
      case 'scale':
        return <Scale className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'landmark':
        return <Landmark className={iconClass} />;
      default:
        return <BookOpen className={iconClass} />;
    }
  };

  return (
    <section
      id="legal-focus"
      aria-label="Legal Focus and Specialized Expertise"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FCFAF7] text-[#101B2D]' : 'bg-[#110E10] text-white'
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#B89A62]/08 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#B89A62]/05 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89A62]" />
            <span className={`text-xs font-bold tracking-widest uppercase ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              CORE PRACTICE AREAS
            </span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            Legal Focus & Strategic Practice
          </h2>

          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDay ? 'text-[#556377]' : 'text-stone-300'
          }`}>
            Specialized legal competencies spanning international counterterrorism adjudication, victim-centered human rights advocacy, and high-stakes criminal appeals across the Federal Courts of Nigeria.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#B89A62]/20">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? isDay
                      ? 'bg-[#141113] text-white shadow-sm'
                      : 'bg-[#B89A62] text-[#101B2D] shadow-sm font-bold'
                    : isDay
                      ? 'bg-[#EFE9DD] text-[#556377] hover:text-[#101B2D]'
                      : 'bg-[#17253D] text-stone-300 hover:text-white hover:bg-[#2A2427]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[#B89A62] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by statute or topic..."
              className={`w-full pl-9 pr-4 py-1.5 text-xs rounded-full border outline-none transition-colors ${
                isDay
                  ? 'bg-white border-[#D1BE98] text-[#101B2D] placeholder-stone-400 focus:border-[#B89A62]'
                  : 'bg-[#221D20] border-white/10 text-white placeholder-stone-400 focus:border-[#B89A62]'
              }`}
            />
          </div>
        </div>

        {/* Interactive Grid of Legal Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isDay
                  ? 'bg-white border-[#E2D5BE] hover:border-[#B89A62] shadow-sm hover:shadow-xl hover:-translate-y-1'
                  : 'bg-[#1D191B] border-white/10 hover:border-[#B89A62]/60 shadow-lg hover:shadow-2xl hover:shadow-[#B89A62]/10 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                    isDay
                      ? 'bg-[#F5F0E6] border-[#E2D5BE] group-hover:bg-[#EFE9DD]'
                      : 'bg-[#252023] border-white/10 group-hover:border-[#B89A62]/40'
                  }`}>
                    {renderIcon(item.icon)}
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border ${
                    isDay
                      ? 'bg-[#F2ECE1] border-[#C9A86A]/40 text-[#96773E]'
                      : 'bg-[#252023] border-[#B89A62]/30 text-[#D8BD8A]'
                  }`}>
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-serif text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-[#B89A62] transition-colors ${
                  isDay ? 'text-[#101B2D]' : 'text-white'
                }`}>
                  {item.title}
                </h3>

                {/* Sub-badge */}
                <p className="text-xs font-semibold text-[#B89A62] mb-3">
                  {item.badge}
                </p>

                {/* Short Description */}
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDay ? 'text-[#556377]' : 'text-stone-300'
                }`}>
                  {item.shortDescription}
                </p>

                {/* Relevant Statutes Preview Tags */}
                <div className="mt-4 pt-4 border-t border-[#B89A62]/15 flex flex-wrap gap-1.5">
                  {item.statutes.slice(0, 2).map((statute, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        isDay ? 'bg-stone-100 text-stone-700' : 'bg-black/30 text-stone-400'
                      }`}
                    >
                      {statute}
                    </span>
                  ))}
                  {item.statutes.length > 2 && (
                    <span className="text-[10px] text-[#B89A62] font-semibold self-center">
                      +{item.statutes.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Call to Action */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-[#B89A62] group-hover:text-[#D8BD8A] transition-colors">
                <span className="uppercase tracking-wider">Explore Strategic Brief</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-stone-400">
            <p>No practice area matched &quot;{searchQuery}&quot;.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-[#B89A62] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Deep-Dive Strategic Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl border z-10 max-h-[90vh] overflow-y-auto ${
                isDay
                  ? 'bg-[#FAF8F5] border-[#C9A86A] text-[#101B2D]'
                  : 'bg-[#161315] border-[#B89A62]/40 text-white'
              }`}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close strategic brief"
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-stone-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#B89A62]/20 border border-[#B89A62]/40 flex items-center justify-center">
                  {renderIcon(activeItem.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#B89A62]/20 text-[#B89A62] border border-[#B89A62]/30">
                    {activeItem.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              {/* Sub-badge */}
              <p className="text-sm font-semibold text-[#B89A62] mb-4">
                {activeItem.badge}
              </p>

              {/* Comprehensive Narrative */}
              <div className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDay ? 'text-[#3D4B5C]' : 'text-stone-200'
              }`}>
                {activeItem.fullDescription}
              </div>

              {/* Core Prosecutorial Mandates */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Key Responsibilities & Operational Mandates</span>
                </h4>
                <ul className="space-y-2">
                  {activeItem.mandates.map((mandate, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                      <span className={isDay ? 'text-[#2C384A]' : 'text-stone-300'}>
                        {mandate}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Jurisprudential Outcomes */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] mb-3 flex items-center gap-2">
                  <Gavel className="w-4 h-4" />
                  <span>Significant Precedents & Verified Impact</span>
                </h4>
                <ul className="space-y-2">
                  {activeItem.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] shrink-0 mt-2" />
                      <span className={isDay ? 'text-[#2C384A]' : 'text-stone-300'}>
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statutory Framework & Authorities */}
              <div className={`p-4 rounded-xl border ${
                isDay ? 'bg-[#F2ECE1] border-[#E2D5BE]' : 'bg-[#221D20] border-white/10'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Primary Statutory Frameworks</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeItem.statutes.map((statute, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                        isDay ? 'bg-white text-[#101B2D] border border-stone-300' : 'bg-black/40 text-stone-300 border border-white/10'
                      }`}
                    >
                      {statute}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Close Button Bottom */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-2.5 rounded-full bg-[#B89A62] hover:bg-[#D8BD8A] text-[#101B2D] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Close Strategic Brief
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
