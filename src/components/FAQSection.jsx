import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-3 border border-purple-500/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Soporte y Dudas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Preguntas Frecuentes sobre KGEN
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
          Todo lo que necesitas saber antes de registrarte con nuestro enlace oficial.
        </p>
      </div>

      <div className="space-y-4">
        {REFERRAL_CONFIG.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 transition-colors hover:border-slate-700"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
