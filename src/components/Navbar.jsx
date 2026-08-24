import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ExternalLink, Copy, Check, ShieldCheck, Sparkles, Gift } from 'lucide-react';

export const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(REFERRAL_CONFIG.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-xl tracking-wider">
              KG
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                {REFERRAL_CONFIG.appName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="w-3 h-3" /> VIP Oficial
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden md:block">
              {REFERRAL_CONFIG.appBadge}
            </p>
          </div>
        </div>

        {/* Bonus Tag & Quick Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Bonus Pill */}
          <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-200 shadow-inner">
            <Gift className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>Bonus: <strong className="text-cyan-300">{REFERRAL_CONFIG.welcomeBonus}</strong></span>
          </div>

          {/* Copy Code Button */}
          <button
            onClick={handleCopyCode}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-all hover:text-white"
            title="Copiar Código de Referido"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cod: <code className="text-cyan-300 font-bold">{REFERRAL_CONFIG.referralCode}</code></span>
              </>
            )}
          </button>

          {/* Direct Referral CTA Button */}
          <a
            href={REFERRAL_CONFIG.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Únete con Mi Enlace</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </header>
  );
};
