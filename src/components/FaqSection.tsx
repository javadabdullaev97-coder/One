"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

type FaqNamespace = "HomeFAQ" | "ExpertiseFAQ" | "TemplatesFAQ";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection({ namespace }: { namespace: FaqNamespace }) {
  const t = useTranslations(namespace);
  const items = t.raw("items") as FaqItem[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-t border-white/[0.06]">
      <div className="ambient-glow ambient-glow-oxblood w-[600px] h-[600px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-[0.10]" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-12">
          <p className="tracking-luxury text-white/40 mb-3">{t("eyebrow")}</p>
          <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
            {t("heading")}
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-white/[0.06]">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left group cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200 leading-snug">
                  {item.q}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center mt-0.5 group-hover:border-primary/40 transition-colors duration-200">
                  {open === i
                    ? <Minus className="w-3 h-3 text-primary" />
                    : <Plus className="w-3 h-3 text-white/40 group-hover:text-primary transition-colors duration-200" />
                  }
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[14px] text-white/50 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
