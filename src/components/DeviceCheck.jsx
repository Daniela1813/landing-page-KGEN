import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { Smartphone, CheckCircle2, XCircle, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const DeviceCheck = ({ onCompatible, onIncompatible }) => {
  const [selected, setSelected] = useState(null); // 'yes' | 'no' | null

  const handleYes = () => {
    setSelected('yes');
  };

  const handleNo = () => {
    setSelected('no');
  };

  const handleContinue = () => {
    if (selected === 'yes') onCompatible();
    if (selected === 'no') onIncompatible();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative">
      {/* Background Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-3 tracking-tight">
          Antes de comenzar...
        </h1>
        <p className="text-slate-300 text-center text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Para participar en el programa de KGEN necesitas uno de los siguientes dispositivos. ¿Tienes alguno de estos?
        </p>

        {/* Device List */}
        <div className="space-y-3 mb-8">
          {REFERRAL_CONFIG.compatibleDevices.map((device, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shrink-0">
                {device.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm sm:text-base">
                  {device.brand}
                </p>
                <p className="text-xs text-cyan-400 font-semibold">
                  {device.models}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  {device.description}
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            </div>
          ))}
        </div>

        {/* Yes / No Selection */}
        <p className="text-center text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4">
          ¿Tienes uno de estos dispositivos?
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleYes}
            className={`flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 ${
              selected === 'yes'
                ? 'bg-emerald-500/10 border-emerald-400 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <CheckCircle2 className={`w-8 h-8 ${selected === 'yes' ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span className={`font-bold text-sm ${selected === 'yes' ? 'text-emerald-300' : 'text-slate-300'}`}>
              Sí, tengo uno
            </span>
          </button>

          <button
            onClick={handleNo}
            className={`flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 ${
              selected === 'no'
                ? 'bg-red-500/10 border-red-400 shadow-lg shadow-red-500/20'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <XCircle className={`w-8 h-8 ${selected === 'no' ? 'text-red-400' : 'text-slate-500'}`} />
            <span className={`font-bold text-sm ${selected === 'no' ? 'text-red-300' : 'text-slate-300'}`}>
              No tengo ninguno
            </span>
          </button>
        </div>

        {/* Incompatible Device Message */}
        {selected === 'no' && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-300 mb-1">Dispositivo no compatible</p>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                Lamentablemente, la app Minute solo funciona en los dispositivos listados arriba. Necesitarás uno de ellos para completar el proceso y ganar recompensas.
              </p>
            </div>
          </div>
        )}

        {/* Continue Button */}
        {selected === 'yes' && (
          <button
            onClick={handleContinue}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-extrabold text-base py-4 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Comenzar Guía Paso a Paso</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-cyan-500/50" />
          <span>Proceso seguro y verificado</span>
        </div>
      </div>
    </div>
  );
};
