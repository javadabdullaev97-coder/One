import { faqJsonLd } from "@/lib/seo";
import HomePageClient from "@/app/[locale]/HomePageClient";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd("HomeFAQ", "en")) }}
      />
      <HomePageClient />
    </>
  );
}
