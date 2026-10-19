import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060910] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <span className="text-sm font-bold text-white tracking-tight">
              {profile.name}
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Senior Full Stack Software Developer · Gurugram, India
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-slate-200 transition-colors"
            >
              {profile.email}
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
