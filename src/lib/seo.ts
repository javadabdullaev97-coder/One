import type { Metadata } from "next";
import { getArticleBySlug } from "./articles";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://www.advizenco.com";
const ORG_NAME = "Advizen Consulting";
const ORG_LOGO = `${SITE_URL}/Logo-v3.png`;

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
