import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import InvestmentDetail from './pages/InvestmentDetail';
import FisheyPage from './pages/FisheyPage';
import AllocationPage from './pages/AllocationPage';
import ReportPage from './pages/ReportPage';
import { Shield, Fish, PieChart, FileText, Home as HomeIcon } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon size={20} /> },
    { path: '/fishey', label: 'Fishey', icon: <Fish size={20} /> },
    { path: '/allocate', label: 'Allocate', icon: <PieChart size={20} /> },
    { path: '/report', label: 'Report', icon: <FileText size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 z-50 md:top-0 md:bottom-auto md:h-16 md:border-b md:border-t-0">
      <div className="max-w-6xl mx-auto h-full flex justify-around md:justify-end items-center px-6 md:gap-8">
        <div className="hidden md:flex items-center gap-2 mr-auto text-[#1B3A6B] font-bold">
          <Shield className="text-[#E8541A]" />
          <span>No-Nonsense Investment Tool</span>
        </div>
        {navItems.map(item => (
          <Link 
            key={item.path}
            to={item.path}
            className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 px-3 transition-colors ${
              location.pathname === item.path ? 'text-[#E8541A]' : 'text-gray-400 hover:text-[#1B3A6B]'
            }`}
          >
            {item.icon}
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <Router basename="/nish-invest">
      <div className="min-h-screen bg-[#F2F4F7] font-sans text-[#1B3A6B]">
        <Navbar />
        <div className="md:pt-16 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investment/:id" element={<InvestmentDetail />} />
            <Route path="/fishey" element={<FisheyPage />} />
            <Route path="/allocate" element={<AllocationPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
