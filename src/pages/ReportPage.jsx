import React from 'react';
import SessionReport from '../components/SessionReport';

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F7] pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B3A6B] mb-4">Your Session Report</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            A summary of everything you've checked today. Download this as a PDF or share it with someone you trust.
          </p>
        </div>
        
        <SessionReport />
      </div>
    </div>
  );
};

export default ReportPage;
