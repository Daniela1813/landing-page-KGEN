import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '../config/referralConfig';
import { Smartphone, Gift, Trophy, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, PlayCircle, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const ICON_MAP = {
  Smartphone: Smartphone,
  Gift: Gift,
  Trophy: Trophy
};

export const QuizCarousel = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = REFERRAL_CONFIG.quizQuestions;
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      triggerCompletion();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const triggerCompletion = () => {
    setIsFinished(true);
    // Lanzar efecto de confeti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
    if (onComplete) onComplete();
  };

  const scrollToSteps = () => {
    const stepsElement = document.getElementById('pasos-tutorial');
    if (stepsElement) {
      stepsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl -z-10" />

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">
        
        {!isFinished ? (
          <div>
            {/* Header progress indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/30">
                  {currentIndex + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400">
                  Pregunta {currentIndex + 1} de {questions.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-32 sm:w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test Personalizado KGEN</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options list */}
            <div className="space-y-3 sm:space-y-4 mb-8">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQuestion.id, idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-colors ${
                        isSelected 
                          ? 'border-cyan-400 bg-cyan-500 text-slate-950 font-bold text-xs' 
                          : 'border-slate-600 text-slate-400 group-hover:border-slate-500'
                      }`}>
                        {isSelected ? <CheckCircle2 className="w-4 h-4 text-slate-950" /> : String.fromCharCode(65 + idx)}
                      </div>
                      <div>
                        <p className={`font-semibold text-sm sm:text-base ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                          {opt.label}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                          {opt.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-slate-600'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion.id] === undefined}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  selectedAnswers[currentQuestion.id] !== undefined
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>{currentIndex === questions.length - 1 ? 'Finalizar y Ver Pasos' : 'Siguiente'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Completion Slide */
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/30 animate-bounce">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-3 border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Perfil Compatible VIP Detectado</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ¡Tu Recompensa de Bienvenida está Lista!
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Basado en tus respuestas, calificas para recibir <strong className="text-cyan-400 font-bold">{REFERRAL_CONFIG.welcomeBonus}</strong>. Sigue los 3 sencillos pasos a continuación con nuestros tutoriales en video.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={REFERRAL_CONFIG.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-cyan-500/30 transition-all transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>Registrarme con Referido Ahora</span>
              </a>

              <button
                onClick={scrollToSteps}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all"
              >
                <PlayCircle className="w-4 h-4 text-cyan-400" />
                <span>Ver Videos Paso a Paso</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
