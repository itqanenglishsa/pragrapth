import React, { useState } from 'react';
import { BookOpen, Compass, Sparkles, Clock, Check, Copy, Layers, Flame, CheckCircle2 } from 'lucide-react';

export interface NarrativeElement {
  part: string;
  nameAr: string;
  definition: string;
  definitionAr: string;
  examples: string[];
  tipsAr: string;
}

export interface NarrativeModelStory {
  id: string;
  title: string;
  topic: string;
  fullText: string;
  topicSentence: string;
  background: string;
  risingAction: string[];
  climax: string;
  fallingAction: string;
  concludingSentence: string;
  moralLesson: string;
  timeTransitions: string[];
  pastVerbs: string[];
  explanationAr: string;
}

const NARRATIVE_THREE_PARTS = [
  {
    part: '1. The Beginning (البداية والتمهيد)',
    detailsEn: 'Contains the Topic Sentence with a hook, plus background information answering Who, Where, and When.',
    detailsAr: 'تتضمن الجملة الافتتاحية المشوقة، بالإضافة إلى معلومات تمهيدية تحدد الشخصيات، المكان، والزمان (Who, Where, When).'
  },
  {
    part: '2. The Middle (الوسط - تسلسل الأحداث والذروة)',
    detailsEn: 'Supporting sentences detailing the plot in chronological order using time transitions, culminating in the Climax.',
    detailsAr: 'الجمل الداعمة التي تسرد الأحداث خطوة بخطوة بالترتيب الزمني، وصولاً إلى ذروة القصة (Climax: أشد لحظة توتر أو إثارة).'
  },
  {
    part: '3. The End (النهاية والخاتمة)',
    detailsEn: 'The Concluding Sentence brings closure and reveals the moral, lesson learned, or lasting emotion.',
    detailsAr: 'الجملة الختامية التي تحل المشكلة وتكشف العبرة المستفادة (Moral / Lesson) أو النتيجة وتأثير الموقف على الكاتب.'
  }
];

