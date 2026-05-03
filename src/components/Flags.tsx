"use client";

import { useId } from "react";
import type { Locale } from "@/i18n/routing";

export function GbFlag() {
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

export function RuFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice" className="block w-full h-full">
      <rect width="9" height="2" fill="#fff" />
      <rect y="2" width="9" height="2" fill="#0039A6" />
      <rect y="4" width="9" height="2" fill="#D52B1E" />
    </svg>
  );
}

export function UzFlag() {
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

export type FlagCode = Locale | "en" | "ru" | "uz";

export function FlagBadge({ code, size = 18 }: { code: FlagCode; size?: number }) {
  const Flag = code === "ru" ? RuFlag : code === "uz" ? UzFlag : GbFlag;
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
