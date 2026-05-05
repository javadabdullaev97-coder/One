import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata, pageBreadcrumbJsonLd, expertiseServicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("expertise", "en");

export default function Layout({ children }: { children: ReactNode }) {
  const breadcrumb = pageBreadcrumbJsonLd("expertise", "en");
  const services = expertiseServicesJsonLd("en");
  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
      {children}
    </>
  );
}
