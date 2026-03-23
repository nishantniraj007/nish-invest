import React from 'react';
import FisheyScanner from '../components/FisheyScanner';

const FisheyPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F7] pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B3A6B] mb-4">Fishey Scanner</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Is that investment offer too good to be true? Run it through our 5-step scanner to find hidden scam signatures.
          </p>
        </div>
        
        <FisheyScanner />
        
        <div className="mt-12 p-6 bg-white rounded-xl border border-black/5 shadow-sm max-w-xl mx-auto">
          <h4 className="font-bold text-[#1B3A6B] mb-2 text-sm uppercase tracking-widest">Why this works</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Scammers follow predictable patterns: high returns, high pressure, and no regulation. 
            Our scanner checks for these "scam signatures" based on decades of historical data in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FisheyPage;
