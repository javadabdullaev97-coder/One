import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/products";
import { productJsonLd, productPageBreadcrumbJsonLd, productPageMetadata } from "@/lib/seo";
import ProductDetailClient from "@/components/store/ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProductIds().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return productPageMetadata(slug, "en");
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProductById(slug)) notFound();

  const jsonLd = productJsonLd(slug, "en");
  const breadcrumb = productPageBreadcrumbJsonLd(slug, "en");

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
