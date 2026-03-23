import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

const ALPHA_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

const PerformanceGraph = ({ schemeCode, apiSymbol }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('12M');
  const [alertPoint, setAlertPoint] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!schemeCode && !apiSymbol) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        let rawData = [];

        if (schemeCode) {
          const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
          const json = await response.json();
          rawData = json.data.map(item => ({
            date: item.date,
            nav: parseFloat(item.nav),
            timestamp: new Date(item.date.split('-').reverse().join('-')).getTime()
          })).reverse();
        } else if (apiSymbol) {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${apiSymbol}&apikey=${ALPHA_KEY}`
          );
          const json = await response.json();
          const series = json['Monthly Time Series'];
          if (!series) throw new Error('No data');
          rawData = Object.entries(series).map(([date, values]) => ({
            date,
            nav: parseFloat(values['4. close']),
            timestamp: new Date(date).getTime()
          })).reverse();
        }

        setData(rawData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [schemeCode, apiSymbol]);

  const getFilteredData = () => {
    if (data.length === 0) return [];
    const now = data[data.length - 1].timestamp;
    const months = parseInt(timeframe);
    const cutoff = now - (months * 30 * 24 * 60 * 60 * 1000);
    return data.filter(item => item.timestamp >= cutoff);
  };

  const filteredData = getFilteredData();

  const markers = [];
  for (let i = 30; i < filteredData.length; i++) {
    const prev = filteredData[i - 30]?.nav;
    const curr = filteredData[i].nav;
    if (!prev) continue;
    const change = ((curr - prev) / prev) * 100;
    if (Math.abs(change) > 15) {
      if (markers.length === 0 || filteredData[i].timestamp - markers[markers.length - 1].timestamp > 30 * 24 * 60 * 60 * 1000) {
        markers.push({ ...filteredData[i], change: change.toFixed(2) });
      }
    }
  }

  const isUp = filteredData.length > 1 && filteredData[filteredData.length - 1].nav >= filteredData[0].nav;

  if (loading) return (
    <div className="h-64 flex items-center justify-center bg-white rounded-xl border border-black/5 shadow-sm">
      <p className="text-gray-400 italic animate-pulse">Loading live data...</p>
    </div>
  );

  if (error || (!schemeCode && !apiSymbol)) return (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-black/5 text-gray-400 italic">
      No live graph available for this type.
    </div>
  );

  if (data.length === 0) return (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-black/5 text-gray-400 italic">
      No data available right now. Try again later.
    </div>
  );

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

      <div className="h-64 w-full min-h-[256px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="date" hide />
            <YAxis domain={['auto', 'auto']} hide />
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
                onClick={() => setAlertPoint(alertPoint?.date === m.date ? null : m)}
                className="cursor-pointer"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {markers.length > 0 && (
        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#E8541A]">
          <span className="w-2 h-2 rounded-full bg-[#E8541A] inline-block"></span>
          TAP THE ORANGE DOT FOR BIG MOVE DETAILS
        </div>
      )}

      {alertPoint && (
        <div className="mt-4 p-4 bg-[#F2F4F7] rounded-lg border-l-4 border-[#E8541A] flex justify-between items-center animate-in fade-in slide-in-from-top-2">
          <div>
            <p className="text-sm font-bold text-[#1B3A6B]">Big move detected</p>
            <p className="text-xs text-gray-600">{alertPoint.date}: {alertPoint.change}% change in a short time.</p>
          </div>
          <button onClick={() => setAlertPoint(null)} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
      )}
    </div>
  );
};

export default PerformanceGraph;
