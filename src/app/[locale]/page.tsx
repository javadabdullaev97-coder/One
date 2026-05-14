"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ArrowRight, ArrowUpRight,
  Shield, Users, Lightbulb, Target, Handshake,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-[600px] mx-auto" />
    ),
  }
);
import UzbekistanMap from "@/components/UzbekistanMap";
import DisciplinesIntegration from "@/components/DisciplinesIntegration";
import InsightsSection from "@/components/InsightsSection";
import FaqSection from "@/components/FaqSection";

/* ── Region data ───────────────────── */

interface RegionData {
  name: string;
  population: string;
  gdp: string;
  sezs: string[];
  industries: string[];
}

const REGION_DATA: Record<string, RegionData> = {
  "UZ-AN": {
    name: "Andijan",
    population: "3.49M",
    gdp: "$8.98B",
    sezs: ["Andijan SEZ", "Qo'rg'ontepa FEZ"],
    industries: ["Automotive", "Textiles", "Chemicals", "Food Processing", "Engineering"],
  },
  "UZ-BU": {
    name: "Bukhara",
    population: "2.09M",
    gdp: "$7.22B",
    sezs: ["Bukhara FEZ"],
    industries: ["Oil & Gas", "Tourism", "Natural Gas Processing", "Textiles"],
  },
  "UZ-FA": {
    name: "Fergana",
    population: "4.18M",
    gdp: "$9.28B",
    sezs: ["Fergana SEZ"],
    industries: ["Oil Refining", "Chemicals", "Pharmaceuticals", "Textiles", "Silk"],
  },
  "UZ-JI": {
    name: "Jizzakh",
    population: "1.55M",
    gdp: "$4.41B",
    sezs: ["Jizzakh SEZ", "Paxtakor FEZ"],
    industries: ["Agriculture", "Food Processing", "Construction Materials", "Light Industry"],
  },
  "UZ-NG": {
    name: "Namangan",
    population: "3.16M",
    gdp: "$7.12B",
    sezs: ["Namangan SEZ"],
    industries: ["Textiles", "Food Processing", "Consumer Goods", "IT"],
  },
  "UZ-NW": {
    name: "Navoi",
    population: "1.10M",
    gdp: "$14.00B",
    sezs: ["Navoi FEZ", "NAIZ"],
    industries: ["Gold & Uranium Mining", "Chemicals", "Heavy Industry", "Logistics"],
  },
  "UZ-QA": {
    name: "Kashkadarya",
    population: "3.67M",
    gdp: "$8.23B",
    sezs: ["Karshi SEZ"],
    industries: ["Natural Gas", "Chemicals", "Petrochemicals", "Agriculture"],
  },
  "UZ-QR": {
    name: "Republic of Karakalpakstan",
    population: "2.04M",
    gdp: "$4.51B",
    sezs: ["Muynoq Development Zone"],
    industries: ["Agriculture", "Oil & Gas", "Fishing", "Cotton", "Tourism"],
  },
  "UZ-SA": {
    name: "Samarkand",
    population: "4.34M",
    gdp: "$10.12B",
    sezs: ["Samarkand SEZ", "Tourist FEZ"],
    industries: ["Tourism", "Food Processing", "Construction", "Education"],
  },
  "UZ-SI": {
    name: "Sirdaryo",
    population: "0.94M",
    gdp: "$2.98B",
    sezs: ["Sirdaryo Industrial Zone"],
    industries: ["Power Generation", "Chemicals", "Agriculture", "Cotton"],
  },
  "UZ-SU": {
    name: "Surkhandarya",
    population: "2.97M",
    gdp: "$5.52B",
    sezs: ["Termez SEZ"],
    industries: ["Oil & Gas", "Agriculture", "Cross-border Trade", "Tourism"],
  },
  "UZ-TK": {
    name: "Tashkent City",
    population: "3.15M",
    gdp: "$30.60B",
    sezs: ["IT Park Uzbekistan", "Tashkent FEZ"],
    industries: ["Finance", "IT & Tech", "Services", "Trade", "Real Estate"],
  },
  "UZ-TO": {
    name: "Tashkent Region",
    population: "3.13M",
    gdp: "$15.01B",
    sezs: ["Angren SEZ", "Chirchiq Industrial Zone"],
    industries: ["Chemicals", "Mining", "Manufacturing", "Energy", "Agriculture"],
  },
  "UZ-XO": {
    name: "Khorezm",
    population: "2.05M",
    gdp: "$5.25B",
    sezs: ["Urgench FEZ"],
    industries: ["Agriculture", "Tourism (Khiva)", "Light Industry", "Handicrafts"],
  },
};

const REGION_IMAGE: Record<string, string> = {
  "UZ-AN": "/Regions/Andijan.webp",
  "UZ-BU": "/Regions/Bukhara.webp",
  "UZ-FA": "/Regions/Fergana.webp",
  "UZ-JI": "/Regions/Jizzakh.webp",
  "UZ-QR": "/Regions/Karakalpakstan.webp",
  "UZ-QA": "/Regions/Kashkadarya.webp",
  "UZ-XO": "/Regions/Khiva.webp",
  "UZ-NG": "/Regions/Namangan.webp",
  "UZ-NW": "/Regions/Navoi.webp",
  "UZ-SA": "/Regions/Samarkand.webp",
  "UZ-SU": "/Regions/Surkhandarya.webp",
  "UZ-SI": "/Regions/Syrdarya.webp",
  "UZ-TK": "/Regions/Tashkent City.webp",
  "UZ-TO": "/Regions/Tashkent region.webp",
};

/* ── Region info panel ───────────────── */

