import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata, pageBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("expertise", "en");

export default function Layout({ children }: { children: ReactNode }) {
  const jsonLd = pageBreadcrumbJsonLd("expertise", "en");
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
