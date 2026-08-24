import React from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';

export const Stepper = ({ currentStep, onSelectStep }) => {
  const steps = REFERRAL_CONFIG.steps;
  const totalSteps = steps.length;
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <nav className="sticky top-0 z-40 bg-[#08090b]/95 backdrop-blur-md px-4 py-3 border-b border-slate-800/60">
      <div className="max-w-3xl mx-auto">
        
        {/* Step Numbers without boxes */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-1">
          {steps.map((step) => {
            const stepNum = step.number;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;

            return (
              <button
                key={stepNum}
                onClick={() => onSelectStep(stepNum)}
                className="flex flex-col items-center gap-1 min-w-[40px] group focus:outline-none"
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                    isCompleted
                      ? 'bg-[#7cfc00] text-black font-extrabold'
                      : isCurrent
                      ? 'bg-[#7cfc00] text-black font-black scale-110 shadow-[0_0_12px_rgba(124,252,0,0.5)]'
                      : 'bg-slate-900 text-slate-500 group-hover:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>

                <span
                  className={`text-[10px] font-mono uppercase font-bold tracking-wider hidden sm:block ${
                    isCurrent ? 'text-[#7cfc00]' : isCompleted ? 'text-[#7cfc00]/80' : 'text-slate-600'
                  }`}
                >
                  Paso {stepNum}
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-1 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-[#7cfc00] h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

      </div>
    </nav>
  );
};
