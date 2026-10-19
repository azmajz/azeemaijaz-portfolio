import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('origent');
  const { experience } = PORTFOLIO_DATA;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Career Journey & Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            5+ years of continuous software engineering across SaaS products, high-traffic e-commerce,
            enterprise legacy modernizations, and team mentorship.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experience.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  item.isCurrent
                    ? 'bg-[#0a0f1d] border-blue-500/40 shadow-lg shadow-blue-950/20'
                    : 'bg-[#090d18] border-slate-800 hover:border-slate-700/80'
                }`}
              >
                {/* Header row / Click to expand */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1">
                        <span className="font-semibold text-slate-200">{item.company}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.companyType}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      {item.keyHighlight && (
                        <p className="text-xs text-blue-400 font-medium mt-1">
                          {item.keyHighlight}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/80">
                    <div className="text-left md:text-right">
                      <div className="text-xs font-mono font-medium text-slate-200">
                        {item.period}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {item.durationLabel}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-slate-800/80 bg-slate-950/40">
                    <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Accomplishment Bullets */}
                    <div className="space-y-3 mb-6">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack used in role */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 mr-2">Key Tech:</span>
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
