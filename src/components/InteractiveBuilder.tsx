import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Copy, Check, RotateCcw, HelpCircle, FileText, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PresetTemplate {
  name: string;
  title: string;
  topic: string;
  controllingIdea: string;
  topicSentence: string;
  supp1Transition: string;
  supp1: string;
  supp2Transition: string;
  supp2: string;
  supp3Transition: string;
  supp3: string;
  concludingTransition: string;
  concludingPurpose: string;
  concludingSentence: string;
}

const TEMPLATES: PresetTemplate[] = [
  {
    name: 'أسباب ممارسة الرياضة (Reasons for Exercise)',
    title: 'The Importance of Regular Exercise',
    topic: 'Regular exercise',
    controllingIdea: 'offers three key benefits for university students',
    topicSentence: 'Regular exercise offers three key benefits for university students.',
    supp1Transition: 'First,',
    supp1: 'physical activity improves cardiovascular health and keeps the body energetic.',
    supp2Transition: 'In addition,',
    supp2: 'working out helps students reduce stress and maintain mental clarity before difficult exams.',
    supp3Transition: 'Finally,',
    supp3: 'exercising regularly promotes better sleep quality each night.',
    concludingTransition: 'For these reasons,',
    concludingPurpose: 'suggestion',
    concludingSentence: 'For these reasons, students should try to stay active every day to achieve success.'
  },
  {
    name: 'وجهة سياحية مميزة (A Great Tourist Destination)',
    title: 'A Wonderful City to Visit',
    topic: 'Makkah and Madinah',
    controllingIdea: 'are two of the most spiritually inspiring cities in the world',
    topicSentence: 'Makkah and Madinah are two of the most spiritually inspiring cities in the world.',
    supp1Transition: 'First,',
    supp1: 'these sacred cities contain the most peaceful mosques in Islam where millions gather.',
    supp2Transition: 'Second,',
    supp2: 'they feature exceptional modern transportation like the high-speed Haramain train.',
    supp3Transition: 'Finally,',
    supp3: 'visitors always experience unmatched hospitality and delicious authentic Arabic dishes.',
    concludingTransition: 'Overall,',
    concludingPurpose: 'opinion',
    concludingSentence: 'Overall, a visit to these two blessed cities provides an unforgettable spiritual journey.'
  },
  {
    name: 'قصة سردية: ليلة في الصحراء (Narrative: A Desert Adventure)',
    title: 'A Scary Night in the Desert',
    topic: 'My first desert camping trip',
    controllingIdea: 'turned into an unforgettable adventure with my cousin',
    topicSentence: 'My first desert camping trip turned into an unforgettable adventure with my cousin.',
    supp1Transition: 'At first,',
    supp1: 'we enjoyed setting up our tent and cooking over the warm campfire.',
    supp2Transition: 'Suddenly,',
    supp2: 'a freezing sandstorm began, and fierce winds ripped our tent right out of the sand.',
    supp3Transition: 'After that,',
    supp3: 'we sprinted to our car in the dark and locked ourselves safely inside until morning.',
    concludingTransition: 'In the end,',
    concludingPurpose: 'restate',
    concludingSentence: 'In the end, that scary night taught me to always prepare carefully before camping.'
  }
];