function RegionInfoPanel({ activeId }: { activeId: string | null }) {
  const region = activeId ? REGION_DATA[activeId] : null;
  const t = useTranslations("Home.geography.panel");
  const tRegions = useTranslations("Home.geography.regions");
  const regionName = activeId ? tRegions(activeId) : "";

  return (
    <div className="min-h-[300px] lg:h-[560px] overflow-hidden relative">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeId ?? "default"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col"
        >
          {region ? (
            <>
              {/* Region image */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-white/[0.06]"
                style={{ background: "linear-gradient(135deg, rgba(122,26,26,0.22) 0%, #080808 65%)" }}>
                <Image
                  src={REGION_IMAGE[activeId ?? ""] ?? "/Regions/Andijan.webp"}
                  alt={regionName}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="480px"
                />
                {/* bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808]/70 to-transparent pointer-events-none" />
              </div>

              {/* Region name */}
              <h3 className="heading-luxury text-xl md:text-2xl text-foreground mb-4">
                {regionName}
              </h3>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="border border-white/[0.06] px-3 py-2.5 rounded-lg bg-white/[0.02]">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-1">{t("population")}</p>
                  <p className="text-foreground font-light text-lg tabular-nums">{region.population}</p>
                </div>
                <div className="border border-white/[0.06] px-3 py-2.5 rounded-lg bg-white/[0.02]">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-1">{t("regionalGdp")}</p>
                  <p className="text-foreground font-light text-lg tabular-nums">{region.gdp}</p>
                </div>
              </div>

              {/* SEZs */}
              <div className="mb-4">
                <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-2">
                  {t("sezs")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {region.sezs.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-white/55 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key sectors */}
              <div>
                <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-2">{t("keySectors")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {region.industries.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-white/55 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-white/25 text-sm tracking-wider">{t("hint")}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Page ────────────── */

export default function Home() {
  const [activeRegionId, setActiveRegionId] = useState<string | null>("UZ-TK");
  const handleActiveChange = useCallback((id: string | null) => {
    setActiveRegionId(id);
  }, []);

  const geoSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = geoSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        Object.values(REGION_IMAGE).forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
        observer.disconnect();
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const t = useTranslations("Home");
  const tValues = useTranslations("Home.values.items");

  const firmValues = [
    {
      id: 1, title: tValues("oneStop.title"), date: "",
      content: tValues("oneStop.content"),
      category: tValues("oneStop.category"), icon: Target, relatedIds: [2, 3], status: "completed" as const, energy: 100,
    },
    {
      id: 2, title: tValues("clientFirst.title"), date: "",
      content: tValues("clientFirst.content"),
      category: tValues("clientFirst.category"), icon: Handshake, relatedIds: [1, 5], status: "completed" as const, energy: 95,
    },
    {
      id: 3, title: tValues("localExpertise.title"), date: "",
      content: tValues("localExpertise.content"),
      category: tValues("localExpertise.category"), icon: Lightbulb, relatedIds: [1, 4], status: "completed" as const, energy: 90,
    },
    {
      id: 4, title: tValues("trustedTeam.title"), date: "",
      content: tValues("trustedTeam.content"),
      category: tValues("trustedTeam.category"), icon: Users, relatedIds: [3, 5], status: "completed" as const, energy: 85,
    },
    {
      id: 5, title: tValues("integrity.title"), date: "",
      content: tValues("integrity.content"),
      category: tValues("integrity.category"), icon: Shield, relatedIds: [2, 4], status: "completed" as const, energy: 100,
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Integrated Coverage ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-8 md:mb-10 text-center">
              <p className="tracking-luxury text-muted-dark mb-4">{t("coverage.eyebrow")}</p>
              <TextReveal
                text={t("coverage.heading")}
                as="h2"
                className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground"
              />
              <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
                {t("coverage.description")}
              </p>
            </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisciplinesIntegration />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 flex justify-center">
            <MagneticButton variant="outline" as="a" href="/expertise">
              {t("coverage.cta")}
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Geography ── */}
      <section ref={geoSectionRef} className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-10 md:mb-12">
            <p className="tracking-luxury text-muted-dark mb-3">{t("geography.eyebrow")}</p>
            <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
              {t("geography.heading")}
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[5fr_3fr] gap-8 lg:gap-14 items-start">
            {/* Map */}
            <AnimatedSection delay={0.05}>
              <UzbekistanMap onActiveChange={handleActiveChange} />
            </AnimatedSection>

            {/* Region info panel */}
            <AnimatedSection delay={0.15} className="lg:sticky lg:top-28">
              <RegionInfoPanel activeId={activeRegionId} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── What We Stand For — Orbital Values ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <AnimatedSection>
                <p className="tracking-luxury text-muted-dark mb-4">{t("values.eyebrow")}</p>
                <TextReveal
                  text={t("values.heading")}
                  as="h2"
                  className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-6"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-white/50 leading-relaxed mb-4">
                  {t("values.p1")}
                </p>
                <p className="text-white/40 leading-relaxed mb-10">
                  {t("values.p2")}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-white/30 text-sm mb-8 italic">{t("values.tap")}</p>
              </AnimatedSection>
            </div>
            <div>
              <RadialOrbitalTimeline timelineData={firmValues} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Insights Preview ── */}
      <InsightsSection />

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
              <p className="tracking-luxury text-muted-dark mb-6">{t("cta.eyebrow")}</p>
              <TextReveal
                text={t("cta.heading")}
                as="h2"
                className="heading-luxury text-2xl md:text-3xl lg:text-5xl text-foreground mb-6 leading-tight"
              />
              <p className="text-white/55 max-w-xl mx-auto mb-12 leading-relaxed">
                {t("cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary" as="a" href="/contact">
                  {t("cta.primary")}
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton variant="outline" as="a" href="/expertise">
                  {t("cta.secondary")}
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection page="home" />
    </>
  );
}
