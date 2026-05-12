"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FileText, Users, Calculator, Scale, BarChart2, ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import MagneticButton from "@/components/MagneticButton";
import CheckoutModal from "@/components/CheckoutModal";
import { cn } from "@/lib/utils";
import FaqSection from "@/components/FaqSection";

/* ── Types ─────────────────────────────────────── */

type Currency = "USD" | "UZS";

interface Product {
  id: string;
  category: string;
  price: number;
  updated: string;
}

/* ── Constants ─────────────────────────────────── */

const CATEGORIES = ["All", "Company Formation", "Legal", "HR", "Tax", "Compliance", "Finance"] as const;
const UZS_RATE = 12750;

const CATEGORY_META: Record<string, { icon: React.ReactNode }> = {
  "Company Formation": { icon: <FileText className="w-3 h-3" /> },
  "Legal":             { icon: <Scale className="w-3 h-3" /> },
  "HR":                { icon: <Users className="w-3 h-3" /> },
  "Tax":               { icon: <Calculator className="w-3 h-3" /> },
  "Compliance":        { icon: <ShieldCheck className="w-3 h-3" /> },
  "Finance":           { icon: <BarChart2 className="w-3 h-3" /> },
};

/* ── Data ───────────────────────────────────────── */

const products: Product[] = [
  { id: "llc-formation",        category: "Company Formation", price: 299, updated: "Mar 2025" },
  { id: "jsc-formation",        category: "Company Formation", price: 449, updated: "Jan 2025" },
  { id: "shareholder-agreement",category: "Legal",             price: 279, updated: "Apr 2026" },
  { id: "nda-bilateral",        category: "Legal",             price: 39,  updated: "Apr 2026" },
  { id: "commercial-lease",     category: "Legal",             price: 89,  updated: "Dec 2024" },
  { id: "employment-contract",  category: "HR",                price: 59,  updated: "Feb 2026" },
  { id: "hr-policy-manual",     category: "HR",                price: 199, updated: "Nov 2024" },
  { id: "tax-compliance-starter",category: "Tax",              price: 249, updated: "Mar 2026" },
  { id: "transfer-pricing",     category: "Tax",               price: 399, updated: "Jan 2025" },
  { id: "work-permit-pack",     category: "Compliance",        price: 119, updated: "Apr 2026" },
  { id: "sez-entry-pack",       category: "Compliance",        price: 449, updated: "Feb 2025" },
  { id: "due-diligence-pack",   category: "Finance",           price: 499, updated: "Mar 2026" },
];

/* ── Helpers ─────────────────────────────────────── */

function formatPrice(price: number, currency: Currency, locale: string): { main: string; suffix: string } {
  if (currency === "USD") {
    return { main: `$${price}`, suffix: "" };
  }
  const rounded = Math.round((price * UZS_RATE) / 50000) * 50000;
  const suffix = locale === "ru" ? "сум" : "so'm";
  return { main: rounded.toLocaleString("en-US"), suffix };
}

/* ── Product card ─────────────────────────────────────────── */

function ProductCard({ product, index, currency, onPurchase }: { product: Product; index: number; currency: Currency; onPurchase: (p: Product, title: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = CATEGORY_META[product.category];
  const locale = useLocale();
  const { main, suffix } = formatPrice(product.price, currency, locale);
  const t = useTranslations("StorePage.card");
  const tProducts = useTranslations("StoreProducts");
  const title = tProducts(`items.${product.id}.title`);
  const description = tProducts(`items.${product.id}.description`);
  const includes = tProducts.raw(`items.${product.id}.includes`) as string[];
  const categoryLabel = tProducts(`categories.${product.category}`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
      className="group w-full flex flex-col rounded-xl bg-[#080808] border border-white/[0.10] p-1.5 shadow-xl backdrop-blur-xl"
    >
      {/* Header inner card — links to product detail page */}
      <Link href={`/store/${product.id}`} className="group/hdr block mb-1.5">
        <div className="bg-[#141414] relative rounded-[10px] border border-white/[0.07] group-hover/hdr:border-white/[0.15] p-4 transition-colors duration-200">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 rounded-[inherit] pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)" }}
          />

          {/* Category + date */}
          <div className="relative mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-white/50">
              {meta?.icon}
              <span>{categoryLabel}</span>
            </div>
            <span className="rounded-full border border-white/[0.12] text-white/40 px-2 py-0.5 text-xs font-mono">
              {product.updated}
            </span>
          </div>

          {/* Title */}
          <p className="relative text-white/55 group-hover/hdr:text-white/80 text-sm mb-3 leading-snug min-h-[2.625rem] transition-colors duration-200">{title}</p>

          {/* Price — fixed min-h prevents layout shift on currency switch */}
          <div className="relative mb-1 flex min-h-[3rem] items-end gap-1.5">
            <motion.span
              key={currency}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="font-extrabold tracking-tight text-foreground group-hover:text-white transition-colors duration-200 text-2xl"
            >
              {main}
            </motion.span>
            <span className="text-foreground/55 pb-0.5 text-sm">{suffix}</span>
          </div>
        </div>
      </Link>

      {/* Body */}
      <div className="flex-1 flex flex-col gap-4 p-3">
        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed min-h-[5.25rem]">{description}</p>

        {/* Separator */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] flex-1 bg-white/[0.08]" />
          <span className="shrink-0 text-[10px] tracking-[0.14em] uppercase text-white/25">{t("includes")}</span>
          <span className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Includes list */}
        <ul className="space-y-2.5 min-h-[140px]">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/45">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/25" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onPurchase(product, title)}
          className="mt-auto block w-full rounded-lg bg-primary hover:bg-primary-light py-2.5 text-center text-[11px] tracking-[0.18em] uppercase font-medium text-foreground/90 hover:text-white transition-all duration-200 cursor-pointer"
        >
          {t("purchase")}
        </button>
      </div>
    </motion.div>
  );
}

