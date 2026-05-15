"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const isPopNav = useRef(false);

  useEffect(() => {
    const onPopState = () => { isPopNav.current = true; };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const key = `sp:${pathname}`;

    if (isPopNav.current) {
      isPopNav.current = false;
      const saved = sessionStorage.getItem(key);
      if (saved) {
        const y = parseInt(saved, 10);
        // Two rAFs: first lets React commit the DOM, second waits for paint
        requestAnimationFrame(() =>
          requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }))
        );
      }
    }

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

  return null;
}
