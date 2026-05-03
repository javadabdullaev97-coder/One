"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { X, ArrowLeft, ArrowRight, Check, Loader2, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlagBadge, type FlagCode } from "@/components/Flags";

const UZS_RATE = 12750;

export type LanguagePair = "uz_en" | "uz_ru" | "en_ru";
export type PaymentMethod = "payme" | "octopay";
type Step = 1 | 2 | 3 | 4 | 5;

const LANGUAGE_PAIRS: { id: LanguagePair; flags: [FlagCode, FlagCode]; codes: [string, string] }[] = [
  { id: "uz_en", flags: ["uz", "en"], codes: ["UZ", "EN"] },
  { id: "uz_ru", flags: ["uz", "ru"], codes: ["UZ", "RU"] },
  { id: "en_ru", flags: ["en", "ru"], codes: ["EN", "RU"] },
];

const PAYMENT_METHODS: {
  id: PaymentMethod;
  brands: string[];
}[] = [
  { id: "payme",   brands: ["Humo", "UzCard"] },
  { id: "octopay", brands: ["Humo", "UzCard", "Visa", "Mastercard"] },
];

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  productId: string | null;
  productTitle: string;
  priceUSD: number;
}

export default function CheckoutModal({ open, onClose, productId, productTitle, priceUSD }: CheckoutModalProps) {
  const tCheckout = useTranslations("Checkout");
  const locale = useLocale();
  const localePath = locale === "en" ? "" : `/${locale}`;
  const [step, setStep] = useState<Step>(1);
  const [language, setLanguage] = useState<LanguagePair | null>(null);
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [email, setEmail] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Reset state every time modal opens
  useEffect(() => {
    if (open) {
      setStep(1);
      setLanguage(null);
      setMethod(null);
      setEmail("");
    }
  }, [open]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Esc key closes modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const priceUZS = Math.round((priceUSD * UZS_RATE) / 50000) * 50000;
  const priceUZSFormatted = priceUZS.toLocaleString("en-US");

  // Auto-advance from redirect (step 3) to success (step 4) for preview.
  // Once real payment is wired, step 3 will redirect to PayMe/OctoPay and
  // success/error will be shown when the user returns to /store/success or
  // /store/cancelled.
  useEffect(() => {
    if (!open || step !== 3) return;
    const timer = setTimeout(() => {
      console.log("[checkout] would redirect", { productId, language, method, amount: priceUZS });
      setStep(4);
    }, 1800);
    return () => clearTimeout(timer);
  }, [open, step, productId, language, method, priceUZS]);

  const handleContinue = () => {
    if (step === 1 && language) setStep(2);
    else if (step === 2 && method && isValidEmail) setStep(3);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

  const handleDownload = () => {
    console.log("[checkout] download", { productId, language });
    // Wire to /api/checkout/download/${token} later
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl h-[700px] max-h-[calc(100vh-2rem)] flex flex-col bg-[#0B0B0B] border border-white/[0.08] rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-none flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/[0.06]">
              {step <= 3 ? (
                <Stepper
                  step={step as 1 | 2 | 3}
                  labels={[tCheckout("stepLanguage"), tCheckout("stepPayment"), tCheckout("stepConfirm")]}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      step === 4 ? "bg-emerald-400" : "bg-rose-400"
                    )}
                  />
                  <span className="text-[11px] tracking-[0.16em] uppercase text-white/55">
                    {step === 4 ? tCheckout("success.statusLabel") : tCheckout("error.statusLabel")}
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label={tCheckout("actions.close")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-1.5">{tCheckout("language.heading")}</h2>
                    <p className="text-sm text-white/45 mb-6">{tCheckout("language.subheading")}</p>

                    <div className="grid grid-cols-1 gap-2">
                      {LANGUAGE_PAIRS.map((pair) => {
                        const active = language === pair.id;
                        return (
                          <button
                            key={pair.id}
                            type="button"
                            onClick={() => setLanguage(pair.id)}
                            className={cn(
                              "group relative flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer",
                              active
                                ? "border-primary/60 bg-primary/[0.06]"
                                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.035]"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex -space-x-2">
                                <FlagBadge code={pair.flags[0]} size={26} />
                                <FlagBadge code={pair.flags[1]} size={26} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium tracking-wide text-foreground">
                                  {pair.codes[0]} <span className="text-white/30">·</span> {pair.codes[1]}
                                </span>
                                <span className="text-[11px] tracking-[0.12em] uppercase text-white/35 mt-0.5">
                                  {tCheckout(`language.${pair.id}`)}
                                </span>
                              </div>
                            </div>
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200",
                                active
                                  ? "border-primary bg-primary"
                                  : "border-white/15 group-hover:border-white/30"
                              )}
                            >
                              {active && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="heading-luxury text-xl text-foreground mb-1.5">{tCheckout("payment.heading")}</h2>
                    <p className="text-sm text-white/45 mb-5">{tCheckout("payment.subheading")}</p>

                    {/* Order summary */}
                    <div className="mb-5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("payment.documentLabel")}
                        </span>
                        <span className="text-sm text-foreground/85 text-right truncate">{productTitle}</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("payment.languageLabel")}
                        </span>
                        <span className="text-sm text-foreground/85">
                          {language && tCheckout(`language.${language}`)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("payment.totalLabel")}
                        </span>
                        <span className="text-base font-semibold text-foreground">
                          {priceUZSFormatted} <span className="text-white/45 text-sm font-normal">so&apos;m</span>
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                      <label htmlFor="checkout-email" className="text-[10px] tracking-[0.16em] uppercase text-white/35 block mb-2">
                        {tCheckout("payment.emailLabel")}
                      </label>
                      <input
                        id="checkout-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={tCheckout("payment.emailPlaceholder")}
                        autoComplete="email"
                        className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-white/25 focus:outline-none focus:border-white/[0.22] transition-colors"
                      />
                      <p className="mt-2 text-[11px] text-white/35">
                        {tCheckout("payment.emailHint")}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {PAYMENT_METHODS.map((pm) => {
                        const active = method === pm.id;
                        return (
                          <button
                            key={pm.id}
                            type="button"
                            onClick={() => setMethod(pm.id)}
                            className={cn(
                              "group relative flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer",
                              active
                                ? "border-primary/60 bg-primary/[0.06]"
                                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.18] hover:bg-white/[0.035]"
                            )}
                          >
                            <div className="flex flex-col gap-1">
                              <span className="heading-luxury text-base text-foreground tracking-wide">
                                {tCheckout(`payment.${pm.id}.name`)}
                              </span>
                              <span className="text-[11px] tracking-[0.1em] text-white/45">
                                {pm.brands.join(" · ")}
                              </span>
                            </div>
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200",
                                active
                                  ? "border-primary bg-primary"
                                  : "border-white/15 group-hover:border-white/30"
                              )}
                            >
                              {active && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="relative mb-6">
                      <Loader2 className="w-12 h-12 text-primary animate-spin" strokeWidth={1.5} />
                    </div>
                    <h2 className="heading-luxury text-xl text-foreground mb-2">
                      {tCheckout("redirect.heading", {
                        provider: method ? tCheckout(`payment.${method}.name`) : "",
                      })}
                    </h2>
                    <p className="text-sm text-white/45 max-w-sm">{tCheckout("redirect.subheading")}</p>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.05, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                      className="w-16 h-16 rounded-full bg-emerald-500/[0.08] ring-1 ring-emerald-500/30 flex items-center justify-center mb-5"
                    >
                      <Check className="w-7 h-7 text-emerald-400" strokeWidth={2.5} />
                    </motion.div>
                    <h2 className="heading-luxury text-xl text-foreground mb-2">{tCheckout("success.heading")}</h2>
                    <p className="text-sm text-white/45 max-w-sm mb-5">{tCheckout("success.subheading")}</p>

                    <div className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 mb-5 text-left">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("payment.documentLabel")}
                        </span>
                        <span className="text-sm text-foreground/85 text-right truncate">{productTitle}</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("payment.languageLabel")}
                        </span>
                        <span className="text-sm text-foreground/85">
                          {language && tCheckout(`language.${language}`)}
                        </span>
                      </div>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-white/35">
                          {tCheckout("success.amountLabel")}
                        </span>
                        <span className="text-base font-semibold text-foreground">
                          {priceUZSFormatted} <span className="text-white/45 text-sm font-normal">so&apos;m</span>
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleDownload}
                      className="w-full bg-primary hover:bg-primary-light text-foreground/95 hover:text-white px-5 py-3 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {tCheckout("success.download")}
                    </button>

                    <p className="mt-4 text-[11px] text-white/35 max-w-xs">
                      {tCheckout("success.emailSent", { email })}
                    </p>

                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="mt-6 text-[10px] tracking-[0.14em] uppercase text-white/20 hover:text-white/45 transition-colors cursor-pointer"
                    >
                      {tCheckout("preview.previewError")}
                    </button>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center pt-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.05, duration: 0.42, ease: [0.34, 1.56, 0.64, 1] }}
                      className="w-16 h-16 rounded-full bg-rose-500/[0.08] ring-1 ring-rose-500/30 flex items-center justify-center mb-5"
                    >
                      <X className="w-7 h-7 text-rose-400" strokeWidth={2.5} />
                    </motion.div>
                    <h2 className="heading-luxury text-xl text-foreground mb-2">{tCheckout("error.heading")}</h2>
                    <p className="text-sm text-white/45 max-w-sm mb-6">{tCheckout("error.subheading")}</p>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-primary hover:bg-primary-light text-foreground/95 hover:text-white px-5 py-3 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    >
                      {tCheckout("error.tryAgain")}
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-3 text-[11px] tracking-wide text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                    >
                      {tCheckout("error.support")}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="mt-6 text-[10px] tracking-[0.14em] uppercase text-white/20 hover:text-white/45 transition-colors cursor-pointer"
                    >
                      {tCheckout("preview.previewSuccess")}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {(step === 1 || step === 2) && (
              <div className="flex-none px-6 pt-4 pb-4 border-t border-white/[0.06] bg-black/40">
                <div className="flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-[12px] tracking-wide text-white/55 hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      {tCheckout("actions.back")}
                    </button>
                  ) : (
                    <span />
                  )}

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={(step === 1 && !language) || (step === 2 && (!method || !isValidEmail))}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-200",
                      (step === 1 && !language) || (step === 2 && (!method || !isValidEmail))
                        ? "bg-white/[0.05] text-white/25 cursor-not-allowed"
                        : "bg-primary hover:bg-primary-light text-foreground/95 hover:text-white cursor-pointer"
                    )}
                  >
                    {step === 1
                      ? tCheckout("actions.continue")
                      : tCheckout("actions.payNow", { amount: `${priceUZSFormatted} so'm` })}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {step === 2 && (
                  <p className="mt-2.5 text-[10px] text-white/30 text-center leading-relaxed">
                    {tCheckout.rich("actions.disclaimer", {
                      terms: (chunks) => (
                        <a
                          href={`${localePath}/terms-of-sale`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white/55 transition-colors"
                        >
                          {chunks}
                        </a>
                      ),
                      privacy: (chunks) => (
                        <a
                          href={`${localePath}/privacy`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white/55 transition-colors"
                        >
                          {chunks}
                        </a>
                      ),
                    })}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Stepper ────────────────────────────────────────── */

function Stepper({ step, labels }: { step: 1 | 2 | 3; labels: string[] }) {
  return (
    <div className="flex items-center gap-2">
      {labels.map((label, i) => {
        const n = (i + 1) as 1 | 2 | 3;
        const active = n === step;
        const done = n < step;
        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium transition-all duration-300",
                active && "bg-primary text-foreground/95",
                done && "bg-primary/30 text-primary-light",
                !active && !done && "bg-white/[0.06] text-white/35"
              )}
            >
              {done ? <Check className="w-2.5 h-2.5" strokeWidth={3} /> : n}
            </div>
            <span
              className={cn(
                "text-[11px] tracking-[0.12em] uppercase transition-colors duration-300",
                active ? "text-foreground" : done ? "text-white/55" : "text-white/30"
              )}
            >
              {label}
            </span>
            {i < labels.length - 1 && <div className="w-3 h-px bg-white/[0.08] mx-1" />}
          </div>
        );
      })}
    </div>
  );
}
