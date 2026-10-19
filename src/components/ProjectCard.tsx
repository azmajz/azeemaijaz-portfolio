import React from 'react';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, School, Coins, MessageSquare, GitMerge, Briefcase, ShoppingBag } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Render domain-crafted vector preview mockup for each key project
  const renderVisualMockup = () => {
    switch (project.id) {
      case 'ezchildtrack':
        return (
          <div className="relative w-full h-44 bg-[#0a101f] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-blue-400">
                <School className="w-3.5 h-3.5" />
                EZChildTrack Multi-Tenant SaaS
              </span>
              <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded text-[10px]">
                4,000+ Schools
              </span>
            </div>
            {/* Visual simulation of parent portal and attendance graphs */}
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px]">
                <div className="text-slate-400">Parent Portal</div>
                <div className="text-white font-mono font-bold mt-0.5">Active Sync</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full w-4/5" />
                </div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px]">
                <div className="text-slate-400">Attendance</div>
                <div className="text-white font-mono font-bold mt-0.5">Nuxt 4 SSR</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-11/12" />
                </div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px]">
                <div className="text-slate-400">API Throughput</div>
                <div className="text-white font-mono font-bold mt-0.5">.NET 6 + SQL</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-purple-500 h-full w-3/4" />
                </div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Modules: Parent Portal · Attendance · Waitlist</span>
              <span className="text-blue-400">Strangler Pattern</span>
            </div>
          </div>
        );

      case 'bullionstore-au':
        return (
          <div className="relative w-full h-44 bg-[#0a101f] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Coins className="w-3.5 h-3.5" />
                BullionStore Australia
              </span>
              <span className="text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded text-[10px]">
                Live Spot Feed
              </span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 my-1 text-[11px]">
              <div className="flex justify-between items-center text-slate-300">
                <span>Gold Spot (AUD/oz)</span>
                <span className="font-mono text-emerald-400 font-bold">$3,842.10</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[10px] mt-1">
                <span>GBG GreenID KYC: Verified</span>
                <span>Xero Ledger: Synced</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Stack: Nuxt SSR + Node.js + AWS</span>
              <span className="text-amber-400">Migrated from Bagisto</span>
            </div>
          </div>
        );

      case 'fusion24x7-crm':
        return (
          <div className="relative w-full h-44 bg-[#0a101f] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MessageSquare className="w-3.5 h-3.5" />
                Fusion24X7 Smart CRM
              </span>
              <span className="text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded text-[10px]">
                Real-Time Stream
              </span>
            </div>
            <div className="space-y-1.5 my-1">
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800/80 text-[10px] text-slate-300 flex items-center justify-between">
                <span>Inbound Ticket #4912</span>
                <span className="font-mono text-emerald-400">Connected</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800/80 text-[10px] text-slate-300 flex items-center justify-between">
                <span>Dynamic Message Queue</span>
                <span className="font-mono text-blue-400">&lt; 15ms Latency</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Stack: React.js + Express API + MongoDB</span>
              <span className="text-cyan-400">Role-Based Access</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-44 bg-[#0a101f] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <GitMerge className="w-3.5 h-3.5" />
                {project.company}
              </span>
              <span className="text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded text-[10px]">
                Enterprise Engineering
              </span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 leading-relaxed line-clamp-2">
              {project.subtitle}
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>{project.techStack.slice(0, 3).join(' · ')}</span>
              <span className="text-indigo-400">Case Study</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group flex flex-col rounded-2xl bg-[#090d18] border border-slate-800 hover:border-slate-700/90 transition-all duration-200 overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-blue-950/10"
    >
      {/* Top Graphic Mockup */}
      {renderVisualMockup()}

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Clean Unboxed Metadata with Typographic Separator (Anti-Pill Rule) */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
            <span className="text-blue-400 font-medium capitalize">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.company}</span>
            <span aria-hidden="true">·</span>
            <span>{project.timeline}</span>
          </div>

          {/* Project Title */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Primary Impact Metric & Tech Tags */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs text-slate-400 font-mono">
              {project.impactMetrics[0].label}
            </span>
            <span className="text-xs font-bold font-mono text-white tabular-nums">
              {project.impactMetrics[0].value}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800/70"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-mono text-slate-500 py-0.5 px-1">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
