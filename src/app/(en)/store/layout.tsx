import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("store", "en");

const jsonLd = faqJsonLd("TemplatesFAQ", "en");

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
