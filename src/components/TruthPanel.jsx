import React from 'react';
import VerdictBadge from './VerdictBadge';

const TruthPanel = ({ investment }) => {
  const redFlagCount = investment.redFlags.filter(f => f.level === 'red').length;
  const yellowFlagCount = investment.redFlags.filter(f => f.level === 'yellow').length;
  
  const getVerdict = () => {
    if (redFlagCount >= 3) return 'STAY AWAY';
    if (redFlagCount >= 1 || yellowFlagCount >= 2) return 'WAIT & WATCH';
    return investment.verdict;
  };

  const finalVerdict = getVerdict();

  return (
    <div className="space-y-8">
      {/* Business Model */}
      <section id="business-model">
        <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center text-sm">1</span>
          How it actually works
        </h3>
        <div className="grid gap-4">
          {investment.businessModel.map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-black/5 shadow-sm">
              <p className="text-gray-800 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bubble vs Reality */}
      <section id="bubble-vs-reality">
        <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center text-sm">2</span>
          The Sales Pitch vs. The Truth
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h4 className="text-[#C0392B] font-bold uppercase text-xs tracking-widest mb-2">What they tell you</h4>
            <p className="text-gray-700 italic">"{investment.bubbleVsReality.bubble}"</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h4 className="text-[#1A7A4A] font-bold uppercase text-xs tracking-widest mb-2">What actually happens</h4>
            <p className="text-gray-700">{investment.bubbleVsReality.reality}</p>
          </div>
        </div>
      </section>

      {/* Red Flag Scanner */}
      <section id="red-flags">
        <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center text-sm">3</span>
          Danger Zone Check
        </h3>
        {investment.redFlags.length > 0 ? (
          <div className="space-y-2">
            {investment.redFlags.map((flag, i) => (
              <div 
                key={i} 
                className={`p-4 rounded-lg border flex items-start gap-3 ${
                  flag.level === 'red' 
                    ? 'bg-red-50 border-red-200 text-[#C0392B]' 
                    : 'bg-yellow-50 border-yellow-200 text-[#B8860B]'
                }`}
              >
                <span className="text-lg font-bold">{flag.level === 'red' ? '⚠️' : '🔔'}</span>
                <p className="text-sm font-medium">{flag.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-green-50 rounded-xl border border-green-100 text-center">
            <p className="text-[#1A7A4A] font-bold">No major red flags found in the structure.</p>
            <p className="text-xs text-gray-500 mt-1">Always check for individual company news before buying.</p>
          </div>
        )}
      </section>

      {/* Verdict Engine */}
      <section id="verdict-engine" className="bg-[#1B3A6B] p-8 rounded-2xl text-white shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-1">Final Decision</h4>
            <h2 className="text-3xl font-bold mb-2">Our Verdict</h2>
            <p className="text-blue-100 max-w-md">{investment.verdictReason}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className={`text-4xl p-6 rounded-full border-4 ${
              finalVerdict === 'GO FOR IT' ? 'border-[#1A7A4A] bg-[#1A7A4A]/20' :
              finalVerdict === 'STAY AWAY' ? 'border-[#C0392B] bg-[#C0392B]/20' :
              'border-[#B8860B] bg-[#B8860B]/20'
            }`}>
              <VerdictBadge verdict={finalVerdict} />
            </div>
            <p className="text-[10px] uppercase tracking-tighter opacity-50">Based on {investment.redFlags.length} risk factors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruthPanel;
