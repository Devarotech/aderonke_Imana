import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink, ShieldCheck, Send, MessageSquare, Building2, User, CheckCircle2, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { SocialIcon } from './SocialIcons';
import { downloadVCard } from '../utils/vcard';
import { ExecutiveDossierModal } from './ExecutiveDossierModal';

export const ContactSection: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const [copied, setCopied] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    matterType: 'General Professional Correspondence',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(contact.email).catch(() => {});
      }
      const textArea = document.createElement('textarea');
      textArea.value = contact.email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch {
      // safe fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please write a brief message or enquiry';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted email text
    const subjectLine = `[Portfolio Enquiry] ${formData.matterType} - ${formData.name}`;
    const bodyContent = `Dear Counsel Yetunde Aderonke Imana,

${formData.message}

---
Sender Details:
Name: ${formData.name}
Email: ${formData.email}
${formData.organization ? `Organization / Institution: ${formData.organization}\n` : ''}Purpose: ${formData.matterType}
Location: Abuja / Global

Sent via Yetunde Aderonke Imana Professional Portfolio`;

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Dispatch to user's native email client
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const sendViaWhatsApp = () => {
    const text = `Hello Counsel Yetunde Aderonke Imana,\n\nMy name is ${formData.name || 'a visitor'}.${formData.organization ? ` (${formData.organization})` : ''}\nPurpose: ${formData.matterType}\n\nMessage: ${formData.message}\nEmail: ${formData.email}`;
    const url = `https://wa.me/2348055817314?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      aria-label="Professional Enquiries and Contact Information"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#FAF8F5] text-[#101B2D]' : 'bg-[#1D191B] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#B89A62]" />
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDay ? 'text-[#96773E]' : 'text-[#D8BD8A]'}`}>
              {contact.sectionLabel}
            </span>
            <span className="w-8 h-px bg-[#B89A62]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4 ${isDay ? 'text-[#101B2D]' : 'text-white'}`}>
            {contact.mainHeading}
          </h2>
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
            {contact.bodyText}
          </p>
        </motion.div>

        {/* Grid: Left Column (Channels & Social Handles) | Right Column (Interactive Message Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels, Official Info & Social Handles */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Details Card */}
            <div className={`p-7 sm:p-8 rounded-sm border shadow-xl ${
              isDay
                ? 'bg-white border-[#E5DFD3] text-[#101B2D]'
                : 'bg-[#141113] border-[#B89A62]/40 text-white'
            }`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B89A62] block mb-2">
                Official Prosecutorial Correspondence
              </span>

              <div className="space-y-4">
                <div>
                  <p className={`text-xs uppercase tracking-wider font-medium ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                    Primary Email
                  </p>
                  <a
                    href={contact.mailtoLink}
                    className={`font-serif text-2xl font-bold transition-colors break-all ${
                      isDay ? 'text-[#101B2D] hover:text-[#96773E]' : 'text-white hover:text-[#D8BD8A]'
                    }`}
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className={`text-xs uppercase tracking-wider font-medium ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                    WhatsApp / Direct Telephone
                  </p>
                  <a
                    href={`https://wa.me/2348055817314`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-serif text-xl font-bold transition-colors inline-flex items-center gap-2 ${
                      isDay ? 'text-[#101B2D] hover:text-[#96773E]' : 'text-white hover:text-[#D8BD8A]'
                    }`}
                  >
                    <SocialIcon name="whatsapp" className="w-5 h-5 text-emerald-500" />
                    <span>{contact.phone}</span>
                  </a>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-4 h-4 text-[#B89A62] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Jurisdiction & Location</p>
                    <p className={`text-xs font-light ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                      {contact.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
                  <p className={`text-xs leading-relaxed ${isDay ? 'text-[#556377]' : 'text-stone-400'}`}>
                    Chief State Counsel, Complex Casework Group, Chambers of the Honourable Attorney-General of the Federation, Federal Ministry of Justice.
                  </p>
                </div>
              </div>

              {/* Quick Actions Button Bar */}
              <div className="pt-6 border-t border-stone-200/20 grid grid-cols-2 gap-2.5">
                <a
                  href={contact.mailtoLink}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm bg-[#B89A62] text-[#101B2D] font-bold text-xs uppercase tracking-wider hover:bg-[#D8BD8A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Now</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm border text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    isDay
                      ? 'bg-[#F2ECE1] border-stone-300 text-[#101B2D] hover:bg-[#EAE2D3]'
                      : 'bg-[#1D191B] border-white/10 text-stone-200 hover:border-[#B89A62]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B89A62]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={downloadVCard}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                    isDay
                      ? 'bg-white border-stone-300 text-[#101B2D] hover:border-[#B89A62] hover:bg-[#F2ECE1]'
                      : 'bg-[#1D191B] border-white/10 text-stone-200 hover:border-[#B89A62] hover:text-white'
                  }`}
                >
                  <Download className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Save Contact (.vcf)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDossierOpen(true)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                    isDay
                      ? 'bg-[#B89A62]/15 border-[#B89A62]/40 text-[#96773E] hover:bg-[#B89A62] hover:text-[#101B2D]'
                      : 'bg-[#B89A62]/20 border-[#B89A62]/40 text-[#D8BD8A] hover:bg-[#B89A62] hover:text-[#101B2D]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#B89A62]" />
                  <span>Executive Brief</span>
                </button>
              </div>
            </div>

            {/* Social Media Channels Box with Logos Only */}
            <div className={`p-6 rounded-sm border shadow-md ${
              isDay ? 'bg-white border-[#E5DFD3]' : 'bg-[#141113] border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-bold">Official Social Channels</h3>
                <span className="text-[11px] font-sans font-medium text-[#B89A62] uppercase tracking-wider">
                  Verified
                </span>
              </div>
              <p className={`text-xs mb-4 ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                Connect directly on official channels:
              </p>

              <div className="flex items-center gap-3">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={`Visit official ${social.name} profile of Chief State Counsel Imana`}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 shadow-sm ${
                      social.icon === 'linkedin'
                        ? isDay
                          ? 'bg-[#0077b5]/10 border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5] hover:text-white'
                          : 'bg-[#0077b5]/20 border-[#0077b5]/40 text-[#0077b5] hover:bg-[#0077b5] hover:text-white'
                        : social.icon === 'whatsapp'
                        ? isDay
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                          : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                        : isDay
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-600 hover:bg-rose-500 hover:text-white'
                          : 'bg-rose-500/20 border-rose-500/40 text-rose-400 hover:bg-rose-500 hover:text-white'
                    }`}
                  >
                    <SocialIcon name={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive "Contact Counsel" Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className={`lg:col-span-7 p-8 sm:p-10 rounded-sm border shadow-2xl relative ${
              isDay
                ? 'bg-white border-[#E5DFD3] text-[#101B2D]'
                : 'bg-[#141113] border-[#B89A62]/40 text-white'
            }`}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B89A62] block mb-1">
                Direct Portfolio Contact Form
              </span>
              <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${isDay ? 'text-[#101B2D]' : 'text-white'}`}>
                Send a Message to Counsel
              </h3>
              <p className={`text-xs sm:text-sm mt-1 font-light ${isDay ? 'text-[#556377]' : 'text-stone-300'}`}>
                Provide your details and message below. Submitting automatically prepares and opens an email draft to ronkeimana@gmail.com.
              </p>
            </div>

            {submitted ? (
              <div className={`p-6 rounded-sm border text-center space-y-4 ${
                isDay ? 'bg-[#F2ECE1] border-[#B89A62]' : 'bg-[#1D191B] border-[#B89A62]'
              }`}>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold">
                  Enquiry Dispatched
                </h4>
                <p className={`text-sm max-w-md mx-auto ${isDay ? 'text-[#2C384A]' : 'text-stone-300'}`}>
                  Your message has been compiled into an official draft addressed directly to <strong>ronkeimana@gmail.com</strong>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-[#B89A62] text-[#101B2D] font-bold text-xs uppercase tracking-wider hover:bg-[#D8BD8A] transition-colors cursor-pointer"
                  >
                    Open Email Again
                  </button>

                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <SocialIcon name="whatsapp" className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs text-stone-400 hover:text-stone-200 underline cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDay ? 'text-[#101B2D]' : 'text-stone-200'
                    }`}>
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#B89A62] absolute left-3 top-3.5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Barr. Emeka Okafor"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#B89A62] transition-colors ${
                          isDay
                            ? 'bg-[#FAF8F5] border-stone-300 text-[#101B2D]'
                            : 'bg-[#1D191B] border-white/10 text-white placeholder:text-stone-500'
                        } ${formErrors.name ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDay ? 'text-[#101B2D]' : 'text-stone-200'
                    }`}>
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#B89A62] absolute left-3 top-3.5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@domain.com"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#B89A62] transition-colors ${
                          isDay
                            ? 'bg-[#FAF8F5] border-stone-300 text-[#101B2D]'
                            : 'bg-[#1D191B] border-white/10 text-white placeholder:text-stone-500'
                        } ${formErrors.email ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Organization & Matter Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDay ? 'text-[#101B2D]' : 'text-stone-200'
                    }`}>
                      Organization / Institution
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#B89A62] absolute left-3 top-3.5" />
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Ministry / Law Practice / Academic"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#B89A62] transition-colors ${
                          isDay
                            ? 'bg-[#FAF8F5] border-stone-300 text-[#101B2D]'
                            : 'bg-[#1D191B] border-white/10 text-white placeholder:text-stone-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDay ? 'text-[#101B2D]' : 'text-stone-200'
                    }`}>
                      Matter / Enquiry Category
                    </label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#B89A62] transition-colors ${
                        isDay
                          ? 'bg-[#FAF8F5] border-stone-300 text-[#101B2D]'
                          : 'bg-[#1D191B] border-white/10 text-white'
                      }`}
                    >
                      <option value="General Professional Correspondence">General Professional Correspondence</option>
                      <option value="Complex Casework & Prosecution Enquiry">Complex Casework & Prosecution Enquiry</option>
                      <option value="Speaking / Panel Invitation">Speaking / Panel Invitation</option>
                      <option value="Legal Research & Academic Collaboration">Legal Research & Academic Collaboration</option>
                      <option value="Institutional & Public Sector Engagement">Institutional & Public Sector Engagement</option>
                    </select>
                  </div>
                </div>

                {/* Message Text Area */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                    isDay ? 'text-[#101B2D]' : 'text-stone-200'
                  }`}>
                    Your Message / Brief Details <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide a concise overview of your enquiry, institution, or proposal..."
                      className={`w-full p-3 text-sm rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#B89A62] transition-colors resize-none ${
                        isDay
                          ? 'bg-[#FAF8F5] border-stone-300 text-[#101B2D]'
                          : 'bg-[#1D191B] border-white/10 text-white placeholder:text-stone-500'
                      } ${formErrors.message ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit and WhatsApp dispatch options */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#B89A62] text-[#101B2D] font-bold text-sm uppercase tracking-wider hover:bg-[#D8BD8A] transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Counsel's Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    <SocialIcon name="whatsapp" className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <p className={`text-[11px] text-center pt-1 ${isDay ? 'text-[#687386]' : 'text-stone-400'}`}>
                  Your message will open directly in your email client addressed to ronkeimana@gmail.com with your information formatted.
                </p>

              </form>
            )}

          </motion.div>

        </div>
      </div>

      {/* Executive Dossier Modal */}
      <ExecutiveDossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />
    </section>
  );
};
