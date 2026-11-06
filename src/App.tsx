/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, MainTabType } from './components/Header';
import { RulesExplanationSection } from './components/RulesExplanationSection';
import { PracticeQuiz } from './components/PracticeQuiz';
import { AppliedWritingSection } from './components/AppliedWritingSection';
import { PrintCheatSheet } from './components/PrintCheatSheet';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTabType>('rules');
  const [quizSelectedRuleId, setQuizSelectedRuleId] = useState<number | 'all'>('all');

  const handlePrint = () => {
    window.print();
  };

  const handleStartQuizFromRule = (ruleId: number) => {
    setQuizSelectedRuleId(ruleId);
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 flex flex-col font-arabic text-slate-800 text-right">
      {/* Printable Sheet View for paper export */}
      <PrintCheatSheet />

      {/* Main Screen App Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 no-print">
        {activeTab === 'rules' && (
          <RulesExplanationSection onStartQuizWithRule={handleStartQuizFromRule} />
        )}
        {activeTab === 'quiz' && (
          <PracticeQuiz
            key={String(quizSelectedRuleId)}
            initialRuleId={quizSelectedRuleId}
            onNavigateToRules={() => setActiveTab('rules')}
          />
        )}
        {activeTab === 'applied' && <AppliedWritingSection />}
      </main>
    </div>
  );
}
