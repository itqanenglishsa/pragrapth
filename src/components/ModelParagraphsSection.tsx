import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, Filter, Info, Eye } from 'lucide-react';
import { MODEL_PARAGRAPHS, ModelParagraph } from '../data/quizData';

export const ModelParagraphsSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelParagraph>(MODEL_PARAGRAPHS[0]);
  const [highlightMode, setHighlightMode] = useState<'all' | 'topic' | 'supporting' | 'concluding'>('all');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedModel.title + '\n\n' + selectedModel.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-arabic mb-2">
          <BookOpen className="w-4 h-4" />
          <span>فقرات نموذجية مأخوذة من كتاب Great Writing 2</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-arabic text-slate-900 mb-2">
          نماذج فقرات تطبيقية كاملة ومحللة (Analyzed Model Paragraphs)
        </h2>
        <p className="text-sm text-slate-600 font-arabic leading-relaxed max-w-4xl">
          أفضل طريقة لحفظ وتطبيق القواعد هي دراسة نماذج حقيقية مطابقة لما يطلبه الأساتذة. هذه النماذج مأخوذة حرفياً من وحدات المقرر (GW2 Units 3 & 4) مع تحليل تفصيلي لكل جملة ونوعها.
        </p>
      </div>

      {/* Model Paragraph Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {MODEL_PARAGRAPHS.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setSelectedModel(m);
              setHighlightMode('all');
            }}
            className={`p-4 rounded-xl text-right transition-all border cursor-pointer ${
              selectedModel.id === m.id
                ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-1 ring-emerald-400'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 font-mono">{m.type}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-medium">
                {m.topic}
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-base">{m.title}</h4>
            <p className="text-xs text-slate-600 font-arabic mt-1 line-clamp-2">
              {m.analysisArabic}
            </p>
          </button>
        ))}
      </div>

      {/* Main Analysis Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Card Header & Controls */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">{selectedModel.title}</h3>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                {selectedModel.type}
              </span>
            </div>
            <div className="text-xs text-slate-500 font-arabic mt-0.5">
              الموضوع: {selectedModel.topic}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Highlight Filter */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 text-xs">
              <span className="text-slate-400 px-2 font-arabic text-[11px] hidden sm:inline">تلوين:</span>
              <button
                onClick={() => setHighlightMode('all')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  highlightMode === 'all' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setHighlightMode('topic')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  highlightMode === 'topic' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                المقدمة
              </button>
              <button
                onClick={() => setHighlightMode('supporting')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  highlightMode === 'supporting' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                الجمل الداعمة
              </button>
              <button
                onClick={() => setHighlightMode('concluding')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  highlightMode === 'concluding' ? 'bg-amber-600 text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                الخاتمة
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="font-arabic">{copied ? 'تم النسخ' : 'نسخ النص'}</span>
            </button>
          </div>
        </div>

        {/* The Visual Paragraph Paper */}
        <div className="p-6 sm:p-8 bg-amber-50/20">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-amber-200/60 font-serif leading-loose text-slate-800 text-base">
            {/* Title */}
            <div className="text-center font-bold text-lg sm:text-xl text-slate-900 mb-4 pb-2 border-b border-slate-100 font-sans">
              {selectedModel.title}
            </div>

            {/* Paragraph body with highlighting logic */}
            <div className="text-justify">
              <span className="inline-block w-8 sm:w-10 text-slate-400 font-mono text-xs select-none">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>

              {/* Topic Sentence */}
              <span
                className={`rounded-xs transition-colors px-0.5 ${
                  highlightMode === 'all' || highlightMode === 'topic'
                    ? 'bg-emerald-100 font-medium text-emerald-950 border-b-2 border-emerald-500'
                    : 'text-slate-700'
                }`}
              >
                {selectedModel.topicSentence}
              </span>{' '}

              {/* Supporting sentences rendered together */}
              <span
                className={`rounded-xs transition-colors px-0.5 ${
                  highlightMode === 'all' || highlightMode === 'supporting'
                    ? 'bg-blue-50/80 text-blue-950'
                    : 'text-slate-700'
                }`}
              >
                {selectedModel.text
                  .replace(selectedModel.topicSentence, '')
                  .replace(selectedModel.concludingSentence, '')
                  .trim()}
              </span>{' '}

              {/* Concluding sentence */}
              <span
                className={`rounded-xs transition-colors px-0.5 ${
                  highlightMode === 'all' || highlightMode === 'concluding'
                    ? 'bg-amber-100 font-medium text-amber-950 border-b-2 border-amber-500'
                    : 'text-slate-700'
                }`}
              >
                {selectedModel.concludingSentence}
              </span>
            </div>
          </div>

          {/* Color Legend */}
          <div className="max-w-3xl mx-auto mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-arabic text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-xs bg-emerald-200 border border-emerald-400"></span>
              <span>الجملة الافتتاحية (Topic Sentence)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-xs bg-blue-100 border border-blue-400"></span>
              <span>الجمل الداعمة (Supporting Sentences)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-xs bg-amber-200 border border-amber-400"></span>
              <span>الجملة الختامية (Concluding Sentence)</span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Accordion / Grid */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
          <h4 className="font-bold text-slate-900 font-arabic text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            التشريح الدقيق لفقرة ({selectedModel.title}):
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-emerald-800 font-arabic block">
                1. تحليل الجملة الافتتاحية والفكرة الحاكمة:
              </span>
              <div className="text-slate-700 font-mono text-[11px] bg-slate-50 p-2 rounded-md">
                {selectedModel.topicSentence}
              </div>
              <p className="text-slate-600 font-arabic">
                <strong>الفكرة الحاكمة (Controlling Idea):</strong> {selectedModel.controllingIdea}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-amber-800 font-arabic block">
                2. تحليل الجملة الختامية ونوعها:
              </span>
              <div className="text-slate-700 font-mono text-[11px] bg-slate-50 p-2 rounded-md">
                {selectedModel.concludingSentence}
              </div>
              <p className="text-slate-600 font-arabic">
                <strong>نوع الخاتمة:</strong> {selectedModel.concludingType.toUpperCase()} (
                {selectedModel.concludingType === 'restate' && 'إعادة صياغة الفكرة بكلمات جديدة'}
                {selectedModel.concludingType === 'suggestion' && 'تقديم نصيحة للقارئ'}
                {selectedModel.concludingType === 'opinion' && 'إبداء الرأي الشخصي'}
                {selectedModel.concludingType === 'prediction' && 'توقع مستقبلي'}
                )
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-blue-800 font-arabic block">
                3. أدوات الربط التتابعية المستخدمة (Transitions):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedModel.transitionsUsed.map((t, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-800 font-mono text-xs px-2 py-0.5 rounded-sm border border-blue-200 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 font-arabic text-[11px]">
                لاحظ أن كل كلمة انتقال جاءت بعدها فاصلة مباشرة.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-800 font-arabic block">
                4. الشرح والتعليق البيداغوجي للطلاب:
              </span>
              <p className="text-slate-600 font-arabic leading-relaxed">
                {selectedModel.analysisArabic}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
