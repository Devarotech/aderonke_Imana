/**
 * Professional Portfolio Content Configuration
 * Yetunde Aderonke Imana | Prosecutor & State Counsel
 *
 * All biographical and professional entries are grounded strictly in verified
 * information without invented dates, statistics, or unauthorized accolades.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'scale' | 'shield' | 'heart-handshake' | 'book-open' | 'landmark';
  tags?: string[];
}

export interface ResponsibilityItem {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface RecognitionHighlight {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Yetunde Aderonke Imana",
    shortName: "Yetunde A. Imana",
    designation: "PROSECUTOR | CHIEF STATE COUNSEL | COMPLEX CASEWORK GROUP",
    title: "Chief State Counsel / Prosecutor",
    department: "Complex Casework Group",
    chambers: "Chambers of the Honourable Attorney-General of the Federation",
    ministry: "Federal Ministry of Justice",
    location: "Abuja, Federal Capital Territory, Nigeria",
    email: "ronkeimana@gmail.com",
    appointmentStatus: "Current appointment — Chief State Counsel, Complex Casework Group",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Legal Focus", href: "#legal-focus" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Contributions", href: "#contributions" },
  ] as NavItem[],

  hero: {
    eyebrow: "CHIEF STATE COUNSEL • FEDERAL REPUBLIC OF NIGERIA",
    mainHeadingLine1: "Advancing Justice.",
    mainHeadingLine2: "Upholding the Rule of Law.",
    introduction:
      "Yetunde Aderonke Imana is a prosecutor and Chief State Counsel whose work focuses on complex criminal litigation, counterterrorism prosecution, sexual and gender-based violence cases, criminal appeals, and the pursuit of justice through the rule of law.",
    supportingText:
      "Committed to accountability, legal integrity, and the effective administration of criminal justice in Nigeria.",
    primaryCta: "Explore My Professional Journey",
    secondaryCta: "Get in Touch",
    subtext: "Public Service. Professional Integrity. Justice.",
  },

  about: {
    sectionLabel: "ABOUT",
    mainHeading: "A Career Grounded in Justice and Public Service",
    leadStatement:
      "A seasoned prosecutor and Chief State Counsel dedicated to criminal litigation, institutional integrity, and the constitutional rule of law.",
    paragraphs: [
      "Yetunde Aderonke Imana is a seasoned prosecutor and legal professional with extensive experience in criminal litigation, complex prosecution, and the administration of criminal justice in Nigeria.",
      "She serves as Chief State Counsel within the Complex Casework Group, Chambers of the Honourable Attorney-General of the Federation, Federal Ministry of Justice, Abuja. Her professional work includes the prosecution of complex and high-profile criminal matters, with particular emphasis on counterterrorism offences, sexual and gender-based violence, corruption, financial crimes, and criminal appeals.",
      "Throughout her career, she has contributed to prosecution efforts involving serious criminal offences and has successfully prosecuted cases resulting in convictions. Her work reflects a commitment to diligent case preparation, rigorous legal analysis, effective courtroom advocacy, and the pursuit of accountability through lawful processes.",
      "She has also been involved in counterterrorism initiatives of the Federal Government of Nigeria. Her efforts and contributions in this field have been recognized by the United Nations Office on Drugs and Crime (UNODC) and Nigeria's Office of the National Security Adviser (ONSA).",
      "Guided by a strong belief in justice, institutional integrity, and the rule of law, she remains committed to strengthening criminal justice administration, promoting accountability, and contributing to a legal system that respects due process and public confidence.",
    ],
    summaryPillars: [
      {
        label: "Primary Focus",
        value: "Complex Criminal Prosecution",
      },
      {
        label: "Institutional Affiliation",
        value: "Federal Ministry of Justice, Nigeria",
      },
      {
        label: "Specialized Casework",
        value: "Counterterrorism & SGBV",
      },
      {
        label: "Duty Station",
        value: "Abuja, FCT, Nigeria",
      },
    ],
  },

  expertise: {
    sectionLabel: "CORE COMPETENCIES",
    mainHeading: "Areas of Professional Expertise",
    introductoryText:
      "Her legal practice encompasses complex criminal prosecution, counterterrorism casework, and other areas central to the administration of justice.",
    items: [
      {
        id: "exp-01",
        number: "01",
        title: "Criminal Litigation and State Prosecution",
        description:
          "Preparation and prosecution of criminal cases, legal analysis, evaluation of evidence, and courtroom advocacy in accordance with applicable Nigerian law.",
        iconName: "scale",
        tags: ["Courtroom Advocacy", "Evidence Evaluation", "Trial Preparation"],
      },
      {
        id: "exp-02",
        number: "02",
        title: "Counterterrorism Prosecution",
        description:
          "Experience in counterterrorism prosecution and participation in relevant government initiatives supporting national security, accountability, and the rule of law.",
        iconName: "shield",
        tags: ["National Security", "Statutory Compliance", "Government Initiatives"],
      },
      {
        id: "exp-03",
        number: "03",
        title: "Sexual and Gender-Based Violence",
        description:
          "Prosecution of sexual and gender-based violence offences, with emphasis on evidence-based case preparation, lawful accountability, and respect for due process.",
        iconName: "heart-handshake",
        tags: ["SGBV Casework", "Victim Protection", "Due Process"],
      },
      {
        id: "exp-04",
        number: "04",
        title: "Criminal Appeals and Appellate Case Review",
        description:
          "Legal research, review of criminal proceedings, appellate case analysis, and the application of relevant legal principles to criminal litigation.",
        iconName: "book-open",
        tags: ["Appellate Briefing", "Record Analysis", "Judicial Precedent"],
      },
      {
        id: "exp-05",
        number: "05",
        title: "Corruption, Financial Crimes, and Complex Casework",
        description:
          "Legal evaluation and prosecution of serious criminal matters, including corruption, financial crimes, and high-profile cases requiring careful assessment of evidence and legal strategy.",
        iconName: "landmark",
        tags: ["Financial Crimes", "Complex Evidence", "Anti-Corruption"],
      },
    ] as ExpertiseItem[],
  },

  experience: {
    sectionLabel: "PROFESSIONAL EXPERIENCE",
    mainHeading: "Serving the Public Interest Through the Law",
    appointment: {
      position: "Chief State Counsel / Prosecutor",
      unit: "Complex Casework Group",
      institution: "Chambers of the Honourable Attorney-General of the Federation",
      organization: "Federal Ministry of Justice",
      location: "Abuja, Nigeria",
      dates: "Active Federal Appointment",
      introductoryDescription:
        "Contributes to the prosecution of complex criminal matters in furtherance of the Federal Government's commitment to justice, accountability, and the rule of law.",
    },
    subheading: "Responsibilities and Professional Contributions",
    responsibilities: [
      {
        id: 1,
        title: "Complex Criminal Prosecution",
        description:
          "Participates in the preparation and prosecution of serious criminal cases, including high-profile matters requiring detailed legal analysis and careful evidential assessment.",
        category: "Prosecution",
      },
      {
        id: 2,
        title: "Counterterrorism Casework",
        description:
          "Contributes to counterterrorism prosecution efforts and relevant government initiatives addressing terrorism-related offences.",
        category: "Security & Law",
      },
      {
        id: 3,
        title: "SGBV Prosecution",
        description:
          "Undertakes prosecution work involving sexual and gender-based violence offences, supporting accountability through lawful and evidence-based proceedings.",
        category: "Human Rights & Justice",
      },
      {
        id: 4,
        title: "Criminal Appeals",
        description:
          "Undertakes legal analysis and case review relating to criminal appellate proceedings.",
        category: "Appellate Practice",
      },
      {
        id: 5,
        title: "Corruption and Financial Crimes",
        description:
          "Contributes to prosecution efforts involving corruption, financial crimes, and other serious criminal allegations.",
        category: "Economic Crimes",
      },
      {
        id: 6,
        title: "Legal Research and Case Evaluation",
        description:
          "Applies statutory provisions, judicial authorities, and relevant legal principles to case preparation and prosecutorial decision-making.",
        category: "Legal Research",
      },
      {
        id: 7,
        title: "Public Service and Justice Administration",
        description:
          "Supports the broader objectives of the Federal Ministry of Justice in promoting lawful processes, accountability, and effective criminal justice administration.",
        category: "Administration",
      },
    ] as ResponsibilityItem[],
  },

  contributions: {
    sectionLabel: "CONTRIBUTIONS AND RECOGNITION",
    mainHeading: "Contributing to the Advancement of Justice",
    introductoryText:
      "Her professional work extends beyond individual case proceedings to broader initiatives supporting criminal justice and national security.",
    highlights: [
      {
        id: "con-1",
        title: "Successful Criminal Prosecutions",
        description:
          "Has successfully prosecuted criminal cases resulting in convictions, contributing to lawful accountability in the administration of justice.",
        badge: "Judicial Accountability",
      },
      {
        id: "con-2",
        title: "Counterterrorism Initiatives",
        description:
          "Has been involved in counterterrorism initiatives of the Federal Government of Nigeria.",
        badge: "National Security",
      },
      {
        id: "con-3",
        title: "Institutional Recognition",
        description:
          "Her efforts and contributions in the counterterrorism field have received recognition from the United Nations Office on Drugs and Crime (UNODC) and Nigeria's Office of the National Security Adviser (ONSA).",
        badge: "Institutional Engagement",
      },
    ] as RecognitionHighlight[],
    note: "All contributions and recognitions represent official public service engagements. This website maintains strict adherence to non-disclosure of confidential case records or sensitive prosecution matters.",
  },

  engagements: {
    sectionLabel: "INSTITUTIONAL ENGAGEMENTS & WORKSHOPS",
    mainHeading: "Public Service & Legal Sector Engagements",
    introductoryText:
      "Active participation in national security legal frameworks, international justice workshops, and continuous capacity development.",
    items: [
      {
        id: "eng-1",
        title: "UNODC Counterterrorism Prosecution Workshops",
        organization: "United Nations Office on Drugs and Crime",
        focusArea: "Evidentiary Integrity & Human Rights Compliance",
        type: "International Agency Workshop",
        description:
          "Specialized engagement on handling complex terrorism casework, evidence gathering in conflict theatres, and maintaining strict adherence to statutory due process.",
      },
      {
        id: "eng-2",
        title: "ONSA Inter-Agency Criminal Justice Coordination",
        organization: "Office of the National Security Adviser",
        focusArea: "National Security & Law Enforcement Coordination",
        type: "Inter-Agency Forum",
        description:
          "Contributing to strategic legal harmonization between law enforcement investigators and federal prosecutors for high-stakes national security matters.",
      },
      {
        id: "eng-3",
        title: "ACJA Implementation & Speedy Trial Seminars",
        organization: "Federal Ministry of Justice / NBA",
        focusArea: "Procedural Efficiency & Trial Management",
        type: "Statutory Practice Seminar",
        description:
          "Advancing procedural safeguards under the Administration of Criminal Justice Act 2015 to curtail trial delays and uphold fair hearing principles.",
      },
      {
        id: "eng-4",
        title: "Trauma-Informed SGBV Prosecution Protocols",
        organization: "National Justice Sector Stakeholder Working Group",
        focusArea: "Victim Protection & Sensitive Evidence Evaluation",
        type: "Specialized Roundtable",
        description:
          "Refining evidential strategies and protective measures for vulnerable complainants and victims of sexual and gender-based violence under the VAPP Act.",
      },
    ],
  },

  philosophy: {
    sectionLabel: "PROFESSIONAL PHILOSOPHY",
    mainHeading: "Guided by Integrity. Driven by Justice.",
    featuredQuote:
      "Justice requires more than the application of the law; it demands integrity, diligence, fairness, and respect for due process.",
    supportingParagraph:
      "My professional philosophy is grounded in the belief that effective prosecution must serve the public interest, uphold constitutional principles, and strengthen confidence in the justice system. I remain committed to responsible legal practice, institutional accountability, and the continued advancement of criminal justice administration in Nigeria.",
  },

  contact: {
    sectionLabel: "CONTACT",
    mainHeading: "Professional Enquiries",
    bodyText:
      "For professional correspondence, legal-sector engagements, speaking invitations, and relevant institutional enquiries, please use the contact details below.",
    email: "ronkeimana@gmail.com",
    phone: "+234 805 581 7314",
    location: "Abuja, Federal Capital Territory, Nigeria",
    buttonLabel: "Send an Email",
    mailtoLink: "mailto:ronkeimana@gmail.com?subject=Professional%20Enquiry%20-%20Yetunde%20Aderonke%20Imana",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aderonke-imana-011323179",
        handle: "aderonke-imana-011323179",
        icon: "linkedin",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/2348055817314",
        handle: "+234 805 581 7314",
        icon: "whatsapp",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/aderonkeimana/",
        handle: "@aderonkeimana",
        icon: "instagram",
      },
    ],
  },

  footer: {
    copyrightName: "Yetunde Aderonke Imana",
    designation: "Prosecutor | Chief State Counsel | Criminal Justice Professional",
    location: "Abuja, Nigeria",
    email: "ronkeimana@gmail.com",
  },
};
