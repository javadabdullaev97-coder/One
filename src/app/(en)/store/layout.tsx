import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata, storeJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("store", "en");

export default function Layout({ children }: { children: ReactNode }) {
  const jsonLd = storeJsonLd();
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
