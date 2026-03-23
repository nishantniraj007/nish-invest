import React, { useState } from 'react';
import { checkScamName, checkReturns, checkWithdrawal, checkPressure, checkUPI } from '../data/fisheyLogic';

const FisheyScanner = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    name: '',
    returns: '',
    withdrawal: '',
    pressure: '',
    upi: ''
  });
  const [results, setResults] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = (key, value, checkFn) => {
    const res = checkFn(value);
    setResults([...results, { key, ...res }]);
    setAnswers({ ...answers, [key]: value });
    
    if (step < 5) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
      // Store in session
      const redCount = [...results, { key, ...res }].filter(r => r.status === 'red').length;
      sessionStorage.setItem('fisheyResult', JSON.stringify({
        score: redCount,
        summary: redCount >= 3 ? "Multiple scam signatures. Do not send money." : 
                 redCount >= 1 ? "Suspicious elements found. Be very careful." : "Looks relatively clean."
      }));
    }
  };

  const redCount = results.filter(r => r.status === 'red').length;

  if (isFinished) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-8">
          <div className={`inline-block p-6 rounded-full mb-4 ${
            redCount >= 3 ? 'bg-red-100 text-[#C0392B]' : 
            redCount >= 1 ? 'bg-yellow-100 text-[#B8860B]' : 'bg-green-100 text-[#1A7A4A]'
          }`}>
            <span className="text-5xl font-bold">{redCount >= 3 ? '❌' : redCount >= 1 ? '⚠️' : '✅'}</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B3A6B]">Scanner Result</h2>
          <p className="text-gray-600 mt-2">
            {redCount >= 3 ? "Multiple scam signatures. Do not send money." : 
             redCount >= 1 ? "Suspicious elements found. Be very careful." : "This doesn't match common scam patterns."}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {results.map((res, i) => (
            <div key={i} className={`p-4 rounded-lg border-l-4 ${
              res.status === 'red' ? 'bg-red-50 border-[#C0392B]' :
              res.status === 'yellow' ? 'bg-yellow-50 border-[#B8860B]' : 'bg-green-50 border-[#1A7A4A]'
            }`}>
              <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">{res.key}</p>
              <p className="text-sm font-medium">{res.message}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
          >
            Scan Another
          </button>
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Fishey Scanner Result',
                  text: `I just scanned an investment. Result: ${redCount} red flags. Check yours on No-Nonsense Investment Tool!`,
                  url: window.location.href
                });
              }
            }}
            className="flex-1 py-3 bg-[#1B3A6B] text-white font-bold rounded-xl hover:bg-opacity-90 transition-colors"
          >
            Share Result
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 max-w-xl mx-auto">
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4, 5].map(s => (
          <div 
            key={s} 
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
              step === s ? 'bg-[#E8541A] text-white' : 
              step > s ? 'bg-[#1A7A4A] text-white' : 'bg-gray-200 text-gray-400'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Who is asking for money?</h3>
          <p className="text-gray-500 text-sm mb-6">Enter the company name or the person's name.</p>
          <input 
            type="text" 
            placeholder="e.g. Sahara, Rose Valley..."
            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-[#1B3A6B] outline-none transition-colors mb-6"
            onKeyDown={(e) => e.key === 'Enter' && handleNext('name', e.target.value, checkScamName)}
          />
          <button 
            onClick={(e) => handleNext('name', e.currentTarget.previousSibling.value, checkScamName)}
            className="w-full py-4 bg-[#1B3A6B] text-white font-bold rounded-xl"
          >
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">How much profit did they promise?</h3>
          <p className="text-gray-500 text-sm mb-6">Enter the yearly percentage (%).</p>
          <input 
            type="number" 
            placeholder="e.g. 15"
            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-[#1B3A6B] outline-none transition-colors mb-6"
            onKeyDown={(e) => e.key === 'Enter' && handleNext('returns', e.target.value, checkReturns)}
          />
          <button 
            onClick={(e) => handleNext('returns', e.currentTarget.previousSibling.value, checkReturns)}
            className="w-full py-4 bg-[#1B3A6B] text-white font-bold rounded-xl"
          >
            Next Step
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Can you withdraw in 30 days?</h3>
          <p className="text-gray-500 text-sm mb-6">If you need the cash back fast, will they give it?</p>
          <div className="grid gap-3 mb-6">
            {['yes', 'no', 'don\'t know'].map(opt => (
              <button 
                key={opt}
                onClick={() => handleNext('withdrawal', opt, checkWithdrawal)}
                className="w-full p-4 text-left border-2 border-gray-100 rounded-xl hover:border-[#1B3A6B] font-medium capitalize"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Were you pressured with a deadline?</h3>
          <p className="text-gray-500 text-sm mb-6">"Only for today", "Last few slots left", etc.</p>
          <div className="grid gap-3 mb-6">
            {['yes', 'no'].map(opt => (
              <button 
                key={opt}
                onClick={() => handleNext('pressure', opt, checkPressure)}
                className="w-full p-4 text-left border-2 border-gray-100 rounded-xl hover:border-[#1B3A6B] font-medium capitalize"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">What is their UPI ID?</h3>
          <p className="text-gray-500 text-sm mb-6">Check the ID you are sending money to.</p>
          <input 
            type="text" 
            placeholder="e.g. name@oksbi"
            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-[#1B3A6B] outline-none transition-colors mb-6"
            onKeyDown={(e) => e.key === 'Enter' && handleNext('upi', e.target.value, checkUPI)}
          />
          <button 
            onClick={(e) => handleNext('upi', e.currentTarget.previousSibling.value, checkUPI)}
            className="w-full py-4 bg-[#1B3A6B] text-white font-bold rounded-xl"
          >
            Finish Scan
          </button>
        </div>
      )}
    </div>
  );
};

export default FisheyScanner;
