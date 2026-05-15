"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calculator,
  ChevronDown,
  FileText,
  Globe,
  Handshake,
  Landmark,
  LayoutDashboard,
  LineChart,
  MapPin,
  Scale,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { advisoryServices } from "@/lib/services";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  funding: Landmark,
  "ma-advisory": Handshake,
  "due-diligence": ScanSearch,
  "entity-management": LayoutDashboard,
  corporate: Briefcase,
  eor: UserCheck,
  payroll: Wallet,
  immigration: Globe,
  "virtual-office": MapPin,
  compliance: ShieldCheck,
};

const serviceAccents: Record<string, string> = {
  tax:            "184,146,42",
  legal:          "30,64,175",
  finance:        "13,148,136",
  hr:             "124,58,237",
  funding:        "22,163,74",
  "ma-advisory":  "139,26,26",
  "due-diligence":"194,65,12",
};

const serviceFor: Record<string, string> = {
  tax:            "Foreign-invested companies, holding structures, and cross-border operators navigating Uzbekistan's fiscal complexity.",
  legal:          "International businesses entering Uzbekistan, M&A counterparties, and companies requiring regulatory clearances.",
  finance:        "Foreign subsidiaries needing IFRS-compliant reporting, investor-ready financials, or audit-prepared books.",
  hr:             "Growing businesses requiring compliant HR infrastructure, executive hiring, or workforce compliance reviews.",
  funding:        "Startups seeking grants, companies preparing for investment rounds, and businesses applying for state incentives.",
  "ma-advisory":  "Strategic acquirers, PE funds, and founders seeking M&A transactions in Uzbekistan and Central Asia.",
  "due-diligence":"Buyers, lenders, and investors requiring independent risk assessment before a transaction closes.",
};

const VIEW_LABEL: Record<string, string> = {
  en: "View full service page",
  ru: "Посмотреть страницу услуги",
  uz: "Xizmat sahifasini ko'rish",
};

const relatedArticle: Record<string, { slug: string; title: string; tag: string } | null> = {
  tax:            { slug: "permanent-establishment-uzbekistan",  title: "Permanent Establishment Risk in Uzbekistan",    tag: "Tax Briefing"   },
  legal:          { slug: "representative-offices-uzbekistan",   title: "Representative Offices in Uzbekistan",          tag: "Legal Briefing" },
  finance:        { slug: "accounting-law-uzbekistan",           title: "Accounting Law in Uzbekistan",                  tag: "Advisory"       },
  hr:             { slug: "payroll-social-contributions",        title: "Payroll & Social Contributions",                tag: "HR Briefing"    },
  funding:        null,
  "ma-advisory":  { slug: "escrow-accounts-uzbekistan",          title: "Escrow Accounts in Uzbekistan",                 tag: "Legal Briefing" },
  "due-diligence":{ slug: "accounting-policy-tax-purposes",      title: "Accounting Policy for Tax Purposes",            tag: "Tax Briefing"   },
};

