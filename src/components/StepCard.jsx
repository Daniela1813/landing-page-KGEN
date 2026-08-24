import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { ExternalLink, Copy, Check, Play, CheckCircle, Sparkles, Youtube } from 'lucide-react';

export const StepCard = ({ step }) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(REFERRAL_CONFIG.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 transition-all hover:border-cyan-500/40 relative group">
      
      {/* Step Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-cyan-500/20">
            {step.number}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
                Paso {step.number} de {REFERRAL_CONFIG.steps.length}
              </span>
              {step.badge && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {step.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Copy Referral Code Pill */}
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">¡Código Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-cyan-400" />
              <span>Copiar Código: <strong className="text-cyan-300 font-mono">{REFERRAL_CONFIG.referralCode}</strong></span>
            </>
          )}
        </button>
      </div>

      <p className="text-slate-300 text-sm sm:text-base mb-6">
        {step.subtitle}
      </p>

      {/* Main Content Grid: Video Embed + Step Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6">
        
        {/* Responsive YouTube Video Container */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-xl relative group/video">
            
            {!isPlaying ? (
              /* Custom Video Thumbnail Overlay */
              <div 
                className="relative cursor-pointer aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 flex flex-col items-center justify-center p-6 text-center group"
                onClick={() => setIsPlaying(true)}
              >
                {/* YouTube Thumbnail Background Image */}
                <img
                  src={`https://img.youtube.com/vi/${step.youtubeId}/hqdefault.jpg`}
                  alt={step.videoTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to gradient if image fails
                    e.target.style.display = 'none';
                  }}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mx-auto mb-3 shadow-xl shadow-red-600/40">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-slate-700 mb-1">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Ver Tutorial en Video (Paso {step.number})</span>
                  </div>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto line-clamp-1">
                    {step.videoTitle}
                  </p>
                </div>
              </div>
            ) : (
              /* Responsive YouTube Iframe Embed */
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
        </div>

        {/* Instructions Checklist */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Lo que debes hacer:
          </h4>
          {step.instructions.map((inst, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                {inst.replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Action Footer: Prominent Referral Button */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Enlace VIP Directo Activo</span>
        </div>

        <a
          href={REFERRAL_CONFIG.referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
        >
          <span>{step.ctaText}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
