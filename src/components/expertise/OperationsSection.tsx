"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { operationsServices } from "@/lib/services";
import { cn } from "@/lib/utils";

const VIEW_LABEL: Record<string, string> = {
  en: "View full service page",
  ru: "Посмотреть страницу услуги",
  uz: "Xizmat sahifasini ko'rish",
};

const SHOWN_SLUGS = ["entity-management", "eor", "corporate", "virtual-office"];
const shownServices = SHOWN_SLUGS
  .map(slug => operationsServices.find(s => s.slug === slug))
  .filter(Boolean) as typeof operationsServices;


export default function OperationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const locale = useLocale();
  const t = useTranslations("OperationsSection");
  const tServices = useTranslations("Services");

  return (
    <section id="operations" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.06]">
      <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/4 right-0 translate-x-1/2 opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">{t("eyebrow")}</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                {t("heading")}
              </h2>
              <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
                {t("description")}
              </p>
            </div>
            <span className="hidden md:block font-serif text-[11px] tracking-[0.16em] uppercase text-white/18 shrink-0 pb-1">
              {t("servicesCount", { count: shownServices.length })}
            </span>
          </div>
        </AnimatedSection>

        <div className="border-t border-white/[0.07]">
          {shownServices.map((service, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative border-b border-white/[0.06] group/row transition-colors duration-200",
                  isOpen ? "bg-white/[0.018]" : "hover:bg-white/[0.01]"
                )}
              >
                {/* Left active bar */}
                <motion.span
                  animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
                />

                {/* Row header — full row is the toggle */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center py-6 md:py-7 pl-6 pr-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xs tabular-nums text-white/18 w-5 shrink-0">
                    {String(i + 1).padStart(2, "00")}
                  </span>

                  <span className={cn(
                    "heading-luxury text-lg md:text-xl flex-1 mx-5 md:mx-8 transition-colors duration-200",
                    isOpen ? "text-foreground" : "text-white/55 group-hover/row:text-white/85"
                  )}>
                    {tServices(`${service.slug}.title`)}
                  </span>

                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-6 pr-4 md:pr-8 border-t border-white/[0.04] pt-7">
                        <div className="flex flex-col gap-5 max-w-2xl">
                          <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.06 }}
                            className="text-[14px] text-white/52 leading-relaxed"
                          >
                            {tServices(`${service.slug}.description1`)}
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                            className="text-[14px] text-white/38 leading-relaxed"
                          >
                            {tServices(`${service.slug}.description2`)}
                          </motion.p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.18 }}
                          className="pt-6 mt-4"
                        >
                          <Link
                            href={`/expertise/${service.slug}`}
                            className="group/svc inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-primary/48 hover:text-primary/80 hover:gap-3 transition-all duration-200"
                          >
                            {VIEW_LABEL[locale] ?? VIEW_LABEL.en}
                            <ArrowUpRight className="w-3 h-3 group-hover/svc:translate-x-0.5 group-hover/svc:-translate-y-0.5 transition-transform duration-200" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
