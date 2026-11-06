export interface QuizUnit {
  unitNumber: number;
  title: string;
  book: 'Great Writing 2' | 'Evolve 2' | 'Both';
  pages?: string;
  activities: string;
  objectives: string[];
  keyRules: string[];
  importance: 'critical' | 'high' | 'medium';
}

export interface ModelParagraph {
  id: string;
  title: string;
  topic: string;
  type: string;
  text: string;
  topicSentence: string;
  controllingIdea: string;
  supportingSentences: string[];
  concludingSentence: string;
  concludingType: 'restate' | 'suggestion' | 'opinion' | 'prediction';
  transitionsUsed: string[];
  analysisArabic: string;
}

export interface QuizQuestion {
  id: number;
  category: 'Topic Sentence' | 'Controlling Idea' | 'Grammar' | 'Punctuation' | 'Sentence Types' | 'Paragraph Unity' | 'Errors';
  question: string;
  questionArabic: string;
  options: string[];
  correctAnswerIndex: number;
  explanationEnglish: string;
  explanationArabic: string;
  ruleTag: string;
}

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

export const NARRATIVE_DEFINITION = {
  titleEn: 'What Is a Narrative Paragraph?',
  titleAr: 'ما هو البارقراف السردي (القصصي)؟',
  definitionEn: 'A narrative paragraph tells a story about an event, experience, or sequence of actions that happened in the past. It organizes events in strict chronological order (time order from beginning to end) and reveals why this moment was meaningful, scary, funny, or memorable.',
  definitionAr: 'البارقراف السردي (Narrative Paragraph) هو فقرة تحكي قصة حقيقية أو تجربة شخصية أو حدثاً وقع في الماضي. يتميز بترتيب الأحداث ترتيباً زمنياً متسلسلاً (Chronological Order) من البداية إلى النهاية، مع بيان العبرة أو الأثر الذي تركه هذا الموقف في نفس الكاتب.',
  mainPurpose: 'To share an engaging story, entertain the reader, and highlight a personal lesson or insight (مشاركة قصة مشوقة وإبراز العبرة والدرس المستفاد).',
  threeKeyParts: [
    {
      part: '1. The Beginning (البداية)',
      detailsEn: 'Contains the Topic Sentence with a hook, plus background information answering Who, Where, and When.',
      detailsAr: 'تتضمن الجملة الافتتاحية (Topic Sentence) المشوقة، بالإضافة إلى معلومات تمهيدية تحدد الشخصيات، المكان، والزمان (Who, Where, When).'
    },
    {
      part: '2. The Middle (الوسط - تسلسل الأحداث والذروة)',
      detailsEn: 'Supporting sentences detailing the plot in time order using time transitions (First, Suddenly, Then), culminating in the Climax.',
      detailsAr: 'الجمل الداعمة التي تسرد الأحداث خطوة بخطوة بالترتيب الزمني باستخدام روابط الوقت، وصولاً إلى ذروة القصة (Climax: أشد لحظة توتر أو إثارة).'
    },
    {
      part: '3. The End (النهاية والخاتمة)',
      detailsEn: 'The Concluding Sentence brings closure (resolution) and reveals the moral, lesson learned, or lasting emotion.',
      detailsAr: 'الجملة الختامية التي تحل المشكلة وتكشف العبرة المستفادة (Moral / Lesson) أو النتيجة النهائية وتأثير الموقف على الكاتب.'
    }
  ]
};

