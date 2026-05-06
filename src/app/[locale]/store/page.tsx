import { storeJsonLd, pageBreadcrumbJsonLd } from "@/lib/seo";
import StoreListingClient from "@/components/store/StoreListingClient";

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = storeJsonLd();
  const breadcrumb = pageBreadcrumbJsonLd("store", locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <StoreListingClient />
    </>
  );
}
