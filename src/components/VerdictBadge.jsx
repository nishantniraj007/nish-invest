import React from 'react';

const VerdictBadge = ({ verdict }) => {
  const getColors = () => {
    switch (verdict) {
      case 'GO FOR IT':
        return 'bg-[#1A7A4A] text-white';
      case 'WAIT & WATCH':
      case 'CHECK RED FLAGS':
        return 'bg-[#B8860B] text-white';
      case 'STAY AWAY':
        return 'bg-[#C0392B] text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getColors()}`}>
      {verdict}
    </div>
  );
};

export default VerdictBadge;