/* ── Store filters ────────────────────────────────────────────── */

function StoreFilters({
  activeCategory, onCategoryChange,
  currency, onCurrencyChange,
}: {
  activeCategory: string; onCategoryChange: (c: string) => void;
  currency: Currency; onCurrencyChange: (c: Currency) => void;
}) {
  const tCat = useTranslations("StoreProducts.categories");
  const locale = useLocale();

  return (
    <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3">

          {/* Category pills */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className="relative shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer outline-none"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={cn("relative z-10 transition-colors duration-200", activeCategory === cat ? "text-white" : "text-white/40 hover:text-white/65")}>
                  {tCat(cat)}
                </span>
              </button>
            ))}
          </div>

          {/* Currency toggle — hidden on UZ locale */}
          {locale !== "uz" && (
            <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 shrink-0 ml-auto">
              {(["USD", "UZS"] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className="relative shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer outline-none"
                >
                  {currency === curr && (
                    <motion.div
                      layoutId="curr-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className={cn("relative z-10 transition-colors duration-200", currency === curr ? "text-white" : "text-white/40 hover:text-white/65")}>
                    {curr}
                  </span>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────────────── */

export default function StoreListingClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [checkout, setCheckout] = useState<{ product: Product; title: string } | null>(null);
  const locale = useLocale();

  // On mount: read currency cookie set by middleware (CF-IPCountry detection)
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)currency=(USD|UZS)/);
    if (match) setCurrency(match[1] as Currency);
  }, []);

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr);
    document.cookie = `currency=${curr}; path=/; max-age=31536000; SameSite=Lax`;
  };
  const tHero = useTranslations("StorePage.hero");
  const tFilters = useTranslations("StorePage.filters");
  const tCta = useTranslations("StorePage.cta");
  const tCat = useTranslations("StoreProducts.categories");

  // UZ locale always shows UZS prices
  const effectiveCurrency: Currency = locale === "uz" ? "UZS" : currency;

  const filtered = products.filter((p) =>
    activeCategory === "All" || p.category === activeCategory
  );

  const openCheckout = (product: Product, title: string) => {
    setCheckout({ product, title });
  };

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden flex flex-col" style={{ height: "65vh" }}>
        <div className="absolute inset-0 hero-image-enter">
          <Image
            src="/Hero and CTA images/Store Hero.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <section className="relative z-10 flex-1 flex items-end pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="tracking-luxury text-white/50 mb-3"
            >
              {tHero("eyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-luxury text-3xl md:text-4xl text-foreground leading-[1.05] max-w-3xl mb-4"
            >
              {tHero("heading")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed mb-6"
            >
              {tHero("description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              {[tHero("feature1"), tHero("feature2"), tHero("feature3"), tHero("feature4")].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  {f}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── Filters ── */}
      <StoreFilters
        activeCategory={activeCategory} onCategoryChange={setActiveCategory}
        currency={effectiveCurrency} onCurrencyChange={handleCurrencyChange}
      />

      {/* ── Grid ── */}
      <section className="py-14 md:py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8">
                <p className="tracking-luxury text-white/40">
                  {tFilters("documentsCount", { count: filtered.length })}
                  {activeCategory !== "All" && tFilters("documentsInCategory", { category: tCat(activeCategory) })}
                </p>
              </div>
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="text-white/30 text-sm">{tFilters("noResults")}</p>
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="mt-4 text-xs text-primary-light/70 hover:text-primary-light underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    {tFilters("clearFilters")}
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} currency={effectiveCurrency} onPurchase={openCheckout} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-20 md:py-28 bg-black border-t border-white/[0.06] relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="tracking-luxury text-white/40 mb-4">{tCta("eyebrow")}</p>
            <h2 className="heading-luxury text-3xl md:text-5xl text-foreground mb-5">
              {tCta("heading")}
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed mb-10">
              {tCta("description")}
            </p>
            <MagneticButton variant="primary" as="a" href="/contact">
              {tCta("button")}
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <FaqSection page="store" />

      <CheckoutModal
        open={!!checkout}
        onClose={() => setCheckout(null)}
        productId={checkout?.product.id ?? null}
        productTitle={checkout?.title ?? ""}
        priceUSD={checkout?.product.price ?? 0}
        currency={effectiveCurrency}
      />
    </>
  );
}
