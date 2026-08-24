import React from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';

export const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="sticky top-0 z-40 glass-panel border-b border-slate-800/60 px-4 py-3">
      <div className="max-w-2xl mx-auto">
        {/* Steps dots & labels */}
        <div className="flex items-center justify-between mb-2">
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNum = i + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            
            return (
              <div key={i} className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                    : isCurrent
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                    : 'bg-slate-800 text-slate-500 border border-slate-700'
                }`}>
                  {isCompleted ? '✓' : stepNum}
                </div>
                <span className={`hidden sm:inline text-xs font-semibold transition-colors ${
                  isCurrent ? 'text-cyan-400' : isCompleted ? 'text-emerald-400' : 'text-slate-500'
                }`}>
                  {REFERRAL_CONFIG.steps[i]?.title?.split(':')[0] || `Paso ${stepNum}`}
                </span>
                
                {/* Connector line */}
                {i < totalSteps - 1 && (
                  <div className={`w-6 sm:w-10 h-0.5 mx-1 rounded transition-colors ${
                    isCompleted ? 'bg-emerald-500' : 'bg-slate-800'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar fill */}
        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
