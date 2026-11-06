export interface FormattedRuleGuide {
  id: number;
  titleAr: string;
  titleEn: string;
  badge: string;
  definitionAr: string; // ما هي القاعدة ببساطة؟
  conditions: {
    heading: string;
    rule: string;
    correctExample: string;
    incorrectExample?: string;
    noteAr?: string;
  }[];
  quickExamTips: string[]; // كيف تأتي في الكويز؟
  goldenSummary: string; // خلاصة من سطرين تحفظها للاختبار
}

export const CLEAR_RULES_GUIDE: FormattedRuleGuide[] = [
  {
    id: 1,
    titleAr: 'قاعدة 1: الحروف الكبيرة وعلامات الترقيم',
    titleEn: 'Capitalization & End Punctuation',
    badge: 'الوحدة 1 & 4',
    definitionAr: 'تحدد متى نكتب الحرف الأول كبيراً (Capital) ومتى نضع النقطة (.) أو علامة الاستفهام (؟) أو التعجب (!).',
    conditions: [
      {
        heading: '1. بداية كل جملة والضمير (I)',
        rule: 'الحرف الأول في أي جملة يجب أن يكون كبيراً، والضمير (I = أنا) يُكتب كبيراً دائماً أينما ورد.',
        correctExample: 'She travels every year, and I usually join her.',
        incorrectExample: 'she travels every year, and i usually join her. ❌',
        noteAr: 'حتى لو كان الضمير I في منتصف الجملة لا يكتب أبداً i.'
      },
      {
        heading: '2. الأسماء الخاصة وألقاب الأشخاص (Proper Nouns)',
        rule: 'أسماء الأشخاص، الألقاب الرسمية المتبوعة باسم، وأسماء الأماكن المحددة تبدأ بحرف كبير.',
        correctExample: 'Dr. Jenkins met with Ahmed in Riyadh.',
        incorrectExample: 'dr. jenkins met with ahmed in riyadh. ❌',
        noteAr: 'اللقب مثل doctor لا يكبر وحده، ولكن يكبر مع الاسم: Dr. Jenkins.'
      },
      {
        heading: '3. الدول، المدن، اللغات، والجنسيات',
        rule: 'جميع أسماء الدول والمدن واللغات والجنسيات تبدأ بحرف كبير دائماً.',
        correctExample: 'Many students in Saudi Arabia speak Arabic and English fluently.',
        incorrectExample: 'Many students in saudi arabia speak arabic and english fluently. ❌'
      },
      {
        heading: '4. أيام الأسبوع وشهور السنة (دون فصول السنة)',
        rule: 'الأيام والشهور تبدأ بحرف كبير، بينما فصول السنة (summer, winter) تبقى صغيرة.',
        correctExample: 'Our quiz is on Sunday in November, during the autumn semester.',
        incorrectExample: 'Our quiz is on sunday in november, during the Autumn semester. ❌',
        noteAr: 'انتبه: فصول السنة (summer, winter, spring, fall) حروف صغيرة!'
      },
      {
        heading: '5. علامات الترقيم في نهاية الجملة (End Punctuation)',
        rule: 'النقطة (.) للجملة الخبرية، علامة الاستفهام (?) للسؤال، وعلامة التعجب (!) للتعبير عن مشاعر قوية.',
        correctExample: 'Where is the library? (سؤال) — I love my university! (انفعال قوي)'
      }
    ],
    quickExamTips: [
      'في الكويز: ابحث فوراً عن الضمير "i" الصغير أو اسم لغة "arabic" لتستبعد الخيار الخاطئ.',
      'تأكد من وجود علامة الترقيم المناسبة في نهاية الجملة (. أو ؟).'
    ],
    goldenSummary: 'كابيتال لأول الجملة، للضمير I، للغات والدول والأشخاص والأيام والشهور. وضع علامة ترقيم بنهاية كل جملة.'
  },
  {
    id: 2,
    titleAr: 'قاعدة 2: توافق الفاعل والفعل في المضارع البسيط',
    titleEn: 'Subject-Verb Agreement (Simple Present)',
    badge: 'الوحدة 2',
    definitionAr: 'قاعدة توافق الفعل مع فاعله: إذا كان الفاعل مفرداً نضع للفعل (s/es)، وإذا كان جمعاً نترك الفعل في المصدر (بدون s).',
    conditions: [
      {
        heading: '1. الفاعل المفرد الغائب (He / She / It / المفرد)',
        rule: 'إذا كان الفاعل مفرداً، نضيف للفعل (s) أو (es) في المضارع البسيط.',
        correctExample: 'A pilot flies the plane. / She works hard.',
        incorrectExample: 'A pilot fly the plane. ❌',
        noteAr: 'الفعل المفرد يأخذ s، والاسم المفرد لا يحتوي s.'
      },
      {
        heading: '2. الفاعل الجمع (They / We / You / الجمع)',
        rule: 'إذا كان الفاعل جمعاً أو اسمين بينهما and، يكون الفعل بدون (s).',
        correctExample: 'A pilot and a copilot fly the plane. / Students learn fast.',
        incorrectExample: 'A pilot and a copilot flies the plane. ❌',
        noteAr: 'اسمان بينهما and = جمع دائماً.'
      },
      {
        heading: '3. الاسم بعد حرف الجر (Prepositional Phrase) ليس فاعلاً',
        rule: 'لا تنظر للاسم الواقع بعد (of, in, at, behind, with)؛ الفاعل هو الكلمة الأولى قبل حرف الجر.',
        correctExample: 'The trees behind the school are tall.',
        incorrectExample: 'The trees behind the school is tall. ❌ (الفاعل trees وليس school)'
      },
      {
        heading: '4. قاعدة (There is / There are)',
        rule: 'الفعل يتبع الاسم الذي يأتي بعده: There is للمفرد، و There are للجمع.',
        correctExample: 'There is one reason. / There are three reasons.',
        incorrectExample: 'There are one reason. ❌'
      },
      {
        heading: '5. كلمات (Every / Each / Everyone / Gerund -ing)',
        rule: 'تعتبر مفردة دائماً وتأخذ فعلاً مفرداً بـ (s). وكذلك الفعل المنتهي بـ (ing) كاسم (Gerund) مفرد.',
        correctExample: 'Everyone likes the new teacher. / Drinking water is healthy.',
        incorrectExample: 'Everyone like the new teacher. ❌ / Drinking water are healthy. ❌'
      },
      {
        heading: '6. بعد أفعال النفي والسؤال (Does / Doesn\'t)',
        rule: 'يعود الفعل إلى مصدره المجرد بدون s بعد does أو doesn\'t.',
        correctExample: 'Does she work here? / He doesn\'t speak French.',
        incorrectExample: 'Does she works here? ❌'
      }
    ],
    quickExamTips: [
      'حدد الفاعل الحقيقي وتجاهل ما بين القوسين: The box [of chocolates] IS on the table.',
      'تذكر أن Everyone تعامل معاملة المفرد (Everyone has / Everyone likes).'
    ],
    goldenSummary: 'المفرد يأخذ فعلاً بـ (s)، والجمع فعلاً مجرداً. استبعد شبه الجملة بعد حروف الجر، و (ing) و Everyone يعاملان كمفرد.'
  },
  {
    id: 3,
    titleAr: 'قاعدة 3: أنواع الجمل الثلاثة',
    titleEn: 'Sentence Types (Simple, Compound, Complex)',
    badge: 'الوحدة 2 & 3',
    definitionAr: 'التمييز بين بنية الجمل الإنجليزية الأساسية وكيفية ربط الأفكار بأدوات الربط المناسبة.',
    conditions: [
      {
        heading: '1. الجملة البسيطة (Simple Sentence)',
        rule: 'تحتوي على فكرة واحدة مكتملة (Independent Clause واحدة). قد تحتوي على فاعلين أو فعلين مركبين ولكن بدون فاصلة.',
        correctExample: 'Chile imports oil and exports copper.',
        noteAr: 'فاعل واحد وفعلان (imports and exports) تظل جملة بسيطة ولا نضع فاصلة قبل and هنا.'
      },
      {
        heading: '2. الجملة المركبة (Compound Sentence)',
        rule: 'ربط جملتين مستقلتين كاملتين باستخدام: فاصلة (,) + إحدى أدوات FANBOYS (and, but, so, or).',
        correctExample: 'Chile exports copper, and Brazil exports sugar.',
        incorrectExample: 'Chile exports copper and Brazil exports sugar. ❌ (ناقص فاصلة)',
        noteAr: 'and للإضافة، but للتعارض، so للنتيجة، or للاختيار.'
      },
      {
        heading: '3. الجملة المعقدة (Complex Sentence)',
        rule: 'تحتوي على جملة مستقلة (Independent) + جملة تابعة (Dependent) تبدأ بأداة ربط مثل because, when, after, who, which.',
        correctExample: 'Because I speak three languages, I can communicate with many people.',
        noteAr: 'إذا بدأت الجملة بـ because أو when نضع فاصلة في المنتصف. إذا جاءت في المنتصف لا نضع فاصلة.'
      }
    ],
    quickExamTips: [
      'جملتان كاملتان + (فاصلة + and/but/so) = Compound Sentence.',
      'جملة فيها (because / when / if / although) = Complex Sentence.'
    ],
    goldenSummary: 'Simple = جملة واحدة مستقلة. Compound = جملتان كاملتان بينهما (, + and/but/so). Complex = جملة تابعة بـ because/when مع جملة رئيسية.'
  },
  {
    id: 4,
    titleAr: 'قاعدة 4: قواعد الفواصل الأربعة الأساسية',
    titleEn: 'The 4 Essential Comma Rules',
    badge: 'الوحدة 3',
    definitionAr: 'الفواصل في الإنجليزية لها مواضع دقيقة ومحددة للاختبار، وتجنب وضعها عشوائياً.',
    conditions: [
      {
        heading: '1. في القوائم (Lists of 3 or more items)',
        rule: 'توضع الفاصلة بين 3 عناصر أو أكثر في القائمة، وقبل and الأخيرة (Oxford comma). إذا كانا عنصرين فقط لا نضع فاصلة.',
        correctExample: 'I speak English, Spanish, and Japanese. (3 عناصر)',
        incorrectExample: 'I speak English, and Spanish. ❌ (عنصران فقط: بدون فاصلة!)'
      },
      {
        heading: '2. قبل أدوات الربط في الجملة المركبة (Compound Sentences)',
        rule: 'توضع الفاصلة قبل (and, but, so, or) فقط إذا كان بعدها جملة كاملة (فاعل + فعل).',
        correctExample: 'I studied hard for the test, so I got an A.',
        incorrectExample: 'I studied hard, and passed the test. ❌ (passed ليس بعدها فاعل جديد)'
      },
      {
        heading: '3. بعد الكلمات والعبارات الانتقالية (Transition Words)',
        rule: 'توضع فاصلة مباشرة بعد الكلمات الافتتاحية والعبارات الانتقالية في أول الجملة.',
        correctExample: 'First, wash your hands. / However, he arrived late. / In 1990, the city grew.',
        noteAr: 'كلمات مثل (First, Next, Finally, However, In conclusion,) يأتي بعدها فاصلة فوراً.'
      },
      {
        heading: '4. بعد الجملة التابعة في أول الجملة (Adverb Clause First)',
        rule: 'إذا بدأت الجملة بـ (Because / When / If / After)، نضع فاصلة بين الجملتين. أما إذا جاءت في المنتصف فلا نضع فاصلة.',
        correctExample: 'Because it was raining, we stayed home. ✔ / We stayed home because it was raining. ✔ (بدون فاصلة)',
        incorrectExample: 'We stayed home, because it was raining. ❌ (لا فاصلة قبل because في المنتصف)'
      }
    ],
    quickExamTips: [
      'احذر: لا تضع فاصلة قبل because عندما تأتي في وسط الجملة.',
      'احذر: عنصران فقط (Coffee and tea) لا توضع بينهما فاصلة إطلاقاً.'
    ],
    goldenSummary: 'فاصلة للقوائم من 3+ عناصر، فاصلة قبل FANBOYS بين جملتين كاملتين، فاصلة بعد الكلمات الانتقالية (First,)، وفاصلة بعد Because/When في أول الجملة فقط.'
  },
  {
    id: 5,
    titleAr: 'قاعدة 5: أخطاء الجمل الثلاثة القاتلة',
    titleEn: 'Three Sentence Errors (Fragment, Run-on, Comma Splice)',
    badge: 'الوحدة 3 & 4',
    definitionAr: 'ثلاثة أخطاء شائعة جداً في الاختبار، ومعرفة كيفية اكتشافها وتصحيحها.',
    conditions: [
      {
        heading: '1. الجملة الناقصة (Fragment)',
        rule: 'عبارة غير مكتملة المعنى (ينقصها فاعل، أو ينقصها فعل، أو جملة تابعة بـ Because تُركت بمفردها).',
        incorrectExample: 'Because I was very tired. ❌ (فكرة غير مكتملة)',
        correctExample: 'Because I was very tired, I went to sleep early. ✔ (أكملنا المعنى)'
      },
      {
        heading: '2. الجمل المتداخلة بلا فواصل (Run-on Sentence)',
        rule: 'جملتان مستقلتان دمجتا معاً بدون أي علامة ترقيم ولا أداة ربط تفصل بينهما.',
        incorrectExample: 'I love studying English it is very interesting. ❌',
        correctExample: 'I love studying English. It is very interesting. ✔ (نقطة تفصل الجملتين)'
      },
      {
        heading: '3. الربط بالفاصلة وحدها (Comma Splice)',
        rule: 'وضع فاصلة فقط بين جملتين مستقلتين كاملتين دون أداة ربط (خطأ فادح!).',
        incorrectExample: 'The weather was cold, we wore warm coats. ❌',
        correctExample: 'The weather was cold, so we wore warm coats. ✔ (فاصلة + so) أو وضع نقطة (.).'
      }
    ],
    quickExamTips: [
      'إذا رأيت فاصلة بين جملتين كاملتين بدون and/but/so فهذا خطأ Comma Splice.',
      'كلمات However و Therefore لا تربط جملتين بفاصلة؛ بل تحتاج نقطة قبلهما (It rained. However, we went out.).'
    ],
    goldenSummary: 'Fragment = فكرة ناقصة، Run-on = جملتان بلا أي ترقيم، Comma Splice = جملتان ربطتا بفاصلة فقط بدون أداة ربط.'
  },
  {
    id: 6,
    titleAr: 'قاعدة 6: دمج الجمل بمهارة وسلاسة',
    titleEn: 'Combining Sentences Smoothly',
    badge: 'الوحدة 1 & 2',
    definitionAr: 'دمج جملتين قصيرتين في جملة واحدة قوية بدون تكرار الكلمات وبدون حذف أي معلومة.',
    conditions: [
      {
        heading: '1. دمج الصفات قبل الاسم (Adjectives before Nouns)',
        rule: 'إذا كانت الجملة الثانية تصف الاسم في الجملة الأولى، انقل الصفة وضعها قبل الاسم واحذف الكلمات المكررة.',
        correctExample: 'Chicago is a city. It is modern. ➔ Chicago is a modern city. ✔',
        incorrectExample: 'Chicago is a city and it is modern. (تعتبر ركيكة ومكررة)'
      },
      {
        heading: '2. دمج الفاعلين أو الفعلين بـ (and)',
        rule: 'عند وجود فاعلين يشتركان في الفعل، اجمعهما بـ and واحذف الفعل المكرر.',
        correctExample: 'A pilot flies planes. A copilot flies planes. ➔ A pilot and a copilot fly planes. ✔'
      },
      {
        heading: '3. استخدام الأسماء الموصولة (Who للأشخاص / Which أو That لغير العاقل)',
        rule: 'اربط الجملة الثانية بالاسم الموصول المناسب دون تكرار الضمير.',
        correctExample: 'I have a sister. She speaks three languages. ➔ I have a sister who speaks three languages. ✔'
      }
    ],
    quickExamTips: [
      'الخيار الصحيح في الكويز هو الذي يجمع كل المعلومات بدون تكرار كلمات، وبدون خطأ قواعد.',
      'تأكد من أن الفعل بعد الجمع يتوافق (fly وليس flies مع الفاعلين).'
    ],
    goldenSummary: 'ادمج بحذف الكلمات المكررة، ضع الصفات قبل الأسماء، واستخدم and أو who لدمج الجمل في جملة واحدة بليغة.'
  },
  {
    id: 7,
    titleAr: 'قاعدة 7: عناصر الفقرة وشروط العنوان',
    titleEn: 'Paragraph Elements & Title Guidelines',
    badge: 'الوحدة 1 & 2 & 3',
    definitionAr: 'تكوين الفقرة الأكاديمية: الجملة الافتتاحية، الفكرة الحاكمة، الجمل الداعمة، الجملة الختامية، وقواعد العنوان.',
    conditions: [
      {
        heading: '1. الجملة الافتتاحية والفكرة الحاكمة (Topic Sentence & Controlling Idea)',
        rule: 'تتكون من جزأين: الموضوع (Topic) + الفكرة الحاكمة (Controlling Idea). ليست حقيقة عامة، وليست ضيقة جداً.',
        correctExample: 'Regular exercise offers three major health benefits. ✔ (Topic = Exercise / Controlling Idea = Three health benefits)',
        incorrectExample: 'Water is wet. ❌ (حقيقة عامة لا تصلح Topic Sentence) / I like tea. ❌ (ضيقة جداً)'
      },
      {
        heading: '2. الجمل الداعمة (Supporting Sentences)',
        rule: 'تشرح وتوضح الفكرة الحاكمة بالأمثلة والحقائق. وأي جملة خارج الموضوع (Unrelated Sentence) تُحذف فوراً للحفاظ على الوحدة (Unity).',
        correctExample: 'First, it strengthens the heart. Second, it reduces stress. Third, it boosts energy.'
      },
      {
        heading: '3. الجملة الختامية (Concluding Sentence)',
        rule: 'تذكر الفكرة الرئيسية بصياغة جديدة (Restate)، أو تقدم نصيحة (Suggestion)، أو رأياً (Opinion). تبدأ بـ (In conclusion, / For these reasons,).',
        correctExample: 'For these reasons, exercising regularly is essential for a healthy lifestyle. ✔',
        noteAr: 'الجملة الختامية لا تقدم أفكاراً جديدة لم تُذكر في الفقرة!'
      },
      {
        heading: '4. شروط العنوان الأكاديمي (Title Guidelines)',
        rule: 'العنوان قصير، ليس جملة كاملة، يذكر موضوع الفقرة، ولا نضع في نهايته نقطة (.) أبداً.',
        correctExample: 'The Benefits of Regular Exercise ✔ (بدون نقطة وبحروف كبيرة للكلمات المهمة)',
        incorrectExample: 'Regular exercise is good for health. ❌ (هذه جملة بنقطة وليست عنواناً!)'
      }
    ],
    quickExamTips: [
      'إذا كان السؤال عن العنوان (Title): استبعد أي خيار ينتهي بنقطة (.) أو يكون جملة كاملة.',
      'الجملة الافتتاحية لا بد أن تحتوي Controlling Idea تحدد اتجاه الفقرة.'
    ],
    goldenSummary: 'Topic Sentence = موضوع + فكرة حاكمة. الجمل الداعمة تشرح وتفصل. الجملة الختامية تلخص بلا فكرة جديدة. العنوان قصير بلا نقطة.'
  },
  {
    id: 8,
    titleAr: 'قاعدة 8: الميزات الأربع للفقرة النموذجية',
    titleEn: 'The Four Features of a Good Paragraph',
    badge: 'الوحدة 1 & 2',
    definitionAr: 'الشروط الشكلية والموضوعية الأربعة التي يجب أن تتوفر في كل بارقراف ممتاز للحصول على الدرجة الكاملة.',
    conditions: [
      {
        heading: 'الميزة الأولى: الإزاحة البادئة (First-line Indent)',
        rule: 'السطر الأول فقط في الفقرة يترك قبله فراغ بادئ بمقدار 5 مسافات (حوالي 1.25 سم أو ضغطة Tab).',
        correctExample: '    My university campus is a wonderful place to study...',
        noteAr: 'باقي أسطر الفقرة تبدأ من حافة الصفحة بشكل طبيعي.'
      },
      {
        heading: 'الميزة الثانية: وجود جملة افتتاحية واضحة (Topic Sentence)',
        rule: 'تحتوي الفقرة على Topic Sentence في بدايتها تذكر الموضوع والفكرة الحاكمة بوضوح للقارئ.',
        correctExample: 'Stating the main point clearly right at the start.'
      },
      {
        heading: 'الميزة الثالثة: الوحدة الموضوعية (Unity)',
        rule: 'كل الجمل في الفقرة تناقش فكرة رئيسية واحدة وترتبط مباشرة بالـ Topic Sentence. لا جمل شاردة.',
        correctExample: 'All supporting sentences support the central controlling idea without deviation.'
      },
      {
        heading: 'الميزة الرابعة: الجملة الختامية المنطقية (Logical Concluding Sentence)',
        rule: 'تنتهي الفقرة بجملة ختامية تعطي شعوراً باكتمال النص وتختم الأفكار بشكل منطقي ومحكم.',
        correctExample: 'A strong conclusion giving final thoughts, advice, or summary.'
      }
    ],
    quickExamTips: [
      'سؤال الكويز المعتاد: "What are the four features?" احفظ: Indent, Topic Sentence, Unity, Concluding Sentence.',
      'الـ Indent يكون في السطر الأول فقط وليس كل أسطر الفقرة.'
    ],
    goldenSummary: '1) إزاحة السطر الأول (Indent)، 2) جملة افتتاحية بفكرة حاكمة، 3) كل الجمل تدور حول فكرة واحدة (Unity)، 4) جملة ختامية منطقية.'
  }
];
