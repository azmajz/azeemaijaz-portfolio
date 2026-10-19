import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  FileText,
  Mail,
  Copy,
  Check,
  Github,
  Phone,
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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Status & Specialization Pill Row (Clean, modern Indian Tech Portfolio layout) */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Senior / Tech Lead Roles</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <span className="font-semibold text-blue-600 dark:text-blue-400">6+ Years Exp</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span>Enterprise SaaS & AWS Cloud</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-5 text-balance">
              Architecting enterprise SaaS platforms & modernizing cloud web applications.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl font-normal">
              Senior Full Stack Software Developer with 6+ years of specialized experience delivering mission-critical
              platforms across North America and Australia. Specializing in high-performance
              Nuxt/Vue (SSR), React, C# ASP.NET Core Web APIs, MS SQL Server (T-SQL SP Tuning),
              AWS cloud infrastructure (EC2 with ALB, S3, SES), and zero-downtime legacy migrations using
              IIS ARR and the Strangler Fig pattern.
            </p>

            {/* Primary Action Row with Case Studies, Resume, Contact Me, and Email */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-500/20 transition-colors whitespace-nowrap cursor-pointer"
              >
                Explore Case Studies
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800/70 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </button>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 text-xs font-medium">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">{profile.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick-Glance Stack Badges (Inspired by top Indian Tech Leads) */}
            <div className="flex flex-wrap items-center gap-1.5 mb-6 text-[11px] font-mono text-slate-600 dark:text-slate-300">
              <span className="text-slate-400 dark:text-slate-500 text-xs mr-1 font-sans">Core Stack:</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">C# .NET Core</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">Nuxt 4 / Vue 3 (SSR)</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">AWS (EC2 & ALB)</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">T-SQL Tuning</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">Claude AI</span>
            </div>

            {/* Direct Connect Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400 pt-5 border-t border-slate-200 dark:border-slate-800/70">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>github.com/{profile.githubUsername}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{profile.phone}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {profile.availabilityStatus}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Command Card & Production Profile */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-sm overflow-hidden">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-inner">
                    <div className="w-full h-full bg-white dark:bg-[#070b14] rounded-[10px] flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono font-bold text-base">
                      AA
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {profile.name}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Senior Full Stack Engineer
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded">
                    Active in Production
                  </span>
                </div>
              </div>

              {/* Core Architectural Pillars */}
              <div className="py-5 space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#080d19] border border-slate-100 dark:border-slate-800/80 hover:dark:border-slate-700 hover:dark:bg-[#0d1627] transition-all">
                  <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      Full-Stack SSR, Mobile & Testing
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Nuxt 4 (SSR), Vue 3, React.js, Ionic Capacitor (Play Store), Vitest
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#080d19] border border-slate-100 dark:border-slate-800/80 hover:dark:border-slate-700 hover:dark:bg-[#0d1627] transition-all">
                  <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      C# .NET Core, Micro-Services & ARR
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      ASP.NET Core Web API, Node.js, IIS ARR Reverse Proxy, Strangler Fig
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#080d19] border border-slate-100 dark:border-slate-800/80 hover:dark:border-slate-700 hover:dark:bg-[#0d1627] transition-all">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      AWS Cloud, T-SQL & Claude AI
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      AWS (EC2 & ALB, S3, SES), Linux (Ubuntu), MS SQL Stored Procs, Claude AI workflows
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Insight Preview */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2 font-mono">
                  <span>web.config · ARR Reverse Proxy</span>
                  <span className="text-slate-400 dark:text-slate-500">IIS Strangler Dispatch</span>
                </div>
                <pre className="p-3 rounded-lg bg-slate-900 dark:bg-[#050811] border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>
                    &lt;<span className="text-purple-400">rule</span> name="Strangler-Nuxt4" stopProcessing="true"&gt;{'\n'}
                    {'  '}&lt;<span className="text-blue-400">match</span> url="^(admin|parent)/.*" /&gt;{'\n'}
                    {'  '}&lt;<span className="text-amber-400">action</span> type="Rewrite" url="http://localhost:3000/&#123;R:0&#125;" /&gt;{'\n'}
                    &lt;/<span className="text-purple-400">rule</span>&gt;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Metric Strip (Below the Split) */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-4 sm:pl-6 first:border-l-0"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
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
