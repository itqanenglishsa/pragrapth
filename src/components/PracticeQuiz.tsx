import React, { useState, useMemo } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ListFilter
} from 'lucide-react';
import { FULL_8_RULES, FULL_80_QUESTIONS, FullQuizQuestion, FullQuizRuleCategory } from '../data/full80QuizData';
import confetti from 'canvas-confetti';

interface PracticeQuizProps {
  initialRuleId?: number | 'all';
  onNavigateToRules?: () => void;
}

export const PracticeQuiz: React.FC<PracticeQuizProps> = ({
  initialRuleId = 'all',
  onNavigateToRules
}) => {
  const [selectedRuleId, setSelectedRuleId] = useState<number | 'all'>(initialRuleId);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showRuleSummary, setShowRuleSummary] = useState<boolean>(true);

  // Active question set
  const questionsList: FullQuizQuestion[] = useMemo(() => {
    if (selectedRuleId === 'all') {
      return FULL_80_QUESTIONS;
    }
    return FULL_80_QUESTIONS.filter(q => q.ruleId === selectedRuleId);
  }, [selectedRuleId]);

  const currentQ: FullQuizQuestion = questionsList[currentIdx] || questionsList[0];
  const isAnswered = currentQ ? selectedAnswers[currentQ.id] !== undefined : false;
  const currentSelection = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const isCorrect = currentQ && currentSelection === currentQ.correctIndex;

  // Active category details
  const activeCategory: FullQuizRuleCategory | undefined = useMemo(() => {
    if (selectedRuleId === 'all') return undefined;
    return FULL_8_RULES.find(c => c.id === selectedRuleId);
  }, [selectedRuleId]);

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: index }));

    if (index === currentQ.correctIndex) {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleNext = () => {
    if (currentIdx < questionsList.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  const handleRuleFilterChange = (id: number | 'all') => {
    setSelectedRuleId(id);
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  const correctCount = questionsList.filter(q => selectedAnswers[q.id] === q.correctIndex).length;
  const answeredCount = questionsList.filter(q => selectedAnswers[q.id] !== undefined).length;
  const scorePercentage = questionsList.length > 0 ? Math.round((correctCount / questionsList.length) * 100) : 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Rules Selector Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <span className="text-xs sm:text-sm font-bold text-slate-800 font-arabic flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-amber-600" />
            اختر القاعدة للتدريب (أو اختر الكل 80 سؤالاً):
          </span>
          <span className="text-xs text-slate-500 font-arabic">
            الأسئلة المعروضة: <strong className="text-amber-700 font-mono text-sm">{questionsList.length}</strong> سؤالاً
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
          <button
            onClick={() => handleRuleFilterChange('all')}
            className={`p-2.5 rounded-xl text-xs font-bold font-arabic transition-all flex items-center justify-between cursor-pointer border ${
              selectedRuleId === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span>🌟</span>
              <span>جميع القواعد (اختبار شامل)</span>
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
              selectedRuleId === 'all' ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-200 text-slate-700'
            }`}>
              80 سؤالاً
            </span>
          </button>

          {FULL_8_RULES.map((rule) => {
            const isSelected = selectedRuleId === rule.id;
            return (
              <button
                key={rule.id}
                onClick={() => handleRuleFilterChange(rule.id)}
                className={`p-2.5 rounded-xl text-xs font-bold font-arabic transition-all flex items-center justify-between cursor-pointer border text-right ${
                  isSelected
                    ? 'bg-[#214ecf] text-white border-[#214ecf] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="truncate pr-1">
                  قاعدة {rule.id}: {rule.titleEn.split(' ')[0]} ({rule.titleAr.split('(')[0].replace(/^\d+\)\s*/, '').trim()})
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono shrink-0 ${
                  isSelected ? 'bg-white text-[#214ecf]' : 'bg-[#84a5f2]/20 text-[#214ecf] border border-[#84a5f2]/40'
                }`}>
                  10 أسئلة
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      {!isCompleted && currentQ ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl mx-auto">
          {/* Header & Status Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 font-arabic">
                السؤال {currentIdx + 1} من {questionsList.length}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#84a5f2]/20 text-[#214ecf] text-[10px] font-bold font-mono">
                {currentQ.ruleTitle}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono font-semibold text-slate-600">
              <span>الإجابات: {answeredCount}/{questionsList.length}</span>
              <span className="text-[#214ecf] bg-[#84a5f2]/10 px-2 py-0.5 rounded-md border border-[#84a5f2]/30">
                الصحيح: {correctCount}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-[#214ecf] h-1.5 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questionsList.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Body */}
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#ea9835] uppercase tracking-wider font-mono">
                السؤال #{currentQ.id}
              </span>
              <h3 dir="ltr" className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-english text-left">
                {currentQ.question}
              </h3>
              <p dir="rtl" className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed bg-[#84a5f2]/5 p-2.5 rounded-lg border border-[#84a5f2]/20">
                {currentQ.questionAr}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((optionText, optIdx) => {
                let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';
                if (isAnswered) {
                  if (optIdx === currentQ.correctIndex) {
                    btnStyle = 'bg-[#84a5f2]/15 text-[#214ecf] border-[#214ecf] ring-2 ring-[#84a5f2] font-bold';
                  } else if (currentSelection === optIdx) {
                    btnStyle = 'bg-[#fcded6] text-[#e06045] border-[#e06045] ring-2 ring-[#e06045]/40 font-bold';
                  } else {
                    btnStyle = 'opacity-40 bg-slate-50 text-slate-500 border-slate-200';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    dir="ltr"
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer font-english ${btnStyle}`}
                  >
                    <span className="pr-2 font-medium">{optionText}</span>
                    {isAnswered && optIdx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-[#214ecf] shrink-0 ml-2" />
                    )}
                    {isAnswered && currentSelection === optIdx && optIdx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-[#e06045] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation Card */}
            {isAnswered && (
              <div
                className={`p-4 rounded-xl border text-xs space-y-2.5 animate-fadeIn ${
                  isCorrect ? 'bg-[#84a5f2]/15 border-[#214ecf]/30' : 'bg-[#fcded6]/80 border-[#e06045]/30'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 text-sm">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#214ecf]" />
                      <span className="text-[#214ecf] font-arabic">إجابة صحيحة وممتازة! 🎉</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#e06045]" />
                      <span className="text-[#e06045] font-arabic">إجابة غير صحيحة، راجع الشرح والقاعدة:</span>
                    </>
                  )}
                </div>
                <div className="text-slate-800 font-serif leading-relaxed">
                  <strong>English Explanation:</strong> {currentQ.explanationEn}
                </div>
                <div className="text-slate-700 font-arabic leading-relaxed pt-1.5 border-t border-slate-200/60">
                  <strong>الشرح بالعربي:</strong> {currentQ.explanationAr}
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-arabic">
              {isAnswered ? 'انقر على التالي للمتابعة' : 'اختر الإجابة لتصحيح فوري وشرح تفصيلي'}
            </span>
            {isAnswered && (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold font-arabic flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <span>{currentIdx < questionsList.length - 1 ? 'السؤال التالي' : 'عرض النتيجة النهائية'}</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            )}
          </div>
        </div>
      ) : isCompleted ? (
        /* Results View */
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto ring-8 ring-amber-50">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 font-arabic uppercase tracking-wider">
              نتيجة الكويز التجريبي
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-arabic mt-1">
              أحسنت! أكملت بنك الأسئلة
            </h3>
            <div className="text-4xl font-black font-mono text-amber-600 my-3">
              {scorePercentage}%
            </div>
            <p className="text-sm text-slate-600 font-arabic">
              أجبت على <strong className="text-slate-900">{correctCount}</strong> من أصل{' '}
              <strong className="text-slate-900">{questionsList.length}</strong> أسئلة بشكل صحيح.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 font-arabic space-y-1">
            {scorePercentage >= 85 ? (
              <p className="text-emerald-800 font-bold">
                🌟 مستوى متميز واستثنائي! أنت مستعد تماماً لاجتياز كويز الكتابة بدرجة كاملة.
              </p>
            ) : scorePercentage >= 65 ? (
              <p className="text-amber-800 font-bold">
                👍 مستوى ممتاز! راجع الأسئلة التي تعثرت بها وأعد الاختبار لضمان الدرجة الكاملة.
              </p>
            ) : (
              <p className="text-rose-800 font-bold">
                ⚠️ يفضل قراءة ملخصات القواعد في الأعلى ثم إعادة المحاولة لرفع المستوى.
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-arabic shadow-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار الحالي</span>
            </button>
            {onNavigateToRules && (
              <button
                onClick={onNavigateToRules}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold font-arabic shadow-sm cursor-pointer transition-all"
              >
                <span>مراجعة شرح القواعد</span>
              </button>
            )}
            <button
              onClick={() => handleRuleFilterChange('all')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-arabic shadow-sm cursor-pointer transition-all"
            >
              <span>خوض الاختبار الشامل (80 سؤالاً)</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
