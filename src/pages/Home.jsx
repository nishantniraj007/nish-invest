import React, { useState } from 'react';
import { investments } from '../data/investments';
import InvestmentCard from '../components/InvestmentCard';
import TrustWarningModal from '../components/TrustWarningModal';

const Home = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [verdictFilter, setVerdictFilter] = useState('All');

  const filteredInvestments = investments.filter(inv => {
    const categoryMatch = categoryFilter === 'All' || inv.category.toLowerCase() === categoryFilter.toLowerCase();
    const verdictMatch = verdictFilter === 'All' || inv.verdict === verdictFilter;
    return categoryMatch && verdictMatch;
  });

  return (
    <div className="min-h-screen bg-[#F2F4F7] pb-20">
      <TrustWarningModal />
      
      {/* Hero */}
      <header className="bg-[#1B3A6B] text-white pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">No-Nonsense Investment Tool</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
            Plain-English guides to help you understand where your money goes. No jargon. No hidden traps.
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-50 bg-[#F2F4F7]/80 backdrop-blur-md border-b border-black/5 py-4 px-6 mb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Category</label>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {['All', 'Domestic', 'Foreign'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                    categoryFilter === cat ? 'bg-[#1B3A6B] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Verdict</label>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {['All', 'GO FOR IT', 'WAIT & WATCH', 'STAY AWAY'].map(v => (
                <button
                  key={v}
                  onClick={() => setVerdictFilter(v)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                    verdictFilter === v ? 'bg-[#1B3A6B] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvestments.map(inv => (
            <InvestmentCard key={inv.id} investment={inv} />
          ))}
        </div>
        
        {filteredInvestments.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 italic">No investments match your filters.</p>
            <button 
              onClick={() => { setCategoryFilter('All'); setVerdictFilter('All'); }}
              className="mt-4 text-[#1B3A6B] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
