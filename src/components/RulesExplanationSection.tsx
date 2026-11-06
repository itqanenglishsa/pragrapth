import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react';
import { EXACT_11_RULES, ExactUnitRule } from '../data/exactRulesData';

interface RulesExplanationSectionProps {
  onStartQuizWithRule?: (ruleId: number) => void;
}

export const RulesExplanationSection: React.FC<RulesExplanationSectionProps> = ({
  onStartQuizWithRule
}) => {
  const [expandedRule, setExpandedRule] = useState<number | null>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleRule = (id: number) => {
    setExpandedRule(prev => (prev === id ? null : id));
  };

  const copyRuleSummary = (rule: ExactUnitRule) => {
    const text = `## ${rule.numberPrefix}. ${rule.titleEn} (${rule.titleAr})\n\n[خانة الشرح]:\n${rule.explanationText}\n${rule.explanationPoints.map(p => `• ${p}`).join('\n')}\n\n[خانة الأمثلة]:\n${rule.examplesList.map(e => `• ${e.label}: ${e.english} (${e.arabic || ''})`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(rule.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 11 Rules Quick Navigation Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
          <span className="text-xs sm:text-sm font-bold text-slate-800 font-arabic flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#214ecf]" />
            اختر القاعدة لعرض (خانة الشرح + خانة الأمثلة):
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {EXACT_11_RULES.length} قواعد مقررة
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {EXACT_11_RULES.map((rule) => {
            const isCurrent = expandedRule === rule.id;
            return (
              <button
                key={rule.id}
                onClick={() => setExpandedRule(rule.id)}
                className={`p-2.5 rounded-xl border text-right transition-all cursor-pointer flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-[#214ecf] text-white border-[#214ecf] shadow-md ring-2 ring-[#84a5f2]/40'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className={`w-5 h-5 rounded-md text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                  isCurrent ? 'bg-white text-[#214ecf]' : 'bg-slate-200 text-slate-700'
                }`}>
                  {rule.numberPrefix}
                </span>
                <span className="text-xs font-bold font-arabic truncate">
                  {rule.titleAr}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules Detailed List: Two distinct boxes per rule (خانة الشرح + خانة الأمثلة) with Brand Palette */}
      <div className="space-y-5">
        {EXACT_11_RULES.map((rule) => {
          const isExpanded = expandedRule === rule.id;

          return (
            <div
              key={rule.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'border-[#214ecf] shadow-md ring-1 ring-[#84a5f2]/30'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Rule Card Header */}
              <button
                onClick={() => toggleRule(rule.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-right cursor-pointer bg-slate-50/70 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm font-mono shadow-xs ${
                    isExpanded ? 'bg-[#214ecf] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {rule.numberPrefix}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-arabic text-sm sm:text-base">
                      {rule.numberPrefix}. {rule.titleEn} ({rule.titleAr})
                    </h3>
                    {rule.summaryTag && (
                      <p className="text-xs text-[#214ecf] font-arabic mt-0.5 font-medium">
                        {rule.summaryTag}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fcded6] text-[#e06045] font-mono">
                    {rule.badge}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Two Boxes Content */}
              {isExpanded && (
                <div className="p-5 sm:p-6 space-y-6 border-t border-slate-100 animate-fadeIn text-right">
                  {/* Grid of Two Columns: خانة الشرح (Explanation) & خانة الأمثلة (Examples) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* ======================= الخانة الأولى: خانة الشرح ======================= */}
                    <div className="bg-[#84a5f2]/10 rounded-2xl p-5 border border-[#84a5f2]/30 space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#84a5f2]/30">
                        <span className="w-7 h-7 rounded-lg bg-[#214ecf] text-white flex items-center justify-center">
                          <FileText className="w-4 h-4" />
                        </span>
                        <div>
                          <h4 className="font-bold text-sm text-[#214ecf] font-arabic">
                            الخانة الأولى: خانة الشرح والقواعد
                          </h4>
                          <span className="text-[11px] text-slate-500 font-mono">
                            Explanation & Rules
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-900 font-arabic leading-relaxed font-semibold">
                        {rule.explanationText}
                      </p>

                      <ul className="space-y-2.5 pt-1">
                        {rule.explanationPoints.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="bg-white p-3 rounded-xl border border-[#84a5f2]/20 text-xs text-slate-700 font-arabic leading-relaxed flex items-start gap-2 shadow-2xs"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#214ecf] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 font-mono">
                              {pIdx + 1}
                            </span>
                            <span className="font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ======================= الخانة الثانية: خانة الأمثلة ======================= */}
                    <div className="bg-[#ea9835]/10 rounded-2xl p-5 border border-[#ea9835]/30 space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#ea9835]/30">
                        <span className="w-7 h-7 rounded-lg bg-[#ea9835] text-white flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </span>
                        <div>
                          <h4 className="font-bold text-sm text-amber-950 font-arabic">
                            الخانة الثانية: خانة الأمثلة التطبيقية
                          </h4>
                          <span className="text-[11px] text-amber-800 font-mono">
                            Practical Examples
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {rule.examplesList.map((example, eIdx) => {
                          const isIncorrect = example.type === 'incorrect';
                          return (
                            <div
                              key={eIdx}
                              className={`p-3.5 rounded-xl border space-y-1.5 transition-all shadow-2xs ${
                                isIncorrect
                                  ? 'bg-[#fcded6]/80 border-[#e06045]/40'
                                  : 'bg-white border-[#ea9835]/20'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-[11px] font-bold font-arabic flex items-center gap-1 ${
                                  isIncorrect ? 'text-[#e06045]' : 'text-slate-800'
                                }`}>
                                  {isIncorrect ? (
                                    <AlertTriangle className="w-3.5 h-3.5 text-[#e06045]" />
                                  ) : (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#214ecf]" />
                                  )}
                                  {example.label}
                                </span>
                              </div>

                              {/* English Example Text with LTR direction */}
                              <div
                                dir="ltr"
                                className={`text-xs sm:text-sm font-english font-bold text-left pl-1 ${
                                  isIncorrect ? 'text-[#e06045]' : 'text-slate-900'
                                }`}
                              >
                                {example.english}
                              </div>

                              {/* Arabic clarification */}
                              {example.arabic && (
                                <p className="text-[11px] text-slate-600 font-arabic leading-relaxed pt-1 border-t border-slate-100">
                                  {example.arabic}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => copyRuleSummary(rule)}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-all cursor-pointer font-arabic"
                    >
                      {copiedId === rule.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#214ecf]" />
                          <span className="text-[#214ecf]">تم نسخ الشرح والأمثلة</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>نسخ محتوى القاعدة</span>
                        </>
                      )}
                    </button>

                    {onStartQuizWithRule && (
                      <button
                        onClick={() => onStartQuizWithRule(rule.id > 8 ? 8 : rule.id)}
                        className="px-4 py-2 rounded-xl bg-[#214ecf] hover:bg-[#1a3fa8] text-white text-xs font-bold font-arabic flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                      >
                        <span>اختبر نفسك في الكويز (10 أسئلة)</span>
                        <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
