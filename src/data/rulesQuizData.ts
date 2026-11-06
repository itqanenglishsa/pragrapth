export interface RuleCategory {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryTable?: { col1: string; col2: string; col3?: string }[];
  rulesList: string[];
}

export interface RuleQuizQuestion {
  id: number;
  ruleId: number; // 1 to 8
  ruleTitle: string;
  question: string;
  questionArabic: string;
  options: string[];
  correctAnswerIndex: number;
  explanationEnglish: string;
  explanationArabic: string;
}

export const QUIZ_RULES_CATEGORIES: RuleCategory[] = [
  {
    id: 1,
    slug: 'capitalization-punctuation',
    titleAr: '1) الحروف الكبيرة وعلامات الترقيم (Capitalization & End Punctuation)',
    titleEn: 'Capitalization & End Punctuation',
    summaryAr: 'حرف كبير لأول الجملة، وللضمير I، وللأسماء الخاصة (أشخاص، أماكن، شركات، لغات وجنسيات، أيام وأشهر). النقطة (.) للخبر، وعلامة السؤال (?) للسؤال، والتعجب (!) للانفعال القوي.',
    rulesList: [
      'حرف كبير لأول الجملة وللضمير I دائماً أينما ورد.',
      'الأسماء الخاصة (Dr. Jenkins, Saudi Arabia, Arabic, English, Sunday, November).',
      'لا حرف كبير للأسماء العامة (country, city, sea) إلا إذا كانت جزءاً من اسم محدد: Black Sea, Red Sea.',
      'النقطة (.) للجملة الخبرية، (?) للسؤال، و (!) للانفعال القوي.'
    ]
  },
  {
    id: 2,
    slug: 'subject-verb-agreement',
    titleAr: '2) توافق الفاعل والفعل في المضارع البسيط (Subject-Verb Agreement)',
    titleEn: 'Subject-Verb Agreement in Simple Present',
    summaryAr: 'he / she / it والمفرد يأخذ الفعل + s. الفاعل الجمع يأخذ الفعل بدون s. الاسم بعد حرف الجر ليس الفاعل. كلمات every / each / everyone مفرد، والـ Gerund مفرد.',
    rulesList: [
      'he / she / it والمفرد: الفعل + s (She works here).',
      'الفاعل الجمع: فعل بدون s (Students learn new words).',
      'الاسم بعد حرف الجر ليس الفاعل: The trees [behind the school] are tall.',
      'بعد there is / there are، الاسم التالي هو الفاعل: There are three reasons.',
      'every / each / everyone / everybody مفرد: Everyone likes the teacher.',
      'الـ Gerund (ing كاسم) مفرد: Drinking water is healthy.',
      'فاعلان بـ and = جمع: A pilot and a copilot fly the plane.',
      'بعد does / doesn\'t يرجع الفعل للأصل: Does she work here?'
    ]
  },
  {
    id: 3,
    slug: 'sentence-types',
    titleAr: '3) أنواع الجمل الثلاثة (Sentence Types)',
    titleEn: 'Sentence Types (Simple, Compound, Complex)',
    summaryAr: 'Simple: clause مستقلة واحدة. Compound: clause + , + and/but/so/or + clause. Complex: clause مستقلة + dependent clause (adverb أو adjective).',
    rulesList: [
      'Simple: clause مستقلة واحدة (قد تحتوي فاعلين أو فعلين بلا فاصلة): Chile imports oil and exports copper.',
      'Compound: clause + , + and/but/so/or + clause (Chile exports copper, and Brazil exports sugar).',
      'Complex: clause مستقلة + dependent clause (Because I speak three languages, I can communicate with many people).',
      'معاني أدوات العطف: and إضافة، but تعارض، so نتيجة، or اختيار، because سبب.',
      'أنواع الـ dependent clause: adjective (who / that / which) و adverb (because / when / before / after / if / although).'
    ]
  },
  {
    id: 4,
    slug: 'commas',
    titleAr: '4) قواعد الفواصل الأربعة (Commas)',
    titleEn: 'The 4 Essential Comma Rules',
    summaryAr: '1) قوائم من 3 أو أكثر. 2) قبل and/but/so/or بين جملتين مستقلتين. 3) بعد كلمة افتتاحية أو عبارة انتقال. 4) بعد الـ adverb clause في أول الجملة فقط.',
    rulesList: [
      'قوائم من ثلاثة أو أكثر: I speak English, Spanish, and Japanese. (مع اثنين: and بلا فاصلة).',
      'قبل and / but / so / or بين جملتين مستقلتين: I was tired, so I slept early.',
      'بعد كلمة افتتاحية أو عبارة انتقال: First, ... / However, ... / In the summer of 1940, ...',
      'بعد الـ adverb clause إذا جاءت في أول الجملة فقط: Because it rained, we stayed home. ولكن: We stayed home because it rained. (بلا فاصلة في النهاية).'
    ]
  },
  {
    id: 5,
    slug: 'sentence-errors',
    titleAr: '5) أخطاء الجمل الثلاثة القاتلة (Sentence Errors)',
    titleEn: 'Fragment, Run-on & Comma Splice',
    summaryAr: 'Fragment: جملة ناقصة بلا فاعل أو فعل أو dependent clause وحدها. Run-on: جملتان بلا علامة ترقيم. Comma splice: جملتان بينهما فاصلة فقط بلا أداة ربط.',
    rulesList: [
      'Fragment: جملة ناقصة بلا فاعل أو فعل، أو dependent clause وحدها (العلاج: إكمال الجملة أو ربطها بجملة رئيسية).',
      'Run-on: جملتان بلا علامة ولا كلمة ربط (العلاج: نقطة، أو فاصلة + and/but/so).',
      'Comma splice: جملتان بينهما فاصلة فقط (العلاج: فاصلة + كلمة ربط FANBOYS، أو نقطة).',
      'تنبيه مهم: However و Therefore ليستا كلمات ربط مثل and، بل عبارات انتقال بعدهما فاصلة: It is hard. However, people are strong.'
    ]
  },
  {
    id: 6,
    slug: 'combining-sentences',
    titleAr: '6) دمج الجمل بسلاسة (Combining Sentences)',
    titleEn: 'Combining Sentences Smoothly',
    summaryAr: 'اجمع الجمل في واحدة دون تغيير أو حذف أي فكرة. ضع الصفات قبل الاسم والظروف قبل الفعل، واربط الباقي بـ and / but / so / who / that.',
    rulesList: [
      'اجمع الجمل في جملة واحدة دون تغيير أو حذف أي فكرة أصلية.',
      'ضع الصفات (adjectives) قبل الأسماء والظروف (adverbs) قبل الأفعال.',
      'اربط الجمل المتبقية باستخدام and / but / so أو الأسماء الموصولة who / that.',
      'مثال: Chicago is a city. It is modern. It has many tall buildings. ➔ Chicago is a modern city with many tall buildings.'
    ]
  },
  {
    id: 7,
    slug: 'paragraph-elements',
    titleAr: '7) عناصر الفقرة والعنوان (Topic, Supporting, Concluding, Title)',
    titleEn: 'Paragraph Elements & Title Guidelines',
    summaryAr: 'Topic sentence = موضوع + controlling idea. Supporting sentences = تشرح وتصف. Concluding sentence = تلخص أو تقترح أو تعطي رأياً. Title = قصير، ليس جملة، بلا نقطة.',
    rulesList: [
      'Topic sentence: موضوع + controlling idea. ليست fact، وليست عامة جداً (Tea is delicious ❌)، وليست ضيقة جداً (This dictionary has 42,000 words ❌).',
      'Supporting sentences: تشرح، تصف، تعطي أسباباً أو حقائق أو أمثلة أو تعريفاً. والجملة غير المرتبطة بالموضوع (Unrelated) تُحذف.',
      'Concluding sentence: تلخص (restate)، أو تقترح (suggestion)، أو تعطي رأياً (opinion)، أو تتوقع (prediction). تبدأ بـ In conclusion, / For these reasons, / Overall, بلا معلومة جديدة.',
      'Title: قصير، ليس جملة، يذكر الموضوع، يجذب الانتباه، وبلا نقطة إطلاقاً.',
      'Brainstorming: اكتب بسرعة بلا تصحيح، ثم اشطب وضع دائرة حول الأفضل.'
    ]
  },
  {
    id: 8,
    slug: 'four-features',
    titleAr: '8) الميزات الأربع للباراغراف الجيد (Four Features of a Good Paragraph)',
    titleEn: 'The Four Features of a Good Paragraph',
    summaryAr: '1. السطر الأول مُزاح (indent). 2. فيه topic sentence تذكر الفكرة الرئيسية. 3. كل الجمل مرتبطة بالفكرة الرئيسية (Unity). 4. فيه concluding sentence تنهيه منطقياً.',
    rulesList: [
      '1. السطر الأول مُزاح بمقدار 5 مسافات (The first line is indented).',
      '2. فيه Topic Sentence تذكر الفكرة الرئيسية بوضوح مع controlling idea.',
      '3. كل الجمل مرتبطة بالفكرة الرئيسية (All sentences relate to the main idea / Unity).',
      '4. فيه Concluding Sentence تنهي الفقرة بشكل منطقي (Ends logically).'
    ]
  }
];

