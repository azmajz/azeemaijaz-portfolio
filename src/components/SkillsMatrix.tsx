import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { searchSkills } from '../utils/portfolioLogic';
import { Search, Code2, Database, Cloud, Terminal, Sparkles } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [skillQuery, setSkillQuery] = useState('');
  const filteredCategories = searchSkills(PORTFOLIO_DATA.skillCategories, skillQuery);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 1:
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
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
              Equally balanced across enterprise backend architecture (.NET Core, ASP.NET MVC),
              modern SSR frontends, Linux & cloud DevOps, T-SQL optimization, e-commerce growth telemetry, and Claude AI workflows.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              placeholder="Search skill (e.g. C#, Linux, Claude)..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors shadow-2xs"
              aria-label="Filter skills by keyword"
            />
          </div>
        </div>

        {/* Skills Grid - Uniform Equal Styling Across All Competencies */}
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

                {/* All Skills Styled Equally - No Disparity or Favoritism */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-2 rounded-lg text-xs font-mono bg-slate-50 dark:bg-[#070b14] border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-slate-600 hover:bg-blue-50/30 dark:hover:bg-slate-800/60 transition-colors shadow-2xs"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>{category.skills.length} core competencies</span>
                <span className="text-slate-400 dark:text-slate-500 font-sans text-[10px]">Verified Technical Capability</span>
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
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Linux (Ubuntu)</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">AWS EC2 & ALB</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">IIS ARR Proxy</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Vitest Unit Testing</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Claude AI Workflows</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">Google Merchant & FB Pixel</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">GA4 / Gtag SEO</span>
              <span className="bg-slate-100 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">T-SQL SP Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
