import React from 'react';
import { Shield, Zap } from 'lucide-react';

export const BrandHeader = () => {
  return (
    <header className="relative w-full overflow-hidden">
      
      {/* Fondo sutil con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7cfc00]/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Línea superior decorativa */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#7cfc00]/60 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 py-5 sm:py-7">
        <div className="flex flex-col items-center text-center gap-4">

          {/* Avatar con borde brillante */}
          <div className="relative group">
            {/* Glow ring animado */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#7cfc00] via-[#7cfc00]/50 to-[#7cfc00] opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite]" />
            
            {/* Contenedor de la foto */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#7cfc00] shadow-[0_0_20px_rgba(124,252,0,0.3)]">
              <img
                src="/daniela-task-avatar.jpg"
                alt="Daniela Task - Guía KGEN"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Badge de verificación */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 bg-[#7cfc00] rounded-full flex items-center justify-center border-2 border-[#060709] shadow-[0_0_10px_rgba(124,252,0,0.5)]">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
            </div>
          </div>

          {/* Nombre de marca */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide font-kgen-title text-white leading-none">
              DANIELA{' '}
              <span className="text-[#7cfc00] drop-shadow-[0_0_12px_rgba(124,252,0,0.6)]">
                TASK
              </span>
            </h1>

            {/* Subtítulo con badge */}
            <div className="flex items-center gap-2 mt-1.5">
              <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#7cfc00]/50" />
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#7cfc00]/8 border border-[#7cfc00]/15">
                <Zap className="w-3 h-3 text-[#7cfc00]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-[#7cfc00]/80">
                  Guía Oficial de Onboarding KGEN
                </span>
              </div>
              <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#7cfc00]/50" />
            </div>

            <p className="text-[10px] sm:text-xs font-mono text-slate-500 mt-1 tracking-wider">
              Sigue los pasos y empieza a generar ganancias 💰
            </p>
          </div>

        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7cfc00]/30 to-transparent" />
    </header>
  );
};
