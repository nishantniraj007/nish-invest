import React, { useState } from 'react';
import { getAllocation } from '../data/allocationLogic';

const AllocationGuide = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    amount: '',
    timeline: '',
    risk: ''
  });
  const [result, setResult] = useState(null);

  const handleSelect = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (step < 3) {
      setStep(step + 1);
    } else {
      const allocation = getAllocation(newAnswers.amount, newAnswers.timeline, newAnswers.risk);
      setResult(allocation);
      sessionStorage.setItem('allocationResult', JSON.stringify({
        answers: newAnswers,
        allocation
      }));
    }
  };

  if (result) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 animate-in zoom-in duration-300">
        <h2 className="text-2xl font-bold text-[#1B3A6B] mb-6">Your Money Bucket Plan</h2>
        <div className="space-y-6">
          {result.map((item, i) => (
            <div key={i} className="p-6 bg-[#F2F4F7] rounded-xl border-l-8 border-[#1B3A6B]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-[#1B3A6B]">{item.bucket}</h3>
                <span className="text-[#E8541A] font-bold text-xl">Rs {item.amount.toLocaleString()}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.reason}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="w-full mt-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 max-w-xl mx-auto">
      <div className="mb-8">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#E8541A] transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-6">How much are you planning to invest?</h3>
          <div className="grid gap-3">
            {["Under Rs 50,000", "Rs 50,000 to Rs 5 lakh", "Above Rs 5 lakh"].map(opt => (
              <button 
                key={opt}
                onClick={() => handleSelect('amount', opt)}
                className="w-full p-5 text-left border-2 border-gray-100 rounded-xl hover:border-[#1B3A6B] font-medium transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-6">When do you need this money back?</h3>
          <div className="grid gap-3">
            {["Within 6 months", "In 1-3 years", "In 7+ years", "I don't know"].map(opt => (
              <button 
                key={opt}
                onClick={() => handleSelect('timeline', opt)}
                className="w-full p-5 text-left border-2 border-gray-100 rounded-xl hover:border-[#1B3A6B] font-medium transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-6">How do you feel about the price changing?</h3>
          <div className="grid gap-3">
            {["Cannot sleep if it drops", "OK with some ups and downs", "Don't care short-term"].map(opt => (
              <button 
                key={opt}
                onClick={() => handleSelect('risk', opt)}
                className="w-full p-5 text-left border-2 border-gray-100 rounded-xl hover:border-[#1B3A6B] font-medium transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllocationGuide;
