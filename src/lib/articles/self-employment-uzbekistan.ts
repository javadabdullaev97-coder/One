import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Find out how to register, understand tax benefits, and navigate legal aspects of self-employment in Uzbekistan.",
    author: "Advizen Tax Practice",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Self-employment is increasingly popular in Uzbekistan, offering individuals a flexible way to utilise their skills and talents without the complexities of traditional business setup. For those looking to embark on this path, understanding the regulatory landscape is crucial.",
      },
      { type: "h2", text: "Key Advantages and Simplified Registration" },
      {
        type: "p",
        text: "Uzbekistan has significantly streamlined the process for self-employed individuals. Since July 1, 2020, registration is a straightforward notification-based procedure through a dedicated mobile application or taxpayer's personal cabinet. This eliminates the need for temporary labour certificates and provides a QR code as proof of registration.",
      },
      {
        type: "ul",
        items: [
          "Income exempt from personal income tax up to 100 million UZS within a tax period (threshold updated January 2024)",
          "If annual income exceeds this amount, taxed at a 4% turnover tax rate like an individual entrepreneur",
          "No need to maintain full accounting records",
          "Registration takes minutes via the Soliq mobile app with no state fee",
        ],
      },
      { type: "h2", text: "Social Security and Pension Contributions" },
      {
        type: "p",
        text: "A significant benefit for self-employed individuals is the ability to contribute to their pension fund. They pay a social tax for the year, which is fully directed to the off-budget Pension Fund. This ensures that their work as self-employed individuals contributes to their future retirement benefits, similar to how it is calculated for individual entrepreneurs. The annual contribution is at least 1 Basic Calculated Value (BCV) and is voluntary, payable up to December 31st.",
      },
      { type: "h2", text: "Expanding Opportunities: Over 100 Permitted Activities" },
      {
        type: "p",
        text: "The list of permitted activities for self-employed individuals has expanded considerably, now encompassing over 100 diverse types of work and services. These range from tutoring and childcare to IT services, creative professions, and various craft and agricultural activities. This broad scope allows many professionals to operate legally and efficiently. While you can perform many activities, you may concurrently choose no more than three at any given time.",
      },
      { type: "h2", text: "The Soliq App: Your Central Hub" },
      {
        type: "ul",
        items: [
          "Register and obtain your QR code as proof of self-employed status",
          "Accept orders and process payments",
          "Issue electronic invoices to legal entities",
          "Voluntarily terminate self-employed status at any time",
          "Track income and tax obligations in real time",
        ],
      },
      {
        type: "blockquote",
        text: "Self-employment in Uzbekistan offers one of the most accessible tax regimes in the region — a flat PIT exemption up to 100 million UZS combined with minimal administrative burden makes it an attractive starting point for freelancers, consultants, and small service providers.",
      },
    ],
    faq: [
      {
        question: "How do I register as self-employed in Uzbekistan?",
        answer: "Registration as a self-employed individual in Uzbekistan is done through the Soliq mobile app or taxpayer personal cabinet — it takes minutes, requires no state fee, and results in a QR code as proof of status. No temporary labour certificate is required.",
      },
      {
        question: "What taxes do self-employed individuals pay in Uzbekistan?",
        answer: "Self-employed individuals in Uzbekistan pay no personal income tax on annual income up to 100 million UZS. If income exceeds this threshold, a 4% turnover tax applies — the same rate as for individual entrepreneurs. No full accounting records are required.",
      },
      {
        question: "What activities are allowed under self-employed status in Uzbekistan?",
        answer: "Over 100 types of activities are permitted, including tutoring, IT services, creative professions, childcare, crafts, and agricultural work. You may register for up to three activities simultaneously.",
      },
      {
        question: "Can self-employed individuals in Uzbekistan contribute to a pension?",
        answer: "Yes. Self-employed individuals can voluntarily contribute to the state Pension Fund by paying an annual social tax of at least 1 Basic Calculated Value (BCV), payable by December 31st each year.",
      },
    ],
  },
  ru: {
    subtitle: "Узнайте, как зарегистрироваться, разобраться в налоговых льготах и юридических аспектах самозанятости в Узбекистане.",
    author: "Налоговая практика Advizen",
    readTime: "6 мин чтения",
    content: [
      {
        type: "p",
        text: "Самозанятость становится всё популярнее в Узбекистане, предлагая физлицам гибкий способ применять свои навыки и таланты без сложностей классического оформления бизнеса. Тем, кто планирует пойти этим путём, важно понимать регуляторную среду.",
      },
      { type: "h2", text: "Ключевые преимущества и упрощённая регистрация" },
      {
        type: "p",
        text: "Узбекистан значительно упростил процесс для самозанятых. С 1 июля 2020 года регистрация — простая уведомительная процедура через специальное мобильное приложение или личный кабинет налогоплательщика. Это устранило необходимость во временных трудовых справках и обеспечивает QR-код как подтверждение регистрации.",
      },
      {
        type: "ul",
        items: [
          "Доход освобождён от НДФЛ до 100 млн сум в налоговом периоде (порог обновлён в январе 2024 года)",
          "Если годовой доход превышает эту сумму, облагается налогом с оборота по ставке 4%, как у индивидуального предпринимателя",
          "Полный бухгалтерский учёт не требуется",
          "Регистрация занимает несколько минут через приложение Soliq без госпошлины",
        ],
      },
      { type: "h2", text: "Социальные взносы и пенсия" },
      {
        type: "p",
        text: "Существенное преимущество для самозанятых — возможность отчислять взносы в Пенсионный фонд. Они уплачивают социальный налог за год, полностью направляемый во внебюджетный Пенсионный фонд. Это позволяет учитывать работу самозанятого при расчёте будущих пенсионных выплат, аналогично индивидуальным предпринимателям. Годовой взнос — не менее 1 БРВ, добровольный, оплачивается до 31 декабря.",
      },
      { type: "h2", text: "Расширение возможностей: более 100 разрешённых видов деятельности" },
      {
        type: "p",
        text: "Список разрешённых для самозанятых видов деятельности значительно расширен и сейчас включает более 100 разнообразных работ и услуг — от репетиторства и присмотра за детьми до IT-услуг, творческих профессий и ремёсленной и сельскохозяйственной деятельности. Такая широкая сфера позволяет многим специалистам работать легально и эффективно. Можно заниматься многим, но одновременно выбирать не более трёх видов деятельности.",
      },
      { type: "h2", text: "Приложение Soliq: ваш центральный инструмент" },
      {
        type: "ul",
        items: [
          "Регистрация и получение QR-кода как подтверждения статуса самозанятого",
          "Приём заказов и обработка платежей",
          "Выставление электронных счетов юридическим лицам",
          "Добровольное прекращение статуса самозанятого в любой момент",
          "Отслеживание доходов и налоговых обязательств в реальном времени",
        ],
      },
      {
        type: "blockquote",
        text: "Самозанятость в Узбекистане предлагает один из самых доступных налоговых режимов в регионе — освобождение от НДФЛ до 100 млн сум в сочетании с минимальной административной нагрузкой делает её привлекательной отправной точкой для фрилансеров, консультантов и небольших поставщиков услуг.",
      },
    ],
    faq: [
      {
        question: "Как зарегистрироваться в качестве самозанятого в Узбекистане?",
        answer: "Регистрация самозанятого в Узбекистане осуществляется через мобильное приложение Soliq или личный кабинет налогоплательщика — процедура занимает несколько минут, государственная пошлина не взимается, а в подтверждение статуса выдаётся QR-код. Временное трудовое свидетельство не требуется.",
      },
      {
        question: "Какие налоги платят самозанятые в Узбекистане?",
        answer: "Самозанятые в Узбекистане освобождены от НДФЛ на годовой доход до 100 млн сумов. При превышении этого порога применяется налог с оборота по ставке 4% — как у индивидуального предпринимателя. Вести полный бухгалтерский учёт не требуется.",
      },
      {
        question: "Какие виды деятельности разрешены самозанятым в Узбекистане?",
        answer: "Самозанятым разрешено более 100 видов деятельности: репетиторство, ИТ-услуги, творческие профессии, уход за детьми, ремёсла, сельскохозяйственные работы и другие. Одновременно можно вести не более трёх видов деятельности.",
      },
      {
        question: "Могут ли самозанятые в Узбекистане формировать пенсию?",
        answer: "Да. Самозанятые могут добровольно уплачивать взносы в государственный Пенсионный фонд: ежегодный социальный налог в размере не менее 1 базовой расчётной величины (БРВ), уплачиваемый до 31 декабря.",
      },
    ],
  },
  uz: {
    subtitle: "Oʼzbekistonda oʼzi-oʼzi band qilishning roʼyxatdan oʼtish, soliq imtiyozlari va huquqiy jihatlarini bilib oling.",
    author: "Advizen soliq amaliyoti",
    readTime: "6 daqiqalik oʼqish",
    content: [
      {
        type: "p",
        text: "Oʼzini-oʼzi band qilish Oʼzbekistonda tobora ommabop boʼlmoqda va shaxslarga anʼaNaviy biznes tashkil etishning murakkabliklarisiz oʼz koʼnikma va isteʼDodlaridan foydalanishning moslashuvchan usulini taklif qiladi. Bu yoʼlga kirmoqchi boʼLganlar uchun tartibga solish muhitini tushunish muhim.",
      },
      { type: "h2", text: "Asosiy afzalliklar va soddalashtirilgan roʼyxatga olish" },
      {
        type: "p",
        text: "Oʼzbekiston oʼzini-oʼzi band qiluvchilar uchun jarayonni sezilarli soddalashtirdi. 2020 yil 1 iyuldan boshlab roʼyxatga olish — maxsus mobil ilova yoki soliq toʼLovchining shaxsiy kabineti orqali oddiy xabardor qilish tartibidir. Bu vaqtinchalik mehnat sertifikatlariga ehtiyojni bartaraf qiladi va roʼyxatga olish dalili sifatida QR-kodni taqdim etadi.",
      },
      {
        type: "ul",
        items: [
          "Soliq davrida 100 mln soʼmgacha boʼLgan daromad jismoniy shaxslar daromad soligʼidan ozod (chegara 2024 yil yanvarida yangilangan)",
          "Yillik daromad bu miqdordan oshsa, yakka tartibdagi tadbirkor singari 4% aylanma soliq stavkasida soliqqa tortiladi",
          "ToʼLiq buxgalteriya yuritish talab qilinmaydi",
          "Roʼyxatga olish Soliq mobil ilovasi orqali bir necha daqiqada va davlat bojisiz amalga oshiriladi",
        ],
      },
      { type: "h2", text: "Ijtimoiy taʼMinot va pensiya badallari" },
      {
        type: "p",
        text: "Oʼzini-oʼzi band qiluvchilar uchun muhim afzallik — pensiya jamgʼArmasiga badal toʼLash imkoniyati. Ular yiliga ijtimoiy soliq toʼLaYdilar va u toʼLiq byudjetdan tashqari Pensiya jamgʼArmasiga yoʼNaltiriladi. Bu ularning oʼzini-oʼzi band qiluvchi sifatidagi mehnati kelajakdagi pensiya nafaqalariga taʼSir qilishini taʼMinlaydi, yakka tartibdagi tadbirkorlar uchun hisoblanganidek. Yillik badal kamida 1 Bazaviy hisoblash miqdori (BHM)ni tashkil qiladi va ixtiyoriy boʼLib, 31 dekabrgacha toʼLanadi.",
      },
      { type: "h2", text: "Imkoniyatlarning kengayishi: 100 dan ortiq ruxsat etilgan faoliyat" },
      {
        type: "p",
        text: "Oʼzini-oʼzi band qiluvchilar uchun ruxsat etilgan faoliyatlar roʼyxati sezilarli kengaytirilib, hozir 100 dan ortiq turli ish va xizmatlarni qamrab oladi. Bu repetitorlik va bolalarni parvarish qilishdan tortib IT xizmatlari, kreativ kasblar va turli hunarmandchilik hamda qishloq xoʼJalik faoliyatlarigacha boʼLgan sohalarni oʼz ichiga oladi. Bu keng qamrov koʼPlab mutaxassislarga qonuniy va samarali ishlash imkonini beradi. KoʼPlab faoliyat turlarini bajarsangiz ham, bir vaqtning oʼZida uchtadan ortiqni tanlay olmaysiz.",
      },
      { type: "h2", text: "Soliq ilovasi: markaziy markazingiz" },
      {
        type: "ul",
        items: [
          "Roʼyxatdan oʼTish va oʼzini-oʼzi band qilish maqomi dalili sifatida QR-kod olish",
          "Buyurtmalarni qabul qilish va toʼLovlarni qayta ishlash",
          "Yuridik shaxslarga elektron hisob-fakturalar berish",
          "Istalgan vaqtda oʼzini-oʼzi band qilish maqomini ixtiyoriy ravishda tugatish",
          "Daromad va soliq majburiyatlarini real vaqtda kuzatish",
        ],
      },
      {
        type: "blockquote",
        text: "Oʼzbekistonda oʼzini-oʼzi band qilish mintaqadagi eng qulay soliq rejimlaridan biridir — 100 mln soʼmgacha JShDS dan ozod qilish va minimal maʼMuriy yuk bilan birgalikda u frilanserlar, maslahatchilar va kichik xizmat koʼRsatuvchilar uchun jozibali boshlanish nuqtasiga aylanadi.",
      },
    ],
    faq: [
      {
        question: "O'zbekistonda o'zini-o'zi band qiluvchi sifatida qanday ro'yxatdan o'tish mumkin?",
        answer: "O'zbekistonda o'zini-o'zi band qiluvchi sifatida ro'yxatdan o'tish Soliq mobil ilovasi yoki soliq to'lovchining shaxsiy kabineti orqali amalga oshiriladi — bu bir necha daqiqa vaqt oladi, davlat boji to'lanmaydi va maqom dalili sifatida QR-kod beriladi. Vaqtinchalik mehnat sertifikati talab qilinmaydi.",
      },
      {
        question: "O'zbekistonda o'zini-o'zi band qiluvchilar qanday soliqlar to'laydi?",
        answer: "O'zbekistonda o'zini-o'zi band qiluvchilar yillik 100 mln so'mgacha bo'lgan daromadga jismoniy shaxslar daromad solig'idan ozod. Bu chegara oshirilsa, yakka tartibdagi tadbirkorlar kabi 4% aylanma soliq stavkasi qo'llaniladi. To'liq buxgalteriya hisobi yuritish shart emas.",
      },
      {
        question: "O'zbekistonda o'zini-o'zi band qilish maqomi uchun qanday faoliyat turlari ruxsat etilgan?",
        answer: "100 dan ortiq faoliyat turi ruxsat etilgan: repetitorlik, IT xizmatlari, kreativ kasblar, bolalar parvarishi, hunarmandchilik va qishloq xo'jaligi ishlari. Bir vaqtning o'zida uchta faoliyatgacha ro'yxatdan o'tish mumkin.",
      },
      {
        question: "O'zbekistondagi o'zini-o'zi band qiluvchilar pensiyaga badallar to'lashi mumkinmi?",
        answer: "Ha. O'zini-o'zi band qiluvchilar kamida 1 Bazaviy hisoblash miqdori (BHM) miqdorida yillik ijtimoiy soliqni har yil 31 dekabrgacha to'lab, davlat Pensiya jamg'armasiga ixtiyoriy ravishda badal qo'shishlari mumkin.",
      },
    ],
  },
};

export default article;
