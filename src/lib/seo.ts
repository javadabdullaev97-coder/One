import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getArticleBySlug } from "./articles";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Advizen Logo/android-chrome-512x512.png`;

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
  if (!image) return `${SITE_URL}/Advizen Logo/android-chrome-512x512.png`;
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

export function articleMetadata(slug: string, locale: string): Metadata {
  const article = getArticleBySlug(slug, locale);
  if (!article) return {};

  const url = articleUrl(slug, locale);
  const image = articleImage(article.image);
  const ogLocale = OG_LOCALE[locale as Locale] ?? "en_US";

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, articleUrl(slug, l)])
      ),
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url,
      locale: ogLocale,
      siteName: ORG_NAME,
      publishedTime: article.date,
      authors: [ORG_NAME],
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
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
    description: article.description,
    image,
    datePublished: article.date,
    dateModified: article.date,
    url,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.tags?.[0] ?? "Advisory",
    keywords: article.tags?.join(", ") ?? "",
  };
}

const PAGE_CONTENT: Record<string, Record<string, { title: string; description: string }>> = {
  expertise: {
    en: {
      title: "Our Expertise | Advizen Consulting",
      description:
        "Seven integrated advisory disciplines and seven managed operations services — tax, legal, accounting, HR, M&A, due diligence, and entity management in Uzbekistan.",
    },
    ru: {
      title: "Наши компетенции | Advizen Consulting",
      description:
        "Семь интегрированных консалтинговых направлений и семь операционных сервисов — налоги, юридические услуги, бухгалтерия, HR, M&A, due diligence и корпоративный менеджмент в Узбекистане.",
    },
    uz: {
      title: "Bizning tajribamiz | Advizen Consulting",
      description:
        "Yetti integratsiyalashgan maslahat yo'nalishi va yetti operatsion xizmat — soliq, huquqiy, buxgalteriya, HR, M&A, due diligence va korporativ boshqaruv O'zbekistonda.",
    },
  },
  store: {
    en: {
      title: "Document Templates | Advizen Consulting",
      description:
        "Ready-to-use legal, tax, HR, compliance, and finance document templates drafted for the Uzbek regulatory environment. Download instantly.",
    },
    ru: {
      title: "Шаблоны документов | Advizen Consulting",
      description:
        "Готовые юридические, налоговые, HR, комплаенс и финансовые шаблоны документов для узбекской регуляторной среды. Скачайте сразу.",
    },
    uz: {
      title: "Hujjat shablonlari | Advizen Consulting",
      description:
        "O'zbek huquqiy muhiti uchun tayyor yuridik, soliq, HR, muvofiqlik va moliyaviy hujjat shablonlari. Darhol yuklab oling.",
    },
  },
  insights: {
    en: {
      title: "Insights | Advizen Consulting",
      description:
        "Expert analysis, tax briefings, legal updates, and HR guidance on doing business in Uzbekistan and Central Asia.",
    },
    ru: {
      title: "Инсайты | Advizen Consulting",
      description:
        "Экспертный анализ, налоговые брифинги, правовые обновления и HR-рекомендации по ведению бизнеса в Узбекистане и Центральной Азии.",
    },
    uz: {
      title: "Tahlillar | Advizen Consulting",
      description:
        "O'zbekiston va Markaziy Osiyoda biznes yuritish bo'yicha ekspert tahlillar, soliq brifinglari, huquqiy yangiliklar va HR ko'rsatmalari.",
    },
  },
  contact: {
    en: {
      title: "Contact Us | Advizen Consulting",
      description:
        "Schedule a consultation with Advizen Consulting. Reach our team in Tashkent for expert business advisory across tax, legal, finance, and HR.",
    },
    ru: {
      title: "Связаться с нами | Advizen Consulting",
      description:
        "Запишитесь на консультацию с Advizen Consulting. Свяжитесь с нашей командой в Ташкенте для получения экспертного консультирования по налогам, праву, финансам и HR.",
    },
    uz: {
      title: "Biz bilan bog'laning | Advizen Consulting",
      description:
        "Advizen Consulting bilan maslahat uchrashuvini belgilang. Soliq, huquqiy, moliya va HR bo'yicha ekspert maslahat uchun Toshkentdagi jamoamiz bilan bog'laning.",
    },
  },
};

export function pageMetadata(page: string, locale: string): Metadata {
  const safe = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const content = PAGE_CONTENT[page]?.[safe] ?? PAGE_CONTENT[page]?.[routing.defaultLocale];
  if (!content) return {};

  const prefix = safe === routing.defaultLocale ? "" : `/${safe}`;
  const url = `${SITE_URL}${prefix}/${page === "store" ? "store" : page}`;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => {
          const p = l === routing.defaultLocale ? "" : `/${l}`;
          return [l, `${SITE_URL}${p}/${page === "store" ? "store" : page}`];
        })
      ),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      url,
      locale: OG_LOCALE[safe as Locale] ?? "en_US",
      siteName: ORG_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}
