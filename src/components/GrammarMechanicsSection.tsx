import React, { useState } from 'react';
import { Scale, Check, X, AlertOctagon, HelpCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { COMMA_RULES, FATAL_ERRORS } from '../data/quizData';

export const GrammarMechanicsSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'capitalization' | 'commas' | 'sv' | 'sentences' | 'errors'>('capitalization');

  // Interactive error fixer state
  const [fixedErrors, setFixedErrors] = useState<Record<string, boolean>>({});

  const toggleFix = (id: string) => {
    setFixedErrors(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-arabic mb-2">
          <Scale className="w-4 h-4" />
          <span>القواعد المحددة في كتب Great Writing 2 & Evolve 2</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-arabic text-slate-900 mb-2">
          قواعد الكتابة والميكانيكا اللغوية (Grammar & Mechanics Masterclass)
        </h2>
        <p className="text-sm text-slate-600 font-arabic leading-relaxed max-w-4xl">
          في كويز الكتابة، لا يحاسبك المصحح على الأفكار فقط، بل يتم خصم درجات على كل خطأ إملائي، أو حرف صغير، أو فاصلة مفقودة، أو عدم توافق بين الفاعل والفعل. هذه هي القواعد الخمس المحددة بالكامل في منهجك.
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setSubTab('capitalization')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all cursor-pointer ${
            subTab === 'capitalization'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          🔠 الحروف الكبيرة (Capitalization)
        </button>
        <button
          onClick={() => setSubTab('commas')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all cursor-pointer ${
            subTab === 'commas'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          쉼 قواعد الفواصل الأربعة (Comma Rules)
        </button>
        <button
          onClick={() => setSubTab('sv')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all cursor-pointer ${
            subTab === 'sv'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          🧩 توافق الفاعل والفعل (Subject-Verb)
        </button>
        <button
          onClick={() => setSubTab('sentences')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all cursor-pointer ${
            subTab === 'sentences'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          🏗️ أنواع الجمل (Simple, Compound, Complex)
        </button>
        <button
          onClick={() => setSubTab('errors')}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all cursor-pointer ${
            subTab === 'errors'
              ? 'bg-rose-700 text-white shadow-xs'
              : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
          }`}
        >
          ⚠️ الأخطاء القاتلة (Fragments & Run-ons)
        </button>
      </div>

      {/* Sub-tab 1: Capitalization */}
      {subTab === 'capitalization' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold font-arabic text-slate-900">
              قواعد الحروف الكبيرة (Capitalization Rules - Unit 1 p.12 & Evolve 2 p.9)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              النشاط المحدد في الامتحان: Activity 10 (Editing Capitalization and End Punctuation)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">1</span>
                بداية كل جملة (Sentence Start)
              </span>
              <p className="text-slate-600 font-arabic">أول حرف في أي جملة يجب أن يكون كبيراً دائماً.</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                <span className="font-bold">M</span>ost countries are on one continent.
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">2</span>
                الضمير "I" (The Pronoun "I")
              </span>
              <p className="text-slate-600 font-arabic">ضمير المتكلم (I) يكتب كبيراً في أي مكان في الجملة.</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                Although it was raining, <span className="font-bold">I</span> walked to school.
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">3</span>
                أسماء الأشخاص والألقاب
              </span>
              <p className="text-slate-600 font-arabic">الأسماء الصريحة والألقاب الرسمية تسبقها.</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                <span className="font-bold">D</span>r. <span className="font-bold">J</span>enkins, <span className="font-bold">M</span>ira <span className="font-bold">A</span>hmed, <span className="font-bold">S</span>imón <span className="font-bold">B</span>olívar
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">4</span>
                الدول والمدن والبحار والجغرافيا
              </span>
              <p className="text-slate-600 font-arabic">أسماء الأماكن الجغرافية المحددة والبحار والمدن.</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                <span className="font-bold">T</span>urkey, <span className="font-bold">B</span>razil, <span className="font-bold">B</span>lack <span className="font-bold">S</span>ea, <span className="font-bold">T</span>okyo
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">5</span>
                اللغات والجنسيات (Languages)
              </span>
              <p className="text-slate-600 font-arabic">أسماء اللغات والشعوب والجنسيات والقارات.</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                <span className="font-bold">S</span>panish, <span className="font-bold">E</span>nglish, <span className="font-bold">E</span>uropean, <span className="font-bold">A</span>sian
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">6</span>
                أيام الأسبوع والشهور
              </span>
              <p className="text-slate-600 font-arabic">أيام الأسبوع والشهور (وليس فصول السنة!).</p>
              <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800">
                <span className="font-bold">S</span>unday, <span className="font-bold">F</span>riday, <span className="font-bold">N</span>ovember, <span className="font-bold">O</span>ctober
              </div>
            </div>
          </div>

          {/* Interactive Exercise from Book Activity 10 */}
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-950 font-arabic text-xs mb-2">
              💡 تدريب من كتابك (Activity 10 p.13): صحح الجملة التالية:
            </h4>
            <div className="bg-white p-3 rounded-lg border border-amber-200 font-mono text-xs text-slate-700">
              <div className="text-red-600 line-through">
                turkey has coasts on the mediterranean sea and the black sea. (5 errors)
              </div>
              <div className="text-emerald-800 font-bold mt-1">
                ✔ <span className="underline">T</span>urkey has coasts on the <span className="underline">M</span>editerranean <span className="underline">S</span>ea and the <span className="underline">B</span>lack <span className="underline">S</span>ea.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab 2: Commas */}
      {subTab === 'commas' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold font-arabic text-slate-900">
              قواعد الفواصل الأربعة الإلزامية (The Four Essential Comma Rules - Unit 3 p.54)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              النشاط المحدد في الامتحان: Activity 10 & 11 (Comma Practice in Sentences & Paragraphs)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMMA_RULES.map((rule) => (
              <div key={rule.ruleNumber} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 font-arabic flex items-center gap-1.5 text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      {rule.ruleNumber}
                    </span>
                    {rule.title}
                  </span>
                </div>
                <p className="text-slate-600 font-arabic leading-relaxed">
                  {rule.explanation}
                </p>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-emerald-800">
                  <strong className="font-sans text-emerald-950 block text-[10px]">✔ صحيح:</strong>
                  {rule.correctExample}
                </div>
                <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 font-mono text-[11px] text-red-700">
                  <strong className="font-sans text-red-950 block text-[10px]">✘ انتبه للخطأ:</strong>
                  {rule.wrongExample}
                </div>
              </div>
            ))}
          </div>

          {/* Golden Rule for Adverb Clauses (Because / Although / If / When) */}
          <div className="bg-linear-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-xl text-xs space-y-2">
            <h4 className="font-bold text-base font-arabic">قاعدة ذهبية يحبها أساتذة جامعة أم القرى في الامتحان:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono">
              <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                <span className="block text-amber-300 font-bold font-arabic mb-1">العبارة في البداية ⬅ فاصلة إجبارية:</span>
                <span className="text-emerald-200">Because I study hard</span>
                <span className="text-amber-300 font-black text-sm">,</span>
                <span> I get high marks.</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                <span className="block text-amber-300 font-bold font-arabic mb-1">العبارة في النهاية ⬅ ممنوع الفاصلة:</span>
                <span>I get high marks </span>
                <span className="text-emerald-200">because I study hard.</span>
                <span className="text-rose-300 font-sans text-[11px] block mt-0.5">(No comma!)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab 3: Subject-Verb Agreement */}
      {subTab === 'sv' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold font-arabic text-slate-900">
              توافق الفاعل والفعل في المضارع البسيط (Subject-Verb Agreement - Unit 1 p.14 & Evolve 2 p.15)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              الأنشطة المحددة: Activities 12, 13, 15 (Correcting Subject-Verb Agreement Errors)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The 4 Tricky Rules from the Textbook Table */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 font-arabic">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                1. الفخ الأول: شبه الجملة مع حرف الجر (Prepositional Phrases)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                الكلمات التي تقع بين الفاعل والفاعل بعد حروف الجر (at, for, by, with, in, of) ليست هي الفاعل إطلاقاً!
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px]">
                "The main <span className="text-emerald-700 font-bold">method</span> [of transportation in these five islands] <span className="text-emerald-700 font-bold">is</span> the public bus."
                <div className="text-slate-500 text-[10px] mt-1 font-sans">
                  الفاعل method مفرد ⬅ نستخدم is، ولا تغرك كلمة islands الجمع داخل القوسين!
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 font-arabic">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                2. الفخ الثاني: كلمات Everyone و Everybody و Each
              </h4>
              <p className="text-slate-600 leading-relaxed">
                هذه الضمائر غير المحددة تعامل دائماً <strong>معاملة المفرد (Singular)</strong> وتأخذ فعلاً مضافاً له s/es.
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px]">
                "Everyone with five correct answers <span className="text-emerald-700 font-bold">gets</span> a passing grade."
                <div className="text-slate-500 text-[10px] mt-1 font-sans">
                  الخطأ الشائع هو كتابة get بدون s لأن الطالب ينظر لكلمة answers!
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 font-arabic">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                3. الفخ الثالث: قاعدة There is مقابل There are
              </h4>
              <p className="text-slate-600 leading-relaxed">
                في جمل There، الفاعل الحقيقي يأتي <strong>بعد الفعل</strong> وليس قبله:
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] space-y-1">
                <div>• There <span className="text-emerald-700 font-bold">is</span> a dictionary on the desk. (مفرد)</div>
                <div>• There <span className="text-emerald-700 font-bold">are</span> three reasons for this decision. (جمع)</div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 font-arabic">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                4. الفخ الرابع: المصدر الصريح (Gerund -ing as a noun)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                عندما تبدأ الجملة بفعل مضاف له -ing كاسم فاعل (Gerund)، فإنه يعامل دائماً معاملة المفرد:
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px]">
                "<span className="text-emerald-700 font-bold">Laughing</span> with friends <span className="text-emerald-700 font-bold">is</span> a healthy way to spend time."
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab 4: Sentence Types */}
      {subTab === 'sentences' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold font-arabic text-slate-900">
              أنواع الجمل الثلاثة (Simple vs. Compound vs. Complex - Unit 2 p.34 & Unit 3 p.52)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              الأنشطة المحددة: Activities 12, 13, 14, 15 (GW2 Unit 2) & Activity 8 (GW2 Unit 3)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Simple */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-800 text-sm">1. Simple Sentence</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full font-arabic">جملة بسيطة</span>
              </div>
              <p className="text-slate-600 font-arabic">
                تتكون من <strong>جملة مستقلة واحدة (One independent clause)</strong> ذات علاقة فاعل وفعل واحدة وتستطيع الوقوف بمفردها كمعنى تام.
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-800">
                "Chile imports oil from Brazil."
              </div>
              <div className="text-[10px] text-slate-500 font-arabic">
                * قد يكون الفاعل مركباً أو الفعل مركباً، لكنها تظل Simple طالما توجد جملة واحدة مستقلة.
              </div>
            </div>

            {/* Compound */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-800 text-sm">2. Compound Sentence</span>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full font-arabic">جملة مركبة</span>
              </div>
              <p className="text-slate-600 font-arabic">
                تتكون من <strong>جملتين كاملتين مستقلتين</strong> مربوطتين بفاصلة مع إحدى كلمات العطف (FANBOYS: <strong>and, but, so, or</strong>).
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-800">
                "Chile exports copper<span className="text-amber-600 font-bold">, and</span> Brazil exports sugar."
              </div>
              <div className="text-[10px] text-slate-500 font-arabic">
                * شرط وجود الفاصلة قبل أداة الربط إلزامياً في كتابك (Activity 12 p.34).
              </div>
            </div>

            {/* Complex */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-800 text-sm">3. Complex Sentence</span>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full font-arabic">جملة معقدة</span>
              </div>
              <p className="text-slate-600 font-arabic">
                تتكون من <strong>جملة مستقلة + جملة تابعة (Dependent clause)</strong> تبدأ بأداة ربط ظرفية (because, although, if, when) أو اسم موصول (who, which, that).
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-800">
                "People <span className="text-indigo-600 font-bold">who exercise regularly</span> are healthier."
              </div>
              <div className="text-[10px] text-slate-500 font-arabic">
                * مقرر كتاب Evolve 2 يركز على: if/when (ص 91) و who/which/that (ص 143).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab 5: Fatal Errors */}
      {subTab === 'errors' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold font-arabic text-rose-900 flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-rose-600" />
              الأخطاء القاتلة الثلاثة وكيفية تصحيحها (Avoiding Fragments, Run-ons & Comma Splices)
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              المصدر: كتاب Great Writing 2 (الوحدة 4، ص 73 و 74 - Activity 9 & 10)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FATAL_ERRORS.map((err) => {
              const isFixed = fixedErrors[err.id];
              return (
                <div key={err.id} className="bg-rose-50/40 p-5 rounded-xl border border-rose-200 text-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-950 font-arabic text-sm">{err.nameEn}</span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-200 text-rose-800 text-[10px] font-bold">خطأ خصم</span>
                    </div>
                    <p className="text-slate-600 font-arabic">{err.definition}</p>
                    
                    {/* Sentence View */}
                    <div className="bg-white p-3 rounded-lg border border-rose-200 font-mono text-[11px] space-y-1">
                      <div className="text-slate-500 text-[10px] font-sans font-bold">الجملة قبل التصحيح:</div>
                      <div className="text-red-700 font-semibold">{err.badExample}</div>
                      <div className="text-slate-500 font-arabic text-[10px] pt-1">
                        <strong>السبب:</strong> {err.badWhy}
                      </div>
                    </div>

                    {isFixed && (
                      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-300 font-mono text-[11px] text-emerald-900 space-y-1 animate-fadeIn">
                        <div className="text-emerald-800 text-[10px] font-sans font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          الجملة بعد التصحيح الأكاديمي:
                        </div>
                        <div className="font-semibold text-emerald-950">{err.fixedExample}</div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-rose-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-arabic">{err.fixTip}</span>
                    <button
                      onClick={() => toggleFix(err.id)}
                      className={`px-3 py-1 rounded-md text-xs font-bold font-arabic transition-all cursor-pointer ${
                        isFixed ? 'bg-emerald-600 text-white' : 'bg-rose-600 hover:bg-rose-700 text-white'
                      }`}
                    >
                      {isFixed ? 'إعادة الإخفاء' : 'صحح الجملة الآن'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
