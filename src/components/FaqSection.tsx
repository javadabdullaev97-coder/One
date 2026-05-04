"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLocale } from "next-intl";
import { FAQ_DATA, type FaqPage } from "@/lib/faqData";

type Locale = "en" | "ru" | "uz";

const HEADINGS: Record<Locale, string> = {
  en: "Frequently Asked Questions",
  ru: "Часто задаваемые вопросы",
  uz: "Ko'p so'raladigan savollar",
};

export default function FaqSection({ page }: { page: FaqPage }) {
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState<number | null>(null);
  const items = FAQ_DATA[page][locale] ?? FAQ_DATA[page].en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-24 md:py-32 bg-black border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="heading-luxury text-2xl md:text-3xl text-foreground mb-12 text-center">
          {HEADINGS[locale]}
        </h2>
        <div className="space-y-px">
          {items.map(({ q, a }, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white/90 font-medium">{q}</span>
                {open === i ? (
                  <Minus className="w-4 h-4 text-white/40 shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-white/40 shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-white/55 leading-relaxed">{a}</p>
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
