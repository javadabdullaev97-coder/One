import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getArticleBySlug } from "./articles";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Logo-v3.png`;

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  uz: "uz_UZ",
};

const SERVICE_CATALOG = [
  { name: "Tax Consulting", description: "Tax planning, transfer pricing, tax due diligence and dispute resolution under Uzbekistan tax legislation." },
  { name: "Legal Advisory", description: "Corporate, commercial, M&A, regulatory and compliance counsel for businesses operating in Uzbekistan and Central Asia." },
  { name: "Accounting Services", description: "Full-cycle bookkeeping, financial reporting, IFRS conversion and statutory accounting in line with Uzbekistan standards." },
  { name: "HR Services", description: "Payroll, social contributions, employment contracts, expat work permits and HR policy design for Uzbekistan." },
  { name: "Funding Advisory", description: "Capital raising, investor matchmaking, financial modelling and funding strategy across Central Asia." },
  { name: "M&A Advisory", description: "Buy-side, sell-side and merger advisory including valuation, structuring and post-deal integration in Uzbekistan." },
  { name: "Due Diligence", description: "Legal, tax, financial and operational due diligence for inbound investors and acquirers." },
  { name: "Entity Management", description: "Company formation, corporate secretarial, statutory filings and ongoing entity governance services." },
  { name: "Employer of Record", description: "EOR services across Uzbekistan, Kazakhstan and Kyrgyzstan — hire, payroll and compliance without setting up a local entity." },
  { name: "Corporate Services", description: "Registered office, virtual office, nominee directors and ongoing corporate housekeeping for foreign-owned entities." },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#organization`,
  name: ORG_NAME,
  alternateName: "Advizen",
  legalName: "Advizen Consulting LLC",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, and HR services across Central Asia.",
  slogan: "A single point of contact for your entire operation.",
  url: SITE_URL,
  logo: ORG_LOGO,
  image: ORG_LOGO,
  telephone: "+998334884888",
  email: "info@advizenco.com",
  foundingDate: "2016",
  foundingLocation: {
    "@type": "Place",
    name: "Tashkent, Uzbekistan",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressRegion: "Tashkent",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2995,
    longitude: 69.2401,
  },
  areaServed: [
    { "@type": "Country", name: "Uzbekistan" },
    { "@type": "Country", name: "Kazakhstan" },
    { "@type": "Country", name: "Kyrgyzstan" },
    { "@type": "Place", name: "Central Asia" },
  ],
  knowsLanguage: ["en", "ru", "uz"],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory Services",
    itemListElement: SERVICE_CATALOG.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}#organization` },
        areaServed: { "@type": "Place", name: "Central Asia" },
      },
    })),
  },
};

