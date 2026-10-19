import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Server, ShieldCheck, Database, RefreshCw, Cpu, Layers } from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strangler' | 'ecommerce'>('strangler');
  const [activeStage, setActiveStage] = useState(0);

  const playbook = PORTFOLIO_DATA.architecturePlaybook;
  const currentPlan = activeTab === 'strangler' ? playbook[0] : playbook[1];

  return (
    <section
      id="architecture"
      className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070a12]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
              System Design & Engineering Blueprints
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Enterprise Architectural Playbooks
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-2xl">
              Concrete architectural patterns implemented in production for EZChildTrack SaaS (4,000+ schools)
              and BullionStore Australia high-traffic precious metals trading.
            </p>
          </div>

          {/* Interactive Pattern Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#0a0f1d] border border-slate-200 dark:border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => {
                setActiveTab('strangler');
                setActiveStage(0);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'strangler'
                  ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Strangler Fig Migration
            </button>
            <button
              onClick={() => {
                setActiveTab('ecommerce');
                setActiveStage(0);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'ecommerce'
                  ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              High-Traffic E-Commerce
            </button>
          </div>
        </div>

        {/* Blueprint Interactive Display */}
        <div className="rounded-2xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{currentPlan.badge}</span>
                <span aria-hidden="true">·</span>
                <span>Production Architecture</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{currentPlan.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
                {currentPlan.overview}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">Stage:</span>
              <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60">
                {currentPlan.stages[activeStage].step} of 04
              </span>
            </div>
          </div>

          {/* Interactive Stepper Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            {currentPlan.stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'bg-blue-50/80 dark:bg-blue-600/15 border-blue-400 dark:border-blue-500/80 text-slate-900 dark:text-white shadow-xs'
                    : 'bg-slate-50 dark:bg-[#070b14] border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">{stage.step}</span>
                  {activeStage === idx && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </div>
                <div className="text-xs font-semibold truncate">{stage.name}</div>
              </button>
            ))}
          </div>

          {/* Dynamic Interactive Schematic Canvas */}
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#060911] border border-slate-200 dark:border-slate-800/90 my-6">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
              <span>Interactive Architecture Data Flow</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Stage Active: {currentPlan.stages[activeStage].name}</span>
            </div>

            {activeTab === 'strangler' ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Node 1: Edge Proxy */}
                <div className={`p-4 rounded-lg border transition-all ${activeStage >= 0 ? 'bg-white dark:bg-blue-950/30 border-blue-300 dark:border-blue-500/60 shadow-xs' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>IIS ARR Reverse Proxy</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    web.config rules inspect incoming URL patterns
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-blue-700 dark:text-blue-300">
                    /admin/* → Nuxt 4<br />
                    /legacy/* → MainApp
                  </div>
                </div>

                {/* Node 2: Modern Micro-Frontend */}
                <div className={`p-4 rounded-lg border transition-all ${activeStage >= 2 ? 'bg-white dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-500/60 shadow-xs' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Nuxt 4 SSR Portal</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Vue 3 + Nuxt UI (Vite-optimized, Vitest-covered)
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-emerald-700 dark:text-emerald-300">
                    SSR HTML Streaming<br />
                    Decoupled Micro-Frontends
                  </div>
                </div>

                {/* Node 3: Stateless API Layer */}
                <div className={`p-4 rounded-lg border transition-all ${activeStage >= 1 ? 'bg-white dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-500/60 shadow-xs' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>ASP.NET Core Web API</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Decoupled controllers, FluentValidation, DTOs
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-indigo-700 dark:text-indigo-300">
                    High throughput async<br />
                    C# 10 / Stateless
                  </div>
                </div>

                {/* Node 4: Database Layer */}
                <div className={`p-4 rounded-lg border transition-all ${activeStage >= 1 ? 'bg-white dark:bg-amber-950/30 border-amber-300 dark:border-amber-500/60 shadow-xs' : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>MS SQL Server</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Tuned T-SQL Stored Procedures & Covering Indexes
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-amber-700 dark:text-amber-300">
                    ACID transactions<br />
                    Sub-10ms Execution
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* E-Commerce Flow */}
                <div className="p-4 rounded-lg bg-white dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/60 text-slate-900 dark:text-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold">
                    <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Nuxt SSR Storefront</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Sub-second initial paint, SEO & Google Merchant feeds</div>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/60 text-slate-900 dark:text-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold">
                    <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Node.js / Express</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Live metal spot rates, inventory margins & role-based admin</div>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/60 text-slate-900 dark:text-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>GBG GreenID KYC</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Automated AML identity verification for high-value orders</div>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/60 text-slate-900 dark:text-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold">
                    <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Xero Accounting</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Bi-directional ledger reconciliation & invoice dispatch</div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Stage Explanation */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                {currentPlan.stages[activeStage].step}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {currentPlan.stages[activeStage].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {currentPlan.stages[activeStage].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
