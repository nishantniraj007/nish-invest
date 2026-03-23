import React from 'react';
import AllocationGuide from '../components/AllocationGuide';

const AllocationPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F7] pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B3A6B] mb-4">Allocation Guide</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Not sure how to split your money? Answer 3 simple questions to get a plain-English plan for your money buckets.
          </p>
        </div>
        
        <AllocationGuide />
        
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <h4 className="font-bold text-[#1B3A6B] text-sm">Safety First</h4>
            <p className="text-[10px] text-gray-500">We prioritize protecting what you have.</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📈</div>
            <h4 className="font-bold text-[#1B3A6B] text-sm">Smart Growth</h4>
            <p className="text-[10px] text-gray-500">Only risk what you can afford to wait for.</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🧘</div>
            <h4 className="font-bold text-[#1B3A6B] text-sm">Peace of Mind</h4>
            <p className="text-[10px] text-gray-500">A plan that lets you sleep at night.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationPage;