const NARRATIVE_PARTS_DETAILS: NarrativeElement[] = [
  {
    part: 'Topic Sentence (الجملة الافتتاحية السردية)',
    nameAr: 'الجملة الافتتاحية مع عنصر الجذب (Hook)',
    definition: 'Introduces the story and sets the tone, giving a hint of the central conflict or feeling.',
    definitionAr: 'تبدأ بها القصة، وتحدد موضوع الحادثة والشعور العام (مخيف، مضحك، لا ينسى، صعب) لتجذب انتباه القارئ فوراً.',
    examples: [
      '"My first camping trip in the desert turned into an unforgettable adventure."',
      '"I will never forget the day I took my very first driving test."',
      '"Last summer, a sudden thunderstorm in the mountains taught me a valuable lesson about safety."'
    ],
    tipsAr: 'لا تبدأ بـ "I will tell you a story" ❌، بل ابدأ مباشرة بحدث قوي وشعور واضح ✔.'
  },
  {
    part: 'Background Information (المعلومات التمهيدية)',
    nameAr: 'تحديد الشخصيات والزمان والمكان',
    definition: 'Sets the scene by explaining Who was involved, Where it happened, and When it occurred.',
    definitionAr: 'تعطي القارئ السياق الأساسي: من كان معك؟ أين كنتم؟ ومتى حدث ذلك بالضبط قبل الدخول في المشكلة.',
    examples: [
      '"It was a freezing Friday evening in January when my brother and I packed our tents."',
      '"We were sitting in a quiet café in Makkah after completing our afternoon prayers."'
    ],
    tipsAr: 'تأكد من استخدام أفعال الماضي البسيط (was, were, decided, arrived).'
  },
  {
    part: 'Chronological Events & Transitions (تسلسل الأحداث الزمني)',
    nameAr: 'الأحداث المتسلسلة وروابط الوقت',
    definition: 'The body events narrated step-by-step using clear chronological time transitions.',
    definitionAr: 'سرد الأحداث بترتيب حدوثها في الواقع دون القفز بين الأزمنة، مع استخدام كلمات الربط الزمنية الإلزامية.',
    examples: [
      '"At first, everything was peaceful as we drove along the desert road."',
      '"Suddenly, a loud banging noise came from the front engine."',
      '"After that, we pulled over and realized we had a flat tire in the middle of nowhere."'
    ],
    tipsAr: 'ضع فاصلة (,) دائماً بعد الكلمات الانتقالية الزمنية (At first, / Suddenly, / After that, / Meanwhile,).'
  },
  {
    part: 'The Climax (ذروة القصة والتشويق)',
    nameAr: 'الذروة ونقطة التحول (The Turning Point)',
    definition: 'The most intense, exciting, or dangerous moment in the story where the conflict peaks.',
    definitionAr: 'أخطر أو أهم أو أطرف لحظة في الموقف، وهي اللحظة التي ينتظر القارئ معرفة كيف ستنتهي.',
    examples: [
      '"Just as darkness fell, two wild wolves emerged from behind the rocks."',
      '"My heart raced as the examiner slammed on the emergency brakes right before the intersection."'
    ],
    tipsAr: 'استخدم لغة وصفية دقيقة (Sensory Words) تصف الرعب أو المفاجأة.'
  },
  {
    part: 'Concluding Sentence & Lesson Learned (الخاتمة والعبرة المستفادة)',
    nameAr: 'الحل والعبرة المستفادة (The Moral)',
    definition: 'Resolves the story and states what the writer learned or how they changed because of this experience.',
    definitionAr: 'توضح كيف انتهى الموقف وما هو الدرس أو الحكمة التي خرجت بها من هذه التجربة.',
    examples: [
      '"In the end, that scary night taught me to always respect the unpredictable power of nature."',
      '"Overall, failing my first test made me a much more patient and careful driver today."'
    ],
    tipsAr: 'البارقراف السردي الناجح ينتهي دائماً بعبرة أو شعور دائم (Moral / Reflection).'
  }
];

const NARRATIVE_TIME_TRANSITIONS = [
  { group: 'بداية القصة (Beginning)', words: ['At first,', 'In the beginning,', 'One morning,', 'To begin with,', 'Initially,'] },
  { group: 'تتابع الأحداث (Middle Sequence)', words: ['Then,', 'Next,', 'Soon after,', 'After that,', 'A few minutes later,', 'Meanwhile,'] },
  { group: 'المفاجأة وتغير الأحداث (Sudden Turning)', words: ['Suddenly,', 'All of a sudden,', 'Unexpectedly,', 'Just then,', 'Without warning,'] },
  { group: 'النهاية والحل (Resolution & End)', words: ['Finally,', 'Eventually,', 'In the end,', 'After all that,', 'Ultimately,'] }
];

