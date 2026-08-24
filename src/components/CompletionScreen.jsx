import React from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { PartyPopper, ExternalLink, RotateCcw, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export const CompletionScreen = ({ onRestart }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 text-center flex flex-col items-center justify-center flex-1">
      
      {/* Icono de fiesta */}
      <div className="w-20 h-20 rounded-2xl bg-[#7cfc00] flex items-center justify-center mb-6 shadow-xl">
        <PartyPopper className="w-10 h-10 text-black" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 uppercase tracking-tight">
        ¡Felicidades! 🎉
      </h1>
      <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
        Has completado los 8 pasos correctamente. Tu cuenta de KGEN está lista para generar ganancias.
      </p>

      {/* Resumen de pasos completados */}
      <div className="space-y-3 mb-8 w-full text-left">
        {REFERRAL_CONFIG.steps.map((step) => (
          <div key={step.number} className="flex items-center gap-3 py-1 border-b border-slate-900">
            <CheckCircle2 className="w-5 h-5 text-[#7cfc00] shrink-0" />
            <p className="font-bold text-slate-200 text-xs sm:text-sm uppercase flex-1">
              Paso {step.number}: {step.title}
            </p>
            <span className="text-[10px] font-mono font-extrabold text-[#7cfc00]">LISTO</span>
          </div>
        ))}
      </div>

      {/* Recompensa */}
      <div className="mb-8 py-4 text-center">
        <div className="inline-flex items-center gap-2 mb-2 text-[#7cfc00] font-black uppercase text-sm tracking-wider">
          <Trophy className="w-5 h-5" />
          <span>¡Ya puedes empezar a ganar!</span>
        </div>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          Abre KGEN y Minute para empezar a realizar tareas de grabación y recibir tus pagos directamente en tu billetera de Binance.
        </p>
      </div>

      {/* Botones estilo KGEN */}
      <div className="w-full space-y-4">
        <a
          href={REFERRAL_CONFIG.referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="kgen-btn-primary w-full flex items-center justify-center gap-2 py-4 px-6 text-base"
        >
          <ArrowRight className="w-5 h-5 text-black" />
          <span>IR A KGEN AHORA</span>
          <ExternalLink className="w-4 h-4 text-black opacity-80" />
        </a>

        <button
          onClick={onRestart}
          className="kgen-btn-secondary w-full flex items-center justify-center gap-2 py-3 px-6 text-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>VOLVER AL PASO 1</span>
        </button>
      </div>

    </div>
  );
};
