type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };

export const PRODUCT_FAQ_DATA: Record<string, LocaleData> = {
  "llc-formation": {
    en: [
      {
        q: "What documents are included in the LLC Formation Pack?",
        a: "The pack contains a bilingual company charter, founder's decision, registration application forms, and a regulatory checklist — everything required for submitting an LLC registration in Uzbekistan.",
      },
      {
        q: "Is this pack sufficient to register an LLC without a lawyer?",
        a: "Yes. The documents are fully drafted and annotated for self-use. For complex shareholder structures or regulated industries, pairing the pack with a short consultation is advisable.",
      },
      {
        q: "How do I customise the charter for my business?",
        a: "Open the Word file and fill in the highlighted fields — company name, registered address, share structure, and management model. The annotation guide explains each clause and the options available under Uzbek law.",
      },
      {
        q: "Is the charter compliant with current Uzbek law?",
        a: "Yes. All documents reflect the Civil Code of the Republic of Uzbekistan and the Law on Limited Liability Companies, updated as of March 2025.",
      },
    ],
    ru: [
      {
        q: "Какие документы входят в пакет для регистрации ООО?",
        a: "Пакет включает двуязычный устав, решение учредителей, формы заявлений и регуляторный чеклист — всё необходимое для подачи документов на регистрацию ООО в Узбекистане.",
      },
      {
        q: "Можно ли зарегистрировать ООО самостоятельно, без юриста?",
        a: "Да. Документы полностью составлены и аннотированы для самостоятельного использования. При сложных структурах владения или регулируемых видах деятельности рекомендуем дополнить пакет краткой консультацией.",
      },
      {
        q: "Как адаптировать устав под мою компанию?",
        a: "Откройте файл Word и заполните выделенные поля: наименование, юридический адрес, структура долей и модель управления. Руководство с аннотациями объясняет каждый пункт и допустимые варианты по законодательству Узбекистана.",
      },
      {
        q: "Соответствует ли устав действующему законодательству Узбекистана?",
        a: "Да. Все документы соответствуют Гражданскому кодексу Республики Узбекистан и Закону об обществах с ограниченной ответственностью в редакции, актуальной на март 2025 года.",
      },
    ],
    uz: [
      {
        q: "MChJ tashkil etish to'plamiga qanday hujjatlar kiradi?",
        a: "To'plamga ikki tilli kompaniya nizomi, ta'sischilar qarori, ro'yxatga olish ariza shakllari va tartibga soluvchi tekshiruv ro'yxati kiradi — O'zbekistonda MChJ ro'yxatdan o'tkazish uchun zarur bo'lgan barcha hujjatlar.",
      },
      {
        q: "Huquqshunossiz MChJni ro'yxatdan o'tkazish mumkinmi?",
        a: "Ha. Hujjatlar mustaqil foydalanish uchun to'liq tuzilgan va izohlar bilan ta'minlangan. Murakkab aksiyadorlik tuzilmalari yoki litsenziyalanadigan faoliyat turlari uchun qisqa konsultatsiya tavsiya etiladi.",
      },
      {
        q: "Nizomni o'z biznesimga moslashtirish uchun nima qilishim kerak?",
        a: "Word faylini oching va belgilangan maydonlarni to'ldiring: kompaniya nomi, yuridik manzil, ulushlar tuzilishi va boshqaruv modeli. Izoh qo'llanmasi har bir bandni va O'zbekiston qonunchiligi bo'yicha mavjud variantlarni tushuntiradi.",
      },
      {
        q: "Nizom O'zbekiston qonunchiligi talablariga javob beradimi?",
        a: "Ha. Barcha hujjatlar O'zbekiston Respublikasi Fuqarolik kodeksi va Mas'uliyati cheklangan jamiyatlar to'g'risidagi qonunga mos keladi, 2025 yil mart oyigacha yangilangan.",
      },
    ],
  },

  "jsc-formation": {
    en: [
      {
        q: "What is the difference between an LLC and a JSC in Uzbekistan?",
        a: "A JSC issues shares and is required when there are more than 50 shareholders or when a public offering is planned. It requires a board of directors and supervisory board, making governance more formal than an LLC.",
      },
      {
        q: "Does the pack cover both open and closed JSCs?",
        a: "Yes. Templates for both closed (CJSC) and open (OJSC) joint-stock companies are included, with notes explaining where registration and disclosure requirements differ between the two forms.",
      },
      {
        q: "Can foreign nationals be founding shareholders?",
        a: "Yes. The documents support foreign founding shareholders. The checklist in the pack specifies the notarisation and apostille requirements for foreign identity documents.",
      },
      {
        q: "How long does JSC registration take?",
        a: "Initial registration typically takes 3–5 business days. Full operational readiness — including the Ministry of Justice filing, share issuance, and opening a corporate bank account — usually takes 2–4 weeks.",
      },
    ],
    ru: [
      {
        q: "В чём отличие ООО от АО в Узбекистане?",
        a: "АО выпускает акции и требуется при наличии более 50 акционеров или при планировании публичного размещения. Оно предполагает совет директоров и наблюдательный совет, что делает управление более формализованным, чем в ООО.",
      },
      {
        q: "Охватывает ли пакет как открытые, так и закрытые АО?",
        a: "Да. Пакет включает шаблоны для закрытых (ЗАО) и открытых (ОАО) акционерных обществ с пояснениями о различиях в требованиях к регистрации и раскрытию информации.",
      },
      {
        q: "Могут ли иностранные граждане быть учредителями АО?",
        a: "Да. Документы поддерживают иностранных учредителей. Чеклист в пакете содержит требования к нотариальному заверению и апостилю иностранных документов.",
      },
      {
        q: "Сколько времени занимает регистрация АО?",
        a: "Первичная регистрация обычно занимает 3–5 рабочих дней. Полная операционная готовность — с учётом регистрации в Министерстве юстиции, выпуска акций и открытия расчётного счёта — как правило, занимает 2–4 недели.",
      },
    ],
    uz: [
      {
        q: "O'zbekistonda MChJ va AJ o'rtasidagi farq nima?",
        a: "AJ aksiyalar chiqaradi va 50 dan ortiq aksiyadorlar bo'lganida yoki ommaviy taklif rejalashtirilganda talab qilinadi. U boshqaruvni MChJga qaraganda rasmiyroq qiladigan direktorlar kengashi va kuzatuv kengashini talab qiladi.",
      },
      {
        q: "To'plam ochiq va yopiq AJlarni qamrab oladimi?",
        a: "Ha. Yopiq (YoAJ) va ochiq (OAJ) aksiyadorlik jamiyatlari uchun shablonlar kiritilgan, ro'yxatga olish va ma'lumot oshkor qilish talablarining farqlari tushuntirib berilgan.",
      },
      {
        q: "Xorijiy fuqarolar AJning ta'sischilari bo'la oladimi?",
        a: "Ha. Hujjatlar xorijiy ta'sischilarga mo'ljallangan. To'plamdagi tekshiruv ro'yxati xorijiy shaxsiy hujjatlar uchun notarial tasdiqlash va apostil talablarini ko'rsatadi.",
      },
      {
        q: "AJni ro'yxatdan o'tkazish qancha vaqt oladi?",
        a: "Dastlabki ro'yxatga olish odatda 3–5 ish kunini oladi. To'liq operatsion tayyorlik — Adliya vazirligi ro'yxatidan o'tish, aksiyalar chiqarish va korporativ hisob ochish bilan — odatda 2–4 hafta davom etadi.",
      },
    ],
  },

  "shareholder-agreement": {
    en: [
      {
        q: "When do I need a shareholder agreement?",
        a: "Whenever two or more shareholders jointly own a company, a SHA prevents disputes by pre-agreeing decision-making rules, dividend policy, transfer restrictions, and exit mechanisms.",
      },
      {
        q: "Does the agreement include drag-along and tag-along rights?",
        a: "Yes. Both drag-along and tag-along provisions are included alongside a right of first refusal clause. The annotation guide explains how to calibrate the thresholds for your specific deal.",
      },
      {
        q: "Is the SHA enforceable under Uzbek law?",
        a: "The SHA is structured under the Civil Code of Uzbekistan. Key provisions are also designed to function under English or UAE law if the parties choose a foreign governing law — the guide explains available options.",
      },
      {
        q: "What does the annotation guide cover?",
        a: "The annotation guide explains the purpose of each major clause, flags the items most frequently negotiated, and outlines the legal constraints and commercial practice applicable in Uzbekistan.",
      },
    ],
    ru: [
      {
        q: "Когда нужно акционерное соглашение?",
        a: "Когда два и более акционера совместно владеют компанией, SHA предотвращает споры, заранее согласовывая правила принятия решений, дивидендную политику, ограничения на передачу долей и механизмы выхода.",
      },
      {
        q: "Включает ли соглашение права drag-along и tag-along?",
        a: "Да. Оба положения включены вместе с правом первоочередного выкупа. Руководство с аннотациями объясняет, как настроить пороговые значения под конкретную сделку.",
      },
      {
        q: "Подлежит ли SHA исполнению по законодательству Узбекистана?",
        a: "SHA составлено в соответствии с Гражданским кодексом Узбекистана. Ключевые положения также совместимы с английским или эмиратским правом, если стороны выберут иностранное применимое право — возможные варианты описаны в руководстве.",
      },
      {
        q: "Что охватывает руководство с аннотациями?",
        a: "Руководство объясняет назначение каждого ключевого пункта, выделяет наиболее часто обсуждаемые условия и описывает применимые правовые ограничения и коммерческую практику в Узбекистане.",
      },
    ],
    uz: [
      {
        q: "Aksiyadorlar shartnomasi qachon kerak?",
        a: "Ikki yoki undan ortiq aksiyadorlar birgalikda kompaniyaga egalik qilganda, SHA qaror qabul qilish qoidalari, dividend siyosati, ulushlarni o'tkazish cheklovlari va chiqish mexanizmlarini oldindan kelishib, nizolarning oldini oladi.",
      },
      {
        q: "Shartnomaga drag-along va tag-along huquqlari kiritilganmi?",
        a: "Ha. Drag-along va tag-along qoidalari birinchi sotib olish huquqi bilan birga kiritilgan. Izoh qo'llanmasi muayyan bitim uchun chegaralarni qanday sozlashni tushuntiradi.",
      },
      {
        q: "SHA O'zbekiston qonunchiligi bo'yicha ijro etilishi mumkinmi?",
        a: "SHA O'zbekiston Fuqarolik kodeksi asosida tuzilgan. Asosiy qoidalar ingliz yoki BAA huquqi bo'yicha ham qo'llashga mo'ljallangan — mavjud variantlar qo'llanmada tushuntirilgan.",
      },
      {
        q: "Izoh qo'llanmasi nimani qamrab oladi?",
        a: "Izoh qo'llanmasi har bir asosiy bandning maqsadini tushuntiradi, eng ko'p muzokaraga qo'yiladigan shartlarni belgilaydi va O'zbekistonda amal qiladigan qonuniy cheklovlar hamda tijorat amaliyotini bayon etadi.",
      },
    ],
  },

  "nda-bilateral": {
    en: [
      {
        q: "What is the difference between the bilateral and unilateral NDA variants?",
        a: "The bilateral (mutual) NDA is used when both parties share confidential information — typical for partnership discussions. The unilateral variant suits situations where only one party discloses, such as engaging a contractor.",
      },
      {
        q: "What types of information does the NDA protect?",
        a: "The template covers trade secrets, business plans, financial data, technical information, client lists, and any other information marked as confidential — consistent with Uzbek Civil Code protections.",
      },
      {
        q: "Can this NDA be used with international counterparties?",
        a: "Yes. The template includes a choice-of-law clause that can be set to Uzbek, English, or another governing law, making it suitable for cross-border transactions.",
      },
    ],
    ru: [
      {
        q: "В чём разница между двусторонним и односторонним NDA?",
        a: "Двустороннее (взаимное) NDA используется, когда обе стороны передают конфиденциальную информацию — типично для переговоров о партнёрстве. Односторонний вариант подходит для ситуаций, когда информацию раскрывает только одна сторона, например при привлечении подрядчика.",
      },
      {
        q: "Какие виды информации защищает NDA?",
        a: "Шаблон охватывает коммерческие тайны, бизнес-планы, финансовые данные, техническую информацию, клиентские базы и любые другие сведения, обозначенные как конфиденциальные — в соответствии с нормами Гражданского кодекса Узбекистана.",
      },
      {
        q: "Можно ли использовать это NDA с иностранными контрагентами?",
        a: "Да. Шаблон содержит оговорку о применимом праве, которую можно установить на узбекское, английское или иное право, что делает документ пригодным для трансграничных сделок.",
      },
    ],
    uz: [
      {
        q: "Ikki tomonlama va bir tomonlama NDA o'rtasidagi farq nima?",
        a: "Ikki tomonlama (o'zaro) NDA ikkala tomon ham maxfiy ma'lumot ulashganda qo'llaniladi — odatda sheriklik muzokaralari uchun. Bir tomonlama variant faqat bir tomon ma'lumot oshkor qilganda, masalan pudratchi jalb qilishda qo'llaniladi.",
      },
      {
        q: "NDA qanday turdagi ma'lumotlarni himoya qiladi?",
        a: "Shablon savdo sirlari, biznes-rejalar, moliyaviy ma'lumotlar, texnik axborot, mijozlar ro'yxatlari va maxfiy deb belgilangan boshqa har qanday ma'lumotlarni qamrab oladi — O'zbekiston Fuqarolik kodeksi himoyalariga mos ravishda.",
      },
      {
        q: "Bu NDA xalqaro kontragentlar bilan ishlatilishi mumkinmi?",
        a: "Ha. Shablon O'zbekiston, ingliz yoki boshqa qonun bo'yicha belgilanishi mumkin bo'lgan qonunga muvofiqligi bo'yicha bandni o'z ichiga oladi, bu esa uni transchegaraviy bitimlar uchun mos qiladi.",
      },
    ],
  },

  "commercial-lease": {
    en: [
      {
        q: "What types of premises does this lease cover?",
        a: "The pack covers office, retail, and warehouse/industrial premises under Uzbek civil law. Property-specific clauses are clearly labelled so you include only what applies to your premises.",
      },
      {
        q: "Are renewal and early exit provisions included?",
        a: "Yes. The lease includes an automatic renewal clause with notice periods, tenant improvement rights, and an early exit provision with penalty calculation formulas.",
      },
      {
        q: "Is the lease bilingual?",
        a: "Yes. The standard lease is provided in Russian and English as required by Uzbek practice for agreements involving foreign parties. A Uzbek-language version is included as an addendum.",
      },
      {
        q: "Does the pack include a short-term lease?",
        a: "Yes. A short-term variant for leases under one year (not subject to mandatory state registration) is included alongside the standard multi-year form.",
      },
    ],
    ru: [
      {
        q: "Какие типы помещений охватывает этот договор аренды?",
        a: "Пакет охватывает офисные, торговые и складские/производственные помещения по законодательству Узбекистана. Условия, специфичные для каждого типа объектов, чётко обозначены, что позволяет использовать только применимые положения.",
      },
      {
        q: "Включены ли положения о продлении и досрочном расторжении?",
        a: "Да. Договор содержит условие об автоматической пролонгации с уведомительными сроками, права арендатора на улучшение имущества и условие о досрочном расторжении с формулами расчёта неустойки.",
      },
      {
        q: "Является ли договор двуязычным?",
        a: "Да. Стандартный договор предоставляется на русском и английском языках, что соответствует практике Узбекистана для соглашений с участием иностранных сторон. В приложении также предусмотрен вариант на узбекском языке.",
      },
      {
        q: "Включён ли краткосрочный договор аренды?",
        a: "Да. Вариант краткосрочной аренды сроком до одного года (не подлежащий обязательной государственной регистрации) включён наряду со стандартной долгосрочной формой.",
      },
    ],
    uz: [
      {
        q: "Bu ijara shartnomasi qanday turdagi binolarni qamrab oladi?",
        a: "To'plam O'zbekiston fuqarolik qonunchiligi bo'yicha ofis, savdo va ombor/sanoat binolarini qamrab oladi. Har bir bino turiga xos bandlar aniq belgilangan, shuning uchun faqat tegishli qoidalarni qo'llashingiz mumkin.",
      },
      {
        q: "Uzaytirish va muddatidan oldin fesxlash shartlari kiritilganmi?",
        a: "Ha. Shartnomada bildirish muddatlari bilan avtomatik uzaytirish bandi, ijarachilarning yaxshilash huquqlari va jarimalarni hisoblash formulalari bilan muddatidan oldin fesxlash bandi mavjud.",
      },
      {
        q: "Shartnoma ikki tildami?",
        a: "Ha. Standart ijara shartnomasi xorijiy taraflar ishtirokidagi kelishuvlar uchun O'zbekiston amaliyotida talab qilinadigan rus va ingliz tillarida taqdim etiladi. Qo'shimchada o'zbekcha variant ham berilgan.",
      },
      {
        q: "To'plamda qisqa muddatli ijara shartnomasi bormi?",
        a: "Ha. Bir yildan kam muddatga mo'ljallangan qisqa muddatli variant (majburiy davlat ro'yxatiga almashinmaydigan) standart ko'p yillik shakl bilan birga kiritilgan.",
      },
    ],
  },

  "employment-contract": {
    en: [
      {
        q: "Is this contract compliant with the Uzbekistan Labour Code?",
        a: "Yes. The contract reflects the current Labour Code of the Republic of Uzbekistan, including mandatory clauses on working hours, leave entitlements, and termination procedures, updated as of February 2026.",
      },
      {
        q: "Does the pack cover both fixed-term and open-ended contracts?",
        a: "Yes. The standard template is for open-ended employment; a separate fixed-term variant is included for project-based or seasonal roles.",
      },
      {
        q: "What does the probation addendum include?",
        a: "The probation addendum sets out the trial period duration (up to 3 months under Uzbek law), evaluation criteria, and the procedure for termination if the employee does not pass probation.",
      },
      {
        q: "Can I use this contract for foreign employees?",
        a: "Yes, with one caveat: foreign nationals require a valid work permit. The contract includes a clause linking employment commencement to work authorisation. See the Work Permit Application Pack for supporting documentation.",
      },
    ],
    ru: [
      {
        q: "Соответствует ли договор Трудовому кодексу Узбекистана?",
        a: "Да. Договор отражает действующий Трудовой кодекс Республики Узбекистан, включая обязательные условия о рабочем времени, отпусках и процедуре увольнения в редакции, актуальной на февраль 2026 года.",
      },
      {
        q: "Охватывает ли пакет как срочные, так и бессрочные трудовые договоры?",
        a: "Да. Стандартный шаблон предназначен для бессрочного трудоустройства; отдельный вариант срочного договора включён для проектной или сезонной занятости.",
      },
      {
        q: "Что включает приложение об испытательном сроке?",
        a: "Приложение определяет продолжительность испытательного срока (до 3 месяцев по законодательству Узбекистана), критерии оценки и процедуру расторжения договора при неудовлетворительном прохождении испытания.",
      },
      {
        q: "Можно ли использовать этот договор для иностранных сотрудников?",
        a: "Да, с одной оговоркой: иностранным гражданам необходимо разрешение на работу. Договор содержит условие, связывающее начало трудовой деятельности с наличием действующего разрешения. Сопутствующие документы — в пакете «Work Permit Application Pack».",
      },
    ],
    uz: [
      {
        q: "Shartnoma O'zbekiston Mehnat kodeksiga muvofiq kompilyansli?",
        a: "Ha. Shartnoma ish vaqti, ta'til huquqlari va ishdan bo'shatish tartiblari bo'yicha majburiy bandlarni o'z ichiga olgan O'zbekiston Respublikasining amaldagi Mehnat kodeksini aks ettiradi, 2026 yil fevral oyigacha yangilangan.",
      },
      {
        q: "To'plam belgilangan muddatli va muddatsiz shartnomalarni qamrab oladimi?",
        a: "Ha. Standart shablon muddatsiz mehnat munosabatlari uchun; loyiha yoki mavsumiy rollar uchun alohida belgilangan muddatli variant kiritilgan.",
      },
      {
        q: "Sinov muddati qo'shimchasi nimani o'z ichiga oladi?",
        a: "Qo'shimcha sinov muddatini (O'zbekiston qonunchiligi bo'yicha 3 oygacha), baholash mezonlarini va xodim sinov muddatini o'ta olmasa shartnomani bekor qilish tartibini belgilaydi.",
      },
      {
        q: "Bu shartnomani xorijiy xodimlar uchun ishlatish mumkinmi?",
        a: "Ha, bitta shart bilan: xorijiy fuqarolar ish ruxsatnomasi talab qiladi. Shartnomada ish boshlashni mehnat ruxsatnomasiga bog'laydigan band mavjud. Qo'llab-quvvatlovchi hujjatlar uchun Work Permit Application Pack-ga qarang.",
      },
    ],
  },

  "hr-policy-manual": {
    en: [
      {
        q: "What HR policies are included in the manual?",
        a: "The manual contains 12 policy modules: recruitment, on-boarding, code of conduct, performance management, disciplinary procedure, grievance handling, leave policy, business expenses, IT usage, data protection, health & safety, and off-boarding.",
      },
      {
        q: "How do I adapt the manual for my company?",
        a: "Each module has placeholder fields for company name, headcount thresholds, approval chains, and local office rules. An adaptation guide explains which sections are mandatory under Uzbek labour law and which are fully customisable.",
      },
      {
        q: "Is the manual suitable for small businesses?",
        a: "Yes. The manual includes a 'simplified track' — a condensed set of core policies for companies with fewer than 20 employees who need legally compliant documentation without the full enterprise framework.",
      },
      {
        q: "Does the manual cover remote and hybrid work arrangements?",
        a: "Yes. The leave policy and IT usage modules include provisions for remote and hybrid work arrangements, consistent with current Uzbek labour law guidance.",
      },
    ],
    ru: [
      {
        q: "Какие кадровые политики включены в руководство?",
        a: "Руководство содержит 12 модулей: подбор персонала, адаптация, кодекс поведения, управление эффективностью, дисциплинарная процедура, рассмотрение жалоб, политика отпусков, командировочные расходы, использование ИТ, защита данных, охрана труда и офбординг.",
      },
      {
        q: "Как адаптировать руководство под мою компанию?",
        a: "Каждый модуль содержит поля-заглушки для наименования компании, численности персонала, цепочек согласования и правил конкретного офиса. Руководство по адаптации объясняет, какие разделы обязательны по трудовому законодательству Узбекистана, а какие можно свободно настраивать.",
      },
      {
        q: "Подходит ли руководство для малого бизнеса?",
        a: "Да. Руководство включает «упрощённый трек» — сокращённый набор основных политик для компаний с численностью до 20 сотрудников, которым нужна юридически корректная документация без полной корпоративной системы.",
      },
      {
        q: "Охватывает ли руководство дистанционный и гибридный режим работы?",
        a: "Да. Модули политики отпусков и использования ИТ включают положения об удалённой и гибридной работе в соответствии с актуальными разъяснениями по трудовому законодательству Узбекистана.",
      },
    ],
    uz: [
      {
        q: "Qo'llanmaga qanday HR siyosatlari kiritilgan?",
        a: "Qo'llanma 12 ta siyosat modulini o'z ichiga oladi: yollash, adaptatsiya, xulq-atvor kodeksi, samaradorlikni boshqarish, intizomiy tartib, shikoyatlarni ko'rib chiqish, ta'til siyosati, xizmat safari xarajatlari, IT foydalanish, ma'lumotlarni himoya qilish, mehnat muhofazasi va offboarding.",
      },
      {
        q: "Qo'llanmani o'z kompaniyamga qanday moslashtiraman?",
        a: "Har bir modulda kompaniya nomi, xodimlar soni chegaralari, tasdiqlash zanjirlari va mahalliy ofis qoidalari uchun to'ldiriladigan maydonlar mavjud. Moslashtirish qo'llanmasi O'zbekiston mehnat qonunchiligi bo'yicha qaysi bo'limlar majburiy va qaysilari to'liq sozlanishi mumkinligini tushuntiradi.",
      },
      {
        q: "Qo'llanma kichik biznes uchun mos keladi?",
        a: "Ha. Qo'llanmada to'liq korporativ tizimisiz huquqiy jihatdan mos hujjatlarga muhtoj bo'lgan 20 dan kam xodimli kompaniyalar uchun asosiy siyosatlarning qisqartirilgan to'plami — 'soddalashtirilgan yo'l' kiritilgan.",
      },
      {
        q: "Qo'llanma masofaviy va gibrid ish rejimlarini qamrab oladimi?",
        a: "Ha. Ta'til siyosati va IT foydalanish modullari O'zbekiston mehnat qonunchiligi bo'yicha amaldagi ko'rsatmalar bilan muvofiq ravishda masofaviy va gibrid ish rejimlariga oid qoidalarni o'z ichiga oladi.",
      },
    ],
  },

  "tax-compliance-starter": {
    en: [
      {
        q: "Which taxes does this pack cover?",
        a: "The pack covers corporate income tax (CIT), VAT, personal income tax (PIT), and employer social tax — the four taxes most businesses in Uzbekistan encounter in their first year of operation.",
      },
      {
        q: "What is the compliance calendar?",
        a: "A monthly and quarterly schedule listing every filing deadline, payment due date, and reporting obligation for a standard LLC in Uzbekistan, with notes on penalties for late submission.",
      },
      {
        q: "Are the tax rates and forms current?",
        a: "Yes. The pack reflects the tax rates and forms in force as of March 2026: 15% CIT, 12% VAT, 12% PIT, and 12% employer social tax.",
      },
      {
        q: "Is this pack suitable for a newly registered company?",
        a: "Yes — the pack is specifically designed for businesses in their first year, covering initial tax registration steps as well as ongoing quarterly and annual compliance obligations.",
      },
    ],
    ru: [
      {
        q: "Какие налоги охватывает этот пакет?",
        a: "Пакет охватывает налог на прибыль (НП), НДС, налог на доходы физических лиц (НДФЛ) и социальный налог работодателя — четыре налога, с которыми большинство компаний в Узбекистане сталкивается в первый год работы.",
      },
      {
        q: "Что представляет собой календарь соответствия?",
        a: "Ежемесячный и ежеквартальный план с указанием всех сроков подачи деклараций, дат уплаты налогов и отчётных обязательств для стандартного ООО в Узбекистане, с примечаниями о санкциях за просрочку.",
      },
      {
        q: "Актуальны ли налоговые ставки и формы?",
        a: "Да. Пакет отражает налоговые ставки и формы, действующие по состоянию на март 2026 года: 15% НП, 12% НДС, 12% НДФЛ и 12% социальный налог работодателя.",
      },
      {
        q: "Подходит ли пакет для только что зарегистрированной компании?",
        a: "Да — пакет специально разработан для компаний в первый год деятельности, охватывая шаги по первичной постановке на налоговый учёт и текущие квартальные и годовые обязательства по соответствию.",
      },
    ],
    uz: [
      {
        q: "Bu to'plam qaysi soliqlarni qamrab oladi?",
        a: "To'plam korporativ daromad solig'i (KDS), QQS, jismoniy shaxslar daromad solig'i (JSHDS) va ish beruvchining ijtimoiy soliq — O'zbekistondagi aksariyat korxonalar birinchi ish yilida duch keladigan to'rt soliqni qamrab oladi.",
      },
      {
        q: "Komplayans kalendarigacha nima?",
        a: "O'zbekistondagi standart MChJ uchun barcha ariza topshirish muddatlari, to'lov sanalari va hisobot majburiyatlarini ko'rsatadigan oylik va choraklik jadval, kech topshirish uchun jarimalari to'g'risidagi izohlar bilan.",
      },
      {
        q: "Soliq stavkalari va shakllar joriyga muvofiqmi?",
        a: "Ha. To'plam 2026 yil mart holatiga ko'ra amalda bo'lgan soliq stavkalari va shakllarni aks ettiradi: 15% KDS, 12% QQS, 12% JSHDS va 12% ish beruvchining ijtimoiy solig'i.",
      },
      {
        q: "Bu to'plam yangi ro'yxatga olingan kompaniya uchun mos keladimi?",
        a: "Ha — to'plam birinchi yilida faoliyat yuritayotgan korxonalar uchun maxsus ishlab chiqilgan va dastlabki soliq ro'yxatidan o'tish qadamlari hamda joriy choraklik va yillik komplayans majburiyatlarini qamrab oladi.",
      },
    ],
  },

  "transfer-pricing": {
    en: [
      {
        q: "When is transfer pricing documentation required in Uzbekistan?",
        a: "Documentation is required for controlled transactions between related parties exceeding the thresholds set by the Tax Code — typically intercompany sales, loans, services, or IP licensing arrangements within a group.",
      },
      {
        q: "Is the documentation aligned with OECD guidelines?",
        a: "Yes. The master file and local file follow the OECD BEPS Action 13 format, which Uzbekistan has adopted. This is particularly relevant if your group also files in OECD-member jurisdictions.",
      },
      {
        q: "How often should transfer pricing documentation be updated?",
        a: "Documentation should be reviewed and updated annually, and whenever there is a material change in group structure, pricing policy, or transaction volumes.",
      },
      {
        q: "What does the benchmarking guide explain?",
        a: "It explains how to identify comparable uncontrolled transactions using public databases, document the arm's length range, and prepare the functional analysis required by the Uzbek tax authorities.",
      },
    ],
    ru: [
      {
        q: "Когда в Узбекистане требуется документация по трансфертному ценообразованию?",
        a: "Документация требуется для контролируемых сделок между связанными лицами, превышающих пороги, установленные Налоговым кодексом, — как правило, внутригрупповые продажи, займы, услуги или лицензирование интеллектуальной собственности.",
      },
      {
        q: "Соответствует ли документация руководящим принципам ОЭСР?",
        a: "Да. Мастер-файл и локальный файл составлены по формату BEPS Action 13 ОЭСР, принятому Узбекистаном. Это особенно актуально, если группа также отчитывается в юрисдикциях — членах ОЭСР.",
      },
      {
        q: "Как часто следует обновлять документацию по ТЦО?",
        a: "Документацию необходимо пересматривать и обновлять ежегодно, а также при существенных изменениях в структуре группы, ценовой политике или объёмах сделок.",
      },
      {
        q: "Что объясняет руководство по бенчмаркингу?",
        a: "Руководство объясняет, как выявить сопоставимые неконтролируемые сделки с использованием публичных баз данных, задокументировать рыночный диапазон и подготовить функциональный анализ, требуемый налоговыми органами Узбекистана.",
      },
    ],
    uz: [
      {
        q: "O'zbekistonda transfer narxlash hujjatlari qachon talab qilinadi?",
        a: "Soliq kodeksi belgilagan chegaralardan oshgan bog'liq tomonlar o'rtasidagi nazorat ostidagi bitimlar — odatda guruh ichidagi savdolar, qarzlar, xizmatlar yoki intellektual mulkni litsenziyalash uchun hujjat talab qilinadi.",
      },
      {
        q: "Hujjatlar OECD ko'rsatmalariga muvofiqmi?",
        a: "Ha. Master fayl va mahalliy fayl O'zbekiston tomonidan qabul qilingan OECD BEPS Harakat 13 formatiga amal qiladi. Bu ayniqsa guruhingiz OECD a'zo yurisdiktsiyalarida ham hisobot topshiradigan bo'lsa muhim.",
      },
      {
        q: "Transfer narxlash hujjatlari qanchalik tez-tez yangilanishi kerak?",
        a: "Hujjatlar yillik ko'rib chiqilishi va yangilanishi kerak, shuningdek guruh tuzilmasi, narxlash siyosati yoki bitim hajmlarida muhim o'zgarishlar bo'lganda ham.",
      },
      {
        q: "Taqqoslash qo'llanmasi nimani tushuntiradi?",
        a: "U ommaviy ma'lumotlar bazalaridan foydalanib taqqoslanadigan nazorat ostidagi bo'lmagan bitimlarni qanday aniqlash, bozor diapazonini hujjatlashtirish va O'zbekiston soliq organlari tomonidan talab qilinadigan funksional tahlilni tayyorlashni tushuntiradi.",
      },
    ],
  },

  "work-permit-pack": {
    en: [
      {
        q: "Which types of work permit does this pack cover?",
        a: "The pack covers the standard work permit for foreign nationals employed by an Uzbek legal entity, including initial applications, annual renewals, and employer notification obligations.",
      },
      {
        q: "Does it apply to all nationalities?",
        a: "Yes. The documents are applicable to foreign nationals of any citizenship. CIS nationals and citizens of countries with bilateral labour agreements may follow a simplified procedure; the checklist notes where these differences apply.",
      },
      {
        q: "How long does a work permit take to obtain?",
        a: "Processing typically takes 15–30 working days from submission of a complete application. The employer letter templates are formatted to meet Agency for External Labour Migration requirements.",
      },
      {
        q: "What if the employee's permit needs renewing?",
        a: "The extension guide covers the renewal timeline, required documents, and the grace period for continued employment during processing — helping employers avoid compliance gaps.",
      },
    ],
    ru: [
      {
        q: "Какие виды разрешений на работу охватывает этот пакет?",
        a: "Пакет охватывает стандартное разрешение на работу для иностранных граждан, трудоустроенных у узбекского юридического лица, включая первичные заявки, ежегодные продления и обязательства работодателя по уведомлению.",
      },
      {
        q: "Применим ли пакет ко всем гражданствам?",
        a: "Да. Документы применимы к иностранным гражданам любого гражданства. Граждане СНГ и стран с двусторонними соглашениями о труде могут проходить упрощённую процедуру; в чеклисте указаны соответствующие различия.",
      },
      {
        q: "Сколько времени занимает оформление разрешения на работу?",
        a: "Обработка заявки обычно занимает 15–30 рабочих дней с момента подачи полного пакета документов. Шаблоны письма работодателя составлены в соответствии с требованиями Агентства по внешней трудовой миграции.",
      },
      {
        q: "Что делать, если разрешение нужно продлить?",
        a: "Руководство по продлению охватывает сроки, перечень необходимых документов и льготный период для продолжения работы в период рассмотрения заявки — что помогает работодателям избегать нарушений в сфере соответствия.",
      },
    ],
    uz: [
      {
        q: "Bu to'plam qanday turdagi ish ruxsatnomalarini qamrab oladi?",
        a: "To'plam O'zbekiston yuridik shaxsida ishlaydigan xorijiy fuqarolar uchun standart ish ruxsatnomasini, jumladan dastlabki arizalar, yillik uzaytirish va ish beruvchining bildirishnoma majburiyatlarini qamrab oladi.",
      },
      {
        q: "U barcha millatlarga tatbiq etiladi?",
        a: "Ha. Hujjatlar istalgan fuqarolikdagi xorijiy fuqarolarga tatbiq etiladi. MDH fuqarolari va ikki tomonlama mehnat shartnomalari bo'lgan mamlakatlar fuqarolari soddalashtirilgan tartibdan o'tishi mumkin; tekshiruv ro'yxatida ushbu farqlar ko'rsatilgan.",
      },
      {
        q: "Ish ruxsatnomasini olish qancha vaqt oladi?",
        a: "To'liq ariza topshirilgandan keyin ko'rib chiqish odatda 15–30 ish kunini oladi. Ish beruvchi xati shablonlari Tashqi mehnat migratsiyasi agentligi talablariga muvofiq formatda tayyorlangan.",
      },
      {
        q: "Xodimning ruxsatnomasini uzaytirish kerak bo'lsa nima qilish kerak?",
        a: "Uzaytirish qo'llanmasi muddat, kerakli hujjatlar va ko'rib chiqish davomida ish faoliyatini davom ettirishning imtiyozli muddatini qamrab oladi — ish beruvchilarga komplayans bo'shliqlarini oldini olishda yordam beradi.",
      },
    ],
  },

  "sez-entry-pack": {
    en: [
      {
        q: "Which Special Economic Zones does this pack apply to?",
        a: "The documents are drafted for universal use across Uzbekistan's SEZs and free economic zones, including Navoi, Urgut, Jizzakh, and the technology-focused zones. Zone-specific notes are included where requirements differ.",
      },
      {
        q: "What tax benefits do SEZ residents receive?",
        a: "SEZ residents typically benefit from full exemptions from CIT, VAT, property tax, and customs duties for periods of 3–10 years depending on the zone and investment size. The regulatory overview details current incentives.",
      },
      {
        q: "Is the investment plan template ready to submit to authorities?",
        a: "The template is structured to meet Ministry of Investment requirements for SEZ applications. You fill in your project data, financial projections, and employment targets; the template provides the required formatting and section structure.",
      },
      {
        q: "What is the minimum investment threshold for SEZ entry?",
        a: "Thresholds vary by zone, typically starting from USD 300,000 for standard zones. The regulatory overview in the pack lists the current minimum investment amounts and permissible activity types for each major SEZ.",
      },
    ],
    ru: [
      {
        q: "На какие СЭЗ распространяется данный пакет?",
        a: "Документы составлены для универсального применения во всех СЭЗ и свободных экономических зонах Узбекистана, включая Навои, Ургут, Джизак и технологические зоны. Специфические примечания по зонам включены там, где требования различаются.",
      },
      {
        q: "Какие налоговые льготы получают резиденты СЭЗ?",
        a: "Резиденты СЭЗ, как правило, пользуются полным освобождением от налога на прибыль, НДС, налога на имущество и таможенных пошлин на 3–10 лет в зависимости от зоны и объёма инвестиций. Обзор нормативной базы содержит актуальные льготы.",
      },
      {
        q: "Готов ли шаблон инвестиционного плана к подаче в органы власти?",
        a: "Шаблон структурирован в соответствии с требованиями Министерства инвестиций для заявок на вступление в СЭЗ. Вы заполняете данные проекта, финансовые прогнозы и целевые показатели занятости; структура разделов и форматирование уже предусмотрены.",
      },
      {
        q: "Каков минимальный инвестиционный порог для входа в СЭЗ?",
        a: "Пороги варьируются по зонам — как правило, от 300 000 долларов США для стандартных зон. В обзоре нормативной базы в пакете указаны актуальные минимальные объёмы инвестиций и допустимые виды деятельности для каждой крупной СЭЗ.",
      },
    ],
    uz: [
      {
        q: "Bu to'plam qaysi Maxsus Iqtisodiy Zonalarga tegishli?",
        a: "Hujjatlar Navoiy, Urgut, Jizzax va texnologiyaga yo'naltirilgan zonalar kabi O'zbekistonning barcha SEZ va erkin iqtisodiy zonalari bo'ylab universal foydalanish uchun tuzilgan. Talablar farq qiladigan joylar uchun zona-spesifik izohlar kiritilgan.",
      },
      {
        q: "SEZ rezidentlari qanday soliq imtiyozlaridan foydalanadi?",
        a: "SEZ rezidentlari odatda zona va investitsiya hajmiga qarab 3–10 yil davomida KDS, QQS, mulk solig'i va bojxona to'lovlaridan to'liq ozod bo'ladi. Normativ hujjatlarga sharh amaldagi imtiyozlarni batafsil bayon etadi.",
      },
      {
        q: "Investitsiya rejasi shabloni organlarga topshirishga tayyor?",
        a: "Shablon SEZ arizalari uchun Investitsiyalar vazirligi talablariga javob beradigan tarzda tuzilgan. Loyiha ma'lumotlari, moliyaviy prognozlar va bandlik maqsadlarini to'ldirasiz; shablon kerakli formatlash va bo'lim tuzilmasini ta'minlaydi.",
      },
      {
        q: "SEZga kirish uchun minimal investitsiya chegarasi qancha?",
        a: "Chegaralar zonaga qarab farq qiladi — standart zonalar uchun odatda 300,000 AQSh dollaridan boshlanadi. To'plamdagi normativ hujjatlarga sharh har bir asosiy SEZ uchun joriy minimal investitsiya miqdorlari va ruxsat etilgan faoliyat turlarini ko'rsatadi.",
      },
    ],
  },

  "due-diligence-pack": {
    en: [
      {
        q: "What types of transactions is this pack designed for?",
        a: "The pack is designed for M&A transactions, private equity investments, and joint-venture formations in Uzbekistan — any situation where a buyer, investor, or lender needs a structured review of a target company.",
      },
      {
        q: "What is a data room index?",
        a: "A structured table of contents for an electronic data room, organising documents the target must provide under categories such as corporate, legal, financial, tax, HR, and real estate.",
      },
      {
        q: "Does the pack include a legal opinion template?",
        a: "Yes. The legal opinion template is structured for a Uzbek law firm to confirm the target's corporate standing, absence of material litigation, and regulatory compliance — commonly required by foreign investors.",
      },
      {
        q: "How is the red flag checklist used?",
        a: "Reviewers use the checklist to flag material issues found during document review — missing permits, disputed titles, undisclosed liabilities — feeding them into the overall deal risk assessment.",
      },
    ],
    ru: [
      {
        q: "Для каких видов сделок предназначен этот пакет?",
        a: "Пакет предназначен для сделок M&A, прямых инвестиций и создания совместных предприятий в Узбекистане — во всех случаях, когда покупатель, инвестор или кредитор проводит структурированный анализ целевой компании.",
      },
      {
        q: "Что такое индекс дата-рума?",
        a: "Структурированное оглавление для электронного дата-рума, организующее документы, которые должна предоставить целевая компания, по категориям: корпоративные, правовые, финансовые, налоговые, HR и недвижимость.",
      },
      {
        q: "Включает ли пакет шаблон юридического заключения?",
        a: "Да. Шаблон юридического заключения структурирован для подготовки узбекской юридической фирмой в целях подтверждения корпоративного статуса объекта, отсутствия существенных судебных разбирательств и соответствия регуляторным требованиям — что обычно требуется иностранным инвесторам.",
      },
      {
        q: "Как используется чеклист красных флагов?",
        a: "Проверяющие используют чеклист для фиксации существенных проблем, выявленных в ходе проверки документов, — отсутствующих разрешений, спорных прав собственности, нераскрытых обязательств — для их включения в общую оценку рисков сделки.",
      },
    ],
    uz: [
      {
        q: "Bu to'plam qanday turdagi bitimlar uchun mo'ljallangan?",
        a: "To'plam O'zbekistondagi M&A bitimlari, xususiy kapital investitsiyalari va qo'shma korxonalar tashkil etish uchun mo'ljallangan — xaridor, investor yoki qarz beruvchi nishon kompaniyani tizimli ko'rib chiqishni talab qiladigan har qanday vaziyat uchun.",
      },
      {
        q: "Data room indeksi nima?",
        a: "Elektron data room uchun tuzilgan mundarija — korporativ, huquqiy, moliyaviy, soliq, HR va ko'chmas mulk kabi kategoriyalar bo'yicha nishon tomonidan taqdim etilishi kerak bo'lgan hujjatlarni tashkil etadi.",
      },
      {
        q: "To'plamga yuridik xulosa shabloni kiritilganmi?",
        a: "Ha. Yuridik xulosa shabloni O'zbekiston huquq firmasi tomonidan nishonning korporativ maqomi, muhim da'volarning yo'qligi va normativ talablarga muvofiqligi bo'yicha tasdiqlash uchun tuzilgan — xorijiy investorlar tomonidan odatda talab qilinadi.",
      },
      {
        q: "Qizil bayroqlar tekshiruv ro'yxati qanday ishlatiladi?",
        a: "Ko'rib chiquvchilar hujjatlarni ko'rib chiqish davomida topilgan muhim muammolarni — yo'q ruxsatnomalar, bahsli mulk huquqlari, oshkor qilinmagan majburiyatlarni — belgilash uchun ro'yxatdan foydalanadi va ularni umumiy bitim xavfini baholashga kiritadi.",
      },
    ],
  },
};
