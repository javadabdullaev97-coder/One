import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata, pageBreadcrumbJsonLd, expertiseServicesJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata("expertise", locale);
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const breadcrumb = pageBreadcrumbJsonLd("expertise", locale);
  const services = expertiseServicesJsonLd(locale);
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
