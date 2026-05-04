type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };
export type FaqPage = "home" | "expertise" | "store";

export const FAQ_DATA: Record<FaqPage, LocaleData> = {
  home: {
    en: [
      {
        q: "What is ONE?",
        a: "ONE is a premier business advisory firm based in Tashkent, Uzbekistan, offering integrated consulting across tax, legal, finance, accounting, and HR — a single point of contact for your entire operation in Central Asia.",
      },
      {
        q: "Which markets do you serve?",
        a: "Our primary focus is Uzbekistan, with deep expertise across Central Asian markets. We advise foreign investors, multinationals, and local companies entering or operating in the region.",
      },
      {
        q: "What makes ONE different from other consultancies?",
        a: "We combine seven advisory disciplines and seven managed operations services under one roof — giving clients a fully integrated practice rather than fragmented point solutions across multiple firms.",
      },
      {
        q: "How do I start working with ONE?",
        a: "Schedule a consultation through our contact page. We will discuss your needs, identify where we can add the most value, and propose a tailored scope of engagement.",
      },
    ],
    ru: [
      {
        q: "Что такое ONE?",
        a: "ONE — ведущая консалтинговая компания, базирующаяся в Ташкенте, Узбекистан. Мы предоставляем интегрированные услуги в области налогов, юридического сопровождения, финансов, бухгалтерии и HR — единая точка контакта для всей вашей деятельности в Центральной Азии.",
      },
      {
        q: "На каких рынках вы работаете?",
        a: "Наш основной фокус — Узбекистан и рынки Центральной Азии. Мы консультируем иностранных инвесторов, международные компании и местные предприятия, работающие в регионе или планирующие выход на него.",
      },
      {
        q: "Чем ONE отличается от других консалтинговых компаний?",
        a: "Мы объединяем семь консалтинговых направлений и семь операционных сервисов под одной крышей — предоставляя клиентам полностью интегрированную практику вместо разрозненных решений от разных фирм.",
      },
      {
        q: "Как начать сотрудничество с ONE?",
        a: "Запишитесь на консультацию через страницу контактов. Мы обсудим ваши потребности, определим области, где можем принести наибольшую ценность, и предложим индивидуальный объём услуг.",
      },
    ],
    uz: [
      {
        q: "ONE nima?",
        a: "ONE — Toshkent, O'zbekistonda joylashgan yetakchi biznes maslahat kompaniyasi bo'lib, soliq, yuridik, moliya, buxgalteriya va HR sohalari bo'yicha integratsiyalashgan xizmatlar ko'rsatadi. Markaziy Osiyodagi biznesingiz uchun yagona muloqot nuqtasi.",
      },
      {
        q: "Qaysi bozorlarda xizmat ko'rsatasiz?",
        a: "Biz asosan O'zbekiston va Markaziy Osiyo bozorlariga e'tibor qaratamiz. Chet el investorlari, xalqaro kompaniyalar va mintaqada faoliyat yuritayotgan yoki kirib kelayotgan mahalliy firmalar bilan ishlashda keng tajribamiz bor.",
      },
      {
        q: "ONE boshqa konsalting kompaniyalaridan qanday farq qiladi?",
        a: "Biz yetti maslahat yo'nalishi va yetti operatsion xizmatni bir tomdan birlashtirgan holda mijozlarga turli firmalardan tarqoq yechimlar o'rniga to'liq integratsiyalashgan amaliyot taqdim etamiz.",
      },
      {
        q: "ONE bilan hamkorlikni qanday boshlash mumkin?",
        a: "Kontakt sahifamiz orqali maslahat uchrashuvini belgilang. Biz sizning ehtiyojlaringizni muhokama qilamiz, eng ko'p qiymat qo'sha oladigan sohalarni aniqlaymiz va moslashtirilgan hamkorlik rejasini taklif etamiz.",
      },
    ],
  },
  expertise: {
    en: [
      {
        q: "What advisory disciplines does ONE offer?",
        a: "We offer seven integrated disciplines: tax consulting, legal advisory, accounting, HR services, funding, M&A advisory, and due diligence — all delivered by one coordinated team.",
      },
      {
        q: "Can you handle tax and legal matters together?",
        a: "Yes. Our integrated model means your tax and legal advisors work in close coordination, avoiding conflicting advice and ensuring every structure is sound from both perspectives simultaneously.",
      },
      {
        q: "Which sectors do you specialise in?",
        a: "We have deep sector experience in energy & infrastructure, real estate & construction, manufacturing, retail & FMCG, financial services, and technology. Our team's engagement track record spans over 200 advised deals.",
      },
      {
        q: "How long does a typical engagement take?",
        a: "Scope varies by service: a due diligence typically takes 3–6 weeks, entity registration 1–4 weeks, and ongoing advisory retainers run month-to-month. We structure timelines to match your business milestones.",
      },
    ],
    ru: [
      {
        q: "Какие консалтинговые направления предлагает ONE?",
        a: "Мы предлагаем семь интегрированных направлений: налоговый консалтинг, юридическое сопровождение, бухгалтерия, HR-услуги, финансирование, консультирование по M&A и due diligence — всё от одной слаженной команды.",
      },
      {
        q: "Можете ли вы одновременно заниматься налоговыми и юридическими вопросами?",
        a: "Да. Наша интегрированная модель означает, что ваши налоговые и юридические консультанты работают в тесной координации, исключая противоречивые советы и обеспечивая надёжность структуры с обеих точек зрения одновременно.",
      },
      {
        q: "В каких отраслях вы специализируетесь?",
        a: "У нас глубокий опыт в энергетике и инфраструктуре, недвижимости и строительстве, производстве, розничной торговле и FMCG, финансовых услугах и технологиях. Портфель нашей команды насчитывает более 200 сделок.",
      },
      {
        q: "Сколько времени занимает типичное взаимодействие?",
        a: "Сроки зависят от услуги: due diligence обычно занимает 3–6 недель, регистрация юридического лица — 1–4 недели, текущее консультирование предусматривает ежемесячный ретейнер. Сроки планируются с учётом ваших бизнес-задач.",
      },
    ],
    uz: [
      {
        q: "ONE qanday maslahat yo'nalishlarini taklif etadi?",
        a: "Biz yetti integratsiyalashgan yo'nalish taklif etamiz: soliq konsaltingi, yuridik maslahat, buxgalteriya, HR xizmatlari, moliyalashtirish, M&A maslahat va due diligence — barchasi bir muvofiqlashtirilgan jamoa tomonidan amalga oshiriladi.",
      },
      {
        q: "Soliq va yuridik masalalarni bir vaqtda hal qila olasizmi?",
        a: "Ha. Integratsiyalashgan modelimiz soliq va yuridik maslahatchilaringiz yaqin muvofiqlashuvda ishlashini ta'minlaydi, ziddiyatli maslahatlarni istisno qiladi va har qanday tuzilmaning ikkala nuqtai nazardan bir vaqtda mustahkamligini kafolatlaydi.",
      },
      {
        q: "Qaysi sohalarda ixtisoslashasiz?",
        a: "Energetika va infratuzilma, ko'chmas mulk va qurilish, ishlab chiqarish, chakana savdo va FMCG, moliyaviy xizmatlar va texnologiya sohalarida chuqur tajribamiz bor. Jamoa portfelimizdagi bitimlar soni 200 dan oshadi.",
      },
      {
        q: "Odatiy hamkorlik qancha vaqt davom etadi?",
        a: "Muddatlar xizmat turiga qarab farqlanadi: due diligence odatda 3–6 hafta, yuridik shaxsni ro'yxatga olish 1–4 hafta davom etadi, joriy maslahat oylik reteyner asosida amalga oshiriladi. Jadvallar biznes maqsadlaringizga mos tarzda tuziladi.",
      },
    ],
  },
  store: {
    en: [
      {
        q: "What types of templates are available?",
        a: "Our template library includes corporate documents, employment agreements, regulatory filings, financial models, and compliance checklists — all drafted for the Uzbek legal and regulatory environment.",
      },
      {
        q: "Are the templates compliant with Uzbek law?",
        a: "Yes. Every template is prepared by our in-house legal and tax specialists and reflects current Uzbek legislation, including recent reforms to the Tax Code, Labour Code, and corporate regulations.",
      },
      {
        q: "Can I customise the templates for my specific situation?",
        a: "Templates are designed as ready-to-use starting points. For significant customisation or complex structures, we recommend engaging our advisory team to tailor the document to your specific requirements.",
      },
      {
        q: "How are templates delivered after purchase?",
        a: "After payment is confirmed, you receive an immediate download link to the template files in your chosen format (DOCX or PDF). Templates are available for personal and organisational use.",
      },
    ],
    ru: [
      {
        q: "Какие виды шаблонов доступны?",
        a: "В нашей библиотеке шаблонов представлены корпоративные документы, трудовые договоры, регуляторные заявки, финансовые модели и контрольные списки — все разработаны для правовой и регуляторной среды Узбекистана.",
      },
      {
        q: "Соответствуют ли шаблоны узбекскому законодательству?",
        a: "Да. Каждый шаблон подготовлен нашими штатными юридическими и налоговыми специалистами и отражает действующее законодательство Узбекистана, включая последние реформы Налогового кодекса, Трудового кодекса и корпоративных норм.",
      },
      {
        q: "Могу ли я настроить шаблоны под свою ситуацию?",
        a: "Шаблоны разработаны как готовые отправные точки. При существенной кастомизации или сложных структурах мы рекомендуем привлечь нашу консалтинговую команду для адаптации документа к вашим конкретным требованиям.",
      },
      {
        q: "Как доставляются шаблоны после покупки?",
        a: "После подтверждения оплаты вы получаете ссылку для немедленной загрузки файлов шаблона в выбранном формате (DOCX или PDF). Шаблоны доступны для личного и корпоративного использования.",
      },
    ],
    uz: [
      {
        q: "Qanday turdagi shablonlar mavjud?",
        a: "Shablon kutubxonamizda korporativ hujjatlar, mehnat shartnomalari, tartibga solish bo'yicha arizalar, moliyaviy modellar va muvofiqlik tekshiruv ro'yxatlari mavjud — barchasi O'zbek huquqiy va tartibga solish muhiti uchun tayyorlangan.",
      },
      {
        q: "Shablonlar O'zbek qonunchiligiga muvofiqmi?",
        a: "Ha. Har bir shablon shtab ichidagi yuridik va soliq mutaxassislarimiz tomonidan tayyorlanadi va Soliq kodeksi, Mehnat kodeksi va korporativ qoidalarga so'nggi o'zgartirishlarni o'z ichiga olgan O'zbek qonunchiligini aks ettiradi.",
      },
      {
        q: "Shablonlarni o'z vaziyatimga moslashtirishim mumkinmi?",
        a: "Shablonlar tayyor boshlang'ich nuqta sifatida ishlab chiqilgan. Katta darajadagi moslashtirishlar yoki murakkab tuzilmalar uchun hujjatni sizning talablaringizga moslashtirish maqsadida maslahat jamoamizni jalb etishni tavsiya etamiz.",
      },
      {
        q: "Sotib olgandan so'ng shablonlar qanday yetkaziladi?",
        a: "To'lov tasdiqlanganidan so'ng siz tanlagan formatdagi (DOCX yoki PDF) shablon fayllarini yuklab olish uchun darhol havola olasiz. Shablonlar shaxsiy va tashkiliy foydalanish uchun taqdim etiladi.",
      },
    ],
  },
};