const NARRATIVE_MODEL_STORIES: NarrativeModelStory[] = [
  {
    id: 'story1',
    title: 'A Scary Night in the Desert',
    topic: 'An unexpected desert encounter (مغامرة غير متوقعة في الصحراء)',
    topicSentence: 'My first camping trip in the desert turned into a terrifying experience that I will never forget.',
    background: 'Two years ago, my cousin Sami and I decided to camp near the red sand dunes outside Riyadh on a windy November evening.',
    risingAction: [
      'At first, everything was enjoyable as we set up our green tent and cooked dinner over the campfire.',
      'Soon after midnight, the temperature dropped drastically, and a heavy sandstorm began to shake our tent violently.'
    ],
    climax: 'Suddenly, a loud tearing sound echoed outside, and the strong winds ripped our tent poles out of the sand, leaving us completely exposed in the freezing dark.',
    fallingAction: 'Fortunately, we quickly grabbed our backpacks and ran toward our car, locking ourselves safely inside until sunrise.',
    concludingSentence: 'In the end, that scary night taught me to always check the weather forecast carefully before venturing into the open desert.',
    moralLesson: 'Always check weather forecasts and prepare for sudden desert hazards.',
    timeTransitions: ['Two years ago,', 'At first,', 'Soon after midnight,', 'Suddenly,', 'Fortunately,', 'In the end,'],
    pastVerbs: ['turned', 'decided', 'was', 'set up', 'cooked', 'dropped', 'began', 'echoed', 'ripped', 'grabbed', 'ran', 'taught'],
    fullText: '   My first camping trip in the desert turned into a terrifying experience that I will never forget. Two years ago, my cousin Sami and I decided to camp near the red sand dunes outside Riyadh on a windy November evening. At first, everything was enjoyable as we set up our green tent and cooked dinner over the campfire. Soon after midnight, the temperature dropped drastically, and a heavy sandstorm began to shake our tent violently. Suddenly, a loud tearing sound echoed outside, and the strong winds ripped our tent poles out of the sand, leaving us completely exposed in the freezing dark. Fortunately, we quickly grabbed our backpacks and ran toward our car, locking ourselves safely inside until sunrise. In the end, that scary night taught me to always check the weather forecast carefully before venturing into the open desert.',
    explanationAr: 'هذا نموذج سردي أكاديمي مثالي: يبدأ بمسافة بادئة، جملة افتتاحية ذات أثر نفسي قوي، ترتيب زمني متصاعد بكلمات انتقالية، ذروة مشوقة (Climax) عند تمزق الخيمة، وخاتمة بعبرة مستفادة تبدأ بـ In the end.'
  },
  {
    id: 'story2',
    title: 'My Unforgettable Driving Test',
    topic: 'Passing a stressful driving examination (تجربة اختبار القيادة)',
    topicSentence: 'Taking my first driver\'s license test was the most nerve-wracking challenge of my teenage years.',
    background: 'Last October, I arrived at the traffic department early in the morning with sweaty palms and a racing heart.',
    risingAction: [
      'First, the stern examiner sat beside me with a large clipboard and instructed me to reverse out of a tight parking space.',
      'Next, I drove onto the busy highway, carefully checking my mirrors and maintaining the exact speed limit.'
    ],
    climax: 'At that moment, a reckless delivery motorcycle suddenly cut right in front of my car, forcing me to brake immediately without hitting him.',
    fallingAction: 'I held my breath in panic, expecting to fail instantly, but the examiner looked at me, smiled, and praised my fast reflexes.',
    concludingSentence: 'Overall, passing that intense test proved to me that staying calm under pressure is the secret to overcoming great fears.',
    moralLesson: 'Staying calm and focused under sudden stress leads to success.',
    timeTransitions: ['Last October,', 'First,', 'Next,', 'At that moment,', 'Overall,'],
    pastVerbs: ['was', 'arrived', 'sat', 'instructed', 'drove', 'checked', 'cut', 'forced', 'held', 'smiled', 'praised', 'proved'],
    fullText: '   Taking my first driver\'s license test was the most nerve-wracking challenge of my teenage years. Last October, I arrived at the traffic department early in the morning with sweaty palms and a racing heart. First, the stern examiner sat beside me with a large clipboard and instructed me to reverse out of a tight parking space. Next, I drove onto the busy highway, carefully checking my mirrors and maintaining the exact speed limit. At that moment, a reckless delivery motorcycle suddenly cut right in front of my car, forcing me to brake immediately without hitting him. I held my breath in panic, expecting to fail instantly, but the examiner looked at me, smiled, and praised my fast reflexes. Overall, passing that intense test proved to me that staying calm under pressure is the secret to overcoming great fears.',
    explanationAr: 'نموذج سردي رائع يصف صراعاً واقعياً ولحظة ذروة مشحونة، مع استخدام أفعال ماضية قوية وخاتمة تلخص الحكمة الشخصية.'
  }
];

