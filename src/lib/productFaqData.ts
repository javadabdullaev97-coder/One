type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };

export const PRODUCT_FAQ_DATA: Record<string, LocaleData> = {
  "llc-formation": {
    en: [
      {
        q: "Is there a minimum charter capital requirement?",
        a: "No. Uzbek law sets no minimum charter capital for an LLC. You can register with 1 UZS of declared capital — though a realistic amount is advisable for credibility with banks and counterparties.",
      },
      {
        q: "Can a foreigner be the sole founder?",
        a: "Yes. A single foreign national or foreign legal entity can be the sole founder of an Uzbek LLC. No Uzbek co-founder or local shareholder is required.",
      },
      {
        q: "Does the company director need to be an Uzbek citizen?",
        a: "No. The director can be of any nationality. However, if a foreign national acts as director and is physically working in Uzbekistan, they will need a work permit — the same as any other foreign employee.",
      },
      {
        q: "Can the company trade under an English name?",
        a: "Yes, with conditions. The company must have an official Uzbek-language legal name, but can also register an English trade name alongside it. Both will appear on official documents.",
      },
    ],
    ru: [
      {
        q: "Существует ли минимальный размер уставного капитала?",
        a: "Нет. Законодательство Узбекистана не устанавливает минимального размера уставного капитала для ООО. Формально можно зарегистрироваться с 1 сум объявленного капитала, хотя разумная сумма важна для доверия со стороны банков и контрагентов.",
      },
      {
        q: "Может ли иностранец быть единственным учредителем?",
        a: "Да. Единственным учредителем узбекского ООО может быть как иностранный гражданин, так и иностранное юридическое лицо. Узбекский соучредитель или местный акционер не требуется.",
      },
      {
        q: "Должен ли директор компании быть гражданином Узбекистана?",
        a: "Нет. Директором может быть гражданин любого государства. Однако если иностранный гражданин фактически работает директором в Узбекистане, ему потребуется разрешение на работу — как и любому другому иностранному сотруднику.",
      },
      {
        q: "Может ли компания использовать английское торговое наименование?",
        a: "Да, при условии. Компания обязана иметь официальное юридическое наименование на узбекском языке, однако может зарегистрировать и английское торговое наименование. Оба варианта будут фигурировать в официальных документах.",
      },
    ],
    uz: [
      {
        q: "Minimal ustav kapitali talabi bormi?",
        a: "Yo'q. O'zbekiston qonunchiligi MChJ uchun minimal ustav kapitali belgilamaydi. Rasman 1 so'm e'lon qilingan kapital bilan ro'yxatdan o'tish mumkin — ammo banklar va kontragentlar uchun ishonchlilik nuqtai nazaridan maqbul miqdor tavsiya etiladi.",
      },
      {
        q: "Xorijiy fuqaro yagona ta'sischi bo'la oladimi?",
        a: "Ha. Yagona xorijiy fuqaro yoki xorijiy yuridik shaxs O'zbekiston MChJining yagona ta'sischisi bo'lishi mumkin. O'zbek hamta'sischi yoki mahalliy aksiyador talab qilinmaydi.",
      },
      {
        q: "Kompaniya direktori O'zbekiston fuqarosi bo'lishi shart?",
        a: "Yo'q. Direktor istalgan millat vakili bo'lishi mumkin. Ammo xorijiy fuqaro direktor sifatida O'zbekistonda jismonan ishlasa, boshqa xorijiy xodimlar kabi ish ruxsatnomasiga muhtoj bo'ladi.",
      },
      {
        q: "Kompaniya inglizcha savdo nomidan foydalana oladimi?",
        a: "Ha, shartlar bilan. Kompaniya rasmiy o'zbekcha huquqiy nomga ega bo'lishi shart, lekin undan tashqari inglizcha savdo nomini ham ro'yxatdan o'tkazishi mumkin. Ikkalasi ham rasmiy hujjatlarda aks etadi.",
      },
    ],
  },

  "jsc-formation": {
    en: [
      {
        q: "What is the minimum authorized capital for a JSC?",
        a: "The minimum is 400 times the Base Calculation Index (BCI). With the current BCI at approximately 395,000 UZS, this works out to around 158 million UZS (~$12,000–14,000 USD), and is revised annually.",
      },
      {
        q: "Is a supervisory board always mandatory?",
        a: "No. A supervisory board is only required when the JSC has more than 50 shareholders. Below that threshold, a simpler governance structure — such as a general meeting and a single executive — is legally sufficient.",
      },
      {
        q: "Can shares be placed privately without a public prospectus?",
        a: "Yes. A private placement to a defined circle of investors is permitted without publishing a full prospectus. This is the common route for closed JSCs (non-public JSCs under current Uzbek law).",
      },
      {
        q: "What is the difference between a public and non-public JSC?",
        a: "Since 2022, Uzbek law formally distinguishes public JSCs (listed or with open subscription) from non-public JSCs (closed circle of shareholders). Most startups and family businesses use the non-public form to avoid continuous disclosure obligations.",
      },
    ],
    ru: [
      {
        q: "Каков минимальный уставный капитал для АО?",
        a: "Минимальный размер составляет 400-кратную величину базовой расчётной величины (БРВ). При текущей БРВ около 395 000 сум это составляет примерно 158 млн сум (~12 000–14 000 долл. США) и пересматривается ежегодно.",
      },
      {
        q: "Наблюдательный совет всегда обязателен?",
        a: "Нет. Наблюдательный совет обязателен только при наличии более 50 акционеров. При меньшем количестве достаточна упрощённая структура управления — например, общее собрание и единоличный исполнительный орган.",
      },
      {
        q: "Можно ли разместить акции в частном порядке без публичного проспекта?",
        a: "Да. Частное размещение среди заранее определённого круга инвесторов допустимо без публикации полного проспекта. Это стандартный маршрут для закрытых (непубличных) АО по действующему законодательству Узбекистана.",
      },
      {
        q: "В чём разница между публичным и непубличным АО?",
        a: "С 2022 года в Узбекистане формально разграничены публичные АО (биржевые или с открытой подпиской) и непубличные АО (с закрытым кругом акционеров). Большинство стартапов и семейных компаний выбирают непубличную форму, чтобы избежать требований о постоянном раскрытии информации.",
      },
    ],
    uz: [
      {
        q: "AJ uchun minimal ustav kapitali qancha?",
        a: "Minimal miqdor bazaviy hisoblash miqdorining (BHM) 400 baravariga teng. Joriy BHM taxminan 395 000 so'm bo'lganda, bu ~158 million so'm (~12 000–14 000 AQSh dollari) ni tashkil etadi va yillik qayta ko'rib chiqiladi.",
      },
      {
        q: "Kuzatuv kengashi har doim majburiy?",
        a: "Yo'q. Kuzatuv kengashi faqat AJda 50 dan ortiq aksiyador bo'lganda talab qilinadi. Undan kam bo'lganda soddalashtirilgan boshqaruv tuzilmasi — masalan, umumiy majlis va yagona ijro organi — qonuniy jihatdan yetarli.",
      },
      {
        q: "Aksiyalarni ommaviy prospektsiz xususiy tarzda joylashtirish mumkinmi?",
        a: "Ha. Belgilangan investorlar doirasiga xususiy joylashtirish to'liq prospekt nashr etmasdan ruxsat etiladi. Bu amaldagi O'zbekiston qonunchiligi bo'yicha yopiq (ochiq bo'lmagan) AJlar uchun odatiy yo'nalish.",
      },
      {
        q: "Ochiq va ochiq bo'lmagan AJ o'rtasidagi farq nima?",
        a: "2022 yildan beri O'zbekiston qonunchiligi rasman ochiq AJlarni (ro'yxatga olingan yoki ochiq obuna bilan) ochiq bo'lmagan AJlardan (yopiq aksiyadorlar doirasi bilan) farqlaydi. Ko'pgina startaplar va oilaviy kompaniyalar doimiy oshkor qilish majburiyatlaridan qochish uchun ochiq bo'lmagan shaklni tanlaydi.",
      },
    ],
  },

  "shareholder-agreement": {
    en: [
      {
        q: "Does the SHA need to be filed with any government authority?",
        a: "No. An SHA in Uzbekistan is a purely private document between the shareholders. It does not need to be registered with or disclosed to any state body, unlike the company charter which is a public document.",
      },
      {
        q: "What happens if the SHA conflicts with the company charter?",
        a: "The charter prevails for third-party relations and corporate governance disputes. The SHA is binding only between the parties to it. This is why key governance rules (veto rights, board composition) should also be reflected in the charter.",
      },
      {
        q: "How does a deadlock clause work in practice?",
        a: "A deadlock clause triggers when shareholders cannot agree on a matter requiring unanimous consent. Typical mechanisms include a buyout right at a pre-agreed formula, appointment of a third-party arbitrator, or a forced sale to a neutral party.",
      },
      {
        q: "Should the SHA address a founder's death or incapacity?",
        a: "Yes — this is often overlooked. Without a clause addressing death or incapacity, shares may transfer to heirs with no business relationship to the company. The SHA should specify transfer restrictions and compulsory buyout rights in such events.",
      },
    ],
    ru: [
      {
        q: "Нужно ли регистрировать SHA в государственных органах?",
        a: "Нет. SHA в Узбекистане является исключительно частным документом между акционерами. В отличие от устава компании, который является публичным документом, SHA не подлежит регистрации или раскрытию перед государственными органами.",
      },
      {
        q: "Что происходит при конфликте SHA с уставом компании?",
        a: "В отношениях с третьими лицами и при корпоративных спорах устав имеет приоритет. SHA обязателен только для его сторон. Именно поэтому ключевые правила управления (право вето, состав совета директоров) должны быть отражены и в уставе.",
      },
      {
        q: "Как работает тупиковая оговорка на практике?",
        a: "Тупиковая оговорка срабатывает, когда акционеры не могут прийти к единогласному решению. Типичные механизмы: право выкупа по заранее согласованной формуле, назначение третейского арбитра или принудительная продажа нейтральной стороне.",
      },
      {
        q: "Должен ли SHA учитывать смерть или недееспособность учредителя?",
        a: "Да — этот аспект часто упускают из виду. Без соответствующего положения акции могут перейти к наследникам, не имеющим отношения к бизнесу. В SHA следует предусмотреть ограничения на передачу акций и право обязательного выкупа в таких случаях.",
      },
    ],
    uz: [
      {
        q: "SHA biron davlat organiga topshirilishi kerakmi?",
        a: "Yo'q. O'zbekistondagi SHA aksiyadorlar o'rtasida faqat xususiy hujjat hisoblanadi. Ommaviy hujjat bo'lgan kompaniya nizomidan farqli o'laroq, SHA hech qanday davlat organiga ro'yxatdan o'tkazilishi yoki oshkor qilinishi shart emas.",
      },
      {
        q: "SHA kompaniya nizomi bilan ziddiyatga kirsa nima bo'ladi?",
        a: "Uchinchi shaxslar bilan munosabatlarda va korporativ nizolarda nizom ustun turadi. SHA faqat tomonlar o'rtasida majburiy kuchga ega. Shuning uchun asosiy boshqaruv qoidalari (veto huquqi, kengash tarkibi) nizomda ham aks ettirilishi kerak.",
      },
      {
        q: "Amalda to'xtab qolish bandi qanday ishlaydi?",
        a: "To'xtab qolish bandi aksiyadorlar bir ovozdan qaror talab qiladigan masalada kelisha olmasa ishga tushadi. Odatiy mexanizmlar: oldindan kelishilgan formula bo'yicha sotib olish huquqi, uchinchi tomon hakamini tayinlash yoki neytral tomonga majburiy sotuv.",
      },
      {
        q: "SHA ta'sischi vafoti yoki muomalaga layoqatsizligini ko'rib chiqishi kerakmi?",
        a: "Ha — bu ko'pincha e'tibordan chetda qoladi. Tegishli band bo'lmasa, aksiyalar kompaniya bilan hech qanday aloqasi bo'lmagan vorislarga o'tib ketishi mumkin. SHA bunday holatlarda ulushlarni o'tkazish cheklovlari va majburiy sotib olish huquqlarini belgilashi kerak.",
      },
    ],
  },

  "nda-bilateral": {
    en: [
      {
        q: "How long is the statute of limitations for an NDA breach?",
        a: "The general limitation period under Uzbek civil law is 3 years from the date the breach was discovered or should have been discovered. Specifying when the clock starts is important — build this into the NDA's breach notification clause.",
      },
      {
        q: "Are non-compete clauses enforceable under Uzbek law?",
        a: "Only in limited form. Post-termination non-compete clauses must be reasonable in scope — Uzbek courts are reluctant to enforce restrictions exceeding 2 years or covering an unreasonably broad geography or industry.",
      },
      {
        q: "Does the NDA cover verbal disclosures?",
        a: "It can, but with conditions. To protect verbal disclosures, the disclosing party should confirm them in writing within 10–15 days — the NDA includes a provision for this. Without written confirmation, verbal disclosures are difficult to prove and enforce.",
      },
      {
        q: "Can employees and advisers receive confidential information shared under the NDA?",
        a: "The NDA includes a 'need-to-know' clause: each party may share confidential information with employees and professional advisers who need it for the permitted purpose, provided those individuals are bound by equivalent obligations.",
      },
    ],
    ru: [
      {
        q: "Каков срок исковой давности по нарушению NDA?",
        a: "Общий срок исковой давности по гражданскому законодательству Узбекистана составляет 3 года с момента обнаружения нарушения или с момента, когда оно должно было быть обнаружено. Важно чётко прописать, с какого момента начинается этот срок — это следует отразить в положении NDA об уведомлении о нарушении.",
      },
      {
        q: "Являются ли ограничения конкуренции исполнимыми по законодательству Узбекистана?",
        a: "Только в ограниченном виде. Суды Узбекистана неохотно применяют постконтрактные ограничения конкуренции сроком более 2 лет или распространяющиеся на слишком широкую географию или отрасль.",
      },
      {
        q: "Распространяется ли NDA на устные раскрытия?",
        a: "Может, но при условии. Для защиты устных раскрытий раскрывающая сторона должна подтвердить их в письменной форме в течение 10–15 дней — в NDA предусмотрено соответствующее положение. Без письменного подтверждения устные раскрытия сложно доказать и защитить в суде.",
      },
      {
        q: "Могут ли сотрудники и советники получать конфиденциальную информацию по NDA?",
        a: "NDA включает оговорку о праве «знать только то, что необходимо»: каждая сторона может передавать конфиденциальную информацию сотрудникам и профессиональным советникам, которым она нужна для разрешённой цели, при условии что они связаны эквивалентными обязательствами.",
      },
    ],
    uz: [
      {
        q: "NDA buzilishi uchun da'vo muddati qancha?",
        a: "O'zbekiston fuqarolik qonunchiligi bo'yicha umumiy da'vo muddati buzilish aniqlangan yoki aniqlanishi kerak bo'lgan kundan boshlab 3 yil. Bu muddatning qachon boshlanishini aniq belgilash muhim — NDAning buzilish to'g'risida bildirishnoma bandiga kiritilishi kerak.",
      },
      {
        q: "Raqobatni cheklash bandlari O'zbekiston qonunchiligi bo'yicha ijro etilishi mumkinmi?",
        a: "Faqat cheklangan shaklda. O'zbekiston sudlari 2 yildan oshiq muddatli yoki haddan tashqari keng geografiya yoki tarmoqni qamraydigan shartnomadan keyingi raqobatni cheklash bandlarini ijro etishga moyil emas.",
      },
      {
        q: "NDA og'zaki oshkor qilishlarni qamrab oladimi?",
        a: "Qamrab olishi mumkin, lekin shartlar bilan. Og'zaki oshkor qilishlarni himoya qilish uchun oshkor qiluvchi tomon ularni 10–15 kun ichida yozma ravishda tasdiqlashi kerak — NDAda bunga tegishli band mavjud. Yozma tasdiqsiz og'zaki oshkor qilishlarni isbotlash va himoya qilish qiyin.",
      },
      {
        q: "Xodimlar va maslahatchilar NDA bo'yicha ulashilgan maxfiy ma'lumotlarni olishi mumkinmi?",
        a: "NDA 'bilish zarur' bandini o'z ichiga oladi: har bir tomon ruxsat etilgan maqsad uchun zarur bo'lgan xodimlari va professional maslahatchilariga maxfiy ma'lumot uzatishi mumkin, ular teng majburiyatlar bilan bog'liq bo'lgan taqdirda.",
      },
    ],
  },

  "commercial-lease": {
    en: [
      {
        q: "Does a commercial lease need state registration?",
        a: "Yes, if the term is 1 year or longer. Leases of 12 months or more must be registered with the State Cadastre — an unregistered long-term lease can be challenged or voided. Short-term leases (under 1 year) are exempt, which is why the pack includes a short-term variant.",
      },
      {
        q: "Can the landlord raise rent during the lease term?",
        a: "Only if the contract includes an escalation clause. Without one, the rent is fixed for the entire term under Uzbek civil law. If you want index-linked or periodic rent reviews, this must be explicitly written into the agreement.",
      },
      {
        q: "Who is responsible for major structural repairs?",
        a: "By default, the landlord. Under the Civil Code, major repairs (structural, roof, utilities infrastructure) remain the landlord's obligation unless the contract explicitly transfers this to the tenant. Verify what the lease actually says before signing.",
      },
      {
        q: "What happens to tenant improvements at the end of the lease?",
        a: "Inseparable improvements — those that cannot be removed without damaging the property — automatically become the landlord's property at lease end, unless the contract provides for compensation. Negotiate a reimbursement clause before making any significant fit-out.",
      },
    ],
    ru: [
      {
        q: "Требуется ли государственная регистрация коммерческой аренды?",
        a: "Да, если срок аренды составляет 1 год и более. Договоры сроком от 12 месяцев подлежат обязательной регистрации в Государственном кадастре — незарегистрированный долгосрочный договор может быть оспорен или признан недействительным. Краткосрочная аренда (до 1 года) освобождена от этого требования, поэтому в пакет включён соответствующий вариант.",
      },
      {
        q: "Может ли арендодатель повысить арендную плату в течение срока аренды?",
        a: "Только при наличии в договоре оговорки об индексации. Без неё размер арендной платы фиксируется на весь срок по нормам Гражданского кодекса Узбекистана. Если требуется индексируемая или периодически пересматриваемая арендная плата — это необходимо явно прописать в договоре.",
      },
      {
        q: "Кто несёт ответственность за капитальный ремонт?",
        a: "По умолчанию — арендодатель. В соответствии с Гражданским кодексом капитальный ремонт (несущие конструкции, кровля, инженерные сети) остаётся обязанностью арендодателя, если иное явно не предусмотрено договором. Перед подписанием проверьте, что написано в конкретном договоре.",
      },
      {
        q: "Что происходит с улучшениями арендатора по окончании аренды?",
        a: "Неотделимые улучшения — те, что нельзя убрать без ущерба для имущества, — автоматически переходят к арендодателю по истечении срока аренды, если договором не предусмотрена компенсация. Согласуйте условие о возмещении расходов до начала отделочных работ.",
      },
    ],
    uz: [
      {
        q: "Tijorat ijarasi davlat ro'yxatidan o'tishi kerakmi?",
        a: "Ha, agar muddat 1 yil yoki undan uzun bo'lsa. 12 oy va undan uzoq muddatli shartnomalar Davlat kadastrida ro'yxatdan o'tkazilishi shart — ro'yxatdan o'tmagan uzoq muddatli ijara bahsli bo'lishi yoki bekor qilinishi mumkin. Qisqa muddatli ijara (1 yildan kam) bu talabdan ozod, shuning uchun to'plamda qisqa muddatli variant mavjud.",
      },
      {
        q: "Uy egasi ijara muddati davomida ijarani oshira oladimi?",
        a: "Faqat shartnomada indeksatsiya bandi bo'lsa. Bunday band bo'lmasa, O'zbekiston fuqarolik qonunchiligi bo'yicha butun muddat davomida ijara narxi belgilanadi. Indeksga bog'liq yoki davriy ko'rib chiqiladigan ijara kerak bo'lsa, bu shartnomaga aniq yozilishi kerak.",
      },
      {
        q: "Kapital ta'mirga kim javobgar?",
        a: "Standart holda — uy egasi. Fuqarolik kodeksiga ko'ra, kapital ta'mir (konstruktiv, tom, kommunikatsiya infratuzilmasi) shartnomada bu majburiyat aniq ijarachiga o'tkazilmasa, uy egasining majburiyati bo'lib qoladi. Imzolashdan oldin shartnomada nima yozilganini tekshiring.",
      },
      {
        q: "Ijara muddati tugagach ijarachi yaxshilanishlar bilan nima qiladi?",
        a: "Ajralmas yaxshilanishlar — mulkka zarar bermasdan olib tashlab bo'lmaydigan — shartnomada kompensatsiya nazarda tutilmagan bo'lsa, ijara muddati tugagach avtomatik ravishda uy egasining mulkiga aylanadi. Katta ta'mirlash ishlarini boshlashdan oldin kompensatsiya bandini muzokaraga qiling.",
      },
    ],
  },

  "employment-contract": {
    en: [
      {
        q: "How long can a probation period last?",
        a: "Under the Uzbekistan Labour Code, probation cannot exceed 3 months for general employees or 6 months for senior management positions. Setting a longer probation period is not enforceable, even if the employee agrees to it.",
      },
      {
        q: "What social contributions does the employer pay?",
        a: "Employers contribute 12% of gross salary as social tax, paid entirely by the employer — it is not deducted from the employee's wage. This is in addition to the 12% personal income tax withheld from the employee's salary.",
      },
      {
        q: "What is the minimum annual leave entitlement?",
        a: "The Labour Code mandates a minimum of 15 working days of paid annual leave. This cannot be waived, reduced, or replaced by cash in lieu except on termination of employment. Certain categories of workers (hazardous roles, young workers) are entitled to more.",
      },
      {
        q: "Are post-termination non-compete clauses enforceable?",
        a: "This is legally uncertain in Uzbekistan. Unlike employment law in some jurisdictions, the Labour Code does not explicitly authorise post-termination non-competes, and courts have historically been reluctant to enforce them against employees.",
      },
    ],
    ru: [
      {
        q: "Какова максимальная продолжительность испытательного срока?",
        a: "Согласно Трудовому кодексу Узбекистана, испытательный срок не может превышать 3 месяцев для рядовых сотрудников и 6 месяцев — для руководящих должностей. Более длительный испытательный срок не имеет юридической силы, даже при согласии работника.",
      },
      {
        q: "Какие социальные взносы уплачивает работодатель?",
        a: "Работодатель уплачивает социальный налог в размере 12% от фонда оплаты труда — полностью за счёт работодателя, без вычета из зарплаты сотрудника. Это дополняется 12% НДФЛ, удерживаемым из заработной платы работника.",
      },
      {
        q: "Какова минимальная продолжительность ежегодного отпуска?",
        a: "Трудовой кодекс устанавливает минимум 15 рабочих дней оплачиваемого ежегодного отпуска. Это право не может быть отменено, сокращено или заменено денежной компенсацией, за исключением случаев увольнения. Для отдельных категорий работников (вредные условия, молодые специалисты) продолжительность отпуска больше.",
      },
      {
        q: "Применимы ли постконтрактные ограничения конкуренции?",
        a: "В Узбекистане это юридически неоднозначный вопрос. В отличие от некоторых юрисдикций, Трудовой кодекс прямо не предусматривает постконтрактных ограничений конкуренции, и исторически суды не склонны их применять против работников.",
      },
    ],
    uz: [
      {
        q: "Sinov muddati qancha davom etishi mumkin?",
        a: "O'zbekiston Mehnat kodeksiga ko'ra, sinov muddati oddiy xodimlar uchun 3 oydan, rahbarlik lavozimlarida 6 oydan oshmasligi kerak. Xodim rozilik bildirsada, undan uzun sinov muddati ijro etilmaydi.",
      },
      {
        q: "Ish beruvchi qanday ijtimoiy badal to'laydi?",
        a: "Ish beruvchilar brutto ish haqining 12 foizini ijtimoiy soliq sifatida to'laydi — bu to'liq ish beruvchi tomonidan to'lanadi, xodimning ish haqidan ushlanmaydi. Bu xodim ish haqidan ushlanuvchi 12% daromad solig'iga qo'shimcha.",
      },
      {
        q: "Minimal yillik ta'til huquqi qancha?",
        a: "Mehnat kodeksi kamida 15 ish kunlik pullik yillik ta'tilni majburiy qiladi. Bu huquqdan voz kechish, uni qisqartirish yoki ishdan bo'shatishdan tashqari pul bilan almashtirish mumkin emas. Ba'zi toifadagi ishchilar (zararli sharoitlar, yosh ishchilar) ko'proq ta'tilga haqlidirlar.",
      },
      {
        q: "Ishdan bo'shatishdan keyingi raqobatni cheklash bandlari ijro etilishi mumkinmi?",
        a: "Bu O'zbekistonda huquqiy jihatdan noaniq. Ba'zi yurisdiktsiyalardan farqli o'laroq, Mehnat kodeksi shartnomadan keyingi raqobatni cheklashni aniq ruxsat etmaydi va tarixan sudlar ularni xodimlar tashida ijro etishga moyil bo'lmagan.",
      },
    ],
  },

  "hr-policy-manual": {
    en: [
      {
        q: "Does Uzbek law require a formal disciplinary procedure?",
        a: "Yes. The Labour Code requires that any disciplinary action — reprimand, severe reprimand, or termination — follow a documented procedure: written explanation from the employee, review, and written decision. Verbal warnings alone are not a valid legal basis for dismissal.",
      },
      {
        q: "Can employers monitor employee devices and communications?",
        a: "Employers may monitor company-owned devices and communications used for work, but employees must be informed of this monitoring in writing before it begins. Undisclosed monitoring can be challenged under privacy regulations.",
      },
      {
        q: "How long must personnel records be kept?",
        a: "Under Uzbek archival regulations, personnel files must be retained for 75 years. Employment orders, salary records, and leave documents must be kept for a minimum of 5 years. The manual includes a document retention schedule aligned with these requirements.",
      },
      {
        q: "What are the rules on overtime?",
        a: "Overtime must be compensated at a minimum of 1.5× the normal rate. The Labour Code caps overtime at 120 hours per employee per year. Exceeding this limit — even with the employee's consent — is a Labour Inspection violation.",
      },
    ],
    ru: [
      {
        q: "Требует ли законодательство Узбекистана формальной дисциплинарной процедуры?",
        a: "Да. Трудовой кодекс обязывает оформлять любые дисциплинарные меры — замечание, выговор или увольнение — по установленной процедуре: письменное объяснение от работника, проверка и письменное решение. Только устного предупреждения недостаточно как правового основания для увольнения.",
      },
      {
        q: "Вправе ли работодатели контролировать устройства и переписку сотрудников?",
        a: "Работодатели могут контролировать принадлежащие компании устройства и рабочую переписку, однако работники должны быть уведомлены об этом в письменной форме до начала мониторинга. Скрытое наблюдение может быть оспорено с точки зрения норм о защите персональных данных.",
      },
      {
        q: "Как долго должны храниться кадровые документы?",
        a: "Согласно архивному законодательству Узбекистана, личные дела сотрудников хранятся 75 лет. Приказы о приёме на работу, документы по заработной плате и отпускам — не менее 5 лет. В руководстве предусмотрен график хранения документов с учётом этих требований.",
      },
      {
        q: "Каковы правила оплаты сверхурочной работы?",
        a: "Сверхурочная работа оплачивается не менее чем в 1,5-кратном размере от обычного тарифа. Трудовой кодекс ограничивает сверхурочные 120 часами в год на одного работника. Превышение этого лимита — даже с согласия сотрудника — является нарушением при инспекции труда.",
      },
    ],
    uz: [
      {
        q: "O'zbekiston qonunchiligi rasmiy intizomiy tartibni talab qiladimi?",
        a: "Ha. Mehnat kodeksi har qanday intizomiy chora — hayfsan, qattiq hayfsan yoki ishdan bo'shatish — uchun hujjatlashtirilgan tartibni talab qiladi: xodimdan yozma tushuntirish, ko'rib chiqish va yozma qaror. Faqat og'zaki ogohlantirish ishdan bo'shatish uchun qonuniy asos bo'la olmaydi.",
      },
      {
        q: "Ish beruvchilar xodimlarning qurilmalari va muloqotlarini kuzatishi mumkinmi?",
        a: "Ish beruvchilar kompaniyaga tegishli qurilmalar va ish muloqotlarini kuzatishi mumkin, lekin kuzatish boshlanishidan oldin xodimlar yozma ravishda xabardor qilinishi kerak. Yashirin kuzatish maxfiylik qoidalari bo'yicha bahsli bo'lishi mumkin.",
      },
      {
        q: "Xodim yozuvlari qancha vaqt saqlanishi kerak?",
        a: "O'zbekiston arxiv qoidalariga ko'ra, xodimlarning shaxsiy ishlari 75 yil saqlanishi kerak. Mehnat buyruqlari, ish haqi va ta'til hujjatlari kamida 5 yil saqlanishi shart. Qo'llanmada ushbu talablarga mos hujjatlarni saqlash jadvali mavjud.",
      },
      {
        q: "Qo'shimcha ish vaqtiga qoidalar qanday?",
        a: "Qo'shimcha ish vaqti oddiy stavkadan kamida 1,5 barobar to'lanishi kerak. Mehnat kodeksi qo'shimcha ish vaqtini bir xodim uchun yiliga 120 soat bilan cheklaydi. Bu chegarani oshirish — xodimning roziligi bilan ham bo'lsa — Mehnat inspeksiyasi tomonidan qoidabuzarlik hisoblanadi.",
      },
    ],
  },

  "tax-compliance-starter": {
    en: [
      {
        q: "When does a business become obligated to register for VAT?",
        a: "VAT registration is mandatory once annual turnover exceeds 1 billion UZS (approximately $78,000 at current rates). Below this threshold, VAT registration is voluntary. Exceeding the threshold without registering attracts penalties.",
      },
      {
        q: "What is the simplified tax system and who qualifies?",
        a: "Small businesses with turnover below 1 billion UZS can opt for the Simplified Tax System (SoTS): a flat 4% on revenue for service businesses or 6% for trade and production — replacing both CIT and VAT. The pack includes a comparison worksheet.",
      },
      {
        q: "How often are tax filings due?",
        a: "VAT returns are filed monthly. CIT advance payments are made quarterly. The annual CIT declaration is due by March 1 of the following year. The compliance calendar lists every deadline with the applicable penalty for late filing.",
      },
      {
        q: "What triggers a tax audit in Uzbekistan?",
        a: "Common triggers include: claiming VAT refunds for three or more consecutive months, declaring losses for two or more years running, and significant discrepancies between reported turnover and banking transactions. The pack's compliance tips cover how to reduce audit risk.",
      },
    ],
    ru: [
      {
        q: "Когда у компании возникает обязанность зарегистрироваться в качестве плательщика НДС?",
        a: "Регистрация в качестве плательщика НДС становится обязательной, когда годовой оборот превышает 1 миллиард сум (примерно 78 000 долл. США по текущему курсу). Ниже этого порога регистрация добровольная. Превышение порога без регистрации влечёт штрафные санкции.",
      },
      {
        q: "Что такое упрощённая система налогообложения и кто может её применять?",
        a: "Малый бизнес с оборотом ниже 1 миллиарда сум может перейти на упрощённую систему налогообложения (УНС): фиксированная ставка 4% на выручку для сферы услуг или 6% для торговли и производства, заменяющая и НП, и НДС. В пакет включена сравнительная таблица.",
      },
      {
        q: "Как часто нужно подавать налоговую отчётность?",
        a: "Декларации по НДС подаются ежемесячно. Авансовые платежи по налогу на прибыль — ежеквартально. Годовая декларация по налогу на прибыль подаётся до 1 марта следующего года. Календарь соответствия содержит все сроки с указанием штрафов за просрочку.",
      },
      {
        q: "Что вызывает налоговую проверку в Узбекистане?",
        a: "Типичные основания: требование возврата НДС три и более месяца подряд, декларирование убытков два и более года подряд, а также существенные расхождения между задекларированным оборотом и банковскими операциями. Раздел практических советов по комплаенсу охватывает меры по снижению налогового риска.",
      },
    ],
    uz: [
      {
        q: "Kompaniya qachon QQS to'lovchisi sifatida ro'yxatdan o'tishi shart?",
        a: "Yillik aylanma 1 milliard so'mdan (joriy kurs bo'yicha taxminan 78 000 AQSh dollari) oshganda QQS ro'yxatdan o'tish majburiy bo'ladi. Bu chegaradan past ro'yxatdan o'tish ixtiyoriy. Chegarani ro'yxatdan o'tmasdan oshirish jarimaga sabab bo'ladi.",
      },
      {
        q: "Soddalashtirilgan soliq tizimi nima va kim uchun mos keladi?",
        a: "Aylanmasi 1 milliard so'mdan past kichik biznes Soddalashtirilgan Soliq Tizimiga (SST) o'tishi mumkin: xizmat ko'rsatuvchi korxonalar uchun 4%, savdo va ishlab chiqarish uchun 6% — KDS va QQSning o'rnini bosadi. To'plamga taqqoslash jadvali kiritilgan.",
      },
      {
        q: "Soliq hisobotlari qanchalik tez-tez topshiriladi?",
        a: "QQS deklaratsiyalari oylik topshiriladi. KDS bo'yicha avans to'lovlari choraklik amalga oshiriladi. Yillik KDS deklaratsiyasi keyingi yilning 1 martiga qadar topshirilishi shart. Komplayans kalendarida kech topshirish uchun jarimalar bilan barcha muddatlar ko'rsatilgan.",
      },
      {
        q: "O'zbekistonda soliq tekshiruvini nima keltirib chiqaradi?",
        a: "Keng tarqalgan sabablar: ketma-ket uch oy va undan ko'proq QQS qaytarimini talab qilish, ikki yil va undan ko'proq zarar e'lon qilish, e'lon qilingan aylanma va bank operatsiyalari o'rtasidagi sezilarli nomuvofiqlik. To'plamdagi komplayans maslahatlari audit xavfini kamaytirish choralarini o'z ichiga oladi.",
      },
    ],
  },

  "transfer-pricing": {
    en: [
      {
        q: "What is the documentation threshold in Uzbekistan?",
        a: "Transfer pricing documentation is required when controlled transactions between related parties exceed 1 billion UZS in a tax year. Below this threshold, documentation is not mandatory but may still be requested during an audit.",
      },
      {
        q: "Which transfer pricing method do Uzbek authorities prefer?",
        a: "In practice, the Transactional Net Margin Method (TNMM) is most commonly accepted by Uzbek tax authorities — particularly for intercompany services and routine distribution transactions. The pack's benchmarking guide explains how to apply it correctly.",
      },
      {
        q: "How far back can tax authorities look for adjustments?",
        a: "The standard audit limitation period is 3 years. However, if fraud or intentional tax evasion is established, authorities can look back up to 5 years. This is why documentation should be prepared contemporaneously, not retroactively.",
      },
      {
        q: "Is an Advance Pricing Agreement available in Uzbekistan?",
        a: "Yes. The Uzbek Tax Service accepts APA applications for large recurring intercompany transactions. An APA locks in an agreed pricing methodology for a set period, eliminating the risk of future adjustments. The policy statement template in the pack can form the basis of an APA submission.",
      },
    ],
    ru: [
      {
        q: "Каков порог документирования для ТЦО в Узбекистане?",
        a: "Документация по трансфертному ценообразованию требуется, когда контролируемые сделки между связанными лицами превышают 1 миллиард сум в налоговом году. Ниже этого порога документация не обязательна, но может быть запрошена в ходе проверки.",
      },
      {
        q: "Какой метод ТЦО предпочитают налоговые органы Узбекистана?",
        a: "На практике метод чистой прибыли от сделки (МЧПС/TNMM) наиболее часто принимается узбекскими налоговыми органами — особенно для внутригрупповых услуг и типовых дистрибьюторских операций. Руководство по бенчмаркингу в пакете объясняет его правильное применение.",
      },
      {
        q: "За какой период налоговые органы могут проводить корректировки?",
        a: "Стандартный срок исковой давности по проверке составляет 3 года. Однако при установлении факта мошенничества или умышленного уклонения от уплаты налогов этот срок может быть увеличен до 5 лет. Именно поэтому документацию следует готовить в текущем режиме, а не задним числом.",
      },
      {
        q: "Доступно ли в Узбекистане соглашение о ценообразовании (APA)?",
        a: "Да. Налоговая служба Узбекистана принимает заявки на APA для крупных повторяющихся внутригрупповых операций. APA фиксирует согласованную методологию ценообразования на определённый период, устраняя риск будущих корректировок. Шаблон политики в пакете может стать основой заявки на APA.",
      },
    ],
    uz: [
      {
        q: "O'zbekistonda transfer narxlash hujjatlash chegarasi qancha?",
        a: "Transfer narxlash hujjatlari soliq yilida bog'liq tomonlar o'rtasidagi nazorat ostidagi bitimlar 1 milliard so'mdan oshganda talab qilinadi. Bu chegaradan past hujjat majburiy emas, lekin tekshiruv davomida so'ralishi mumkin.",
      },
      {
        q: "O'zbekiston soliq organlari qaysi transfer narxlash usulini afzal ko'radi?",
        a: "Amalda, Bitim sof foydasi usuli (BSFU/TNMM) O'zbekiston soliq organlari tomonidan eng ko'p qabul qilinadi — ayniqsa guruh ichidagi xizmatlar va oddiy taqsimot operatsiyalari uchun. To'plamdagi taqqoslash qo'llanmasi uni to'g'ri qo'llashni tushuntiradi.",
      },
      {
        q: "Soliq organlari tuzatishlar uchun qanchalik orqaga qaray oladi?",
        a: "Standart tekshiruv da'vo muddati 3 yil. Biroq firibgarlik yoki qasddan soliq to'lashdan bo'yin tovlash aniqlansa, organlar 5 yilgacha orqaga qaray oladi. Shuning uchun hujjatlar retrospektiv emas, joriy tartibda tayyorlanishi kerak.",
      },
      {
        q: "O'zbekistonda Oldindan narxlash kelishuvi (APA) mavjudmi?",
        a: "Ha. O'zbekiston Soliq xizmati katta muntazam guruh ichi bitimlar uchun APA arizalarini qabul qiladi. APA belgilangan muddat uchun kelishilgan narxlash metodologiyasini mustahkamlaydi va kelajakdagi tuzatishlar xavfini bartaraf etadi. To'plamdagi siyosat bayoni shabloni APA ariza asosi bo'lishi mumkin.",
      },
    ],
  },

  "work-permit-pack": {
    en: [
      {
        q: "Is there an annual quota on work permits?",
        a: "Yes. The government sets annual regional quotas for foreign work permits. Certain industries and regions fill their quotas early in the year — if you are hiring late in the year, check the remaining quota for your region before starting the application.",
      },
      {
        q: "Are there categories exempt from the quota?",
        a: "Yes. Highly Qualified Specialists (HQS) — those meeting the salary and qualification criteria set by the Ministry of Employment — are exempt from quotas and benefit from a simplified permit process with fewer requirements.",
      },
      {
        q: "Can an employee transfer a work permit to a new employer?",
        a: "No. Work permits in Uzbekistan are tied to the specific employer who applied for them. If an employee changes employer, the old employer must cancel the permit and the new employer must apply for a new one from scratch.",
      },
      {
        q: "How long does processing actually take?",
        a: "Officially 15–30 working days from submission of a complete set of documents. Incomplete applications are the main cause of delay — the checklist in the pack flags every required document to avoid back-and-forth with the Agency for External Labour Migration.",
      },
    ],
    ru: [
      {
        q: "Существует ли ежегодная квота на разрешения на работу?",
        a: "Да. Правительство устанавливает ежегодные региональные квоты на иностранные разрешения на работу. Ряд отраслей и регионов исчерпывает квоты уже в начале года — если вы нанимаете во второй половине года, заранее проверьте остаток квоты по вашему региону.",
      },
      {
        q: "Есть ли категории, освобождённые от квоты?",
        a: "Да. Высококвалифицированные специалисты (ВКС) — соответствующие зарплатным и квалификационным критериям Министерства занятости — освобождены от квот и проходят упрощённую процедуру получения разрешения с меньшим числом требований.",
      },
      {
        q: "Может ли сотрудник перевести разрешение на работу к новому работодателю?",
        a: "Нет. Разрешения на работу в Узбекистане привязаны к конкретному работодателю, который их оформлял. При смене работодателя прежний обязан аннулировать разрешение, а новый должен подавать заявление заново с нуля.",
      },
      {
        q: "Сколько времени фактически занимает рассмотрение?",
        a: "Официально — 15–30 рабочих дней с момента подачи полного пакета документов. Основная причина задержек — неполный комплект документов. Чеклист в пакете охватывает каждый обязательный документ, чтобы избежать переписки с Агентством по внешней трудовой миграции.",
      },
    ],
    uz: [
      {
        q: "Ish ruxsatnomalari uchun yillik kvota bormi?",
        a: "Ha. Hukumat xorijiy ish ruxsatnomalari uchun yillik mintaqaviy kvotalar belgilaydi. Ba'zi tarmoqlar va mintaqalar yil boshida kvotalarini to'ldiradi — yil oxirida yollayotgan bo'lsangiz, arizani boshlashdan oldin mintaqangiz uchun qolgan kvotani tekshiring.",
      },
      {
        q: "Kvotadan ozod qilingan toifalar bormi?",
        a: "Ha. Yuqori malakali mutaxassislar (YMM) — Bandlik vazirligi belgilagan ish haqi va malaka mezonlariga javob beradiganlar — kvotalardan ozod va kamroq talablar bilan soddalashtirilgan ruxsatnoma jarayonidan foydalanadilar.",
      },
      {
        q: "Xodim ish ruxsatnomasini yangi ish beruvchiga o'tkaza oladimi?",
        a: "Yo'q. O'zbekistondagi ish ruxsatnomalari ularni rasmiylashtirgan muayyan ish beruvchiga bog'liq. Xodim ish beruvchini o'zgartirsa, eski ish beruvchi ruxsatnomani bekor qilishi va yangi ish beruvchi sifirdan yangi ariza berishi shart.",
      },
      {
        q: "Ko'rib chiqish aslida qancha vaqt oladi?",
        a: "Rasmiy — to'liq hujjatlar to'plami topshirilgandan 15–30 ish kuni. Kechikishlarning asosiy sababi — to'liq bo'lmagan arizalar. To'plamdagi tekshiruv ro'yxati Tashqi mehnat migratsiyasi agentligi bilan aloqalarni oldini olish uchun har bir talab qilinadigan hujjatni belgilaydi.",
      },
    ],
  },

  "sez-entry-pack": {
    en: [
      {
        q: "What tax exemptions do SEZ residents receive?",
        a: "SEZ residents typically receive a 10-year exemption from corporate income tax, VAT, property tax, and land tax. Some zones also offer customs duty exemptions on imported equipment. The regulatory overview in the pack details the current incentives for each major zone.",
      },
      {
        q: "What is the minimum investment to qualify?",
        a: "Thresholds vary by zone and activity type — typically $300,000 for standard zones and up to $3 million for large industrial zones. Investment must be documented and the financial projections model in the pack is structured to meet Ministry requirements.",
      },
      {
        q: "Are there restrictions on selling products domestically?",
        a: "Yes. SEZ residents are primarily expected to export their goods or supply other SEZ residents. Domestic sales to the general Uzbek market are permitted but are subject to standard taxes — the tax exemptions apply only to export-oriented activity.",
      },
      {
        q: "Can a foreign company enter an SEZ without setting up a local entity?",
        a: "No. Foreign companies must establish a local Uzbek legal entity (LLC or JSC) to operate within an SEZ. Direct operation by a foreign branch or representative office is not permitted for SEZ residency purposes.",
      },
    ],
    ru: [
      {
        q: "Какие налоговые льготы получают резиденты СЭЗ?",
        a: "Резиденты СЭЗ, как правило, получают освобождение от налога на прибыль, НДС, налога на имущество и земельного налога сроком на 10 лет. В ряде зон предусмотрено также освобождение от таможенных пошлин на ввозимое оборудование. Обзор нормативной базы содержит актуальные льготы для каждой крупной зоны.",
      },
      {
        q: "Каков минимальный объём инвестиций для получения статуса резидента?",
        a: "Пороги варьируются в зависимости от зоны и вида деятельности: как правило, от 300 000 долл. США для стандартных зон и до 3 млн долл. США для крупных промышленных зон. Инвестиции должны быть документально подтверждены; финансовая модель прогнозов в пакете составлена в соответствии с требованиями Министерства.",
      },
      {
        q: "Есть ли ограничения на продажу продукции на внутреннем рынке?",
        a: "Да. Резиденты СЭЗ в первую очередь ориентированы на экспорт или поставки другим резидентам СЭЗ. Продажи на общем внутреннем рынке Узбекистана разрешены, но облагаются стандартными налогами — льготы применяются исключительно к экспортоориентированной деятельности.",
      },
      {
        q: "Может ли иностранная компания войти в СЭЗ без создания местного юридического лица?",
        a: "Нет. Для работы в СЭЗ иностранные компании обязаны создать местное юридическое лицо в Узбекистане (ООО или АО). Прямая деятельность иностранного филиала или представительства в качестве резидента СЭЗ не допускается.",
      },
    ],
    uz: [
      {
        q: "SEZ rezidentlari qanday soliq imtiyozlarini oladilar?",
        a: "SEZ rezidentlari odatda 10 yil davomida korporativ daromad solig'i, QQS, mulk solig'i va yer solig'idan ozod bo'ladilar. Ba'zi zonalarda import qilinadigan uskunalarga bojxona to'lovlaridan ozod qilish ham nazarda tutilgan. To'plamdagi normativ sharh har bir asosiy zona uchun joriy imtiyozlarni batafsil bayon etadi.",
      },
      {
        q: "Sifatlash uchun minimal investitsiya qancha?",
        a: "Chegaralar zona va faoliyat turiga qarab farq qiladi — standart zonalar uchun odatda 300 000 AQSh dollari, yirik sanoat zonalari uchun 3 million AQSh dollarigacha. Investitsiyalar hujjatlashtirilishi kerak; to'plamdagi moliyaviy prognozlar modeli Vazirlik talablariga javob beradigan tarzda tuzilgan.",
      },
      {
        q: "Mahalliy bozorda mahsulot sotishda cheklovlar bormi?",
        a: "Ha. SEZ rezidentlari asosan tovarlarni eksport qilish yoki boshqa SEZ rezidentlariga yetkazib berish uchun mo'ljallangan. O'zbekistonning umumiy ichki bozoriga sotuv ruxsat etilgan, lekin standart soliqlarga bo'ysunadi — imtiyozlar faqat eksportga yo'naltirilgan faoliyatga tatbiq etiladi.",
      },
      {
        q: "Xorijiy kompaniya mahalliy yuridik shaxs tashkil etmasdan SEZga kira oladimi?",
        a: "Yo'q. Xorijiy kompaniyalar SEZ doirasida faoliyat yuritish uchun O'zbekistonda mahalliy yuridik shaxs (MChJ yoki AJ) tashkil etishi shart. Xorijiy filial yoki vakolatxona tomonidan to'g'ridan-to'g'ri faoliyat SEZ rezidentligi uchun ruxsat etilmaydi.",
      },
    ],
  },

  "due-diligence-pack": {
    en: [
      {
        q: "What are the most common red flags in Uzbek company reviews?",
        a: "The three most frequent issues: undocumented related-party transactions (loans, asset transfers, management fees with no supporting agreements), gaps in property title chains (especially for real estate acquired before 2010), and informal employment — staff paid off-payroll exposes the buyer to inherited tax liabilities.",
      },
      {
        q: "How early should the due diligence process start?",
        a: "For Uzbek targets, start requesting documents 6–12 months before anticipated deal signing. Companies often lack an organised data room and document retrieval from state registers can take weeks. Starting late compresses the review and increases the risk of missing issues.",
      },
      {
        q: "How should a data room for an Uzbek company be structured?",
        a: "Organise it by: corporate documents, title documents, contracts (material), employment, tax, litigation/permits, and financial statements. The data room index in the pack mirrors this structure and is pre-formatted to send directly to the target company's management.",
      },
      {
        q: "How is the red flag checklist used in practice?",
        a: "Each flagged issue is categorised by severity (deal-breaker, price adjustment, or condition precedent) rather than treated as a binary pass/fail. The checklist feeds into the legal opinion and the SPA representations and warranties — items left unresolved become the seller's risk allocation.",
      },
    ],
    ru: [
      {
        q: "Каковы наиболее распространённые красные флаги при проверке узбекских компаний?",
        a: "Три наиболее частые проблемы: недокументированные сделки со связанными сторонами (займы, передача активов, управленческие вознаграждения без подтверждающих соглашений), пробелы в цепочке правоустанавливающих документов на имущество (особенно на недвижимость, приобретённую до 2010 года) и неофициальная занятость — сотрудники на неофициальной зарплате создают для покупателя унаследованные налоговые обязательства.",
      },
      {
        q: "Когда следует начинать процесс due diligence?",
        a: "Для узбекских объектов запрашивайте документы за 6–12 месяцев до предполагаемого подписания сделки. Компании часто не имеют организованного дата-рума, а получение документов из государственных реестров может занимать недели. Поздний старт сжимает сроки проверки и повышает риск пропустить существенные проблемы.",
      },
      {
        q: "Как должен быть структурирован дата-рум для узбекской компании?",
        a: "Рекомендуется следующая структура: корпоративные документы, правоустанавливающие документы, договоры (существенные), трудовые, налоговые, судебные дела/разрешения и финансовая отчётность. Индекс дата-рума в пакете соответствует этой структуре и готов к отправке руководству целевой компании.",
      },
      {
        q: "Как на практике используется чеклист красных флагов?",
        a: "Каждый выявленный вопрос классифицируется по степени серьёзности (блокирующий сделку, основание для корректировки цены или отлагательное условие) — а не как бинарный «прошёл / не прошёл». Результаты чеклиста отражаются в юридическом заключении и заверениях и гарантиях ДКП: нерешённые вопросы переходят в зону ответственности продавца.",
      },
    ],
    uz: [
      {
        q: "O'zbek kompaniyalarini tekshirishda eng keng tarqalgan qizil bayroqlar nimalar?",
        a: "Uchta eng tez-tez uchraydigan muammo: hujjatlashtirilmagan bog'liq tomonlar bilan bitimlar (qarzlar, aktivlarni o'tkazish, qo'llab-quvvatlovchi kelishuvlarsiz boshqaruv to'lovlari), mulk huquqi zanjirida bo'shliqlar (ayniqsa 2010 yilgacha sotib olingan ko'chmas mulk uchun) va norasmiy bandlik — norasmiy ish haqiga ega xodimlar xaridorga meros bo'lib o'tadigan soliq majburiyatlarini keltirib chiqaradi.",
      },
      {
        q: "Due diligence jarayoni qachon boshlanishi kerak?",
        a: "O'zbek nishonlari uchun, kutilayotgan bitimni imzolashdan 6–12 oy oldin hujjatlarni so'rash boshlang. Kompaniyalar ko'pincha tartibli data roomga ega emas va davlat ro'yxatlaridan hujjat olish haftalar olishi mumkin. Kech boshlash ko'rib chiqish muddatini qisqartiradi va muhim muammolarni o'tkazib yuborish xavfini oshiradi.",
      },
      {
        q: "O'zbek kompaniyasi uchun data room qanday tuzilishi kerak?",
        a: "Quyidagicha tartibda tashkil eting: korporativ hujjatlar, mulk huquqi hujjatlari, shartnomalar (muhim), mehnat, soliq, sud ishlari/ruxsatnomalar va moliyaviy hisobotlar. To'plamdagi data room indeksi ushbu tuzilmaga mos keladi va bevosita nishon kompaniya rahbariyatiga yuborishga tayyor.",
      },
      {
        q: "Qizil bayroqlar tekshiruv ro'yxati amalda qanday ishlatiladi?",
        a: "Har bir belgilangan masala ikkilik 'o'tdi/o'tmadi' sifatida emas, jiddiylik darajasi bo'yicha tasniflanadi (bitimni blokirovka qiluvchi, narxni tuzatish asosi yoki to'xtatuvchi shart). Tekshiruv ro'yxati natijalari yuridik xulosa va SPA kafolat va tasdiqlarda aks etadi — hal qilinmagan masalalar sotuvchining xavf taqsimotiga o'tadi.",
      },
    ],
  },
};