export const NARRATIVE_PARTS_DETAILS: NarrativeElement[] = [
  {
    part: 'Topic Sentence (الجملة الافتتاحية)',
    nameAr: 'الجملة الافتتاحية مع عنصر الجذب',
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
    nameAr: 'الذروة ونقطة التحول',
    definition: 'The most intense, exciting, or dangerous moment in the story where the conflict peaks.',
    definitionAr: 'أخطر أو أهم أو أطرف لحظة في الموقف، وهي اللحظة التي ينتظر القارئ معرفة كيف ستنتهي.',
    examples: [
      '"Just as darkness fell, two wild wolves emerged from behind the rocks."',
      '"My heart raced as the examiner slammed on the emergency brakes right before the intersection."'
    ],
    tipsAr: 'استخدم لغة وصفية دقيقة (Descriptive Sensory Words) تصف الرعب أو المفاجأة.'
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

export const NARRATIVE_TIME_TRANSITIONS = [
  { group: 'بداية القصة (Beginning)', words: ['At first,', 'In the beginning,', 'One morning,', 'To begin with,', 'Initially,'] },
  { group: 'تتابع الأحداث (Middle Sequence)', words: ['Then,', 'Next,', 'Soon after,', 'After that,', 'A few minutes later,', 'Meanwhile,'] },
  { group: 'المفاجأة وتغير الأحداث (Sudden Turning)', words: ['Suddenly,', 'All of a sudden,', 'Unexpectedly,', 'Just then,', 'Without warning,'] },
  { group: 'النهاية والحل (Resolution & End)', words: ['Finally,', 'Eventually,', 'In the end,', 'After all that,', 'Ultimately,'] }
];

export const NARRATIVE_MODEL_STORIES: NarrativeModelStory[] = [
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

export const COURSE_INFO = {
  university: 'جامعة أم القرى (Umm Al-Qura University)',
  institute: 'معهد اللغة الإنجليزية (English Language Institute - ELIE)',
  courseCode: 'ELIE1201',
  semester: 'الفصل الدراسي الأول (1st Semester, Level A2)',
  assessmentName: 'كويز الكتابة الأكاديمية (Academic Writing Quiz / Assessment)',
  timing: 'يوم الأحد (Sunday Quiz)',
  books: [
    {
      name: 'Great Writing 2: Great Paragraphs (5th Edition)',
      authors: 'Keith S. Folse, April Muchmore-Vokoun, Elena Vestri',
      publisher: 'National Geographic Learning'
    },
    {
      name: 'Evolve 2 (Student\'s Book)',
      authors: 'Lindsay Clandfield, Ben Goldstein, Ceri Jones, Philip Kerr',
      publisher: 'Cambridge University Press'
    }
  ],
  assessmentsBreakdown: [
    {
      week: 'Week 6',
      task: 'Topic sentence along with clear controlling ideas for the paragraph',
      marks: '2 Marks',
      tool: 'Individual Assessment (Checklist 1)'
    },
    {
      week: 'Week 9',
      task: 'Complete outline for the paragraph (Brainstorming + Supporting points)',
      marks: '3 Marks',
      tool: 'Individual Assessment (Checklist 2)'
    },
    {
      week: 'Week 12',
      task: 'Final submission: Coherent, unified academic paragraph (5-10 sentences)',
      marks: '5 Marks',
      tool: 'Final Assessment (Topic sentence + 3-4 supporting sentences + Concluding sentence)'
    }
  ]
};

export const QUIZ_UNITS: QuizUnit[] = [
  {
    unitNumber: 1,
    title: 'Paragraphs & Basic Mechanics (فقرات الكتابة والميكانيكا الأساسية)',
    book: 'Both',
    pages: 'GW2: pp. 12-20 | Evolve 2: Unit 1.4 p.9, Unit 2.1 p.15, Unit 4.5 p.48',
    activities: 'GW2 Activities 10 (Capitalization & Punctuation), 12, 13, 15 (Subject-Verb Agreement), 22 (Combining sentences)',
    importance: 'critical',
    objectives: [
      'Use capitalization and end-punctuation correctly in every sentence.',
      'Apply Subject-Verb agreement accurately in the Simple Present tense.',
      'Practice combining simple sentences into smoother, cohesive thoughts.'
    ],
    keyRules: [
      'Capitalize the first word of a sentence, pronoun "I", specific names, countries, cities, and languages.',
      'End each sentence with a proper end punctuation mark: period (.), question mark (?), or exclamation (!).',
      'Singular third-person subject (he, she, it, singular noun) takes verb + -s / -es in simple present.',
      'Plural subject (they, we, you, plural nouns) takes the base verb form.',
      'Prepositional phrases between subject and verb do not change the subject (e.g., "The trees [behind the school] are tall").'
    ]
  },
  {
    unitNumber: 2,
    title: 'Developing Ideas for Writing & Sentence Types (تطوير الأفكار وأنواع الجمل)',
    book: 'Both',
    pages: 'GW2: pp. 24-42 | Evolve 2: Unit 1.5 p.11, Unit 3.4 p.33, Unit 8.5 p.99',
    activities: 'GW2 Activities 2, 3 (Brainstorming with others), 5 (How brainstorming works), 12, 13, 14, 15 (Simple vs. Compound), 16 (Titles), 22 & 23 (Combining & Writing)',
    importance: 'critical',
    objectives: [
      'Master brainstorming strategies: cluster diagrams and idea lists.',
      'Distinguish between Simple and Compound sentences.',
      'Use coordinating conjunctions (and, but, so, or) with a comma to form compound sentences.',
      'Craft effective, relevant paragraph titles following academic conventions.'
    ],
    keyRules: [
      'Brainstorming means writing down all thoughts rapidly without judging them, then selecting and crossing out weak ideas.',
      'Simple sentence = One independent clause (one subject-verb relationship).',
      'Compound sentence = Two independent clauses joined by a comma + coordinating conjunction (and, but, so, or).',
      'Title rules: Not a full sentence, centered, capitalize the first and main words, never end with a period.'
    ]
  },
  {
    unitNumber: 3,
    title: 'Topic Sentences & Complex Sentences (الجملة الافتتاحية والجمل المعقدة)',
    book: 'Both',
    pages: 'GW2: pp. 44-60 | Evolve 2: Unit 8.1 p.91 (if/when), Unit 12.2 p.143 (who/which/that)',
    activities: 'GW2 Activities 1, 2 (What is a topic sentence?), 3, 4, 5, 6, 7 (Features of a topic sentence & Controlling ideas), 8, 9 (Complex sentences), 10, 11 (Commas), 16, 17, 18, 19, 20',
    importance: 'critical',
    objectives: [
      'Analyze paragraphs to identify topic sentences and extract controlling ideas.',
      'Formulate strong topic sentences containing both a Topic and a clear Controlling Idea.',
      'Avoid weak topic sentences (too general, too specific, or a pure dead fact).',
      'Write Complex sentences with adverb clauses (because, although, if, when) and adjective clauses (who, which, that).',
      'Apply four essential comma rules correctly.'
    ],
    keyRules: [
      'Topic Sentence Formula: Topic (الموضوع العام) + Controlling Idea (الفكرة الحاكمة المحددة).',
      'The controlling idea limits what the paragraph will talk about and guides the supporting sentences.',
      'Complex sentence = One independent clause + at least one dependent clause.',
      'If the dependent clause starts the sentence, put a comma after it: "Because exercise reduces stress, people feel better."',
      'If the dependent clause is at the end, do NOT use a comma: "People feel better because exercise reduces stress."'
    ]
  },
  {
    unitNumber: 4,
    title: 'Supporting & Concluding Sentences (الجمل الداعمة والخاتمة)',
    book: 'Both',
    pages: 'GW2: pp. 62-77 | Evolve 2: Unit 3.5 p.35 (Giving reasons)',
    activities: 'GW2 Activities 1 & 2 (What are supporting sentences?), 3, 4, 5 (What do supporting sentences do?), 9 (Avoiding fragments), 10 (Avoiding run-ons & comma splices), 11 & 12 (Concluding sentences)',
    importance: 'critical',
    objectives: [
      'Write 3 to 4 strong supporting sentences that directly explain, describe, give reasons, facts, or examples.',
      'Maintain strict Paragraph Unity by eliminating any unrelated sentence.',
      'Identify and fix sentence errors: Sentence Fragments, Run-on Sentences, and Comma Splices.',
      'Write effective concluding sentences that restate the main idea, offer a suggestion, give an opinion, or make a prediction.',
      'Use transition words (In conclusion, Overall, Clearly, For these reasons) followed by a comma.'
    ],
    keyRules: [
      'Supporting sentences must address: Who, What, Where, When, Why, or How.',
      'Paragraph Unity: Every single sentence must relate to the controlling idea in the topic sentence.',
      'Fragment: Missing subject, verb, or is an incomplete dependent clause on its own.',
      'Run-on: Two sentences stuck together without punctuation or conjunction.',
      'Comma Splice: Two sentences joined with only a comma (MUST add "and/but/so" or change to a period).',
      'Concluding sentence ends the paragraph logically without introducing brand-new topics.'
    ]
  },
  {
    unitNumber: 5,
    title: 'Paragraph Review & Final Synthesis (مراجعة الفقرة الشاملة)',
    book: 'Great Writing 2',
    pages: 'GW2: pp. 84-101',
    activities: 'Activities 1, 2, 3 (Four features review), 5 (Proofreading for commas & unity), 15 (Combining sentences), 16 & Test Prep (Writing full paragraph)',
    importance: 'critical',
    objectives: [
      'Synthesize all elements into a cohesive 5 to 10 sentence paragraph (~150 words).',
      'Proofread and self-edit for indentation, capitalization, commas, and agreement.',
      'Ensure complete alignment with Assessment Checklist 1 and Checklist 2.'
    ],
    keyRules: [
      'The 4 Features of a Good Paragraph: 1) Indented first line, 2) Topic sentence with controlling idea, 3) All sentences relate (Unity), 4) Logical concluding sentence.',
      'Time management in quiz: Spend 5 min brainstorming/outlining, 15 min drafting, 5 min proofreading.'
    ]
  }
];

export const FOUR_GOLDEN_FEATURES = [
  {
    number: 1,
    titleEn: 'Indentation (المسافة البادئة)',
    descEn: 'The first line of the paragraph must be indented (about 5 spaces or 0.5 inches). Subsequent lines start at the normal left margin.',
    descAr: 'السطر الأول من الفقرة فقط يجب أن يبدأ بمسافة بادئة (بمقدار 5 مسافات تقريباً). بقية الأسطر تبدأ من أول السطر بشكل طبيعي.',
    tip: 'لا تستخدم أسلوب النقاط (Bullet points) أو ترك سطر بين كل جملة وجملة؛ الفقرة قالب نصي متصل واحد!'
  },
  {
    number: 2,
    titleEn: 'Topic Sentence with Controlling Idea (الجملة الافتتاحية مع الفكرة الحاكمة)',
    descEn: 'The paragraph must start with a topic sentence that clearly states the main idea and contains a specific controlling idea that guides the whole paragraph.',
    descAr: 'تبدأ الفقرة بجملة افتتاحية واضحة تتضمن الموضوع (Topic) بالإضافة إلى الفكرة الحاكمة (Controlling Idea) التي تحدد ما ستقوله بالضبط.',
    tip: 'تجنب أن تكون الجملة عامة جداً، أو ضيقة جداً، أو مجرد حقيقة علمية بحتة لا تقبل الشرح!'
  },
  {
    number: 3,
    titleEn: 'Paragraph Unity (وحدة وتماسك الفقرة)',
    descEn: 'All supporting sentences (3 to 4 sentences) must directly relate to and explain the controlling idea. Any irrelevant or off-topic sentence destroys unity.',
    descAr: 'جميع الجمل الداعمة (3 إلى 4 جمل) يجب أن تدعم وتناقش الفكرة الحاكمة المذكورة في الجملة الافتتاحية فقط دون الخروج عن الموضوع.',
    tip: 'أي معلومة لا تجيب عن (لماذا؟ كيف؟ ما هي الأمثلة؟) المرتبطة بالفكرة الحاكمة تعتبر جملة دخيلة (Unrelated) وتنقص درجتك!'
  },
  {
    number: 4,
    titleEn: 'Logical Concluding Sentence (الجملة الختامية المنطقية)',
    descEn: 'The final sentence brings the paragraph to a logical close. It signals completion using transition words and uses one of the 4 proven purposes.',
    descAr: 'تختم الفقرة بشكل منطقي ومحكم باستخدام كلمات انتقال مناسبة (مثل In conclusion, Overall) وتؤدي أحد الأغراض الأربعة المعتمدة.',
    tip: 'لا تضف فكرة جديدة غير مشروحة في الخاتمة! أعد صياغة الفكرة، أو قدم نصيحة، أو اعطِ رأياً، أو توقعاً.'
  }
];

export const CONCLUDING_PURPOSES = [
  {
    type: 'restate',
    titleEn: 'Restate the Main Idea (إعادة صياغة الفكرة الرئيسية)',
    description: 'Summarizes the main point using fresh synonyms and a different sentence structure.',
    example: 'In conclusion, regular physical exercise provides immense health and mental benefits for people of all ages.',
    transitions: ['In conclusion,', 'In sum,', 'Clearly,', 'To summarize,']
  },
  {
    type: 'suggestion',
    titleEn: 'Offer a Suggestion (تقديم نصيحة أو اقتراح)',
    description: 'Tells the reader what they should do or think based on the facts provided.',
    example: 'For these reasons, adults should try to walk or exercise for at least thirty minutes every day.',
    transitions: ['For these reasons,', 'Therefore,', 'As a result,', 'Because of this,']
  },
  {
    type: 'opinion',
    titleEn: 'Give an Opinion (إبداء الرأي الشخصي للكاتب)',
    description: 'States the writer\'s personal thought or strong belief about the topic.',
    example: 'Overall, I believe that learning a second language is the most valuable skill a university student can acquire.',
    transitions: ['Overall,', 'In my opinion,', 'Clearly,', 'Without a doubt,']
  },
  {
    type: 'prediction',
    titleEn: 'Make a Prediction (تقديم توقع للمستقبل)',
    description: 'Forecasts what might happen in the future regarding the topic discussed.',
    example: 'Thus, students who manage their study time wisely will surely succeed in their academic careers.',
    transitions: ['Thus,', 'Certainly,', 'In the future,', 'Consequently,']
  }
];

export const COMMA_RULES = [
  {
    ruleNumber: 1,
    title: 'Items in a Series / List (القوائم والتعداد)',
    explanation: 'Use commas to separate three or more words or phrases in a list. Do not use a comma when there are only two items.',
    correctExample: 'I enjoy studying English, history, and computer science.',
    wrongExample: 'I enjoy studying English, and history. ❌ (Only two items, no comma needed!)'
  },
  {
    ruleNumber: 2,
    title: 'Compound Sentences before FANBOYS (الجمل المركبة)',
    explanation: 'Put a comma before a coordinating conjunction (and, but, so, or) when it connects two complete independent clauses (each with its own subject & verb).',
    correctExample: 'Tokyo is a bustling city, but Kyoto is famous for its quiet ancient temples.',
    wrongExample: 'Tokyo is a bustling city but Kyoto is quiet. ❌ (Missing comma before "but")'
  },
  {
    ruleNumber: 3,
    title: 'Introductory Words & Transitions (الكلمات الانتقالية والمقدمات)',
    explanation: 'Use a comma after introductory transition words, sequence words, or introductory time/place phrases.',
    correctExample: 'First, you must create a clear outline. However, many students skip this step.',
    wrongExample: 'In addition she visited the museum yesterday. ❌ (Missing comma after "In addition,")'
  },
  {
    ruleNumber: 4,
    title: 'Adverb Clauses at the Beginning (جمل الظرف والسبب في بداية الجملة)',
    explanation: 'If a dependent adverb clause (with because, although, if, when, before, after) comes FIRST, place a comma after it. If it comes SECOND, no comma!',
    correctExample: 'Because the weather was rainy, we stayed inside. / We stayed inside because the weather was rainy.',
    wrongExample: 'We stayed inside, because the weather was rainy. ❌ (No comma when "because" clause is at the end!)'
  }
];

export const FATAL_ERRORS = [
  {
    id: 'fragment',
    nameEn: 'Sentence Fragment (الجملة الناقصة)',
    definition: 'An incomplete sentence missing a subject, a main verb, or being a stranded dependent clause.',
    badExample: 'Because international students face many language challenges in the first semester.',
    badWhy: 'هذه جملة تابعة (Dependent clause) تبدأ بـ Because ولا يوجد جملة رئيسية كاملة معها!',
    fixedExample: 'Because international students face many language challenges, they need extra tutoring.',
    fixTip: 'تأكد أن كل جملة تحتوي على فاعل (Subject) وفعل (Verb) وتعطي معنى تاماً مستقلاً.'
  },
  {
    id: 'runon',
    nameEn: 'Run-on Sentence (الجملة المدمجة دون فواصل)',
    definition: 'Two independent clauses joined together with zero punctuation or connecting words.',
    badExample: 'The museum has ancient artifacts many tourists come from all over the world to see them.',
    badWhy: 'تم دمج جملتين مستقلتين كاملتين دون نقطة أو أداة ربط أو فاصلة منقوطة!',
    fixedExample: 'The museum has ancient artifacts, and many tourists come from all over the world to see them.',
    fixTip: 'افصل الجملتين بنقطة (.) أو اربطهما بفاصلة وكلمة ربط (, and / , but / , so).'
  },
  {
    id: 'commasplice',
    nameEn: 'Comma Splice (الوصل الخاطئ بالفاصلة فقط)',
    definition: 'Joining two independent clauses with only a comma without a coordinating conjunction.',
    badExample: 'Exercise keeps our body in good shape, it also helps reduce mental stress.',
    badWhy: 'الفاصلة وحدها ضعيفة جداً لربط جملتين كاملتين!',
    fixedExample: 'Exercise keeps our body in good shape, and it also helps reduce mental stress.',
    fixTip: 'أضف أداة ربط مثل (and / so / but) بعد الفاصلة، أو استبدل الفاصلة بنقطة.'
  }
];

export const MODEL_PARAGRAPHS: ModelParagraph[] = [
  {
    id: 'p1',
    title: 'Reasons for Exercise',
    topic: 'Exercise (التمارين الرياضية)',
    type: 'Explanatory Paragraph (فقرة توضيحية بالأسباب)',
    text: '   There are many excellent reasons for exercising several times each week. First, people who exercise look better. Exercise is important to keep our bodies in good shape. In addition, people who exercise have more energy. For example, a person who exercises can walk up stairs or climb hills more easily. People who exercise have a healthier heart, too. Finally, exercise reduces stress and helps you have a clear mind. Too much stress can cause you to worry a lot, and that is not good for your health. For these reasons, if you want to improve your health, you should exercise regularly.',
    topicSentence: 'There are many excellent reasons for exercising several times each week.',
    controllingIdea: 'many excellent reasons for exercising several times each week (أسباب ممتازة لممارسة الرياضة أسبوعياً)',
    supportingSentences: [
      'First, people who exercise look better and keep their bodies in good shape.',
      'In addition, people who exercise have more energy to walk up stairs or climb hills.',
      'People who exercise have a healthier heart, too.',
      'Finally, exercise reduces stress and helps you have a clear mind.'
    ],
    concludingSentence: 'For these reasons, if you want to improve your health, you should exercise regularly.',
    concludingType: 'suggestion',
    transitionsUsed: ['First,', 'In addition,', 'For example,', 'Finally,', 'For these reasons,'],
    analysisArabic: 'هذا نموذج مثالي من كتاب Great Writing 2 (الوحدة 3 صفحة 46). يبدأ بمسافة بادئة، وجملة افتتاحية قوية توضح أن الفقرة ستشرح أسباب ممارسة الرياضة. جميع الجمل الداعمة تذكر سبباً وتدعمه بمثال، والختام يقدم نصيحة واضحة تبدأ بـ For these reasons.'
  },
  {
    id: 'p2',
    title: 'A Great Tourist Destination',
    topic: 'Washington, D.C. (واشنطن العاصمة كوجهة سياحية)',
    type: 'Descriptive Paragraph (فقرة وصفية سياحية)',
    text: '   Although New York and Boston attract millions of tourists, one of the best cities to visit in the eastern United States is Washington, D.C. First, Washington has some of the most interesting landmarks in the country. There are several beautiful memorials to early U.S. presidents, including the Lincoln Memorial and the Jefferson Memorial. There is also a tour of the White House, which is the home of the president of the United States. Second, Washington has wonderful museums that are free to visit. The Smithsonian Institution is a large group of museums that offers excellent opportunities to learn about everything from natural history to aerospace. Finally, Georgetown is a historic area in the northwest part of Washington that has shopping, restaurants, and entertainment for the whole family. Overall, this important city is certainly one of the best destinations for tourists.',
    topicSentence: 'Although New York and Boston attract millions of tourists, one of the best cities to visit in the eastern United States is Washington, D.C.',
    controllingIdea: 'one of the best cities to visit in the eastern United States (واحدة من أفضل المدن للزيارة في شرق أمريكا)',
    supportingSentences: [
      'First, Washington has some of the most interesting presidential landmarks.',
      'Second, Washington has wonderful museums that are free to visit.',
      'Finally, Georgetown is a historic area that has great shopping and restaurants.'
    ],
    concludingSentence: 'Overall, this important city is certainly one of the best destinations for tourists.',
    concludingType: 'opinion',
    transitionsUsed: ['First,', 'Second,', 'Finally,', 'Overall,'],
    analysisArabic: 'نموذج رائع من الوحدة 4 (صفحة 65). استخدام ذكي لجملة معقدة (Complex sentence) كجملة افتتاحية، تليها 3 معالم سياحية رئيسية مع تفاصيلها، وخاتمة برأي إيجابي عام تبدأ بـ Overall.'
  },
  {
    id: 'p3',
    title: 'Adjusting to College Life',
    topic: 'College Life (التكيف مع الحياة الجامعية)',
    type: 'Narrative / Reflective Paragraph (فقرة تجربة دراسية)',
    text: '   When I started college, I was surprised at the amount of studying that was necessary. I had to change my study habits completely. In high school, I rarely studied, yet my grades were consistently good. In college, all my professors thought their class was the most important. Each professor assigned a tremendous amount of homework. As a result, my free time became very limited. Reading assignments, group projects, and research replaced my time with friends. This rigorous schedule was a big change from high school, where I used to play sports and see friends several times a week. In brief, university life demands serious discipline and excellent time management.',
    topicSentence: 'When I started college, I was surprised at the amount of studying that was necessary.',
    controllingIdea: 'surprised at the amount of studying that was necessary (المفاجأة بحجم الاستذكار والدراسة المطلوبة)',
    supportingSentences: [
      'In high school, I rarely studied, but college professors assign massive homework.',
      'Each professor considered their class the most vital, limiting my leisure time.',
      'Reading assignments and research completely replaced socializing with peers.'
    ],
    concludingSentence: 'In brief, university life demands serious discipline and excellent time management.',
    concludingType: 'restate',
    transitionsUsed: ['In addition,', 'As a result,', 'In brief,'],
    analysisArabic: 'نموذج مأخوذ من نشاط 12 بالوحدة 4 (صفحة 76). لاحظ كيف حذفت الجملة غير المناسبة (My favorite class was British History) لأنها كانت تكسر وحدة الفقرة (Unity)! الخاتمة تلخص الفكرة بعبارة In brief.'
  }
];

export const PRACTICE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Topic Sentence',
    question: 'Which of the following makes the BEST topic sentence for a paragraph about healthy eating?',
    questionArabic: 'أي الجمل التالية تعد أفضل جملة افتتاحية (Topic Sentence) لفقرة عن الأكل الصحي؟',
    options: [
      'Apples are red, green, or yellow fruits.',
      'Eating fresh fruits and vegetables daily provides three major benefits for your body.',
      'Food is something that everyone eats every single day.',
      'I ate a salad at two o\'clock yesterday afternoon in a restaurant.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Option B is specific, has a clear controlling idea ("provides three major benefits for your body"), and leaves room for explanation. A is a pure fact, C is too general, and D is an overly specific personal detail.',
    explanationArabic: 'الخيار الثاني يحتوي على موضوع واضح (Eating fruits & vegetables) وفكرة حاكمة محددة (provides three major benefits). الخيار الأول مجرد حقيقة ميتة، والثالث عام جداً، والرابع تفصيل شخصي ضيق.',
    ruleTag: 'Unit 3: Features of a Topic Sentence'
  },
  {
    id: 2,
    category: 'Controlling Idea',
    question: 'In the sentence: "Crossword puzzles are not only educational and fun, but also addictive.", what is the CONTROLLING IDEA?',
    questionArabic: 'في الجملة السابقة، ما هي الفكرة الحاكمة (Controlling Idea)؟',
    options: [
      'Crossword puzzles',
      'Are not only',
      'educational and fun, but also addictive',
      'There is no controlling idea'
    ],
    correctAnswerIndex: 2,
    explanationEnglish: 'The Topic is "Crossword puzzles". The Controlling Idea is what the author claims about the topic: they are "educational and fun, but also addictive", which guides the supporting sentences.',
    explanationArabic: 'الموضوع هو (Crossword puzzles)، بينما الفكرة الحاكمة هي ما يخبرنا به الكاتب عن الموضوع: أنها ممتعة وتعليمية وتسبب الإدمان.',
    ruleTag: 'Unit 3: Activity 3 p.48'
  },
  {
    id: 3,
    category: 'Sentence Types',
    question: 'Identify the sentence type: "Central Park has a zoo and many other interesting places, but it is too cold to visit in winter."',
    questionArabic: 'حدد نوع الجملة: جملة بسيطة، أم مركبة، أم معقدة؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Sentence Fragment'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'It is a Compound Sentence because it connects two independent clauses with a comma and the coordinating conjunction "but".',
    explanationArabic: 'جملة مركبة (Compound Sentence) لأنها تتكون من جملتين مستقلتين كاملتين مربوطتين بفاصلة مع أداة العطف "but".',
    ruleTag: 'Unit 2 & 3: Sentence Types'
  },
  {
    id: 4,
    category: 'Sentence Types',
    question: 'Identify the sentence type: "Although Simón Bolívar is not well-known outside Latin America, many people consider him their greatest historical hero."',
    questionArabic: 'ما نوع هذه الجملة التي تبدأ بـ Although؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Run-on Sentence'
    ],
    correctAnswerIndex: 2,
    explanationEnglish: 'It is a Complex Sentence because it consists of one dependent adverb clause starting with "Although" and one independent clause.',
    explanationArabic: 'جملة معقدة (Complex Sentence) لأنها تحتوي على جملة تابعة تبدأ بـ Although متبوعة بجملة رئيسية مستقلة.',
    ruleTag: 'Unit 3: Complex Sentences p.52'
  },
  {
    id: 5,
    category: 'Punctuation',
    question: 'Where should the comma be placed in this sentence: "Because English borrowed many words from French students often recognize vocabulary easily."',
    questionArabic: 'أين يجب وضع الفاصلة الصحيحة في هذه الجملة؟',
    options: [
      'After "English"',
      'After "French," (at the end of the introductory dependent clause)',
      'After "students"',
      'No comma is needed'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'When an adverb clause beginning with "Because" is placed at the beginning of the sentence, a comma must separate it from the main clause.',
    explanationArabic: 'عندما تبدأ الجملة بعبارة سبب أو ظرف مثل Because، يجب وضع فاصلة بعد انتهاء العبارة التابعة مباشرة قبل الجملة الرئيسية (بعد French,).',
    ruleTag: 'Unit 3: Comma Rule 4'
  },
  {
    id: 6,
    category: 'Grammar',
    question: 'Choose the correct verb form: "The main products of Brazil and Colombia (is / are) coffee and aluminum."',
    questionArabic: 'اختر الفعل الصحيح لتوافق الفاعل مع الفعل (Subject-Verb Agreement):',
    options: [
      'is',
      'are',
      'was',
      'be'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'The true subject is "products" (plural noun), not Brazil or Colombia inside the prepositional phrase. Plural subject takes "are".',
    explanationArabic: 'الفاعل الحقيقي هو كلمة products (جمع)، وشبه الجملة [of Brazil and Colombia] لا تؤثر على الفاعل، لذا الفعل الصحيح هو are.',
    ruleTag: 'Unit 1: Grammar p.14'
  },
  {
    id: 7,
    category: 'Grammar',
    question: 'Choose the correct verb form: "Everyone in the class (need / needs / needing) a pencil and an eraser."',
    questionArabic: 'اختر الفعل المناسب للفاعل Everyone:',
    options: [
      'need',
      'needs',
      'needing',
      'are needing'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Indefinite pronouns such as "Everyone", "Everybody", and "Each" are always grammatically singular and take the -s verb form.',
    explanationArabic: 'الضمائر غير المحددة مثل Everyone و Everybody و Each تعامل دائماً معاملة المفرد وتأخذ الفعل المضاف له s.',
    ruleTag: 'Unit 1: Subject-Verb Agreement with Indefinite Pronouns'
  },
  {
    id: 8,
    category: 'Errors',
    question: 'What error is present in this sentence: "I went to Jeddah last summer, it was an amazing vacation."',
    questionArabic: 'ما هو الخطأ القاتل الموجود في هذه الجملة؟',
    options: [
      'Sentence Fragment',
      'Comma Splice',
      'Subject-Verb disagreement',
      'No error'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'This is a Comma Splice because two independent sentences are joined only by a comma. It should be corrected with ", and" or a period.',
    explanationArabic: 'هذا خطأ Comma Splice، لأن جملتين كاملتين رُبطتا بفاصلة فقط دون أداة ربط (FANBOYS). الحل هو إضافة and أو وضع نقطة.',
    ruleTag: 'Unit 4: Avoiding Comma Splices p.74'
  },
  {
    id: 9,
    category: 'Errors',
    question: 'What error is present here: "Because the heavy rain caused flooding on the highway yesterday."',
    questionArabic: 'ما هو الخطأ الموجود في هذه العبارة المعلقة؟',
    options: [
      'Sentence Fragment (جملة ناقصة)',
      'Run-on Sentence',
      'Comma Splice',
      'Correct sentence'
    ],
    correctAnswerIndex: 0,
    explanationEnglish: 'This is a Sentence Fragment because it starts with "Because" and is only a dependent clause without an independent main clause.',
    explanationArabic: 'هذه جملة ناقصة (Sentence Fragment) لأنها عبارة ظرفية معلقة تبدأ بـ Because ولا يوجد جملة رئيسية مستقلة تكمل المعنى.',
    ruleTag: 'Unit 4: Sentence Fragments p.73'
  },
  {
    id: 10,
    category: 'Paragraph Unity',
    question: 'In a paragraph titled "How to Avoid Being Sick with a Cold", which of the following sentences DESTROYS the unity and must be removed?',
    questionArabic: 'في فقرة عن كيفية تجنب الإصابة بنزلة البرد، أي الجمل التالية تكسر وحدة الفقرة ويجب حذفها؟',
    options: [
      'First, wash your hands with warm water and soap several times daily.',
      'Second, eat citrus fruits that are packed with vitamin C.',
      'My cousin bought a new smartphone last week for a great price.',
      'Finally, get at least eight hours of sleep to keep your immune system strong.'
    ],
    correctAnswerIndex: 2,
    explanationEnglish: 'Option C is completely off-topic and unrelated to cold prevention, destroying paragraph unity.',
    explanationArabic: 'الخيار الثالث يتحدث عن شراء هاتف ذكي، وهو موضوع لا علاقة له بتاتاً بالوقاية من نزلات البرد، وبالتالي يكسر تماسك الفقرة (Unity).',
    ruleTag: 'Unit 4 & 5: Maintaining Paragraph Unity'
  },
  {
    id: 11,
    category: 'Topic Sentence',
    question: 'Which of the following is the CORRECT rule for a paragraph title?',
    questionArabic: 'ما هي القاعدة الأكاديمية الصحيحة لكتابة عنوان البارقراف؟',
    options: [
      'Write a full, complete sentence ending with a period.',
      'Make it short, centered, capitalize the first and key words, and never put a period at the end.',
      'Write it in all lowercase letters with a question mark.',
      'Indent the title by five spaces.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'A good title is concise, centered, capitalizes nouns/verbs/adjectives, and NEVER ends with a period.',
    explanationArabic: 'العنوان الجيد يكون مختصراً في المنتصف، بحروف كبيرة للكلمات الرئيسية، ولا ينتهي أبداً بنقطة!',
    ruleTag: 'Unit 2: Activity 16 p.37'
  },
  {
    id: 12,
    category: 'Controlling Idea',
    question: 'In the topic sentence: "There are three important steps for applying to a foreign university.", what are the Topic and Controlling Idea?',
    questionArabic: 'في الجملة السابقة، ما هو الـ Topic وما هي الـ Controlling Idea؟',
    options: [
      'Topic: Foreign university | Controlling Idea: There are',
      'Topic: Applying to a foreign university | Controlling Idea: three important steps',
      'Topic: Steps | Controlling Idea: university',
      'There is no topic'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Topic is "Applying to a foreign university" and the controlling idea is "three important steps", which signals that the paragraph will outline those three steps.',
    explanationArabic: 'الموضوع (Topic) هو التقديم على جامعة خارجية، والفكرة الحاكمة (Controlling Idea) هي وجود ثلاث خطوات مهمة.',
    ruleTag: 'Unit 3: Checklist 1'
  }
];

export const CHECKLIST_1 = {
  title: 'Checklist 1: Topic Sentence Assessment (تقييم الجملة الافتتاحية - درجتان)',
  week: 'Week 6',
  items: [
    {
      criterion: 'Does the sentence contain a clear, identifiable TOPIC?',
      ar: 'هل تحتوي الجملة على موضوع عام محدد بوضوح؟',
      required: true
    },
    {
      criterion: 'Does the sentence include an explicit CONTROLLING IDEA?',
      ar: 'هل تتضمن الجملة فكرة حاكمة تقيد الموضوع وترشد الجمل الداعمة؟',
      required: true
    },
    {
      criterion: 'Is the sentence neither too general nor too narrow?',
      ar: 'هل الجملة متوازنة بحيث ليست عامة جداً ولا تفصيلية ضيقة جداً؟',
      required: true
    },
    {
      criterion: 'Is it an opinion or claim to be explained, NOT just a simple indisputable fact?',
      ar: 'هل هي فكرة تحتاج إلى شرح وتوضيح وليست مجرد حقيقة ميتة مثل "مكتبة الجامعة تحتوي على كتب"؟',
      required: true
    },
    {
      criterion: 'Are grammar, capitalization, and punctuation 100% correct?',
      ar: 'هل خلت الجملة من أخطاء القواعد والترقيم والحروف الكبيرة؟',
      required: true
    }
  ]
};

export const CHECKLIST_2 = {
  title: 'Checklist 2: Paragraph Outline Assessment (تقييم المخطط التفصيلي - 3 درجات)',
  week: 'Week 9',
  items: [
    {
      criterion: 'Approved Topic Sentence with highlighted Controlling Idea.',
      ar: 'جملة افتتاحية معتمدة مع تمييز الفكرة الحاكمة بوضوح.',
      required: true
    },
    {
      criterion: 'At least 3-4 distinct Supporting Points directly answering Who, What, Why, or How.',
      ar: 'ما لا يقل عن 3 إلى 4 نقاط داعمة منفصلة تجيب عن الأسئلة التفصيلية وتدعم الفكرة الحاكمة.',
      required: true
    },
    {
      criterion: 'Appropriate Transition Connectors selected (First, In addition, For example, Finally).',
      ar: 'اختيار أدوات الربط التتابعية الملائمة لكل نقطة داعمة.',
      required: true
    },
    {
      criterion: 'Draft Concluding Sentence with transition signal (In conclusion, Overall, Clearly).',
      ar: 'مسودة جملة ختامية محكمة تبدأ بكلمة انتقال متبوعة بفاصلة.',
      required: true
    },
    {
      criterion: 'Strict Paragraph Unity (no off-topic brainstormed points included).',
      ar: 'التأكد التام من استبعاد أي فكرة خارج الموضوع وشطبها أثناء العصف الذهني.',
      required: true
    }
  ]
};
