import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

const PerformanceGraph = ({ schemeCode }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('12M');
  const [alertPoint, setAlertPoint] = useState(null);

  useEffect(() => {
    if (!schemeCode) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
        const json = await response.json();
        
        // Transform data
        const rawData = json.data.map(item => ({
          date: item.date,
          nav: parseFloat(item.nav),
          timestamp: new Date(item.date.split('-').reverse().join('-')).getTime()
        })).reverse();

        setData(rawData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching MF data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [schemeCode]);

  const getFilteredData = () => {
    if (data.length === 0) return [];
    const now = data[data.length - 1].timestamp;
    const months = parseInt(timeframe);
    const cutoff = now - (months * 30 * 24 * 60 * 60 * 1000);
    return data.filter(item => item.timestamp >= cutoff);
  };

  const filteredData = getFilteredData();
  
  // Find "!" markers (MoM change > 15%)
  const markers = [];
  // We'll check change compared to ~30 days ago for each point
  for (let i = 30; i < filteredData.length; i++) {
    const prev = filteredData[i-30].nav;
    const curr = filteredData[i].nav;
    const change = ((curr - prev) / prev) * 100;
    if (Math.abs(change) > 15) {
      // Only add one marker per "event" to avoid clutter
      if (markers.length === 0 || filteredData[i].timestamp - markers[markers.length-1].timestamp > 30 * 24 * 60 * 60 * 1000) {
        markers.push({ ...filteredData[i], change: change.toFixed(2) });
      }
    }
  }

  const isUp = filteredData.length > 1 && filteredData[filteredData.length - 1].nav >= filteredData[0].nav;

  if (loading) return <div className="h-64 flex items-center justify-center bg-white rounded-xl">Loading graph...</div>;
  if (!schemeCode) return <div className="h-64 flex items-center justify-center bg-gray-100 rounded-xl text-gray-400 italic">No live graph for this type.</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1B3A6B]">Performance History</h3>
        <div className="flex gap-2">
          {['3M', '6M', '12M', '24M', '60M'].map(tf => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
                timeframe === tf ? 'bg-[#1B3A6B] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 w-full relative min-h-[256px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              hide 
            />
            <YAxis 
              domain={['auto', 'auto']} 
              hide
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              labelStyle={{ fontWeight: 'bold', color: '#1B3A6B' }}
            />
            <Line 
              type="monotone" 
              dataKey="nav" 
              stroke={isUp ? '#1A7A4A' : '#C0392B'} 
              strokeWidth={3} 
              dot={false}
              animationDuration={1000}
            />
            {markers.map((m, idx) => (
              <ReferenceDot
                key={idx}
                x={m.date}
                y={m.nav}
                r={8}
                fill="#E8541A"
                stroke="white"
                strokeWidth={2}
                onClick={() => setAlertPoint(m)}
                className="cursor-pointer"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        
        {markers.length > 0 && (
          <div className="absolute top-0 right-0 flex items-center gap-1 text-[10px] font-bold text-[#E8541A]">
            <span className="w-2 h-2 rounded-full bg-[#E8541A]"></span>
            BIG MOVES DETECTED
          </div>
        )}
      </div>

      {alertPoint && (
        <div className="mt-4 p-4 bg-[#F2F4F7] rounded-lg border-l-4 border-[#E8541A] flex justify-between items-center animate-in fade-in slide-in-from-top-2">
          <div>
            <p className="text-sm font-bold text-[#1B3A6B]">Big move here — click to understand why</p>
            <p className="text-xs text-gray-600">{alertPoint.date}: {alertPoint.change}% change in a very short time.</p>
          </div>
          <button 
            onClick={() => setAlertPoint(null)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default PerformanceGraph;
