"use client";

import { useState, useRef, useEffect, useId, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  ru: { code: "RU", name: "Русский" },
  uz: { code: "UZ", name: "O'zbek" },
};

function GbFlag() {
  const id = useId();
  const sId = `s${id}`;
  const tId = `t${id}`;
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="block w-full h-full">
      <clipPath id={sId}><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <clipPath id={tId}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
      <g clipPath={`url(#${sId})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${tId})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function RuFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice" className="block w-full h-full">
      <rect width="9" height="2" fill="#fff" />
      <rect y="2" width="9" height="2" fill="#0039A6" />
      <rect y="4" width="9" height="2" fill="#D52B1E" />
    </svg>
  );
}

function UzFlag() {
  return (
    <svg viewBox="0 0 500 250" preserveAspectRatio="xMidYMid slice" className="block w-full h-full">
      <rect width="500" height="80" fill="#0099B5" />
      <rect y="80" width="500" height="8" fill="#CE1126" />
      <rect y="88" width="500" height="74" fill="#FFFFFF" />
      <rect y="162" width="500" height="8" fill="#CE1126" />
      <rect y="170" width="500" height="80" fill="#1EB53A" />
    </svg>
  );
}

function FlagBadge({ locale, size = 18 }: { locale: Locale; size?: number }) {
  const Flag = locale === "ru" ? RuFlag : locale === "uz" ? UzFlag : GbFlag;
  return (
    <span
      className="inline-block rounded-full overflow-hidden shrink-0 ring-1 ring-white/15"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Flag />
    </span>
  );
}

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (next: Locale) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => {
      // @ts-expect-error -- pathname is dynamic
      router.replace({ pathname, params }, { locale: next });
    });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1.5 cursor-pointer transition-colors duration-200",
          compact
            ? "text-[12px] text-foreground/70 hover:text-foreground py-1"
            : "text-[12px] text-muted hover:text-foreground"
        )}
      >
        <FlagBadge locale={locale} size={17} />
        <span className="font-medium tracking-wide">{labels[locale].code}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 min-w-[160px] bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/[0.08] rounded shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden z-50"
          >
            {routing.locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchTo(l)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-[12px] tracking-wide transition-colors duration-150 cursor-pointer border-b border-white/[0.04] last:border-0",
                    active ? "text-foreground bg-white/[0.03]" : "text-muted hover:text-foreground hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <FlagBadge locale={l} size={16} />
                    <span>{labels[l].name}</span>
                  </div>
                  {active && <Check className="w-3 h-3 text-primary" strokeWidth={2} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
