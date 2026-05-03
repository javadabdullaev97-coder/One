import type { Metadata } from "next";
import { getArticleBySlug } from "./articles";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Logo-v3.png`;

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
