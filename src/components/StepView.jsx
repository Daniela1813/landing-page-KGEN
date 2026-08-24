import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ExternalLink, Copy, Check, Play, Youtube, ArrowRight, ArrowLeft, Key, CheckCircle2 } from 'lucide-react';

export const StepView = ({ step, isFirst, isLast, onNext, onPrev }) => {
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [copiedMinuteCode, setCopiedMinuteCode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(REFERRAL_CONFIG.referralCode);
    setCopiedReferral(true);
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  const handleCopyMinuteCode = () => {
    navigator.clipboard.writeText(REFERRAL_CONFIG.minuteInviteCode);
    setCopiedMinuteCode(true);
    setTimeout(() => setCopiedMinuteCode(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 flex flex-col flex-1 font-kgen-mono">
      
      {/* 1. TÍTULO Y DESCRIPCIÓN CON TIPOGRAFÍA OFICIAL DE KGEN (CHAKRA PETCH) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 bg-[#7cfc00] inline-block shrink-0" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#7cfc00] font-kgen-title">
            PASO {step.number} DE {REFERRAL_CONFIG.steps.length}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-2 font-kgen-title">
          {step.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-kgen-mono">
          {step.subtitle}
        </p>
      </div>

      {/* 2. VIDEO DE YOUTUBE */}
      <div className="rounded-2xl overflow-hidden mb-6 relative">
        {!isPlaying ? (
          <div 
            className="relative cursor-pointer aspect-video bg-slate-900 flex flex-col items-center justify-center p-4 group rounded-2xl border border-slate-800"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${step.youtubeId}/hqdefault.jpg`}
              alt={step.videoTitle}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mb-3 shadow-xl">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <div className="flex items-center gap-1.5 text-white text-xs font-bold font-kgen-title uppercase">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Ver Tutorial en Video</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-sm font-kgen-mono line-clamp-1">
                {step.videoTitle}
              </p>
            </div>
          </div>
        ) : (
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${step.youtubeId}?autoplay=1&rel=0`}
              title={step.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* CÓDIGO DE MINUTE EN EL PASO 3 */}
      {step.showMinuteCode && (
        <div className="mb-6 py-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2 font-kgen-title">
            <Key className="w-4 h-4" />
            <span>Código de Invitación Obligatorio para Minute</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-3 font-kgen-mono">
            Sin este código no se vinculará KGEN con la app de grabación. Copia el código a continuación:
          </p>

          <div className="flex items-center gap-4 py-2">
            <span className="text-2xl font-mono font-black text-amber-300 tracking-widest">
              {REFERRAL_CONFIG.minuteInviteCode}
            </span>
            
            <button
              onClick={handleCopyMinuteCode}
              className="kgen-btn-secondary px-5 py-2.5 text-xs flex items-center gap-2"
            >
              {copiedMinuteCode ? (
                <>
                  <Check className="w-4 h-4 text-[#7cfc00]" />
                  <span>¡COPIADO!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPIAR CÓDIGO</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 3. INSTRUCCIONES ABAJO DEL VIDEO CON FUENTE SPACE MONO */}
      <div className="mb-8 space-y-3">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2 mb-3 font-kgen-title">
          <CheckCircle2 className="w-4 h-4 text-[#7cfc00]" />
          Pasos a seguir:
        </h3>

        {step.instructions.map((inst, idx) => (
          <div key={idx} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base leading-relaxed py-1 font-kgen-mono">
            <span className="w-6 h-6 rounded-md bg-[#7cfc00]/10 text-[#7cfc00] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <p className="flex-1">
              {inst}
            </p>
          </div>
        ))}
      </div>

      {/* 4. BOTONES KGEN CON FUENTE CHAKRA PETCH */}
      <div className="space-y-3 mb-8">
        <a
          href={REFERRAL_CONFIG.referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="kgen-btn-primary w-full flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base shadow-lg"
        >
          <ArrowRight className="w-5 h-5 text-black" />
          <span className="uppercase tracking-wider font-kgen-title">{step.ctaText}</span>
          <ExternalLink className="w-4 h-4 text-black opacity-80" />
        </a>

        <button
          onClick={handleCopyReferralCode}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold text-slate-400 hover:text-[#7cfc00] transition-all font-kgen-mono"
        >
          {copiedReferral ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#7cfc00]" />
              <span className="text-[#7cfc00]">¡CÓDIGO COPIADO!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#7cfc00]" />
              <span>COPIAR CÓDIGO REFERIDO: <code className="text-[#7cfc00] font-mono font-bold">{REFERRAL_CONFIG.referralCode}</code></span>
            </>
          )}
        </button>
      </div>

      {/* 5. NAVEGACIÓN ENTRE PASOS */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-900 mt-auto">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`kgen-btn-secondary px-6 py-3 text-xs sm:text-sm flex items-center gap-2 ${
            isFirst ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ANTERIOR</span>
        </button>

        <button
          onClick={onNext}
          className="kgen-btn-primary px-8 py-3 text-xs sm:text-sm flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 text-black" />
          <span>{isLast ? 'FINALIZAR' : 'SIGUIENTE'}</span>
        </button>
      </div>

    </div>
  );
};
