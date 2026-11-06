import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, ListOrdered, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CONCLUDING_PURPOSES } from '../data/quizData';

export const WritingStepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      titleAr: 'الخطوة 1: العصف الذهني واختيار الأفكار (Brainstorming)',
      titleEn: 'Step 1: Brainstorming Ideas (Unit 2 p.26-28)',
      shortDesc: 'توليد أكبر قدر من الأفكار بسرعة دون تردد، ثم تصفيتها واختيار الأفضل.'
    },
    {
      num: 2,
      titleAr: 'الخطوة 2: صياغة الجملة الافتتاحية (Topic Sentence)',
      titleEn: 'Step 2: Topic Sentence & Controlling Idea (Unit 3 p.46-50)',
      shortDesc: 'استخدام المعادلة الذهبية (Topic + Controlling Idea) ووضع بوصلة الفقرة.'
    },
    {
      num: 3,
      titleAr: 'الخطوة 3: بناء المخطط والجمل الداعمة (Supporting Sentences)',
      titleEn: 'Step 3: Developing 3-4 Supporting Sentences (Unit 4 p.64-68)',
      shortDesc: 'تطوير نقاط داعمة محددة بأمثلة وأسباب مع الحفاظ التام على Unity.'
    },
    {
      num: 4,
      titleAr: 'الخطوة 4: كتابة الجملة الختامية (Concluding Sentence)',
      titleEn: 'Step 4: Concluding Sentence & Transitions (Unit 4 p.75-76)',
      shortDesc: 'إنهاء الفقرة منطقياً بأحد الأساليب الـ 4 المعتمدة وكلمة انتقال مناسبة.'
    },
    {
      num: 5,
      titleAr: 'الخطوة 5: التنسيق النهائي وكتابة العنوان (Title & Indent)',
      titleEn: 'Step 5: Paragraph Formatting & Title (Unit 2 p.37 & Unit 5)',
      shortDesc: 'وضع العنوان الأكاديمي، تطبيق المسافة البادئة، والتأكد من الكتلة الواحدة.'
    },
    {
      num: 6,
      titleAr: 'الخطوة 6: التدقيق اللغوي الذاتي (Proofreading Checklist)',
      titleEn: 'Step 6: Proofreading for Grammar, S-V & Commas (Unit 5 p.91)',
      shortDesc: 'مراجعة أخطاء الـ Capitalization، الفواصل، وتوافق الفعل والفاعل.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Step Header */}
      <div className="bg-linear-to-r from-teal-700 to-emerald-800 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-2 text-emerald-200 text-xs font-bold font-arabic">
          <ListOrdered className="w-4 h-4" />
          <span>الدليل العملي الإرشادي خطوة بخطوة للطالب</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-arabic mb-2">
          خطوات كتابة البارقراف الأكاديمي بالتفصيل (Detailed Step-by-Step Writing Process)
        </h2>
        <p className="text-sm text-emerald-100 font-arabic leading-relaxed max-w-4xl">
          في كويز الكتابة (ELIE1201)، لا تبدأ بالكتابة العشوائية في ورقة الإجابة مباشرة! اتبع هذا المسار المنهجي المعتمد في Great Writing 2 لتحصل على أعلى تقييم وتتجنب تشتت الأفكار.
        </p>
      </div>

      {/* Step Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {steps.map((s) => (
          <button
            key={s.num}
            onClick={() => setActiveStep(s.num)}
            className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
              activeStep === s.num
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-300'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${
                  activeStep === s.num ? 'bg-white text-emerald-700' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {s.num}
              </span>
              {activeStep > s.num && (
                <CheckCircle2 className={`w-4 h-4 ${activeStep === s.num ? 'text-white' : 'text-emerald-600'}`} />
              )}
            </div>
            <div className="font-bold text-xs font-arabic line-clamp-2">
              {s.titleAr.replace(`الخطوة ${s.num}: `, '')}
            </div>
          </button>
        ))}
      </div>

      {/* Dynamic Content based on Active Step */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        {activeStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 1 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 1: العصف الذهني واختيار الأفكار (Brainstorming)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 2، ص 26 إلى 28 - Activity 1, 2, 5)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 font-arabic text-sm text-slate-700 leading-relaxed">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-base">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  ما هو العصف الذهني؟ (What is Brainstorming?)
                </h4>
                <p>
                  العصف الذهني هو كتابة سريعة لكل الكلمات والأفكار التي تخطر ببالك حول الموضوع في مسودة جانبية خلال دقيقتين إلى ثلاث دقائق، دون القلق بشأن الأخطاء الإملائية أو النحوية ودون الحكم على الفكرة إن كانت جيدة أو سيئة.
                </p>
                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-950 text-xs space-y-2">
                  <strong className="block text-emerald-900">طريقتان معتمدتان في الكتاب:</strong>
                  <div>
                    1. <strong>المخطط العنقودي (Cluster Diagram):</strong> وضع الموضوع في دائرة مركزية وتفريغ خطوط ودوائر فرعية للأفكار (مثل نشاط 1 و 5).
                  </div>
                  <div>
                    2. <strong>قائمة الأفكار (Listing):</strong> كتابة قائمة رأسية سريعة بالنقاط المحتملة.
                  </div>
                </div>
              </div>

              {/* The "Cross Out" Rule */}
              <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200 text-xs text-amber-950 font-arabic space-y-3">
                <h4 className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  أهم خطوة بعد العصف الذهني: الشطب (Crossing Out Unrelated Ideas)
                </h4>
                <p>
                  يؤكد كتاب Great Writing 2 (صفحة 28) أن الكاتب الجيد ينظر إلى قائمته ويقوم بـ <strong className="text-rose-700">شطب الأفكار الضعيفة أو الخارجة عن الموضوع (Cross out)</strong> ويختار فقط 3 إلى 4 أفكار قوية ومترابطة.
                </p>
                <div className="bg-white p-3 rounded-lg border border-amber-200 font-mono text-[11px] space-y-1">
                  <div className="text-slate-500 font-bold mb-1">مثال كتابي: موضوع (Compare Brazil & Chile)</div>
                  <div className="text-emerald-700">✔ Geography (size, mountains)</div>
                  <div className="text-emerald-700">✔ Language (Portuguese vs. Spanish)</div>
                  <div className="text-rose-600 line-through">✘ Schools & University (Crossed out - off topic!)</div>
                  <div className="text-emerald-700">✔ Population differences</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold font-arabic hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>الانتقال للخطوة 2: صياغة الجملة الافتتاحية</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 2 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 2: صياغة الجملة الافتتاحية (Topic Sentence & Controlling Idea)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 3، ص 46 إلى 50) + تقييم الأسبوع 6 (Checklist 1)
              </p>
            </div>

            {/* Formula Box */}
            <div className="bg-linear-to-r from-emerald-500 to-teal-600 text-white p-5 rounded-xl shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">The Golden Equation (المعادلة الذهبية)</div>
              <div className="text-lg sm:text-2xl font-black font-mono tracking-tight text-center py-2 bg-black/20 rounded-lg">
                Topic Sentence = Topic + Controlling Idea
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-emerald-50 font-arabic">
                <div className="bg-white/10 p-2.5 rounded-md">
                  <strong className="block text-white mb-0.5">1. الموضوع (Topic):</strong>
                  هو الشيء العام الذي تتحدث عنه الفقرة (مثل: Exercise, Tea, Studying abroad, Cairo).
                </div>
                <div className="bg-white/10 p-2.5 rounded-md">
                  <strong className="block text-white mb-0.5">2. الفكرة الحاكمة (Controlling Idea):</strong>
                  هي الموقف أو الفكرة المحددة التي تقود الفقرة وترسم حدود ما ستشرحه (مثل: has three health benefits).
                </div>
              </div>
            </div>

            {/* 3 Common Mistakes to Avoid in Topic Sentences */}
            <div>
              <h4 className="font-bold text-slate-900 font-arabic text-sm mb-3">
                الأخطاء الثلاثة القاتلة التي تبطل الجملة الافتتاحية (Unit 3 p.48):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-xs font-arabic space-y-2">
                  <div className="font-bold text-red-900 flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center text-[10px]">1</span>
                    عامة جداً (Too General) ❌
                  </div>
                  <p className="text-slate-600">
                    <span className="line-through text-red-600 font-mono">"Tea is delicious."</span>
                    <br />
                    جملة عامة وسطحية لا تعطي أي توجيه لما سيحتويه البارقراف.
                  </p>
                  <div className="bg-white p-2 rounded-md border border-red-100 text-emerald-800 font-medium font-mono text-[11px]">
                    ✔ الصحيح: "Green tea has many remarkable health benefits."
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-xs font-arabic space-y-2">
                  <div className="font-bold text-red-900 flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center text-[10px]">2</span>
                    مجرد حقيقة ميتة (A Pure Fact) ❌
                  </div>
                  <p className="text-slate-600">
                    <span className="line-through text-red-600 font-mono">"Libraries have books."</span>
                    <br />
                    حقيقة بديهية لا مجال لشرحها أو مناقشتها أو تقديم أسباب لها!
                  </p>
                  <div className="bg-white p-2 rounded-md border border-red-100 text-emerald-800 font-medium font-mono text-[11px]">
                    ✔ الصحيح: "Modern university libraries offer valuable digital research tools."
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-xs font-arabic space-y-2">
                  <div className="font-bold text-red-900 flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center text-[10px]">3</span>
                    ضيقة وتفصيلية جداً (Too Specific) ❌
                  </div>
                  <p className="text-slate-600">
                    <span className="line-through text-red-600 font-mono">"This dictionary has 42,000 words."</span>
                    <br />
                    تفصيلة رقمية ضيقة لا تترك أي كلام إضافي ليكتبه الكاتب في بقية الفقرة.
                  </p>
                  <div className="bg-white p-2 rounded-md border border-red-100 text-emerald-800 font-medium font-mono text-[11px]">
                    ✔ الصحيح: "Bilingual dictionaries help language learners overcome several obstacles."
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Examples */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-800 font-arabic block">أمثلة ممتازة من الكتاب لتحليل Topic و Controlling Idea:</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-slate-800 font-mono font-medium">
                    "<span className="text-blue-700 font-bold underline">Soccer</span> is{' '}
                    <span className="text-emerald-700 font-bold underline">popular for many reasons</span>."
                  </div>
                  <div className="text-slate-500 font-arabic text-[11px] mt-1">
                    الموضوع: كرة القدم | الفكرة الحاكمة: أنها مشهورة لعدة أسباب.
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-slate-800 font-mono font-medium">
                    "<span className="text-blue-700 font-bold underline">Renting an apartment</span> has{' '}
                    <span className="text-emerald-700 font-bold underline">many distinct advantages</span>."
                  </div>
                  <div className="text-slate-500 font-arabic text-[11px] mt-1">
                    الموضوع: استئجار شقة | الفكرة الحاكمة: له مزايا متعددة واضحة.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(1)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-arabic hover:bg-slate-200 cursor-pointer"
              >
                السابق
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold font-arabic hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>الانتقال للخطوة 3: بناء الجمل الداعمة</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 3 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 3: بناء المخطط والجمل الداعمة (Supporting Sentences)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 4، ص 64 إلى 68) + تقييم الأسبوع 9 (Checklist 2)
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-xs text-blue-950 font-arabic leading-relaxed">
                <strong className="block text-blue-900 text-sm mb-1">وظيفة الجمل الداعمة (What do Supporting Sentences do?):</strong>
                الجمل الداعمة تشرح وتوسع الفكرة الحاكمة (Controlling Idea). يجب أن تجيب عن أسئلة تفصيلية:
                <strong className="text-blue-900"> Who? What? Where? When? Why? How?</strong>.
                ويجب أن تتكون فقرتك من <strong>3 إلى 4 جمل داعمة</strong> رئيسية، يتبع كل جملة توضيح أو مثال.
              </div>

              {/* The 6 Goals of Supporting Sentences */}
              <div>
                <h4 className="font-bold text-slate-900 font-arabic text-sm mb-3">
                  الأهداف الـ 6 للجمل الداعمة المعتمدة في كتاب Great Writing 2 (p.67):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">1. التفسير (Explain)</span>
                    <span className="text-slate-500 text-[11px]">توضيح كيفية حدوث الشيء أو سبب وجوده.</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">2. الوصف (Describe)</span>
                    <span className="text-slate-500 text-[11px]">وصف الأماكن والأشخاص والمشاعر بالتفصيل.</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">3. إعطاء أسباب (Give Reasons)</span>
                    <span className="text-slate-500 text-[11px]">تقديم المبررات باستخدام because أو so.</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">4. إعطاء حقائق (Give Facts)</span>
                    <span className="text-slate-500 text-[11px]">إحصائيات وأرقام وحقائق علمية أو جغرافية.</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">5. إعطاء أمثلة (Give Examples)</span>
                    <span className="text-slate-500 text-[11px]">استخدام For example أو For instance.</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800 block">6. التعريف (Define)</span>
                    <span className="text-slate-500 text-[11px]">تعريف مصطلح أو مفهوم غير مألوف.</span>
                  </div>
                </div>
              </div>

              {/* Connecting words & Unity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <h5 className="font-bold text-slate-800 text-xs font-arabic flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    أدوات الربط التتابعية الإلزامية (Transitions)
                  </h5>
                  <p className="text-xs text-slate-600 font-arabic">
                    اربط بين الجمل الداعمة لتكون القراءة سلسة وضع فاصلة بعدها:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">First,</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">Second,</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">In addition,</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">Furthermore,</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">For example,</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-sm font-mono text-xs font-semibold">Finally,</span>
                  </div>
                </div>

                <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 space-y-2">
                  <h5 className="font-bold text-rose-900 text-xs font-arabic flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    شرط وحدة الموضوع (Maintaining Paragraph Unity)
                  </h5>
                  <p className="text-xs text-rose-950 font-arabic leading-relaxed">
                    أي جملة لا تخدم الفكرة الحاكمة مباشرة (مثل الحديث عن لاعب مفضل في فقرة تتحدث عن أسباب تفوق المدارس) تُعد <strong>Unrelated Sentence</strong> وتنقص درجات المحتوى فوراً!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(2)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-arabic hover:bg-slate-200 cursor-pointer"
              >
                السابق
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold font-arabic hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>الانتقال للخطوة 4: كتابة الخاتمة</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 4: كتابة الجملة الختامية (Concluding Sentence & Transitions)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 4، ص 75 إلى 76)
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-950 font-arabic leading-relaxed">
              <strong className="block text-amber-900 text-sm mb-1">القواعد الذهبية للجملة الختامية:</strong>
              1. هي آخر جملة في الفقرة وتعلن للقارئ أنك أنهيت مناقشة الفكرة.
              <br />
              2. <strong>ممنوع منعاً باتاً:</strong> إدخال أي معلومة جديدة تماماً لم تُشرح في الفقرة!
              <br />
              3. تبدأ عادة بكلمة أو عبارة انتقال ختامية متبوعة بفاصلة (,).
            </div>

            {/* The 4 Concluding Purposes */}
            <div>
              <h4 className="font-bold text-slate-900 font-arabic text-sm mb-3">
                الأغراض الأربعة المعتمدة للجملة الختامية (Four Approved Purposes):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONCLUDING_PURPOSES.map((p) => (
                  <div key={p.type} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-slate-900 font-arabic flex items-center justify-between">
                      <span>{p.titleEn}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] uppercase font-mono">
                        {p.type}
                      </span>
                    </div>
                    <p className="text-slate-600 font-arabic">{p.description}</p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-serif text-slate-800 text-[11px]">
                      <span className="text-emerald-700 font-bold">مثال: </span>
                      "{p.example}"
                    </div>
                    <div className="text-[11px] text-slate-500">
                      <strong>كلمات البدء: </strong>
                      <span className="font-mono text-emerald-800">{p.transitions.join(' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(3)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-arabic hover:bg-slate-200 cursor-pointer"
              >
                السابق
              </button>
              <button
                onClick={() => setActiveStep(5)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold font-arabic hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>الانتقال للخطوة 5: التنسيق والعنوان</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 5 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 5: التنسيق النهائي للفقرة والعنوان (Formatting & Academic Title)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 2 ص 37، الوحدة 5 ص 86)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 font-arabic text-xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  قواعد العنوان الصحيح في الكويز:
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  يأتي سؤال في الامتحان يطلب منك اختيار أو كتابة أفضل عنوان (Activity 16 p.37). العنوان الأكاديمي الممتاز:
                </p>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span>يكتب في المنتصف (Centered).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span>يبدأ بحرف كبير لكل كلمة رئيسية (Capitalize major words).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span>يكون قصيراً وجذاباً ويعبر عن الموضوع (Catchy & Relevant).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">✘</span>
                    <span><strong>لا تضع نقطة</strong> في نهاية العنوان أبداً!</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">✘</span>
                    <span><strong>لا تجعل العنوان جملة كاملة</strong> (A title is not usually a sentence).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 font-arabic text-xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  شكل الفقرة الأكاديمية (Single Block Layout):
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  عند الكتابة في ورقة الكويز:
                </p>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span><strong>المسافة البادئة (Indent):</strong> اترك مسافة إصبعين (نصف بوصة) في أول سطر فقط.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span><strong>الكتابة المتصلة:</strong> الجملة الثانية تبدأ فوراً بعد نقطة الجملة الأولى في نفس السطر.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">✘</span>
                    <span><strong>ممنوع النزول لسطر جديد</strong> بعد كل جملة! الفقرة ليست شعراً وليست نقاط تعداد.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span><strong>عدد الجمل الإجمالي:</strong> تأكد أنك كتبت ما بين 5 إلى 10 جمل.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(4)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-arabic hover:bg-slate-200 cursor-pointer"
              >
                السابق
              </button>
              <button
                onClick={() => setActiveStep(6)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold font-arabic hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>الانتقال للخطوة 6: التدقيق النهائي</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 6 of 6</span>
              <h3 className="text-xl font-bold font-arabic text-slate-900 mt-1">
                الخطوة 6: التدقيق اللغوي الذاتي السريع (5-Minute Proofreading)
              </h3>
              <p className="text-sm text-slate-500 font-arabic">
                المصدر: كتاب Great Writing 2 (الوحدة 1، 3، 4، 5)
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-arabic">
              خصص آخر 5 دقائق من وقت الاختبار لقراءة فقرتك بعين المصحح! هذه القائمة تختصر 90% من النقاط التي يخصم الأساتذة الدرجات عليها:
            </div>

            <div className="space-y-2.5 font-arabic text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-emerald-600 rounded-sm" defaultChecked />
                <div>
                  <strong className="text-slate-900 block">1. التحقق من المسافة البادئة والعنوان (Indentation & Title)</strong>
                  <span className="text-slate-600">هل العنوان في المنتصف وبلا نقطة؟ وهل أول سطر به مسافة بادئة؟</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-emerald-600 rounded-sm" defaultChecked />
                <div>
                  <strong className="text-slate-900 block">2. فحص الحروف الكبيرة (Capitalization)</strong>
                  <span className="text-slate-600">هل كل جملة تبدأ بحرف كبير؟ هل الضمير "I" كبير دائماً؟ هل أسماء المدن والدول واللغات والشهور كبيرة؟</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-emerald-600 rounded-sm" defaultChecked />
                <div>
                  <strong className="text-slate-900 block">3. فحص توافق الفاعل والفعل (Subject-Verb Agreement)</strong>
                  <span className="text-slate-600">إذا كان الفاعل مفرد (He/She/It/Student)، هل أضفت (s/es) للفعل في المضارع البسيط؟ هل انتبهت لكلمات مثل Everyone?</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-emerald-600 rounded-sm" defaultChecked />
                <div>
                  <strong className="text-slate-900 block">4. فحص الفواصل وعلامات الترقيم (Commas & Periods)</strong>
                  <span className="text-slate-600">هل توجد نقطة نهاية كل جملة؟ هل توجد فاصلة بعد كلمات الانتقال (First, However, In conclusion,)؟</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-emerald-600 rounded-sm" defaultChecked />
                <div>
                  <strong className="text-slate-900 block">5. استبعاد الجمل الناقصة والمدمجة (No Fragments, No Run-ons)</strong>
                  <span className="text-slate-600">تأكد ألا تبدأ جملة بـ Because أو Although وتقف دون إكمال الجملة الرئيسية!</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveStep(5)}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-arabic hover:bg-slate-200 cursor-pointer"
              >
                السابق
              </button>
              <div className="text-xs text-emerald-700 font-bold font-arabic flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>أنت الآن جاهز لصياغة البارقراف الكامل!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
