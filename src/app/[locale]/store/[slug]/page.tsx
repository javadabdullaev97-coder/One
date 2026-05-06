import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/products";
import { productJsonLd, productPageBreadcrumbJsonLd, productPageMetadata } from "@/lib/seo";
import ProductDetailClient from "@/components/store/ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  const ids = getAllProductIds();
  const locales = ["ru", "uz"];
  return locales.flatMap((locale) => ids.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  return productPageMetadata(slug, locale);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  if (!getProductById(slug)) notFound();

  const jsonLd = productJsonLd(slug, locale);
  const breadcrumb = productPageBreadcrumbJsonLd(slug, locale);

  return (
    <>
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailClient slug={slug} />
    </>
  );
}
