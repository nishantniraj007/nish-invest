import React, { useEffect, useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { investments } from '../data/investments';

const SessionReport = () => {
  const [reportData, setReportData] = useState({
    visited: [],
    fishey: null,
    allocation: null
  });
  const reportRef = useRef(null);

  useEffect(() => {
    const visitedIds = JSON.parse(sessionStorage.getItem('visitedInvestments') || '[]');
    const fishey = JSON.parse(sessionStorage.getItem('fisheyResult') || 'null');
    const allocation = JSON.parse(sessionStorage.getItem('allocationResult') || 'null');
    
    const visitedData = visitedIds.map(id => investments.find(inv => inv.id === id)).filter(Boolean);
    
    setReportData({
      visited: visitedData,
      fishey,
      allocation
    });
  }, []);

  const downloadPDF = async () => {
    const element = reportRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('MyInvestmentReport.pdf');
  };

  const shareReport = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Investment Report',
        text: 'Check out my investment plan from the No-Nonsense Investment Tool!',
        url: window.location.href
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div ref={reportRef} className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 mb-8">
        <div className="border-b-2 border-[#1B3A6B] pb-6 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-[#1B3A6B]">My Investment Report</h1>
            <p className="text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#E8541A] tracking-widest uppercase">No-Nonsense Tool</p>
          </div>
        </div>

        <div className="space-y-10">
          {/* Visited Investments */}
          <section>
            <h2 className="text-xl font-bold text-[#1B3A6B] mb-4">Investments You Checked</h2>
            {reportData.visited.length > 0 ? (
              <div className="grid gap-4">
                {reportData.visited.map(inv => (
                  <div key={inv.id} className="p-4 bg-[#F2F4F7] rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#1B3A6B]">{inv.name}</p>
                      <p className="text-xs text-gray-500 italic">"{inv.humanName}"</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                      inv.verdict === 'GO FOR IT' ? 'bg-[#1A7A4A] text-white' :
                      inv.verdict === 'STAY AWAY' ? 'bg-[#C0392B] text-white' : 'bg-[#B8860B] text-white'
                    }`}>
                      {inv.verdict}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No investments checked yet.</p>
            )}
          </section>

          {/* Fishey Result */}
          {reportData.fishey && (
            <section>
              <h2 className="text-xl font-bold text-[#1B3A6B] mb-4">Fishey Scanner Result</h2>
              <div className={`p-6 rounded-xl border-2 ${
                reportData.fishey.score >= 3 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
              }`}>
                <p className="font-bold text-lg mb-1">{reportData.fishey.score} Red Flags Found</p>
                <p className="text-gray-700">{reportData.fishey.summary}</p>
              </div>
            </section>
          )}

          {/* Allocation Result */}
          {reportData.allocation && (
            <section>
              <h2 className="text-xl font-bold text-[#1B3A6B] mb-4">Your Allocation Guide</h2>
              <div className="space-y-3">
                {reportData.allocation.allocation.map((item, i) => (
                  <div key={i} className="p-4 border border-gray-100 rounded-lg flex justify-between">
                    <span className="font-medium">{item.bucket}</span>
                    <span className="font-bold text-[#1B3A6B]">Rs {item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* The Three Mantras */}
          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">The Three Mantras</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm font-medium text-[#1B3A6B]">"No one who loves you will pressure you to invest fast."</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-[#1B3A6B]">"No legal investment in India guarantees more than 12%."</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-[#1B3A6B]">"If you are unsure, wait. The right investment will still be there tomorrow."</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex gap-4 mb-20">
        <button 
          onClick={downloadPDF}
          className="flex-1 py-4 bg-[#1B3A6B] text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg"
        >
          Download PDF Report
        </button>
        <button 
          onClick={shareReport}
          className="flex-1 py-4 bg-[#E8541A] text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg"
        >
          Share Report
        </button>
      </div>
    </div>
  );
};

export default SessionReport;
