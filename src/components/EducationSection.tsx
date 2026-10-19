import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
            Academic Background & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
            Strong foundational computer science and advanced software engineering pedigree
            with distinction.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs dark:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                        {item.level}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-1">
                  {item.institution}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Bottom Academic Grade Badge & Timeline */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {item.period}
                </span>
                <span className="font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
