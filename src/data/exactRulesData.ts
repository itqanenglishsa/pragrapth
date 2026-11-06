export interface ExactUnitRule {
  id: number;
  numberPrefix: string;
  titleAr: string;
  titleEn: string;
  badge: string;
  // خانة الشرح
  explanationText: string;
  explanationPoints: string[];
  // خانة الأمثلة
  examplesList: {
    label: string;
    english: string;
    arabic?: string;
    type?: 'correct' | 'incorrect' | 'neutral';
  }[];
  // ملخص سريع
  summaryTag?: string;
}

export const EXACT_11_RULES: ExactUnitRule[] = [
  {
    id: 1,
    numberPrefix: '1',
    titleAr: 'الحرف الكبير',
    titleEn: 'Capitalization',
    badge: 'الوحدة 1 & 4 (Evolve 2 & GW2)',
    explanationText: 'يتم استخدام الحروف الكبيرة (Capital Letters) في بداية الكلمات في حالات محددة وثابتة في اللغة الإنجليزية:',
    explanationPoints: [
      'بداية كل جملة جديدة: أي جملة تبدأ بحرف كبير دائماً.',
      'الضمير (I = أنا): دائماً يُكتب كحرف كبير أينما وجد في الجملة سواء في البداية أو المنتصف أو النهاية.',
      'الأسماء الخاصة (Proper Nouns): أسماء الأشخاص، المدن، الدول، والجنسيات والبحار.',
      'أيام الأسبوع وأشهر السنة: (الأيام والشهور فقط، أما فصول السنة فتبقى بحروف صغيرة).',
      'العناوين الرئيسية: الحروف الأولى من الكلمات الرئيسية في العناوين.'
    ],
    examplesList: [
      {
        label: 'بداية الجملة',
        english: 'The weather is nice today.',
        arabic: 'الطقس لطيف اليوم (حرف T كبير).',
        type: 'correct'
      },
      {
        label: 'الضمير (I)',
        english: 'Ali and I went to the park.',
        arabic: 'علي وأنا ذهبنا للحديقة (حرف I كبير دائماً أينما وجد).',
        type: 'correct'
      },
      {
        label: 'الأسماء الخاصة والدول',
        english: 'Saudi Arabia, Jeddah, Ahmed, Black Sea',
        arabic: 'السعودية، جدة، أحمد، البحر الأسود.',
        type: 'correct'
      },
      {
        label: 'أيام الأسبوع والشهور',
        english: 'Monday, January (ولكن: summer, winter تبقى صغيرة)',
        arabic: 'الاثنين، يناير.',
        type: 'correct'
      },
      {
        label: 'العناوين الرئيسية',
        english: 'The Secret of Success',
        arabic: 'الحروف الأولى من الكلمات المهمة في العنوان.',
        type: 'correct'
      }
    ],
    summaryTag: 'أول الجملة + الضمير I + الدول والمدن والأشخاص + الأيام والشهور'
  },
  {
    id: 2,
    numberPrefix: '2',
    titleAr: 'علامات الترقيم في نهاية الجملة',
    titleEn: 'End Punctuation',
    badge: 'الوحدة 1 (GW2)',
    explanationText: 'تُستخدم لتحديد نهاية الفكرة أو الجملة، وأهمها ثلاث علامات أساسية:',
    explanationPoints: [
      'النقطة (.) - Period: تُوضع في نهاية الجمل الخبرية العادية أو الأوامر البسيطة.',
      'علامة الاستفهام (?) - Question Mark: تُوضع في نهاية الجمل الاستفهامية (الأسئلة المباشرة).',
      'علامة التعجب (!) - Exclamation Mark: تُوضع في نهاية الجمل التي تعبر عن مشاعر قوية، دهشة، أو حماس.'
    ],
    examplesList: [
      {
        label: 'النقطة (.) للجملة الخبرية',
        english: 'She is reading a book.',
        arabic: 'هي تقرأ كتاباً (نقطة في نهاية الخبر).',
        type: 'correct'
      },
      {
        label: 'علامة الاستفهام (?) للسؤال',
        english: 'Where are you going?',
        arabic: 'إلى أين أنت ذاهب؟ (علامة استفهام).',
        type: 'correct'
      },
      {
        label: 'علامة التعجب (!) للمشاعر القوية',
        english: 'What a wonderful surprise!',
        arabic: 'يا لها من مفاجأة رائعة! (علامة تعجب).',
        type: 'correct'
      }
    ],
    summaryTag: 'النقطة (.) للخبر | الاستفهام (?) للسؤال | التعجب (!) للدهشة والانفعال'
  },
  {
    id: 3,
    numberPrefix: '3',
    titleAr: 'التطابق بين الفاعل والفعل',
    titleEn: 'Subject-Verb Agreement',
    badge: 'الوحدة 2 (Evolve 2 & GW2)',
    explanationText: 'القاعدة الأساسية: المفرد يأخذ فعلاً مفرداً، والجمع يأخذ فعلاً جمعاً في زمن المضارع البسيط (Simple Present):',
    explanationPoints: [
      'مع الفاعل المفرد (He, She, It, أو اسم مفرد مثل Ali): نضيف حرف (s) أو (es) لفعل المضارع البسيط.',
      'مع الفاعل الجمع (I, We, You, They, أو اسم جمع مثل Students): يبقى الفعل في المصدر بدون إضافة.',
      'الاسم بعد حرف الجر (Preposition) لا يؤثر على الفعل: The trees behind the school ARE tall.',
      'كلمات Everyone و Every و Each والـ Gerund المنتهي بـ (-ing) تعامل كمفرد وتأخذ (s).'
    ],
    examplesList: [
      {
        label: 'الفاعل المفرد (الفعل + s)',
        english: 'The dog barks at night. / He plays tennis.',
        arabic: 'الكلب ينبح في الليل / هو يلعب التنس (فعل مضاف له s).',
        type: 'correct'
      },
      {
        label: 'الفاعل الجمع (فعل مجرد بدون s)',
        english: 'The dogs bark at night. / They play tennis.',
        arabic: 'الكلاب تنبح في الليل / هم يلعبون التنس (فعل مجرد).',
        type: 'correct'
      },
      {
        label: 'الاسم بعد حرف الجر (Preposition)',
        english: 'The trees behind the school are tall.',
        arabic: 'الأشجار خلف المدرسة طويلة (الفاعل trees جمع، و school بعد حرف الجر لا تؤثر).',
        type: 'correct'
      },
      {
        label: 'قاعدة (Everyone / Each / Gerund -ing) كمفرد',
        english: 'Everyone in the class likes the teacher. / Drinking water is healthy.',
        arabic: 'الجميع في الفصل يحب المعلم / شرب الماء صحي (Everyone و Drinking تعامل كمفرد وتأخذ likes و is).',
        type: 'correct'
      },
      {
        label: 'خطأ شائع في الاختبار',
        english: 'The dog bark at night. ❌ / Everyone in the class like the teacher. ❌',
        arabic: 'تجنب عدم مطابقة الفعل لفاعله، وتذكر أن Everyone و Drinking مفرد تأخذ (s).',
        type: 'incorrect'
      }
    ],
    summaryTag: 'المفرد ➔ الفعل + s | الجمع ➔ الفعل بالمصدر بدون s | Everyone و ing مفرد'
  },
  {
    id: 4,
    numberPrefix: '4',
    titleAr: 'الجمل البسيطة والمركبة',
    titleEn: 'Simple vs. Compound Sentences & Compounding',
    badge: 'الوحدة 2 (GW2)',
    explanationText: 'التمييز بين بنية الجملة البسيطة ذات الفكرة الواحدة والجملة المركبة التي تجمع جملتين:',
    explanationPoints: [
      'أ. Simple Sentence (الجملة البسيطة): تحتوي على فكرة مستقلة واحدة (تتكون من فاعل Subject وفعل Verb واحد على الأقل، وقد تحوي فاعلين أو فعلين بدون فاصلة).',
      'ب. Compound Sentence (الجملة المركبة): تتكون من جملتين بسيطتين مستقلتين أو أكثر مرتبطة مع بعضها بشكل صحيح.',
      'أداة الربط (FANBOYS): لربط جملتين مركبتين، نستخدم غالباً الفاصلة (,) يليه حرف عطف: For, And, Nor, But, Or, Yet, So.'
    ],
    examplesList: [
      {
        label: 'مثال الجملة البسيطة (Simple)',
        english: 'Ali lives in Dammam. / Chile imports oil and exports copper.',
        arabic: 'علي يعيش في الدمام (فكرة مستقلة واحدة).',
        type: 'correct'
      },
      {
        label: 'مثال الجملة المركبة (Compound)',
        english: 'Ali wanted to buy a car, so he started saving money.',
        arabic: 'أراد علي شراء سيارة، لذا بدأ بتوفير المال (جملتان بينهما فاصلة + so).',
        type: 'correct'
      },
      {
        label: 'جملة مركبة أخرى (FANBOYS)',
        english: 'Chile exports copper, and Brazil exports sugar.',
        arabic: 'تشيلي تصدر النحاس، والبرازيل تصدر السكر.',
        type: 'correct'
      }
    ],
    summaryTag: 'Simple = فكرة واحدة | Compound = جملتان بينهما (, + FANBOYS)'
  },
  {
    id: 5,
    numberPrefix: '5',
    titleAr: 'العصف الذهني: ماذا وكيف؟',
    titleEn: 'Brainstorming: What and How',
    badge: 'الوحدة 2 (GW2)',
    explanationText: 'العصف الذهني هو أول خطوة للكتابة وتوليد الأفكار قبل الشروع في كتابة الفقرة:',
    explanationPoints: [
      'What (ماذا؟): تحديد الموضوع الأساسي وما تريد الكتابة عنه بوضوح (إيجاد الأفكار الخام دون قلق بشأن الأخطاء في البداية).',
      'How (كيف؟): تنظيم هذه الأفكار وترتيبها (باستخدام الخرائط الذهنية، القوائم، أو كتابة الكلمات المفتاحية بشكل عشوائي ثم تصفيتها وترتيبها منطقياً وشطب ما لا يلزم).'
    ],
    examplesList: [
      {
        label: 'خطوة (What): توليد الأفكار',
        english: 'Topic: Studying English ➔ grammar, vocabulary, speaking, watching movies, university tests, fear of mistakes.',
        arabic: 'كتابة كل ما يخطر ببالك عن الموضوع كأفكار أولية خام.',
        type: 'neutral'
      },
      {
        label: 'خطوة (How): التصفية والتنظيم',
        english: 'Select top 3 ideas ➔ organize logically into an outline ➔ cross out unrelated points.',
        arabic: 'تحديد أفضل 3 أفكار تناسب الفقرة وشطب الأفكار غير المترابطة.',
        type: 'correct'
      }
    ],
    summaryTag: 'What = توليد الأفكار الخام | How = تنظيم وتصفية وترتيب الأفكار'
  },
  {
    id: 6,
    numberPrefix: '6',
    titleAr: 'كتابة عناوين فعالة ومناسبة',
    titleEn: 'Writing Effective and Relevant Titles',
    badge: 'الوحدة 2 (GW2)',
    explanationText: 'العنوان الأكاديمي الجيد للفقرة يجب أن تتوفر فيه المعايير التالية:',
    explanationPoints: [
      'قصيراً وجذاباً: يلفت انتباه القارئ فوراً (ليس جملة طويلة).',
      'ذو صلة وثيقة (Relevant): يعبر بدقة واختصار عن محتوى الموضوع أو الفقرة.',
      'بدون نقطة: العنوان في الإنجليزية لا ينتهي بنقطة (.) إطلاقاً.',
      'تكبير الحروف: تبدأ الكلمات الرئيسية فيه بحرف كبير (Title Case).'
    ],
    examplesList: [
      {
        label: 'عنوان مناسب وجذاب (Effective Title)',
        english: 'The Secrets of a Healthy Morning Routine',
        arabic: 'أسرار الروتين الصباحي الصحي (قصير، جذاب، بدون نقطة، مع كابيتال).',
        type: 'correct'
      },
      {
        label: 'عنوان غير مناسب (Not Effective)',
        english: 'Writing an essay about how to stay healthy and exercise every single day in the morning. ❌',
        arabic: 'طويل جداً، جملة كاملة وليس عنواناً جذاباً.',
        type: 'incorrect'
      },
      {
        label: 'خطأ شائع في الكويز',
        english: 'Benefits of Exercise. ❌ (النقطة في نهاية العنوان خطأ!)',
        arabic: 'الصحيح: Benefits of Exercise بدون نقطة.',
        type: 'incorrect'
      }
    ],
    summaryTag: 'قصير وجذاب + ذو صلة + كلمات رئيسية كبيرة + بدون نقطة نهائياً'
  },
  {
    id: 7,
    numberPrefix: '7',
    titleAr: 'جملة الموضوع',
    titleEn: 'Topic Sentence',
    badge: 'الوحدة 3 (GW2)',
    explanationText: 'الجملة الافتتاحية الأساسية للفقرة وأهم ركيزة يُبنى عليها النص:',
    explanationPoints: [
      'ما هي (What is it?): هي الجملة الرئيسية التي تظهر في بداية الفقرة (Paragraph)، وتلخص الفكرة الأساسية للفقرة بأكملها وتحدد مسارها.',
      'مميزاتها وعناصرها (Features):',
      '1. تحتوي على Topic (الموضوع العام للفقرة).',
      '2. تحتوي على Controlling Idea (الفكرة المسيطرة أو وجهة نظرك وزاوية الحديث).',
      '3. تكون واضحة ومحددة: ليست حقيقة عامة معروفة، وليست عامة جداً، وليست ضيقة جداً.'
    ],
    examplesList: [
      {
        label: 'جملة موضوع ممتازة (Good Topic Sentence)',
        english: 'Regular exercise offers three major health benefits.',
        arabic: 'الموضوع: الرياضة (Exercise) | الفكرة المسيطرة: ثلاث فوائد صحية.',
        type: 'correct'
      },
      {
        label: 'عامة جداً لا تصلح (Too General)',
        english: 'Exercise is good. ❌',
        arabic: 'عامة جداً ولا تحتوي تفاصيل أو فكرة مسيطرة محددة.',
        type: 'incorrect'
      },
      {
        label: 'ضيقة جداً لا تصلح (Too Narrow / Fact)',
        english: 'I bought running shoes yesterday. ❌',
        arabic: 'حدث شخصي ضيق لا يمكن بناء فقرة كاملة عليه.',
        type: 'incorrect'
      }
    ],
    summaryTag: 'Topic (الموضوع) + Controlling Idea (الفكرة الحاكمة) في بداية الفقرة'
  },
  {
    id: 8,
    numberPrefix: '8',
    titleAr: 'التعرف على الفكرة المسيطرة',
    titleEn: 'Recognizing Controlling Ideas',
    badge: 'الوحدة 3 (GW2)',
    explanationText: 'الفكرة المسيطرة هي البوصلة التي تقود الكاتب في كل جمل الفقرة:',
    explanationPoints: [
      'الفكرة المسيطرة (Controlling Idea): هي الجزء من جملة الموضوع الذي يوجه الكاتب ويحدد الاتجاه والحدود التي سيناقشها في باقي الفقرة.',
      'كل جملة داعمة (Supporting Sentence) في الفقرة يجب أن ترتبط مباشرة بهذه الفكرة المسيطرة دون خروج عن المسار.'
    ],
    examplesList: [
      {
        label: 'تحليل جملة الموضوع',
        english: '"Learning a new language requires daily practice and patience."',
        arabic: 'الموضوع (Topic): تعلم لغة جديدة | الفكرة المسيطرة (Controlling Idea): يتطلب ممارسة يومية وصبراً.',
        type: 'correct'
      },
      {
        label: 'ماذا يعني ذلك للفقرة؟',
        english: 'The whole paragraph must focus ONLY on daily practice and patience (not on travel or jobs).',
        arabic: 'باقي الفقرة سيتحدث فقط عن الممارسة اليومية والصبر، وأي حديث عن تكلفة المعاهد أو السفر يعتبر خروجاً عن الموضوع.',
        type: 'neutral'
      }
    ],
    summaryTag: 'Controlling Idea = تحدد بالضبط ما يُسمح بكتابته في الجمل الداعمة'
  },
  {
    id: 9,
    numberPrefix: '9',
    titleAr: 'الجمل المعقدة',
    titleEn: 'Complex Sentences',
    badge: 'الوحدة 3 (GW2)',
    explanationText: 'تركيب الجمل المتقدمة بالربط السببي أو الزمني أو الشرطي:',
    explanationPoints: [
      'هي الجمل التي تتكون من جملة مستقلة (Independent Clause) وجملة تابعة (Dependent Clause) مترابطة بكلمات ربط تسمى Subordinating Conjunctions (مثل: because, although, if, when, since, after).',
      'الجملة التابعة وحدها لا تعطي معنى كاملاً وتعتبر ناقصة (Fragment) إذا تُركت بمفردها.',
      'قاعدة الفاصلة: إذا بدأت الجملة بالجملة التابعة (Because / When) نضع فاصلة في المنتصف. أما إذا جاءت في المنتصف فلا نضع فاصلة.'
    ],
    examplesList: [
      {
        label: 'أداة الربط في البداية (مع فاصلة)',
        english: 'Because it was raining, we stayed at home.',
        arabic: 'لأنه كان يمطر، بقينا في المنزل (الجملة التابعة بالبداية ➔ فاصلة في الوسط).',
        type: 'correct'
      },
      {
        label: 'أداة الربط في الوسط (بدون فاصلة)',
        english: 'We stayed at home because it was raining.',
        arabic: 'بقينا في المنزل لأنه كان يمطر (بدون فاصلة قبل because).',
        type: 'correct'
      },
      {
        label: 'مثال بـ (When)',
        english: 'When Ahmed arrived at the university, he met his professor.',
        arabic: 'عندما وصل أحمد للجامعة، التقى بأستاذه.',
        type: 'correct'
      }
    ],
    summaryTag: 'Independent + Dependent (بـ because, when, if, although)'
  },
  {
    id: 10,
    numberPrefix: '10',
    titleAr: 'استخدام الفاصلة',
    titleEn: 'Commas',
    badge: 'الوحدة 3 (GW2 & Evolve 2)',
    explanationText: 'الفاصلة (,) تُستخدم لتنظيم الجمل وأخذ نفس قصير، ومن أهم استخداماتها المقررة في المنهج:',
    explanationPoints: [
      '1. بعد الجمل التابعة أو الظروف في بداية الجملة: (مثل: However, In conclusion, First, Because it rained,).',
      '2. قبل أدوات العطف (FANBOYS) لربط جملتين كاملتين في الجمل المركبة: (, and / , but / , so).',
      '3. لفصل العناصر في القوائم المكونة من ثلاثة أشياء أو أكثر (List of 3+ items).'
    ],
    examplesList: [
      {
        label: '1. بعد الظروف والعبارات الانتقالية',
        english: 'However, we finished on time. / First, boil the water.',
        arabic: 'ومع ذلك، أنهينا في الوقت المحدد (فاصلة بعد However).',
        type: 'correct'
      },
      {
        label: '2. قبل FANBOYS بين جملتين كاملتين',
        english: 'I was tired, but I finished my homework.',
        arabic: 'كنت متعباً، لكني أنهيت واجبي (فاصلة قبل but).',
        type: 'correct'
      },
      {
        label: '3. في القوائم (3 عناصر أو أكثر)',
        english: 'I bought apples, oranges, and bananas.',
        arabic: 'اشتريت تفاحاً، برتقالاً، وموزاً.',
        type: 'correct'
      },
      {
        label: 'خطأ شائع في الكويز',
        english: 'I bought apples, and oranges. ❌ (عنصران فقط: بدون فاصلة!)',
        arabic: 'إذا كانا عنصرين فقط فلا نضع فاصلة قبل and.',
        type: 'incorrect'
      }
    ],
    summaryTag: 'بعد العبارات الانتقالية + قبل FANBOYS بين جملتين + في القوائم من 3+'
  },
  {
    id: 11,
    numberPrefix: '11',
    titleAr: 'التمييز بين أنواع الجمل',
    titleEn: 'Identifying Different Types of Sentences',
    badge: 'الوحدة 3 (GW2)',
    explanationText: 'لتصنيف أي جملة في الاختبار إلى (Simple أو Compound أو Complex)، انظر إلى عدد الأجزاء والروابط:',
    explanationPoints: [
      'Simple (البسيطة): فاعل + فعل (فكرة واحدة مستقلة كاملة المعنى، قد تحتوي على فاعلين أو فعلين مركبين).',
      'Compound (المركبة): جملتان كاملتان مربوطتان بـ (فاصلة + أداة ربط FANBOYS مثل and, but, so, or).',
      'Complex (المعقدة): جملة مستقلة + جملة تابعة (مربوطة بـ because, although, when, if, who, that...).'
    ],
    examplesList: [
      {
        label: 'جملة بسيطة (Simple)',
        english: 'My brother plays football every weekend.',
        arabic: 'فكرة واحدة مكتملة (فاعل + فعل).',
        type: 'correct'
      },
      {
        label: 'جملة مركبة (Compound)',
        english: 'My brother plays football, but I prefer swimming.',
        arabic: 'جملتان كاملتان بينهما فاصلة + but.',
        type: 'correct'
      },
      {
        label: 'جملة معقدة (Complex)',
        english: 'Although my brother was tired, he played the whole match.',
        arabic: 'جملة تابعة تبدأ بـ Although + جملة مستقلة رئيسية.',
        type: 'correct'
      }
    ],
    summaryTag: 'Simple = فكرة واحدة | Compound = (, + FANBOYS) | Complex = (because / when)'
  }
];
