import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = filterProjects(
    PORTFOLIO_DATA.projects,
    selectedCategory,
    searchQuery
  );

  const categories = [
    {
      id: 'all',
      label: 'All Projects',
      count: PORTFOLIO_DATA.projects.length,
    },
    {
      id: 'saas',
      label: 'Enterprise SaaS',
      count: filterProjects(PORTFOLIO_DATA.projects, 'saas').length,
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce',
      count: filterProjects(PORTFOLIO_DATA.projects, 'ecommerce').length,
    },
    {
      id: 'modernization',
      label: 'Architecture & Migration',
      count: filterProjects(PORTFOLIO_DATA.projects, 'modernization').length,
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-mono font-medium text-blue-700 dark:text-blue-300 mb-3 tracking-wide uppercase">
              <span>// 01. Portfolio Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              High-throughput architectures, zero-downtime legacy modernizations, and full-stack web applications
              powering mission-critical workflows across thousands of institutions.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech stack, project, role..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all shadow-xs"
              aria-label="Filter projects by search keywords"
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Controls with Count Badges */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl mb-8 max-w-fit shadow-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? 'bg-slate-100 dark:bg-blue-500 text-slate-800 dark:text-white font-bold'
                      : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
              {searchQuery.trim()
                ? `No case studies matching "${searchQuery}" in ${
                    categories.find((c) => c.id === selectedCategory)?.label || selectedCategory
                  }.`
                : `No case studies found in ${
                    categories.find((c) => c.id === selectedCategory)?.label || selectedCategory
                  }.`}
            </p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Active Project Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
