import React from 'react';
import { BookOpen, CheckCircle2, AlertCircle, FileText, Target, Calendar, Sparkles, Layers } from 'lucide-react';
import { COURSE_INFO, QUIZ_UNITS, CHECKLIST_1, CHECKLIST_2 } from '../data/quizData';

export const QuizScopeSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Banner Notice */}
      <div className="bg-linear-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-400 text-slate-900 text-xs font-black uppercase px-2.5 py-0.5 rounded-full">
              تحديد كويز الأحد القادم
            </span>
            <span className="text-emerald-100 text-xs">جامعة أم القرى - معهد اللغة الإنجليزية ELIE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-arabic mb-2">
            تحديد الكويز ومحتوى الاختبار بدقة (Quiz Scope & Guidelines)
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed max-w-3xl font-arabic">
            بناءً على دليل الطالب المعتمد لمقرر <span className="font-bold text-white">ELIE1201</span> والصفحات والأنشطة المحددة بدوائر ونجوم باللون البنفسجي، هذا هو التحديد الحرفي والدقيق لكل ما هو مطلوب منك لكويز الكتابة.
          </p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 font-arabic text-base mb-1">الكتب والمراجع المقررة</h3>
          <p className="text-xs text-slate-600 font-arabic leading-relaxed">
            • <strong className="text-slate-800">Great Writing 2 (5th Ed):</strong> الوحدات 1، 2، 3، 4، 5 (التركيز الأكبر).
            <br />
            • <strong className="text-slate-800">Cambridge Evolve 2:</strong> مهارات القواعد والترقيم المحددة في الوحدات (1.4, 1.5, 2.1, 3.4, 3.5, 4.5, 8.1, 8.5, 12.2).
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
          <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 font-arabic text-base mb-1">نوع المهمة المطلوبة بالكويز</h3>
          <p className="text-xs text-slate-600 font-arabic leading-relaxed">
            كتابة وتحليل <strong className="text-emerald-700">فقرة أكاديمية متكاملة (Academic Paragraph)</strong> تتكون من 5 إلى 10 جمل (Topic Sentence + 3-4 Supporting Sentences + Concluding Sentence) مع عنوان ومسافة بادئة وخلو من الأخطاء.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 font-arabic text-base mb-1">توزيع درجات التقييم (Assessment)</h3>
          <p className="text-xs text-slate-600 font-arabic leading-relaxed">
            • <strong className="text-slate-800">الأسبوع 6:</strong> Topic Sentence + Controlling Idea (درجتان).
            <br />
            • <strong className="text-slate-800">الأسبوع 9:</strong> Complete Outline (3 درجات).
            <br />
            • <strong className="text-slate-800">النهائي (الأسبوع 12):</strong> Full Paragraph Submission (5 درجات).
          </p>
        </div>
      </div>

      {/* Detailed Units Breakdown based on the User's PDF/Images */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-arabic flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              تفريغ الوحدات والأنشطة المحددة بالكتاب (مطابقة تماماً للمستندات المرفقة)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              كل نشاط محدد بالقلم البنفسجي أو النجمة في خطة جامعة أم القرى
            </p>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
            5 وحدات أساسية
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {QUIZ_UNITS.map((u) => (
            <div key={u.unitNumber} className="p-5 hover:bg-slate-50/70 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-slate-800 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
                      Unit {u.unitNumber}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-arabic">{u.title}</h4>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {u.pages}
                    </span>
                  </div>

                  <div className="bg-amber-50 border border-amber-200/70 rounded-lg p-2.5 text-xs text-amber-900">
                    <strong className="font-arabic font-bold text-amber-950">الأنشطة والتدريبات المحددة بالاسم:</strong>{' '}
                    <span className="font-mono">{u.activities}</span>
                  </div>

                  {/* Objectives */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-700 font-arabic">الأهداف التعليمية المطلوبة:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      {u.objectives.map((obj, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full md:w-72 bg-slate-50 p-3 rounded-xl border border-slate-200 shrink-0">
                  <div className="text-xs font-bold text-slate-800 font-arabic mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    أهم القواعد والضوابط بالوحدة:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-arabic">
                    {u.keyRules.map((rule, ri) => (
                      <li key={ri} className="flex items-start gap-1">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Types expected on Sunday */}
      <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-bold font-arabic mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          شكل الأسئلة المتوقعة في كويز الأحد (Quiz Question Formats)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-amber-300 font-bold font-arabic text-sm mb-2">
              <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs">1</span>
              قسم الأسئلة الموضوعية والتطبيقية (Identification & Correction)
            </div>
            <ul className="text-xs text-slate-200 space-y-2 font-arabic">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>تحديد Topic و Controlling Idea:</strong> يعطيك جملة افتتاحية ويطلب وضع دائرة حول الموضوع وخط تحت الفكرة الحاكمة (مثل Activity 3 p.48).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>تصحيح أخطاء Capitalization & Punctuation:</strong> جمل بها أخطاء أحرف كبيرة أو فواصل مفقودة والمطلوب تصحيحها (Activity 10 p.13).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>تصحيح Subject-Verb Agreement:</strong> اختيار الفعل المناسب مثل (is/are، was/were، speaks/speak) ومعرفة الفاعل الحقيقي (Activity 12, 13 p.14-15).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>التمييز بين أنواع الجمل:</strong> تصنيف الجملة إلى (Simple أو Compound أو Complex) (Activity 8 p.53).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>كشف الأخطاء القاتلة:</strong> تحديد إن كانت الجملة Fragment أو Run-on أو Comma Splice وتصحيحها (Activity 9, 10 p.73-74).</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-emerald-300 font-bold font-arabic text-sm mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-xs">2</span>
              قسم إنتاج الكتابة (Writing Task Production)
            </div>
            <ul className="text-xs text-slate-200 space-y-2 font-arabic">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>كتابة جملة افتتاحية (Topic Sentence):</strong> يعطيك موضوعاً عاماً ويطلب كتابة Topic Sentence قوية مع Controlling Idea واضحة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>كتابة مخطط كامل (Outline):</strong> كتابة Topic Sentence ثم 3 نقاط داعمة ثم Concluding Sentence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span><strong>كتابة فقرة متكاملة (Short Paragraph):</strong> كتابة فقرة من 5 إلى 10 جمل حول موضوع مألوف (مكان مفضل، سبب ممارسة الرياضة، تجربة تعليمية، شخص معجب به) مع مراعاة العنوان والمسافة البادئة والـ Unity والروابط.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Official Checklists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checklist 1 */}
        <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-emerald-100 pb-2">
            <h4 className="font-bold text-slate-900 font-arabic text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              {CHECKLIST_1.title}
            </h4>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-sm">
              {CHECKLIST_1.week}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-arabic mb-3">
            المعايير الرسمية التي يحاسبك عليها المصحح عند تقييم الـ Topic Sentence:
          </p>
          <ul className="space-y-2">
            {CHECKLIST_1.items.map((item, idx) => (
              <li key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                <div className="font-semibold text-slate-800">{item.criterion}</div>
                <div className="text-slate-500 font-arabic mt-0.5">{item.ar}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Checklist 2 */}
        <div className="bg-white p-5 rounded-2xl border border-teal-200 shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-teal-100 pb-2">
            <h4 className="font-bold text-slate-900 font-arabic text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600" />
              {CHECKLIST_2.title}
            </h4>
            <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-sm">
              {CHECKLIST_2.week}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-arabic mb-3">
            المعايير الرسمية لتقييم المخطط التفصيلي (Paragraph Outline):
          </p>
          <ul className="space-y-2">
            {CHECKLIST_2.items.map((item, idx) => (
              <li key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                <div className="font-semibold text-slate-800">{item.criterion}</div>
                <div className="text-slate-500 font-arabic mt-0.5">{item.ar}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
