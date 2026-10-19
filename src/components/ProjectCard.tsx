import React from 'react';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight, School, Coins, MessageSquare, GitMerge, ExternalLink, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const renderVisualMockup = () => {
    switch (project.id) {
      case 'ezchildtrack':
        return (
          <div className="relative w-full h-44 bg-slate-100 dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                <School className="w-3.5 h-3.5" />
                EZChildTrack Multi-Tenant SaaS
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded text-[10px] font-medium">
                4,000+ Schools
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] shadow-xs">
                <div className="text-slate-500 dark:text-slate-400">Parent Portal</div>
                <div className="text-slate-900 dark:text-white font-mono font-bold mt-0.5">Nuxt 4 SSR</div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full w-4/5" />
                </div>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] shadow-xs">
                <div className="text-slate-500 dark:text-slate-400">IIS ARR Proxy</div>
                <div className="text-slate-900 dark:text-white font-mono font-bold mt-0.5">web.config</div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-11/12" />
                </div>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] shadow-xs">
                <div className="text-slate-500 dark:text-slate-400">T-SQL Tuning</div>
                <div className="text-slate-900 dark:text-white font-mono font-bold mt-0.5">Stored Procs</div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-purple-500 h-full w-3/4" />
                </div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>ezchildtrack.com</span>
              <span className="text-blue-600 dark:text-blue-400">Strangler Fig + ARR</span>
            </div>
          </div>
        );

      case 'bullionstore-au':
        return (
          <div className="relative w-full h-44 bg-slate-100 dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                <Coins className="w-3.5 h-3.5" />
                BullionStore Australia
              </span>
              <span className="text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded text-[10px] font-medium">
                Web & Play Store App
              </span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 my-1 text-[11px] shadow-xs">
              <div className="flex justify-between items-center text-slate-800 dark:text-slate-300">
                <span>Gold Spot (AUD/oz)</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">$3,842.10</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-[10px] mt-1">
                <span>Ionic Capacitor Mobile App</span>
                <span>GBG KYC + Xero</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>bullionstore.com.au</span>
              <span className="text-amber-600 dark:text-amber-400">AWS ALB + EC2 + S3</span>
            </div>
          </div>
        );

      case 'fat-shop':
        return (
          <div className="relative w-full h-44 bg-slate-100 dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400 font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" />
                F.A.T E-Commerce
              </span>
              <span className="text-pink-700 dark:text-pink-400 bg-pink-100 dark:bg-pink-950/60 px-1.5 py-0.5 rounded text-[10px] font-medium">
                f-a-t.shop
              </span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 my-1 text-[11px] text-slate-700 dark:text-slate-300 shadow-xs">
              <div className="font-semibold text-slate-900 dark:text-white">Fashion Storefront & Checkout</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Sub-second paint, dynamic variant selectors & high-conversion checkout</div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>Vue.js · Node.js</span>
              <span className="text-pink-600 dark:text-pink-400">Live Store</span>
            </div>
          </div>
        );

      case 'fusion24x7-crm':
        return (
          <div className="relative w-full h-44 bg-slate-100 dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                Fusion24X7 Smart CRM
              </span>
              <span className="text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-1.5 py-0.5 rounded text-[10px] font-medium">
                Real-Time Stream
              </span>
            </div>
            <div className="space-y-1.5 my-1">
              <div className="p-1.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-700 dark:text-slate-300 flex items-center justify-between shadow-xs">
                <span>Inbound Ticket Stream</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Connected</span>
              </div>
              <div className="p-1.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-700 dark:text-slate-300 flex items-center justify-between shadow-xs">
                <span>Dynamic Message Queue</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">&lt; 15ms Latency</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>React.js + Express API + MongoDB</span>
              <span className="text-cyan-600 dark:text-cyan-400">Role-Based Access</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-44 bg-slate-100 dark:bg-[#0a101f] border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
                <GitMerge className="w-3.5 h-3.5" />
                {project.company}
              </span>
              <span className="text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded text-[10px] font-medium">
                Enterprise Engineering
              </span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2 shadow-xs">
              {project.subtitle}
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>{project.techStack.slice(0, 3).join(' · ')}</span>
              <span className="text-indigo-600 dark:text-indigo-400">Case Study</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group flex flex-col rounded-2xl bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700/90 transition-all duration-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg dark:hover:shadow-blue-950/10"
    >
      {/* Top Graphic Mockup */}
      {renderVisualMockup()}

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Clean Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
            <span className="text-blue-600 dark:text-blue-400 font-medium font-mono text-[11px] uppercase tracking-wide">
              {project.categories?.includes('modernization')
                ? 'Architecture & Migration'
                : project.category === 'saas'
                ? 'Enterprise SaaS'
                : 'E-Commerce'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">{project.company}</span>
            <span aria-hidden="true">·</span>
            <span>{project.timeline}</span>
          </div>

          {/* Project Title */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Direct Live Links & App Links if available */}
          {(project.liveUrl || project.playStoreUrl) && (
            <div className="flex flex-wrap items-center gap-3 mt-3 pt-2 text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{project.liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-mono transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Google Play App</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bottom Section: Primary Impact Metric & Tech Tags */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {project.impactMetrics[0].label}
            </span>
            <span className="text-xs font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {project.impactMetrics[0].value}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/90 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800/70"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 py-0.5 px-1">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
