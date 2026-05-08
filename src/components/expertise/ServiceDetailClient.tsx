"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ArrowLeft, LayoutDashboard, Briefcase, UserCheck, MapPin, Building2, FileText, Wallet, Scale, Users, TrendingUp, Search, Globe, ClipboardCheck, CreditCard } from "lucide-react";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";
import type { Service, StoreProduct } from "@/lib/types";

/* ── icon map ─────────────────────────────────── */
const SERVICE_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  tax:               FileText,
  legal:             Scale,
  finance:           Wallet,
  hr:                Users,
  funding:           TrendingUp,
  "ma-advisory":     Building2,
  "due-diligence":   Search,
  "entity-management": LayoutDashboard,
  corporate:         Briefcase,
  eor:               UserCheck,
  "virtual-office":  MapPin,
  payroll:           CreditCard,
  immigration:       Globe,
  compliance:        ClipboardCheck,
};

const SERVICE_ACCENTS: Record<string, string> = {
  tax:               "250,204,21",
  legal:             "147,197,253",
  finance:           "134,239,172",
  hr:                "249,168,212",
  funding:           "196,181,253",
  "ma-advisory":     "253,186,116",
  "due-diligence":   "103,232,249",
  "entity-management": "16,185,129",
  corporate:         "99,102,241",
  eor:               "236,72,153",
  "virtual-office":  "168,85,247",
  payroll:           "34,211,238",
  immigration:       "251,146,60",
  compliance:        "74,222,128",
};

const SERVICE_FOR: Record<string, string> = {
  "entity-management": "Foreign companies that need a complete operational presence in Uzbekistan without building an in-house management team.",
  corporate:           "International businesses establishing or maintaining a legal presence in Uzbekistan — from incorporation to ongoing secretarial administration.",
  eor:                 "International companies that want to hire staff in Uzbekistan immediately, without first incorporating a local entity.",
  "virtual-office":    "Overseas companies exploring the Uzbekistan market, or businesses that need a registered address without committing to physical office space.",
  tax:                 "Foreign-invested companies, international groups with Uzbek operations, and businesses navigating cross-border tax obligations.",
  legal:               "International businesses entering Uzbekistan, companies requiring ongoing corporate legal support, and investors structuring transactions.",
  finance:             "Foreign-invested entities, international groups requiring consolidated reporting, and businesses transitioning to IFRS.",
  hr:                  "International companies scaling their Uzbek workforce, businesses conducting HR audits, and employers navigating local labour law.",
  funding:             "Startups seeking grant funding, growth-stage companies preparing for investment, and businesses exploring institutional financing options.",
  "ma-advisory":       "Strategic buyers, financial investors, and founders navigating acquisitions or exits in Uzbekistan and Central Asia.",
  "due-diligence":     "Acquirers, investors, and lenders requiring independent verification of a target's tax, legal, and financial position.",
  payroll:             "Companies of any size that need accurate, compliant payroll processing without building an in-house function.",
  immigration:         "Multinational employers bringing foreign talent to Uzbekistan and needing end-to-end permit management.",
  compliance:          "Foreign-invested entities and representative offices that need continuous regulatory oversight without a dedicated compliance team.",
};

interface Props {
  service:         Service;
  relatedServices: Service[];
  relatedProducts: StoreProduct[];
  locale:          string;
}

