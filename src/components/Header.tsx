import React from 'react';
import { Printer, Sparkles, BookOpen, PenTool, CheckCircle } from 'lucide-react';

export type MainTabType = 'rules' | 'quiz' | 'applied';

interface HeaderProps {
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onPrint }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs no-print">
      {/* 3 Main Categories Navigation Bar with Itqan English Brand Palette */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 shrink-0">
          <img 
            src="/logo.png" 
            alt="إتقان English Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* 3 Main Categories Navigation */}
        <nav className="flex flex-wrap items-center gap-2 flex-1 justify-center" aria-label="Main Sections">
          {/* Section 1: Rules */}
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all flex items-center justify-center gap-2 cursor-pointer border ${
              activeTab === 'rules'
                ? 'bg-[#214ecf] text-white border-[#214ecf] shadow-md ring-2 ring-[#84a5f2]/40'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span className="text-base">📚</span>
            <span>القواعد</span>
          </button>

          {/* Section 2: The Quiz */}
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all flex items-center justify-center gap-2 cursor-pointer border ${
              activeTab === 'quiz'
                ? 'bg-[#ea9835] text-white border-[#ea9835] shadow-md ring-2 ring-[#ea9835]/30'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span className="text-base">🎯</span>
            <span>الكويز</span>
          </button>

          {/* Section 3: Applied Paragraph Writing */}
          <button
            onClick={() => setActiveTab('applied')}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all flex items-center justify-center gap-2 cursor-pointer border ${
              activeTab === 'applied'
                ? 'bg-[#e06045] text-white border-[#e06045] shadow-md ring-2 ring-[#e06045]/30'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span className="text-base">📝</span>
            <span>أمثلة تطبيقية لكتابة البارقراف</span>
          </button>
        </nav>

        {/* Print Button */}
        <button
          onClick={onPrint}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
          title="طباعة ملخص المراجعة"
        >
          <Printer className="w-4 h-4 text-[#214ecf]" />
          <span className="font-arabic">طباعة</span>
        </button>
      </div>
    </header>
  );
};
