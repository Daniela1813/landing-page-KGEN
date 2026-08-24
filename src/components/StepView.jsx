import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ExternalLink, Copy, Check, Play, Youtube, ArrowRight, ArrowLeft, Key, CheckCircle2, AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

export const StepView = ({ step, isFirst, isLast, onNext, onPrev }) => {
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [copiedMinuteCode, setCopiedMinuteCode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Estado para la pregunta interactiva de dispositivos en el Paso 1 ('yes' | 'no' | null)
  const [hasCompatibleDevice, setHasCompatibleDevice] = useState(null);

  // Usa el enlace personalizado del paso si existe, o el enlace de referido principal
  const targetLink = step.customLink || REFERRAL_CONFIG.referralLink;

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
    <div className="w-full max-w-3xl mx-auto px-4 py-4 sm:py-6 flex flex-col flex-1 font-kgen-mono">
      
      {/* 1. TÍTULO Y DESCRIPCIÓN EN LA PARTE SUPERIOR */}
      <div className="mb-5 sm:mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 bg-[#7cfc00] inline-block shrink-0" />
          <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#7cfc00] font-kgen-title">
            PASO {step.number} DE {REFERRAL_CONFIG.steps.length}
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-2 font-kgen-title leading-snug break-words">
          {step.title}
        </h2>
        <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-kgen-mono">
          {step.subtitle}
        </p>
      </div>

      {/* 2. VIDEO DE YOUTUBE EN EL MEDIO */}
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mb-2 sm:mb-3 shadow-xl">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </div>
              <div className="flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-bold font-kgen-title uppercase">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Ver Tutorial en Video</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 max-w-sm font-kgen-mono line-clamp-1">
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
            <Key className="w-4 h-4 shrink-0" />
            <span>Código de Invitación Obligatorio para Minute</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-3 font-kgen-mono leading-relaxed">
            Sin este código no se vinculará KGEN con la app de grabación. Copia el código a continuación:
          </p>

          <div className="flex flex-wrap items-center gap-3 py-2">
            <span className="text-xl sm:text-2xl font-mono font-black text-amber-300 tracking-widest">
              {REFERRAL_CONFIG.minuteInviteCode}
            </span>
            
            <button
              onClick={handleCopyMinuteCode}
              className="kgen-btn-secondary px-4 py-2 text-xs flex items-center gap-2"
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

      {/* 3. LISTA DE DISPOSITIVOS / INSTRUCCIONES ABAJO DEL VIDEO */}
      <div className="mb-6 space-y-3">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-2 mb-3 font-kgen-title">
          <CheckCircle2 className="w-4 h-4 text-[#7cfc00] shrink-0" />
          {step.number === 1 ? 'Dispositivos admitidos:' : 'Pasos a seguir:'}
        </h3>

        {step.instructions.map((inst, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-base leading-relaxed py-1 font-kgen-mono">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#7cfc00]/10 text-[#7cfc00] font-black text-[11px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <p className="flex-1 break-words">
              {inst}
            </p>
          </div>
        ))}
      </div>

      {/* 4. PREGUNTA Y BOTONES DE CONFIRMACIÓN SÍ / NO PARA EL PASO 1 */}
      {step.number === 1 && (
        <div className="mb-8 py-4 border-t border-slate-900">
          <div className="mb-4">
            <h3 className="text-sm sm:text-lg font-black uppercase text-[#7cfc00] tracking-wide font-kgen-title flex items-start sm:items-center gap-2 leading-tight">
              <span className="w-2.5 h-2.5 bg-[#7cfc00] inline-block shrink-0 mt-1 sm:mt-0 animate-pulse" />
              ¿Tienes alguno de estos teléfonos admitidos?
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-kgen-mono flex items-center gap-1 leading-snug">
              <ArrowDown className="w-3.5 h-3.5 text-[#7cfc00] shrink-0 animate-bounce" />
              Selecciona una opción para habilitar el botón SIGUIENTE:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => setHasCompatibleDevice('yes')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase font-kgen-title flex items-center justify-center gap-2 transition-all ${
                hasCompatibleDevice === 'yes'
                  ? 'kgen-btn-primary shadow-[0_0_20px_rgba(124,252,0,0.6)]'
                  : 'kgen-btn-secondary text-slate-300 hover:text-white'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${hasCompatibleDevice === 'yes' ? 'text-black' : 'text-slate-500'}`} />
              <span>SÍ, TENGO UNO</span>
            </button>

            <button
              onClick={() => setHasCompatibleDevice('no')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase font-kgen-title flex items-center justify-center gap-2 transition-all ${
                hasCompatibleDevice === 'no'
                  ? 'bg-red-600 text-white border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] kgen-btn-shape'
                  : 'kgen-btn-secondary text-slate-300 hover:text-red-400'
              }`}
            >
              <XCircle className={`w-4 h-4 shrink-0 ${hasCompatibleDevice === 'no' ? 'text-white' : 'text-slate-500'}`} />
              <span>NO TENGO NINGUNO</span>
            </button>
          </div>

          {hasCompatibleDevice === 'yes' && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#7cfc00]/10 border border-[#7cfc00]/30 space-y-1.5">
              <div className="flex items-start gap-2 text-[#7cfc00] font-bold text-xs sm:text-sm font-kgen-title uppercase leading-tight">
                <CheckCircle2 className="w-4 h-4 text-[#7cfc00] shrink-0 mt-0.5" />
                <span>¡Opción Seleccionada! Dispositivo Compatible Verificado</span>
              </div>
              <p className="text-xs text-slate-300 font-kgen-mono leading-relaxed pl-6">
                Ahora haz clic en el botón verde <strong className="text-[#7cfc00] font-bold">SIGUIENTE</strong> abajo para continuar.
              </p>
            </div>
          )}

          {hasCompatibleDevice === 'no' && (
            <div className="p-3.5 sm:p-5 rounded-xl bg-red-950/50 border border-red-500/50 space-y-2">
              <div className="flex items-start gap-2 text-red-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider font-kgen-title leading-tight">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
                <span>¡Ups! No disponible para otros dispositivos</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-kgen-mono pl-6 sm:pl-7">
                La aplicación de grabación Minute solo funciona en <strong>iPhone 12+</strong>, <strong>Samsung Galaxy S21+</strong> y <strong>Google Pixel 6+</strong>.
              </p>
              <p className="text-xs text-red-300 font-bold font-kgen-title pl-6 sm:pl-7">
                ⛔ No podrás continuar sin un teléfono compatible.
              </p>
            </div>
          )}
        </div>
      )}

      {/* 5. BOTÓN DE REGISTRO / ACCIÓN DIRECTA (USA EL ENLACE CORRESPONDIENTE AL PASO) */}
      {step.number > 1 && (
        <div className="space-y-3 mb-8">
          <a
            href={targetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="kgen-btn-primary w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 text-xs sm:text-base shadow-lg"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <span className="uppercase tracking-wider font-kgen-title truncate">{step.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black opacity-80 shrink-0" />
          </a>

          <button
            onClick={handleCopyReferralCode}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-bold text-slate-400 hover:text-[#7cfc00] transition-all font-kgen-mono"
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
      )}

      {/* 6. NAVEGACIÓN ENTRE PASOS */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-900 mt-auto">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`kgen-btn-secondary px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm flex items-center gap-1.5 ${
            isFirst ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>ANTERIOR</span>
        </button>

        <button
          onClick={onNext}
          disabled={step.number === 1 && hasCompatibleDevice !== 'yes'}
          className={`px-5 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
            step.number === 1 && hasCompatibleDevice !== 'yes'
              ? 'opacity-30 cursor-not-allowed bg-slate-900 text-slate-600 border border-slate-800 rounded-xl'
              : 'kgen-btn-primary animate-pulse'
          }`}
        >
          <span>{isLast ? 'FINALIZAR' : 'SIGUIENTE'}</span>
          <ArrowRight className={`w-4 h-4 shrink-0 ${step.number === 1 && hasCompatibleDevice !== 'yes' ? 'text-slate-600' : 'text-black'}`} />
        </button>
      </div>

    </div>
  );
};
