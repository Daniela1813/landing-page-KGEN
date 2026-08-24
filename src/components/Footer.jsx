import React from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Disclaimer */}
        <div className="space-y-2 max-w-md">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-cyan-400 text-xs">
                KG
              </div>
            </div>
            <span className="font-bold text-lg text-white">{REFERRAL_CONFIG.appName} Landing</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              VIP Referrals
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Landing page no oficial de recomendación y guía paso a paso para usuarios de KGEN. Registros protegidos con enlace oficial verificado.
          </p>
        </div>

        {/* Final Referral Call To Action */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={REFERRAL_CONFIG.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Únete a KGEN con Mi Referido</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} KGEN Referral Portal. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Enlace Seguro y Verificado</span>
        </div>
      </div>
    </footer>
  );
};
