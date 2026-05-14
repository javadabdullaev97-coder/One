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

export default function FaqSection({
  page,
  variant = "page",
}: {
  page: FaqPage;
  variant?: "page" | "sidebar";
}) {
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState<number | null>(null);
  const items = FAQ_DATA[page][locale] ?? FAQ_DATA[page].en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq-section h2", ".faq-question"],
    },
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  if (variant === "sidebar") {
    return (
      <div className="bg-[#080808] border border-white/[0.10] rounded-xl p-6 mt-3">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="text-[10px] tracking-[0.18em] uppercase text-white/50 mb-4">FAQ</p>
        <div className="space-y-px">
          {items.map(({ q, a }, i) => (
            <div key={i} className="border-b border-white/[0.07] last:border-b-0">
              <button
                className="w-full flex items-start justify-between py-3 text-left gap-3 focus-visible:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[12px] text-white/80 font-medium leading-snug">{q}</span>
                {open === i ? (
                  <Minus className="w-3 h-3 text-white/30 shrink-0 mt-0.5" />
                ) : (
                  <Plus className="w-3 h-3 text-white/30 shrink-0 mt-0.5" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, delay: 0.06 }}
                      className="pb-3 text-[11px] text-white/65 leading-relaxed"
                    >
                      {a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="faq-section" className="py-24 md:py-32 bg-black border-t border-white/5">
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
                <span className="faq-question text-white/90 font-medium">{q}</span>
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
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, delay: 0.06 }}
                      className="pb-5 text-white/55 leading-relaxed"
                    >
                      {a}
                    </motion.p>
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
