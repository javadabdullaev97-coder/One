"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  // Save scroll position on every scroll event
  useEffect(() => {
    const key = `sp:${pathname}`;
    let rafId: number;
    const save = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() =>
        sessionStorage.setItem(key, String(window.scrollY))
      );
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      window.removeEventListener("scroll", save);
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  // Restore on back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const key = `sp:${window.location.pathname}`;
      const saved = sessionStorage.getItem(key);
      if (!saved) return;
      const y = parseInt(saved, 10);
      if (y <= 0) return;

      // Attempt immediately, then retry at 50ms and 150ms.
      // Next.js resets scroll to 0 in a useEffect (~1 frame after render),
      // so we re-apply after that window to ensure our value wins.
      window.scrollTo({ top: y, behavior: "instant" });
      setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), 50);
      setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), 150);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
}