export const RULE_BASED_QUESTIONS: RuleQuizQuestion[] = [
  // --- Rule 1: Capitalization & End Punctuation ---
  {
    id: 101,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which of the following sentences has 100% CORRECT capitalization and end punctuation?',
    questionArabic: 'أي الجمل التالية صحيحة تماماً من حيث الحروف الكبيرة وعلامات الترقيم؟',
    options: [
      'My friend ahmed speaks arabic and English.',
      'My friend Ahmed speaks Arabic and English.',
      'my friend Ahmed speaks Arabic and English?',
      'My friend Ahmed speaks Arabic and english!'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: '"Ahmed" is a person\'s name, and "Arabic" and "English" are languages, so they all require capital letters. The sentence is a statement and correctly ends with a period.',
    explanationArabic: 'اسم الشخص (Ahmed) واللغات (Arabic و English) وأول حرف في الجملة (My) كلها تتطلب حروفاً كبيرة، وتنتهي بنقطة لأنها جملة خبرية.'
  },
  {
    id: 102,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'In which option is the common noun versus proper noun capitalization handled correctly?',
    questionArabic: 'في أي الخيارات التالية تم تطبيق قاعدة الحروف الكبيرة للأسماء العامة والخاصة بشكل صحيح؟',
    options: [
      'Turkey has beautiful coasts on the black sea.',
      'Turkey has beautiful coasts on the Black Sea.',
      'turkey has beautiful Coasts on the Black sea.',
      'Turkey has beautiful coasts on the Black Sea?'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: '"Turkey" is a specific country and "Black Sea" is a specific proper geographical name, so both words in "Black Sea" must be capitalized. "coasts" is a common noun and remains lowercase.',
    explanationArabic: 'كلمة Turkey دولة و Black Sea اسم بحر محدد خاص فيكتب كبيراً، بينما coasts اسم عام يكتب بحرف صغير.'
  },
  {
    id: 103,
    ruleId: 1,
    ruleTitle: 'Capitalization & End Punctuation',
    question: 'Which punctuation mark should be placed at the end: "Where did your brother decide to study English"',
    questionArabic: 'ما هي علامة الترقيم الصحيحة في نهاية الجملة السابقة؟',
    options: [
      'Period (.)',
      'Question mark (?)',
      'Exclamation mark (!)',
      'Comma (,)'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'The sentence starts with the question word "Where" and asks for information, so it requires a question mark (?).',
    explanationArabic: 'الجملة تبدأ بأداة الاستفهام Where وهي سؤال استفساري، لذا يجب أن تنتهي بعلامة استفهام (?).'
  },

  // --- Rule 2: Subject-Verb Agreement ---
  {
    id: 201,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "The tall trees behind the new high school (is / are / was / being) very green."',
    questionArabic: 'اختر الفعل الصحيح لتوافق الفاعل مع الفعل:',
    options: [
      'is',
      'are',
      'was',
      'being'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'The subject is "The tall trees" (plural). The prepositional phrase "[behind the new high school]" does not affect the verb. Plural subject takes "are".',
    explanationArabic: 'الفاعل هو كلمة trees (جمع)، والاسم داخل شبه الجملة بعد حرف الجر [behind the new high school] ليس الفاعل، لذا نختار are.'
  },
  {
    id: 202,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct verb: "Everyone in the classroom (like / likes / liking / are liking) the new professor."',
    questionArabic: 'اختر الفعل الصحيح مع الفاعل Everyone:',
    options: [
      'like',
      'likes',
      'liking',
      'are liking'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Indefinite pronouns like "every", "each", "everyone", and "everybody" are singular and take verb + -s in simple present ("likes").',
    explanationArabic: 'الكلمات مثل every, each, everyone, everybody تعامل معاملة المفرد دائماً وتأخذ الفعل مضافاً له s (likes).'
  },
  {
    id: 203,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Complete the sentence: "Drinking fresh water and green tea (is / are) very healthy for your body."',
    questionArabic: 'اختر الفعل المناسب عند بدء الجملة بـ Gerund (اسم ينتهي بـ -ing):',
    options: [
      'is',
      'are',
      'were',
      'be'
    ],
    correctAnswerIndex: 0,
    explanationEnglish: 'A Gerund phrase (an -ing word acting as a noun subject) is grammatically singular and takes "is".',
    explanationArabic: 'المصدر الصريح (Gerund المبدوء بـ -ing كاسم فاعل) يعامل معاملة المفرد ويأخذ الفعل is.'
  },
  {
    id: 204,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Choose the correct sentence following the rule for "there is / there are":',
    questionArabic: 'اختر الجملة الصحيحة وفق قاعدة there is / there are:',
    options: [
      'There is three important reasons for this decision.',
      'There are three important reasons for this decision.',
      'There are a dictionary on the table.',
      'There is many students in the lab.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'After "there is / there are", the noun that follows is the true subject. "three important reasons" is plural, so it requires "there are".',
    explanationArabic: 'بعد there is / there are، الاسم الذي يأتي بعدهما هو الفاعل الحقيقي. بما أن three reasons جمع، فالصحيح هو There are.'
  },
  {
    id: 205,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Complete correctly: "A pilot and a copilot (flies / fly / flying) this type of airplane."',
    questionArabic: 'اختر الفعل المناسب لفاعلين مربوطين بـ and:',
    options: [
      'flies',
      'fly',
      'flying',
      'is flying'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Two singular subjects joined by "and" (A pilot and a copilot) form a compound plural subject, so they take the base verb "fly".',
    explanationArabic: 'فاعلان مربوطان بـ and يشكلان فاعلاً جمعاً، لذا يأخذان الفعل المجرد بدون s وهو fly.'
  },
  {
    id: 206,
    ruleId: 2,
    ruleTitle: 'Subject-Verb Agreement',
    question: 'Which question correctly returns the verb to its base form after "does"?',
    questionArabic: 'أي الأسئلة التالية تعيد الفعل إلى أصله ومصدره بعد does؟',
    options: [
      'Does she works at the hospital?',
      'Does she work at the hospital?',
      'Does she working at the hospital?',
      'Does she worked at the hospital?'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'After the auxiliary "does" or "doesn\'t", the main verb always reverts to its base form without -s ("work").',
    explanationArabic: 'بعد does أو doesn\'t يرجع الفعل الأساسي لأصله ومصدره المجرد بدون s (work).'
  },

  // --- Rule 3: Sentence Types ---
  {
    id: 301,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Chile imports oil from Brazil and exports copper to China."',
    questionArabic: 'ما نوع هذه الجملة: Simple أم Compound أم Complex؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Sentence Fragment'
    ],
    correctAnswerIndex: 0,
    explanationEnglish: 'This is a Simple Sentence because it has only ONE independent clause with a compound verb ("imports ... and exports ...") and NO comma before "and".',
    explanationArabic: 'جملة بسيطة (Simple Sentence) لأنها تحتوي على جملة مستقلة واحدة فقط ذات فاعل واحد وفعلين مربوطين بـ and بلا فاصلة وبلا فاعل ثانٍ.'
  },
  {
    id: 302,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Identify the sentence type: "Chile exports copper, and Brazil exports sugar to international markets."',
    questionArabic: 'ما نوع هذه الجملة التي تحتوي على فاصلة و and وجملتين مستقلتين؟',
    options: [
      'Simple Sentence',
      'Compound Sentence',
      'Complex Sentence',
      'Run-on Sentence'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'This is a Compound Sentence because it joins two complete independent clauses with a comma and the coordinating conjunction "and".',
    explanationArabic: 'جملة مركبة (Compound Sentence) لأنها تربط بين جملتين كاملتين مستقلتين بفاصلة مع أداة العطف and.'
  },
  {
    id: 303,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'Which coordinating conjunction indicates contrast (تعارض) in a compound sentence?',
    questionArabic: 'أي أدوات الربط التالية تفيد التعارض (Contrast) بين الجملتين؟',
    options: [
      'and (إضافة)',
      'so (نتيجة)',
      'but (تعارض)',
      'or (اختيار)'
    ],
    correctAnswerIndex: 2,
    explanationEnglish: '"but" indicates contrast, "and" indicates addition, "so" indicates result, and "or" indicates choice/alternative.',
    explanationArabic: 'أداة العطف but تفيد التعارض، بينما and للإضافة، so للنتيجة، و or للاختيار والبدائل.'
  },
  {
    id: 304,
    ruleId: 3,
    ruleTitle: 'Sentence Types',
    question: 'In the complex sentence: "Students who study daily achieve higher grades.", what type of dependent clause is "who study daily"?',
    questionArabic: 'في الجملة السابقة، ما نوع العبارة التابعة "who study daily"؟',
    options: [
      'Adjective clause (عبارة وصفية تبدأ بـ who/which/that)',
      'Adverb clause (عبارة ظرفية)',
      'Independent clause (جملة رئيسية)',
      'Compound clause'
    ],
    correctAnswerIndex: 0,
    explanationEnglish: 'Clause starting with relative pronouns "who", "which", or "that" modifying a noun (students) is an Adjective Clause.',
    explanationArabic: 'العبارة التي تبدأ باسم موصول مثل who / which / that وتصف اسماً هي Adjective clause (عبارة نعتية/وصفية).'
  },

  // --- Rule 4: Commas ---
  {
    id: 401,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Which sentence correctly uses commas in a list of items?',
    questionArabic: 'أي الجمل التالية استخدمت الفواصل بشكل صحيح في قائمة التعداد؟',
    options: [
      'I speak English, Spanish and, Japanese.',
      'I speak English, Spanish, and Japanese.',
      'I speak English, and Spanish.',
      'I speak, English, Spanish, and Japanese.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'In a list of three or more items, commas separate the items with ", and" before the last item. If there are only two items (e.g. English and Spanish), no comma is used.',
    explanationArabic: 'في قائمة من 3 عناصر أو أكثر، نضع فاصلة بين كل عنصر وفاصلة قبل and الأخيرة. وإذا كانا عنصرين فقط فلا نضع فاصلة.'
  },
  {
    id: 402,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Where must a comma be placed in this sentence: "Because the flight was delayed by fog we arrived in London very late."',
    questionArabic: 'أين يجب وضع الفاصلة الإلزامية في هذه الجملة الظرفية؟',
    options: [
      'After "delayed"',
      'After "fog," (at the end of the initial adverb clause)',
      'After "London"',
      'No comma is needed'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'When an adverb clause (with because, if, when, although) starts the sentence, a comma must follow it before the main clause begins.',
    explanationArabic: 'عندما تبدأ الجملة بعبارة ظرف وسبب (مثل Because)، يجب وضع فاصلة مباشرة في نهاية العبارة قبل الجملة الرئيسية (بعد fog,).'
  },
  {
    id: 403,
    ruleId: 4,
    ruleTitle: 'Commas',
    question: 'Does this sentence need a comma: "We arrived in London very late because the flight was delayed by fog."',
    questionArabic: 'هل تحتاج هذه الجملة إلى فاصلة عندما جاءت because في المنتصف/النهاية؟',
    options: [
      'Yes, put a comma before because.',
      'No, because the adverb clause is at the end of the sentence.',
      'Yes, put a comma after London.',
      'Yes, put a comma after flight.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'When the adverb clause comes at the END of the sentence, do NOT use a comma before "because".',
    explanationArabic: 'عندما تأتي عبارة الظرف والسبب في نهاية الجملة، لا نضع فاصلة قبل because إطلاقاً.'
  },

  // --- Rule 5: Three Sentence Errors ---
  {
    id: 501,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Identify the error: "Because students do not have extra study time before the difficult exam."',
    questionArabic: 'ما نوع الخطأ القاتل في هذا التعبير المعلق؟',
    options: [
      'Sentence Fragment (جملة ناقصة معلقة)',
      'Run-on Sentence',
      'Comma Splice',
      'Subject-verb agreement error'
    ],
    correctAnswerIndex: 0,
    explanationEnglish: 'This is a Sentence Fragment because it is only a dependent clause starting with "Because" and lacks an independent main clause.',
    explanationArabic: 'هذا خطأ جملة ناقصة (Sentence Fragment) لأنها عبارة تابعة معلقة تبدأ بـ Because ولا تحتوي على جملة رئيسية مستقلة.'
  },
  {
    id: 502,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Identify the error: "The exam was very difficult, most students scored lower than usual."',
    questionArabic: 'ما نوع الخطأ عند ربط جملتين كاملتين بفاصلة فقط دون أداة ربط؟',
    options: [
      'Sentence Fragment',
      'Comma Splice (وصل خاطئ بالفاصلة)',
      'Run-on Sentence',
      'No error'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'A Comma Splice occurs when two independent sentences are connected by only a comma without a coordinating conjunction (and/but/so).',
    explanationArabic: 'هذا خطأ Comma Splice لأن جملتين مستقلتين كاملتين رُبطتا بفاصلة فقط بدون كلمة ربط (FANBOYS).'
  },
  {
    id: 503,
    ruleId: 5,
    ruleTitle: 'Sentence Errors',
    question: 'Which of the following demonstrates the CORRECT punctuation with "However"?',
    questionArabic: 'أي الخيارات التالية يوضح الترقيم الصحيح مع كلمة However؟',
    options: [
      'Learning a language is hard, however people can succeed.',
      'Learning a language is hard. However, people can succeed.',
      'Learning a language is hard however, people can succeed.',
      'Learning a language is hard, however, people can succeed.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: '"However" is a transition word, not a coordinating conjunction. It cannot join two sentences with a comma. It starts a new sentence followed by a comma, or follows a semicolon.',
    explanationArabic: 'كلمة However عبارة انتقال وليست أداة عطف، لذا لا تربط جملتين بفاصلة عادية، بل تبدأ جملة جديدة تتبعها فاصلة: (. However,).'
  },

  // --- Rule 6: Combining Sentences ---
  {
    id: 601,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'Combine these sentences into ONE smooth sentence: "Chicago is a city. Chicago is modern. Chicago has tall buildings."',
    questionArabic: 'اجمع هذه الجمل الثلاث في جملة واحدة سلسة دون حذف أي فكرة:',
    options: [
      'Chicago is a city and it is modern and it has buildings.',
      'Chicago is a modern city with tall buildings.',
      'Because Chicago is modern it has buildings.',
      'Chicago is a city, but it is modern with buildings.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Placing the adjective "modern" before "city" and combining with "with tall buildings" creates a concise, elegant, and grammatically complete sentence preserving all original ideas.',
    explanationArabic: 'وضع الصفة modern قبل الاسم city ودمج tall buildings يعطي جملة متكاملة وسلسة دون تكرار أو حذف أي معلومة.'
  },
  {
    id: 602,
    ruleId: 6,
    ruleTitle: 'Combining Sentences',
    question: 'When combining sentences, where should adjectives and adverbs typically be placed?',
    questionArabic: 'عند دمج الجمل، أين نضع الصفات (adjectives) والظروف (adverbs) عادة؟',
    options: [
      'Adjectives after nouns, adverbs after objects.',
      'Adjectives before nouns, adverbs before verbs.',
      'At the very end of the sentence.',
      'In parentheses.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Adjectives are placed before the nouns they describe (e.g. "modern city"), and adverbs are typically placed before the main verb (e.g. "quickly moved").',
    explanationArabic: 'الصفات توضع قبل الأسماء (مثل modern city)، والظروف توضع قبل الأفعال (مثل quickly moved).'
  },

  // --- Rule 7: Paragraph Elements & Title ---
  {
    id: 701,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Which of the following is a WEAK topic sentence because it is only a dead FACT with nothing to explain?',
    questionArabic: 'أي الجمل التالية جملة افتتاحية ضعيفة لأنها مجرد حقيقة ميتة لا تقبل الشرح؟',
    options: [
      'Green tea provides three remarkable health benefits.',
      'Libraries have books on their shelves.',
      'Learning English offers numerous career opportunities.',
      'Renting an apartment has several distinct advantages.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: '"Libraries have books on their shelves" is an obvious indisputable fact; there is nothing for the writer to explain, argue, or develop in supporting sentences.',
    explanationArabic: '"المكتبات تحتوي على كتب في رفوفها" حقيقة بديهية ميتة لا تترك مجالاً للشرح أو المناقشة في الجمل الداعمة.'
  },
  {
    id: 702,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'Which of the following is the CORRECT rule for writing an academic paragraph title?',
    questionArabic: 'ما هي القاعدة الأكاديمية الصحيحة لكتابة عنوان البارقراف؟',
    options: [
      'It must be a complete sentence ending with a period.',
      'It should be short, centered, capitalize key words, and NEVER end with a period.',
      'It must start with an indent of five spaces.',
      'It should be written in all lowercase letters.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'A good title is a centered phrase, capitalizes key words, and NEVER ends with a period.',
    explanationArabic: 'العنوان الأكاديمي يكون عبارة مختصرة في المنتصف، بحروف كبيرة للكلمات الرئيسية، ولا ينتهي بنقطة أبداً.'
  },
  {
    id: 703,
    ruleId: 7,
    ruleTitle: 'Paragraph Elements & Title',
    question: 'What should a writer do during the Brainstorming stage according to Great Writing 2?',
    questionArabic: 'ماذا يجب على الكاتب فعله أثناء مرحلة العصف الذهني (Brainstorming)؟',
    options: [
      'Write slowly and worry about every spelling mistake.',
      'Write all ideas quickly without judging, then cross out weak or unrelated ideas.',
      'Write only one sentence and stop.',
      'Translate every word into Arabic.'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Brainstorming means writing down all thoughts rapidly without self-censorship, then reviewing the list to circle strong ideas and cross out unrelated ones.',
    explanationArabic: 'العصف الذهني هو كتابة كل الأفكار بسرعة دون توقف، ثم مراجعة القائمة لشطب الأفكار الضعيفة أو الخارجة عن الموضوع.'
  },

  // --- Rule 8: The Four Features of a Good Paragraph ---
  {
    id: 801,
    ruleId: 8,
    ruleTitle: 'The Four Features of a Good Paragraph',
    question: 'Which of the following is NOT one of the Four Features of a Good Paragraph?',
    questionArabic: 'أي مما يلي ليس من الميزات الأربع للفقرة الأكاديمية الجيدة؟',
    options: [
      'The first line of the paragraph is indented.',
      'Every single sentence must be written on a new line with bullet points.',
      'The paragraph has a topic sentence that states the main idea.',
      'All sentences in the paragraph relate directly to the main idea (Unity).'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'A paragraph is a single cohesive block of text. Writing each sentence on a new line with bullet points is incorrect.',
    explanationArabic: 'الفقرة الأكاديمية هي كتلة نصية واحدة متصلة، وكتابة الجمل في أسطر منفصلة أو نقاط هو خطأ فادح.'
  },
  {
    id: 802,
    ruleId: 8,
    ruleTitle: 'The Four Features of a Good Paragraph',
    question: 'What does "Paragraph Unity" mean in academic writing assessment?',
    questionArabic: 'ماذا يعني مصطلح "Paragraph Unity" في تقييم كتابة البارقراف؟',
    options: [
      'All sentences must have the exact same number of words.',
      'All supporting sentences must relate directly to and support the controlling idea.',
      'The paragraph must have ten sentences exactly.',
      'Every sentence must start with the word "First".'
    ],
    correctAnswerIndex: 1,
    explanationEnglish: 'Paragraph Unity means that every supporting sentence directly connects to and explains the controlling idea in the topic sentence. Any unrelated sentence destroys unity.',
    explanationArabic: 'وحدة الفقرة (Unity) تعني أن كل جملة داعمة تخدم وتناقش الفكرة الحاكمة مباشرة دون أي جملة دخيلة خارج الموضوع.'
  }
];