export const NarrativeSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<NarrativeModelStory>(NARRATIVE_MODEL_STORIES[0]);
  const [highlightMode, setHighlightMode] = useState<'all' | 'topic' | 'climax' | 'concluding'>('all');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedStory.title + '\n\n' + selectedStory.fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Comparison: Narrative vs. Explanatory */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-lg font-bold font-arabic text-slate-900 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-600" />
          الفرق بين البارقراف السردي (Narrative) والبارقراف التوضيحي (Explanatory)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-arabic">
          <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 space-y-2">
            <span className="font-bold text-sm text-purple-950 font-sans block">📖 Narrative Paragraph (السردي)</span>
            <ul className="space-y-1.5 text-slate-700">
              <li>• <strong>الهدف:</strong> سرد قصة أو تجربة واقعية حدثت في الماضي للمتعة واستخلاص عبرة.</li>
              <li>• <strong>الترتيب:</strong> زمني بحت (Chronological Order: من البداية حتى النهاية).</li>
              <li>• <strong>الأزمنة:</strong> أفعال الماضي (Simple Past & Past Progressive: arrived, was driving).</li>
              <li>• <strong>البنية:</strong> مقدمة تحدد الزمان والمكان ➔ أحداث متصاعدة ➔ ذروة (Climax) ➔ عبرة وخاتمة.</li>
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="font-bold text-sm text-slate-800 font-sans block">💡 Explanatory Paragraph (التوضيحي)</span>
            <ul className="space-y-1.5 text-slate-600">
              <li>• <strong>الهدف:</strong> شرح فكرة، تقديم أسباب (Reasons for Exercise) أو وصف مكان.</li>
              <li>• <strong>الترتيب:</strong> ترتيب منطقي للأفكار والأهمية (Order of importance).</li>
              <li>• <strong>الأزمنة:</strong> المضارع البسيط في الغالب (Simple Present: helps, offers, is).</li>
              <li>• <strong>البنية:</strong> Topic Sentence ➔ 3 أسباب بحقائق وأمثلة ➔ خاتمة بإعادة الصياغة أو نصيحة.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 3 Core Parts */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold font-arabic text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          الأجزاء الثلاثة الأساسية لتكوين البارقراف السردي (Parts of a Narrative)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {NARRATIVE_THREE_PARTS.map((p, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200 inline-block font-mono">
                {p.part}
              </span>
              <p className="text-xs font-semibold text-slate-800 font-arabic leading-relaxed">
                {p.detailsAr}
              </p>
              <p className="text-[11px] text-slate-500 font-sans italic border-t border-slate-100 pt-2">
                {p.detailsEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Elements Deep Dive */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-bold font-arabic text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600" />
          عناصر البارقراف السردي الخمسة بالتفصيل (Great Writing 2 Unit 9)
        </h3>
        <div className="divide-y divide-slate-100 text-xs">
          {NARRATIVE_PARTS_DETAILS.map((el: NarrativeElement, i: number) => (
            <div key={i} className="py-3.5 first:pt-0 last:pb-0 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-[10px]">
                  {i + 1}
                </span>
                <span className="font-bold text-slate-900 text-sm font-sans">{el.part}</span>
                <span className="text-purple-800 bg-purple-50 px-2 py-0.5 rounded-sm font-arabic font-semibold">
                  {el.nameAr}
                </span>
              </div>
              <p className="text-slate-600 font-arabic">{el.definitionAr}</p>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-serif text-[11px] text-purple-950 space-y-1">
                {el.examples.map((ex: string, exIdx: number) => (
                  <div key={exIdx} className="bg-white p-1 rounded-sm border border-slate-100">
                    {ex}
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-amber-800 bg-amber-50 p-1.5 rounded-md font-arabic font-medium">
                💡 نصيحة المصحح: {el.tipsAr}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Transitions */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold font-arabic text-white">
              روابط الوقت والترتيب الزمني الإلزامية في السرد (Time Transitions)
            </h3>
          </div>
          <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-arabic">
            تتبعها فاصلة (,) دائماً
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {NARRATIVE_TIME_TRANSITIONS.map((grp, gIdx: number) => (
            <div key={gIdx} className="bg-white/10 p-3 rounded-xl border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-300 font-arabic block border-b border-white/10 pb-1">
                {grp.group}
              </span>
              <div className="flex flex-wrap gap-1">
                {grp.words.map((w: string, wIdx: number) => (
                  <span key={wIdx} className="px-1.5 py-0.5 bg-white/15 text-white font-mono text-[10px] rounded-sm font-semibold">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grammar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
        <h3 className="text-lg font-bold font-arabic text-slate-900 flex items-center gap-2">
          <Flame className="w-5 h-5 text-rose-600" />
          قواعد القواعد اللغوية في السرد: الماضي البسيط مقابل الماضي المستمر (Unit 9 p.164)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-arabic">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 text-sm block">الماضي البسيط (Simple Past)</span>
            <p className="text-slate-600">للأحداث المكتملة المتتالية في القصة:</p>
            <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-emerald-800 space-y-1">
              <div>• We <span className="font-bold underline">arrived</span> at the camp. (+ed)</div>
              <div>• Sami <span className="font-bold underline">saw</span> a wolf. (see ➔ saw)</div>
              <div>• I <span className="font-bold underline">ran</span> to the car. (run ➔ ran)</div>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <span className="font-bold text-slate-900 text-sm block">الماضي المستمر (Past Progressive)</span>
            <p className="text-slate-600">لحدث كان مستمراً فقاطعه حدث مفاجئ (was/were + v-ing):</p>
            <div className="bg-white p-2 rounded-md border font-mono text-[11px] text-purple-900 space-y-1">
              <div>• <span className="font-bold">While</span> we <span className="underline">were driving</span>, a tire exploded.</div>
              <div>• It <span className="underline">was raining</span> when the tent tore apart.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Stories */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 font-sans">{selectedStory.title}</h3>
              <span className="text-xs bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded-full">
                Narrative Model
              </span>
            </div>
            <p className="text-xs text-slate-500 font-arabic mt-0.5">{selectedStory.topic}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHighlightMode(highlightMode === 'all' ? 'climax' : 'all')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-xs font-arabic cursor-pointer hover:bg-slate-50"
            >
              {highlightMode === 'climax' ? 'عرض الكل' : 'تمييز ذروة القصة (Climax)'}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="font-arabic">{copied ? 'تم النسخ' : 'نسخ القصة'}</span>
            </button>
          </div>
        </div>

        {/* Story Selector */}
        <div className="flex gap-2 p-3 bg-purple-50/40 border-b border-purple-100 overflow-x-auto">
          {NARRATIVE_MODEL_STORIES.map((s: NarrativeModelStory) => (
            <button
              key={s.id}
              onClick={() => setSelectedStory(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedStory.id === s.id
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-8 bg-amber-50/20">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-amber-200/70 font-serif leading-loose text-slate-800 text-sm sm:text-base text-justify">
            <div className="text-center font-bold text-lg sm:text-xl text-slate-900 mb-4 pb-2 border-b border-slate-100 font-sans">
              {selectedStory.title}
            </div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="bg-emerald-100 font-medium px-0.5 rounded-xs">{selectedStory.topicSentence}</span>{' '}
              <span className="text-slate-800">{selectedStory.background}</span>{' '}
              <span className="text-slate-800">{selectedStory.risingAction.join(' ')}</span>{' '}
              <span className={`px-0.5 rounded-xs transition-colors ${highlightMode === 'climax' ? 'bg-rose-200 font-bold ring-2 ring-rose-400' : 'bg-rose-50'}`}>
                {selectedStory.climax}
              </span>{' '}
              <span className="text-slate-800">{selectedStory.fallingAction}</span>{' '}
              <span className="bg-amber-100 font-medium px-0.5 rounded-xs">{selectedStory.concludingSentence}</span>
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-4 text-xs font-arabic bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-800 block">العبرة المستفادة (The Moral):</span>
            <p className="text-purple-900 font-semibold">"{selectedStory.moralLesson}"</p>
            <p className="text-slate-600 leading-relaxed">{selectedStory.explanationAr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
