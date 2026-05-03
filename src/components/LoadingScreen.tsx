"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_SHOWN_KEY = "advizen-loading-shown";
const FILL_DURATION = 0.6;
const FILL_DURATION_MS = FILL_DURATION * 1000;
const HIDE_BUFFER_MS = 180;
const FALLBACK_MAX_MS = 5000;

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(LOADING_SHOWN_KEY)) {
      setVisible(false);
      return;
    }

    let pageLoaded = document.readyState === "complete";
    let fillComplete = false;

    const tryHide = () => {
      if (!pageLoaded || !fillComplete) return;
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem(LOADING_SHOWN_KEY, "1");
      }, HIDE_BUFFER_MS);
    };

    const onPageLoaded = () => {
      pageLoaded = true;
      tryHide();
    };

    if (!pageLoaded) {
      window.addEventListener("load", onPageLoaded, { once: true });
    }

    setTimeout(() => {
      fillComplete = true;
      tryHide();
    }, FILL_DURATION_MS);

    setTimeout(() => {
      pageLoaded = true;
      fillComplete = true;
      tryHide();
    }, FALLBACK_MAX_MS);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="relative" style={{ width: 340 }}>
            {/* Dim ghost layer — always visible */}
            <Image
              src="/Loading.png"
              alt=""
              width={340}
              height={340}
              style={{ width: "340px", height: "auto", opacity: 0.1 }}
              priority
            />
            {/* Fill layer — reveals bottom to top */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ opacity: 0.5 }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: FILL_DURATION, ease: "easeOut" }}
            >
              <Image
                src="/Loading.png"
                alt=""
                width={340}
                height={340}
                style={{ width: "340px", height: "auto" }}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
