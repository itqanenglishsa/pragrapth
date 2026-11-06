export interface FullQuizRuleCategory {
  id: number;
  titleAr: string;
  titleEn: string;
  badge: string;
  summaryAr: string;
  keyPoints: string[];
}

export interface FullQuizQuestion {
  id: number;
  ruleId: number; // 1 to 8
  ruleTitle: string;
  question: string;
  questionAr: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
}

export const FULL_8_RULES: FullQuizRuleCategory[] = [
  {
    id: 1,
    titleAr: '1) الحروف الكبيرة وعلامات الترقيم (Capitalization & End Punctuation)',
    titleEn: 'Capitalization & End Punctuation',
    badge: '10 أسئلة',
    summaryAr: 'حرف كبير لأول الجملة، للضمير I، وللأسماء الخاصة (أشخاص، أماكن، شركات، لغات وجنسيات، أيام وشهور). لا حرف كبير للأسماء العامة إلا إذا كانت جزءاً من اسم محدد (Black Sea). النقطة (.) للخبر، وعلامة السؤال (?) للاستفهام، والتعجب (!) للانفعال.',
    keyPoints: [
      'حرف كبير لأول كل جملة وللضمير I أينما ورد.',
      'أسماء الأشخاص والألقاب: Dr. Jenkins, Ahmed, Simón Bolívar.',
      'أسماء الدول، المدن، اللغات، والجنسيات: Saudi Arabia, Makkah, Arabic, English.',
      'أيام الأسبوع والشهور: Friday, Sunday, November (الفصول مثل summer تبقى صغيرة).',
      'الأسماء العامة (sea, city, country) تبقى صغيرة إلا في اسم علم مركب: Red Sea, New York City.',
      'النقطة (.) للخبرية، (?) للسؤال، و (!) للتعجب.'
    ]
  },
  {
    id: 2,
    titleAr: '2) توافق الفاعل والفعل في المضارع البسيط (Subject-Verb Agreement)',
    titleEn: 'Subject-Verb Agreement (Simple Present)',
    badge: '10 أسئلة',
    summaryAr: 'he/she/it والمفرد: الفعل + s. الفاعل الجمع: فعل بدون s. الاسم بعد حرف الجر ليس الفاعل. بعد there is/are الفاعل هو الاسم التالي. كلمات every/each/everyone مفرد. الـ Gerund مفرد. فاعلان بـ and = جمع. بعد does/doesn\'t يرجع الفعل لأصله.',
    keyPoints: [
      'he / she / it / الاسم المفرد: الفعل يأخذ s/es (She works here).',
      'they / we / you / الاسم الجمع: الفعل في المصدر (Students learn new words).',
      'الاسم بعد حرف الجر لا يحدد الفعل: The trees [behind the school] are tall.',
      'بعد there is (مفرد) / there are (جمع): There are three reasons.',
      'every / each / everyone / everybody مفرد دائماً: Everyone likes the teacher.',
      'الـ Gerund (الفعل المنتهي بـ ing كاسم) مفرد: Drinking water is healthy.',
      'فاعلان بينهما and = جمع: A pilot and a copilot fly the plane.',
      'بعد does / doesn\'t يعود الفعل لمصدره الأصلي: Does she work here?'
    ]
  },
  {
    id: 3,
    titleAr: '3) أنواع الجمل (Sentence Types: Simple, Compound, Complex)',
    titleEn: 'Sentence Types (Simple, Compound, Complex)',
    badge: '10 أسئلة',
    summaryAr: 'Simple: clause مستقلة واحدة. Compound: clause + , + and/but/so/or + clause. Complex: clause مستقلة + dependent clause (adverb أو adjective). and إضافة، but تعارض، so نتيجة، or اختيار، because سبب.',
    keyPoints: [
      'Simple: جملة مستقلة واحدة بفاعل وفعل (حتى مع فاعلين أو فعلين مركبين بلا فاصلة): Chile imports oil and exports copper.',
      'Compound: جملتان مستقلتان مربوطتان بفاصلة مع أداة عطف (and, but, so, or): Chile exports copper, and Brazil exports sugar.',
      'Complex: جملة مستقلة + جملة تابعة: Because I speak three languages, I can communicate with many people.',
      'أدوات العطف: and (إضافة)، but (تعارض)، so (نتيجة)، or (اختيار/بديل).',
      'العبارات التابعة: Adverb clauses (because, although, if, when, before, after) و Adjective clauses (who, which, that).'
    ]
  },
  {
    id: 4,
    titleAr: '4) قواعد الفواصل الأربعة (The 4 Comma Rules)',
    titleEn: 'The 4 Essential Comma Rules',
    badge: '10 أسئلة',
    summaryAr: '1) قوائم من 3 عناصر أو أكثر (مع عنصرين: and بلا فاصلة). 2) قبل and/but/so/or بين جملتين مستقلتين. 3) بعد الكلمات الافتتاحية وعبارات الانتقال (First,, However,). 4) بعد الـ adverb clause في أول الجملة فقط.',
    keyPoints: [
      '1. القوائم (3 عناصر فأكثر): I speak English, Spanish, and Japanese. (إذا كانا اثنين: and بلا فاصلة).',
      '2. الجمل المركبة: فاصلة قبل and/but/so/or بين جملتين مستقلتين: I was tired, so I slept early.',
      '3. بعد كلمة افتتاحية أو عبارة انتقال: First, ... / However, ... / In the summer of 1940, ...',
      '4. بعد adverb clause إذا بدأت بها الجملة: Because it rained, we stayed home. (إذا جاءت في النهاية: We stayed home because it rained بلا فاصلة).'
    ]
  },
  {
    id: 5,
    titleAr: '5) أخطاء الجمل الثلاثة (Sentence Errors: Fragment, Run-on, Comma Splice)',
    titleEn: 'Fragment, Run-on & Comma Splice',
    badge: '10 أسئلة',
    summaryAr: 'Fragment: جملة ناقصة بلا فاعل أو فعل أو dependent clause وحدها. Run-on: جملتان بلا علامة ترقيم ولا ربط. Comma splice: جملتان بينهما فاصلة فقط بلا أداة ربط. تنبيه: However و Therefore ليستا أدوات ربط كـ and.',
    keyPoints: [
      'Fragment: جملة ناقصة (العلاج: إكمال الفاعل/الفعل أو ربط العبارة التابعة بجملة رئيسية).',
      'Run-on: جملتان كاملتان دُمجتا بلا ترقيم (العلاج: وضع نقطة أو فاصلة + and/but/so).',
      'Comma splice: جملتان بينهما فاصلة فقط (العلاج: إضافة أداة ربط بعد الفاصلة، أو وضع نقطة).',
      'However و Therefore ليست أدوات عطف: It is hard. However, people are strong.'
    ]
  },
  {
    id: 6,
    titleAr: '6) دمج الجمل بسلاسة (Combining Sentences)',
    titleEn: 'Combining Sentences',
    badge: '10 أسئلة',
    summaryAr: 'اجمع الجمل في جملة واحدة دون تغيير أو حذف أي فكرة. ضع الصفات قبل الاسم والظروف قبل الفعل، واربط الباقي بـ and / but / so / who / that.',
    keyPoints: [
      'جمع الجمل في جملة واحدة دون حذف أي معلومة أو فكرة أصلية.',
      'الصفات (adjectives) توضع قبل الأسماء: modern city.',
      'الظروف (adverbs) توضع قبل الأفعال: quickly moved.',
      'استخدام أدوات الربط and / but / so والأسماء الموصولة who / that للدمج السلس.'
    ]
  },
  {
    id: 7,
    titleAr: '7) عناصر الفقرة والعنوان (Topic Sentence, Supporting, Concluding, Title)',
    titleEn: 'Paragraph Elements & Title',
    badge: '10 أسئلة',
    summaryAr: 'Topic sentence = موضوع + controlling idea (ليست fact، وليست عامة جداً، وليست ضيقة). Supporting = تشرح وتصف وتعطي أسباباً وأمثلة، وحذف غير المرتبط. Concluding = تلخص أو تقترح أو تعطي رأياً، بلا فكرة جديدة. Title = قصير، ليس جملة، بلا نقطة.',
    keyPoints: [
      'Topic sentence = Topic + Controlling idea (تجنب الحقيقة الميتة والجملة شديدة العمومية أو الضيقة).',
      'Supporting sentences: تشرح، تصف، تعطي أسباباً وحقائق وأمثلة. والجملة الدخيلة تُحذف فوراً.',
      'Concluding sentence: تلخص (restate)، أو تقترح (suggestion)، أو تعطي رأياً (opinion)، أو تتوقع (prediction).',
      'Title: عبارة مختصرة، كلمات رئيسية كبيرة، في المنتصف، وبلا نقطة نهائياً.',
      'Brainstorming: اكتب بسرعة بلا تدقيق، ثم اشطب الأفكار الضعيفة وضع دائرة حول الأفضل.'
    ]
  },
  {
    id: 8,
    titleAr: '8) الميزات الأربع للباراغراف الجيد (Four Features of a Good Paragraph)',
    titleEn: 'Four Features of a Good Paragraph',
    badge: '10 أسئلة',
    summaryAr: '1. السطر الأول مُزاح (indent). 2. فيه topic sentence تذكر الفكرة الرئيسية. 3. كل الجمل مرتبطة بالفكرة الرئيسية (Unity). 4. فيه concluding sentence تنهيه منطقياً.',
    keyPoints: [
      '1. السطر الأول مُزاح بمقدار 5 مسافات (The first line is indented).',
      '2. فيه Topic Sentence واضحة تحدد الفكرة الرئيسية وبها controlling idea.',
      '3. وحدة الموضوع (Paragraph Unity): كل الجمل تدعم وتخدم نفس الفكرة.',
      '4. فيه Concluding Sentence تنهي الفقرة بشكل منطقي بلا مواضيع جديدة.'
    ]
  }
];

