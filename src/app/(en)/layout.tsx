import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Josefin_Sans, Raleway, Inter, Inter_Tight, Onest } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

const SITE_URL = "https://www.advizenco.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
  description:
    "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
  icons: { icon: "/Logo-v3.png", apple: "/Logo-v3.png" },
  keywords: [
    "business consulting Uzbekistan",
    "tax consulting Tashkent",
    "legal advisory Central Asia",
    "HR services Uzbekistan",
    "Employer of Record Uzbekistan",
    "accounting services Tashkent",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      ru: `${SITE_URL}/ru`,
      uz: `${SITE_URL}/uz`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
    description:
      "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
    type: "website",
    locale: "en_US",
    siteName: "Advizen Consulting",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Advizen Consulting | Premier Business Advisory in Uzbekistan",
    description:
      "Advizen Consulting — your trusted partner for expert tax, legal, finance, accounting, HR, and business consulting in Uzbekistan. 8+ years of integrated advisory across 15+ industries in Central Asia.",
  },
};

const syne = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-hero",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Advizen Consulting",
  description:
    "Premier business consulting firm in Uzbekistan offering integrated tax, legal, finance, accounting, and HR services.",
  url: "https://www.advizenco.com",
  telephone: "+998334884888",
  email: "info@advizenco.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressCountry: "UZ",
  },
  areaServed: {
    "@type": "Place",
    name: "Central Asia",
  },
  serviceType: [
    "Tax Consulting",
    "Legal Advisory",
    "Accounting",
    "HR Services",
    "Funding",
    "Corporate Services",
    "Entity Management",
  ],
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

export default async function EnLayout({ children }: { children: ReactNode }) {
  setRequestLocale("en");

  return (
    <html
      lang="en"
      className={`h-full antialiased ${syne.variable} ${raleway.variable} ${inter.variable} ${interTight.variable} ${onest.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
