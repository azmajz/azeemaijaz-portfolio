import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { validateContactForm, ContactFormData } from '../utils/portfolioLogic';
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  id?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id = 'contact' }) => {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id={id} className="py-20 border-t border-slate-800/80 bg-[#070b14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-400 mb-2 tracking-wide uppercase">
            Start a Conversation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Currently open to Senior & Lead Full Stack Engineering opportunities, system architecture
            consulting, and cloud modernization initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-7 shadow-md">
              <h3 className="text-base font-bold text-white mb-4">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-white hover:text-blue-400 font-mono transition-colors"
                      >
                        {profile.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 text-slate-400 hover:text-white"
                        title="Copy email address"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telephone / Mobile</div>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-white hover:text-blue-400 font-mono transition-colors mt-0.5 inline-block"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Current Base</div>
                    <div className="text-slate-200 mt-0.5 font-medium">
                      {profile.location}
                    </div>
                  </div>
                </div>

                {/* GitHub item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Open Source & Code</div>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-white hover:text-blue-400 font-mono transition-colors mt-0.5 inline-block"
                    >
                      github.com/{profile.githubUsername}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/40">
              <div className="text-xs font-mono text-blue-400 font-medium mb-1">
                Notice Period & Availability
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Available for full-time senior engineering appointments, technical leadership pods,
                and hybrid/remote arrangements.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090d18] border border-slate-800 p-6 sm:p-8 shadow-md">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. You can dispatch this message directly via your email client or copy the message text.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Role or Inquiry Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Senior Full Stack Engineer Opportunity"
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message / Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the opportunity, technical challenges, or requirements..."
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
