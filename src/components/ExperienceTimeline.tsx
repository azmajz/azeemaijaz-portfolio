import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
            Career Journey & Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
            6+ years of continuous software engineering across SaaS products, high-traffic e-commerce,
            enterprise legacy modernizations, AWS cloud architectures (EC2, ALB, S3, SES), and team mentorship.
          </p>
        </div>

        {/* Experience List - Always Open for All (No Collapse) */}
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                item.isCurrent
                  ? 'bg-white dark:bg-[#0a0f1d] border-blue-500/50 shadow-md shadow-blue-500/5 dark:shadow-blue-950/20'
                  : 'bg-white dark:bg-[#090d18] border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {/* Header block */}
              <div className="p-6 sm:p-7 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{item.company}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.companyType}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      {item.keyHighlight && (
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                          {item.keyHighlight}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                        {item.period}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {item.durationLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Content Body - Permanently Open */}
              <div className="p-6 sm:p-7">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Accomplishment Bullets */}
                <div className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack used in role */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">Key Tech:</span>
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
