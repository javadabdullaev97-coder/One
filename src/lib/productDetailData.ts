type Locale = "en" | "ru" | "uz";

interface ProductDetailContent {
  forWho: string[];
  whyNeeded: string;
  atRisk: string[];
}

export const PRODUCT_DETAIL_DATA: Record<string, Record<Locale, ProductDetailContent>> = {
  "llc-formation": {
    en: {
      forWho: [
        "Entrepreneurs registering a new LLC in Uzbekistan for the first time",
        "Foreign nationals and foreign companies establishing a local legal entity",
        "Existing sole traders or individual entrepreneurs converting to limited liability",
        "Joint ventures between local and foreign founders structuring a new company",
      ],
      whyNeeded:
        "Uzbekistan's registration authority requires a precise set of documents in specific formats — a bilingual charter, notarised founder decisions, and correctly completed application forms. Any missing clause, non-standard wording, or incorrectly formatted document results in an outright rejection. Re-filing requires starting the process from scratch, paying notary fees again, and waiting weeks for a new appointment. This pack eliminates that risk: every document is already compliant, annotated for easy customisation, and aligned with the current Civil Code and LLC Law.",
      atRisk: [
        "Registration rejected and re-filing required, costing additional notary fees and weeks of delay",
        "Personal financial liability for all business obligations until the company is formally registered",
        "Operating informally exposes founders to tax penalties and regulatory sanctions",
        "Banks will not open a corporate account without a registered entity, blocking access to business banking",
      ],
    },
    ru: {
      forWho: [
        "Предприниматели, впервые регистрирующие ООО в Узбекистане",
        "Иностранные граждане и компании, открывающие местное юридическое лицо",
        "Индивидуальные предприниматели, переходящие на форму общества с ограниченной ответственностью",
        "Совместные предприятия между местными и иностранными учредителями",
      ],
      whyNeeded:
        "Регистрирующий орган Узбекистана требует точный пакет документов в строго определённых форматах — двуязычный устав, нотариально заверенные решения учредителей и правильно оформленные заявления. Любое несоответствие в формулировках, отсутствие обязательного пункта или неправильный формат документа влечёт полный отказ в регистрации. Повторная подача требует начинать процесс с нуля: снова оплачивать нотариальные услуги и ждать новой очереди. Этот пакет устраняет такой риск: все документы уже соответствуют требованиям, аннотированы для удобной адаптации и приведены в соответствие с действующим ГК и Законом об ООО.",
      atRisk: [
        "Отказ в регистрации и необходимость повторной подачи с дополнительными нотариальными расходами и задержкой на недели",
        "Личная финансовая ответственность учредителей по всем обязательствам бизнеса до момента официальной регистрации",
        "Неформальная деятельность грозит налоговыми штрафами и административными санкциями",
        "Банки не откроют корпоративный счёт без зарегистрированного юридического лица, что блокирует доступ к деловому банкингу",
      ],
    },
    uz: {
      forWho: [
        "O'zbekistonda birinchi marta MChJ ro'yxatdan o'tkazayotgan tadbirkorlar",
        "Mahalliy yuridik shaxs tashkil etayotgan chet el fuqarolari va kompaniyalari",
        "Mas'uliyatni cheklash uchun yakka tartibdagi tadbirkorlikdan MChJga o'tayotganlar",
        "Mahalliy va xorijiy ta'sischilar o'rtasidagi qo'shma korxonalar",
      ],
      whyNeeded:
        "O'zbekiston ro'yxatdan o'tkazish organi aniq formatlardagi hujjatlar to'plamini talab qiladi — ikki tilli nizom, notarial tasdiqlangan ta'sischilar qarorlari va to'g'ri to'ldirilgan ariza shakllari. Har qanday mos kelmaydigan band, nostandart so'z yoki noto'g'ri formatdagi hujjat to'liq rad etishga olib keladi. Qayta topshirish jarayonni boshidan boshlashni, notarial xarajatlarni qayta to'lashni va yangi navbat kutishni talab qiladi. Ushbu to'plam bu xavfni bartaraf etadi: barcha hujjatlar allaqachon talablarga javob beradi, oson moslash uchun izohlar bilan ta'minlangan va amaldagi Fuqarolik kodeksi va MChJ to'g'risidagi qonunga muvofiq keltirilgan.",
      atRisk: [
        "Ro'yxatdan o'tishdan rad etish va qayta topshirish zaruriyati — qo'shimcha notarial xarajatlar va haftalab kechikish",
        "Kompaniya rasman ro'yxatdan o'tgunga qadar barcha biznes majburiyatlari bo'yicha ta'sischilarning shaxsiy moliyaviy javobgarligi",
        "Norasmiy faoliyat soliq jarimalari va ma'muriy sanksiyalarga duchor qiladi",
        "Ro'yxatdan o'tgan yuridik shaxssiz banklar korporativ hisob ochmaydi, bu biznes banking xizmatlariga kirishni bloklaydi",
      ],
    },
  },

  "jsc-formation": {
    en: {
      forWho: [
        "Founders planning to raise institutional investment or pursue an IPO",
        "Companies needing a legal structure that permits public or private share issuance",
        "Businesses with multiple shareholders that require formal corporate governance",
        "Uzbek subsidiaries of international groups needing a locally compliant JSC structure",
      ],
      whyNeeded:
        "Joint-stock company registration in Uzbekistan is substantially more complex than an LLC. The process requires a prospectus, shareholder registry, board resolutions, and charter — each in a format approved by the Capital Markets Development Agency. Errors or omissions in the prospectus can void the entire registration process and require re-submission from scratch. The documentation also needs to align with securities law, not just company law, which most generic legal templates miss entirely. This pack was designed specifically for JSC formation under current Uzbek regulations.",
      atRisk: [
        "Prospectus rejected by the Capital Markets Development Agency, voiding the entire registration",
        "Any share issuance without a properly registered JSC is legally void and personally actionable against the founders",
        "Shareholder disputes over governance have no contractual basis without a properly filed charter and registry",
        "Missing board resolution requirements can make subsequent company decisions legally challengeable",
      ],
    },
    ru: {
      forWho: [
        "Учредители, планирующие привлечение институциональных инвестиций или IPO",
        "Компании, которым необходима правовая форма, допускающая публичный или частный выпуск акций",
        "Предприятия с несколькими акционерами, требующие формального корпоративного управления",
        "Узбекские дочерние структуры международных групп, которым нужна локально соответствующая форма АО",
      ],
      whyNeeded:
        "Регистрация акционерного общества в Узбекистане существенно сложнее, чем ООО. Процесс требует проспекта эмиссии, реестра акционеров, решений совета директоров и устава — каждый в форматах, утверждённых Агентством по развитию рынка капиталов. Ошибки или пропуски в проспекте могут аннулировать весь процесс регистрации и потребовать повторной подачи с нуля. Документация также должна соответствовать законодательству о ценных бумагах, а не только корпоративному праву — этот аспект большинство стандартных шаблонов полностью игнорирует. Данный пакет разработан специально для регистрации АО по действующим узбекским нормам.",
      atRisk: [
        "Отказ Агентства по развитию рынка капиталов в регистрации проспекта, аннулирующий всю регистрацию",
        "Любой выпуск акций без надлежащим образом зарегистрированного АО юридически ничтожен и влечёт личную ответственность учредителей",
        "Корпоративные споры акционеров не имеют договорного основания без надлежаще поданного устава и реестра",
        "Несоблюдение требований к решениям совета директоров может сделать последующие решения компании юридически оспоримыми",
      ],
    },
    uz: {
      forWho: [
        "Institutsional investitsiyalar jalb qilish yoki IPO rejalashtirayotgan ta'sischilar",
        "Ochiq yoki xususiy aksiyalar chiqarishga ruxsat beruvchi huquqiy tuzilmani talab qilayotgan kompaniyalar",
        "Rasmiy korporativ boshqaruvni talab qiladigan ko'p aksiyadorli korxonalar",
        "Mahalliy muvofiq AJ tuzilmasini talab qilayotgan xalqaro guruhlarning O'zbekiston sho'ba korxonalari",
      ],
      whyNeeded:
        "O'zbekistonda aksiyadorlik jamiyatini ro'yxatdan o'tkazish MChJga nisbatan ancha murakkab. Jarayon Kapital bozorlarini rivojlantirish agentligi tomonidan tasdiqlangan formatlarda prospekt, aksiyadorlar reestri, kengash qarorlari va nizomni talab qiladi. Prospektdagi xatolar yoki kamchiliklar butun ro'yxatdan o'tish jarayonini bekor qilishi va boshidan qayta topshirishni talab qilishi mumkin. Hujjatlar, shuningdek, ko'pchilik umumiy huquqiy shablonlar butunlay e'tiborsiz qoldiradigan qimmatli qog'ozlar qonunchiligiga ham, korporativ huquqqa ham mos kelishi kerak. Ushbu to'plam amaldagi O'zbekiston qoidalari asosida AJ tashkil etish uchun maxsus ishlab chiqilgan.",
      atRisk: [
        "Kapital bozorlarini rivojlantirish agentligi tomonidan prospektni ro'yxatdan o'tishdan rad etish, butun ro'yxatdan o'tishni bekor qilish",
        "To'g'ri ro'yxatdan o'tgan AJsiz har qanday aksiya chiqarish huquqiy jihatdan haqiqiy emas va ta'sischilar shaxsiy javobgarligiga olib keladi",
        "To'g'ri topshirilgan nizom va reestrsiz aksiyadorlar nizolarining shartnomaviy asosi yo'q",
        "Kengash qarorlari talablarining bajarilmasligi keyingi kompaniya qarorlarini huquqiy jihatdan bahsli qilishi mumkin",
      ],
    },
  },

  "shareholder-agreement": {
    en: {
      forWho: [
        "Co-founders dividing equity in a startup or an established partnership",
        "Investors entering a company as minority or majority shareholders",
        "Businesses onboarding a new strategic, financial, or operational partner",
        "Companies with existing shareholders who lack a formal governance framework",
      ],
      whyNeeded:
        "Without a shareholder agreement, every dispute over dividends, voting rights, dilution, or a founder's exit is resolved by default Uzbek company law — which almost never reflects what the founders actually intended. The law does not protect minority shareholders from being squeezed out, does not provide drag-along or tag-along rights, and does not create any mechanism for resolving a deadlock. A well-drafted SHA fills all of these gaps, sets the rules before disagreements arise, and prevents disputes from escalating into litigation that can take years and cost more than the business itself.",
      atRisk: [
        "Board deadlocks with no resolution mechanism, paralyzing the company indefinitely",
        "Minority shareholders legally able to block critical decisions with no deadlock-breaking clause",
        "Founders unable to exit without agreement from all other shareholders, even after years of disagreement",
        "No drag-along right means a controlling founder cannot complete an acquisition without a blocking minority",
        "Dilution disputes with no pre-agreed formula for new share issuances",
      ],
    },
    ru: {
      forWho: [
        "Сооснователи, разделяющие доли в стартапе или устоявшемся партнёрстве",
        "Инвесторы, входящие в компанию в качестве миноритарных или мажоритарных акционеров",
        "Компании, привлекающие нового стратегического, финансового или операционного партнёра",
        "Компании с действующими акционерами, которым не хватает формальной системы управления",
      ],
      whyNeeded:
        "Без акционерного соглашения каждый спор о дивидендах, правах голоса, разводнении или выходе учредителя разрешается по умолчанию нормами узбекского корпоративного права — которые почти никогда не отражают того, что учредители на самом деле подразумевали. Закон не защищает миноритарных акционеров от принудительного выкупа, не предусматривает права drag-along или tag-along и не создаёт механизма разрешения тупиковых ситуаций. Грамотно составленное SHA закрывает все эти пробелы, устанавливает правила ещё до возникновения разногласий и предотвращает перерастание споров в судебные разбирательства, которые могут длиться годами и обходиться дороже, чем сам бизнес.",
      atRisk: [
        "Тупики в совете директоров без механизма их разрешения, парализующие компанию на неопределённый срок",
        "Миноритарные акционеры, юридически способные блокировать критически важные решения при отсутствии антитупиковой оговорки",
        "Учредители не могут выйти без согласия всех остальных акционеров, даже после многолетних разногласий",
        "Отсутствие права drag-along означает, что контролирующий акционер не может завершить сделку по поглощению при наличии блокирующего меньшинства",
        "Споры о разводнении без заранее согласованной формулы для новых выпусков акций",
      ],
    },
    uz: {
      forWho: [
        "Startap yoki tashkil etilgan shirkatlarda ulushlarni bo'layotgan hamta'sischilar",
        "Kompaniyaga ozchilik yoki ko'pchilik aksiyador sifatida kiruvchi investorlar",
        "Yangi strategik, moliyaviy yoki operatsion sherik jalb qilayotgan korxonalar",
        "Rasmiy boshqaruv tizimi mavjud bo'lmagan amaldagi aksiyadorlari bo'lgan kompaniyalar",
      ],
      whyNeeded:
        "Aksiyadorlar shartnomasisiz dividendlar, ovoz berish huquqlari, suyultirish yoki ta'sischining chiqishi bo'yicha har bir nizo O'zbekiston korporativ huquqining standart normalari bilan hal etiladi — bu normalar ta'sischilar aslida nimani nazarda tutganini deyarli hech qachon aks ettirmaydi. Qonun ozchilik aksiyadorlarini majburiy sotib olishdan himoya qilmaydi, drag-along yoki tag-along huquqlarini nazarda tutmaydi va to'siq vaziyatlarni hal qilish mexanizmini yaratmaydi. To'g'ri tuzilgan SHA barcha bu bo'shliqlarni to'ldiradi, kelishmovchiliklar paydo bo'lishidan oldin qoidalarni belgilaydi va nizolarning yillar davom etib biznesning o'zidan qimmatga tushishi mumkin bo'lgan sud jarayoniga aylanishining oldini oladi.",
      atRisk: [
        "Hal qilish mexanizmi bo'lmagan kengash to'siqlari, kompaniyani muayyan muddatsiz falaj qiladi",
        "To'siqni bartaraf etish bandi bo'lmagan taqdirda muhim qarorlarni huquqiy jihatdan bloklashga qodir ozchilik aksiyadorlar",
        "Ta'sischilar ko'p yillik kelishmovchilikdan keyin ham barcha boshqa aksiyadorlar roziligisiz chiqa olmaydi",
        "Drag-along huquqining yo'qligi nazorat qiluvchi ta'sischining bloklashchi ozchilik mavjudida qo'shib olish bitimini yakunlay olmasligini anglatadi",
        "Yangi aksiyalar chiqarish uchun oldindan kelishilgan formulasiz suyultirish nizolari",
      ],
    },
  },

  "nda-bilateral": {
    en: {
      forWho: [
        "Companies entering commercial negotiations where confidential information will be exchanged",
        "Founders in early-stage discussions with potential investors, acquirers, or strategic partners",
        "Teams onboarding contractors, consultants, or vendors who will access proprietary data",
        "Any party sharing financial projections, product roadmaps, client lists, or technical specifications",
      ],
      whyNeeded:
        "A verbal agreement or an informal email chain has no legal standing in Uzbek courts. To bring a claim for breach of confidentiality, you need a signed written agreement that specifically defines what constitutes confidential information, the duration of the obligation, permitted uses, and the remedies available. This NDA is drafted to the precise requirements of Uzbek civil law — not adapted from a Western template — and covers trade secrets, intellectual property, business strategies, and financial data. It also includes a unilateral variant for situations where only one party is disclosing.",
      atRisk: [
        "No legal basis to prevent a counterparty from sharing or using your confidential information",
        "Trade secrets disclosed without any mechanism to claim damages in Uzbek courts",
        "Permanent loss of competitive advantage — once information is shared, it cannot be undisclosed",
        "Investors or partners who see your financials or product roadmap before signing have no obligation to keep them confidential",
      ],
    },
    ru: {
      forWho: [
        "Компании, вступающие в коммерческие переговоры, в ходе которых будет передаваться конфиденциальная информация",
        "Учредители, ведущие переговоры на ранней стадии с потенциальными инвесторами, покупателями или стратегическими партнёрами",
        "Команды, привлекающие подрядчиков, консультантов или поставщиков с доступом к закрытым данным",
        "Любая сторона, раскрывающая финансовые прогнозы, планы продуктов, клиентские базы или технические спецификации",
      ],
      whyNeeded:
        "Устная договорённость или неформальная переписка не имеют юридической силы в судах Узбекистана. Чтобы предъявить иск о нарушении конфиденциальности, необходимо подписанное письменное соглашение, конкретно определяющее состав конфиденциальной информации, срок действия обязательства, допустимые способы использования и доступные средства правовой защиты. Данное NDA составлено в строгом соответствии с требованиями узбекского гражданского законодательства — а не адаптировано с западного шаблона — и охватывает коммерческую тайну, интеллектуальную собственность, бизнес-стратегии и финансовые данные. Пакет также включает одностороннюю версию для случаев, когда информацию раскрывает только одна сторона.",
      atRisk: [
        "Отсутствие правового основания для предотвращения передачи или использования вашей конфиденциальной информации контрагентом",
        "Разглашение коммерческой тайны без возможности взыскать убытки в судах Узбекистана",
        "Необратимая утрата конкурентных преимуществ — раскрытая информация не может быть «нераскрыта»",
        "Инвесторы или партнёры, ознакомившиеся с вашей финансовой отчётностью или планом продукта до подписания, не несут никаких обязательств по соблюдению конфиденциальности",
      ],
    },
    uz: {
      forWho: [
        "Maxfiy ma'lumotlar almashiladigan tijorat muzokaralariga kirishayotgan kompaniyalar",
        "Potentsial investorlar, sotib oluvchilar yoki strategik sheriklar bilan dastlabki bosqich muhokamalarida bo'lgan ta'sischilar",
        "Mulkiy ma'lumotlarga kirish imkoni bo'lgan pudratchilar, maslahatchilar yoki yetkazib beruvchilarni jalb qilayotgan jamoalar",
        "Moliyaviy prognozlar, mahsulot yo'l xaritalari, mijozlar ro'yxatlari yoki texnik spetsifikatsiyalarni ulashayotgan har qanday tomon",
      ],
      whyNeeded:
        "Og'zaki kelishuv yoki norasmiy yozishmalar O'zbekiston sudlarida huquqiy kuchga ega emas. Maxfiylikni buzish bo'yicha da'vo qo'zg'atish uchun maxfiy ma'lumot tarkibini, majburiyat muddatini, ruxsat etilgan foydalanish usullarini va mavjud huquqiy himoya choralarini aniq belgilaydigan imzolangan yozma shartnoma kerak. Ushbu NDA G'arb shablonidan moslashtirilmagan — balki O'zbekiston fuqarolik huquqining aniq talablariga muvofiq tuzilgan — va savdo sirlarini, intellektual mulkni, biznes strategiyalarini va moliyaviy ma'lumotlarni qamrab oladi. To'plam, shuningdek, faqat bir tomon oshkor qiladigan holatlarga mos bir tomonlama variantni ham o'z ichiga oladi.",
      atRisk: [
        "Kontragentning maxfiy ma'lumotingizni ulashishi yoki undan foydalanishining oldini olish uchun huquqiy asos yo'qligi",
        "O'zbekiston sudlarida zarar talabi qo'yish mexanizmi bo'lmagan holda oshkor qilingan savdo sirlari",
        "Raqobat ustunligining qaytarib bo'lmaydigan yo'qolishi — ma'lumot ulashilgandan keyin uni yashirib bo'lmaydi",
        "Imzolashdan oldin moliyaviy ko'rsatkichlar yoki mahsulot yo'l xaritasi bilan tanishgan investorlar yoki sheriklar ularni maxfiy saqlash majburiyatiga ega emas",
      ],
    },
  },

  "commercial-lease": {
    en: {
      forWho: [
        "Businesses renting office, retail, or warehouse space in Uzbekistan",
        "Landlords leasing commercial property who want enforceable terms",
        "Startups signing their first commercial premises agreement",
        "Foreign companies establishing a local office who are unfamiliar with Uzbek lease law",
      ],
      whyNeeded:
        "Informal and verbal lease arrangements are extremely common in Uzbekistan — but they offer no protection when disputes arise. Without a written contract, a landlord can raise rent without notice, refuse to return the deposit, or demand the tenant vacate immediately with no legal recourse. This bilingual agreement sets enforceable terms under the Uzbek Civil Code for both sides: rent escalation conditions, deposit return rules, permitted uses, maintenance responsibilities, early termination, and handover procedures. It covers office, retail, and warehouse use cases, and includes addendum templates for extensions and modifications.",
      atRisk: [
        "Unilateral rent increases with no contractual cap and no notice period",
        "Eviction without legal notice or compensation for disruption to the business",
        "Deposit lost with no written grounds to demand its return",
        "Tenant liable for improvements made to the property with no agreed terms for compensation at exit",
        "Disputes over who is responsible for maintenance and repairs with no written allocation",
      ],
    },
    ru: {
      forWho: [
        "Компании, арендующие офисные, торговые или складские помещения в Узбекистане",
        "Арендодатели коммерческой недвижимости, желающие закрепить обязывающие условия",
        "Стартапы, подписывающие первый договор аренды коммерческого помещения",
        "Иностранные компании, открывающие местный офис и незнакомые с узбекским законодательством об аренде",
      ],
      whyNeeded:
        "Неформальные и устные договорённости об аренде чрезвычайно распространены в Узбекистане — однако они не обеспечивают никакой защиты при возникновении споров. Без письменного договора арендодатель может повысить арендную плату без предупреждения, отказаться вернуть залог или потребовать немедленного освобождения помещения без какой-либо правовой защиты. Данное двуязычное соглашение устанавливает обязывающие условия по ГК Узбекистана для обеих сторон: условия повышения арендной платы, правила возврата залога, допустимые виды использования, ответственность за техническое обслуживание, досрочное расторжение и процедуры передачи помещения. Оно охватывает сценарии использования офиса, торговых помещений и складов, а также включает шаблоны дополнительных соглашений о продлении и изменении условий.",
      atRisk: [
        "Одностороннее повышение арендной платы без договорного ограничения и без уведомления",
        "Выселение без юридического уведомления и компенсации ущерба для бизнеса",
        "Утрата залога без письменных оснований для требования его возврата",
        "Арендатор несёт ответственность за улучшения помещения без согласованных условий компенсации при выходе",
        "Споры о распределении ответственности за техническое обслуживание и ремонт без письменного разграничения",
      ],
    },
    uz: {
      forWho: [
        "O'zbekistonda ofis, savdo yoki ombor maydonlarini ijaraga olayotgan korxonalar",
        "Majburiy shartlarni mustahkamlamoqchi bo'lgan tijorat ko'chmas mulkini ijaraga beruvchilar",
        "Birinchi tijorat binolari shartnomasini imzolayotgan startaplar",
        "O'zbekiston ijara qonunchiligidan bexabar mahalliy ofis ochayotgan chet el kompaniyalari",
      ],
      whyNeeded:
        "Norasmiy va og'zaki ijara kelishuvlari O'zbekistonda juda keng tarqalgan — lekin nizolar paydo bo'lganda ular hech qanday himoya bermaydi. Yozma shartnomasisiz ijaraga beruvchi oldindan xabarsiz ijara narxini oshirishi, depozitni qaytarishdan bosh tortishi yoki hech qanday huquqiy himoyasiz ijarachidan darhol ko'chib ketishni talab qilishi mumkin. Ushbu ikki tilli shartnoma O'zbekiston Fuqarolik kodeksi asosida ikkala tomon uchun majburiy shartlarni belgilaydi: ijara narxini oshirish shartlari, depozit qaytarish qoidalari, ruxsat etilgan foydalanish turlari, texnik xizmat ko'rsatish mas'uliyati, muddatidan oldin bekor qilish va topshirish tartiblari. U ofis, savdo va ombor foydalanish holatlarini qamrab oladi va uzaytirish hamda o'zgartirish uchun qo'shimcha shartnoma shablonlarini o'z ichiga oladi.",
      atRisk: [
        "Shartnomaviy chegara va xabarnoma muddatisiz bir tomonlama ijara narxini oshirish",
        "Biznesga yetkazilgan zarar uchun huquqiy xabarnoma yoki kompensatsiyasiz chiqarib yuborish",
        "Qaytarish talabini qo'yish uchun yozma asos bo'lmagan holda depozitning yo'qolishi",
        "Ijarachi chiqishda kompensatsiya uchun kelishilgan shartlarsiz mulkka qilingan yaxshilanishlar uchun javobgar",
        "Yozma taqsimlashsiz texnik xizmat ko'rsatish va ta'mirlash uchun kim javobgar ekanligi bo'yicha nizolar",
      ],
    },
  },

  "employment-contract": {
    en: {
      forWho: [
        "Companies hiring their first employees in Uzbekistan",
        "HR managers standardising contract templates across a growing team",
        "Foreign companies engaging local staff who may be unfamiliar with Uzbek labour law requirements",
        "Businesses converting informal work arrangements into legally compliant employment",
      ],
      whyNeeded:
        "The Uzbekistan Labour Code mandates written employment contracts with specific clauses covering working hours, probation period, pay structure, leave entitlements, and termination conditions. Contracts that omit required clauses are treated as non-compliant by the labour inspectorate and create legal exposure in disputes. Beyond basic compliance, a well-structured contract protects the employer's confidential information and intellectual property — any software, designs, processes, or client relationships developed during employment. The pack includes a standard open-ended contract, a fixed-term variant, and a probation addendum.",
      atRisk: [
        "Labour inspectorate fines for non-compliant or missing employment contracts",
        "Employee successfully claims benefits or rights not explicitly excluded in the contract",
        "Wrongful dismissal claim with no documented performance or misconduct basis",
        "Intellectual property created by the employee during work belongs to them, not the company, without a proper assignment clause",
        "Confidential client or business information freely used by a departing employee with no contractual restriction",
      ],
    },
    ru: {
      forWho: [
        "Компании, нанимающие первых сотрудников в Узбекистане",
        "HR-менеджеры, стандартизирующие договорные шаблоны в растущей команде",
        "Иностранные компании, нанимающие местных сотрудников и незнакомые с требованиями узбекского трудового законодательства",
        "Предприятия, переводящие неформальные рабочие отношения в юридически соответствующее трудоустройство",
      ],
      whyNeeded:
        "Трудовой кодекс Узбекистана обязывает заключать письменные трудовые договоры с конкретными положениями о рабочем времени, испытательном сроке, структуре оплаты, отпускных правах и условиях расторжения. Договоры, в которых отсутствуют обязательные пункты, считаются несоответствующими требованиям трудовой инспекции и создают правовую уязвимость при спорах. Помимо базового соответствия, грамотно составленный договор защищает конфиденциальную информацию и интеллектуальную собственность работодателя — любое программное обеспечение, разработки, процессы или клиентские отношения, созданные в период работы. Пакет включает стандартный бессрочный договор, версию на фиксированный срок и дополнение об испытательном сроке.",
      atRisk: [
        "Штрафы трудовой инспекции за несоответствующие требованиям или отсутствующие трудовые договоры",
        "Сотрудник успешно претендует на льготы или права, прямо не исключённые в договоре",
        "Иск о незаконном увольнении без документально подтверждённых оснований — нарушения трудовой дисциплины или низкой эффективности",
        "Интеллектуальная собственность, созданная сотрудником в рабочее время, принадлежит ему, а не компании — при отсутствии надлежащего условия об уступке прав",
        "Конфиденциальная информация о клиентах или бизнесе свободно используется уволившимся сотрудником без договорных ограничений",
      ],
    },
    uz: {
      forWho: [
        "O'zbekistonda birinchi xodimlarni yollayotgan kompaniyalar",
        "O'sayotgan jamoada shartnoma shablonlarini standartlashtiruvchi HR menejerlar",
        "O'zbekiston mehnat qonunchiligining talablaridan bexabar bo'lishi mumkin bo'lgan mahalliy xodimlarni jalb qilayotgan chet el kompaniyalari",
        "Norasmiy ish munosabatlarini huquqiy jihatdan muvofiq mehnatga qabul qilishga o'tkazayotgan korxonalar",
      ],
      whyNeeded:
        "O'zbekiston Mehnat kodeksi ish vaqti, sinov muddati, ish haqi tarkibi, ta'til huquqlari va tugatish shartlarini qamrab oluvchi aniq bandlar bilan yozma mehnat shartnomalari tuzishni majburiy qiladi. Majburiy bandlari tushirib qoldirilgan shartnomalar mehnat inspeksiyasi tomonidan mos kelmaydigan sifatida baholanadi va nizolarda huquqiy zaiflikni keltirib chiqaradi. Asosiy muvofiqlikdan tashqari, to'g'ri tuzilgan shartnoma ish beruvchining maxfiy ma'lumotlari va intellektual mulkini — ish davomida yaratilgan har qanday dasturiy ta'minot, loyihalar, jarayonlar yoki mijozlar munosabatlarini — himoya qiladi. To'plam standart muddatsiz shartnomani, muddatli variantni va sinov muddati qo'shimchasini o'z ichiga oladi.",
      atRisk: [
        "Mos kelmaydigan yoki yo'q mehnat shartnomalar uchun mehnat inspeksiyasi jarimaları",
        "Xodim shartnomada aniq istisno qilinmagan imtiyozlar yoki huquqlarni muvaffaqiyatli talab qiladi",
        "Hujjatlashtirilgan ko'rsatkich yoki intizom asosisiz nohaq ishdan bo'shatish da'vosi",
        "Xodim tomonidan ish vaqtida yaratilgan intellektual mulk tegishli topshirish bandi bo'lmasa kompaniyaga emas, balki unga tegishli",
        "Shartnomaviy cheklovsiz ketayotgan xodim mijozlar yoki biznes haqidagi maxfiy ma'lumotlardan erkin foydalanadi",
      ],
    },
  },

  "hr-policy-manual": {
    en: {
      forWho: [
        "Companies scaling past 10 employees who need documented workplace rules",
        "HR departments replacing inconsistent ad-hoc decisions with enforceable policy",
        "Businesses preparing for investor due diligence or management audits",
        "International companies establishing a Uzbekistan operation who need local-law-aligned HR standards",
        "Founders who want to build a professional, accountable workplace culture from the start",
      ],
      whyNeeded:
        "When workplace rules exist only in managers' heads, every HR decision becomes a negotiation — and inconsistencies create legal exposure. A company with 15 employees and no documented disciplinary procedure cannot legally dismiss an employee for misconduct without exposing itself to an unfair dismissal claim. Similarly, undocumented leave policies, promotion criteria, or code of conduct standards make it almost impossible to defend employment decisions in front of a labour inspector or court. This manual provides 12 policy modules covering the full employment lifecycle, all aligned to the Uzbekistan Labour Code and written to be enforceable — not just descriptive.",
      atRisk: [
        "Discrimination or unfair treatment claims from inconsistent HR decisions made by different managers",
        "Dismissals legally challenged because no documented disciplinary process was followed",
        "Labour inspectorate violations for failing to maintain required workplace policies under Uzbek law",
        "Failed HR audits during M&A due diligence, reducing company valuation or blocking a deal",
        "Cultural deterioration as the company grows — without clear rules, favouritism and inconsistency become the norm",
      ],
    },
    ru: {
      forWho: [
        "Компании, выросшие свыше 10 сотрудников и нуждающиеся в задокументированных правилах работы",
        "HR-отделы, заменяющие непоследовательные ситуативные решения обязывающими политиками",
        "Предприятия, готовящиеся к инвестиционному аудиту или проверкам менеджмента",
        "Международные компании, открывающие операцию в Узбекистане и нуждающиеся в HR-стандартах по местному законодательству",
        "Основатели, стремящиеся с самого начала выстроить профессиональную корпоративную культуру",
      ],
      whyNeeded:
        "Когда правила работы существуют лишь в головах руководителей, каждое кадровое решение превращается в переговоры — а непоследовательность создаёт правовые риски. Компания с 15 сотрудниками и без задокументированной дисциплинарной процедуры не может законно уволить сотрудника за нарушение трудовой дисциплины, не рискуя получить иск о незаконном увольнении. Аналогично, незадокументированные политики отпусков, критерии продвижения или стандарты поведения делают практически невозможной защиту кадровых решений перед трудовым инспектором или судом. Данное руководство включает 12 политических модулей, охватывающих весь жизненный цикл трудоустройства, приведённых в соответствие с Трудовым кодексом Узбекистана и написанных для реального применения — а не просто в качестве декларации.",
      atRisk: [
        "Иски о дискриминации или несправедливом обращении из-за непоследовательных кадровых решений разных руководителей",
        "Оспаривание увольнений в судебном порядке из-за несоблюдения задокументированной дисциплинарной процедуры",
        "Нарушения требований трудовой инспекции за несоблюдение обязательных правил охраны труда по узбекскому законодательству",
        "Провал HR-аудита при инвестиционном due diligence — снижение стоимости компании или блокирование сделки",
        "Культурная деградация по мере роста компании — без чётких правил фаворитизм и непоследовательность становятся нормой",
      ],
    },
    uz: {
      forWho: [
        "Hujjatlashtirilgan ish joyi qoidalariga muhtoj 10 xodimdan oshib ketgan kompaniyalar",
        "Nomuvofiq vaziyatga qarab qabul qilingan qarorlarni majburiy siyosatlar bilan almashtirayotgan HR bo'limlari",
        "Investor tekshiruviga yoki boshqaruv auditlariga tayyorlanayotgan korxonalar",
        "Mahalliy qonunchilikka muvofiq HR standartlariga muhtoj O'zbekistonda faoliyat boshlayotgan xalqaro kompaniyalar",
        "Boshidanoq professional, mas'uliyatli ish joyi madaniyatini qurmoqchi bo'lgan ta'sischilar",
      ],
      whyNeeded:
        "Ish joyi qoidalari faqat rahbarlar ongida mavjud bo'lsa, har bir HR qarori muzokaraga aylanadi — va nomuvofiqlik huquqiy xavflarni keltirib chiqaradi. 15 xodimli va hujjatlashtirilgan intizom tartibi bo'lmagan kompaniya nohaq ishdan bo'shatish da'vosi xavfisiz xodimni intizom buzganlik uchun qonuniy ravishda ishdan bo'sha olmaydi. Xuddi shunday, hujjatlashtirilmagan ta'til siyosatlari, ko'tarish mezonlari yoki xulq-atvor standartlari mehnat inspektori yoki sudda kadrlar qarorlarini himoya qilishni deyarli imkonsiz qiladi. Ushbu qo'llanma O'zbekiston Mehnat kodeksiga muvofiq keltirilgan va shunchaki tavsifiy emas — amalda qo'llash uchun yozilgan to'liq mehnat davri siklini qamrab oluvchi 12 siyosat modulini o'z ichiga oladi.",
      atRisk: [
        "Turli rahbarlar tomonidan qabul qilingan nomuvofiq kadrlar qarorlaridan kamsitish yoki adolatsiz muomala da'volari",
        "Hujjatlashtirilgan intizom jarayoniga rioya qilinmaganligi sababli sud orqali ishdan bo'shatishga e'tiroz",
        "O'zbekiston qonunchiligiga ko'ra majburiy ish joyi siyosatlarini saqlamaslik uchun mehnat inspeksiyasi qoidabuzarliklari",
        "M&A tekshiruvida HR auditidan o'tolmaslik — kompaniya qiymatini pasaytirish yoki bitimni bloklash",
        "Kompaniya o'sishi bilan madaniy tanazzul — aniq qoidalarsiz tanish-bilishchilik va nomuvofiqlik me'yorga aylanadi",
      ],
    },
  },

  "tax-compliance-starter": {
    en: {
      forWho: [
        "New businesses completing tax registration in Uzbekistan for the first time",
        "Accountants and finance teams unfamiliar with Uzbek-specific tax forms and deadlines",
        "Foreign companies entering the Uzbek market and setting up local tax accounts",
        "Existing businesses that have been operating informally and need to formalise their tax position",
      ],
      whyNeeded:
        "Uzbekistan's tax system operates on a specific calendar of forms, deadlines, and thresholds that differ substantially from other jurisdictions. VAT registration has its own process, the CIT return has specific schedules, and the compliance calendar changes annually. A business that misses a single quarterly VAT return deadline faces automatic penalties calculated from day one — regardless of whether any tax is actually owed. This pack provides the exact forms, a structured compliance calendar, and a VAT return template so your team knows what to file, when to file it, and how to avoid the most common calculation errors that trigger audits.",
      atRisk: [
        "Automatic late filing penalties calculated from the first day after a missed deadline — even on zero-tax-due returns",
        "VAT registration errors that result in the tax authority disallowing legitimate input tax credits",
        "CIT calculation mistakes that flag the return for a full audit and potential surcharges",
        "Failure to register for tax before starting operations is itself a violation with separate penalties",
        "Interest accruing daily on any underpaid tax until the balance is corrected",
      ],
    },
    ru: {
      forWho: [
        "Новые предприятия, впервые проходящие налоговую регистрацию в Узбекистане",
        "Бухгалтеры и финансовые команды, незнакомые со специфическими налоговыми формами и сроками Узбекистана",
        "Иностранные компании, выходящие на узбекский рынок и открывающие местные налоговые счета",
        "Действующие предприятия, работавшие неформально и нуждающиеся в приведении налоговой позиции в порядок",
      ],
      whyNeeded:
        "Налоговая система Узбекистана функционирует на основе специфического календаря форм, сроков и пороговых значений, существенно отличающихся от других юрисдикций. Регистрация НДС имеет собственную процедуру, декларация по КПН содержит специальные приложения, а налоговый календарь ежегодно меняется. Предприятие, пропустившее единственный срок квартального отчёта по НДС, автоматически получает штраф, рассчитываемый с первого дня — независимо от того, есть ли фактическая задолженность по налогу. Этот пакет содержит точные формы, структурированный календарь соответствия и шаблон декларации по НДС — чтобы ваша команда точно знала, что подавать, когда подавать и как избежать наиболее распространённых ошибок в расчётах, влекущих налоговые проверки.",
      atRisk: [
        "Автоматические штрафы за просрочку, начисляемые с первого дня после пропущенного срока — даже по нулевым декларациям",
        "Ошибки регистрации НДС, в результате которых налоговый орган отказывает в законных вычетах входного НДС",
        "Ошибки в расчёте КПН, помечающие декларацию для полной налоговой проверки с возможными доначислениями",
        "Начало деятельности без налоговой регистрации само по себе является нарушением с отдельными штрафными санкциями",
        "Ежедневно начисляемые проценты на любую недоплаченную сумму налога до исправления",
      ],
    },
    uz: {
      forWho: [
        "O'zbekistonda birinchi marta soliq ro'yxatidan o'tayotgan yangi korxonalar",
        "O'zbekistonning maxsus soliq shakllari va muddatlaridan bexabar buxgalterlar va moliya guruhlari",
        "O'zbekiston bozoriga kiruvchi va mahalliy soliq hisoblarini ochayotgan chet el kompaniyalari",
        "Norasmiy ishlagan va soliq holatini rasmiylashtirishga muhtoj amaldagi korxonalar",
      ],
      whyNeeded:
        "O'zbekiston soliq tizimi boshqa yurisdiksiyalardan sezilarli darajada farq qiladigan shakllar, muddatlar va chegaralar bo'yicha maxsus kalendar asosida ishlaydi. QQS ro'yxatdan o'tishining o'z jarayoni mavjud, KPD deklaratsiyasida maxsus jadvallar bor va muvofiqlik kalendari har yili o'zgaradi. Bir marta choraklik QQS hisoboti muddatini o'tkazib yuborgan korxona birinchi kundan boshlab avtomatik jarima oladi — hech qanday soliq qarzi bo'lmasa ham. Ushbu to'plam aniq shakllarni, tuzilgan muvofiqlik kalendarini va QQS deklaratsiyasi shablonini taqdim etadi — jamoangiz nima topshirish, qachon topshirish va tekshirishlarni qo'zg'atadigan eng keng tarqalgan hisoblash xatolaridan qanday qochish kerakligini bilishi uchun.",
      atRisk: [
        "O'tkazib yuborilgan muddatdan keyingi birinchi kundan boshlab hisoblanadigan avtomatik kechikish jarimaları — nol soliqli deklaratsiyalarda ham",
        "Soliq organining qonuniy kirish QQS kreditlarini rад этиши натижасини берадиган QQS ro'yxatdan o'tish xatolari",
        "KPD hisoblash xatolari deklaratsiyani to'liq tekshiruv va mumkin bo'lgan qo'shimcha hisob-kitoblar uchun belgilaydi",
        "Faoliyatni boshlashdan oldin soliq ro'yxatidan o'tmaslik o'zi alohida jarimalar bilan qoidabuzarlik hisoblanadi",
        "To'ldirilgunga qadar har qanday kam to'langan soliq summasiga har kuni to'planadigan foizlar",
      ],
    },
  },

  "transfer-pricing": {
    en: {
      forWho: [
        "Multinational groups with Uzbek subsidiaries or branches transacting with related entities",
        "Companies with intercompany loans, royalties, management fees, or service arrangements",
        "Tax directors and CFOs managing cross-border compliance across Central Asian operations",
        "Private equity and M&A teams preparing a Uzbek entity for sale or restructuring",
      ],
      whyNeeded:
        "Uzbekistan's tax code requires companies to document related-party transactions that exceed statutory thresholds, following OECD transfer pricing methodology. Without a master file and local file, the State Tax Committee has the authority to re-price any intercompany transaction using its own comparables — which almost always results in a higher taxable income and a surcharge. Beyond the direct tax adjustment, the penalties for undocumented transactions are applied on top of any tax reassessment. This pack provides both the master file and local file in the OECD-recommended format, a benchmarking guide for identifying comparable transactions, and a policy statement that can be updated annually.",
      atRisk: [
        "The tax authority re-prices intercompany transactions unilaterally, potentially adding 20–40% to the effective tax rate",
        "Separate penalties for failing to maintain transfer pricing documentation, applied on top of any tax adjustment",
        "Tax reassessment for multiple prior years if documentation cannot be produced during an audit",
        "Investors and acquirers treat undocumented TP exposure as a material deal risk, reducing valuation",
        "Management fees and royalties paid to foreign related parties are entirely disallowed without proper documentation",
      ],
    },
    ru: {
      forWho: [
        "Международные группы компаний с узбекскими дочерними структурами или филиалами, совершающими сделки со связанными лицами",
        "Компании с внутрифирменными займами, роялти, управленческими вознаграждениями или сервисными соглашениями",
        "Налоговые директора и CFO, управляющие трансграничным соответствием в операциях по Центральной Азии",
        "Команды прямых инвестиций и M&A, готовящие узбекское юридическое лицо к продаже или реструктуризации",
      ],
      whyNeeded:
        "Налоговый кодекс Узбекистана обязывает компании документировать сделки со связанными сторонами, превышающие законодательные пороговые значения, следуя методологии ОЭСР по трансфертному ценообразованию. Без мастер-файла и локального файла Государственный налоговый комитет вправе пересмотреть цену любой внутрифирменной операции с использованием собственных сопоставимых данных — что практически всегда влечёт увеличение налогооблагаемого дохода и начисление доплат. Помимо прямой корректировки налога, за неподтверждённые документами операции применяются отдельные штрафы поверх любого доначисления. Данный пакет включает мастер-файл и локальный файл в рекомендованном ОЭСР формате, руководство по бенчмаркингу для определения сопоставимых сделок и заявление о политике, допускающее ежегодное обновление.",
      atRisk: [
        "Налоговый орган в одностороннем порядке пересматривает цены внутрифирменных операций, потенциально увеличивая эффективную ставку налога на 20–40%",
        "Отдельные штрафы за отсутствие документации по трансфертному ценообразованию, начисляемые поверх любой корректировки налога",
        "Доначисление налога за несколько предыдущих лет, если документация не может быть представлена в ходе проверки",
        "Инвесторы и покупатели рассматривают неподтверждённые риски трансфертного ценообразования как существенный риск сделки, снижающий оценку стоимости",
        "Управленческие вознаграждения и роялти, выплаченные иностранным связанным лицам, полностью не признаются без надлежащей документации",
      ],
    },
    uz: {
      forWho: [
        "Bog'liq yuridik shaxslar bilan bitim tuzuvchi O'zbekiston sho'ba korxonalari yoki filiallari bo'lgan xalqaro guruhlar",
        "Kompaniyalar aro kreditlar, royaltilar, boshqaruv to'lovlari yoki xizmat ko'rsatish kelishuvchlari bor kompaniyalar",
        "Markaziy Osiyo bo'yicha chegaradan o'tuvchi muvofiqlikni boshqarayotgan soliq direktorlari va moliya direktorlari",
        "O'zbekiston yuridik shaxsini sotish yoki qayta tuzilish uchun tayyorlayotgan to'g'ridan-to'g'ri investitsiya va M&A guruhlari",
      ],
      whyNeeded:
        "O'zbekiston Soliq kodeksi kompaniyalardan OECD transfer narxlash metodologiyasiga amal qilgan holda qonuniy chegaradan oshib ketuvchi bog'liq tomonlar bitimlarini hujjatlashtirish talab qiladi. Master fayl va mahalliy fayl bo'lmasa, Davlat soliq qo'mitasi o'z qiyosiy ma'lumotlaridan foydalanib istalgan kompaniyalar aro bitim narxini qayta belgilash vakolatiga ega — bu deyarli har doim soliq solinadigan daromadning oshishiga va qo'shimcha to'lovlarga olib keladi. To'g'ridan-to'g'ri soliq tuzatishidan tashqari, hujjatlanmagan bitimlar uchun jarimalar har qanday soliq qayta baholashiga qo'shimcha tarzda qo'llaniladi. Ushbu to'plam OECD tavsiya etgan formatda master fayl va mahalliy faylni, qiyosiy bitimlarni aniqlash uchun benchmark qo'llanmasini va har yili yangilanishi mumkin bo'lgan siyosat bayonotini o'z ichiga oladi.",
      atRisk: [
        "Soliq organi kompaniyalar aro bitim narxlarini bir tomonlama qayta belgilaydi, samarali soliq stavkasini potentsial 20-40%ga oshiradi",
        "Har qanday soliq tuzatishiga qo'shimcha tarzda qo'llaniladigan transfer narxlash hujjatlarini saqlamas lik uchun alohida jarimalar",
        "Tekshiruv paytida hujjatlar taqdim etila olmasa bir necha oldingi yillar uchun soliqni qayta hisoblash",
        "Investorlar va sotib oluvchilar hujjatlanmagan TP ta'sirini muhim bitim xavfi sifatida ko'rib, qiymatni kamaytiradi",
        "Tegishli hujjatlarsiz chet el bog'liq tomonlariga to'langan boshqaruv to'lovlari va royaltilar butunlay rad etiladi",
      ],
    },
  },

  "work-permit-pack": {
    en: {
      forWho: [
        "Companies in Uzbekistan hiring foreign nationals for the first time",
        "HR teams managing ongoing work permit applications and annual renewals",
        "Foreign employees who need to understand the permit process and their required documents",
        "Companies with expiring permits who need the extension documentation package",
      ],
      whyNeeded:
        "Work permit applications in Uzbekistan require the employer to produce letters, supporting documents, and forms in specific formats set by the Ministry of Employment. Any document that is missing, incorrectly formatted, or not notarised as required causes the entire application to be rejected — and the re-application window resets from the beginning. During re-application, the employee has no legal authorisation to work in Uzbekistan, which means project-critical personnel may need to leave the country. This pack includes every employer document required, a precise checklist, extension instructions, and templates for the accompanying employer letters.",
      atRisk: [
        "Employee deported or required to leave Uzbekistan while a rejected application is re-processed",
        "Fines and sanctions for the employer for each day a foreign national works without a valid permit",
        "Project delays and costs from losing a key employee mid-engagement due to permit failure",
        "Permit rejections create a record that can complicate future applications for the same employee",
        "Employees working on an expired or rejected permit expose the company to serious regulatory action",
      ],
    },
    ru: {
      forWho: [
        "Компании в Узбекистане, впервые нанимающие иностранных граждан",
        "HR-команды, ведущие текущее оформление разрешений на работу и ежегодные продления",
        "Иностранные сотрудники, которым необходимо разобраться в процедуре оформления и требуемых документах",
        "Компании с истекающими разрешениями, которым нужен пакет документов для продления",
      ],
      whyNeeded:
        "Заявления на разрешение на работу в Узбекистане обязывают работодателя предоставить письма, сопроводительные документы и формы в специфических форматах, установленных Министерством занятости. Любой отсутствующий, неправильно оформленный или ненадлежащим образом нотариально заверенный документ влечёт полный отказ в рассмотрении заявления — при этом срок повторной подачи обнуляется. В период повторного оформления сотрудник не имеет законного права работать в Узбекистане, что может вынудить критически важных специалистов покинуть страну. Пакет включает все требуемые документы работодателя, точный чеклист, инструкции по продлению и шаблоны сопроводительных писем.",
      atRisk: [
        "Сотрудник депортирован или вынужден покинуть Узбекистан на период повторного оформления отклонённого заявления",
        "Штрафы и санкции для работодателя за каждый день работы иностранного гражданина без действующего разрешения",
        "Задержки и расходы по проекту в результате потери ключевого сотрудника в середине выполнения работы из-за проблем с разрешением",
        "Отказы в выдаче разрешений формируют запись, способную осложнить будущие заявления того же сотрудника",
        "Сотрудники, работающие с истёкшим или отклонённым разрешением, подвергают компанию серьёзным регуляторным санкциям",
      ],
    },
    uz: {
      forWho: [
        "O'zbekistonda birinchi marta chet el fuqarolarini yollayotgan kompaniyalar",
        "Ish ruxsatnomalarining joriy arizalari va yillik uzaytirish jarayonlarini boshqarayotgan HR guruhlari",
        "Ruxsatnoma jarayonini va kerakli hujjatlarni tushunishga muhtoj chet el xodimlari",
        "Muddati tugayotgan ruxsatnomalari bo'lgan va uzaytirish hujjatlari to'plamiga muhtoj kompaniyalar",
      ],
      whyNeeded:
        "O'zbekistonda ish ruxsatnomasi uchun arizalar ish beruvchidan Bandlik vazirligi belgilagan maxsus formatlarda maktublar, qo'shimcha hujjatlar va shakllarni taqdim etishni talab qiladi. Har qanday etishmayotgan, noto'g'ri rasmiylashtirilgan yoki talab qilinganidek notarial tasdiqlangan bo'lmagan hujjat arizaning to'liq rad etilishiga olib keladi — va qayta topshirish muddati boshidan boshlanadi. Qayta ariza berish davrida xodim O'zbekistonda ishlashga qonuniy ruxsatga ega emas, bu loyiha uchun muhim xodimlar mamlakatni tark etishiga olib kelishi mumkin. To'plam talab qilingan barcha ish beruvchi hujjatlarni, aniq nazorat ro'yxatini, uzaytirish ko'rsatmalarini va hamroh ish beruvchi maktublari shablonlarini o'z ichiga oladi.",
      atRisk: [
        "Xodim rad etilgan ariza qayta ko'rib chiqilayotgan vaqtda O'zbekistonni tark etishga deportatsiya qilinadi yoki majburlashadi",
        "Amaldagi ruxsatnomasiz ishlaydigan chet el fuqarosi uchun har kun uchun ish beruvchiga jarimalar va sanksiyalar",
        "Ruxsatnoma bilan bog'liq muammo tufayli ish o'rtasida asosiy xodimni yo'qotishdan kelib chiqadigan loyiha kechikishlari va xarajatlar",
        "Ruxsatnoma rad etishlari kelajakda bir xil xodimning arizalarini murakkablashtirishi mumkin bo'lgan yozuv yaratadi",
        "Muddati o'tgan yoki rad etilgan ruxsatnoma bilan ishlaydigan xodimlar kompaniyani jiddiy tartibga soluvchi choralariga duchor qiladi",
      ],
    },
  },

  "sez-entry-pack": {
    en: {
      forWho: [
        "Manufacturers and exporters evaluating Uzbekistan's Special Economic Zones for tax incentives",
        "Foreign investors comparing SEZ entry against standard company registration costs and timelines",
        "Companies in eligible industries seeking customs exemptions and reduced corporate tax rates",
        "Businesses already registered in Uzbekistan who want to restructure into a SEZ entity",
      ],
      whyNeeded:
        "SEZ applications are reviewed by a managing body that applies specific criteria to investment plans, financial projections, and the proposed production activity. Applications that don't follow the required format, use non-standard financial assumptions, or fail to demonstrate how the activity fits within the zone's mandate are rejected or returned for revision — delaying access to the tax holiday, sometimes by six months or more. The regulatory framework for each SEZ also varies, and terms that apply in one zone may not apply in another. This pack includes templates calibrated to Uzbek SEZ requirements, a financial projections model, and an overview of the regulatory landscape across the main zones.",
      atRisk: [
        "Application rejection meaning the company operates at standard rates while competitors inside the zone benefit from tax holidays",
        "Time-to-market disadvantage — delays of 3–6 months from a poorly prepared application",
        "Approved on less favourable terms than would have been available with a stronger application",
        "Failure to secure customs duty exemptions available to SEZ residents, increasing import costs",
        "Operating outside the SEZ paying full CIT when reduced or zero rates were available",
      ],
    },
    ru: {
      forWho: [
        "Производители и экспортёры, оценивающие специальные экономические зоны Узбекистана для получения налоговых льгот",
        "Иностранные инвесторы, сравнивающие вход в СЭЗ со стандартной регистрацией компании по затратам и срокам",
        "Компании в соответствующих отраслях, претендующие на таможенные освобождения и сниженные ставки КПН",
        "Предприятия, уже зарегистрированные в Узбекистане и желающие реструктурироваться в резидентов СЭЗ",
      ],
      whyNeeded:
        "Заявки в СЭЗ рассматриваются управляющим органом, применяющим специфические критерии к инвестиционным планам, финансовым прогнозам и предполагаемой производственной деятельности. Заявки, не соответствующие требуемому формату, использующие нестандартные финансовые допущения или не демонстрирующие соответствие деятельности мандату зоны, отклоняются или возвращаются на доработку — откладывая доступ к налоговым каникулам порой на шесть и более месяцев. Регуляторная база для каждой СЭЗ также различается, и условия одной зоны могут не применяться в другой. Пакет включает шаблоны, откалиброванные под требования узбекских СЭЗ, модель финансовых прогнозов и обзор регуляторной среды основных зон.",
      atRisk: [
        "Отказ в заявке означает, что компания работает по стандартным ставкам, пока конкуренты внутри зоны пользуются налоговыми каникулами",
        "Потеря конкурентного преимущества по срокам — задержки от 3 до 6 месяцев из-за плохо подготовленной заявки",
        "Одобрение на менее выгодных условиях, чем были бы доступны при более сильной заявке",
        "Невозможность воспользоваться таможенными освобождениями для резидентов СЭЗ, увеличивающая импортные расходы",
        "Работа вне СЭЗ с уплатой полного КПН при наличии доступных сниженных или нулевых ставок",
      ],
    },
    uz: {
      forWho: [
        "Soliq imtiyozlari uchun O'zbekistonning maxsus iqtisodiy zonalarini baholayotgan ishlab chiqaruvchilar va eksporterlar",
        "EIH kirishini standart kompaniya ro'yxatdan o'tkazish xarajatlari va muddatlari bilan taqqoslayotgan chet el investorlari",
        "Bojxona imtiyozlari va kamaytirilgan korporativ soliq stavkalarini izlayotgan mos soha kompaniyalari",
        "O'zbekistonda allaqachon ro'yxatdan o'tgan va EIH yuridik shaxsiga qayta tuzilishni istayotgan korxonalar",
      ],
      whyNeeded:
        "EIH arizalari investitsiya rejalari, moliyaviy prognozlar va taklif qilingan ishlab chiqarish faoliyatiga maxsus mezonlarni qo'llaydigan boshqaruv organi tomonidan ko'rib chiqiladi. Talab qilingan formatga mos kelmaydigan, nostandart moliyaviy taxminlardan foydalanadigan yoki faoliyatning zona mandatiga qanday mos kelishini ko'rsata olmaydigan arizalar rad etiladi yoki qayta ishlash uchun qaytariladi — ba'zida soliq ta'tillaridan foydalanishni olti oy yoki undan ko'proq vaqtga kechiktiradi. Har bir EIH uchun tartibga solish bazasi ham farq qiladi va bir zonada qo'llaniladigan shartlar boshqasida qo'llanilmasligi mumkin. To'plam O'zbekiston EIH talablariga moslashtirilgan shablonlarni, moliyaviy prognozlar modelini va asosiy zonalar bo'yicha tartibga solish muhitining sharhini o'z ichiga oladi.",
      atRisk: [
        "Ariza rad etilishi kompaniya raqiblari zona ichida soliq ta'tillaridan foydalanayotgan vaqtda standart stavkalarda ishlaydi degani",
        "Bozorga kirish vaqti ustunligining yo'qolishi — yomon tayyorlangan arizadan 3-6 oylik kechikish",
        "Kuchliroq ariza bilan mavjud bo'lar edi dan kam foydali shartlarda tasdiqlash",
        "EIH rezidentlariga mavjud bojxona to'lovlaridan ozod qilishdan foydalana olmaslik, import xarajatlarini oshiradi",
        "Kamaytirilgan yoki nol stavkalar mavjud bo'lgan paytda to'liq KPD to'lab EIHdan tashqarida ishlash",
      ],
    },
  },

  "due-diligence-pack": {
    en: {
      forWho: [
        "Companies preparing for a fundraising round, acquisition, or merger",
        "Founders who expect investors or acquirers to conduct formal due diligence",
        "Legal counsel and M&A advisors organising the documentation process for a transaction",
        "Private equity and venture capital portfolio companies being prepared for exit",
      ],
      whyNeeded:
        "Institutional investors and corporate acquirers run structured due diligence processes with document request lists that can exceed 200 items across legal, financial, tax, HR, IP, and regulatory categories. Companies that have not prepared their data room in advance spend weeks scrambling to locate documents, fill gaps, and respond to requests — often revealing corporate hygiene issues that reduce valuation or give the counterparty grounds to negotiate price down. A well-organised data room, pre-populated with the right documents, signals that the company is well-managed and reduces the risk of discovery issues derailing the deal. This pack provides the complete DD request list, a data room index, a red flag checklist to identify gaps before the investor does, and a legal opinion template.",
      atRisk: [
        "Deal delays of weeks or months caused by document gaps that surface during diligence — consuming runway and management attention",
        "Valuation discounts negotiated by the investor or acquirer when documentation reveals compliance gaps or unresolved risks",
        "Deal failure when critical documents — a shareholder register, a key contract, a corporate resolution — cannot be produced",
        "Investors lose confidence in management quality when the data room is disorganised, affecting not just price but the likelihood of closing",
        "Post-closing indemnity claims against the founders for issues that were not disclosed or discoverable during diligence",
      ],
    },
    ru: {
      forWho: [
        "Компании, готовящиеся к раунду привлечения инвестиций, поглощению или слиянию",
        "Учредители, ожидающие проведения инвесторами или покупателями формального due diligence",
        "Юристы и M&A-советники, организующие документационный процесс для сделки",
        "Портфельные компании прямых и венчурных инвестиций, готовящиеся к выходу",
      ],
      whyNeeded:
        "Институциональные инвесторы и корпоративные покупатели проводят структурированные процессы due diligence с запросными листами, которые могут содержать более 200 позиций по юридическим, финансовым, налоговым, HR, IP и регуляторным категориям. Компании, не подготовившие data room заблаговременно, тратят недели на поиск документов, устранение пробелов и ответы на запросы — нередко обнаруживая проблемы корпоративной гигиены, снижающие оценку стоимости или дающие контрагенту основания для торга по цене. Хорошо организованный data room, предварительно укомплектованный нужными документами, сигнализирует об эффективности управления и снижает риск срыва сделки из-за выявленных нарушений. Пакет включает полный запросный лист DD, индекс data room, чеклист красных флагов для выявления пробелов до инвестора и шаблон юридического заключения.",
      atRisk: [
        "Задержки сделки на недели или месяцы из-за пробелов в документах, выявленных в ходе due diligence — с потерей runway и отвлечением внимания менеджмента",
        "Скидки к оценке стоимости, согласованные инвестором или покупателем, когда документация выявляет compliance-нарушения или неразрешённые риски",
        "Срыв сделки, когда критически важные документы — реестр акционеров, ключевой договор, корпоративное решение — не могут быть представлены",
        "Инвесторы теряют доверие к качеству управления при дезорганизованном data room — это влияет не только на цену, но и на вероятность закрытия сделки",
        "Постзакрытые требования о возмещении ущерба к учредителям за вопросы, не раскрытые или не обнаруживаемые в ходе due diligence",
      ],
    },
    uz: {
      forWho: [
        "Moliyalashtirish raundi, qo'shib olish yoki birlashish uchun tayyorlanayotgan kompaniyalar",
        "Investorlar yoki sotib oluvchilar tomonidan rasmiy tekshiruv o'tkazilishini kutayotgan ta'sischilar",
        "Bitim uchun hujjatlashtirish jarayonini tashkil qilayotgan huquqshunoslar va M&A maslahatchilar",
        "Chiqish uchun tayyorlanayotgan to'g'ridan-to'g'ri investitsiya va venchur kapital portfel kompaniyalari",
      ],
      whyNeeded:
        "Institutsional investorlar va korporativ sotib oluvchilar huquqiy, moliyaviy, soliq, HR, IP va tartibga solish toifalariga oid 200 dan ortiq banddan iborat hujjat so'rovlari ro'yxatlari bilan tuzilgan tekshiruv jarayonlarini o'tkazadi. Ma'lumotlar xonasini oldindan tayyorlamagan kompaniyalar hujjatlarni topish, bo'shliqlarni to'ldirish va so'rovlarga javob berishda haftalar sarflaydi — ko'pincha qiymatni kamaytiruvchi yoki kontragentga narx bo'yicha savdo qilish uchun asos beruvchi korporativ gigiyena muammolarini oshkor qiladi. To'g'ri hujjatlar bilan oldindan to'ldirilgan, yaxshi tashkil etilgan ma'lumotlar xonasi kompaniyaning yaxshi boshqarilishini ko'rsatadi va aniqlangan muammolar bitimni izdan chiqarish xavfini kamaytiradi. To'plam to'liq DD so'rovlar ro'yxatini, ma'lumotlar xonasi indeksini, investor buni aniqlashdan oldin bo'shliqlarni topish uchun qizil bayroq nazorat ro'yxatini va yuridik xulosa shablonini o'z ichiga oladi.",
      atRisk: [
        "Tekshiruv davomida aniqlangan hujjat bo'shliqlari natijasida hafta yoki oylarlik bitim kechikishlari — ishlash muddatini sarflash va boshqaruv e'tiborini chalg'itish bilan",
        "Hujjatlar muvofiqlik bo'shliqlarini yoki hal etilmagan xavflarni oshkor qilganda investor yoki sotib oluvchi tomonidan muzokara qilinadigan qiymat diskontlari",
        "Muhim hujjatlar — aksiyadorlar reestri, asosiy shartnoma, korporativ qaror — taqdim etila olmagan taqdirda bitimning muvaffaqiyatsizligi",
        "Investorlar tartibsiz ma'lumotlar xonasida boshqaruv sifatiga ishonchini yo'qotadi — bu faqat narxga emas, balki yopish ehtimolligiga ham ta'sir qiladi",
        "Tekshiruv davomida oshkor qilinmagan yoki aniqlanishi mumkin bo'lmagan masalalar bo'yicha ta'sischilarga qarshi bitim yopilgandan keyin tovon to'lash talablari",
      ],
    },
  },
};
