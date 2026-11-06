import React from 'react';
import { COURSE_INFO, FOUR_GOLDEN_FEATURES, COMMA_RULES } from '../data/quizData';

export const PrintCheatSheet: React.FC = () => {
  return (
    <div className="print-only hidden p-8 bg-white text-slate-900 font-sans text-xs">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center">
        <h1 className="text-xl font-bold font-arabic mb-1">
          بطاقة المراجعة المركزة لكويز الكتابة (ELIE1201 Writing Cheat-Sheet)
        </h1>
        <p className="text-slate-600 font-arabic text-xs">
          جامعة أم القرى - معهد اللغة الإنجليزية | كويز الأحد | مراجع: Great Writing 2 & Evolve 2
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Section 1: 4 Golden Features */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            1. الشروط الأربعة للفقرة الأكاديمية الممتازة:
          </h2>
          <ol className="list-decimal list-inside space-y-1 font-arabic">
            <li><strong>المسافة البادئة (Indentation):</strong> مسافة 5 أحرف في السطر الأول فقط.</li>
            <li><strong>Topic Sentence:</strong> جملة افتتاحية بها الموضوع + الفكرة الحاكمة (Controlling Idea).</li>
            <li><strong>Paragraph Unity:</strong> كل الجمل الداعمة تدعم الفكرة الحاكمة دون أي جملة دخيلة.</li>
            <li><strong>Concluding Sentence:</strong> جملة ختامية منطقية تبدأ بأداة انتقال متبوعة بفاصلة.</li>
          </ol>
        </div>

        {/* Section 2: Title Rules */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            2. قواعد العنوان الأكاديمي (Title Rules):
          </h2>
          <ul className="list-disc list-inside space-y-1 font-arabic">
            <li>يكتب في منتصف السطر العلوي (Centered).</li>
            <li>يبدأ كل لفظ رئيسي بحرف كبير (Capital Letters).</li>
            <li>عبارة وليس جملة كاملة (Not a sentence).</li>
            <li><strong>تحذير قطعي:</strong> لا تضع نقطة (.) في نهاية العنوان أبداً!</li>
          </ul>
        </div>

        {/* Section 3: Topic Sentence Formula */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            3. معادلة الجملة الافتتاحية (Topic Sentence Formula):
          </h2>
          <p className="font-mono font-bold text-xs bg-slate-100 p-1.5 rounded-sm text-center mb-1.5">
            Topic Sentence = Topic + Controlling Idea
          </p>
          <ul className="space-y-1 font-arabic text-[11px]">
            <li>• لا تجعلها عامة جداً (مثل: Tea is delicious ❌).</li>
            <li>• لا تجعلها حقيقة ميتة (مثل: Libraries have books ❌).</li>
            <li>• اجعلها قابلة للشرح (مثل: Green tea has many health benefits ✔).</li>
          </ul>
        </div>

        {/* Section 4: Concluding Sentence 4 Purposes */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            4. الأغراض الأربعة للجملة الختامية:
          </h2>
          <ul className="space-y-1 font-arabic text-[11px]">
            <li>1. <strong>Restate main idea:</strong> In conclusion, exercise improves health.</li>
            <li>2. <strong>Offer a suggestion:</strong> For these reasons, you should exercise daily.</li>
            <li>3. <strong>Give an opinion:</strong> Overall, I believe exercise is vital.</li>
            <li>4. <strong>Make a prediction:</strong> Thus, people who exercise will live healthier.</li>
          </ul>
        </div>

        {/* Section 5: Four Comma Rules */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            5. قواعد الفواصل الأربعة (The 4 Comma Rules):
          </h2>
          <ul className="space-y-1 font-arabic text-[11px]">
            <li>1. <strong>القوائم (3+ items):</strong> apples, oranges, and bananas.</li>
            <li>2. <strong>الجمل المركبة (FANBOYS):</strong> I studied, but I felt tired.</li>
            <li>3. <strong>الكلمات الانتقالية:</strong> First, In addition, However, Overall,</li>
            <li>4. <strong>عبارات الظرف في البداية:</strong> Because it rained, we stayed.</li>
          </ul>
        </div>

        {/* Section 6: Three Fatal Errors */}
        <div className="border border-slate-300 p-3 rounded-lg">
          <h2 className="font-bold text-sm font-arabic border-b border-slate-200 pb-1 mb-2">
            6. الأخطاء القاتلة الثلاثة (Fatal Errors):
          </h2>
          <ul className="space-y-1 font-arabic text-[11px]">
            <li>• <strong>Fragment:</strong> جملة ناقصة (Because he was sick. ❌)</li>
            <li>• <strong>Run-on:</strong> جملتان مدموجتان بلا ترقيم (I slept I woke up. ❌)</li>
            <li>• <strong>Comma Splice:</strong> جملتان مربوطتان بفاصلة فقط دون and/so (I slept, I woke up. ❌)</li>
          </ul>
        </div>
      </div>

      {/* Model Outline at bottom */}
      <div className="mt-4 border border-purple-300 bg-purple-50/40 p-3 rounded-lg font-arabic">
        <h3 className="font-bold text-xs text-purple-950 mb-1">
          7. قواعد البارقراف السردي (Narrative Paragraph - Great Writing 2 Unit 9):
        </h3>
        <p className="text-[11px] leading-relaxed text-slate-800">
          • <strong>الترتيب الزمني (Chronological Order):</strong> تسلسل زمني من البداية ➔ الأحداث ➔ لحظة الذروة (Climax) ➔ الحل والعبرة (Moral/Lesson).
          <br />
          • <strong>الأزمنة:</strong> أفعال الماضي البسيط والماضي المستمر (Simple Past & Past Progressive: arrived, while we were driving).
          <br />
          • <strong>روابط الوقت:</strong> (At first, / Soon after, / Suddenly, / Meanwhile, / In the end,).
        </p>
      </div>

      <div className="mt-2 border border-slate-300 p-2.5 rounded-lg font-arabic text-[11px]">
        <h3 className="font-bold text-xs mb-0.5">الهيكل الأكاديمي النموذجي (5 إلى 10 جمل):</h3>
        <p className="leading-relaxed">
          [Title in Center] ➔ [Indent 5 spaces] + [Topic Sentence with Hook] + [Chronological Supporting Events + Time Transitions] + [The Climax] + [Concluding Sentence with Moral/Lesson].
        </p>
      </div>
    </div>
  );
};