function articleUrl(slug: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}/insights/${slug}`;
}

function articleImage(image: string | undefined) {
  if (!image) return `${SITE_URL}/Logo-v3.png`;
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

export function articleMetadata(slug: string, locale: string): Metadata {
  const article = getArticleBySlug(slug, locale);
  if (!article) return {};

  const url = articleUrl(slug, locale);
  const image = articleImage(article.image);
  const title = `${article.title} | ${ORG_NAME}`;
  const description = article.subtitle || article.description;

  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, articleUrl(slug, l)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": articleUrl(slug, routing.defaultLocale) },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      siteName: ORG_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function articleJsonLd(slug: string, locale: string) {
  const article = getArticleBySlug(slug, locale);
  if (!article) return null;

  const url = articleUrl(slug, locale);
  const image = articleImage(article.image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle || article.description,
    image: [image],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author || ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: locale,
    articleSection: article.category,
    keywords: [article.category, article.tag, "Uzbekistan", "Tashkent"].filter(Boolean),
  };
}

const FAQ_CONTENT: Record<string, Record<Locale, Array<{ q: string; a: string }>>> = {
  HomeFAQ: {
    en: [
      { q: "What services does Advizen Consulting offer?", a: "Advizen Consulting provides integrated advisory services including tax consulting, legal advisory, accounting, HR and payroll, funding advisory, M&A, due diligence, entity management, Employer of Record (EOR), and corporate services across Uzbekistan and Central Asia." },
      { q: "In which countries does Advizen operate?", a: "Our primary market is Uzbekistan, with active coverage of Kazakhstan and Kyrgyzstan. We support clients across Central Asia and advise foreign investors entering the region from anywhere in the world." },
      { q: "How long has Advizen Consulting been in business?", a: "Advizen Consulting was founded in 2016 in Tashkent, Uzbekistan. We have over eight years of integrated advisory experience across more than 15 industries in Central Asia." },
      { q: "Do you work with foreign companies entering Uzbekistan?", a: "Yes. A significant part of our practice serves international companies establishing a presence in Uzbekistan. We cover company formation, regulatory licensing, tax structuring, employment, and ongoing compliance." },
      { q: "What industries do you serve?", a: "We have experience across 15+ industries including energy, real estate, banking, technology, FMCG, pharmaceuticals, agriculture, hospitality, retail, construction, and logistics." },
      { q: "What is an Employer of Record and do you offer it?", a: "An EOR allows you to hire employees without setting up a local legal entity. We act as the legal employer, handling payroll, taxes, and employment law compliance in Uzbekistan, Kazakhstan, and Kyrgyzstan." },
      { q: "In which languages do you provide services?", a: "We provide services in English, Russian, and Uzbek." },
      { q: "How do I get started with Advizen Consulting?", a: "Contact us via the form, email info@advizenco.com, or WhatsApp/Telegram. We respond within one business day." },
    ],
    ru: [
      { q: "Какие услуги предоставляет Advizen Consulting?", a: "Advizen Consulting оказывает интегрированные консультационные услуги: налоговое консультирование, правовое сопровождение, бухгалтерский учёт, HR, финансовое консультирование, M&A, due diligence, корпоративные услуги и EOR в Узбекистане и Центральной Азии." },
      { q: "В каких странах работает Advizen?", a: "Основной рынок — Узбекистан, с активным покрытием Казахстана и Кыргызстана." },
      { q: "Как давно Advizen Consulting работает на рынке?", a: "Основана в 2016 году в Ташкенте. Более восьми лет интегрированного консультирования в 15+ отраслях Центральной Азии." },
      { q: "Вы работаете с иностранными компаниями, выходящими на рынок Узбекистана?", a: "Да. Мы сопровождаем регистрацию, лицензирование, налоговое структурирование, трудоустройство и текущий комплаенс." },
      { q: "Какие отрасли вы обслуживаете?", a: "Более 15 отраслей: энергетика, недвижимость, банки, технологии, FMCG, фармацевтика, сельское хозяйство, гостиничный бизнес, ритейл, строительство и логистика." },
      { q: "Что такое Employer of Record и предоставляете ли вы эту услугу?", a: "EOR позволяет нанимать сотрудников без создания местного юридического лица. Мы выступаем юридическим работодателем в Узбекистане, Казахстане и Кыргызстане." },
      { q: "На каких языках вы оказываете услуги?", a: "На русском, английском и узбекском языках." },
      { q: "Как начать работу с Advizen Consulting?", a: "Свяжитесь через форму, email info@advizenco.com или WhatsApp/Telegram. Мы отвечаем в течение одного рабочего дня." },
    ],
    uz: [
      { q: "Advizen Consulting qanday xizmatlar ko'rsatadi?", a: "Advizen Consulting soliq maslahati, huquqiy yordam, buxgalteriya, HR, moliyaviy maslahat, M&A, due diligence, korporativ xizmatlar va EOR — O'zbekiston va Markaziy Osiyoda integratsiyalashgan maslahat xizmatlarini taqdim etadi." },
      { q: "Advizen qaysi mamlakatlarda ishlaydi?", a: "Asosiy bozor — O'zbekiston, Qozog'iston va Qirg'iziston ham qamrab olingan." },
      { q: "Advizen Consulting qancha vaqtdan beri faoliyat yuritadi?", a: "2016 yilda Toshkentda tashkil etilgan. 15 dan ortiq soha bo'yicha 8+ yillik tajriba." },
      { q: "O'zbekiston bozoriga kirmoqchi bo'lgan xorijiy kompaniyalar bilan ishlaysizmi?", a: "Ha. Ro'yxatdan o'tkazish, litsenziyalash, soliq tuzilmasi, ishga qabul va joriy muvofiqlik masalalarida yordam beramiz." },
      { q: "Qaysi sohalarda xizmat ko'rsatasiz?", a: "15+ soha: energetika, ko'chmas mulk, bank, texnologiya, FMCG, farmatsevtika, qishloq xo'jaligi, mehmondo'stlik, savdo, qurilish va logistika." },
      { q: "Employer of Record nima va bu xizmatni taklif qilasizmi?", a: "EOR mahalliy yuridik shaxs tashkil etmasdan xodim yollash imkonini beradi. O'zbekiston, Qozog'iston va Qirg'izistonda qonuniy ish beruvchi sifatida xizmat ko'rsatamiz." },
      { q: "Xizmatlar qaysi tillarda ko'rsatiladi?", a: "Rus, ingliz va o'zbek tillarida." },
      { q: "Advizen Consulting bilan qanday boshlash mumkin?", a: "Aloqa formasi, info@advizenco.com yoki WhatsApp/Telegram orqali bog'laning. Bir ish kuni ichida javob beramiz." },
    ],
  },
  ExpertiseFAQ: {
    en: [
      { q: "What taxes apply to foreign businesses in Uzbekistan?", a: "Foreign businesses are generally subject to corporate income tax (15%), VAT (12%), property tax, and social contributions. Uzbekistan has tax treaties with 55+ countries that may reduce withholding rates." },
      { q: "How long does company registration take in Uzbekistan?", a: "A standard LLC can typically be registered in 3–7 business days. Foreign-owned entities may require additional steps such as capital verification and apostille of founding documents." },
      { q: "What corporate structures are available for foreign investors?", a: "Options include LLC, Joint Stock Company, branch or representative office, or a Free Economic Zone entity for eligible activities." },
      { q: "What are the payroll and social contribution requirements in Uzbekistan?", a: "Employers pay social tax at 12% of gross salary; employees pay personal income tax at 12%. Our HR team manages full payroll calculation and submission." },
      { q: "Can Advizen represent us during a tax audit or dispute?", a: "Yes. Our tax team provides full representation during inspections and supports dispute resolution with the Tax Committee of Uzbekistan, including judicial appeal." },
      { q: "How does Uzbekistan's transfer pricing regime work?", a: "Since 2020, related-party transactions above set thresholds must comply with the arm's-length principle. We assist with documentation, benchmarking, and advance pricing agreements." },
      { q: "What are the requirements for hiring foreign employees in Uzbekistan?", a: "Foreign nationals need a work permit from the Agency for External Labour Migration. Our HR team manages accreditation, permit applications, and visa coordination." },
      { q: "Does my company need IFRS accounting in Uzbekistan?", a: "IFRS is mandatory for banks, insurers, and listed companies. Most SMEs use national standards. We prepare parallel IFRS reporting for consolidation purposes alongside statutory accounts." },
    ],
    ru: [
      { q: "Какие налоги применяются к иностранным компаниям в Узбекистане?", a: "Налог на прибыль (15%), НДС (12%), налог на имущество и социальные взносы. Более 55 соглашений об избежании двойного налогообложения могут снизить ставки у источника." },
      { q: "Сколько времени занимает регистрация компании в Узбекистане?", a: "Стандартное ООО — 3–7 рабочих дней. Для компаний с иностранным участием могут потребоваться подтверждение капитала и апостиль документов." },
      { q: "Какие корпоративные структуры доступны для иностранных инвесторов?", a: "ООО, АО, филиал или представительство иностранной компании, а также структуры в свободных экономических зонах." },
      { q: "Каковы требования к расчёту зарплаты и социальным взносам?", a: "Социальный налог работодателя — 12% от ФОТ; НДФЛ — 12%. Наша HR-команда ведёт полный расчёт и перечисление." },
      { q: "Может ли Advizen представлять нас в налоговой проверке или споре?", a: "Да. Мы сопровождаем проверки, готовим ответные материалы и представляем в Налоговом комитете, включая судебное обжалование." },
      { q: "Как работает трансфертное ценообразование в Узбекистане?", a: "С 2020 года сделки со связанными сторонами выше порога должны соответствовать принципу «вытянутой руки». Помогаем с документацией и соглашениями." },
      { q: "Каковы требования к трудоустройству иностранных сотрудников?", a: "Необходимо разрешение на работу от Агентства по внешней трудовой миграции. HR-команда ведёт весь процесс: аккредитацию, разрешения, визы." },
      { q: "Обязана ли моя компания применять МСФО в Узбекистане?", a: "МСФО обязательны для банков, страховщиков и публичных компаний. МСП применяют НСБУ. Ведём параллельную МСФО-отчётность для консолидации." },
    ],
    uz: [
      { q: "O'zbekistondagi xorijiy kompaniyalarga qanday soliqlar qo'llanadi?", a: "Korporativ daromad solig'i (15%), QQS (12%), mol-mulk solig'i va ijtimoiy to'lovlar. 55+ mamlakat bilan ikki tomonlama shartnomalar manba stavkalarini kamaytirishi mumkin." },
      { q: "O'zbekistonda kompaniyani ro'yxatdan o'tkazish qancha vaqt oladi?", a: "Standart MChJ — 3–7 ish kuni. Xorijiy ishtirokchi uchun kapital tasdiqlash va apostil qo'shimcha vaqt talab qilishi mumkin." },
      { q: "Xorijiy investorlar uchun qanday korporativ tuzilmalar mavjud?", a: "MChJ, AJ, xorijiy kompaniya filiali/vakolatxonasi yoki EIZ sub'ekti." },
      { q: "Ish haqi va ijtimoiy to'lovlarga talablar qanday?", a: "Ijtimoiy soliq — 12%, daromad solig'i — 12%. HR jamoamiz barcha to'lovlarni to'liq hisoblaydi." },
      { q: "Advizen soliq tekshiruvi yoki nizolarida bizni ifodalay oladimi?", a: "Ha. Tekshiruvlarda vakillik, javob materiallari tayyorlash va Soliq qo'mitasida nizo hal etish, zarur bo'lsa sud — barchasida yordamdamiz." },
      { q: "O'zbekistonda transfer narxlash qanday ishlaydi?", a: "2020 yildan bog'liq tomon bilan tuzilgan bitimlar mustaqil tomon tamoyiliga mos kelishi shart. Hujjatlashtirish va kelishuvlarda yordam beramiz." },
      { q: "Xorijiy xodimlarni ishga qabul qilish talablari qanday?", a: "Ish ruxsatnomasi talab etiladi. HR jamoamiz akkreditatsiya, ruxsatnomalar va vizani to'liq boshqaradi." },
      { q: "Kompaniyam IFRS hisobot standartlarini qo'llashi shartmi?", a: "IFRS banklar, sug'urta va ochiq AJ lar uchun majburiy. Milliy standartlar ko'pchilikning asosi; IFRS parallel hisobotini ham tayyorlaymiz." },
    ],
  },
  TemplatesFAQ: {
    en: [
      { q: "What format are the document templates delivered in?", a: "All templates are delivered in Microsoft Word (.docx) format, fully editable on any device." },
      { q: "Are the templates compliant with Uzbekistan law?", a: "Yes. Every template is drafted or reviewed by our legal team to ensure alignment with current Uzbekistan legislation." },
      { q: "Can I customize the templates for my specific situation?", a: "Absolutely. Templates are designed to be easily editable. For complex transactions, we also offer a professional customization service." },
      { q: "What types of documents are available in the Templates store?", a: "Company formation, corporate governance, employment contracts, HR policies, commercial agreements, compliance checklists, tax forms, and more — organized by category." },
      { q: "In which languages are the templates available?", a: "Templates are available in Russian, Uzbek, and bilingual (Russian/Uzbek) versions. English versions are available for select international-standard documents." },
      { q: "Do purchased templates come with guidance or support?", a: "Each template includes guidance notes explaining key clauses. Professional consultation on adaptation is available from our legal or HR team." },
      { q: "What is the refund policy for purchased templates?", a: "We do not offer refunds after download due to the digital nature of the products. If a template contains a material error, we will provide a corrected version." },
      { q: "How often are the templates updated?", a: "We review and update templates whenever relevant laws change in Uzbekistan. We recommend downloading fresh copies periodically." },
    ],
    ru: [
      { q: "В каком формате поставляются шаблоны документов?", a: "В формате Microsoft Word (.docx) — полностью редактируемые на любом устройстве." },
      { q: "Соответствуют ли шаблоны законодательству Узбекистана?", a: "Да. Каждый шаблон разработан или проверен нашей юридической командой." },
      { q: "Можно ли адаптировать шаблоны под свою ситуацию?", a: "Конечно. Шаблоны легко редактируются. Для сложных сделок доступна услуга профессиональной адаптации." },
      { q: "Какие виды документов представлены в магазине шаблонов?", a: "Регистрация компаний, корпоративное управление, трудовые договоры, HR-политики, коммерческие соглашения, чек-листы комплаенса, налоговые формы и другое." },
      { q: "На каких языках доступны шаблоны?", a: "На русском, узбекском и в двуязычном варианте (русский/узбекский). Для ряда международных документов доступны версии на английском." },
      { q: "Прилагается ли к шаблонам пояснительная информация?", a: "Да. К каждому шаблону прилагаются пояснения к ключевым положениям. Профессиональная консультация по адаптации также доступна." },
      { q: "Какова политика возврата для приобретённых шаблонов?", a: "Возврат после скачивания не предусмотрен. В случае существенной ошибки в шаблоне мы предоставим исправленную версию." },
      { q: "Как часто обновляются шаблоны?", a: "При изменении законодательства Узбекистана. Рекомендуем периодически загружать актуальные версии." },
    ],
    uz: [
      { q: "Hujjat shablonlari qaysi formatda taqdim etiladi?", a: "Microsoft Word (.docx) formatida — istalgan qurilmada to'liq tahrir qilinadi." },
      { q: "Shablonlar O'zbekiston qonunchiligiga muvofiqmi?", a: "Ha. Har bir shablon huquqiy jamoamiz tomonidan ishlab chiqilgan yoki ko'rib chiqilgan." },
      { q: "Shablonlarni o'z vaziyatimga moslashtira olamanmi?", a: "Albatta. Shablonlar qulay tahrirlanishi uchun mo'ljallangan. Murakkab hollar uchun professional moslashtirish xizmati mavjud." },
      { q: "Shablonlar do'konida qanday hujjat turlari mavjud?", a: "Kompaniya tashkil etish, korporativ boshqaruv, mehnat shartnomalari, HR siyosatlari, tijorat shartnomalari, muvofiqlik varaqlari, soliq shakllari va boshqalar." },
      { q: "Shablonlar qaysi tillarda mavjud?", a: "Rus, o'zbek va ikki tilli (rus/o'zbek) versiyalarda. Ba'zi xalqaro hujjatlar uchun ingliz tili versiyalari ham mavjud." },
      { q: "Sotib olingan shablonlarga ko'rsatmalar biriktirilganmi?", a: "Ha. Har bir shablonga asosiy bandlar izohi ilova qilingan. Professional maslahat uchun jamoamiz bilan bog'lanishingiz mumkin." },
      { q: "Sotib olingan shablonlar uchun qaytarish siyosati qanday?", a: "Yuklab olishdan keyin pulni qaytarish nazarda tutilmagan. Muhim xato bo'lsa, tuzatilgan versiyasini taqdim etamiz." },
      { q: "Shablonlar qanchalik tez-tez yangilanadi?", a: "O'zbekiston qonunchiligida o'zgarishlar bo'lganda yangilanadi. Vaqti-vaqti bilan yangi nusxalarni yuklab olishingizni tavsiya etamiz." },
    ],
  },
};

export function faqJsonLd(namespace: "HomeFAQ" | "ExpertiseFAQ" | "TemplatesFAQ", locale: string) {
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const items = FAQ_CONTENT[namespace]?.[safe] ?? FAQ_CONTENT[namespace].en;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

const PAGE_PATHS = {
  expertise: "/expertise",
  store: "/store",
  contact: "/contact",
  insights: "/insights",
  privacy: "/privacy",
  terms: "/terms",
  "terms-of-sale": "/terms-of-sale",
  cookies: "/cookies",
  disclaimer: "/disclaimer",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

const PAGE_CONTENT: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  expertise: {
    en: {
      title: "Tax, Legal, HR & Accounting Services in Uzbekistan | Advizen Consulting",
      description:
        "Integrated advisory across tax, legal, finance, accounting, HR and corporate services in Uzbekistan. Trusted by 80+ clients across 15+ industries in Central Asia.",
    },
    ru: {
      title: "Налоги, право, HR и бухгалтерия в Узбекистане | Advizen Consulting",
      description:
        "Интегрированное консультирование по налогам, праву, финансам, бухгалтерии, HR и корпоративным услугам в Узбекистане. Доверяют 80+ клиентов в 15+ отраслях.",
    },
    uz: {
      title: "O'zbekistonda soliq, huquq, HR va buxgalteriya | Advizen Consulting",
      description:
        "O'zbekistonda soliq, huquq, moliya, buxgalteriya, HR va korporativ xizmatlar bo'yicha integratsiyalashgan konsalting. 15+ sohada 80+ mijoz ishonchini qozongan.",
    },
  },
  store: {
    en: {
      title: "Legal & Business Document Templates for Uzbekistan | Advizen Consulting",
      description:
        "Lawyer-drafted document templates for businesses in Uzbekistan — contracts, HR, compliance, tax forms, corporate filings. Instant download in editable Word format.",
    },
    ru: {
      title: "Шаблоны правовых и бизнес-документов в Узбекистане | Advizen Consulting",
      description:
        "Шаблоны документов для бизнеса в Узбекистане — договоры, HR, комплаенс, налоговые формы, корпоративные документы. Мгновенная загрузка в формате Word.",
    },
    uz: {
      title: "O'zbekistonda biznes va huquqiy hujjat shablonlari | Advizen Consulting",
      description:
        "O'zbekistonda biznes uchun huquqshunoslar tayyorlagan hujjat shablonlari — shartnomalar, HR, kompliayens, soliq formalari. Tez yuklab olish, Word formatida.",
    },
  },
  contact: {
    en: {
      title: "Contact Advizen Consulting | Business Advisory in Tashkent, Uzbekistan",
      description:
        "Get in touch with Advizen Consulting in Tashkent. Discuss tax, legal, finance, HR, and corporate advisory needs in Uzbekistan and Central Asia.",
    },
    ru: {
      title: "Контакты Advizen Consulting | Бизнес-консалтинг в Ташкенте",
      description:
        "Свяжитесь с Advizen Consulting в Ташкенте. Обсудите налоговое, правовое, финансовое, HR и корпоративное консультирование в Узбекистане и Центральной Азии.",
    },
    uz: {
      title: "Advizen Consulting bilan bog'lanish | Toshkentda biznes konsalting",
      description:
        "Toshkentda Advizen Consulting bilan bog'laning. O'zbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va korporativ konsalting masalalarini muhokama qiling.",
    },
  },
  insights: {
    en: {
      title: "Insights on Uzbekistan Business, Tax & Legal Updates | Advizen Consulting",
      description:
        "Expert analysis on tax, legal, finance, HR and regulatory developments in Uzbekistan and Central Asia from the Advizen Consulting advisory team.",
    },
    ru: {
      title: "Аналитика по бизнесу, налогам и праву Узбекистана | Advizen Consulting",
      description:
        "Экспертная аналитика по налогам, праву, финансам, HR и регуляторным изменениям в Узбекистане и Центральной Азии от команды Advizen Consulting.",
    },
    uz: {
      title: "O'zbekiston biznesi, soliqlari va huquqi bo'yicha tahlillar | Advizen Consulting",
      description:
        "O'zbekiston va Markaziy Osiyoda soliq, huquq, moliya, HR va tartibga solish o'zgarishlari bo'yicha Advizen Consulting jamoasidan ekspert tahlillari.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | Advizen Consulting",
      description:
        "How Advizen Consulting collects, uses and protects personal data in compliance with applicable privacy laws in Uzbekistan.",
    },
    ru: {
      title: "Политика конфиденциальности | Advizen Consulting",
      description:
        "Как Advizen Consulting собирает, использует и защищает персональные данные в соответствии с законодательством Узбекистана.",
    },
    uz: {
      title: "Maxfiylik siyosati | Advizen Consulting",
      description:
        "Advizen Consulting O'zbekiston qonunlariga muvofiq shaxsiy ma'lumotlarni qanday yig'ishi, ishlatishi va himoya qilishini bilib oling.",
    },
  },
  terms: {
    en: {
      title: "Terms of Use | Advizen Consulting",
      description:
        "Terms governing the use of advizenco.com and digital services provided by Advizen Consulting.",
    },
    ru: {
      title: "Условия использования | Advizen Consulting",
      description:
        "Условия использования сайта advizenco.com и цифровых сервисов Advizen Consulting.",
    },
    uz: {
      title: "Foydalanish shartlari | Advizen Consulting",
      description:
        "advizenco.com saytidan va Advizen Consulting raqamli xizmatlaridan foydalanish shartlari.",
    },
  },
  "terms-of-sale": {
    en: {
      title: "Terms of Sale | Advizen Consulting",
      description:
        "Terms governing purchases of document templates and digital products from Advizen Consulting.",
    },
    ru: {
      title: "Условия продажи | Advizen Consulting",
      description:
        "Условия покупки шаблонов документов и цифровых продуктов Advizen Consulting.",
    },
    uz: {
      title: "Sotish shartlari | Advizen Consulting",
      description:
        "Advizen Consultingdan hujjat shablonlari va raqamli mahsulotlarni sotib olish shartlari.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy | Advizen Consulting",
      description:
        "How Advizen Consulting uses cookies and similar technologies on advizenco.com.",
    },
    ru: {
      title: "Политика использования cookie | Advizen Consulting",
      description:
        "Как Advizen Consulting использует cookie-файлы и аналогичные технологии на сайте advizenco.com.",
    },
    uz: {
      title: "Cookie siyosati | Advizen Consulting",
      description:
        "Advizen Consulting advizenco.com saytida cookie va shunga o'xshash texnologiyalardan qanday foydalanadi.",
    },
  },
  disclaimer: {
    en: {
      title: "Disclaimer | Advizen Consulting",
      description:
        "Legal disclaimer regarding the content and services provided by Advizen Consulting on advizenco.com.",
    },
    ru: {
      title: "Дисклеймер | Advizen Consulting",
      description:
        "Юридический дисклеймер о контенте и услугах Advizen Consulting на сайте advizenco.com.",
    },
    uz: {
      title: "Yuridik ogohlantirish | Advizen Consulting",
      description:
        "Advizen Consulting tomonidan advizenco.com saytida taqdim etilgan kontent va xizmatlar haqida yuridik ogohlantirish.",
    },
  },
};

function pagePath(key: PageKey, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${PAGE_PATHS[key]}`;
}

export function pageMetadata(key: PageKey, locale: string): Metadata {
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const c = PAGE_CONTENT[key][safe];
  const canonical = pagePath(key, safe);
  const languages = Object.fromEntries(
    routing.locales.map((l: Locale) => [l, pagePath(key, l)]),
  );

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": pagePath(key, routing.defaultLocale) },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      type: "website",
      url: canonical,
      siteName: ORG_NAME,
      locale: OG_LOCALE[safe],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
    },
  };
}
