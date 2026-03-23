import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { investments } from '../data/investments';
import PerformanceGraph from '../components/PerformanceGraph';
import TruthPanel from '../components/TruthPanel';
import { ChevronLeft } from 'lucide-react';

const InvestmentDetail = () => {
  const { id } = useParams();
  const investment = investments.find(inv => inv.id === id);

  useEffect(() => {
    if (investment) {
      const visited = JSON.parse(sessionStorage.getItem('visitedInvestments') || '[]');
      if (!visited.includes(investment.id)) {
        sessionStorage.setItem('visitedInvestments', JSON.stringify([...visited, investment.id]));
      }
    }
    window.scrollTo(0, 0);
  }, [investment]);

  if (!investment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1B3A6B]">Investment not found</h2>
          <Link to="/" className="text-[#E8541A] font-bold mt-4 inline-block">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F4F7] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-black/5 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#1B3A6B] font-bold hover:text-[#E8541A] transition-colors">
            <ChevronLeft size={20} />
            <span>Back</span>
          </Link>
          <div className="text-center">
            <h1 className="font-bold text-[#1B3A6B]">{investment.name}</h1>
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-8 space-y-8">
        {/* Intro Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <p className="text-[#B8860B] font-medium italic mb-1">"{investment.humanName}"</p>
              <h2 className="text-3xl font-bold text-[#1B3A6B]">{investment.name}</h2>
            </div>
            <div className="flex gap-2">
              <span className="bg-[#F2F4F7] text-[#1B3A6B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Regulated by: {investment.regulator}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{investment.hook}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Min Investment</p>
            <p className="font-bold text-[#1B3A6B]">{investment.minInvestment}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Lock-in Period</p>
            <p className="font-bold text-[#1B3A6B]">{investment.lockIn}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tax Rule</p>
            <p className="font-bold text-[#1B3A6B] text-xs leading-tight">{investment.tax}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Category</p>
            <p className="font-bold text-[#1B3A6B] capitalize">{investment.category}</p>
          </div>
        </div>

        {/* Graph */}
        <PerformanceGraph schemeCode={investment.mfSchemeCode} />

        {/* Truth Panel */}
        <TruthPanel investment={investment} />

        {/* Guides */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="text-lg font-bold text-[#1B3A6B] mb-4">How to start</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{investment.entryGuide}</p>
          </section>
          <section className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="text-lg font-bold text-[#1B3A6B] mb-4">How to exit</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{investment.exitGuide}</p>
          </section>
        </div>

        {/* Suited For */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-[#1A7A4A] font-bold mb-4 uppercase text-xs tracking-widest">Suited For</h3>
            <ul className="space-y-2">
              {investment.suitedFor.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-[#1A7A4A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-[#C0392B] font-bold mb-4 uppercase text-xs tracking-widest">Not Suited For</h3>
            <ul className="space-y-2">
              {investment.notSuitedFor.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-[#C0392B]">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentDetail;
