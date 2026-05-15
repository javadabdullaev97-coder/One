"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textRevealContainer,
  textRevealWord,
  lineRevealContainer,
  lineRevealItem,
} from "@/lib/animations";
import type { ReactNode } from "react";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  mode?: "word" | "line";
  delay?: number;
}

export default function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  mode = "word",
  delay = 0,
}: TextRevealProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  if (isMobile) {
    return <Tag className={className}>{text}</Tag>;
  }

  if (mode === "line") {
    const lines = text.split("\n");
    return (
      <Tag className={className}>
        <motion.span
          variants={lineRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          custom={delay}
          className="block"
        >
          {lines.map((line, i) => (
            <motion.span key={i} variants={lineRevealItem} className="block">
              {line}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        variants={textRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        custom={delay}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={textRevealWord}
            className="inline-block"
            style={{ marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ── Single-line paragraph reveal ──────────────────── */
interface RevealLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealLine({
  children,
  delay = 0,
  className = "",
}: RevealLineProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={lineRevealItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
