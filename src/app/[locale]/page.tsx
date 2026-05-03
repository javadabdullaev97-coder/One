import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { faqJsonLd } from "@/lib/seo";
import HomePageClient from "./HomePageClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "uz" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd("HomeFAQ", locale)) }}
      />
      <HomePageClient />
    </>
  );
}
