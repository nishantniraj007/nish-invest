import React, { useState, useEffect } from 'react';

const TrustWarningModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('seenWarning');
      if (!seen) {
        setIsOpen(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('seenWarning', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm"></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="bg-[#1B3A6B] p-8 text-white text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🛡️</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Before You Trust Anyone With Your Money</h2>
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <p className="text-gray-700 leading-relaxed">
            Scammers often use "Affinity Fraud" — they use your friends, family, or community to win your trust. 
            Just because someone you know made money doesn't mean the investment is real.
          </p>

          <div className="bg-[#F2F4F7] p-6 rounded-2xl">
            <h3 className="font-bold text-[#1B3A6B] mb-4 uppercase text-xs tracking-widest">Always ask these 3 questions:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm font-medium text-gray-700">
                <span className="text-[#E8541A]">1.</span> "Who is the government regulator for this?"
              </li>
              <li className="flex gap-3 text-sm font-medium text-gray-700">
                <span className="text-[#E8541A]">2.</span> "Can I get my money back in 24 hours if I want?"
              </li>
              <li className="flex gap-3 text-sm font-medium text-gray-700">
                <span className="text-[#E8541A]">3.</span> "Why are you pressuring me to decide fast?"
              </li>
            </ul>
          </div>

          <div className="text-center italic text-[#B8860B] font-medium">
            "Most bubbles look most successful right before they disappear."
          </div>

          <button 
            onClick={handleDismiss}
            className="w-full py-5 bg-[#1B3A6B] text-white font-bold rounded-2xl hover:bg-opacity-90 transition-all shadow-xl text-lg"
          >
            I understand, show me the tool
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustWarningModal;
