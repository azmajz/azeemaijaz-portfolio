import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, CheckCircle2, Layers, Cpu, Database, Award, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0b101c] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with unboxed metadata and close button */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-blue-400 font-medium capitalize">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.company}</span>
              <span aria-hidden="true">·</span>
              <span>{project.timeline}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-800 bg-[#090d16]/60 -mx-6 sm:-mx-8 px-6 sm:px-8">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Content Body: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              Challenge / Monolith Bottleneck
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Architectural Solution & Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Engineering Modules */}
        <div className="py-6 border-b border-slate-800">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Key Engineering Modules & Deliverables</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Notes */}
        {project.architectureNotes && (
          <div className="py-6 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Architectural Insight & Design Rationale</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 bg-slate-950/60 border border-slate-800/90 rounded-lg p-3.5 leading-relaxed font-mono">
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Tech Stack Chips (clean unboxed or subtle rounded) */}
        <div className="pt-6">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Technologies, Frameworks & Tooling
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
