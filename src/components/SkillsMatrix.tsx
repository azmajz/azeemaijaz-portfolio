import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { searchSkills } from '../utils/portfolioLogic';
import { Search, Code2, Database, Cloud, Terminal } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [skillQuery, setSkillQuery] = useState('');
  const filteredCategories = searchSkills(PORTFOLIO_DATA.skillCategories, skillQuery);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070a12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
              Core Competencies & Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Technical Skills Matrix
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
              Specialized across the full modern web and cloud stack—from SSR architectures, C# .NET Core,
              and Ionic Capacitor mobile apps to MSSQL T-SQL query optimization and Dockerized production environments.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              placeholder="Search skill (e.g. Nuxt, Docker, T-SQL)..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              aria-label="Filter skills by keyword"
            />
          </div>
        </div>

        {/* Skills Grid - Clean without Expert/Advance levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="rounded-2xl bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs dark:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Clean skill cards without expert/advance badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/40 text-blue-800 dark:text-blue-200 font-semibold'
                          : 'bg-slate-50 dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>{category.skills.length} core competencies</span>
                <span className="text-slate-600 dark:text-slate-400">Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Practices & Tooling Bottom Row */}
        <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Engineering Practices & Tooling
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Standards applied in daily Agile / Scrum enterprise development workflows
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">IIS ARR Proxy</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Vitest Unit Testing</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Docker in Prod</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Vite & Webpack</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">T-SQL SP Optimization</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">WCAG Accessibility</span>
              <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Multi-Localization (i18n)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
