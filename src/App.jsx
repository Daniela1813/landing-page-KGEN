import React, { useState } from 'react';
import { REFERRAL_CONFIG } from './config/referralConfig';
import { Stepper } from './components/Stepper';
import { StepView } from './components/StepView';
import { CompletionScreen } from './components/CompletionScreen';
import { FloatingReferralCTA } from './components/FloatingReferralCTA';

export function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const totalSteps = REFERRAL_CONFIG.steps.length;

  const handleSelectStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    setIsFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0 });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setIsFinished(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24 flex flex-col">
      
      {/* 1. Minimal Stepper Header */}
      <Stepper 
        currentStep={isFinished ? totalSteps + 1 : currentStep} 
        onSelectStep={handleSelectStep} 
      />

      {/* 2. Step View (Video Top + Instructions Bottom) or Completion */}
      {!isFinished ? (
        <StepView
          key={currentStep}
          step={REFERRAL_CONFIG.steps[currentStep - 1]}
          isFirst={currentStep === 1}
          isLast={currentStep === totalSteps}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      ) : (
        <CompletionScreen onRestart={handleRestart} />
      )}

      {/* 3. Floating Persistent Referral Bar */}
      <FloatingReferralCTA />

    </div>
  );
}

export default App;
