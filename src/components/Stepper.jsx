import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { Check, Lock, ChevronDown, ChevronUp } from 'lucide-react';

export const Stepper = ({ currentStep, onSelectStep }) => {
  const [expanded, setExpanded] = useState(false);
  const steps = REFERRAL_CONFIG.steps;
  const totalSteps = steps.length;
  const completedSteps = Math.min(currentStep - 1, totalSteps);
  const progressPercent = Math.min(100, Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100));

  const shortTitles = [
    "Dispositivo",
    "Registro",
    "Minute App",
    "Vincular",
    "Binance",
    "Soporte",
    "Comunidad",
    "FAQ"
  ];

  const stepIcons = ["📱", "📝", "⬇️", "🔗", "💰", "🛠️", "🎉", "❓"];

  return (
    <nav className="sticky top-0 z-40 bg-[#060709]/95 backdrop-blur-xl border-b border-[#7cfc00]/10 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-3 sm:px-4">

        {/* ═══ TOP BAR: Progress info + expand toggle ═══ */}
        <div className="flex items-center justify-between py-2.5 sm:py-3">
          
          {/* Left: Step counter */}
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#7cfc00] flex items-center justify-center shadow-[0_0_12px_rgba(124,252,0,0.5)]">
                <span className="text-black font-black text-sm sm:text-base font-kgen-title">
                  {Math.min(currentStep, totalSteps)}
                </span>
              </div>
              {currentStep <= totalSteps && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#7cfc00] rounded-full animate-ping opacity-75" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider leading-none">
                Paso {Math.min(currentStep, totalSteps)} de {totalSteps}
              </span>
              <span className="text-xs sm:text-sm font-kgen-title font-extrabold text-white uppercase truncate max-w-[140px] sm:max-w-none leading-tight mt-0.5">
                {shortTitles[Math.min(currentStep, totalSteps) - 1] || "Completado"}
              </span>
            </div>
          </div>

          {/* Center: Percentage badge */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="px-3 py-1 rounded-md bg-[#7cfc00]/10 border border-[#7cfc00]/20">
              <span className="text-[#7cfc00] font-mono font-black text-sm">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-600 uppercase">
              completado
            </span>
          </div>

          {/* Right: Expand toggle + mobile percentage */}
          <div className="flex items-center gap-2">
            <span className="sm:hidden text-[#7cfc00] font-mono font-black text-xs px-2 py-0.5 rounded bg-[#7cfc00]/10 border border-[#7cfc00]/20">
              {Math.round(progressPercent)}%
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-slate-400 hover:text-[#7cfc00] hover:bg-[#7cfc00]/5 transition-all text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider"
              aria-label={expanded ? "Colapsar pasos" : "Ver todos los pasos"}
            >
              <span className="hidden sm:inline">{expanded ? 'OCULTAR' : 'VER PASOS'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ═══ SEGMENTED PROGRESS BAR ═══ */}
        <div className="flex gap-[3px] pb-2.5 sm:pb-3">
          {steps.map((step, idx) => {
            const stepNum = step.number;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;

            return (
              <button
                key={stepNum}
                onClick={() => onSelectStep(stepNum)}
                className="flex-1 group relative focus:outline-none"
                aria-label={`Ir al paso ${stepNum}: ${shortTitles[idx]}`}
              >
                <div
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out ${
                    isCompleted
                      ? 'bg-[#7cfc00] shadow-[0_0_8px_rgba(124,252,0,0.4)]'
                      : isCurrent
                      ? 'bg-gradient-to-r from-[#7cfc00] to-[#7cfc00]/30 shadow-[0_0_12px_rgba(124,252,0,0.6)]'
                      : 'bg-slate-800/80 group-hover:bg-slate-700'
                  }`}
                />
                {/* Tooltip on hover (desktop) */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:sm:block whitespace-nowrap z-50">
                  <span className="text-[9px] font-mono font-bold text-[#7cfc00] bg-[#0a0d12] border border-[#7cfc00]/30 px-2 py-0.5 rounded shadow-lg">
                    {shortTitles[idx]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ═══ EXPANDED: Full step navigator ═══ */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${
            expanded ? 'max-h-[600px] opacity-100 pb-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-slate-800/50 pt-3">

            {/* Desktop: Horizontal node layout */}
            <div className="hidden sm:flex items-start justify-between relative">
              {/* Connecting line behind nodes */}
              <div className="absolute top-[18px] left-[24px] right-[24px] h-[2px] bg-slate-800 z-0" />
              <div
                className="absolute top-[18px] left-[24px] h-[2px] bg-[#7cfc00] z-[1] transition-all duration-700 ease-out shadow-[0_0_8px_rgba(124,252,0,0.5)]"
                style={{
                  width: `calc(${((completedSteps) / (totalSteps - 1)) * 100}% - 0px)`
                }}
              />

              {steps.map((step, idx) => {
                const stepNum = step.number;
                const isCompleted = currentStep > stepNum;
                const isCurrent = currentStep === stepNum;
                const isFuture = currentStep < stepNum;

                return (
                  <button
                    key={stepNum}
                    onClick={() => onSelectStep(stepNum)}
                    className="relative z-10 flex flex-col items-center gap-2 group focus:outline-none w-[72px]"
                  >
                    {/* Node circle */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all duration-300 ${
                        isCompleted
                          ? 'bg-[#7cfc00] text-black shadow-[0_0_12px_rgba(124,252,0,0.4)] group-hover:shadow-[0_0_20px_rgba(124,252,0,0.6)]'
                          : isCurrent
                          ? 'bg-[#7cfc00] text-black shadow-[0_0_20px_rgba(124,252,0,0.7)] ring-[3px] ring-[#7cfc00]/30 scale-110'
                          : 'bg-slate-900 text-slate-500 border border-slate-700 group-hover:border-[#7cfc00]/40 group-hover:text-slate-300'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : isFuture ? (
                        <Lock className="w-3.5 h-3.5" />
                      ) : (
                        <span className="font-black font-kgen-title">{stepNum}</span>
                      )}
                    </div>

                    {/* Pulsing ring for current */}
                    {isCurrent && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl border-2 border-[#7cfc00] animate-ping opacity-30" />
                    )}

                    {/* Label */}
                    <span
                      className={`text-[10px] font-kgen-title font-bold uppercase text-center leading-tight transition-colors max-w-[68px] ${
                        isCurrent
                          ? 'text-[#7cfc00]'
                          : isCompleted
                          ? 'text-[#7cfc00]/70'
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {shortTitles[idx]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile: Compact vertical list */}
            <div className="sm:hidden grid grid-cols-2 gap-1.5">
              {steps.map((step, idx) => {
                const stepNum = step.number;
                const isCompleted = currentStep > stepNum;
                const isCurrent = currentStep === stepNum;

                return (
                  <button
                    key={stepNum}
                    onClick={() => onSelectStep(stepNum)}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg transition-all text-left ${
                      isCurrent
                        ? 'bg-[#7cfc00]/15 border border-[#7cfc00]/30'
                        : isCompleted
                        ? 'bg-slate-900/50 border border-slate-800/50'
                        : 'bg-slate-950/30 border border-slate-900/30'
                    }`}
                  >
                    {/* Mini node */}
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] shrink-0 transition-all ${
                        isCompleted
                          ? 'bg-[#7cfc00] text-black'
                          : isCurrent
                          ? 'bg-[#7cfc00] text-black shadow-[0_0_10px_rgba(124,252,0,0.5)]'
                          : 'bg-slate-800 text-slate-500 border border-slate-700'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-3 h-3 stroke-[3]" />
                      ) : (
                        <span className="font-black font-kgen-title">{stepNum}</span>
                      )}
                    </div>

                    {/* Label */}
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-[10px] font-kgen-title font-bold uppercase truncate leading-tight ${
                          isCurrent
                            ? 'text-[#7cfc00]'
                            : isCompleted
                            ? 'text-[#7cfc00]/60'
                            : 'text-slate-500'
                        }`}
                      >
                        {shortTitles[idx]}
                      </span>
                      {isCurrent && (
                        <span className="text-[8px] font-mono text-[#7cfc00]/60 uppercase">
                          ● Actual
                        </span>
                      )}
                    </div>

                    {/* Emoji icon */}
                    <span className="text-xs ml-auto shrink-0 opacity-60">
                      {stepIcons[idx]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};