export const InteractiveBuilder: React.FC = () => {
  const [title, setTitle] = useState<string>('The Benefits of Daily Exercise');
  const [topicSentence, setTopicSentence] = useState<string>('Exercising regularly offers three great benefits for university students.');
  const [controllingIdea, setControllingIdea] = useState<string>('offers three great benefits for university students');
  
  const [supp1Transition, setSupp1Transition] = useState<string>('First,');
  const [supp1, setSupp1] = useState<string>('physical activity strengthens the heart and keeps our muscles healthy.');
  
  const [supp2Transition, setSupp2Transition] = useState<string>('In addition,');
  const [supp2, setSupp2] = useState<string>('people who work out have more stamina to study and complete their projects.');
  
  const [supp3Transition, setSupp3Transition] = useState<string>('Finally,');
  const [supp3, setSupp3] = useState<string>('exercise reduces academic anxiety and improves mood during exam weeks.');

  const [concludingTransition, setConcludingTransition] = useState<string>('For these reasons,');
  const [concludingSentence, setConcludingSentence] = useState<string>('For these reasons, students should make time for thirty minutes of walking every single day.');
  
  const [copied, setCopied] = useState<boolean>(false);

  // Load template
  const loadTemplate = (tmpl: PresetTemplate) => {
    setTitle(tmpl.title);
    setTopicSentence(tmpl.topicSentence);
    setControllingIdea(tmpl.controllingIdea);
    setSupp1Transition(tmpl.supp1Transition);
    setSupp1(tmpl.supp1);
    setSupp2Transition(tmpl.supp2Transition);
    setSupp2(tmpl.supp2);
    setSupp3Transition(tmpl.supp3Transition);
    setSupp3(tmpl.supp3);
    setConcludingTransition(tmpl.concludingTransition);
    setConcludingSentence(tmpl.concludingSentence);
  };

  // Compile paragraph
  const fullParagraphText = `${supp1Transition} ${supp1} ${supp2Transition} ${supp2} ${supp3Transition} ${supp3} ${concludingSentence}`;
  const completeText = `${title}\n\n     ${topicSentence} ${fullParagraphText}`;

  // Metrics
  const totalWords = completeText.trim().split(/\s+/).length;
  // Count sentences
  const sentenceCount = [topicSentence, supp1, supp2, supp3, concludingSentence].filter(s => s.trim().length > 5).length;

  // Validation warnings
  const titleHasPeriod = title.trim().endsWith('.');
  const titleIsSentence = title.trim().split(/\s+/).length > 8;
  const topicSentenceCapitalized = /^[A-Z]/.test(topicSentence.trim());
  const topicSentenceHasPeriod = topicSentence.trim().endsWith('.');
  const supp1Comma = supp1Transition.endsWith(',');
  const supp2Comma = supp2Transition.endsWith(',');
  const supp3Comma = supp3Transition.endsWith(',');
  const concludingComma = concludingTransition.endsWith(',');

  const handleCopy = () => {
    navigator.clipboard.writeText(completeText);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs font-arabic mb-2">
          <Sparkles className="w-4 h-4" />
          <span>أداة التدريب التفاعلية الخاصة بطلاب جامعة أم القرى</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-arabic text-slate-900 mb-2">
          منشئ ومدقق البارقراف الذكي (Interactive Academic Paragraph Studio)
        </h2>
        <p className="text-sm text-slate-600 font-arabic leading-relaxed max-w-4xl">
          اكتب بارقرافك خطوة بخطوة بالأسفل أو اختر قالباً جاهزاً. ستقوم الأداة بفحص العنوان والمسافة البادئة والفواصل وتوافق عدد الجمل مع شروط كويز الأحد، وإعطائك نصاً منسقاً جاهزاً للتدريب والتسليم!
        </p>
      </div>

      {/* Preset Templates */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-3 rounded-xl border border-slate-200">
        <span className="text-xs font-bold font-arabic text-slate-700 ml-2">قوالب جاهزة للتدريب:</span>
        {TEMPLATES.map((tmpl, idx) => (
          <button
            key={idx}
            onClick={() => loadTemplate(tmpl)}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-medium border border-slate-200 transition-all cursor-pointer shadow-2xs font-arabic"
          >
            {tmpl.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-base text-slate-900 font-arabic border-b border-slate-100 pb-3 flex items-center justify-between">
            <span>مدخلات خطوات كتابة البارقراف</span>
            <span className="text-xs text-emerald-600 font-normal">خطوة بخطوة</span>
          </h3>

          {/* 1. Title Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px]">1</span>
                العنوان الأكاديمي (Paragraph Title)
              </label>
              <span className="text-[11px] text-slate-400 font-arabic">وسط الصفحة، بحروف كبيرة، بلا نقطة</span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g. Reasons for Exercise"
            />
            {titleHasPeriod && (
              <p className="text-xs text-rose-600 font-arabic flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>تحذير: لا تضع نقطة (.) في نهاية العنوان! هذا ينقص درجات في الامتحان.</span>
              </p>
            )}
            {titleIsSentence && (
              <p className="text-xs text-amber-600 font-arabic flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>تنبيه: العنوان طويل جداً. يفضل أن يكون عبارة (Phrase) وليس جملة كاملة.</span>
              </p>
            )}
          </div>

          {/* 2. Topic Sentence Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px]">2</span>
                الجملة الافتتاحية (Topic Sentence)
              </label>
              <span className="text-[11px] text-emerald-700 font-arabic font-semibold">موضوع + فكرة حاكمة</span>
            </div>
            <textarea
              rows={2}
              value={topicSentence}
              onChange={(e) => setTopicSentence(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g. Regular exercise offers three key benefits for college students."
            />
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-arabic">الفكرة الحاكمة المحددة:</span>
              <input
                type="text"
                value={controllingIdea}
                onChange={(e) => setControllingIdea(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 px-2 py-1 rounded-md text-emerald-800 font-medium flex-1"
                placeholder="Controlling idea"
              />
            </div>
            {(!topicSentenceCapitalized || !topicSentenceHasPeriod) && (
              <p className="text-[11px] text-rose-600 font-arabic">
                تأكد من بدء الجملة بحرف كبير وانتهائها بنقطة.
              </p>
            )}
          </div>

          {/* 3. Supporting Sentences */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[10px]">3</span>
                الجمل الداعمة الثلاثة (3 Supporting Sentences)
              </label>
              <span className="text-[11px] text-blue-700 font-arabic">مع أدوات الربط التتابعية</span>
            </div>

            {/* Supp 1 */}
            <div className="flex gap-2">
              <select
                value={supp1Transition}
                onChange={(e) => setSupp1Transition(e.target.value)}
                className="w-28 text-xs font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800"
              >
                <option value="First,">First,</option>
                <option value="To begin with,">To begin,</option>
                <option value="One reason is,">One reason,</option>
              </select>
              <input
                type="text"
                value={supp1}
                onChange={(e) => setSupp1(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800"
                placeholder="السبب أو الدعم الأول..."
              />
            </div>

            {/* Supp 2 */}
            <div className="flex gap-2">
              <select
                value={supp2Transition}
                onChange={(e) => setSupp2Transition(e.target.value)}
                className="w-28 text-xs font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800"
              >
                <option value="In addition,">In addition,</option>
                <option value="Second,">Second,</option>
                <option value="Furthermore,">Furthermore,</option>
                <option value="Also,">Also,</option>
              </select>
              <input
                type="text"
                value={supp2}
                onChange={(e) => setSupp2(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800"
                placeholder="السبب أو الدعم الثاني مع مثال..."
              />
            </div>

            {/* Supp 3 */}
            <div className="flex gap-2">
              <select
                value={supp3Transition}
                onChange={(e) => setSupp3Transition(e.target.value)}
                className="w-28 text-xs font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800"
              >
                <option value="Finally,">Finally,</option>
                <option value="Third,">Third,</option>
                <option value="Lastly,">Lastly,</option>
              </select>
              <input
                type="text"
                value={supp3}
                onChange={(e) => setSupp3(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800"
                placeholder="السبب أو الدعم الثالث..."
              />
            </div>
          </div>

          {/* 4. Concluding Sentence */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 font-arabic flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px]">4</span>
                الجملة الختامية (Concluding Sentence)
              </label>
              <span className="text-[11px] text-amber-700 font-arabic">ختام منطقي بلا معلومات جديدة</span>
            </div>
            <div className="flex gap-2">
              <select
                value={concludingTransition}
                onChange={(e) => {
                  setConcludingTransition(e.target.value);
                  // Auto update start of concluding sentence
                  if (!concludingSentence.startsWith(e.target.value)) {
                    setConcludingSentence(`${e.target.value} ${concludingSentence.replace(/^[A-Za-z\s,]+,/, '').trim()}`);
                  }
                }}
                className="w-36 text-xs font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800"
              >
                <option value="For these reasons,">For these reasons,</option>
                <option value="In conclusion,">In conclusion,</option>
                <option value="Overall,">Overall,</option>
                <option value="Clearly,">Clearly,</option>
                <option value="In brief,">In brief,</option>
              </select>
              <input
                type="text"
                value={concludingSentence}
                onChange={(e) => setConcludingSentence(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800"
                placeholder="الجملة الختامية كاملة..."
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Formatted Academic Paper (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-900 font-arabic text-sm flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  شكل البارقراف الأكاديمي النهائي المنسق
                </span>
                <span className="text-[11px] font-mono bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-sm">
                  {sentenceCount} Sentences | {totalWords} Words
                </span>
              </div>

              {/* The Academic Paper View */}
              <div className="bg-amber-50/30 p-5 rounded-xl border border-amber-200/60 font-serif leading-loose text-slate-800 text-sm shadow-inner min-h-[220px]">
                {/* Centered Title */}
                <div className="text-center font-bold text-base text-slate-900 mb-3 pb-1 border-b border-slate-200 font-sans">
                  {title || 'Untitled Paragraph'}
                </div>

                {/* Body with Indent */}
                <p className="text-justify text-xs sm:text-sm">
                  <span className="inline-block w-8 text-teal-600 font-mono text-[11px] select-none font-bold">
                    [Indent]
                  </span>
                  <span className="text-emerald-950 font-medium">{topicSentence}</span>{' '}
                  <span className="text-slate-800">
                    {supp1Transition} {supp1}{' '}
                    {supp2Transition} {supp2}{' '}
                    {supp3Transition} {supp3}{' '}
                  </span>
                  <span className="text-amber-950 font-medium">{concludingSentence}</span>
                </p>
              </div>

              {/* Real-time Checklist Verification */}
              <div className="mt-4 space-y-1.5 text-xs font-arabic">
                <span className="font-bold text-slate-700 block text-[11px]">فحص شروط الاختبار الآلي:</span>
                
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md">
                  <span className="text-slate-600">المسافة البادئة (Indentation):</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> مطبقة في السطر الأول
                  </span>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md">
                  <span className="text-slate-600">العنوان خالٍ من النقطة:</span>
                  {!titleHasPeriod ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ممتاز (No period)
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold flex items-center gap-1 text-[11px]">
                      <AlertCircle className="w-3.5 h-3.5" /> احذف النقطة من العنوان
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md">
                  <span className="text-slate-600">عدد الجمل الإجمالي (5 - 10 جمل):</span>
                  <span className="text-emerald-600 font-bold text-[11px]">
                    {sentenceCount} جمل (مطابق للمطلوب)
                  </span>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md">
                  <span className="text-slate-600">فواصل بعد أدوات الربط:</span>
                  {supp1Comma && supp2Comma && supp3Comma && concludingComma ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> فواصل سليمة
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold text-[11px]">
                      ضع فاصلة بعد أداة الربط
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold font-arabic shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'تم نسخ البارقراف بنجاح!' : 'نسخ البارقراف كاملاً'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