export const FULL_80_QUESTIONS: FullQuizQuestion[] = [
  // ==================== RULE 1: CAPITALIZATION & END PUNCTUATION (10 Qs) ====================
  {
    id: 1,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which of the following sentences has completely CORRECT capitalization and punctuation?',
    questionAr: 'أي الجمل التالية صحيحة تماماً من حيث الحروف الكبيرة وعلامات الترقيم؟',
    options: [
      'my friend ahmed speaks arabic and English.',
      'My friend Ahmed speaks Arabic and English.',
      'My friend Ahmed speaks Arabic and english?',
      'my friend Ahmed speaks Arabic and English!'
    ],
    correctIndex: 1,
    explanationEn: 'The first word "My", the name "Ahmed", and languages "Arabic" and "English" must all be capitalized, ending with a period.',
    explanationAr: 'أول الجملة (My)، اسم الشخص (Ahmed)، واللغات (Arabic و English) كلها بحروف كبيرة، وتنتهي بنقطة.'
  },
  {
    id: 2,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'In which sentence are proper nouns vs. common nouns capitalized correctly?',
    questionAr: 'في أي جملة تم تطبيق الحروف الكبيرة للأسماء الخاصة والعامة بالشكل الصحيح؟',
    options: [
      'Turkey has coasts on the black sea and the mediterranean sea.',
      'Turkey has coasts on the Black Sea and the Mediterranean Sea.',
      'turkey has Coasts on the Black sea and the Mediterranean sea.',
      'Turkey has coasts on the Black sea and Mediterranean sea.'
    ],
    correctIndex: 1,
    explanationEn: 'Country "Turkey" and specific bodies of water "Black Sea" and "Mediterranean Sea" are proper nouns requiring capitalization for both words.',
    explanationAr: 'اسم الدولة Turkey وأسماء البحار المحددة Black Sea و Mediterranean Sea أسماء علم خاصة فيكتب كلاهما بحرف كبير، بينما coasts اسم عام صغير.'
  },
  {
    id: 3,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which sentence correctly handles the pronoun "I"?',
    questionAr: 'أي الجمل التالية تطبق قاعدة ضمير المتكلم "I" بشكل صحيح؟',
    options: [
      'Although it was raining, i walked to university.',
      'Although it was raining, I walked to university.',
      'Although it was raining, I walked to University.',
      'although it was raining, i walked to university.'
    ],
    correctIndex: 1,
    explanationEn: 'The pronoun "I" must ALWAYS be capitalized wherever it appears in a sentence. "university" is a common noun here and remains lowercase.',
    explanationAr: 'الضمير I يكتب كبيراً دائماً أينما ورد في الجملة. وكلمة university اسم عام هنا فتبقى صغيرة.'
  },
  {
    id: 4,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which day and month are capitalized correctly?',
    questionAr: 'أي العبارات التالية صحيحة من حيث كتابة أيام الأسبوع والشهور وفصول السنة؟',
    options: [
      'We will travel on friday in november during the Summer.',
      'We will travel on Friday in November during the summer.',
      'We will travel on Friday in november during the summer.',
      'We will travel on friday in November during the Summer.'
    ],
    correctIndex: 1,
    explanationEn: 'Days of the week (Friday) and months (November) are capitalized. Seasons of the year (summer, winter) are NOT capitalized.',
    explanationAr: 'أيام الأسبوع (Friday) والشهور (November) تبدأ بحرف كبير، بينما فصول السنة (summer) تبدأ بحرف صغير.'
  },
  {
    id: 5,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which title and person name combination is capitalized correctly?',
    questionAr: 'أي أسماء الألقاب والأشخاص التالية مكتوبة بحروف كبيرة صحيحة؟',
    options: [
      'Yesterday, dr. Jenkins and professor ali attended the conference.',
      'Yesterday, Dr. Jenkins and Professor Ali attended the conference.',
      'Yesterday, Dr. jenkins and Professor ali attended the conference.',
      'Yesterday, dr. jenkins and professor Ali attended the conference.'
    ],
    correctIndex: 1,
    explanationEn: 'Official titles preceding names (Dr., Professor) and the names themselves (Jenkins, Ali) must be capitalized.',
    explanationAr: 'الألقاب الرسمية التي تسبق الأسماء (Dr., Professor) والأسماء نفسها تبدأ كلها بحروف كبيرة.'
  },
  {
    id: 6,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'What is the correct punctuation mark for: "Can you name three major benefits of exercising regularly"',
    questionAr: 'ما هي علامة الترقيم الصحيحة لنهاية هذه الجملة؟',
    options: [
      'Period (.)',
      'Question mark (?)',
      'Exclamation mark (!)',
      'Comma (,)'
    ],
    correctIndex: 1,
    explanationEn: 'The sentence begins with the modal question word "Can" and asks a direct question, requiring a question mark (?).',
    explanationAr: 'الجملة تبدأ بفعل مساعد طلبي (Can) وهي سؤال مباشر، فيجب وضع علامة استفهام (?).'
  },
  {
    id: 7,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which of the following common nouns should NOT be capitalized in a standard sentence?',
    questionAr: 'أي من الأسماء العامة التالية يجب ألا يبدأ بحرف كبير في الجملة العادية؟',
    options: [
      'Egypt',
      'Arabic',
      'Country',
      'Sunday'
    ],
    correctIndex: 2,
    explanationEn: '"country" is a general common noun and should remain lowercase unless it begins a sentence or is part of an official name.',
    explanationAr: 'كلمة country اسم عام ولا تكتب بحرف كبير، بينما Egypt دولة، Arabic لغة، و Sunday يوم.'
  },
  {
    id: 8,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'What end punctuation is required: "Look at that terrifying wild bear walking directly toward our car"',
    questionAr: 'ما هي علامة الترقيم المناسبة لهذه الجملة التي تعبر عن انفعال وخطر قوي؟',
    options: [
      'Period (.)',
      'Question mark (?)',
      'Exclamation mark (!)',
      'Semicolon (;)'
    ],
    correctIndex: 2,
    explanationEn: 'An urgent command or strong emotional exclamation describing immediate danger takes an exclamation point (!).',
    explanationAr: 'جملة التحذير أو الانفعال القوي والشعور المفاجئ تنتهي بعلامة تعجب (!).'
  },
  {
    id: 9,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'How many capitalization errors are in: "in fact, simon bolivar helped six south american countries become independent."',
    questionAr: 'كم عدد أخطاء الحروف الكبيرة في هذه الجملة؟',
    options: [
      '2 errors',
      '3 errors',
      '4 errors (In, Simon, Bolivar, South American)',
      '5 errors'
    ],
    correctIndex: 2,
    explanationEn: 'There are 4 errors: "In" (first word), "Simon", "Bolivar" (person\'s name), and "South American" (proper nationality/region).',
    explanationAr: 'توجد 4 أخطاء: In أول الجملة، Simon و Bolivar اسم شخص، و South American صفة القارة/الجنسية.'
  },
  {
    id: 10,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which of the following is true about end punctuation in English writing?',
    questionAr: 'أي من العبارات التالية صحيحة بشأن علامات الترقيم في الكتابة الإنجليزية؟',
    options: [
      'Every sentence must end with a period, question mark, or exclamation mark.',
      'Paragraph titles must always end with a period.',
      'A question mark is used for statements of fact.',
      'Sentences can end without any punctuation mark if they are short.'
    ],
    correctIndex: 0,
    explanationEn: 'Every complete English sentence must conclude with an appropriate end punctuation mark (. / ? / !). Paragraph titles never take a period.',
    explanationAr: 'كل جملة في اللغة الإنجليزية يجب أن تنتهي بعلامة ترقيم (. أو ? أو !)، بينما عنوان البارقراف لا ينتهي بنقطة أبداً.'
  },

  // ==================== RULE 2: SUBJECT-VERB AGREEMENT (10 Qs) ====================
  {
    id: 11,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "The main method of transportation in these five islands (is / are / were / be) the public bus."',
    questionAr: 'اختر الفعل المناسب وفق قاعدة توافق الفاعل والفعل:',
    options: ['is', 'are', 'were', 'be'],
    correctIndex: 0,
    explanationEn: 'The subject is "The main method" (singular). The prepositional phrase "[of transportation in these five islands]" does not affect the verb. Singular takes "is".',
    explanationAr: 'الفاعل هو method (مفرد)، وشبه الجملة بعد حرف الجر [of transportation...] ليست الفاعل، لذا نختار is.'
  },
  {
    id: 12,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "The tall trees behind the new high school (is / are / was / being) very healthy."',
    questionAr: 'اختر الفعل المناسب: الفاعل جمع متبوع بشبه جملة:',
    options: ['is', 'are', 'was', 'being'],
    correctIndex: 1,
    explanationEn: 'The true subject is "The tall trees" (plural). Plural takes "are".',
    explanationAr: 'الفاعل الحقيقي هو trees (جمع)، لذا يأخذ are.'
  },
  {
    id: 13,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "Everyone in the two advanced English classes (need / needs / needing / are needing) a dictionary."',
    questionAr: 'اختر الفعل الصحيح مع الفاعل Everyone:',
    options: ['need', 'needs', 'needing', 'are needing'],
    correctIndex: 1,
    explanationEn: 'Indefinite pronouns such as "everyone", "everybody", and "each" are grammatically singular and take verb + -s ("needs").',
    explanationAr: 'الضمائر غير المحددة (everyone, everybody, each) مفردة دائماً وتأخذ الفعل مع s (needs).'
  },
  {
    id: 14,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Complete correctly: "Drinking fresh milk and orange juice (is / are) recommended for athletes."',
    questionAr: 'اختر الفعل عند بدء الجملة بـ Gerund (اسم ينتهي بـ -ing):',
    options: ['is', 'are', 'were', 'be'],
    correctIndex: 0,
    explanationEn: 'A gerund used as a subject (Drinking...) is treated as singular and takes "is".',
    explanationAr: 'المصدر الصريح (Gerund المبدوء بـ -ing كاسم فاعل) يعامل معاملة المفرد ويأخذ is.'
  },
  {
    id: 15,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct form: "There (is / are) three important reasons for this medical decision."',
    questionAr: 'اختر الفعل الصحيح بعد There:',
    options: ['is', 'are', 'was', 'be'],
    correctIndex: 1,
    explanationEn: 'In sentences starting with "There is / There are", the true subject follows the verb. "three important reasons" is plural, requiring "are".',
    explanationAr: 'بعد There، الفاعل يأتي بعد الفعل. و three reasons جمع لذا نستخدم are.'
  },
  {
    id: 16,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct form: "There (is / are) a modern dictionary on the teacher\'s desk."',
    questionAr: 'اختر الفعل المناسب: الفاعل مفرد بعد There:',
    options: ['is', 'are', 'were', 'have'],
    correctIndex: 0,
    explanationEn: '"a modern dictionary" is singular, so it requires "There is".',
    explanationAr: 'الاسم a modern dictionary مفرد، لذا يأخذ There is.'
  },
  {
    id: 17,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Complete the sentence: "A pilot and a copilot (flies / fly / flying / is flying) this large passenger plane."',
    questionAr: 'اختر الفعل لفاعلين مربوطين بـ and:',
    options: ['flies', 'fly', 'flying', 'is flying'],
    correctIndex: 1,
    explanationEn: 'Two subjects joined by "and" (A pilot and a copilot) form a compound plural subject, taking base verb "fly".',
    explanationAr: 'فاعلان مربوطان بـ and يشكلان فاعلاً جمعاً، فيأخذان الفعل المجرد بدون s وهو fly.'
  },
  {
    id: 18,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Which question correctly returns the verb to its base form after "does"?',
    questionAr: 'أي الأسئلة التالية يعيد الفعل إلى أصله ومصدره بعد does؟',
    options: [
      'Does she works at the hospital?',
      'Does she work at the hospital?',
      'Does she working at the hospital?',
      'Does she worked at the hospital?'
    ],
    correctIndex: 1,
    explanationEn: 'After the auxiliary "does" or "doesn\'t", the main verb reverts to base form ("work").',
    explanationAr: 'بعد does أو doesn\'t يرجع الفعل إلى مصدره المجرد بدون s (work).'
  },
  {
    id: 19,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "Each player on both teams (need / needs / needing) to run very fast."',
    questionAr: 'اختر الفعل المناسب للفاعل Each player:',
    options: ['need', 'needs', 'needing', 'are needing'],
    correctIndex: 1,
    explanationEn: '"Each" is singular and takes the singular verb form ending in -s ("needs"). The phrase "on both teams" does not change the subject.',
    explanationAr: 'كلمة Each مفردة وتأخذ الفعل مع s (needs)، وشبه الجملة on both teams لا تؤثر على الفاعل.'
  },
  {
    id: 20,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "Laughing with friends (is / are) a wonderful way to relieve mental stress."',
    questionAr: 'اختر الفعل الصحيح مع اسم الفاعل Laughing:',
    options: ['is', 'are', 'were', 'be'],
    correctIndex: 0,
    explanationEn: '"Laughing with friends" is an -ing gerund subject, which is singular and takes "is".',
    explanationAr: 'اسم الفاعل (Laughing with friends) يعامل معاملة المفرد ويأخذ is.'
  },

  // ==================== RULE 3: SENTENCE TYPES (10 Qs) ====================
  {
    id: 21,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Chile imports oil from Brazil and exports copper to China."',
    questionAr: 'ما نوع هذه الجملة (Simple, Compound, Complex)؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Sentence Fragment'
    ],
    correctIndex: 0,
    explanationEn: 'It has one subject ("Chile") and a compound verb ("imports ... and exports ...") in ONE independent clause without a comma. This is a Simple Sentence.',
    explanationAr: 'جملة بسيطة (Simple) لأنها تحتوي على جملة مستقلة واحدة فقط ذات فاعل واحد وفعلين مربوطين بـ and بلا فاصلة وبلا فاعل ثانٍ.'
  },
  {
    id: 22,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Chile exports copper, and Brazil exports sugar."',
    questionAr: 'ما نوع هذه الجملة التي تربط جملتين كاملتين بفاصلة مع and؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Sentence Fragment'
    ],
    correctIndex: 1,
    explanationEn: 'It connects two independent clauses (each with its own subject and verb) using a comma and the coordinating conjunction "and". This is a Compound Sentence.',
    explanationAr: 'جملة مركبة (Compound) لأنها تربط بين جملتين مستقلتين كاملتين بفاصلة مع أداة العطف and.'
  },
  {
    id: 23,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Because I speak three languages, I can communicate with many international visitors."',
    questionAr: 'ما نوع هذه الجملة التي تبدأ بـ Because؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Run-on Sentence'
    ],
    correctIndex: 2,
    explanationEn: 'It contains one dependent adverb clause ("Because I speak three languages") and one independent clause ("I can communicate..."). This is a Complex Sentence.',
    explanationAr: 'جملة معقدة (Complex) لأنها تحتوي على عبارة تابعة تبدأ بـ Because وجملة رئيسية مستقلة.'
  },
  {
    id: 24,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Which coordinating conjunction denotes result (النتيجة) in a compound sentence?',
    questionAr: 'أي أداة عطف تدل على النتيجة في الجملة المركبة؟',
    options: [
      'and (إضافة)',
      'but (تعارض)',
      'so (نتيجة)',
      'or (اختيار)'
    ],
    correctIndex: 2,
    explanationEn: '"so" expresses result or consequence. For example: "I was tired, so I went to bed early."',
    explanationAr: 'أداة العطف so تعبر عن النتيجة (كنت متعباً، لذلك نمت مبكراً).'
  },
  {
    id: 25,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Which coordinating conjunction denotes contrast (التعارض) in a compound sentence?',
    questionAr: 'أي أداة عطف تدل على التعارض والمقارنة المخالفة؟',
    options: [
      'and',
      'but',
      'so',
      'or'
    ],
    correctIndex: 1,
    explanationEn: '"but" shows contrast between two opposite or differing ideas.',
    explanationAr: 'أداة العطف but تدل على التعارض والتناقض بين فكرتين.'
  },
  {
    id: 26,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'In the sentence: "People who exercise regularly are healthier.", what type of clause is "who exercise regularly"?',
    questionAr: 'في الجملة السابقة، ما نوع العبارة التي تبدأ بـ who وتصف الأشخاص؟',
    options: [
      'Adjective clause (عبارة وصفية / نعتية)',
      'Adverb clause (عبارة ظرفية)',
      'Independent clause (جملة رئيسية)',
      'Coordinating clause'
    ],
    correctIndex: 0,
    explanationEn: 'Clauses beginning with relative pronouns (who, which, that) that describe a noun are Adjective Clauses.',
    explanationAr: 'العبارات التي تبدأ بـ who أو which أو that وتصف اسماً هي Adjective clauses (عبارات وصفية).'
  },
  {
    id: 27,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Which connecting word introduces an Adverb Clause expressing concession/contrast?',
    questionAr: 'أي الكلمات التالية تبدأ بها عبارة ظرفية تفيد التناقض والتعارض؟',
    options: [
      'although',
      'who',
      'which',
      'and'
    ],
    correctIndex: 0,
    explanationEn: '"although" introduces an adverb clause showing contrast. "who" and "which" introduce adjective clauses.',
    explanationAr: 'كلمة although تبدأ بها عبارة ظرفية تفيد التناقض (رغم أن)، بينما who و which للعبارات الوصفية.'
  },
  {
    id: 28,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Central Park has a zoo, but sometimes it is too cold to visit in winter."',
    questionAr: 'ما نوع الجملة: جملتان كاملتان وبينهما فاصلة و but؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Sentence Fragment'
    ],
    correctIndex: 1,
    explanationEn: 'Two independent clauses joined by comma + "but" form a Compound Sentence.',
    explanationAr: 'جملة مركبة (Compound Sentence) لوجود جملتين مستقلتين مربوطتين بفاصلة مع but.'
  },
  {
    id: 29,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "When bad weather and strong winds mix, the result is a dangerous storm."',
    questionAr: 'ما نوع هذه الجملة التي تبدأ بـ When؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Run-on Sentence'
    ],
    correctIndex: 2,
    explanationEn: 'It begins with an adverb time clause ("When...") followed by an independent clause. This is a Complex Sentence.',
    explanationAr: 'جملة معقدة (Complex) لأنها تبدأ بعبارة ظرفية زمنية تابعة (When...) تليها الجملة المستقلة.'
  },
  {
    id: 30,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Which sentence is a Simple Sentence with a compound subject?',
    questionAr: 'أي الجمل التالية جملة بسيطة (Simple) ذات فاعل مركب؟',
    options: [
      'Tokyo and Kyoto are famous historical cities in Japan.',
      'Tokyo is modern, and Kyoto is historic.',
      'Because Tokyo is big, many people live there.',
      'Tokyo has skyscrapers, but Kyoto has temples.'
    ],
    correctIndex: 0,
    explanationEn: '"Tokyo and Kyoto are famous cities" is a single independent clause with a compound subject (Tokyo and Kyoto).',
    explanationAr: 'الجملة الأولى بسيطة (Simple) لأنها جملة واحدة مستقلة تحتوي فاعلين مربوطين بـ and وفعلاً واحداً are.'
  },

  // ==================== RULE 4: COMMAS (10 Qs) ====================
  {
    id: 31,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which sentence correctly uses commas in a series of three items?',
    questionAr: 'أي الجمل التالية طبقت قاعدة الفواصل في التعداد الثلاثي بشكل سليم؟',
    options: [
      'I speak English, Spanish and, Japanese.',
      'I speak English, Spanish, and Japanese.',
      'I speak, English, Spanish, and Japanese.',
      'I speak English, and Spanish and Japanese.'
    ],
    correctIndex: 1,
    explanationEn: 'In a list of three or more items, commas separate the elements, with a comma before "and": "English, Spanish, and Japanese."',
    explanationAr: 'في قائمة من 3 عناصر، نضع فاصلة بعد كل عنصر مع فاصلة قبل and الأخيرة.'
  },
  {
    id: 32,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'When listing only TWO items, what is the comma rule?',
    questionAr: 'ما هي قاعدة الفاصلة عند تعداد عنصرين اثنين فقط؟',
    options: [
      'Always use a comma before and.',
      'Do not use a comma with two things (use "and" without comma).',
      'Put a comma after both things.',
      'Use a semicolon instead.'
    ],
    correctIndex: 1,
    explanationEn: 'We do not use a comma with two things. Example: "I speak English and Spanish" (no comma!).',
    explanationAr: 'مع عنصرين فقط لا نضع فاصلة قبل and: I speak English and Spanish.'
  },
  {
    id: 33,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Where should the comma be placed: "Brazil is surrounded by Spanish-speaking countries but most people in Brazil speak Portuguese."',
    questionAr: 'أين يجب وضع الفاصلة الإلزامية في هذه الجملة المركبة؟',
    options: [
      'After "countries," (before "but")',
      'After "Spanish-speaking"',
      'After "Brazil"',
      'No comma is needed'
    ],
    correctIndex: 0,
    explanationEn: 'In a compound sentence, a comma must precede the coordinating conjunction (before "but") between two independent clauses.',
    explanationAr: 'في الجملة المركبة، يجب وضع فاصلة قبل أداة العطف but التي تفصل بين الجملتين المستقلتين.'
  },
  {
    id: 34,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which introductory transition word correctly takes a comma?',
    questionAr: 'أي الكلمات والعبارات الانتقالية التالية تتبعها فاصلة إجبارية في بداية الجملة؟',
    options: [
      'First, you must create a clear outline.',
      'However the weather was cold.',
      'In addition he studied hard.',
      'Therefore we stayed inside.'
    ],
    correctIndex: 0,
    explanationEn: 'Introductory transitions and sequence words like "First,", "However,", "In addition,", and "Therefore," must be followed by a comma.',
    explanationAr: 'الكلمات الانتقالية الافتتاحية (First, / However, / In addition,) يجب أن تتبعها فاصلة دائماً.'
  },
  {
    id: 35,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Choose the sentence with the CORRECT comma usage for an introductory adverb clause:',
    questionAr: 'اختر الجملة الصحيحة ترقيماً عندما تبدأ بعبارة ظرف وسبب (adverb clause):',
    options: [
      'Because I speak three languages I can communicate easily.',
      'Because I speak three languages, I can communicate easily.',
      'I can communicate easily, because I speak three languages.',
      'Because, I speak three languages I can communicate.'
    ],
    correctIndex: 1,
    explanationEn: 'When the adverb clause begins the sentence, a comma must follow it: "Because I speak three languages, I can...".',
    explanationAr: 'إذا بدأت الجملة بعبارة سبب مثل Because، نضع فاصلة بعدها مباشرة قبل الجملة الرئيسية.'
  },
  {
    id: 36,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which sentence correctly omits the comma when the adverb clause is at the END?',
    questionAr: 'أي الجمل التالية تطبق قاعدة عدم وضع فاصلة عندما تأتي because في النهاية؟',
    options: [
      'I can communicate with many people because I speak three languages.',
      'I can communicate with many people, because I speak three languages.',
      'I can communicate, with many people because I speak three languages.',
      'I can communicate with many people because, I speak three languages.'
    ],
    correctIndex: 0,
    explanationEn: 'Do NOT use a comma if the adverb clause (with because, when, if) comes at the end of the sentence.',
    explanationAr: 'إذا جاءت عبارة السبب والظرف (because / when) في نهاية الجملة، فلا نضع فاصلة قبلها إطلاقاً.'
  },
  {
    id: 37,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which sentence correctly punctuates an introductory prepositional time phrase?',
    questionAr: 'أي الجمل التالية استخدمت الفاصلة بشكل سليم بعد شبه جملة زمنية افتتاحية؟',
    options: [
      'In the summer of 1940 German soldiers entered France.',
      'In the summer of 1940, German soldiers entered France.',
      'In, the summer of 1940 German soldiers entered France.',
      'In the summer of 1940 German soldiers, entered France.'
    ],
    correctIndex: 1,
    explanationEn: 'A comma separates an introductory prepositional time phrase from the main subject: "In the summer of 1940, German soldiers...".',
    explanationAr: 'توضع فاصلة بعد شبه الجملة الزمنية الافتتاحية: In the summer of 1940,.'
  },
  {
    id: 38,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Identify the comma error in: "My friend has an e-reader, and she convinced me to buy one."',
    questionAr: 'هل الجملة السابقة صحيحة ترقيماً أم تحتوي خطأ فاصلة؟',
    options: [
      'It is 100% correct (comma before "and" separating two independent clauses).',
      'Remove the comma before and.',
      'Move the comma after and.',
      'Change the comma to a question mark.'
    ],
    correctIndex: 0,
    explanationEn: 'It is completely correct. Two independent clauses joined by coordinating conjunction "and" require a comma before "and".',
    explanationAr: 'الجملة صحيحة تماماً؛ لأن جملتين كاملتين ربطتا بـ and تتطلبان فاصلة قبل and.'
  },
  {
    id: 39,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Where must commas be inserted: "The flags of Chile France and Norway have blue white and red sections."',
    questionAr: 'أين يجب وضع الفواصل في هذه القوائم؟',
    options: [
      'Chile, France, and Norway ... blue, white, and red',
      'Chile France, and Norway ... blue white and red',
      'Chile, France and Norway, ... blue, white and red,',
      'No commas needed'
    ],
    correctIndex: 0,
    explanationEn: 'Both sets are three-item lists requiring commas: "Chile, France, and Norway" and "blue, white, and red".',
    explanationAr: 'توجد قائمتان ثلاثيتان: الأولى أسماء الدول (Chile, France, and Norway) والثانية الألوان (blue, white, and red).'
  },
  {
    id: 40,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which of the following concluding transitions requires a comma immediately after it?',
    questionAr: 'أي من الكلمات الانتقالية الختامية التالية يجب أن تتبعها فاصلة فوراً؟',
    options: [
      'In conclusion,',
      'Overall,',
      'For these reasons,',
      'All of the above'
    ],
    correctIndex: 3,
    explanationEn: 'All introductory concluding transition phrases ("In conclusion,", "Overall,", "For these reasons,") require a comma immediately following them.',
    explanationAr: 'جميع عبارات الانتقال الختامية المذكورة يجب أن تتبعها فاصلة مباشرة.'
  },

  // ==================== RULE 5: SENTENCE ERRORS (10 Qs) ====================
  {
    id: 41,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'What error is present here: "Because the wind and rain were so strong when the airplane tried to take off."',
    questionAr: 'ما نوع الخطأ في هذه العبارة المعلقة؟',
    options: [
      'Sentence Fragment (جملة ناقصة)',
      'Run-on Sentence',
      'Comma Splice',
      'Correct sentence'
    ],
    correctIndex: 0,
    explanationEn: 'This is a Sentence Fragment because it begins with "Because" and is only a dependent clause without an independent main clause.',
    explanationAr: 'جملة ناقصة (Sentence Fragment) لأنها عبارة ظرفية معلقة تبدأ بـ Because وتفتقر إلى جملة رئيسية مستقلة.'
  },
  {
    id: 42,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'What error is present: "I went to Italy last summer I did not visit Milan."',
    questionAr: 'ما نوع الخطأ عند دمج جملتين كاملتين دون علامات ترقيم ولا أدوات ربط؟',
    options: [
      'Sentence Fragment',
      'Run-on Sentence (جملة مدمجة)',
      'Comma Splice',
      'Subject-verb agreement error'
    ],
    correctIndex: 1,
    explanationEn: 'A Run-on sentence combines two independent clauses without any punctuation or conjunction.',
    explanationAr: 'جملة مدمجة (Run-on) لدمج جملتين كاملتين دون نقطة أو فاصلة أو أداة ربط.'
  },
  {
    id: 43,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'What error is present: "I went to Italy last summer, it was a great trip."',
    questionAr: 'ما نوع الخطأ عند ربط جملتين كاملتين بفاصلة فقط دون أداة ربط؟',
    options: [
      'Sentence Fragment',
      'Run-on Sentence',
      'Comma Splice (وصل خاطئ بالفاصلة)',
      'Correct sentence'
    ],
    correctIndex: 2,
    explanationEn: 'A Comma Splice occurs when two independent clauses are joined by only a comma without a coordinating conjunction (and/but/so).',
    explanationAr: 'خطأ Comma Splice لربط جملتين مستقلتين كاملتين بفاصلة فقط دون أداة ربط مثل and.'
  },
  {
    id: 44,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'How can this Comma Splice be corrected: "Dancing with the Stars is a well-known television show, the dancing is very exciting."',
    questionAr: 'كيف تصحح خطأ الـ Comma Splice في هذه الجملة؟',
    options: [
      'Add "and" after the comma: "...television show, and the dancing is very exciting."',
      'Separate into two sentences with a period: "...television show. The dancing is very exciting."',
      'Both A and B are correct.',
      'Remove the comma entirely without adding anything.'
    ],
    correctIndex: 2,
    explanationEn: 'A comma splice can be corrected either by adding a coordinating conjunction (", and") or by separating the two clauses into two complete sentences with a period.',
    explanationAr: 'يصحح خطأ Comma Splice بإضافة أداة ربط بعد الفاصلة (, and) أو بفصلهما بنقطة كجملتين مستقلتين.'
  },
  {
    id: 45,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Which of the following is a Sentence Fragment missing a main verb?',
    questionAr: 'أي الجمل التالية جملة ناقصة (Fragment) لغياب الفعل الأساسي؟',
    options: [
      'For some teachers, a fragment a very serious type of mistake.',
      'For some teachers, a fragment is a very serious type of mistake.',
      'A fragment causes confusion for readers.',
      'Teachers dislike fragments.'
    ],
    correctIndex: 0,
    explanationEn: 'Option A lacks the verb "is" ("...a fragment [is] a very serious..."), making it a Fragment.',
    explanationAr: 'الجملة الأولى تفتقر إلى الفعل الأساسي is، فهي جملة ناقصة Fragment.'
  },
  {
    id: 46,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Which sentence correctly punctuates the transition word "However"?',
    questionAr: 'أي الجمل التالية استخدمت كلمة However بترقيم صحيح؟',
    options: [
      'It is a difficult time for people, however people are strong.',
      'It is a difficult time for people. However, people are strong.',
      'It is a difficult time for people however people are strong.',
      'It is a difficult time for people, however, people are strong.'
    ],
    correctIndex: 1,
    explanationEn: '"However" cannot connect two sentences with just a comma. It must start a new sentence followed by a comma (or follow a semicolon).',
    explanationAr: 'كلمة However عبارة انتقال وليست أداة عطف كـ and، لذا تبدأ جملة جديدة تتبعها فاصلة (. However,).'
  },
  {
    id: 47,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Identify the error: "A whale is one of the largest animals on Earth, few people have seen one."',
    questionAr: 'ما نوع الخطأ في الجملة السابقة؟',
    options: [
      'Sentence Fragment',
      'Comma Splice',
      'Run-on Sentence',
      'Subject-verb agreement'
    ],
    correctIndex: 1,
    explanationEn: 'Two complete independent clauses separated only by a comma is a Comma Splice.',
    explanationAr: 'جملتان كاملتان تفصل بينهما فاصلة فقط، وهذا هو خطأ Comma Splice.'
  },
  {
    id: 48,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'How do you fix this Fragment: "In order to fly to an international destination."',
    questionAr: 'كيف نعالج هذه الجملة الناقصة (Fragment)؟',
    options: [
      'Change "to" to "for".',
      'Attach it to an independent clause: "In order to fly to an international destination, travelers need a passport."',
      'Put a question mark at the end.',
      'Capitalize every word.'
    ],
    correctIndex: 1,
    explanationEn: 'Attach the prepositional/infinitive phrase to a complete independent clause containing a subject and verb.',
    explanationAr: 'علاج الجملة الناقصة هو ربطها بجملة رئيسية كاملة تحتوي فاعلاً وفعلاً.'
  },
  {
    id: 49,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Which sentence is a Run-on sentence?',
    questionAr: 'أي الجمل التالية جملة مدمجة (Run-on)؟',
    options: [
      'This magazine has great articles on international events it won awards last year.',
      'This magazine has great articles on international events, and it won awards last year.',
      'This magazine has great articles on international events. It won awards last year.',
      'Because this magazine has great articles, it won awards.'
    ],
    correctIndex: 0,
    explanationEn: 'Option A combines two sentences without any punctuation mark or conjunction between them.',
    explanationAr: 'الخيار الأول يدمج جملتين كاملتين دون نقطة أو فاصلة أو أداة عطف، وهو Run-on.'
  },
  {
    id: 50,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Why is "Although the price of gasoline is extremely high at the current time." a Fragment?',
    questionAr: 'لماذا تعتبر هذه العبارة جملة ناقصة (Fragment)؟',
    options: [
      'Because it lacks an independent clause showing what happens as a result.',
      'Because the word gasoline is misspelled.',
      'Because it should start with Therefore.',
      'Because it has too many words.'
    ],
    correctIndex: 0,
    explanationEn: '"Although" makes the clause dependent; without an independent clause attached, it cannot stand alone as a sentence.',
    explanationAr: 'لأنها عبارة تابعة تبدأ بـ Although ولا توجد جملة رئيسية مستقلة تكمل المعنى وتبين النتيجة.'
  },

  // ==================== RULE 6: COMBINING SENTENCES (10 Qs) ====================
  {
    id: 51,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "Chicago is a city. Chicago is modern. Chicago has tall buildings."',
    questionAr: 'اجمع هذه الجمل الثلاث في جملة واحدة أنيقة وموجزة:',
    options: [
      'Chicago is a city and modern with buildings.',
      'Chicago is a modern city with tall buildings.',
      'Chicago is a city, it is modern with buildings.',
      'Because Chicago is modern it has buildings.'
    ],
    correctIndex: 1,
    explanationEn: 'Placing adjective "modern" before "city" and adding "with tall buildings" creates a concise, complete sentence.',
    explanationAr: 'وضع الصفة modern قبل الاسم city مع with tall buildings يعطي جملة متكاملة وسلسة دون تكرار.'
  },
  {
    id: 52,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "There was a storm yesterday. It was strong. It moved quickly toward the city."',
    questionAr: 'اجمع الجمل الثلاث التالية مع وضع الصفة والظرف في مكانهما الصحيح:',
    options: [
      'Yesterday, a strong storm moved quickly toward the city.',
      'A storm was yesterday strong and moved quickly.',
      'There was a storm, it was strong quickly moved.',
      'Moving quickly a storm yesterday was strong.'
    ],
    correctIndex: 0,
    explanationEn: '"Yesterday, a strong storm moved quickly toward the city" places the time word first, adjective "strong" before noun "storm", and adverb "quickly" before the verb phrase.',
    explanationAr: 'جملة ممتازة من كتاب Great Writing 2 تضع الصفة strong قبل storm والظرف quickly قبل الفعل.'
  },
  {
    id: 53,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "The weather was extremely cold yesterday. A majority of the flights departed late. The flights were from Boston."',
    questionAr: 'اجمع هذه الجمل في جملة مركبة أو معقدة صحيحة:',
    options: [
      'Because the weather was extremely cold yesterday, a majority of flights from Boston departed late.',
      'The weather was cold yesterday flights from Boston departed late.',
      'Flights from Boston were cold yesterday and departed late.',
      'Because cold weather yesterday, flights departed.'
    ],
    correctIndex: 0,
    explanationEn: 'Using "Because..." to show cause and placing "from Boston" after "flights" accurately combines all details.',
    explanationAr: 'استخدام Because لبيان سبب تأخر الرحلات مع وضع from Boston يدمج كل التفاصيل دون نقصان.'
  },
  {
    id: 54,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'When combining sentences, what is the golden rule regarding ideas?',
    questionAr: 'ما هي القاعدة الذهبية عند دمج الجمل وفق كتابك؟',
    options: [
      'You can change word forms, but you must NOT change or omit any original ideas.',
      'You should delete half of the information.',
      'You must always use the word "because".',
      'You must never change any word forms.'
    ],
    correctIndex: 0,
    explanationEn: 'Textbook rule: "A word or word form may change, but no ideas are changed or omitted."',
    explanationAr: 'قاعدة الكتاب: يمكنك تغيير صيغ الكلمات (من اسم إلى صفة مثلاً)، ولكن يمنع منعاً باتاً حذف أو تغيير أي فكرة أصلية.'
  },
  {
    id: 55,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "Writers should make a list. This is a list of ideas. The ideas are important. Writers should do this before they begin writing."',
    questionAr: 'اجمع هذه الجمل الأربع في جملة واحدة احترافية:',
    options: [
      'Before they begin writing, writers should make a list of important ideas.',
      'Writers make a list ideas are important before writing.',
      'A list of ideas is made by writers writing.',
      'Writers should make an ideas list writing before.'
    ],
    correctIndex: 0,
    explanationEn: 'Introductory time clause "Before they begin writing," followed by "writers should make a list of important ideas" smoothly conveys all information.',
    explanationAr: 'البدء بـ Before they begin writing ثم وضع الصفة important قبل ideas يدمج الجمل بسلاسة تامة.'
  },
  {
    id: 56,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "Wood is a resource. This resource is natural. This resource is abundant. This resource is in Canada."',
    questionAr: 'اجمع جمل المورد الطبيعي في جملة واحدة:',
    options: [
      'Wood is an abundant natural resource in Canada.',
      'Wood is a resource, it is natural abundant in Canada.',
      'In Canada wood is resource natural and abundant.',
      'Because wood is natural, it is abundant resource.'
    ],
    correctIndex: 0,
    explanationEn: 'Placing adjectives "abundant" and "natural" before "resource" and adding "in Canada" produces a clean, cohesive sentence.',
    explanationAr: 'وضع الصفتين abundant و natural قبل resource وإضافة in Canada يدمج المعنى باختصار وقوة.'
  },
  {
    id: 57,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "Canada is a country. Canada is large. The population of Canada is very small."',
    questionAr: 'اجمع الجمل مستخدماً أداة تعارض مناسبة:',
    options: [
      'Canada is a large country, but its population is very small.',
      'Canada is large country and population small.',
      'Although Canada is country population small.',
      'Because Canada is large its population is small.'
    ],
    correctIndex: 0,
    explanationEn: '"Canada is a large country, but its population is very small" correctly combines the clauses using comma + "but" for contrast.',
    explanationAr: 'دمج الصفة large country واستخدام but للتعارض بين مساحة كندا وعدد سكانها الصغير.'
  },
  {
    id: 58,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine using an adjective clause: "The assignment is to write a paper. The paper should explain how the War of 1812 started."',
    questionAr: 'ادمج الجملتين باستخدام اسم موصول (that / which):',
    options: [
      'The assignment is to write a paper that explains how the War of 1812 started.',
      'The assignment is to write a paper, and a paper explains the war.',
      'Writing a paper is assignment war started.',
      'Because of the assignment, the paper explains the War of 1812.'
    ],
    correctIndex: 0,
    explanationEn: 'Using "that explains..." as an adjective clause modifying "paper" creates a sophisticated complex sentence.',
    explanationAr: 'استخدام that explains كعبارة وصل تصف paper لدمج الجملتين بأسلوب أكاديمي.'
  },
  {
    id: 59,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine: "Jim Thorpe won medals. The medals were Olympic medals. They were gold medals. He won them in 1912."',
    questionAr: 'اجمع هذه الجمل الأربع في جملة واحدة:',
    options: [
      'In 1912, Jim Thorpe won Olympic gold medals.',
      'Jim Thorpe won medals Olympic gold in 1912.',
      'Olympic gold medals won Jim Thorpe in 1912.',
      'Because of Olympic medals, Jim Thorpe won gold in 1912.'
    ],
    correctIndex: 0,
    explanationEn: '"In 1912, Jim Thorpe won Olympic gold medals" combines all details without unnecessary wordiness.',
    explanationAr: 'البدء بالتاريخ In 1912 ودمج الصفتين Olympic gold قبل medals يختصر الجمل دون حذف أي معلومة.'
  },
  {
    id: 60,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Where should adjectives usually be placed when combining sentences?',
    questionAr: 'أين نضع الصفات عادة عند دمج الجمل في اللغة الإنجليزية؟',
    options: [
      'Directly before the noun they modify.',
      'At the very end of the paragraph.',
      'After the period.',
      'Between commas.'
    ],
    correctIndex: 0,
    explanationEn: 'Adjectives in English are placed immediately before the nouns they describe (e.g., "tall buildings", "modern city").',
    explanationAr: 'الصفات في اللغة الإنجليزية توضع دائماً قبل الأسماء التي تصفها مباشرة.'
  },

  // ==================== RULE 7: PARAGRAPH ELEMENTS & TITLE (10 Qs) ====================
  {
    id: 61,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'What is the Golden Formula for a Topic Sentence?',
    questionAr: 'ما هي المعادلة الذهبية للجملة الافتتاحية (Topic Sentence)؟',
    options: [
      'Topic Sentence = Topic + Controlling Idea',
      'Topic Sentence = Subject + Verb + Period',
      'Topic Sentence = Fact + Number',
      'Topic Sentence = Title + Question'
    ],
    correctIndex: 0,
    explanationEn: 'A topic sentence states the main topic and includes a controlling idea that limits and guides the paragraph content.',
    explanationAr: 'المعادلة الذهبية: Topic Sentence = Topic (الموضوع العام) + Controlling Idea (الفكرة الحاكمة المحددة).'
  },
  {
    id: 62,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Why is "Tea is delicious." considered a POOR topic sentence in academic writing?',
    questionAr: 'لماذا تعتبر جملة "Tea is delicious" جملة افتتاحية ضعيفة؟',
    options: [
      'Because it is too general and lacks a clear controlling idea guiding the paragraph.',
      'Because it is too specific.',
      'Because it is a complex sentence.',
      'Because tea is healthy.'
    ],
    correctIndex: 0,
    explanationEn: 'It is too general. A strong topic sentence needs a controlling idea, such as: "Green tea provides three major health benefits."',
    explanationAr: 'لأنها عامة جداً وسطحية ولا تحتوي على فكرة حاكمة توجه ما سيحتويه البارقراف.'
  },
  {
    id: 63,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Why is "Libraries have books." considered a POOR topic sentence?',
    questionAr: 'لماذا تعتبر جملة "Libraries have books" جملة افتتاحية فاشلة؟',
    options: [
      'Because it is a pure, indisputable FACT with nothing for the writer to explain or discuss.',
      'Because libraries have computers too.',
      'Because it has spelling mistakes.',
      'Because it is too long.'
    ],
    correctIndex: 0,
    explanationEn: 'It is an obvious dead fact. A topic sentence must state an idea or claim that can be developed and supported.',
    explanationAr: 'لأنها مجرد حقيقة بديهية ميتة (Fact) لا تترك مجالاً للشرح أو المناقشة في الجمل الداعمة.'
  },
  {
    id: 64,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Why is "This dictionary contains more than 42,000 words." a POOR topic sentence?',
    questionAr: 'لماذا تعتبر جملة المعجم الذي يحتوي 42,000 كلمة جملة افتتاحية غير مناسبة؟',
    options: [
      'Because it is too specific and leaves no room for supporting development.',
      'Because dictionaries are heavy.',
      'Because it is a question.',
      'Because the number is too big.'
    ],
    correctIndex: 0,
    explanationEn: 'It is too specific. A number alone leaves nothing else for the writer to say in the rest of the paragraph.',
    explanationAr: 'لأنها تفصيلية وضيقة جداً برقم ميت (Too specific) لا يترك مجالاً لكتابة جمل داعمة تالية.'
  },
  {
    id: 65,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'What do Supporting Sentences do in a well-written paragraph?',
    questionAr: 'ما هي وظائف الجمل الداعمة (Supporting Sentences) في الفقرة؟',
    options: [
      'Explain, describe, give reasons, facts, examples, or definitions.',
      'Introduce a completely new topic.',
      'Copy the topic sentence five times.',
      'Ask random questions.'
    ],
    correctIndex: 0,
    explanationEn: 'Supporting sentences explain, describe, give reasons, facts, examples, or definitions that support the controlling idea.',
    explanationAr: 'الجمل الداعمة تشرح وتصف وتعطي أسباباً وحقائق وأمثلة وتعريفات تدعم الفكرة الحاكمة.'
  },
  {
    id: 66,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'What must a writer do with an "unrelated sentence" that strays from the topic?',
    questionAr: 'ماذا يجب أن يفعل الكاتب عند اكتشاف جملة غير مرتبطة بموضوع الفقرة؟',
    options: [
      'Cross it out and remove it completely to maintain Paragraph Unity.',
      'Put exclamation marks around it.',
      'Move it to the title.',
      'Make it bold.'
    ],
    correctIndex: 0,
    explanationEn: 'Any unrelated sentence destroys unity and must be crossed out / deleted.',
    explanationAr: 'يجب حذفها وشطبها فوراً للحفاظ على وحدة الفقرة (Paragraph Unity).'
  },
  {
    id: 67,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Which of the following is NOT an approved purpose for a Concluding Sentence?',
    questionAr: 'أي مما يلي ليس من الأغراض الأربعة المعتمدة للجملة الختامية؟',
    options: [
      'Restate the main idea.',
      'Offer a suggestion.',
      'Introduce a brand-new, unrelated idea.',
      'Give an opinion or make a prediction.'
    ],
    correctIndex: 2,
    explanationEn: 'A concluding sentence must NEVER introduce new, unexplained topics.',
    explanationAr: 'يمنع منعاً باتاً إدخال أي معلومة جديدة تماماً في الخاتمة لم يسبق شرحها في الفقرة.'
  },
  {
    id: 68,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Which of the following is the CORRECT formatting rule for an academic paragraph title?',
    questionAr: 'ما هي القاعدة الأكاديمية الصحيحة لكتابة وتنسيق عنوان البارقراف؟',
    options: [
      'Centered, short phrase, capital letters for key words, and NEVER ends with a period.',
      'Left-aligned complete sentence with a period at the end.',
      'All lowercase letters with question marks.',
      'Indented five spaces.'
    ],
    correctIndex: 0,
    explanationEn: 'A good title is a centered phrase, capitalizes key words, and NEVER ends with a period.',
    explanationAr: 'العنوان يكتب في المنتصف، عبارة قصيرة بحروف كبيرة للكلمات الرئيسية، ولا ينتهي بنقطة إطلاقاً.'
  },
  {
    id: 69,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'What is the purpose of Brainstorming before writing?',
    questionAr: 'ما هو الهدف من مرحلة العصف الذهني (Brainstorming) قبل الشروع في الكتابة؟',
    options: [
      'To generate as many ideas as possible quickly without judging, then select the best ones.',
      'To count the number of words.',
      'To memorize the dictionary.',
      'To write the final draft directly.'
    ],
    correctIndex: 0,
    explanationEn: 'Brainstorming produces ideas quickly without fear of errors, followed by circling the best ideas and crossing out weak ones.',
    explanationAr: 'توليد أكبر قدر من الأفكار بسرعة دون تردد، ثم تصفيتها واختيار الأفضل وشطب غير المناسب.'
  },
  {
    id: 70,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Which transition word is commonly used to signal a Concluding Sentence?',
    questionAr: 'أي كلمات الانتقال التالية تستخدم عادة لبدء الجملة الختامية؟',
    options: [
      'Overall,',
      'First,',
      'For example,',
      'In addition,'
    ],
    correctIndex: 0,
    explanationEn: '"Overall," (along with "In conclusion," and "For these reasons,") signals the concluding sentence.',
    explanationAr: 'كلمة Overall, (وكذلك In conclusion, و For these reasons,) هي عبارات انتقال ختامية.'
  },

  // ==================== RULE 8: FOUR FEATURES OF A GOOD PARAGRAPH (10 Qs) ====================
  {
    id: 71,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the FIRST feature of a good paragraph according to Great Writing 2?',
    questionAr: 'ما هي الميزة الأولى للفقرة الجيدة وفق كتاب Great Writing 2 (Unit 1 & 5)؟',
    options: [
      'The first line of the paragraph is indented.',
      'The paragraph has ten pictures.',
      'Every sentence ends with an exclamation point.',
      'The title is at the bottom.'
    ],
    correctIndex: 0,
    explanationEn: 'Feature 1: "The first line of a paragraph is indented" (about 5 spaces or 0.5 inches).',
    explanationAr: 'الميزة الأولى: السطر الأول من الفقرة فقط يبدأ بمسافة بادئة (Indentation).'
  },
  {
    id: 72,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the SECOND feature of a good paragraph?',
    questionAr: 'ما هي الميزة الثانية للفقرة الجيدة؟',
    options: [
      'A paragraph has a topic sentence that states the main idea.',
      'A paragraph has no verbs.',
      'A paragraph must be twenty sentences long.',
      'A paragraph is written in bullet points.'
    ],
    correctIndex: 0,
    explanationEn: 'Feature 2: "A paragraph has a topic sentence that states the main idea."',
    explanationAr: 'الميزة الثانية: وجود جملة افتتاحية (Topic Sentence) تذكر الفكرة الرئيسية وبها فكرة حاكمة.'
  },
  {
    id: 73,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the THIRD feature of a good paragraph?',
    questionAr: 'ما هي الميزة الثالثة للفقرة الجيدة؟',
    options: [
      'All of the sentences in the paragraph relate to the main idea (Paragraph Unity).',
      'Sentences can talk about anything the writer likes.',
      'Every sentence must rhyme.',
      'The paragraph has no punctuation.'
    ],
    correctIndex: 0,
    explanationEn: 'Feature 3: "All of the sentences in the paragraph relate to the main idea."',
    explanationAr: 'الميزة الثالثة: كل جمل الفقرة مرتبطة بالفكرة الرئيسية (Paragraph Unity).'
  },
  {
    id: 74,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the FOURTH feature of a good paragraph?',
    questionAr: 'ما هي الميزة الرابعة للفقرة الجيدة؟',
    options: [
      'The concluding sentence ends the paragraph logically.',
      'The paragraph ends in the middle of a thought.',
      'The concluding sentence starts a new story.',
      'The paragraph has no conclusion.'
    ],
    correctIndex: 0,
    explanationEn: 'Feature 4: "The concluding sentence ends the paragraph logically."',
    explanationAr: 'الميزة الرابعة: وجود جملة ختامية تنهي الفقرة بشكل منطقي ومحكم.'
  },
  {
    id: 75,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'How should sentences be arranged visually in a standard academic paragraph?',
    questionAr: 'كيف ترتب أسطر وجمل البارقراف بصرياً على ورقة الامتحان؟',
    options: [
      'As a continuous block of text where sentence 2 starts right after sentence 1.',
      'As a numbered list from 1 to 10.',
      'With each sentence on its own separate line.',
      'As a table with columns.'
    ],
    correctIndex: 0,
    explanationEn: 'An academic paragraph is a single continuous block. Never start every sentence on a new line or use bullet points.',
    explanationAr: 'البارقراف كتلة نصية واحدة متصلة؛ الجملة التالية تبدأ مباشرة بعد نقطة الجملة السابقة في نفس السطر.'
  },
  {
    id: 76,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the recommended sentence count for an A2 paragraph in Great Writing 2?',
    questionAr: 'ما هو عدد الجمل المثالي لفقرة المستوى A2 في كتابك؟',
    options: [
      '5 to 10 sentences (around 100 to 150 words).',
      '1 to 2 sentences.',
      '25 to 30 sentences.',
      '50 sentences.'
    ],
    correctIndex: 0,
    explanationEn: 'Textbook guidelines recommend 5 to 10 sentences (approx. 150 words) for a well-developed paragraph.',
    explanationAr: 'المعيار المعتمد في الكتاب هو من 5 إلى 10 جمل (حوالي 100 إلى 150 كلمة).'
  },
  {
    id: 77,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'In a paragraph about "How to Cook an Egg", which sentence destroys Unity?',
    questionAr: 'في فقرة عن طريقة طهي البيض، أي الجمل التالية تكسر وحدة الفقرة (Unity)؟',
    options: [
      'First, boil water in a pot for eight minutes.',
      'Second, crack the egg gently into a hot frying pan.',
      'Brown eggs taste better than white eggs.',
      'Finally, remove the cooked egg with a spoon.'
    ],
    correctIndex: 2,
    explanationEn: '"Brown eggs taste better than white eggs" is an opinion about egg colors, not a cooking step, destroying unity (Activity 12 p.76).',
    explanationAr: 'جملة "البيض البني ألذ من الأبيض" تعليق شخصي لا علاقة له بخطوات الطهي ووردت في نشاط الكتاب كجملة تكسر الـ Unity.'
  },
  {
    id: 78,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'Where is indentation applied in a paragraph?',
    questionAr: 'أين يتم تطبيق المسافة البادئة (Indentation) في الفقرة؟',
    options: [
      'Only on the very first line of the paragraph.',
      'On every line.',
      'Only on the last line.',
      'On the title.'
    ],
    correctIndex: 0,
    explanationEn: 'Indentation is applied ONLY to the first line. All subsequent lines start at the normal left margin.',
    explanationAr: 'المسافة البادئة تطبق على السطر الأول فقط، وجميع الأسطر التالية تبدأ من أول السطر بشكل طبيعي.'
  },
  {
    id: 79,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'What is the main role of the Topic Sentence in maintaining unity?',
    questionAr: 'ما هو الدور الأساسي للجملة الافتتاحية في الحفاظ على وحدة الفقرة؟',
    options: [
      'It acts as an umbrella controlling idea; every supporting sentence must fit underneath it.',
      'It provides the word count.',
      'It asks the teacher for grades.',
      'It lists all the student names.'
    ],
    correctIndex: 0,
    explanationEn: 'The topic sentence sets the boundaries; every supporting sentence must directly support its controlling idea.',
    explanationAr: 'تعمل كبوصلة ومظلة حاكمة تحدد ما هو مسموح بكتابته في الفقرة وما هو خارج عنها.'
  },
  {
    id: 80,
    ruleId: 8,
    ruleTitle: 'Four Features of a Good Paragraph',
    question: 'Which of the following concluding sentences logically concludes a paragraph about the health benefits of exercise?',
    questionAr: 'أي الجمل الختامية التالية تختم فقرة فوائد ممارسة الرياضة بشكل منطقي؟',
    options: [
      'For these reasons, if you want to improve your health, you should exercise regularly.',
      'In conclusion, gym memberships are very expensive in big cities.',
      'Therefore, my cousin bought new running shoes yesterday.',
      'First, exercise helps people lose weight.'
    ],
    correctIndex: 0,
    explanationEn: '"For these reasons, if you want to improve your health, you should exercise regularly" logically concludes by offering a suggestion based on the discussed points.',
    explanationAr: 'الجملة الأولى تختم الفقرة بتقديم نصيحة منطقية مستخلصة من الأسباب المشروحة وتبدأ بـ For these reasons.'
  }
];
