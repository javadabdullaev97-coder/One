import type { Metadata } from "next";
import { getAllPublicationSlugs } from "@/lib/publications";
import { articleMetadata, articleJsonLd } from "@/lib/seo";
import ArticlePageClient from "@/app/[locale]/insights/[slug]/ArticlePageClient";

export function generateStaticParams() {
  return getAllPublicationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata(slug, "en");
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = articleJsonLd(slug, "en");

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ArticlePageClient slug={slug} />
    </>
  );
}