// ─── Shared section header ────────────────────────────────────────
function SectionHeader({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <AnimatedSection className="mb-14 md:mb-16">
      <div>
        <p className="tracking-luxury text-white/50 mb-4">{t("eyebrow")}</p>
        <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
          {t("heading")}
        </h2>
        <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
          {t("description")}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── Mobile: accordion ────────────────────────────────────────
function AdvisorySectionMobile({
  t,
  tServices,
  locale,
}: {
  t: ReturnType<typeof useTranslations>;
  tServices: ReturnType<typeof useTranslations>;
  locale: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border border-white/[0.07] overflow-hidden">
      {advisoryServices.map((service, i) => {
        const isOpen = openIndex === i;
        const Icon = serviceIcons[service.slug] ?? ArrowUpRight;
        const accent = serviceAccents[service.slug] ?? "255,255,255";
        const article = relatedArticle[service.slug];

        return (
          <div key={service.slug} className="border-b border-white/[0.07] last:border-b-0">
            {/* Tap header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="relative w-full flex items-center gap-4 px-5 py-5 text-left transition-colors duration-200"
              style={{
                background: isOpen
                  ? `linear-gradient(90deg, rgba(${accent},0.07) 0%, rgba(${accent},0.02) 60%, transparent 100%)`
                  : undefined,
              }}
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                style={{
                  background: isOpen ? `rgba(${accent},1)` : "transparent",
                  boxShadow: isOpen ? `0 0 8px rgba(${accent},0.5)` : "none",
                }}
              />
              <span
                className="w-8 h-8 rounded flex items-center justify-center shrink-0 border transition-all duration-200"
                style={isOpen ? {
                  borderColor: `rgba(${accent},0.3)`,
                  background: `rgba(${accent},0.1)`,
                } : {
                  borderColor: "rgba(255,255,255,0.06)",
                  background: "transparent",
                }}
              >
                <Icon
                  className="w-3.5 h-3.5"
                  style={{ color: isOpen ? `rgba(${accent},0.85)` : "rgba(255,255,255,0.28)" }}
                  strokeWidth={1.5}
                />
              </span>
              <span className={cn(
                "flex-1 text-[15px] font-medium tracking-[0.02em] transition-colors duration-200",
                isOpen ? "text-foreground" : "text-white/45"
              )}>
                {tServices(`${service.slug}.title`)}
              </span>
              <ChevronDown
                className={cn("w-4 h-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                style={{ color: isOpen ? `rgba(${accent},0.55)` : "rgba(255,255,255,0.2)" }}
              />
            </button>

            {/* Accordion body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="flex flex-col gap-5 px-5 pt-5 pb-6"
                    style={{
                      borderTop: `1px solid rgba(${accent},0.1)`,
                      background: `rgba(${accent},0.03)`,
                    }}
                  >
                    <p className="text-[14px] text-white/55 leading-relaxed">
                      {tServices(`${service.slug}.description`)}
                    </p>

                    {serviceFor[service.slug] && (
                      <div
                        className="border-l-2 pl-4 py-0.5"
                        style={{ borderColor: `rgba(${accent},0.35)` }}
                      >
                        <p
                          className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                          style={{ color: `rgba(${accent},0.65)` }}
                        >
                          {t("whoThisIsFor")}
                        </p>
                        <p className="text-[13px] text-white/50 leading-relaxed">
                          {serviceFor[service.slug]}
                        </p>
                      </div>
                    )}

                    {article && (
                      <div>
                        <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-2">
                          {t("relatedReading")}
                        </p>
                        <Link
                          href={`/insights/${article.slug}`}
                          className="flex items-center gap-3 border border-white/[0.06] px-4 py-3 active:bg-white/[0.04] transition-colors duration-150"
                        >
                          <FileText className="w-3.5 h-3.5 text-white/25 shrink-0" />
                          <span className="text-[12px] text-white/40 flex-1 line-clamp-1">{article.title}</span>
                          <span className="text-[9px] tracking-[0.14em] uppercase text-white/20 shrink-0">{article.tag}</span>
                          <ArrowUpRight className="w-3 h-3 text-white/20 shrink-0" />
                        </Link>
                      </div>
                    )}

                    <Link
                      href={`/expertise/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase"
                      style={{ color: `rgba(${accent},0.6)` }}
                    >
                      {VIEW_LABEL[locale] ?? VIEW_LABEL.en}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Desktop: tab panel ───────────────────────────────────────
function AdvisorySectionDesktop({
  t,
  tServices,
  locale,
}: {
  t: ReturnType<typeof useTranslations>;
  tServices: ReturnType<typeof useTranslations>;
  locale: string;
}) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const active = advisoryServices[activeIndex];
  const ActiveIcon = serviceIcons[active.slug] ?? ArrowUpRight;
  const accent = serviceAccents[active.slug] ?? "255,255,255";
  const direction = activeIndex >= prevIndex ? 1 : -1;
  const article = relatedArticle[active.slug];

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(i);
  };

  return (
    <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden">

      {/* Left: service list */}
      <div className="border-r border-white/[0.07] flex flex-col divide-y divide-white/[0.04]">
        {advisoryServices.map((service, i) => {
          const isActive = i === activeIndex;
          const ItemIcon = serviceIcons[service.slug] ?? ArrowUpRight;
          const svcAccent = serviceAccents[service.slug] ?? "255,255,255";
          return (
            <motion.button
              key={service.slug}
              onClick={() => router.push(`/expertise/${service.slug}`)}
              onMouseEnter={() => handleSelect(i)}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full flex flex-1 items-center gap-4 px-6 py-5 text-left transition-all duration-200"
              style={{
                background: isActive
                  ? `linear-gradient(90deg, rgba(${svcAccent},0.08) 0%, rgba(${svcAccent},0.02) 55%, transparent 100%)`
                  : undefined,
              }}
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                style={{
                  background: isActive ? `rgba(${svcAccent},1)` : "transparent",
                  boxShadow: isActive ? `0 0 10px rgba(${svcAccent},0.55)` : "none",
                }}
              />
              <span
                className="w-8 h-8 rounded flex items-center justify-center shrink-0 border transition-all duration-250"
                style={isActive ? {
                  borderColor: `rgba(${svcAccent},0.3)`,
                  background: `rgba(${svcAccent},0.1)`,
                } : {
                  borderColor: "rgba(255,255,255,0.06)",
                  background: "transparent",
                }}
              >
                <ItemIcon
                  className="w-3.5 h-3.5 transition-colors duration-250"
                  style={{ color: isActive ? `rgba(${svcAccent},0.85)` : "rgba(255,255,255,0.28)" }}
                  strokeWidth={1.5}
                />
              </span>
              <span className={cn(
                "flex-1 text-[15px] font-medium tracking-[0.02em] transition-colors duration-200",
                isActive ? "text-foreground" : "text-white/40 group-hover:text-white/72"
              )}>
                {tServices(`${service.slug}.title`)}
              </span>
              <ArrowRight
                className={cn(
                  "w-3.5 h-3.5 shrink-0 transition-all duration-200",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-25 group-hover:text-white"
                )}
                style={isActive ? { color: `rgba(${svcAccent},0.7)` } : undefined}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Right: active service detail */}
      <div className="relative bg-[#070707] min-h-[580px] md:h-[620px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: direction * 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col overflow-y-auto"
          >
            <div
              className="relative px-8 md:px-10 pt-8 pb-7 shrink-0"
              style={{
                background: `linear-gradient(135deg, rgba(${accent},0.12) 0%, rgba(${accent},0.04) 50%, transparent 100%)`,
                borderBottom: `1px solid rgba(${accent},0.1)`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, rgba(${accent},0.7) 0%, rgba(${accent},0.2) 55%, transparent 100%)` }}
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className="w-12 h-12 rounded-lg flex items-center justify-center border shrink-0"
                    style={{ borderColor: `rgba(${accent},0.25)`, background: `rgba(${accent},0.1)` }}
                  >
                    <ActiveIcon
                      className="w-5 h-5"
                      style={{ color: `rgba(${accent},0.9)` }}
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <h3 className="heading-luxury text-xl md:text-[1.35rem] text-foreground leading-tight">
                      {tServices(`${active.slug}.title`)}
                    </h3>
                    <p className="text-[9px] tracking-[0.18em] uppercase text-white/28 mt-1">{t("advisoryLabel")}</p>
                  </div>
                </div>
                <span className="font-serif text-sm text-white/[0.14] tabular-nums shrink-0 mt-1">
                  {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(advisoryServices.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 px-8 md:px-10 py-7 gap-6">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14px] text-white/55 leading-relaxed"
              >
                {tServices(`${active.slug}.description`)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-l-2 pl-4 py-0.5"
                style={{ borderColor: `rgba(${accent},0.35)` }}
              >
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: `rgba(${accent},0.65)` }}
                >
                  {t("whoThisIsFor")}
                </p>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  {serviceFor[active.slug]}
                </p>
              </motion.div>

              {article && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.14 }}
                >
                  <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-2.5">
                    {t("relatedReading")}
                  </p>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group/art flex items-center gap-3 border border-white/[0.06] hover:border-white/[0.12] px-4 py-3 transition-colors duration-200"
                  >
                    <FileText className="w-3.5 h-3.5 text-white/25 shrink-0 group-hover/art:text-white/50 transition-colors duration-200" />
                    <span className="text-[12px] text-white/40 group-hover/art:text-white/65 transition-colors duration-200 flex-1 line-clamp-1">
                      {article.title}
                    </span>
                    <span className="text-[9px] tracking-[0.14em] uppercase text-white/20 shrink-0">
                      {article.tag}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-white/20 shrink-0 group-hover/art:text-white/50 group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.20 }}
                className="mt-auto pt-2"
              >
                <Link
                  href={`/expertise/${active.slug}`}
                  className="group/svc inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase transition-all duration-200 hover:gap-3"
                  style={{ color: `rgba(${accent},0.52)` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = `rgba(${accent},0.82)`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = `rgba(${accent},0.52)`; }}
                >
                  {VIEW_LABEL[locale] ?? VIEW_LABEL.en}
                  <ArrowRight className="w-3 h-3 group-hover/svc:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

// ─── Root export ───────────────────────────────────────────
export default function AdvisorySection() {
  const t = useTranslations("AdvisorySection");
  const tServices = useTranslations("Services");
  const locale = useLocale();
  const isMobile = useIsMobile();

  return (
    <section id="advisory" className="py-14 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {!isMobile && <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.15]" />}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader t={t} />
        {isMobile
          ? <AdvisorySectionMobile t={t} tServices={tServices} locale={locale} />
          : <AdvisorySectionDesktop t={t} tServices={tServices} locale={locale} />
        }
      </div>
    </section>
  );
}
