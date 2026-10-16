import React from 'react';
import { X, Scale, BookOpen, ShieldCheck, FileText, CheckCircle2, Lock } from 'lucide-react';
import { ExpertiseItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ExpertiseModalProps {
  item: ExpertiseItem | null;
  onClose: () => void;
}

interface StatutoryData {
  statutes: string[];
  evidentiaryPrinciples: string[];
  publicInterestFocus: string;
}

const STATUTORY_DETAILS: Record<string, StatutoryData> = {
  'exp-1': {
    statutes: [
      'Administration of Criminal Justice Act (ACJA) 2015',
      'Constitution of the Federal Republic of Nigeria 1999 (as amended) — Section 36 (Fair Hearing)',
      'Evidence Act 2011 (as amended 2023)',
      'Criminal Code Act / Penal Code Law',
    ],
    evidentiaryPrinciples: [
      'Evaluation of admissible documentary and testimonial proof beyond reasonable doubt',
      'Rigorous witness preparation in adherence with professional legal ethics',
      'Drafting precise criminal charges and proof of evidence before superior courts of record',
    ],
    publicInterestFocus:
      'Ensuring speedy trial management under the ACJA, eliminating unjustified trial delays, and balancing societal protection with the constitutional rights of the defendant.',
  },
  'exp-2': {
    statutes: [
      'Terrorism (Prevention and Prohibition) Act 2022',
      'National Counter Terrorism Strategy (NACTEST)',
      'Money Laundering (Prevention and Prohibition) Act 2022',
      'United Nations Security Council Counter-Terrorism Resolutions & Conventions',
    ],
    evidentiaryPrinciples: [
      'Forensic evaluation of digital evidence, intelligence reports, and chain of custody documentation',
      'Specialized handling of witness protection mechanisms under federal statutory provisions',
      'Prosecution of acts of terrorism, financing of terrorism, and facilitation networks',
    ],
    publicInterestFocus:
      'Safeguarding the national security of the Federal Republic of Nigeria while upholding the rule of law, international humanitarian norms, and institutional integrity recognized by UNODC and ONSA.',
  },
  'exp-3': {
    statutes: [
      'Violence Against Persons (Prohibition) Act (VAPP) 2015',
      'Child Rights Act 2003',
      'Administration of Criminal Justice Act (ACJA) 2015',
      'National Policy on Gender-Based Violence',
    ],
    evidentiaryPrinciples: [
      'Trauma-informed evidence compilation and sensitive witness examination',
      'Coordination with forensic medical examiners and social welfare personnel',
      'Protecting vulnerable victims from secondary trauma during trial proceedings',
    ],
    publicInterestFocus:
      'Holding perpetrators of gender-based violence strictly accountable under statutory law and fostering public confidence in justice mechanisms for survivors.',
  },
  'exp-4': {
    statutes: [
      'Court of Appeal Rules (2021)',
      'Supreme Court Rules',
      'Court of Appeal Act',
      'Constitution of the Federal Republic of Nigeria 1999 — Appellate Jurisdiction',
    ],
    evidentiaryPrinciples: [
      'Comprehensive distillation of trial court records and evaluation of judicial findings',
      'Drafting persuasive Briefs of Argument on questions of substantive law and jurisdiction',
      'Defending valid convictions or prosecuting state appeals against erroneous decisions',
    ],
    publicInterestFocus:
      'Clarifying legal jurisprudence, settling contested statutory interpretations, and strengthening the administration of criminal justice at appellate levels.',
  },
  'exp-5': {
    statutes: [
      'Economic and Financial Crimes Commission (Establishment) Act 2004',
      'Corrupt Practices and Other Related Offences Act 2000',
      'Money Laundering (Prevention and Prohibition) Act 2022',
      'Proceeds of Crime (Recovery and Management) Act 2022',
    ],
    evidentiaryPrinciples: [
      'Financial forensic analysis, bank record tracking, and corporate entity disclosure',
      'Cross-jurisdictional evidence reconciliation and asset forfeiture advocacy',
      'Prosecution of complex multi-layered fraud and public procurement violations',
    ],
    publicInterestFocus:
      'Dismantling corrupt practices, enforcing statutory accountability in public administration, and recovering unlawfully acquired assets.',
  },
};

export const ExpertiseModal: React.FC<ExpertiseModalProps> = ({ item, onClose }) => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  if (!item) return null;

  const data = STATUTORY_DETAILS[item.id] || {
    statutes: ['Constitution of the Federal Republic of Nigeria 1999', 'Evidence Act 2011'],
    evidentiaryPrinciples: ['Evaluation of evidence in accordance with Nigerian law'],
    publicInterestFocus: 'Promoting the rule of law and due process in criminal justice.',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 py-8 md:py-12"
    >
      <div
        className={`relative w-full max-w-3xl rounded-sm shadow-2xl border transition-colors my-8 ${
          isDay
            ? 'bg-[#FAF8F5] text-[#101B2D] border-[#B89A62]/40'
            : 'bg-[#101B2D] text-stone-100 border-[#B89A62]/40'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200/20 bg-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#17263D] border border-[#B89A62]/40 flex items-center justify-center text-[#B89A62]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89A62] block">
                Statutory Grounding & Evidentiary Framework
              </span>
              <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-sm">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] mb-1.5 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Prosecutorial Scope</span>
            </h4>
            <p className="text-stone-300 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Governing Statutory Framework */}
          <div className="p-4 rounded-sm border border-stone-200/10 bg-black/10 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Primary Nigerian Statutory Authorities</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {data.statutes.map((statute, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A62] shrink-0 mt-0.5" />
                  <span>{statute}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evidentiary Rigor & Practice Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A62] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Evidentiary Standards & Procedural Rigor</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {data.evidentiaryPrinciples.map((prin, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] mt-1.5 shrink-0" />
                  <span>{prin}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Public Interest Commitment */}
          <div className="p-4 rounded-sm border-l-2 border-[#B89A62] bg-black/5 text-xs text-stone-300 italic">
            <span className="font-semibold text-stone-200 block not-italic mb-1">
              Public Interest & Due Process Commitment:
            </span>
            “{data.publicInterestFocus}”
          </div>

          {/* Confidentiality Notice */}
          <div className="flex items-center gap-2 pt-2 text-[11px] text-stone-400 border-t border-stone-200/10">
            <Lock className="w-3.5 h-3.5 text-[#B89A62] shrink-0" />
            <span>Strict non-disclosure of confidential case files, operational intelligence, and pending litigation records is preserved.</span>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-200/20 bg-black/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-sm bg-[#B89A62] text-[#101B2D] font-semibold text-xs uppercase tracking-wider hover:bg-[#D8BD8A] transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
