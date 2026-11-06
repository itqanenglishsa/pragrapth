import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  FileText,
  HelpCircle,
  Award,
  Layers,
  CheckCircle2,
  ListOrdered,
  PenTool,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import { NarrativeSection } from './NarrativeSection';
import { ModelParagraphsSection } from './ModelParagraphsSection';
import { ParagraphTypesSection } from './ParagraphTypesSection';
import { WritingStepsSection } from './WritingStepsSection';
import { InteractiveBuilder } from './InteractiveBuilder';
import { GrammarMechanicsSection } from './GrammarMechanicsSection';

export const AppliedWritingSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'narrative' | 'models' | 'features' | 'steps' | 'builder' | 'grammar'>('narrative');

  const subSections = [
    {
      id: 'narrative' as const,
      labelAr: '📖 البارقراف السردي وسرد الأحداث (Narrative)',
      badge: 'مهم للكويز',
      desc: 'طريقة كتابة قصة من البداية للنهاية مع أفعال الماضي البسيط'
    },
    {
      id: 'models' as const,
      labelAr: '🌟 نماذج بارقراف جاهزة من الكتاب',
      badge: 'نماذج محلولة',
      desc: 'فقرات كاملة من المنهج مترجمة ومشروحة جملة بجملة'
    },
    {
      id: 'features' as const,
      labelAr: '📑 شروط تنسيق البارقراف الأربعة',
      badge: 'شروط التنسيق',
      desc: 'مسافة البداية، والمسافة بين السطور، وفكرة واحدة، وخاتمة'
    },
    {
      id: 'steps' as const,
      labelAr: '✍️ خطوات كتابة البارقراف بالتفصيل',
      badge: 'خطوات مرتبة',
      desc: 'جمع الأفكار، وترتيب المخطط، وكتابة المسودة، ومراجعة الأخطاء'
    },
    {
      id: 'builder' as const,
      labelAr: '🛠️ مساعد كتابة البارقراف خطوة بخطوة',
      badge: 'تدريب تفاعلي',
      desc: 'اكتب فقرتك بنفسك وافحص شروطها واطبعها جاهزة'
    },
    {
      id: 'grammar' as const,
      labelAr: '⚖️ ملخص القواعد وعلامات الترقيم',
      badge: 'مراجعة سريعة',
      desc: 'الحروف الكبيرة، والفواصل، وكلمات الربط، وأخطاء الجمل الشائعة'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Sub-Navigation Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs">
        <div className="flex flex-wrap gap-2">
          {subSections.map((sec) => {
            const isActive = subTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSubTab(sec.id)}
                className={`flex-1 min-w-[200px] p-3 rounded-xl border text-right transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#fcded6]/60 border-[#e06045] text-[#e06045] shadow-sm ring-1 ring-[#e06045]/40'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#e06045] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {sec.badge}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm font-arabic">{sec.labelAr}</div>
                <div className="text-[11px] text-slate-500 font-arabic mt-1 line-clamp-1">{sec.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Sub-Component */}
      <div className="transition-all">
        {subTab === 'narrative' && <NarrativeSection />}
        {subTab === 'models' && <ModelParagraphsSection />}
        {subTab === 'features' && <ParagraphTypesSection />}
        {subTab === 'steps' && <WritingStepsSection />}
        {subTab === 'builder' && <InteractiveBuilder />}
        {subTab === 'grammar' && <GrammarMechanicsSection />}
      </div>
    </div>
  );
};