export default function ServiceDetailClient({ service, relatedServices, relatedProducts, locale }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t  = useTranslations("ExpertisePage");
  const tServices = useTranslations("Services");
  const tStore    = useTranslations("StoreProducts");
  const tPage     = useTranslations("ServiceDetailPage");
  const currentLocale = useLocale();

  const slug   = service.slug;
  const accent = SERVICE_ACCENTS[slug] ?? "255,255,255";

  const c = {
    about:          tPage("about"),
    deliver:        tPage("deliver"),
    capabilities:   tPage("capabilities"),
    whoThisIsFor:   tPage("whoThisIsFor"),
    selectedWork:   tPage("selectedWork"),
    viewAll:        tPage("viewAll"),
    relatedServices:tPage("relatedServices"),
    fromStore:      tPage("fromStore"),
    faqTitle:       tPage("faqTitle"),
    faqHeading:     tPage("faqHeading"),
    faqSubtitle:    tPage("faqSubtitle"),
    ctaEyebrow:     tPage("ctaEyebrow"),
    ctaHeading:     tPage("ctaHeading"),
    ctaBody:        tPage("ctaBody"),
    ctaPrimary:     tPage("ctaPrimary"),
    ctaSecondary:   tPage("ctaSecondary"),
  };

  // Related services
  const serviceTitle = tServices(`${slug}.title`);
  const description1 = tServices.raw(`${slug}.description1`) as string | undefined;
  const description2 = tServices.raw(`${slug}.description2`) as string | undefined;
  const capabilities = tServices.raw(`${slug}.capabilities`) as string[] | undefined;

  // Related products
  const localizedProducts = relatedProducts.map(prod => ({
    ...prod,
    nameEn: tStore(`items.${prod.id}.title`),
    category: tStore(`categories.${prod.category}`),
  }));

  const backHref = `/${locale}/expertise`;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 70% 40%, rgba(${accent},0.07) 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/38 hover:text-white/70 transition-colors duration-200"
          >
            <ArrowLeft className="w-3 h-3" />
            {locale === "ru" ? "Назад" : locale === "uz" ? "Orqaga" : "Back"}
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <span className="font-serif text-xs tabular-nums text-white/14">{service.num}</span>
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: `rgba(${accent},0.6)` }}
              >{service.category}</p>
              <h1 className="heading-luxury text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-10">
                {serviceTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── About + Capabilities ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#030303] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">

            {/* About */}
            <AnimatedSection>
              <p className="tracking-luxury text-white/40 mb-4">{c.about}</p>
              <h2 className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug">
                {c.deliver}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {description1 && (
                  <p className={cn("leading-relaxed text-[15px]", "text-white/60")}>{description1}</p>
                )}
                {description2 && (
                  <p className={cn("leading-relaxed text-[15px]", "text-white/42")}>{description2}</p>
                )}
              </div>

              {/* Who this is for */}
              {SERVICE_FOR[slug] && (
                <div
                  className="mt-8 border-l-2 pl-4 py-0.5"
                  style={{ borderColor: `rgba(${accent},0.35)` }}
                >
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                    style={{ color: `rgba(${accent},0.65)` }}
                  >{c.whoThisIsFor}</p>
                  <p className="text-[13px] text-white/48 leading-relaxed">{SERVICE_FOR[slug]}</p>
                </div>
              )}
            </AnimatedSection>

            {/* Capabilities */}
            {capabilities && capabilities.length > 0 && (
              <AnimatedSection delay={0.1}>
                <p className="tracking-luxury text-white/40 mb-3">{c.capabilities}</p>
                <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">{c.deliver}</h2>
                <ul className="mt-6 grid grid-cols-1 gap-2">
                  {capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 px-4 py-2.5 border border-white/[0.07] bg-white/[0.02] text-[12px] text-white/50 hover:border-primary/28 hover:bg-primary/[0.03] hover:text-white/78 transition-all duration-200"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: `rgba(${accent},0.5)` }}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            )}

          </div>
        </div>
      </section>

      {/* ── Selected work ─────────────────────────────────── */}
      {service.engagements && service.engagements.length > 0 && (
        <section className="py-20 md:py-28 bg-black border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <p className="tracking-luxury text-white/40 mb-3">{c.selectedWork}</p>
              <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">{serviceTitle}</h2>
              <Link
                href={`/${locale}/expertise#engagements`}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/35 hover:text-white/65 transition-colors duration-200 pb-1 border-b border-white/[0.12] hover:border-white/[0.3]"
              >
                {c.viewAll} <ArrowRight className="w-3 h-3" />
              </Link>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {service.engagements.slice(0, 3).map((eng, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 0.07}
                  className="bg-[#030303] p-8 flex flex-col"
                >
                  <div className="mb-6">
                    <span className="font-serif text-3xl md:text-4xl text-foreground/85 tracking-tight leading-none">
                      {eng.metric}
                    </span>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-2">{eng.metricLabel}</p>
                  </div>
                  <span
                    className="inline-block text-xs tracking-[0.16em] uppercase mb-3"
                    style={{ color: `rgba(${accent},0.55)` }}
                  >
                    {eng.sector}
                  </span>
                  <p className="text-[14px] text-foreground/60 leading-snug font-light flex-1 mb-5">{eng.headline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {eng.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] tracking-[0.12em] uppercase text-white/30 border border-white/[0.06] rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services + From our store ────────────── */}
      <section className="py-20 md:py-28 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {/* Related services */}
            <AnimatedSection>
              <p className="tracking-luxury text-white/40 mb-7">{c.relatedServices}</p>
              <div className="flex flex-col gap-3">
                {relatedServices.map((svc) => {
                  const SvcIcon = SERVICE_ICONS[svc.slug] ?? ArrowRight;
                  const svcAccent = SERVICE_ACCENTS[svc.slug] ?? "255,255,255";
                  return (
                    <Link
                      key={svc.slug}
                      href={`/expertise/${svc.slug}`}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center border shrink-0"
                        style={{ borderColor: `rgba(${svcAccent},0.22)`, background: `rgba(${svcAccent},0.08)` }}
                      >
                        <SvcIcon className="w-4 h-4" style={{ color: `rgba(${svcAccent},0.75)` }} strokeWidth={1.5} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] text-white/70 group-hover:text-white/90 transition-colors leading-tight">
                          {tServices(`${svc.slug}.title`)}
                        </p>
                        <p className="text-[11px] tracking-[0.14em] uppercase text-white/28 mt-0.5">{svc.category}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Related products */}
            {relatedProducts.length > 0 && (
              <AnimatedSection delay={0.1}>
                <p className="tracking-luxury text-white/40 mb-7">{c.fromStore}</p>
                <div className="flex flex-col gap-3">
                  {relatedProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/store/${prod.id}`}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] text-white/70 group-hover:text-white/90 transition-colors leading-tight">
                          {prod.nameEn}
                        </p>
                        <p className="text-[11px] tracking-[0.14em] uppercase text-white/28 mt-0.5">{prod.category}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-[13px] font-medium tabular-nums"
                          style={{ color: `rgba(${accent},0.75)` }}
                        >
                          ${prod.price}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            )}

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-[#030303] border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <p className="tracking-luxury text-white/40 mb-4">{c.faqTitle}</p>
              <h2 className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug mb-4">
                {c.faqHeading}
              </h2>
              <p className="text-[13px] text-white/35 leading-relaxed">{c.faqSubtitle}</p>
            </AnimatedSection>

            <div className="divide-y divide-white/[0.05]">
              {service.faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span className="text-[14px] text-white/65 group-hover:text-white/85 transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-white/30 shrink-0 mt-0.5 transition-transform duration-200",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="mt-3 text-[13px] text-white/42 leading-relaxed"
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black border-t border-white/[0.05] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 100%, rgba(${accent},0.06) 0%, transparent 65%)`,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-white/40 mb-6">{service.category}</p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              {c.ctaHeading}
            </h2>
            <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">{c.ctaBody}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
              >
                {c.ctaPrimary} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {c.ctaSecondary}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
