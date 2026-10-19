import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { searchSkills } from '../utils/portfolioLogic';
import { Search, Code2, Database, Cloud, Terminal, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [skillQuery, setSkillQuery] = useState('');
  const filteredCategories = searchSkills(PORTFOLIO_DATA.skillCategories, skillQuery);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cloud className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#070a12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono font-medium text-blue-400 mb-2 tracking-wide uppercase">
              Core Competencies & Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Skills Matrix
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Specialized across the full modern web stack, from SSR frontend frameworks and component libraries
              to high-throughput APIs, stored procedure tuning, and AWS cloud hosting.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              placeholder="Search skill (e.g., Nuxt, SQL, AWS)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              aria-label="Filter skills by keyword"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                        skill.highlight
                          ? 'bg-slate-900/90 border-blue-500/30'
                          : 'bg-slate-950/40 border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'text-blue-400 bg-blue-950/70 border border-blue-900/50'
                            : skill.level === 'Advanced'
                            ? 'text-emerald-400 bg-emerald-950/70 border border-emerald-900/50'
                            : 'text-slate-400 bg-slate-900 border border-slate-800'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>{category.skills.length} competencies listed</span>
                <span className="text-slate-400">Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Practices Bottom Row */}
        <div className="mt-8 p-6 rounded-2xl bg-[#090d18] border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">
                Engineering Practices & Tooling
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Standards applied in daily Agile / Scrum enterprise development workflows
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Vite & Webpack</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Git & Agile/Scrum</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">WCAG Accessibility</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Lighthouse 95+ SEO</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">i18n Localization</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Ubuntu Linux & Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
