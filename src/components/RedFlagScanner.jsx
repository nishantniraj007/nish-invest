import React from 'react';

const RedFlagScanner = ({ flags }) => {
  if (!flags || flags.length === 0) {
    return (
      <div className="p-8 bg-green-50 rounded-xl border border-green-100 text-center">
        <p className="text-[#1A7A4A] font-bold">No major red flags found in the structure.</p>
        <p className="text-xs text-gray-500 mt-1">Always check for individual company news before buying.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {flags.map((flag, i) => (
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
  );
};

export default RedFlagScanner;
