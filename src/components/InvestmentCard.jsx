import React from 'react';
import { Link } from 'react-router-dom';
import VerdictBadge from './VerdictBadge';

const InvestmentCard = ({ investment }) => {
  return (
    <Link 
      to={`/investment/${investment.id}`}
      id={`card-${investment.id}`}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-black/5 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-sans font-bold text-xl text-[#1B3A6B]">{investment.name}</h3>
        {investment.tag && (
          <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
            investment.tag === 'DANGER' ? 'bg-[#C0392B] text-white' : 'bg-[#1B3A6B] text-white'
          }`}>
            {investment.tag}
          </span>
        )}
      </div>
      
      <p className="text-[#B8860B] font-medium italic text-sm mb-2">"{investment.humanName}"</p>
      <p className="text-gray-600 text-sm flex-grow mb-4">{investment.hook}</p>
      
      <div className="mt-auto pt-4 border-t border-gray-100">
        <VerdictBadge verdict={investment.verdict} />
      </div>
    </Link>
  );
};

export default InvestmentCard;
