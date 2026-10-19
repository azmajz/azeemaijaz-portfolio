import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, experience, skillCategories, education } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
AZEEM AIJAZ
Senior Full Stack Software Developer
India | ${profile.phone} | ${profile.email} | ${profile.github}

PROFESSIONAL SUMMARY
${profile.summary}

TECHNICAL SKILLS
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE
${experience.map(exp => `
${exp.role}
${exp.company} | ${exp.location}
${exp.period}
${exp.bullets.map(b => `• ${b}`).join('\n')}
`).join('\n')}

EDUCATION
${education.map(edu => `${edu.degree}\n${edu.institution}\n${edu.period} | Grade: ${edu.grade}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0b101c] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-6 text-left max-h-[92vh] overflow-y-auto print:max-h-none print:overflow-visible print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Controls (Hidden on Print) */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 no-print sticky -top-6 sm:-top-10 bg-white/95 dark:bg-[#0b101c]/95 backdrop-blur-md pt-2 z-10">
          <div>
            <h2 id="resume-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
              Curriculum Vitae Preview
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ATS-Optimized Formal Resume · 6+ Years Experience
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy clean text version"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Print or Save to PDF via Browser Dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="pt-6 print:pt-0 font-sans print:font-serif">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-5 mb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase print:text-black">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5 print:text-black">
              {profile.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-600 dark:text-slate-300 mt-2.5 print:text-neutral-800 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 print:text-black" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="text-slate-600 print:text-neutral-400">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400 print:text-black" />
                {profile.phone}
              </span>
              <span aria-hidden="true" className="text-slate-600 print:text-neutral-400">|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400 print:text-black" />
                {profile.email}
              </span>
              <span aria-hidden="true" className="text-slate-600 print:text-neutral-400">|</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400 print:text-black" />
                {profile.github}
              </span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5 print:text-black print:border-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-black">
              {profile.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <span className="font-semibold text-slate-900 dark:text-white print:text-black">{cat.title}: </span>
                  <span className="text-slate-700 dark:text-slate-300 print:text-neutral-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-4 print:text-black print:border-black">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-neutral-700">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2 print:text-neutral-800">
                    {exp.company} | {exp.location}
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed print:text-black">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-4">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white print:text-black">{edu.degree}</div>
                    <div className="text-slate-500 dark:text-slate-400 print:text-neutral-700">{edu.institution}</div>
                  </div>
                  <div className="font-mono text-slate-600 dark:text-slate-300 print:text-black">
                    {edu.period} | <span className="font-semibold text-emerald-600 dark:text-emerald-400 print:text-black">Grade: {edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
