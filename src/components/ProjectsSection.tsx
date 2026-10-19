import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search, SlidersHorizontal } from 'lucide-react';

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
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Enterprise SaaS' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'modernization', label: 'Architecture & Migration' },
  ];

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono font-medium text-blue-400 mb-2 tracking-wide uppercase">
              Production Portfolio & Enterprise Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Case Studies & Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High-throughput architectures, cloud modernization initiatives, and full-stack web applications
              serving thousands of institutions and enterprise customers.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, project, role..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              aria-label="Filter projects by search keywords"
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
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
          <div className="py-16 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">
              No case studies matching <span className="text-white font-medium">"{searchQuery}"</span> in {selectedCategory} category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-400 hover:text-blue-300 font-medium"
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
