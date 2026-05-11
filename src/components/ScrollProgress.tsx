"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId: number;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress =
        scrollHeight <= clientHeight ? 0 : scrollTop / (scrollHeight - clientHeight);
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
