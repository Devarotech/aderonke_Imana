import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Mail, Scale, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the mandate and role of the Complex Casework Group?',
    answer:
      'The Complex Casework Group operates within the Chambers of the Honourable Attorney-General of the Federation and the Federal Ministry of Justice in Abuja. It is tasked with evaluating complex evidence, preparing prosecution proofs, and conducting trials and appeals in serious criminal matters, including counterterrorism, sexual and gender-based violence (SGBV), financial crimes, and public interest litigation.',
    tag: 'Institutional Mandate',
  },
  {
    id: 'faq-2',
    question: 'How should official prosecutorial notices or legal correspondence be directed?',
    answer:
      'Formal legal processes and institutional communications should be directed through the official registry of the Federal Ministry of Justice, Maitama / Central Area, Abuja. For professional inquiries, workshop invitations, and verified sector correspondence, Counsel may be reached directly via ronkeimana@gmail.com or via the contact form on this portfolio.',
    tag: 'Official Correspondence',
  },
  {
    id: 'faq-3',
    question: 'What is the policy regarding ongoing or pending criminal trials?',
    answer:
      'In strict adherence to professional legal ethics, the sub judice rule, and federal prosecutorial confidentiality standards, this website and Counsel do not disclose or discuss details of active, pending, or classified case files. All references on this portfolio reflect verified institutional contributions and public service engagements.',
    tag: 'Confidentiality & Ethics',
  },
  {
    id: 'faq-4',
    question: 'Is Counsel available for workshops, conferences, and capacity-building programs?',
    answer:
      'Yes. Counsel regularly contributes to inter-agency initiatives and workshops organized by institutions such as the United Nations Office on Drugs and Crime (UNODC), the Office of the National Security Adviser (ONSA), and judicial sector bodies focusing on counterterrorism prosecution, ACJA implementation, and trauma-informed SGBV procedures.',
    tag: 'Engagements & Seminars',
  },
  {
    id: 'faq-5',
    question: 'What statutory frameworks govern the prosecutorial casework highlighted here?',
    answer:
      'Casework is conducted under federal Nigerian legislation, including the Administration of Criminal Justice Act (ACJA) 2015, the Terrorism (Prevention and Prohibition) Act 2022, the Violence Against Persons (Prohibition) Act (VAPP) 2015, the Evidence Act 2011 (as amended 2023), and Section 36 of the 1999 Constitution regarding fair hearing safeguards.',
    tag: 'Statutory Frameworks',
  },
];

export const FaqSection: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions and Professional Protocols"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#121E31] text-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B89A62]" />
            <span className={`text-xs font-semibold tracking-widest uppercase ${
              isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
            }`}>
              PRACTICE & PROTOCOL FAQ
            </span>
            <span className="w-8 h-px bg-[#B89A62]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDay ? 'text-[#101B2D]' : 'text-white'
          }`}>
            Professional Protocols & Guidance
          </h2>
          <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
            isDay ? 'text-[#556377]' : 'text-stone-300'
          }`}>
            Clear guidelines regarding institutional jurisdiction, correspondence standards, ethics, and sector engagements.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`border rounded-sm transition-all overflow-hidden ${
                  isOpen
                    ? isDay
                      ? 'bg-white border-[#B89A62] shadow-md'
                      : 'bg-[#17263D] border-[#B89A62] shadow-md'
                    : isDay
                      ? 'bg-white border-[#E0D8CB] hover:border-[#B89A62]/60'
                      : 'bg-[#101B2D] border-white/10 hover:border-[#B89A62]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex-1 pr-2">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                      isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'
                    }`}>
                      {faq.tag}
                    </span>
                    <h3 className={`font-serif text-lg sm:text-xl font-bold ${
                      isDay ? 'text-[#101B2D]' : 'text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#B89A62] text-[#101B2D]' : isDay ? 'bg-[#F2ECE1] text-[#96773E]' : 'bg-[#101B2D] text-[#D8BD8A]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t ${
                        isDay
                          ? 'border-stone-100 text-[#4A5568]'
                          : 'border-white/5 text-stone-300'
                      }`}>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Discreet Inquiry Note */}
        <div className={`mt-10 p-5 rounded-sm border text-center flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDay
            ? 'bg-[#F2ECE1] border-stone-200 text-[#101B2D]'
            : 'bg-[#101B2D] border-white/10 text-stone-200'
        }`}>
          <div className="flex items-center gap-2.5 text-left">
            <MessageSquare className="w-4 h-4 text-[#B89A62] shrink-0" />
            <span className="text-xs">Have an official institutional enquiry not covered here?</span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-sm bg-[#B89A62] text-[#101B2D] text-xs font-semibold uppercase tracking-wider hover:bg-[#D8BD8A] transition-colors shrink-0"
          >
            Direct Inquiry to Counsel
          </a>
        </div>

      </div>
    </section>
  );
};
