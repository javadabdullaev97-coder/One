import { storeJsonLd, pageBreadcrumbJsonLd } from "@/lib/seo";
import StoreListingClient from "@/components/store/StoreListingClient";

export default function StorePage() {
  const jsonLd = storeJsonLd();
  const breadcrumb = pageBreadcrumbJsonLd("store", "en");
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
