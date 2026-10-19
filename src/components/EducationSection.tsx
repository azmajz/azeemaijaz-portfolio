import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Academic Background & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Strong foundational computer science and advanced software engineering pedigree
            with academic distinction.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-400 font-medium">
                        {item.level}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.degree}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 font-medium mb-1">
                  {item.institution}
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Bottom Academic Score Badge & Timeline */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {item.period}
                </span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                  Score: {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
