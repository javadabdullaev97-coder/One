"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AuroraBackground({
  children,
  className,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className,
      )}
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden opacity-50" aria-hidden="true">
        <motion.div
          className="absolute inset-y-[-100%] w-[300%] left-0"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                #B22222 10%,
                #8B0000 15%,
                #DC143C 20%,
                #B22222 25%,
                #A0153E 30%)
            `,
            filter: "blur(80px)",
            willChange: "transform",
          }}
          animate={{ x: ["0%", "-66.67%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-y-[-10px] w-[200%] left-0"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                rgba(178, 34, 34, 0.1) 0%,
                rgba(178, 34, 34, 0.1) 7%,
                transparent 10%,
                transparent 12%,
                rgba(178, 34, 34, 0.1) 16%,
                #A01C1C 20%,
                #7A0A0A 25%,
                #C41A2A 30%,
                #A01C1C 35%,
                #8A1230 40%)
            `,
            mixBlendMode: "difference",
            willChange: "transform",
          }}
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
