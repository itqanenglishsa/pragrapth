import React, { useState } from 'react';
import { Check, X, ShieldCheck, HelpCircle, Eye, Sparkles, BookOpen } from 'lucide-react';
import { FOUR_GOLDEN_FEATURES } from '../data/quizData';

export const ParagraphTypesSection: React.FC = () => {
  const [selectedSpotlight, setSelectedSpotlight] = useState<'title' | 'indent' | 'topic' | 'supporting' | 'unity' | 'concluding'>('topic');

  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-arabic mb-2">
          <BookOpen className="w-4 h-4" />
          <span>المطلوب في المستوى A2 (Great Writing 2)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-arabic text-slate-900 mb-2">
          نوع البارقراف المحدد وشروطه الأكاديمية (Paragraph Type & Golden Rules)
        </h2>
        <p className="text-sm text-slate-600 font-arabic leading-relaxed max-w-4xl">
          نوع البارقراف المطلوب في هذا المستوى هو <strong className="text-emerald-700">فقرة أكاديمية موحدة (Academic Paragraph)</strong> تركز على الوصف والشرح (Descriptive & Explanatory Paragraph). تتميز بأنها ليست مقالاً طويلاً (Not an Essay)، وليست نقاطاً مبعثرة (Not Bullet Points)، بل كتلة نصية متماسكة ومنظمة وفق معايير صارمة.
        </p>
      </div>

      {/* The 4 Golden Features (Four Features of a Good Paragraph - GW2 Unit 1 & 5) */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-bold font-arabic text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            الشروط الأربعة الذهبية للفقرة الممتازة (The Four Features of a Good Paragraph)
          </h3>
          <p className="text-xs text-slate-500 font-arabic">
            هذه القواعد الأربع تأتي نصاً في كتاب Great Writing 2 (Unit 1 & Unit 5 p.86) وهي أساس كل درجات المصحح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FOUR_GOLDEN_FEATURES.map((feature) => (
            <div
              key={feature.number}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all relative overflow-hidden"
            >
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-black text-sm flex items-center justify-center border border-emerald-200">
                {feature.number}
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-arabic pr-8 mb-1">
                {feature.titleEn}
              </h4>
              <p className="text-xs font-medium text-emerald-800 bg-emerald-50/70 p-2 rounded-md mb-2 font-mono">
                {feature.descEn}
              </p>
              <p className="text-xs text-slate-600 font-arabic leading-relaxed mb-3">
                {feature.descAr}
              </p>
              <div className="bg-amber-50 text-amber-900 text-xs p-2.5 rounded-lg border border-amber-200/60 font-arabic flex items-start gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong className="text-amber-950">تنبيه للكويز:</strong> {feature.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paragraph Anatomy & Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <h4 className="font-bold text-slate-900 font-arabic text-sm flex items-center gap-2 text-indigo-700">
            📏 شروط الطول والكلمات
          </h4>
          <ul className="text-xs text-slate-600 space-y-2 font-arabic">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>عدد الجمل:</strong> من 5 إلى 10 جمل (5–10 Sentences). لا تقل عن 5 ولا تزد عن 10.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>عدد الكلمات:</strong> حوالي 100 إلى 150 كلمة (Test Prep: ~150 words).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>التقسيم الزمني:</strong> 25 دقيقة للكتابة (5 دقائق عصف وتخطيط + 15 دقيقة كتابة + 5 دقائق مراجعة).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <h4 className="font-bold text-slate-900 font-arabic text-sm flex items-center gap-2 text-rose-700">
            🏷️ شروط وقواعد العنوان (Title Rules)
          </h4>
          <ul className="text-xs text-slate-600 space-y-2 font-arabic">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>الموقع:</strong> في منتصف السطر العلوي تماماً (Centered).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>ليس جملة كاملة:</strong> العنوان عبارة (Phrase) وليس جملة تحتوي فاعلاً وفعلاً كاملاً.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✔</span>
              <span><strong>الأحرف الكبيرة:</strong> تبدأ الكلمة الأولى وجميع الكلمات الرئيسية (الأسماء، الأفعال، الصفات) بحرف كبير (Capital Letter).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">✘</span>
              <span><strong>ممنوع النقطة:</strong> لا تضع نقطة (.) إطلاقاً في نهاية العنوان!</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
          <h4 className="font-bold text-slate-900 font-arabic text-sm flex items-center gap-2 text-teal-700">
            🧱 التركيبة الهيكلية (The Structure)
          </h4>
          <ul className="text-xs text-slate-600 space-y-2 font-arabic">
            <li className="flex items-start gap-2">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-sm">1</span>
              <span><strong>Topic Sentence:</strong> الجملة الأولى (تقدم الموضوع والفكرة الحاكمة).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5 rounded-sm">2</span>
              <span><strong>Supporting Sentences:</strong> من 3 إلى 4 جمل تشرح وتعطي أسباباً وأمثلة وحقائق.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-sm">3</span>
              <span><strong>Concluding Sentence:</strong> الجملة الأخيرة تختم الفقرة وتؤكد الفكرة بدون مواضيع جديدة.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Anatomy Widget: Visual Breakdown of Good vs Bad */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-arabic flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-600" />
              المشرحة البصرية للبارقراف: تفاعل مع أجزاء الفقرة النموذجية
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              انقر على أي جزء من أجزاء الفقرة بالأسفل لتكتشف شروطه وملاحظات المصححين عنه
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Spotlight Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedSpotlight('title')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-arabic transition-all cursor-pointer ${
                selectedSpotlight === 'title' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              العنوان (Title)
            </button>
            <button
              onClick={() => setSelectedSpotlight('indent')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-arabic transition-all cursor-pointer ${
                selectedSpotlight === 'indent' ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              المسافة البادئة (Indentation)
            </button>
            <button
              onClick={() => setSelectedSpotlight('topic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-arabic transition-all cursor-pointer ${
                selectedSpotlight === 'topic' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              الجملة الافتتاحية (Topic Sentence)
            </button>
            <button
              onClick={() => setSelectedSpotlight('supporting')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-arabic transition-all cursor-pointer ${
                selectedSpotlight === 'supporting' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              الجمل الداعمة والروابط (Supporting)
            </button>
            <button
              onClick={() => setSelectedSpotlight('concluding')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-arabic transition-all cursor-pointer ${
                selectedSpotlight === 'concluding' ? 'bg-amber-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              الجملة الختامية (Concluding)
            </button>
          </div>

          {/* Interactive Paragraph Box */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-300 font-serif leading-relaxed text-slate-800 text-sm sm:text-base max-w-3xl mx-auto shadow-inner relative">
            {/* Title */}
            <div
              onClick={() => setSelectedSpotlight('title')}
              className={`text-center font-bold text-lg mb-4 cursor-pointer transition-all p-1 rounded-md ${
                selectedSpotlight === 'title' ? 'bg-indigo-100 ring-2 ring-indigo-500 text-indigo-950 font-sans' : 'hover:bg-slate-200'
              }`}
            >
              Reasons for Exercise
            </div>

            {/* Paragraph Body with Indentation */}
            <p className="text-justify leading-loose">
              {/* Indentation Indicator */}
              <span
                onClick={() => setSelectedSpotlight('indent')}
                className={`inline-block w-8 sm:w-10 text-center text-xs text-teal-700 bg-teal-100/80 rounded-sm py-0.5 mr-1 font-mono cursor-pointer ${
                  selectedSpotlight === 'indent' ? 'ring-2 ring-teal-500 font-bold bg-teal-200' : ''
                }`}
                title="مسافة بادئة Indentation"
              >
                [Indent]
              </span>

              {/* Topic Sentence */}
              <span
                onClick={() => setSelectedSpotlight('topic')}
                className={`cursor-pointer transition-all rounded-xs px-1 ${
                  selectedSpotlight === 'topic'
                    ? 'bg-emerald-200 font-semibold ring-2 ring-emerald-500'
                    : 'bg-emerald-100/60 hover:bg-emerald-100'
                }`}
              >
                There are many excellent reasons for exercising several times each week.
              </span>{' '}

              {/* Supporting 1 */}
              <span
                onClick={() => setSelectedSpotlight('supporting')}
                className={`cursor-pointer transition-all rounded-xs px-1 ${
                  selectedSpotlight === 'supporting'
                    ? 'bg-blue-200 ring-2 ring-blue-500 font-medium'
                    : 'hover:bg-blue-50'
                }`}
              >
                First, people who exercise look better. Exercise is important to keep our bodies in good shape.
              </span>{' '}

              {/* Supporting 2 */}
              <span
                onClick={() => setSelectedSpotlight('supporting')}
                className={`cursor-pointer transition-all rounded-xs px-1 ${
                  selectedSpotlight === 'supporting'
                    ? 'bg-blue-200 ring-2 ring-blue-500 font-medium'
                    : 'hover:bg-blue-50'
                }`}
              >
                In addition, people who exercise have more energy. For example, a person who exercises can walk up stairs or climb hills more easily.
              </span>{' '}

              {/* Supporting 3 */}
              <span
                onClick={() => setSelectedSpotlight('supporting')}
                className={`cursor-pointer transition-all rounded-xs px-1 ${
                  selectedSpotlight === 'supporting'
                    ? 'bg-blue-200 ring-2 ring-blue-500 font-medium'
                    : 'hover:bg-blue-50'
                }`}
              >
                Finally, exercise reduces stress and helps you have a clear mind. Too much stress can cause you to worry a lot, and that is not good for your health.
              </span>{' '}

              {/* Concluding Sentence */}
              <span
                onClick={() => setSelectedSpotlight('concluding')}
                className={`cursor-pointer transition-all rounded-xs px-1 ${
                  selectedSpotlight === 'concluding'
                    ? 'bg-amber-200 font-semibold ring-2 ring-amber-500'
                    : 'bg-amber-100/60 hover:bg-amber-100'
                }`}
              >
                For these reasons, if you want to improve your health, you should exercise regularly.
              </span>
            </p>
          </div>

          {/* Explanation Callout for Selected Spotlight */}
          <div className="mt-4 max-w-3xl mx-auto">
            {selectedSpotlight === 'title' && (
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-xs sm:text-sm text-indigo-900 font-arabic space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-indigo-950">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  قواعد العنوان في الاختبار (Reasons for Exercise):
                </div>
                <p>
                  1. العنوان في المنتصف (Centered).
                  <br />
                  2. الكلمات الرئيسية تبدأ بحرف كبير (Reasons, Exercise) وحرف الجر (for) صغير.
                  <br />
                  3. <strong>تحذير:</strong> لا تضع نقطة (.) في نهاية العنوان مطلقاً! (هذا خطأ يقع فيه 70% من الطلاب).
                </p>
              </div>
            )}

            {selectedSpotlight === 'indent' && (
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl text-xs sm:text-sm text-teal-900 font-arabic space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-teal-950">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  شروط المسافة البادئة (Indentation):
                </div>
                <p>
                  اترك مسافة 5 أحرف (أو اضغط Tab مرة واحدة) في <strong>السطر الأول فقط</strong>. جميع الأسطر التالية تبدأ من أقصى اليسار بدون أي مسافة بادئة. عدم ترك المسافة البادئة يخصم نصف درجة فوراً.
                </p>
              </div>
            )}

            {selectedSpotlight === 'topic' && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs sm:text-sm text-emerald-900 font-arabic space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-emerald-950">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  تحليل الجملة الافتتاحية (Topic Sentence):
                </div>
                <p>
                  • <strong>الموضوع (Topic):</strong> Exercise (ممارسة التمارين الرياضية).
                  <br />
                  • <strong>الفكرة الحاكمة (Controlling Idea):</strong> many excellent reasons for exercising several times each week (وجود أسباب ممتازة لممارستها).
                  <br />
                  • هذه الجملة تضع إطاراً واضحاً جداً للمصحح: الفقرة ستتحدث فقط عن الأسباب الإيجابية ولن تتحدث عن أسعار الجيم أو أنواع الأحذية!
                </p>
              </div>
            )}

            {selectedSpotlight === 'supporting' && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs sm:text-sm text-blue-900 font-arabic space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-blue-950">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  تحليل الجمل الداعمة والروابط (Supporting Sentences):
                </div>
                <p>
                  • تم استخدام 3 أسباب رئيسية: (1. تحسين المظهر 2. زيادة الطاقة 3. تقليل التوتر الذهني).
                  <br />
                  • كل سبب تم دعمه بمثال أو توضيح إضافي (For example, walk up stairs).
                  <br />
                  • تم استخدام كلمات انتقال تتابعية واضحة تتبعها فاصلة: <strong>First,</strong> ثم <strong>In addition,</strong> ثم <strong>Finally,</strong>.
                </p>
              </div>
            )}

            {selectedSpotlight === 'concluding' && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs sm:text-sm text-amber-900 font-arabic space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  تحليل الجملة الختامية (Concluding Sentence):
                </div>
                <p>
                  • بدأت بعبارة انتقالية ختامية متبوعة بفاصلة: <strong>For these reasons,</strong>.
                  <br />
                  • نوع الخاتمة هنا هو <strong>Suggestion (تقديم نصيحة)</strong>: "if you want to improve your health, you should exercise regularly".
                  <br />
                  • الخاتمة لم تدخل في أي فكرة جديدة بل أغلقت الدائرة الفكرية للفقرة بإحكام.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison: Bad Paragraph vs Good Paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50/50 border border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-red-700 font-bold font-arabic mb-3">
            <X className="w-5 h-5 bg-red-100 p-0.5 rounded-full" />
            <span>بارقراف خاطئ مليء بالأخطاء الشائعة (0 / 5)</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-red-200 font-mono text-xs text-slate-700 space-y-2">
            <div className="text-left text-red-600 line-through">why exercise is good for people.</div>
            <p className="line-through text-slate-500">
              exercise is very good. i like running in the park every friday because it is nice and my brother likes football. Also my uncle has a gym in riyadh and membership is expensive. Because exercise makes you healthy. in the sum, everyone must exercise.
            </p>
          </div>
          <div className="mt-3 text-xs text-red-900 font-arabic space-y-1">
            <strong>أسباب الفشل:</strong>
            <p>1. لا توجد مسافة بادئة (No indentation). 2. العنوان جملة كاملة بحروف صغيرة ونقطة. 3. انعدام الـ Unity (الحديث عن عمّه والاشتراك في الرياض!). 4. وجود جملة ناقصة (Fragment: Because exercise makes you healthy). 5. أخطاء Capitalization مع الضمير i وأسماء المدن. 6. خاتمة غير صحيحة (in the sum ❌ والصحيح In sum,).</p>
          </div>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-emerald-700 font-bold font-arabic mb-3">
            <Check className="w-5 h-5 bg-emerald-100 p-0.5 rounded-full" />
            <span>بارقراف سليم يحصل على الدرجة الكاملة (5 / 5)</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-200 font-mono text-xs text-slate-800 space-y-2">
            <div className="text-center font-bold text-emerald-900">The Benefits of Daily Exercise</div>
            <p className="text-justify leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Engaging in regular exercise provides three major advantages for adults. First, physical activity strengthens the cardiovascular system and prevents diseases. In addition, people who work out experience significantly higher energy levels throughout their busy days. For instance, walking briskly every morning improves stamina and concentration. Finally, regular workouts release beneficial endorphins that relieve daily stress. Overall, adopting a consistent fitness routine is vital for maintaining physical and mental well-being.
            </p>
          </div>
          <div className="mt-3 text-xs text-emerald-900 font-arabic space-y-1">
            <strong>عوامل النجاح التام:</strong>
            <p>1. مسافة بادئة دقيقة. 2. عنوان أكاديمي متوسط بدون نقطة. 3. Topic Sentence بها Topic + Controlling Idea واضحة. 4. وحدة موضوع تامة (Unity) وروابط تتابعية (First, In addition, Finally). 5. خاتمة قوية تبدأ بـ Overall,. 6. قواعد وترقيم سليم 100%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
