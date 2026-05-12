import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { seo } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const SITE_URL = "https://www.advizenco.com";
const OG_IMAGE = "/Hero and CTA images/og-image.webp";

const localeMetadata: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Advizen Consulting — Business Advisory in Uzbekistan",
    description:
      "Tax, legal, finance, accounting, HR and compliance advisory for foreign investors and businesses in Uzbekistan and Central Asia.",
    ogLocale: "en_US",
  },
  ru: {
    title: "Advizen Consulting — Бизнес-консалтинг в Узбекистане",
    description:
      "Налоговый, юридический, финансовый консалтинг, бухгалтерия, HR и compliance для иностранных инвесторов и компаний в Узбекистане и Центральной Азии.",
    ogLocale: "ru_RU",
  },
  uz: {
    title: "Advizen Consulting — O'zbekistonda biznes-maslahat",
    description:
      "O'zbekiston va Markaziy Osiyoda xorijiy investorlar va kompaniyalar uchun soliq, huquqiy, moliyaviy maslahat, buxgalteriya, HR va compliance xizmatlari.",
    ogLocale: "uz_UZ",
  },
};

function localePath(path: string, locale: Locale): string {
  const localePart = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${localePart}${path}`;
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const m = localeMetadata[safe];
  const canonical = localePath("", safe);
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localePath("", l)]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    icons: {
      icon: [
        { url: "/Advizen Logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/Advizen Logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/Advizen Logo/favicon.ico", type: "image/x-icon" },
      ],
      apple: { url: "/Advizen Logo/apple-touch-icon.png", sizes: "180x180" },
      shortcut: "/Advizen Logo/favicon.ico",
    },
    keywords: [
      "business consulting Uzbekistan",
      "tax consulting Tashkent",
      "legal advisory Central Asia",
      "HR services Uzbekistan",
      "Employer of Record Uzbekistan",
      "accounting services Tashkent",
    ],
    alternates: {
      canonical,
      languages: { ...languages, "x-default": localePath("", routing.defaultLocale) },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: m.ogLocale,
      siteName: "Advizen Consulting",
      url: canonical,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Advizen Consulting" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [OG_IMAGE],
    },
    verification: {
      yandex: "e149c22fd0bc3d72",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const jsonLd = seo.websiteJsonLd();

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
