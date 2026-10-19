import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  FileText,
  Mail,
  Copy,
  Check,
  Github,
  Phone,
  MapPin,
  ExternalLink,
  Layers,
  Server,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const { profile, metrics } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden">
      {/* Subtle ambient gradient mesh for depth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker (Unboxed text with clean typographic separator) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-blue-400 mb-4 tracking-wide">
              <span>{profile.title}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {profile.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Architecting enterprise SaaS platforms & modernizing cloud web applications.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Senior Full Stack Engineer with 5+ years of experience delivering mission-critical
              platforms across North America and Australia. Specializing in high-performance
              Nuxt/Vue (SSR), React, ASP.NET 6 Web APIs, MS SQL Server, and zero-downtime legacy
              migrations using the Strangler Fig pattern.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-900/20 transition-colors whitespace-nowrap"
              >
                Explore Case Studies
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 text-xs">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">{profile.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-5 border-t border-slate-800/70">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/{profile.githubUsername}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phone}</span>
              </a>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">
                {profile.availabilityStatus}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Command Card & Production Profile */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 border border-slate-700/60 p-6 sm:p-7 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-inner">
                    <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center text-blue-400 font-mono font-bold text-base">
                      AA
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">
                      {profile.name}
                    </h2>
                    <p className="text-xs text-slate-400">
                      Senior Full Stack Engineer
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Active in Production
                  </span>
                </div>
              </div>

              {/* Core Architectural Pillars */}
              <div className="py-5 space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <Layers className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">
                      Full-Stack SSR & Micro-Frontends
                    </div>
                    <div className="text-slate-400 mt-0.5">
                      Nuxt 4 (SSR), Vue 3, React.js, Vite bundle optimizations & i18n
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <Server className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">
                      Distributed APIs & Modernization
                    </div>
                    <div className="text-slate-400 mt-0.5">
                      ASP.NET 6 Web API, Node.js, Express, Strangler Fig legacy transition
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">
                      Enterprise Data & Cloud Resilience
                    </div>
                    <div className="text-slate-400 mt-0.5">
                      MS SQL Server (Tuned Stored Procedures), MongoDB, AWS EC2/RDS
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Insight Preview */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
                  <span>architecture-proxy.ts</span>
                  <span className="text-slate-500">Strangler Route Dispatch</span>
                </div>
                <pre className="p-3 rounded-lg bg-[#060a12] border border-slate-800/90 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-purple-400">if</span> (isModernPortalRoute(req.path)) &#123;{'\n'}
                    {'  '}<span className="text-purple-400">return</span> await <span className="text-blue-400">nuxt4SSRRenderer</span>.dispatch(req);{'\n'}
                    &#125; <span className="text-purple-400">else</span> &#123;{'\n'}
                    {'  '}<span className="text-purple-400">return</span> await <span className="text-amber-400">legacyDotNetBridge</span>.forward(req);{'\n'}
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Metric Strip (Below the Split) */}
        <div className="mt-14 pt-10 border-t border-slate-800/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-slate-800 pl-4 sm:pl-6 first:border-l-0"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
