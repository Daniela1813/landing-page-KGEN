import React from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';

export const Stepper = ({ currentStep, onSelectStep }) => {
  const steps = REFERRAL_CONFIG.steps;
  const totalSteps = steps.length;
  const progressPercent = Math.min(100, Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100));

  // Títulos cortos para el Stepper superior
  const shortTitles = [
    "Dispositivo",
    "Registro",
    "Minute App",
    "Vincular Minute",
    "Binance",
    "Soporte",
    "Comunidad",
    "Preguntas FAQ"
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#08090b]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 transition-all">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Superior con Indicador de Progreso General */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7cfc00] animate-pulse" />
            <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#7cfc00]">
              PROGRESO DE CONFIGURACIÓN
            </span>
          </div>

          <div className="text-[11px] font-mono font-bold text-slate-400">
            PASO <span className="text-[#7cfc00] font-black">{Math.min(currentStep, totalSteps)}</span> DE {totalSteps}
            <span className="text-slate-600 ml-2">({Math.round(progressPercent)}%)</span>
          </div>
        </div>

        {/* Barra de Progreso Neón Resplandeciente */}
        <div className="relative w-full bg-slate-900 h-1.5 rounded-full mb-3 overflow-hidden border border-slate-800">
          <div
            className="bg-[#7cfc00] h-full transition-all duration-500 ease-out shadow-[0_0_12px_#7cfc00]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Lista de Pasos Interactiva (Stepper Cyberpunk) */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-1 gap-2">
          {steps.map((step, idx) => {
            const stepNum = step.number;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;

            return (
              <button
                key={stepNum}
                onClick={() => onSelectStep(stepNum)}
                className="flex flex-col items-center gap-1.5 min-w-[58px] sm:min-w-[72px] group focus:outline-none transition-all"
              >
                {/* Círculo / Número de Paso */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-mono transition-all duration-300 ${
                    isCompleted
                      ? 'bg-[#7cfc00] text-black font-extrabold shadow-[0_0_10px_rgba(124,252,0,0.4)]'
                      : isCurrent
                      ? 'bg-[#7cfc00] text-black font-black scale-110 shadow-[0_0_16px_rgba(124,252,0,0.8)] ring-2 ring-[#7cfc00]/50'
                      : 'bg-slate-900 text-slate-500 border border-slate-800 group-hover:border-[#7cfc00]/40 group-hover:text-slate-200'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>

                {/* Etiqueta del Paso */}
                <span
                  className={`text-[10px] font-mono uppercase font-bold tracking-wider truncate max-w-[68px] text-center transition-colors ${
                    isCurrent
                      ? 'text-[#7cfc00] font-black'
                      : isCompleted
                      ? 'text-[#7cfc00]/80'
                      : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                >
                  {shortTitles[idx] || `Paso ${stepNum}`}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
