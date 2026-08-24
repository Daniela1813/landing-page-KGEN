import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ExternalLink, Copy, Check, ArrowRight } from 'lucide-react';

export const FloatingReferralCTA = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(REFERRAL_CONFIG.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#08090b]/95 backdrop-blur-md py-3 px-4 border-t border-slate-900">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
        
        <button
          onClick={handleCopyCode}
          className="kgen-btn-secondary p-3 text-xs flex items-center gap-1.5 shrink-0"
          title="Copiar Código"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#7cfc00]" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="hidden xs:inline">CÓDIGO</span>
        </button>

        <a
          href={REFERRAL_CONFIG.referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="kgen-btn-primary flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm"
        >
          <ArrowRight className="w-4 h-4 text-black" />
          <span>REGISTRARME CON REFERIDO</span>
          <ExternalLink className="w-3.5 h-3.5 text-black opacity-80" />
        </a>

      </div>
    </div>
  );
};
